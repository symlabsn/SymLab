// Données détaillées des simulations du collège avec analogies sénégalaises
// Complètes pour 6ème, 5ème, 4ème et 3ème (BFEM)

export const collegeSimulationsData = {
    // ========== 6ÈME ==========
    'cell-structure': {
        title: 'Structure de la Cellule',
        description: 'Découvrez l\'intérieur d\'une cellule vivante en 3D',
        type: 'cell',
        config: {},
        analogy: {
            title: 'La Cellule comme un Marché Sandaga',
            content: `Imagine la cellule comme le grand marché Sandaga de Dakar ! 🏪

La membrane cellulaire est comme les portes du marché - elle contrôle qui entre et qui sort.

Le noyau est le bureau du chef du marché - c'est là que toutes les décisions importantes sont prises.

Les mitochondries sont comme les générateurs électriques - elles fournissent l'énergie pour tout faire fonctionner.

Les ribosomes sont les artisans qui fabriquent les produits (protéines) vendus au marché.

Tout comme Sandaga est organisé avec différentes sections, la cellule a des organites spécialisés !`
        },
        theory: `La Cellule : Unité de Vie

La cellule est l'unité fondamentale de tout être vivant. Elle contient tous les éléments nécessaires pour maintenir la vie.

Organites Principaux

Membrane Cellulaire
- Enveloppe protectrice
- Contrôle les échanges avec l'extérieur
- Composée de lipides et protéines

Noyau
- Contient l'ADN (information génétique)
- Centre de contrôle de la cellule
- Entouré d'une membrane nucléaire

Mitochondries
- Centrales énergétiques de la cellule
- Produisent l'ATP (énergie)
- Possèdent leur propre ADN

Ribosomes
- Synthèse des protéines
- Présents dans le cytoplasme
- Peuvent être liés au réticulum endoplasmique

Différences Cellule Animale vs Végétale

Cellule Végétale
- Paroi cellulaire rigide
- Chloroplastes (photosynthèse)
- Grande vacuole centrale

Cellule Animale
- Pas de paroi cellulaire
- Pas de chloroplastes
- Petites vacuoles`,
        exercises: [
            {
                question: 'Quel organite produit l\'énergie dans la cellule ?',
                options: ['Noyau', 'Ribosome', 'Mitochondrie', 'Vacuole'],
                correct: 2,
                explanation: 'Les mitochondries sont les centrales énergétiques de la cellule, comme les générateurs au marché Sandaga !'
            },
            {
                question: 'Où se trouve l\'ADN dans la cellule ?',
                options: ['Cytoplasme', 'Noyau', 'Membrane', 'Ribosome'],
                correct: 1,
                explanation: 'L\'ADN se trouve dans le noyau, le centre de contrôle de la cellule.'
            }
        ],
        relatedSimulations: ['photosynthesis', 'digestive-system', 'blood-circulation']
    },

    'photosynthesis': {
        title: 'La Photosynthèse',
        description: 'Visualisez le processus de photosynthèse dans une feuille',
        type: 'plant-cell',
        config: {},
        analogy: {
            title: 'La Photosynthèse comme une Cuisine Solaire',
            content: `La photosynthèse, c'est comme cuisiner avec l'énergie du soleil sénégalais ! ☀️

Les feuilles sont comme des panneaux solaires qui captent la lumière.

Le chloroplaste est la cuisine où se prépare le repas énergétique.

L'eau (H₂O) vient des racines, comme l'eau du robinet pour cuisiner.

Le CO₂ est pris dans l'air, comme les épices qu'on ajoute.

Le glucose produit est le thiéboudienne (plat énergétique) de la plante !

L'oxygène libéré est le cadeau que les plantes nous offrent pour respirer.`
        },
        theory: `La Photosynthèse

La photosynthèse est le processus par lequel les plantes transforment l'énergie lumineuse en énergie chimique.

Équation Globale
6 CO₂ + 6 H₂O + Lumière → C₆H₁₂O₆ + 6 O₂

Les Étapes

1. Capture de la Lumière
- Les chloroplastes contiennent la chlorophylle
- La chlorophylle absorbe la lumière (surtout rouge et bleue)
- Donne la couleur verte aux plantes

2. Réactions Lumineuses
- Se déroulent dans les thylakoïdes
- Production d'ATP et NADPH
- Libération d'oxygène (O₂)

3. Cycle de Calvin (Réactions Sombres)
- Se déroule dans le stroma
- Fixation du CO₂
- Production de glucose (C₆H₁₂O₆)

Importance
- Source d'oxygène pour la respiration
- Base de toutes les chaînes alimentaires
- Régulation du CO₂ atmosphérique`,
        exercises: [
            {
                question: 'Quel gaz est absorbé pendant la photosynthèse ?',
                options: ['Oxygène (O₂)', 'Azote (N₂)', 'Dioxyde de carbone (CO₂)', 'Hydrogène (H₂)'],
                correct: 2,
                explanation: 'Les plantes absorbent le CO₂ de l\'air, comme on prend des épices pour cuisiner !'
            },
            {
                question: 'Quel pigment donne la couleur verte aux plantes ?',
                options: ['Carotène', 'Chlorophylle', 'Xanthophylle', 'Anthocyane'],
                correct: 1,
                explanation: 'La chlorophylle est le pigment vert qui capte la lumière du soleil.'
            }
        ],
        relatedSimulations: ['cell-structure', 'ecosystem-dynamics', 'water-cycle']
    },

    'states-of-matter': {
        title: 'États de la Matière',
        description: 'Observez les transitions solide-liquide-gaz au niveau moléculaire',
        type: 'states-of-matter',
        config: { protons: 1, neutrons: 0, electrons: 1 },
        analogy: {
            title: 'Les États de la Matière comme la Danse du Sabar',
            content: `Les molécules sont comme des danseurs de sabar ! 💃🕺

État SOLIDE (Glace)
Les danseurs sont serrés, épaule contre épaule, ne bougeant presque pas.
Comme les gens assis pendant la cérémonie avant que la musique commence.

État LIQUIDE (Eau)
Les danseurs bougent librement mais restent proches.
Comme pendant le sabar, on danse ensemble mais on peut se déplacer !

État GAZEUX (Vapeur)
Les danseurs sont partout dans la salle, très espacés, bougeant rapidement.
Comme quand tout le monde danse librement dans tout l'espace !

La température est comme l'intensité de la musique - plus c'est chaud, plus ça bouge !`
        },
        theory: `Les États de la Matière

La matière existe sous trois états principaux : solide, liquide et gazeux.

État Solide
- Forme et volume définis
- Molécules très proches et organisées
- Vibrations faibles
- Exemple : glace, fer, sel

État Liquide
- Volume défini, forme variable
- Molécules proches mais mobiles
- Prend la forme du récipient
- Exemple : eau, huile, lait

État Gazeux
- Ni forme ni volume définis
- Molécules très espacées et rapides
- Occupe tout l'espace disponible
- Exemple : air, vapeur d'eau, CO₂

Changements d'État

Fusion : Solide → Liquide (chauffage)
Solidification : Liquide → Solide (refroidissement)
Vaporisation : Liquide → Gaz (chauffage)
Condensation : Gaz → Liquide (refroidissement)
Sublimation : Solide → Gaz direct`,
        exercises: [
            {
                question: 'Que se passe-t-il quand on chauffe de la glace ?',
                options: ['Elle se solidifie', 'Elle fond (fusion)', 'Elle se condense', 'Elle se sublime'],
                correct: 1,
                explanation: 'La glace fond et devient liquide, comme les danseurs qui commencent à bouger quand la musique monte !'
            },
            {
                question: 'Dans quel état les molécules sont-elles le plus espacées ?',
                options: ['Solide', 'Liquide', 'Gazeux', 'Toutes pareilles'],
                correct: 2,
                explanation: 'À l\'état gazeux, les molécules sont très espacées, comme des danseurs partout dans la salle !'
            }
        ],
        relatedSimulations: ['water-cycle', 'chemical-reactions', 'energy-conservation']
    },

    'simple-circuits': {
        title: 'Circuits Électriques Simples',
        description: 'Construisez et testez des circuits avec piles et ampoules',
        type: 'circuit',
        config: {},
        analogy: {
            title: 'Le Circuit Électrique comme le Réseau de Car Rapide',
            content: `Un circuit électrique, c'est comme le réseau de transport de Dakar ! 🚌

La pile est comme la gare routière - c'est là que tout commence et finit.

Les fils électriques sont comme les routes - ils transportent les passagers (électrons).

L'ampoule est comme un marché où les gens descendent et dépensent leur énergie.

Les électrons sont comme les passagers dans les cars rapides - ils circulent en boucle !

Un circuit ouvert = route bloquée, les cars ne passent pas.
Un circuit fermé = route libre, les cars circulent !

Plus il y a de passagers (courant fort), plus l'ampoule brille !`
        },
        theory: `Circuits Électriques Simples

Un circuit électrique est un chemin fermé permettant la circulation du courant.

Composants de Base

Générateur (Pile)
- Fournit l'énergie électrique
- Possède deux bornes : + et -
- Crée une différence de potentiel (tension)

Fils Conducteurs
- Transportent le courant
- Généralement en cuivre
- Relient les composants

Récepteurs (Ampoule, Moteur)
- Utilisent l'énergie électrique
- Transforment l'énergie (lumière, mouvement)

Interrupteur
- Ouvre ou ferme le circuit
- Contrôle le passage du courant

Lois Fondamentales

Circuit Fermé
- Le courant circule
- Les récepteurs fonctionnent

Circuit Ouvert
- Le courant ne circule pas
- Les récepteurs ne fonctionnent pas

Sens du Courant
- Conventionnel : de + vers -
- Réel (électrons) : de - vers +`,
        exercises: [
            {
                question: 'Que faut-il pour qu\'une ampoule s\'allume ?',
                options: ['Un circuit ouvert', 'Un circuit fermé', 'Juste une pile', 'Juste des fils'],
                correct: 1,
                explanation: 'Il faut un circuit fermé, comme une route libre pour que les cars circulent !'
            },
            {
                question: 'Quel composant fournit l\'énergie dans un circuit ?',
                options: ['L\'ampoule', 'Les fils', 'La pile', 'L\'interrupteur'],
                correct: 2,
                explanation: 'La pile est le générateur, comme la gare routière d\'où partent les cars !'
            }
        ],
        relatedSimulations: ['electromagnetic-induction', 'forces-motion', 'energy-conservation']
    },

    // ========== 5ÈME ==========
    'digestive-system': {
        title: 'Système Digestif',
        description: 'Suivez le parcours des aliments dans le corps humain',
        type: 'digestive',
        config: {},
        analogy: {
            title: 'Le Système Digestif comme une Usine de Thiéboudienne',
            content: `Le système digestif, c'est comme une grande usine qui transforme le thiéboudienne ! 🍚

La bouche est l'entrée de l'usine - on découpe et on mâche (mastication).

L'œsophage est le tapis roulant qui transporte la nourriture.

L'estomac est le grand mixeur - il broie et mélange avec des acides.

L'intestin grêle est la chaîne de production - c'est là qu'on extrait tous les nutriments utiles.

Le foie et le pancréas sont les chefs cuisiniers qui ajoutent les enzymes (sauces spéciales).

Le gros intestin récupère l'eau, comme on récupère le jus de cuisson.

Ce qui reste est évacué - les déchets de l'usine !`
        },
        theory: `Le Système Digestif

Le système digestif transforme les aliments en nutriments absorbables par le corps.

Les Organes

Bouche
- Mastication (dents)
- Salive (enzyme amylase)
- Déglutition

Œsophage
- Tube musculaire
- Péristaltisme (contractions)
- Transport vers l'estomac

Estomac
- Brassage mécanique
- Suc gastrique (acide chlorhydrique)
- Digestion des protéines

Intestin Grêle
- 6-7 mètres de long
- Absorption des nutriments
- Villosités intestinales

Foie et Pancréas
- Production de bile
- Enzymes digestives
- Régulation glycémique

Gros Intestin
- Absorption d'eau
- Formation des selles
- Flore intestinale

Processus
Ingestion → Digestion → Absorption → Élimination`,
        exercises: [
            {
                question: 'Où commence la digestion des aliments ?',
                options: ['Estomac', 'Bouche', 'Intestin', 'Œsophage'],
                correct: 1,
                explanation: 'La digestion commence dans la bouche avec la mastication et la salive !'
            },
            {
                question: 'Quel organe absorbe les nutriments ?',
                options: ['Estomac', 'Œsophage', 'Intestin grêle', 'Gros intestin'],
                correct: 2,
                explanation: 'L\'intestin grêle absorbe les nutriments, comme l\'usine extrait les bons ingrédients !'
            }
        ],
        relatedSimulations: ['cell-structure', 'blood-circulation', 'nervous-system']
    },

    'blood-circulation': {
        title: 'Circulation Sanguine',
        description: 'Explorez le cœur et le système circulatoire en 3D',
        type: 'blood',
        config: {},
        analogy: {
            title: 'La Circulation Sanguine comme le Réseau Routier du Sénégal',
            content: `Le système circulatoire, c'est comme le réseau routier qui connecte tout le Sénégal ! 🛣️

Le cœur est comme le rond-point de l'Obélisque - tout passe par là et est redistribué.

Les artères sont les autoroutes (comme la VDN) - elles transportent le sang riche en oxygène rapidement.

Les veines sont les routes de retour - elles ramènent le sang vers le cœur.

Les capillaires sont les petites rues des quartiers - c'est là que se font les échanges avec les maisons (cellules).

Les globules rouges sont comme les cars rapides qui transportent l'oxygène (passagers).

Les globules blancs sont la police qui protège contre les intrus (microbes).

Le sang fait le tour complet du corps en moins d'une minute - plus rapide qu'un car Dakar-Touba !`
        },
        theory: `La Circulation Sanguine

Le système circulatoire transporte l'oxygène, les nutriments et élimine les déchets.

Le Cœur

Structure
- 4 cavités : 2 oreillettes, 2 ventricules
- Muscle cardiaque (myocarde)
- Valves (empêchent le reflux)

Fonctionnement
- Contraction (systole)
- Relaxation (diastole)
- 60-100 battements/minute au repos

Les Vaisseaux Sanguins

Artères
- Parois épaisses et élastiques
- Transportent le sang du cœur
- Sang riche en O₂ (sauf artère pulmonaire)

Veines
- Parois plus fines
- Transportent le sang vers le cœur
- Sang pauvre en O₂ (sauf veine pulmonaire)

Capillaires
- Très fins (épaisseur d'une cellule)
- Échanges avec les tissus
- Réseau très dense

Double Circulation

Petite circulation (pulmonaire)
Cœur → Poumons → Cœur
(Oxygénation du sang)

Grande circulation (systémique)
Cœur → Corps → Cœur
(Distribution O₂ et nutriments)`,
        exercises: [
            {
                question: 'Combien de cavités possède le cœur ?',
                options: ['2', '3', '4', '5'],
                correct: 2,
                explanation: 'Le cœur a 4 cavités : 2 oreillettes et 2 ventricules, comme 4 directions au rond-point !'
            },
            {
                question: 'Quel vaisseau transporte le sang du cœur vers le corps ?',
                options: ['Veine', 'Artère', 'Capillaire', 'Lymphatique'],
                correct: 1,
                explanation: 'Les artères transportent le sang du cœur, comme les autoroutes partent du centre-ville !'
            }
        ],
        relatedSimulations: ['digestive-system', 'cell-structure', 'immune-system']
    },

    'water-cycle': {
        title: 'Cycle de l\'Eau',
        description: 'Visualisez l\'évaporation, condensation et précipitation',
        type: 'water-cycle',
        config: {},
        analogy: {
            title: 'Le Cycle de l\'Eau comme le Voyage du Fleuve Sénégal',
            content: `Le cycle de l'eau, c'est comme un voyage sans fin du fleuve Sénégal ! 🌊

Évaporation : Le soleil chauffe l'eau du fleuve et de l'océan Atlantique.
L'eau devient vapeur et monte dans le ciel, comme la fumée du thiakry qui refroidit.

Condensation : En altitude, la vapeur refroidit et forme des nuages.
Comme quand on souffle sur une vitre froide et ça fait de la buée !

Précipitation : Les nuages deviennent lourds et la pluie tombe.
C'est l'hivernage qui arrose nos champs de mil et d'arachides !

Ruissellement : L'eau coule dans les marigots et retourne au fleuve.
Le cycle recommence - l'eau ne se perd jamais, elle voyage !`
        },
        theory: `Le Cycle de l'Eau

L'eau circule en permanence entre l'océan, l'atmosphère et la terre.

Les Étapes

1. Évaporation
- Transformation liquide → gaz
- Énergie du soleil
- Principalement des océans (97%)

2. Transpiration
- Évaporation par les plantes
- Évapotranspiration
- Contribue à l'humidité

3. Condensation
- Vapeur → gouttelettes
- Formation des nuages
- Refroidissement en altitude

4. Précipitation
- Pluie, neige, grêle
- Retour de l'eau sur terre
- Distribution inégale

5. Infiltration
- Eau pénètre dans le sol
- Nappes phréatiques
- Eau souterraine

6. Ruissellement
- Eau coule en surface
- Rivières et fleuves
- Retour à l'océan

Importance
- Renouvellement de l'eau douce
- Régulation du climat
- Vie sur Terre`,
        exercises: [
            {
                question: 'Quel phénomène transforme l\'eau liquide en vapeur ?',
                options: ['Condensation', 'Évaporation', 'Précipitation', 'Infiltration'],
                correct: 1,
                explanation: 'L\'évaporation transforme l\'eau en vapeur grâce au soleil !'
            },
            {
                question: 'Que forment les gouttelettes d\'eau en altitude ?',
                options: ['Pluie', 'Nuages', 'Brouillard', 'Rosée'],
                correct: 1,
                explanation: 'Les gouttelettes forment les nuages par condensation !'
            }
        ],
        relatedSimulations: ['states-of-matter', 'photosynthesis', 'plate-tectonics']
    },

    'light-reflection': {
        title: 'Réflexion de la Lumière',
        description: 'Expérimentez avec miroirs et rayons lumineux',
        type: 'wave',
        config: {},
        analogy: {
            title: 'La Réflexion de la Lumière comme le Jeu de Miroirs au Marché',
            content: `La réflexion de la lumière, c'est comme les miroirs des tailleurs au marché HLM ! ✨

Miroir plan : Comme le miroir du tailleur - ton reflet est identique mais inversé.
Si tu lèves la main droite, ton reflet lève la gauche !

Angle d'incidence = Angle de réflexion : C'est comme jouer au foot contre un mur.
Si tu tires à 45°, le ballon rebondit à 45° de l'autre côté !

Miroirs courbes : Comme les cuillères brillantes.
- Miroir concave (creux) : grossit l'image, comme une loupe
- Miroir convexe (bombé) : rapetisse l'image, vision plus large

Les rayons lumineux voyagent en ligne droite, comme les cars rapides sur une route droite !`
        },
        theory: `Réflexion de la Lumière

La lumière se réfléchit sur les surfaces selon des lois précises.

Lois de la Réflexion

1ère Loi
Le rayon incident, le rayon réfléchi et la normale sont dans le même plan.

2ème Loi
Angle d'incidence (i) = Angle de réflexion (r)

Types de Réflexion

Réflexion Spéculaire
- Surface lisse (miroir)
- Image nette
- Rayons parallèles restent parallèles

Réflexion Diffuse
- Surface rugueuse
- Pas d'image nette
- Rayons dispersés

Types de Miroirs

Miroir Plan
- Surface plate
- Image virtuelle
- Même taille que l'objet
- Symétrie gauche-droite

Miroir Concave
- Surface creuse
- Image peut être réelle ou virtuelle
- Peut grossir l'image

Miroir Convexe
- Surface bombée
- Image toujours virtuelle
- Image réduite
- Champ de vision large

Applications
- Rétroviseurs
- Télescopes
- Phares de voiture
- Maquillage`,
        exercises: [
            {
                question: 'Si l\'angle d\'incidence est de 30°, quel est l\'angle de réflexion ?',
                options: ['15°', '30°', '60°', '90°'],
                correct: 1,
                explanation: 'L\'angle de réflexion est toujours égal à l\'angle d\'incidence : 30° !'
            },
            {
                question: 'Quel type de miroir est utilisé dans les rétroviseurs de voiture ?',
                options: ['Plan', 'Concave', 'Convexe', 'Cylindrique'],
                correct: 2,
                explanation: 'Les rétroviseurs utilisent des miroirs convexes pour un champ de vision plus large !'
            }
        ],
        relatedSimulations: ['states-of-matter', 'wave-interference', 'electromagnetic-induction']
    },

    // ========== 4ÈME ==========
    'nervous-system': {
        title: 'Système Nerveux',
        description: 'Découvrez comment les neurones transmettent l\'information',
        type: 'neuron',
        config: {},
        analogy: {
            title: 'Le Système Nerveux comme le Réseau Téléphonique Sonatel',
            content: `Le système nerveux, c'est comme le réseau de télécommunication du Sénégal ! 📡

Le cerveau est le centre d'appels principal à Dakar - il reçoit et traite toutes les informations.

La moelle épinière est le câble principal qui descend le long du pays.

Les nerfs sont les lignes téléphoniques qui vont dans chaque quartier, chaque maison.

Les neurones sont comme les opérateurs téléphoniques - ils transmettent les messages.

Un réflexe est comme un message d'urgence qui prend un raccourci direct, sans passer par le centre !

Les synapses sont les relais téléphoniques où le message passe d'un neurone à l'autre.

Tout ça se passe à la vitesse de la lumière - plus rapide qu'un appel Whatsapp !`
        },
        theory: `Le Système Nerveux

Le système nerveux contrôle et coordonne toutes les fonctions du corps.

Organisation

Système Nerveux Central (SNC)
- Cerveau
- Moelle épinière
- Traitement de l'information

Système Nerveux Périphérique (SNP)
- Nerfs sensitifs (afférents)
- Nerfs moteurs (efférents)
- Transmission des messages

Le Neurone

Structure
- Corps cellulaire (soma)
- Dendrites (réception)
- Axone (transmission)
- Terminaisons synaptiques

Fonctionnement
- Potentiel de repos (-70mV)
- Potentiel d'action (influx nerveux)
- Vitesse : jusqu'à 100 m/s

La Synapse

Transmission
- Synapse chimique
- Neurotransmetteurs
- Récepteurs

L'Arc Réflexe

Étapes
1. Stimulus (ex: toucher chaud)
2. Récepteur sensoriel
3. Neurone sensitif
4. Moelle épinière
5. Neurone moteur
6. Muscle (réaction)

Temps de réaction : 0,1 à 0,2 secondes !`,
        exercises: [
            {
                question: 'Quelle est l\'unité de base du système nerveux ?',
                options: ['Cellule', 'Neurone', 'Synapse', 'Axone'],
                correct: 1,
                explanation: 'Le neurone est l\'unité de base, comme l\'opérateur dans le réseau téléphonique !'
            },
            {
                question: 'Où se trouve le centre de contrôle du système nerveux ?',
                options: ['Moelle épinière', 'Nerfs', 'Cerveau', 'Muscles'],
                correct: 2,
                explanation: 'Le cerveau est le centre de contrôle, comme le centre d\'appels principal !'
            }
        ],
        relatedSimulations: ['blood-circulation', 'immune-system', 'neurotransmission']
    },

    'plate-tectonics': {
        title: 'Tectonique des Plaques',
        description: 'Observez les mouvements des plaques terrestres',
        type: 'tectonics',
        config: {},
        analogy: {
            title: 'La Tectonique des Plaques comme les Pirogues sur l\'Océan',
            content: `Les plaques tectoniques, c'est comme des pirogues géantes qui flottent sur l'océan ! 🌍

La lithosphère (croûte terrestre) est comme les pirogues en bois.

L'asthénosphère (manteau) est comme l'océan sur lequel flottent les pirogues.

Les plaques bougent lentement, comme les pirogues poussées par les courants.

Quand deux pirogues se rencontrent :
- Divergence : elles s'éloignent (comme à la dorsale atlantique)
- Convergence : elles se heurtent (montagnes !)
- Coulissage : elles glissent l'une contre l'autre

Les séismes sont comme les chocs quand les pirogues se cognent.

Les volcans sont comme l'eau qui jaillit entre les planches des pirogues !

Le Sénégal est sur la plaque africaine - stable comme une grande pirogue !`
        },
        theory: `Tectonique des Plaques

La surface de la Terre est divisée en plaques qui bougent lentement.

Structure de la Terre

Croûte
- Continentale (30-70 km)
- Océanique (5-10 km)
- Rigide et cassante

Manteau
- Lithosphère (rigide)
- Asthénosphère (plastique)
- Convection thermique

Noyau
- Externe (liquide)
- Interne (solide)
- Très chaud (5000°C)

Mouvements des Plaques

Divergence
- Plaques s'éloignent
- Dorsales océaniques
- Création de croûte
- Exemple : Dorsale Atlantique

Convergence
- Plaques se rapprochent
- Subduction ou collision
- Destruction de croûte
- Exemple : Himalaya

Coulissage
- Plaques glissent
- Failles transformantes
- Exemple : Faille de San Andreas

Conséquences

Séismes
- Libération d'énergie
- Ondes sismiques
- Magnitude (Richter)

Volcans
- Magma en surface
- Zones de subduction
- Points chauds

Montagnes
- Collision de plaques
- Plissement
- Soulèvement`,
        exercises: [
            {
                question: 'Quelle couche terrestre est en mouvement ?',
                options: ['Noyau', 'Manteau', 'Lithosphère', 'Atmosphère'],
                correct: 2,
                explanation: 'La lithosphère (plaques) bouge sur l\'asthénosphère, comme les pirogues sur l\'eau !'
            },
            {
                question: 'Que se passe-t-il à une zone de divergence ?',
                options: ['Les plaques se heurtent', 'Les plaques s\'éloignent', 'Les plaques glissent', 'Rien'],
                correct: 1,
                explanation: 'À une zone de divergence, les plaques s\'éloignent et créent de nouvelle croûte !'
            }
        ],
        relatedSimulations: ['water-cycle', 'energy-conservation', 'forces-motion']
    },

    'chemical-reactions': {
        title: 'Réactions Chimiques',
        description: 'Visualisez les réactions au niveau atomique',
        type: 'chemical',
        config: {},
        analogy: {
            title: 'Les Réactions Chimiques comme la Préparation du Café Touba',
            content: `Une réaction chimique, c'est comme préparer le célèbre café Touba ! ☕

Les réactifs sont les ingrédients de départ :
- Café moulu (A)
- Graines de selim (B)
- Eau chaude (C)

La réaction est la préparation :
Café + Selim + Eau → Café Touba délicieux !

Les produits sont le résultat final : le café Touba prêt à boire.

L'énergie (chaleur) est nécessaire pour que ça marche - comme le feu sous la bouilloire.

Une fois le café fait, on ne peut plus récupérer le café moulu séparé - c'est irréversible !

Les atomes se réarrangent, comme les ingrédients se mélangent, mais rien ne se perd - c'est la conservation de la masse !`
        },
        theory: `Les Réactions Chimiques

Une réaction chimique transforme des substances (réactifs) en nouvelles substances (produits).

Équation Chimique

Réactifs → Produits

Exemple : 2 H₂ + O₂ → 2 H₂O

Loi de Conservation

Loi de Lavoisier
"Rien ne se perd, rien ne se crée, tout se transforme"
- Masse totale constante
- Nombre d'atomes conservé
- Équation équilibrée

Types de Réactions

Synthèse
A + B → AB
Exemple : 2 H₂ + O₂ → 2 H₂O

Décomposition
AB → A + B
Exemple : 2 H₂O → 2 H₂ + O₂

Substitution
AB + C → AC + B
Exemple : Fe + CuSO₄ → FeSO₄ + Cu

Double Déplacement
AB + CD → AD + CB
Exemple : NaCl + AgNO₃ → NaNO₃ + AgCl

Énergie

Réaction Exothermique
- Libère de l'énergie (chaleur)
- Exemple : combustion

Réaction Endothermique
- Absorbe de l'énergie
- Exemple : photosynthèse

Indicateurs

- Changement de couleur
- Dégagement de gaz
- Formation de précipité
- Changement de température`,
        exercises: [
            {
                question: 'Que dit la loi de Lavoisier ?',
                options: ['Tout se perd', 'Rien ne se transforme', 'Rien ne se perd, tout se transforme', 'Tout se crée'],
                correct: 2,
                explanation: 'La loi de Lavoisier dit que rien ne se perd, tout se transforme - comme les ingrédients du café !'
            },
            {
                question: 'Quel type de réaction libère de la chaleur ?',
                options: ['Endothermique', 'Exothermique', 'Isotherme', 'Adiabatique'],
                correct: 1,
                explanation: 'Une réaction exothermique libère de la chaleur, comme le café qui chauffe !'
            }
        ],
        relatedSimulations: ['atomic-structure', 'energy-conservation', 'states-of-matter']
    },

    'forces-motion': {
        title: 'Forces et Mouvement',
        description: 'Expérimentez avec la gravité et les forces',
        type: 'force',
        config: {},
        analogy: {
            title: 'Les Forces et le Mouvement comme la Lutte Sénégalaise',
            content: `Les forces et le mouvement, c'est comme la lutte sénégalaise (Lamb) ! 🤼

La force est comme la poussée du lutteur - plus elle est grande, plus l'effet est important.

L'inertie est la résistance du lutteur - un gros lutteur (grande masse) est plus difficile à bouger.

La vitesse change quand on applique une force - comme quand un lutteur pousse son adversaire.

Première loi de Newton : Un lutteur au repos reste au repos, un lutteur en mouvement continue son mouvement (sauf si une force l'arrête).

Deuxième loi : Force = Masse × Accélération
Plus le lutteur est lourd, plus il faut de force pour le faire bouger !

Troisième loi : Action = Réaction
Quand tu pousses ton adversaire, il te pousse aussi avec la même force !

La gravité est comme le sol qui attire tout vers le bas - c'est pour ça qu'on tombe !`
        },
        theory: `Forces et Mouvement

Les forces causent les changements de mouvement des objets.

Les Trois Lois de Newton

1ère Loi (Inertie)
Un objet au repos reste au repos, un objet en mouvement continue son mouvement rectiligne uniforme, sauf si une force extérieure agit sur lui.

2ème Loi (Fondamentale)
F = m × a
- F : Force (Newton, N)
- m : Masse (kilogramme, kg)
- a : Accélération (m/s²)

3ème Loi (Action-Réaction)
À toute action correspond une réaction égale et opposée.

Types de Forces

Force de Gravité
- Attraction vers le centre de la Terre
- F = m × g (g = 9,8 m/s²)
- Poids d'un objet

Force de Frottement
- S'oppose au mouvement
- Dépend de la surface
- Ralentit les objets

Force Normale
- Perpendiculaire à la surface
- Support d'un objet

Tension
- Dans une corde ou un câble
- Tire sur l'objet

Mouvement

Vitesse
v = distance / temps
Unité : m/s ou km/h

Accélération
a = Δv / Δt
Changement de vitesse

Chute Libre
- Accélération = g
- Indépendant de la masse
- v = g × t`,
        exercises: [
            {
                question: 'Quelle est l\'unité de la force ?',
                options: ['Kilogramme (kg)', 'Mètre (m)', 'Newton (N)', 'Joule (J)'],
                correct: 2,
                explanation: 'L\'unité de la force est le Newton (N), comme la force d\'un lutteur !'
            },
            {
                question: 'Que dit la 3ème loi de Newton ?',
                options: ['F = m × a', 'Inertie', 'Action = Réaction', 'Gravité'],
                correct: 2,
                explanation: 'La 3ème loi dit qu\'à toute action correspond une réaction égale et opposée !'
            }
        ],
        relatedSimulations: ['energy-conservation', 'simple-circuits', 'plate-tectonics']
    },

    // ========== 3ÈME (BFEM) ==========
    'genetics-dna': {
        title: 'ADN et Génétique',
        description: 'Explorez la structure de l\'ADN et l\'hérédité',
        type: 'dna',
        config: {},
        analogy: {
            title: 'L\'ADN comme le Livre de Recettes Familiales',
            content: `L'ADN, c'est comme le grand livre de recettes de ta famille transmis de génération en génération ! 📖

L'ADN est le livre complet avec toutes les recettes (gènes) de ta famille.

Un gène est une recette spécifique - par exemple, la recette du thiéboudienne de ta grand-mère.

Les chromosomes sont les chapitres du livre - l'humain a 23 paires de chapitres (46 au total).

Les bases azotées (A, T, G, C) sont les lettres qui écrivent les recettes.
Comme les lettres wolof : A va toujours avec T, G va toujours avec C !

L'hérédité : Tu hérites du livre de recettes de tes parents.
La moitié vient de ta mère (23 chromosomes), l'autre moitié de ton père (23 chromosomes).

C'est pour ça que tu ressembles à tes parents - tu as leurs "recettes" !

Une mutation est comme une faute de frappe dans la recette - parfois ça change le plat !`
        },
        theory: `ADN et Génétique

L'ADN contient l'information génétique de tous les êtres vivants.

Structure de l'ADN

Double Hélice
- Découverte par Watson et Crick (1953)
- Deux brins enroulés
- Forme d'escalier en colimaçon

Composants
- Sucre (désoxyribose)
- Phosphate
- Bases azotées : A, T, G, C

Appariement des Bases
- Adénine (A) ↔ Thymine (T)
- Guanine (G) ↔ Cytosine (C)
- Liaisons hydrogène

Gènes et Chromosomes

Gène
- Segment d'ADN
- Code pour une protéine
- Unité d'hérédité

Chromosome
- ADN condensé
- Humain : 23 paires (46 total)
- 22 paires autosomes + 1 paire sexuelle (XX ou XY)

Hérédité

Lois de Mendel

1ère Loi (Uniformité)
Tous les hybrides F1 sont identiques

2ème Loi (Ségrégation)
Les allèles se séparent lors de la formation des gamètes

3ème Loi (Indépendance)
Les gènes se transmettent indépendamment

Génotype et Phénotype
- Génotype : composition génétique
- Phénotype : caractères observables

Allèles
- Dominant (s'exprime toujours)
- Récessif (s'exprime si homozygote)`,
        exercises: [
            {
                question: 'Combien de chromosomes possède une cellule humaine normale ?',
                options: ['23', '46', '92', '100'],
                correct: 1,
                explanation: '46 chromosomes : 23 paires, dont une moitié vient de chaque parent !'
            },
            {
                question: 'Quelle base s\'apparie avec l\'Adénine (A) ?',
                options: ['Guanine (G)', 'Cytosine (C)', 'Thymine (T)', 'Uracile (U)'],
                correct: 2,
                explanation: 'L\'Adénine s\'apparie toujours avec la Thymine, comme un couple inséparable !'
            }
        ],
        relatedSimulations: ['cell-structure', 'protein-synthesis', 'evolution-selection']
    },

    'immune-system': {
        title: 'Système Immunitaire',
        description: 'Observez comment le corps se défend contre les infections',
        type: 'immune',
        config: {},
        analogy: {
            title: 'Le Système Immunitaire comme l\'Armée Sénégalaise',
            content: `Le système immunitaire, c'est comme l'armée qui protège le Sénégal ! 🛡️

Les globules blancs sont les soldats qui patrouillent dans le sang.

Les macrophages sont comme les gendarmes - ils mangent les intrus (phagocytose).

Les lymphocytes sont les forces spéciales :
- Lymphocytes B : fabriquent des armes (anticorps)
- Lymphocytes T : attaquent directement les ennemis

Les anticorps sont des missiles guidés qui reconnaissent et neutralisent les microbes spécifiques.

Les vaccins sont comme l'entraînement de l'armée - on montre une photo de l'ennemi pour que les soldats le reconnaissent plus tard !

La mémoire immunitaire : Une fois qu'on a combattu un ennemi, on s'en souvient toujours.
C'est pour ça qu'on n'attrape la rougeole qu'une seule fois !

Les barrières (peau, muqueuses) sont comme les frontières du pays - première ligne de défense !`
        },
        theory: `Le Système Immunitaire

Le système immunitaire protège le corps contre les infections et maladies.

Défenses Non Spécifiques

Barrières Physiques
- Peau (imperméable)
- Muqueuses (nez, bouche)
- Larmes, salive (lysozyme)

Réponse Inflammatoire
- Rougeur, chaleur, douleur, gonflement
- Augmentation du flux sanguin
- Arrivée des globules blancs

Phagocytose
- Macrophages
- Neutrophiles
- "Mangent" les microbes

Défenses Spécifiques

Immunité Humorale
- Lymphocytes B
- Production d'anticorps
- Neutralisation des antigènes

Immunité Cellulaire
- Lymphocytes T
- Destruction des cellules infectées
- Lymphocytes T auxiliaires (CD4)
- Lymphocytes T cytotoxiques (CD8)

Anticorps

Structure
- Forme de Y
- Sites de liaison spécifiques
- Immunoglobulines (IgG, IgM, IgA, etc.)

Fonctions
- Neutralisation
- Agglutination
- Précipitation
- Activation du complément

Vaccination

Principe
- Introduction d'antigène atténué
- Stimulation de la mémoire immunitaire
- Protection à long terme

Types
- Vaccins vivants atténués
- Vaccins inactivés
- Vaccins à sous-unités

Maladies
- Rougeole, polio, tétanos
- COVID-19`,
        exercises: [
            {
                question: 'Quel type de cellule produit les anticorps ?',
                options: ['Lymphocyte T', 'Lymphocyte B', 'Macrophage', 'Neutrophile'],
                correct: 1,
                explanation: 'Les lymphocytes B produisent les anticorps, comme l\'armée fabrique des armes !'
            },
            {
                question: 'Quel est le principe de la vaccination ?',
                options: ['Tuer tous les microbes', 'Créer une mémoire immunitaire', 'Bloquer la respiration', 'Augmenter la température'],
                correct: 1,
                explanation: 'La vaccination crée une mémoire immunitaire pour reconnaître l\'ennemi plus tard !'
            }
        ],
        relatedSimulations: ['blood-circulation', 'cell-structure', 'genetics-dna']
    },

    'atomic-structure': {
        title: 'Structure de l\'Atome',
        description: 'Plongez dans le monde subatomique',
        type: 'atom',
        config: { protons: 6, neutrons: 6, electrons: 6 },
        analogy: {
            title: 'L\'Atome comme le Stade Léopold Sédar Senghor',
            content: `L'atome, c'est comme le stade de Dakar avec ses supporters ! ⚽

Le noyau est le terrain de foot au centre - tout petit mais c'est là que se passe l'action !

Les protons sont les joueurs en rouge (charge positive +).

Les neutrons sont les arbitres en noir (pas de charge, neutres).

Les électrons sont les supporters dans les tribunes (charge négative -).
Ils tournent autour du terrain sur différents niveaux (gradins).

Le stade est presque vide ! Si le noyau était une balle de foot au centre, les électrons seraient à plusieurs kilomètres !

Le numéro atomique = nombre de protons = numéro du maillot de l'équipe.
Carbone = 6 protons = équipe numéro 6 !

Un ion : Si des supporters partent ou arrivent, l'équilibre change !`
        },
        theory: `Structure de l'Atome

L'atome est la plus petite unité de matière conservant les propriétés d'un élément.

Composition

Noyau
- Protons (charge +)
- Neutrons (charge 0)
- Très dense
- 99,9% de la masse

Nuage Électronique
- Électrons (charge -)
- Orbitales (niveaux d'énergie)
- Presque vide
- Détermine les propriétés chimiques

Caractéristiques

Numéro Atomique (Z)
- Nombre de protons
- Définit l'élément
- Exemple : Carbone Z=6

Nombre de Masse (A)
- A = Protons + Neutrons
- Exemple : Carbone-12 (6p + 6n)

Isotopes
- Même Z, différent A
- Même élément, masses différentes
- Exemple : Carbone-12, Carbone-14

Modèles Atomiques

Modèle de Rutherford (1911)
- Noyau central
- Électrons en orbite
- Système planétaire

Modèle de Bohr (1913)
- Niveaux d'énergie quantifiés
- Couches électroniques (K, L, M, N)
- Sauts quantiques

Modèle Quantique Moderne
- Orbitales (s, p, d, f)
- Probabilité de présence
- Principe d'incertitude

Ions

Cation (charge +)
- Perte d'électrons
- Exemple : Na⁺

Anion (charge -)
- Gain d'électrons
- Exemple : Cl⁻`,
        exercises: [
            {
                question: 'Quelle particule détermine l\'élément chimique ?',
                options: ['Électron', 'Neutron', 'Proton', 'Photon'],
                correct: 2,
                explanation: 'Le nombre de protons (numéro atomique) définit l\'élément, comme le numéro de l\'équipe !'
            },
            {
                question: 'Où se trouve la majorité de la masse de l\'atome ?',
                options: ['Électrons', 'Noyau', 'Orbitales', 'Vide'],
                correct: 1,
                explanation: 'Le noyau contient 99,9% de la masse, comme le terrain concentre l\'action !'
            }
        ],
        relatedSimulations: ['chemical-reactions', 'quantum-mechanics', 'molecular-geometry']
    },

    'energy-conservation': {
        title: 'Conservation de l\'Énergie',
        description: 'Explorez les transformations d\'énergie',
        type: 'energy',
        config: {},
        analogy: {
            title: 'La Conservation de l\'Énergie comme l\'Argent dans une Famille',
            content: `La conservation de l'énergie, c'est comme l'argent dans une famille sénégalaise ! 💰

L'énergie totale est comme le budget familial - elle ne change jamais, elle se transforme juste !

Énergie cinétique : L'argent qu'on dépense activement (en mouvement).
Comme quand tu cours au marché avec ton argent.

Énergie potentielle : L'argent économisé (en réserve).
Comme l'argent dans la tirelire en haut de l'armoire.

Transformations :
- Tirelire → Marché (potentielle → cinétique)
- Course → Repos (cinétique → potentielle)

Loi de conservation : L'argent total ne change pas !
Si tu prends 1000 F dans la tirelire, tu as 1000 F à dépenser.

Énergie thermique : L'argent "perdu" en frais (frottements).
Comme les frais de transport - l'énergie se disperse en chaleur.

Au final : Énergie initiale = Énergie finale (juste transformée) !`
        },
        theory: `Conservation de l'Énergie

L'énergie ne peut être ni créée ni détruite, seulement transformée.

Formes d'Énergie

Énergie Cinétique (Ec)
- Énergie du mouvement
- Ec = ½ m v²
- Dépend de la masse et de la vitesse

Énergie Potentielle (Ep)
- Énergie de position
- Ep = m g h
- Dépend de la hauteur

Énergie Thermique
- Énergie de chaleur
- Agitation moléculaire

Énergie Chimique
- Liaisons chimiques
- Aliments, carburants

Énergie Électrique
- Mouvement d'électrons
- Courant électrique

Énergie Lumineuse
- Rayonnement électromagnétique
- Photons

Loi de Conservation

Principe
Énergie totale = constante
E_initiale = E_finale

Transformations

Pendule
Ep (haut) ↔ Ec (bas)

Chute Libre
Ep → Ec + chaleur (frottements)

Centrale Électrique
Chimique → Thermique → Mécanique → Électrique

Photosynthèse
Lumineuse → Chimique

Rendement

Définition
η = (Énergie utile / Énergie totale) × 100%

Pertes
- Frottements
- Chaleur
- Son

Exemple
Moteur de voiture : η ≈ 25%
75% perdu en chaleur !`,
        exercises: [
            {
                question: 'Que dit la loi de conservation de l\'énergie ?',
                options: ['L\'énergie se crée', 'L\'énergie se détruit', 'L\'énergie se transforme', 'L\'énergie disparaît'],
                correct: 2,
                explanation: 'L\'énergie se transforme mais ne se perd jamais, comme l\'argent familial !'
            },
            {
                question: 'Quelle énergie possède un objet en hauteur ?',
                options: ['Cinétique', 'Potentielle', 'Thermique', 'Chimique'],
                correct: 1,
                explanation: 'Un objet en hauteur possède de l\'énergie potentielle, comme l\'argent dans la tirelire !'
            }
        ],
        relatedSimulations: ['forces-motion', 'chemical-reactions', 'simple-circuits']
    },

    // ========== 6ÈME (NOUVEAUX) ==========
    'plant-growth': {
        title: 'Croissance des Plantes',
        description: 'Observez les étapes de la germination et de la croissance',
        type: 'plant',
        config: {},
        analogy: {
            title: 'La Croissance d\'une Plante comme un Enfant qui Grandit',
            content: `Une plante qui pousse, c'est comme un enfant qui grandit ! 🌱
            
La graine est comme le bébé : elle dort et attend le bon moment.
L'eau est comme le lait maternel : c'est ce qui la réveille et lui donne la force de sortir.

La racine qui sort en premier, c'est comme les pieds de l'enfant : pour grandir, il faut d'abord bien tenir debout sur terre !

La tige vers le soleil, c'est l'enfant qui grandit en taille chaque année.
Les feuilles sont comme des mains ouvertes pour attraper la lumière.

Si on ne l'arrose pas, elle fane, comme un enfant qui a faim et soif !`
        },
        theory: `La Germination et la Croissance

La germination est le passage de la graine à la jeune plante.

Les Besoins de la Germination :
1. Eau (humidité) : Indispensable pour ramollir l'enveloppe et activer la vie.
2. Air (oxygène) : La graine respire.
3. Chaleur (température) : Il faut une température douce.
(La lumière n'est pas toujours nécessaire pour germer, mais indispensable après !)

Les Étapes :
1. Gonflement de la graine
2. Sortie de la radicule (racine)
3. Sortie de la tigelle (tige)
4. Apparition des premières feuilles (cotylédons)
5. La plante devient autonome (photosynthèse)`,
        exercises: [
            {
                question: 'Quel organe sort en premier de la graine ?',
                options: ['La feuille', 'La fleur', 'La racine', 'La tige'],
                correct: 2,
                explanation: 'La racine sort en premier pour fixer la plante, comme les pieds pour tenir debout !'
            },
            {
                question: 'Quel élément est indispensable pour le début de la germination ?',
                options: ['Lumière', 'Eau', 'Terre', 'Engrais'],
                correct: 1,
                explanation: 'L\'eau est indispensable pour réveiller la graine qui dort !'
            }
        ],
        relatedSimulations: ['photosynthesis', 'water-cycle']
    },

    'food-chain': {
        title: 'Chaînes Alimentaires',
        description: 'Comprenez les relations entre producteurs et consommateurs',
        type: 'ecosystem',
        config: {},
        analogy: {
            title: 'La Chaîne Alimentaire comme le Repas de Famille',
            content: `La chaîne alimentaire, c'est comme la préparation du repas au Sénégal ! 🥘

Les Producteurs (Plantes) sont comme les agriculteurs : ils produisent la nourriture (mil, riz, légumes) à partir de la terre et du soleil.

Les Consommateurs Primaires (Herbivores) sont comme ceux qui achètent les légumes au marché : ils mangent ce que les producteurs ont fait. (Ex: la vache, le mouton).

Les Consommateurs Secondaires (Carnivores) sont comme nous quand on mange le mouton de la Tabaski !

Les Décomposeurs sont comme le nettoyage après la fête : ils recyclent tout ce qui reste pour que la terre redevienne propre et fertile pour les agriculteurs. C'est un cycle !`
        },
        theory: `Les Chaînes Alimentaires

Une chaîne alimentaire représente "qui mange qui" dans un milieu naturel.

Les Maillons de la Chaîne :

1. Les Producteurs (Autotrophes)
- Végétaux chlorophylliens (plantes vertes)
- Produisent leur propre matière organique
- Base de la chaîne

2. Les Consommateurs (Hétérotrophes)
- Primaires (Herbivores) : Mangent les plantes
- Secondaires (Carnivores) : Mangent les herbivores
- Tertiaires : Mangent les carnivores

3. Les Décomposeurs
- Bactéries, champignons, vers
- Transforment la matière organique morte en matière minérale
- Recyclage de la matière`,
        exercises: [
            {
                question: 'Qui est toujours au début d\'une chaîne alimentaire ?',
                options: ['Un herbivore', 'Un végétal vert', 'Un carnivore', 'Un décomposeur'],
                correct: 1,
                explanation: 'Les végétaux verts (producteurs) sont toujours au début car ils produisent la matière !'
            },
            {
                question: 'Quel est le rôle des décomposeurs ?',
                options: ['Chasser', 'Produire de l\'oxygène', 'Recycler la matière', 'Polluer'],
                correct: 2,
                explanation: 'Ils recyclent la matière morte pour la rendre à la terre, comme le nettoyage !'
            }
        ],
        relatedSimulations: ['photosynthesis', 'ecosystem-dynamics']
    },

    'mixture-separation': {
        title: 'Séparation des Mélanges',
        description: 'Expérimentez la filtration, décantation et évaporation',
        type: 'lab',
        config: {},
        analogy: {
            title: 'Séparer les Mélanges comme Trier le Riz',
            content: `Séparer des mélanges, c'est comme trier le riz ou préparer le couscous ! 🍚

Filtration : C'est comme utiliser un tamis pour la farine. Les gros morceaux restent, la poudre fine passe. Ou comme filtrer le café Touba !

Décantation : C'est comme quand on laisse reposer l'huile et l'eau. L'huile remonte, l'eau reste en bas. Ou quand la boue tombe au fond du seau d'eau.

Évaporation : C'est comme faire du sel au Lac Rose. L'eau s'en va avec le soleil, et le sel reste au fond !

Tri manuel : C'est comme enlever les petits cailloux du riz avant de le cuire.`
        },
        theory: `Les techniques de séparation

Pour séparer les constituants d'un mélange, on utilise différentes techniques selon la nature du mélange.

1. Décantation
- Pour mélanges hétérogènes (liquide-solide ou liquide-liquide non miscible)
- On laisse reposer : le plus lourd tombe au fond.
- Ex : Eau boueuse, Huile et vinaigre.

2. Filtration
- Pour séparer un solide d'un liquide
- Utilise un filtre (papier, tissu)
- Le filtrat passe, le résidu reste.
- Ex : Café, Eau et sable.

3. Évaporation / Vaporisation
- Pour récupérer un solide dissous dans un liquide
- On chauffe le mélange : le liquide part en gaz, le solide reste.
- Ex : Eau salée.

4. Distillation
- Pour séparer deux liquides miscibles
- Basée sur la différence de température d'ébullition.`,
        exercises: [
            {
                question: 'Quelle technique utiliser pour séparer l\'eau et le sable ?',
                options: ['Distillation', 'Filtration', 'Aimantation', 'Chromatographie'],
                correct: 1,
                explanation: 'La filtration retient le sable dans le filtre et laisse passer l\'eau, comme pour le café !'
            },
            {
                question: 'Comment récupérer le sel dans de l\'eau de mer ?',
                options: ['Par filtration', 'Par décantation', 'Par évaporation', 'Par tamisage'],
                correct: 2,
                explanation: 'Il faut faire évaporer l\'eau (au soleil ou en chauffant) pour qu\'il ne reste que le sel.'
            }
        ],
        relatedSimulations: ['states-of-matter', 'water-purification']
    },

    'volume-mass': {
        title: 'Masse et Volume',
        description: 'Apprenez à mesurer et différencier masse et volume',
        type: 'lab',
        config: {},
        analogy: {
            title: 'Masse et Volume : Le Sac de Riz et le Ballon',
            content: `Ne confonds pas Masse et Volume ! C'est comme comparer un sac de riz et un gros ballon de plage. 🎈🍚

Le Volume, c'est la PLACE que ça prend.
Le ballon est gros, il prend beaucoup de place dans la chambre. Il a un grand volume.

La Masse, c'est ce que ça PÈSE (la quantité de matière).
Le sac de riz (50kg) est petit mais très lourd. Il a une grande masse.
Le ballon est gros mais très léger (il n'y a que de l'air).

Donc : Gros volume ne veut pas dire grande masse ! (Ex : Le coton vs Le fer).`
        },
        theory: `Masse et Volume

1. La Masse (m)
- Quantité de matière dans un objet
- Unité légale : Kilogramme (kg)
- Instrument : Balance
- La masse ne change pas (sauf si on enlève de la matière).

2. Le Volume (V)
- Espace occupé par un objet
- Unité légale : Mètre cube (m³), souvent Litre (L) pour les liquides.
- 1 L = 1 dm³ = 1000 mL
- Instrument : Éprouvette graduée (pour liquides).

Relation Masse/Volume :
- Des matières différentes ont des masses différentes pour un même volume (Densité).
- 1L d'eau pèse 1 kg.
- 1L d'huile pèse environ 0,9 kg (plus léger !).`,
        exercises: [
            {
                question: 'Quel instrument mesure la masse ?',
                options: ['Une règle', 'Une balance', 'Une éprouvette', 'Un thermomètre'],
                correct: 1,
                explanation: 'La balance sert à peser, donc à mesurer la masse !'
            },
            {
                question: 'Qu\'est-ce qui est le plus lourd : 1kg de plomb ou 1kg de plumes ?',
                options: ['Le plomb', 'Les plumes', 'C\'est pareil', 'Ça dépend'],
                correct: 2,
                explanation: 'C\'est pareil ! 1kg reste 1kg, c\'est la masse. Par contre le volume des plumes sera beaucoup plus grand !'
            }
        ],
        relatedSimulations: ['density-buoyancy', 'states-of-matter']
    },

    'water-purification': {
        title: 'Purification de l\'Eau',
        description: 'Les étapes pour rendre l\'eau potable',
        type: 'lab',
        config: {},
        analogy: {
            title: 'Purifier l\'Eau comme Filtrer le Jus de Bissap',
            content: `Rendre l'eau potable, c'est comme préparer un jus de Bissap bien propre ! 🥤

1. Dégrillage : On enlève les grosses branches et feuilles, comme on trie les fleurs de bissap au début.
2. Décantation : On laisse reposer pour que la boue tombe au fond.
3. Filtration (Sable) : On fait passer l'eau à travers du sable fin, c'est comme le tissu fin pour filtrer le jus de bissap. Les petites saletés restent bloquées.
4. Désinfection (Javel/Chlore) : On ajoute une goutte de produit pour tuer les microbes invisibles. C'est l'étape de sécurité finale !`
        },
        theory: `Le Traitement de l'Eau

Pour rendre une eau naturelle potable, elle doit subir plusieurs traitements :

1. Tamisage / Dégrillage
Retient les gros déchets (branches, plastiques).

2. Floculation / Décantation
On ajoute un produit (floculant) qui agglomère les particules fines. Elles deviennent lourdes et tombent au fond.

3. Filtration sur Sable
L'eau traverse une couche de sable qui retient les particules restantes. L'eau devient claire (limpide).

4. Ozonation / Chloration (Désinfection)
Étape capitale : on tue les bactéries et virus pathogènes avec de l'ozone ou du chlore (Javel).

L'eau est maintenant potable (honnête) !`,
        exercises: [
            {
                question: 'Quelle étape tue les microbes ?',
                options: ['Filtration', 'Décantation', 'Désinfection (Javel)', 'Tamisage'],
                correct: 2,
                explanation: 'Seule la désinfection (avec Javel ou Chlore) tue les microbes invisibles !'
            },
            {
                question: 'A quoi sert la filtration sur sable ?',
                options: ['Tuer les virus', 'Rendre l\'eau claire', 'Donner du goût', 'Refroidir l\'eau'],
                correct: 1,
                explanation: 'Le sable retient les petites particules et rend l\'eau claire et limpide.'
            }
        ],
        relatedSimulations: ['mixture-separation', 'water-cycle']
    },

    'geometric-shapes': {
        title: 'Formes Géométriques',
        description: 'Explorez les propriétés des figures planes et solides',
        type: 'geometry',
        config: {},
        analogy: {
            title: 'Les Formes autour de Nous',
            content: `La géométrie est partout au Sénégal ! 🕌🏠

Le Rectangle : C'est comme un terrain de foot ou une porte.
Le Carré : C'est comme un carreau de carrelage au sol.
Le Cercle : C'est comme une bolée (bol) ou un rond-point.
Le Triangle : C'est comme le toit d'une case ou une part de pastèque.

Le Cube : C'est comme une boîte de sucre.
Le Pavé droit : C'est comme une brique ou une boîte d'allumettes.
Le Cylindre : C'est comme un fût d'eau ou une boîte de conserve.`
        },
        theory: `Figures Géométriques de Base

1. Figures Planes (2D)
- Carré : 4 côtés égaux, 4 angles droits.
- Rectangle : Côtés opposés égaux, 4 angles droits.
- Triangle : 3 côtés. (Isocèle, Équilatéral, Rectangle).
- Cercle : Tous les points sont à la même distance du centre (rayon).

2. Solides (3D)
- Cube : 6 faces carrées identiques.
- Pavé droit (Parallélépipède) : 6 faces rectangulaires.
- Cylindre : 2 disques de base et une face courbe.
- Sphère : Comme un ballon.

Propriétés importantes :
- Périmètre : Le tour de la figure.
- Aire (Surface) : La place à l'intérieur.
- Volume : La place à l'intérieur du solide.`,
        exercises: [
            {
                question: 'Quelle figure a 4 côtés égaux et 4 angles droits ?',
                options: ['Rectangle', 'Losange', 'Carré', 'Trapèze'],
                correct: 2,
                explanation: 'C\'est le carré ! Le rectangle a des angles droits mais pas forcément 4 côtés égaux.'
            },
            {
                question: 'Quelle est la forme d\'une boîte d\'allumettes ?',
                options: ['Cube', 'Pavé droit', 'Cylindre', 'Pyramide'],
                correct: 1,
                explanation: 'C\'est un pavé droit (ou parallélépipède rectangle).'
            }
        ],
        relatedSimulations: ['angles-measurement', 'volume-mass']
    },

    'angles-measurement': {
        title: 'Mesure des Angles',
        description: 'Utilisez un rapporteur virtuel pour mesurer des angles',
        type: 'geometry',
        config: {},
        analogy: {
            title: 'Les Angles comme les Aiguilles d\'une Montre',
            content: `Les angles, c'est comme l'ouverture entre deux aiguilles d'une montre ! ⌚

Angle Nul (0°) : Midi pile (les aiguilles sont l'une sur l'autre).
Angle Aigu (petit) : Comme 13h05 (petite ouverture). Moins que le coin d'une table.
Angle Droit (90°) : Comme 15h00 (ou 9h00). C'est le coin parfait, comme le coin d'un livre ou d'un mur. "L'équerre" !
Angle Obtus (grand) : Comme 13h20 (grande ouverture). Plus grand que le coin d'une table.
Angle Plat (180°) : Comme 18h00 (les aiguilles forment une ligne droite).`
        },
        theory: `Les Angles

Un angle est formé par deux demi-droites de même origine (le sommet).
L'unité de mesure est le Degré (°).
L'instrument de mesure est le Rapporteur.

Classification :
1. Angle Nul : 0°
2. Angle Aigu : Entre 0° et 90°
3. Angle Droit : 90° exact (les droites sont perpendiculaires)
4. Angle Obtus : Entre 90° et 180°
5. Angle Plat : 180° (alignement)
6. Angle Plein : 360° (un tour complet)

Bissectrice : La droite qui coupe un angle en deux parties égales.`,
        exercises: [
            {
                question: 'Combien mesure un angle droit ?',
                options: ['45°', '90°', '180°', '100°'],
                correct: 1,
                explanation: 'Un angle droit mesure exactement 90°. C\'est l\'angle de l\'équerre.'
            },
            {
                question: 'Comment appelle-t-on un angle plus petit qu\'un angle droit ?',
                options: ['Obtus', 'Plat', 'Aigu', 'Droit'],
                correct: 2,
                explanation: 'C\'est un angle aigu (il est pointu !).'
            }
        ],
        relatedSimulations: ['geometric-shapes', 'triangles-properties']
    },

    'vertebrate-classification': {
        title: 'Classification des Vertébrés',
        description: 'Apprenez à classer les animaux selon leurs caractéristiques',
        type: 'classification',
        config: {},
        analogy: {
            title: 'Classer les Animaux comme les Équipes de Navétanes',
            content: `Classer les animaux, c'est comme faire les groupes pour les Navétanes (tournoi de foot) ! 🦁🦅🐟

On regarde leurs maillots (leur peau) et comment ils respirent :

1. Les Poissons (Team Eau) : Ils ont des écailles non soudées et vivent dans l'eau. (Ex: Yaboy, Thiof).
2. Les Amphibiens (Team Double-Jeu) : Peau nue et humide. Ils vivent dans l'eau bébés, et sur terre adultes. (Ex: Crapaud).
3. Les Reptiles (Team Écailles Soudées) : Peau sèche avec écailles. Ils rampent souvent. (Ex: Margouillat, Serpent, Tortue).
4. Les Oiseaux (Team Plumes) : Ils ont des plumes et un bec. (Ex: Poulet, Aigle).
5. Les Mammifères (Team Poils & Lait) : Ils ont des poils (souvent) et allaitent leurs petits. (Ex: Chèvre, Lion, Homme, Baleine).`
        },
        theory: `Classification des Vertébrés

Les vertébrés sont des animaux qui possèdent une colonne vertébrale (squelette interne). On les classe en 5 grandes classes selon leurs attributs :

1. MAMMIFÈRES
- Peau : Poils
- Respiration : Pulmonaire
- Température : Constante (Sang chaud)
- Reproduction : Vivipares (bébé dans le ventre), allaitement.

2. OISEAUX
- Peau : Plumes
- Respiration : Pulmonaire
- Température : Constante
- Reproduction : Ovipares (œufs à coquille dure).

3. REPTILES
- Peau : Écailles soudées (sèches)
- Respiration : Pulmonaire
- Température : Variable (Sang froid)
- Reproduction : Ovipares (œufs à coquille molle).

4. AMPHIBIENS (Batraciens)
- Peau : Nue et humide
- Respiration : Branchiale (larve), Pulmonaire/Cutanée (adulte)
- Température : Variable
- "Double vie" (eau/terre).

5. POISSONS
- Peau : Écailles non soudées (visqueuses)
- Respiration : Branchiale (branchies)
- Température : Variable
- Vie aquatique.`,
        exercises: [
            {
                question: 'À quelle classe appartient la chauve-souris ?',
                options: ['Oiseau', 'Mammifère', 'Reptile', 'Amphibien'],
                correct: 1,
                explanation: 'La chauve-souris est un mammifère ! Elle a des poils et allaite ses petits (ce n\'est pas un oiseau malgré ses ailes).'
            },
            {
                question: 'Quel est le point commun entre un serpent et un margouillat ?',
                options: ['Ils vivent dans l\'eau', 'Ils ont des poils', 'Ce sont des reptiles', 'Ils ont des plumes'],
                correct: 2,
                explanation: 'Ce sont tous les deux des reptiles avec des écailles soudées.'
            }
        ],
        relatedSimulations: ['food-chain', 'cell-structure']
    },

    // ========== 5ÈME (NOUVEAUX) ==========
    'respiration-human': {
        title: 'Respiration Humaine',
        description: 'Mécanismes des poumons et échanges gazeux',
        type: 'human-body',
        config: {},
        analogy: {
            title: 'La Respiration comme un Soufflet de Forgeron',
            content: `La respiration, c'est comme le soufflet d'un forgeron ! 🌬️

L'Inspiration : C'est quand le forgeron écarte les poignées du soufflet pour faire entrer l'air. Tes côtes s'écartent et ton diaphragme descend comme si tu gonflais un ballon dans ton ventre.

L'Expiration : C'est quand il appuie pour faire sortir l'air. Tes côtes redescendent et le diaphragme remonte, l'air est chassé.

Les Alvéoles sont comme des milliers de petits sacs poreux où l'oxygène passe dans le sang (comme l'eau à travers un tissu) et le CO2 sort du sang.`
        },
        theory: `La Respiration chez l'Homme

La respiration permet les échanges gazeux entre l'organisme et le milieu.

1. Appareil Respiratoire
- Fosses nasales (réchauffent l'air)
- Trachée artère
- Bronches (droite et gauche)
- Poumons (contiennent les bronchioles et alvéoles)

2. Les Mouvements Respiratoires
- Inspiration (Active) : Augmentation du volume, l'air riche en O2 entre.
- Expiration (Passive) : Diminution du volume, l'air riche en CO2 sort.

3. Échanges Gazeux
- Se font au niveau des alvéoles pulmonaires.
- Le sang prend l'Oxygène (O2).
- Le sang rejette le Dioxyde de Carbone (CO2).

C'est vital pour produire de l'énergie dans nos cellules !`,
        exercises: [
            {
                question: 'Quel gaz est indispensable à la vie que nous inspirons ?',
                options: ['Azote', 'Dioxyde de carbone', 'Oxygène', 'Argon'],
                correct: 2,
                explanation: 'L\'oxygène (O2) est indispensable pour faire fonctionner nos organes.'
            },
            {
                question: 'Où se font les échanges gazeux avec le sang ?',
                options: ['Dans la trachée', 'Dans le nez', 'Dans les alvéoles', 'Dans le cœur'],
                correct: 2,
                explanation: 'C\'est dans les alvéoles, tout au bout des poumons, que l\'échange se fait.'
            }
        ],
        relatedSimulations: ['blood-circulation', 'digestive-system']
    },

    'volcano-eruption': {
        title: 'Éruptions Volcaniques',
        description: 'Comprendre le fonctionnement des volcans',
        type: 'geology',
        config: {},
        analogy: {
            title: 'Le Volcan comme une Bouteille de Gaz Secouée',
            content: `Un volcan, c'est comme une bouteille de Gazelle secouée ! 🌋🍾

La Chambre Magmatique : C'est le liquide dans la bouteille.
Le Gaz : C'est comme le gaz dans la boisson.
La Cheminée : C'est le goulot de la bouteille.

Tant que le bouchon est fermé (croûte terrestre solide), rien ne se passe.
Mais si la pression est trop forte, le bouchon saute !

- Si le gaz sort doucement (bouteille ouverte lentement) : C'est une éruption effusive (lave coule).
- Si tout explose (bouteille secouée et ouverte d'un coup) : C'est une éruption explosive (cendres, bombes) !`
        },
        theory: `Les Éruptions Volcaniques

Un volcan est une ouverture de la croûte terrestre rejetant du magma, des gaz et des cendres.

Structure :
- Chambre magmatique (réservoir profond)
- Cheminée (conduit)
- Cratère (sortie)

Types d'éruptions :
1. Effusives (Volcans rouges)
- Magma fluide
- Coulées de lave
- Moins dangereux
- Ex: Piton de la Fournaise

2. Explosives (Volcans gris)
- Magma visqueux (épais)
- Nuées ardentes (gaz + cendres brûlants)
- Très dangereux
- Ex: Montagne Pelée

Le magma dégazé en surface s'appelle la lave.`,
        exercises: [
            {
                question: 'Comment appelle-t-on le magma une fois sorti du volcan ?',
                options: ['Le Cratère', 'La Lave', 'La Cendre', 'Le Basalte'],
                correct: 1,
                explanation: 'Une fois dégazé à l\'air libre, le magma devient de la lave.'
            },
            {
                question: 'Quel type d\'éruption est le plus dangereux ?',
                options: ['Effusive', 'Explosive', 'Sous-marine', 'Éteinte'],
                correct: 1,
                explanation: 'Les éruptions explosives projettent des nuées ardentes très rapides et mortelles.'
            }
        ],
        relatedSimulations: ['plate-tectonics', 'states-of-matter']
    },

    'earth-movement': {
        title: 'Mouvements de la Terre',
        description: 'Rotation, révolution et saisons',
        type: 'astronomy',
        config: {},
        analogy: {
            title: 'La Terre comme une Toupie qui Tourne autour d\'un Feu',
            content: `La Terre est une toupie géante ! 🌍🌀🔥

Rotation (Jour/Nuit) :
La Terre tourne sur elle-même (toupie).
C'est comme se tourner face au feu (jour) puis dos au feu (nuit).
Ça prend 24h.

Révolution (Année) :
La Terre tourne aussi autour du Soleil (le grand feu de camp).
Ça prend 365 jours (1 an).

Les Saisons :
La toupie est penchée ! C'est pour ça qu'il y a des saisons.
Quand le Sénégal penche vers le Soleil : C'est l'été (chaud).
Quand il penche loin du Soleil : C'est l'hiver (moins chaud).`
        },
        theory: `Les Mouvements de la Terre

1. La Rotation (Sur elle-même)
- Tourne d'Ouest en Est
- Durée : 24 heures (jour sidéral 23h56min)
- Conséquence : Alternance Jour/Nuit

2. La Révolution (Autour du Soleil)
- Orbite elliptique
- Durée : 365,25 jours (une année)
- Inclinaison de l'axe : 23,5°
- Conséquence : Les Saisons (inégales durées jour/nuit)

Solstices et Équinoxes :
- Solstice Été : Jour le plus long (21 juin Nord)
- Solstice Hiver : Nuit la plus longue (21 déc Nord)
- Équinoxe : Jour = Nuit (21 mars, 21 sept).`,
        exercises: [
            {
                question: 'Combien de temps met la Terre pour tourner autour du Soleil ?',
                options: ['24 heures', '1 mois', '365 jours', '1000 jours'],
                correct: 2,
                explanation: 'C\'est la révolution, elle dure un an, soit 365 jours !'
            },
            {
                question: 'Pourquoi y a-t-il le jour et la nuit ?',
                options: ['Le soleil s\'éteint', 'La Terre tourne sur elle-même', 'La lune cache le soleil', 'Les nuages cachent le soleil'],
                correct: 1,
                explanation: 'C\'est la rotation de la Terre sur elle-même qui expose face au soleil ou non.'
            }
        ],
        relatedSimulations: ['light-propagation', 'water-cycle']
    },

    'density-buoyancy': {
        title: 'Densité et Flottabilité',
        description: 'Pourquoi certains objets flottent et d\'autres coulent',
        type: 'physics',
        config: {},
        analogy: {
            title: 'Flotter ou Couler : Le Bois et le Caillou',
            content: `Pourquoi le gros tronc d'arbre flotte et le petit caillou coule ? 🪵🪨

C'est une histoire de DENSITÉ (lourdeur par rapport à la taille) !
L'eau, c'est l'arbitre.
- Si tu es plus dense que l'eau (plus "serré" comme le caillou) -> Tu perds, tu coules !
- Si tu es moins dense que l'eau (plus "aéré" comme le bois) -> Tu gagnes, tu flottes !

La Poussée d'Archimède :
L'eau pousse vers le haut tout ce qu'on met dedans. C'est comme une main invisible qui te soulève dans la piscine.
Si tu es léger pour ta taille, la main d'Archimède arrive à te porter !`
        },
        theory: `Densité et Poussée d'Archimède

1. Masse volumique (ρ - rhô)
- Masse par unité de volume (kg/m³)
- Eau liquide = 1000 kg/m³

2. Densité (d)
- Rapport masse volumique objet / masse volumique eau.
- d > 1 : L'objet coule.
- d < 1 : L'objet flotte.
- d = 1 : L'objet flotte entre deux eaux.

3. Poussée d'Archimède
"Tout corps plongé dans un fluide subit une poussée verticale, dirigée de bas en haut, égale au poids du fluide déplacé."

C'est cette force qui permet aux bateaux en acier (très lourds) de flotter car ils déplacent beaucoup d'eau (grand volume d'air dans la coque) !`,
        exercises: [
            {
                question: 'Si la densité d\'un objet est 0,8, que fait-il dans l\'eau (densité 1) ?',
                options: ['Il coule', 'Il flotte', 'Il explose', 'Il dissout'],
                correct: 1,
                explanation: '0,8 est plus petit que 1, donc il est moins dense que l\'eau : il flotte !'
            },
            {
                question: 'Pourquoi un navire en acier flotte-t-il ?',
                options: ['L\'acier est léger', 'Il contient beaucoup d\'air (volume)', 'Il a un moteur', 'L\'eau est salée'],
                correct: 1,
                explanation: 'Grâce à sa forme creuse, il contient beaucoup d\'air et déplace un énorme volume d\'eau, créant une forte poussée d\'Archimède.'
            }
        ],
        relatedSimulations: ['volume-mass', 'forces-motion']
    },

    'electric-resistance': {
        title: 'Résistance Électrique',
        description: 'L\'effet des résistances dans un circuit',
        type: 'circuit',
        config: {},
        analogy: {
            title: 'La Résistance comme un Embouteillage',
            content: `Une résistance électrique, c'est comme un rétrécissement de la route ou un embouteillage ! 🚗🚕🚌

Le courant électrique, ce sont les voitures qui circulent.
Le fil normal, c'est l'autoroute à péage (ça roule vite !).

La Résistance (le composant), c'est une zone de travaux ou une route ensablée.
- Les voitures sont obligées de ralentir.
- Ça frotte, ça chauffe (effet Joule), comme les pneus sur le sable !

Plus la résistance est forte (gros embouteillage), moins le courant passe fort.`
        },
        theory: `La Résistance Électrique

La résistance est la propriété d'un matériau à s'opposer au passage du courant électrique.

1. Grandeur Physique
- Symbole : R
- Unité : Ohm (Ω - oméga)
- Instrument : Ohmmètre

2. Loi d'Ohm
C'est la loi fondamentale : U = R x I
- U : Tension (Volts)
- R : Résistance (Ohms)
- I : Intensité (Ampères)

3. Effet Joule
Le passage du courant dans une résistance dégage de la chaleur.
Applications : Fer à repasser, radiateur, fusible, lampe à incandescence.`,
        exercises: [
            {
                question: 'Quelle est l\'unité de la résistance ?',
                options: ['Volt', 'Ampère', 'Ohm', 'Watt'],
                correct: 2,
                explanation: 'L\'unité est l\'Ohm, symbolisé par la lettre grecque oméga (Ω).'
            },
            {
                question: 'Quel effet produit une résistance traversée par un courant ?',
                options: ['Elle refroidit', 'Elle chauffe (Effet Joule)', 'Elle tourne', 'Elle s\'allume'],
                correct: 1,
                explanation: 'Elle dégage de la chaleur, c\'est l\'effet Joule (utile pour le chauffage/repassage).'
            }
        ],
        relatedSimulations: ['simple-circuits', 'energy-conservation']
    },

    'solutions-solubility': {
        title: 'Solutions et Solubilité',
        description: 'Dissolution, saturation et concentration',
        type: 'lab',
        config: {},
        analogy: {
            title: 'Les Solutions comme le Café Touba Sucré',
            content: `Faire une solution, c'est comme préparer le Café Touba ! ☕🍬

Le Solvant (l'eau chaude) est celui qui accueille.
Le Soluté (le sucre) est celui qui disparaît dedans.

Dissolution : Le sucre se cache dans l'eau. Il est toujours là (c'est sucré), mais on ne le voit plus.

Saturation : Si tu mets trop de sucre, l'eau ne peut plus "avaler". Le sucre reste au fond. Ta solution est saturée !

Soluble (Sucre, Sel) : Ça se mélange.
Insoluble (Sable, Cailloux) : Ça ne se mélange pas !`
        },
        theory: `Solutions et Solubilité

Une solution est obtenue par dissolution d'un soluté dans un solvant.

Définitions :
- Solvant : Liquide qui dissout (généralement l'eau = solution aqueuse).
- Soluté : Corps dissous (solide, liquide ou gaz).
- Solution : Mélange homogène obtenu.

Concentration Massique (C) :
Masse de soluté par litre de solution.
C = m / V (en g/L)

Saturation :
Limite de solubilité. Au-delà, le soluté ne se dissout plus et forme un dépôt.`  ,
        exercises: [
            {
                question: 'Comment appelle-t-on le liquide qui dissout le solide ?',
                options: ['Le Soluté', 'Le Solvant', 'Le Sirop', 'Le Mélange'],
                correct: 1,
                explanation: 'Le solvant (comme l\'eau) est le liquide qui dissout.'
            },
            {
                question: 'Que se passe-t-il quand une solution est saturée ?',
                options: ['Elle explose', 'Elle change de couleur', 'Le soluté ne se dissout plus', 'Elle devient gazeuse'],
                correct: 2,
                explanation: 'À saturation, le solvant ne peut plus accepter de soluté, le surplus tombe au fond.'
            }
        ],
        relatedSimulations: ['mixture-separation', 'states-of-matter']
    },

    'triangles-properties': {
        title: 'Propriétés des Triangles',
        description: 'Explorez les hauteurs, médianes et médiatrices',
        type: 'geometry',
        config: {},
        analogy: {
            title: 'Les Triangles et leurs Lignes Spéciales',
            content: `Le triangle a des lignes magiques ! 📐✨

La Hauteur : C'est comme mesurer la taille de quelqu'un. On part du sommet (la tête) et on va tout droit au sol (perpendiculaire).

La Médiatrice : C'est la ligne de la justice ! Elle passe pile au milieu du côté et est droite (perpendiculaire). Tout point dessus est à égale distance des deux bouts.

La Médiane : C'est la ligne du partage. Elle part du sommet et coupe le côté opposé en plein milieu.

La Bissectrice : La ligne qui coupe l'angle en deux parts égales, comme couper une part de gâteau équitablement !`
        },
        theory: `Droites Remarquables du Triangle

1. Médiatrices
- Perpendiculaires aux côtés en leur milieu.
- Leur intersection est le centre du CERCLE CIRCONSCRIT (passe par les 3 sommets).

2. Hauteurs
- Passent par un sommet et sont perpendiculaires au côté opposé.
- Leur intersection est l'ORTHOCENTRE.

3. Médianes
- Passent par un sommet et le milieu du côté opposé.
- Leur intersection est le CENTRE DE GRAVITÉ (point d'équilibre).

4. Bissectrices
- Coupent les angles en deux.
- Leur intersection est le centre du CERCLE INSCRIT.

Propriété Somme des Angles :
Dans tout triangle, Angle A + Angle B + Angle C = 180°.`,
        exercises: [
            {
                question: 'Quelle droite passe par le milieu d\'un côté et est perpendiculaire ?',
                options: ['La médiane', 'La hauteur', 'La médiatrice', 'La bissectrice'],
                correct: 2,
                explanation: 'C\'est la médiatrice ! Elle est "médi" (milieu) et droite (perpendiculaire).'
            },
            {
                question: 'Combien vaut la somme des angles d\'un triangle ?',
                options: ['90°', '180°', '360°', '100°'],
                correct: 1,
                explanation: 'Toujours 180°, quelle que soit la forme du triangle !'
            }
        ],
        relatedSimulations: ['geometric-shapes', 'angles-measurement']
    },

    'fraction-visualizer': {
        title: 'Visualiseur de Fractions',
        description: 'Comprendre les fractions graphiquement',
        type: 'fraction',
        config: {},
        analogy: {
            title: 'Les Fractions comme le Partage du Gâteau',
            content: `Les fractions, c'est juste du partage ! 🍰

Imagine un gâteau d'anniversaire.
Le Dénominateur (en bas), c'est en combien de parts TOTALES on a coupé le gâteau.
Le Numérateur (en haut), c'est combien de parts on PREND.

1/4 : On coupe en 4, on prend 1 part (Un quart).
1/2 : On coupe en 2 (moitié).

Si le numérateur est plus grand que le dénominateur (ex: 5/4), c'est qu'il te faut plus qu'un seul gâteau ! (1 gâteau entier + 1/4).`
        },
        theory: `Les Fractions

Une fraction représente une partie d'un tout ou une division.
Écriture : a / b
- a est le Numérateur (nombre de parts prises)
- b est le Dénominateur (nombre de parts totales)
- b ne peut jamais être égal à 0 !

Égalité :
Deux fractions sont égales si on peut passer de l'une à l'autre en multipliant/divisant haut et bas par le même nombre (Simplification).
Ex: 1/2 = 2/4 = 4/8

Addition :
Pour additionner, il faut le MÊME dénominateur.
On ne peut pas additionner des choux et des carottes !`,
        exercises: [
            {
                question: 'Dans la fraction 3/4, quel chiffre est le dénominateur ?',
                options: ['3', '4', 'Les deux', 'Aucun'],
                correct: 1,
                explanation: 'C\'est le 4 (en bas) qui "dénomme" (donne le nom : quarts).'
            },
            {
                question: 'Que vaut 1/2 + 1/2 ?',
                options: ['1/4', '2/4', '1 (entier)', '2'],
                correct: 2,
                explanation: 'Une moitié plus une moitié, ça fait un entier (2/2 = 1) !'
            }
        ],
        relatedSimulations: ['geometric-shapes', 'angles-measurement']
    },

    // ========== 4ÈME (NOUVEAUX) ==========
    'blood-groups': {
        title: 'Groupes Sanguins',
        description: 'Comprendre les groupes A, B, AB, O et le rhésus',
        type: 'blood',
        config: {},
        analogy: {
            title: 'Les Groupes Sanguins comme des Maillots de Foot',
            content: `Les groupes sanguins, c'est comme porter le maillot de son équipe ! ⚽👕

Groupe A : Tu portes le maillot A.
Groupe B : Tu portes le maillot B.
Groupe AB : Tu portes les deux maillots A et B (super-receveur !).
Groupe O : Tu ne portes PAS de maillot (super-donneur !).

Le Système Immunitaire (la Police) déteste les maillots qu'il ne connait pas !
- Si tu es A, ta police attaque le B.
- Si tu es O, ta police attaque A et B (tu ne peux recevoir que du O).
- Si tu es AB, ta police connait tout le monde, tu peux tout recevoir !`
        },
        theory: `Les Groupes Sanguins (Système ABO)

Les globules rouges portent des marqueurs (antigènes) à leur surface.

1. Les 4 Groupes
- Groupe A : Antigènes A
- Groupe B : Antigènes B
- Groupe AB : Antigènes A et B
- Groupe O : Aucun antigène

2. Compatibilité (Transfusion)
- On ne peut pas introduire un antigène étranger.
- O est donneur universel (pas d'antigène).
- AB est receveur universel.

3. Facteur Rhésus (+ / -)
- Un autre marqueur (antigène D).
- + possède le marqueur.
- - ne le possède pas.`,
        exercises: [
            {
                question: 'Quel groupe est le "Docteur" universel (Donneur Universel) ?',
                options: ['Groupe A', 'Groupe B', 'Groupe AB', 'Groupe O'],
                correct: 3,
                explanation: 'Le groupe O n\'a pas de marqueurs, il peut aller chez tout le monde sans se faire attaquer !'
            },
            {
                question: 'Un patient du groupe A peut-il recevoir du sang B ?',
                options: ['Oui', 'Non', 'Seulement le mardi', 'Seulement s\'il est Rh+'],
                correct: 1,
                explanation: 'Non ! Son corps va attaquer les marqueurs B qu\'il ne connait pas.'
            }
        ],
        relatedSimulations: ['blood-circulation', 'immune-system']
    },

    'human-reproduction': {
        title: 'Reproduction Humaine',
        description: 'De la fécondation au développement',
        type: 'biology',
        config: {},
        analogy: {
            title: 'La Reproduction : La Rencontre d\'une Graine et d\'une Terre',
            content: `C'est une histoire de rencontre ! 💕🌱

Le spermatozoïde est comme une graine voyageuse qui apporte la moitié du plan.
L'ovule est comme une graine dormante qui a l'autre moitié.

La Fécondation : C'est quand ils se rencontrent et fusionnent. Ils forment une seule cellule (Zygote), le début de la vie.
La Nidation : L'œuf s'installe dans l'utérus comme la graine se plante dans la bonne terre.

Ensuite, le bébé grandit protégé dans le ventre, nourri par le cordon ombilical (comme la sève nourrit la plante).`
        },
        theory: `La Reproduction Humaine

1. Les Gamètes (Cellules sexuelles)
- Homme : Spermatozoïdes (mobiles, produits en continu).
- Femme : Ovules (immobiles, cycle mensuel).

2. La Fécondation
- Rencontre des gamètes dans les trompes.
- Fusion des noyaux -> Cellule œuf (Zygote).

3. Le Développement
- Embryon (2 premiers mois) : Formation des organes.
- Fœtus (du 3ème mois à la naissance) : Croissance.
- Durée grossesse : 9 mois.

4. Le Placenta
- Organe d'échange mère-enfant (oxygène, nutriments).`,
        exercises: [
            {
                question: 'Où a lieu la fécondation ?',
                options: ['Dans l\'utérus', 'Dans les trompes', 'Dans l\'estomac', 'Dans l\'ovaire'],
                correct: 1,
                explanation: 'La rencontre se fait généralement dans les trompes, avant de descendre vers l\'utérus.'
            },
            {
                question: 'Comment s\'appelle le bébé après 3 mois de grossesse ?',
                options: ['Un embryon', 'Un fœtus', 'Un zygote', 'Un nouveau-né'],
                correct: 1,
                explanation: 'À partir de 3 mois, tous les organes sont formés, il devient un fœtus et grandit juste.'
            }
        ],
        relatedSimulations: ['genetics-dna', 'cell-division']
    },

    'light-propagation': {
        title: 'Propagation de la Lumière',
        description: 'Ombres, pénombre et éclipses',
        type: 'optic',
        config: {},
        analogy: {
            title: 'L\'Ombre et la Lumière : Le Parasol',
            content: `La lumière voyage toujours tout droit, comme une flèche ! 🏹☀️

L'Ombre : C'est quand tu mets un obstacle (parasol) devant la lumière. La lumière ne peut pas contourner, donc derrière, c'est noir.

L'Éclipse Solaire : C'est quand la Lune joue au parasol pour la Terre ! Elle passe pile devant le Soleil et nous met à l'ombre en plein jour.

L'Éclipse Lunaire : C'est quand la Terre joue au parasol pour la Lune. La Terre cache le Soleil à la Lune.`
        },
        theory: `Propagation Rectiligne de la Lumière

1. Principe
Dans un milieu transparent et homogène (air, vide), la lumière se propage en ligne droite.

2. Les Ombres
- Source ponctuelle : Ombre nette.
- Source étendue : Ombre + Pénombre (zone floue).
- Cône d'ombre : Zone sombre derrière l'objet.

3. Les Éclipses
- Éclipse de Soleil : Soleil - Lune - Terre alignés. (La Lune masque le Soleil).
- Éclipse de Lune : Soleil - Terre - Lune alignés. (La Terre masque la Lune).`,
        exercises: [
            {
                question: 'Comment se déplace la lumière ?',
                options: ['En zigzag', 'En courbe', 'En ligne droite', 'En spirale'],
                correct: 2,
                explanation: 'Dans l\'air ou le vide, la lumière file toujours tout droit !'
            },
            {
                question: 'Qu\'est-ce qui cause une éclipse de Soleil ?',
                options: ['La Terre cache le Soleil', 'La Lune passe entre la Terre et le Soleil', 'Le Soleil s\'éteint', 'Les nuages'],
                correct: 1,
                explanation: 'C\'est la Lune qui passe devant le Soleil et nous fait de l\'ombre.'
            }
        ],
        relatedSimulations: ['light-reflection', 'earth-movement']
    },

    'combustion-reaction': {
        title: 'Les Combustions',
        description: 'Le tétraèdre du feu et réactions',
        type: 'chemistry',
        config: {},
        analogy: {
            title: 'Le Feu a besoin de 3 Amis (Triangle du Feu)',
            content: `Pour faire du feu pour le thé, il te faut obligatoirement 3 choses ! 🔥🍵

1. Le Combustible (ce qui brûle) : Le charbon ou le bois.
2. Le Comburant (ce qui fait brûler) : L'air (l'oxygène). Si tu étouffes le feu, il meurt.
3. L'Énergie (l'étincelle) : L'allumette ou la chaleur pour démarrer.

Si tu enlèves UN SEUL ami, le feu s'éteint direct !

Combustion Complète (Flamme bleue) : Ça brûle bien, il y a assez d'air. Dégage CO2 et Eau.
Combustion Incomplète (Flamme jaune/orange) : Pas assez d'air. Ça fume noir et dégage du CO (Gaz mortel !). Danger !`
        },
        theory: `Les Combustions

Une combustion est une réaction chimique exothermique (dégage de la chaleur).

1. Le Triangle du Feu
Nécessite : Combustible + Comburant (O2) + Chaleur.

2. Combustion du Carbone
C + O2 -> CO2 (Dioxyde de carbone)

3. Combustion du Butane (Gaz)
- Complète (O2 suffisant) :
  Butane + O2 -> CO2 + Eau (H2O)
  (Flamme bleue, chauffe fort).

- Incomplète (Manque d'O2) :
  Produit du Carbone (fumée noire) et du Monoxyde de Carbone (CO).
  Le CO est un gaz inodore, incolore et mortel (asphyxie).`,
        exercises: [
            {
                question: 'Quel gaz est nécessaire pour faire brûler quelque chose ?',
                options: ['Azote', 'Oxygène (Dioxygène)', 'Dioxyde de carbone', 'Méthane'],
                correct: 1,
                explanation: 'Le dioxygène (O2) est le comburant indispensable au feu.'
            },
            {
                question: 'Quel est le danger d\'une combustion incomplète (flamme jaune) ?',
                options: ['Elle ne chauffe pas', 'Elle produit de l\'eau', 'Elle produit du monoxyde de carbone (toxique)', 'Elle sent bon'],
                correct: 2,
                explanation: 'Elle produit du CO (monoxyde de carbone), un gaz mortel qu\'on ne sent pas !'
            }
        ],
        relatedSimulations: ['chemical-reactions', 'states-of-matter']
    },

    'atom-molecule-intro': {
        title: 'Atomes et Molécules',
        description: 'Introduction à la structure de la matière',
        type: 'atom',
        config: {},
        analogy: {
            title: 'Atomes et Molécules : Les Briques Lego',
            content: `La matière, c'est comme une construction en Lego ! 🧱

L'Atome : C'est une seule brique Lego (Rouge, Bleue, etc.). C'est le plus petit morceau indivisible (en chimie).
Ex: Atome d'Oxygène (O), Atome de Carbone (C).

La Molécule : C'est un assemblage de plusieurs briques collées ensemble.
Ex: Molécule d'eau (H2O) = 2 briques Hydrogène + 1 brique Oxygène.

Corps Pur : Que des constructions identiques.
Mélange : Plein de constructions différentes en vrac.`
        },
        theory: `Atomes et Molécules

1. L'Atome
- Constituant élémentaire de la matière.
- Symbole : Une lettre majuscule (C, O, H, N).
- Représenté par une sphère de couleur (Carbone=Noir, Oxygène=Rouge, Hydrogène=Blanc).

2. La Molécule
- Assemblage d'atomes liés entre eux.
- Formule chimique : H2O (Eau), CO2 (Dioxyde de carbone), O2 (Dioxygène).

3. Corps Purs
- Corps pur simple : Molécules avec un seul type d'atome (O2, N2).
- Corps pur composé : Molécules avec plusieurs types d'atomes (H2O, CH4).`,
        exercises: [
            {
                question: 'Quel est le symbole de l\'atome de Carbone ?',
                options: ['Ca', 'C', 'Co', 'K'],
                correct: 1,
                explanation: 'C\'est C ! (Ca c\'est Calcium, K c\'est Potassium).'
            },
            {
                question: 'H2O est-il un atome ou une molécule ?',
                options: ['Un atome', 'Une molécule', 'Un ion', 'Un mélange'],
                correct: 1,
                explanation: 'C\'est une molécule car elle contient plusieurs atomes (2 H et 1 O) attachés.'
            }
        ],
        relatedSimulations: ['chemical-reactions', 'states-of-matter']
    },

    'pythagoras-theorem': {
        title: 'Théorème de Pythagore',
        description: 'Visualisation géométrique du théorème',
        type: 'geometry',
        config: {},
        analogy: {
            title: 'Pythagore et le Raccourci',
            content: `Pythagore, c'est l'histoire d'un raccourci dans un terrain rectangulaire ! 📐🏃🏾‍♂️

Imagine un terrain de foot coupé en diagonale.
Tu as un Triangle Rectangle (avec un angle droit).

Le grand côté en face de l'angle droit s'appelle l'Hypoténuse.

Le Théorème dit :
Le carré de la longueur de l'Hypoténuse est égal à la somme des carrés des deux autres côtés.
a² + b² = c²

C'est utile pour calculer une longueur qu'on ne connait pas, comme la longueur d'une échelle posée contre un mur !`
        },
        theory: `Théorème de Pythagore

Condition : Le triangle doit être RECTANGLE (avoir un angle droit).

Énoncé :
"Dans un triangle rectangle, le carré de l'hypoténuse est égal à la somme des carrés des deux autres côtés."

Si ABC est rectangle en A :
BC² = AB² + AC²

(BC est l'hypoténuse).

Réciproque :
Si dans un triangle, le carré du plus grand côté est égal à la somme des carrés des deux autres, alors ce triangle est rectangle. (Sert à prouver qu'il y a un angle droit).`,
        exercises: [
            {
                question: 'À quoi sert le théorème de Pythagore ?',
                options: ['Calculer des angles', 'Calculer une longueur dans un triangle rectangle', 'Calculer l\'aire d\'un cercle', 'Tracer des parallèles'],
                correct: 1,
                explanation: 'Il sert à calculer la longueur d\'un 3ème côté quand on connait les 2 autres dans un triangle rectangle.'
            },
            {
                question: 'Comment s\'appelle le côté le plus long d\'un triangle rectangle ?',
                options: ['La Cathète', 'L\'Hypoténuse', 'La Diagonale', 'Le Rayon'],
                correct: 1,
                explanation: 'C\'est l\'Hypoténuse. Il est toujours en face de l\'angle droit.'
            }
        ],
        relatedSimulations: ['geometric-shapes', 'triangles-properties']
    },

    'linear-equations': {
        title: 'Équations Linéaires',
        description: 'Résolution graphique d\'équations',
        type: 'graph',
        config: {},
        analogy: {
            title: 'L\'Équation comme une Balance du Marché',
            content: `Une équation, c'est comme une balance à deux plateaux à l'équilibre ! ⚖️

Le signe "=" est le milieu de la balance.
Ce qu'il y a à gauche pèse pareil que ce qu'il y a à droite.

Le but est de trouver le poids mystère "x" (une mangue inconnue).

Règle d'or : Si tu ajoutes ou enlèves quelque chose d'un côté, tu DOIS faire exactement pareil de l'autre côté pour garder l'équilibre.
Si tu enlèves 2kg à gauche, enlève 2kg à droite !`
        },
        theory: `Équations du Premier Degré

Une équation est une égalité contenant une inconnue (notée x).
Résoudre l'équation, c'est trouver la valeur de x qui rend l'égalité vraie.

Forme générale : ax + b = c

Méthode de résolution :
1. Isoler les x d'un côté et les nombres de l'autre.
   (Changer de côté = Changer de signe).
2. Diviser par le coefficient de x.

Exemple : 2x + 3 = 11
2x = 11 - 3
2x = 8
x = 8 / 2
x = 4`,
        exercises: [
            {
                question: 'Si 3x = 12, que vaut x ?',
                options: ['3', '4', '9', '36'],
                correct: 1,
                explanation: 'x = 12 / 3 = 4. Car 3 fois 4 égale 12.'
            },
            {
                question: 'Quelle est la première étape pour résoudre 2x + 5 = 15 ?',
                options: ['Diviser par 2', 'Ajouter 5', 'Soustraire 5 des deux côtés', 'Multiplier par 15'],
                correct: 2,
                explanation: 'On se débarrasse d\'abord du +5 en faisant -5 des deux côtés : 2x = 10.'
            }
        ],
        relatedSimulations: ['fraction-visualizer', 'pythagoras-theorem']
    },

    // ========== 3ÈME (NOUVEAUX) ==========
    'microbes-bacteria': {
        title: 'Microbes et Bactéries',
        description: 'Diversité du monde microbien',
        type: 'biology',
        config: {},
        analogy: {
            title: 'Les Microbes : Les Bons, les Brutes et les Truands',
            content: `Le monde des microbes, c'est comme une grande ville invisible ! 🏙️🦠

1. Les Gentils (Bactéries du Yaourt/Intestin) : Ils nous aident à digérer et font le lait caillé (Sow). Ce sont les "bons citoyens".
2. Les Méchants (Pathogènes) : Ils nous rendent malades (Choléra, Tuberculose). Ce sont les "bandits".
3. Les Truands (Virus) : Ce ne sont même pas des cellules vivantes, mais des pirates qui squattent nos cellules pour se photocopier (Grippe, VIH) !

Heureusement, notre corps a sa propre armée (Globules Blancs) pour les combattre !`
        },
        theory: `Microbes et Système Immunitaire

Les micro-organismes (microbes) sont partout (air, eau, sol, corps).

Classification :
1. Bactéries (Cellules sans noyau) : Peuvent être utiles (fermentation) ou pathogènes. Se tuent avec des Antibiotiques.
2. Virus (Parasites obligatoires) : Toujours parasites. Antibiotiques inefficaces.
3. Champignons microscopiques (Levures, Moisissures).
4. Protozoaires (Parasites comme le Plasmodium du Paludisme).

Infection : Pénétration et multiplication des microbes dans l'organisme.

Asepsie : Empêcher les microbes d'entrer (Hygiène, désinfection).
Antisepsie : Tuer les microbes sur une plaie.`,
        exercises: [
            {
                question: 'Quel médicament utilise-t-on contre les bactéries ?',
                options: ['Le paracétamol', 'L\'antibiotique', 'Le vaccin', 'La vitamine C'],
                correct: 1,
                explanation: 'Les antibiotiques ("anti-vie") tuent les bactéries, mais ne marchent pas sur les virus !'
            },
            {
                question: 'La levure de boulanger est-elle un microbe ?',
                options: ['Oui, un champignon utile', 'Non, c\'est de la farine', 'Oui, un virus dangereux', 'Non, c\'est un minéral'],
                correct: 0,
                explanation: 'Oui ! C\'est un champignon microscopique utile pour faire lever le pain.'
            }
        ],
        relatedSimulations: ['immune-system', 'cell-structure']
    },

    'chromosomes-division': {
        title: 'Chromosomes',
        description: 'Caryotypes et division cellulaire',
        type: 'genetics',
        config: {},
        analogy: {
            title: 'Les Chromosomes : Les Livres de Cuisine de la Vie',
            content: `L'ADN, c'est la recette complète pour te fabriquer ! 🧬📖

Les Chromosomes, ce sont les livres qui contiennent les recettes (Gènes).
Chaque être humain a 46 livres (23 Paires) dans chaque cellule.

- Tu reçois 23 livres de Papa.
- Tu reçois 23 livres de Maman.

La 23ème paire décide si tu es Garçon (XY) ou Fille (XX).

La Trisomie 21, c'est quand il y a un livre en trop (3 livres au lieu de 2) au numéro 21. Une erreur d'impression !`
        },
        theory: `Les Chromosomes et l'Hérédité

Les chromosomes sont le support de l'information génétique. Ils sont situés dans le noyau des cellules.

Caryotype Humain :
- 23 paires de chromosomes (soit 46).
- 22 paires d'autosomes (identiques H/F).
- 1 paire de chromosomes sexuels (XX pour femme, XY pour homme).

Division Cellulaire (Mitose) :
La cellule copie tous ses chromosomes puis se divise en deux. Chaque cellule fille reçoit les mêmes 46 chromosomes.

Division Sexuelle (Méiose) :
Pour fabriquer spermatozoïdes et ovules, on divise par deux. Ils n'ont que 23 chromosomes (un seul de chaque paire).`,
        exercises: [
            {
                question: 'Combien de chromosomes possède une cellule humaine normale ?',
                options: ['23', '46', '92', '12'],
                correct: 1,
                explanation: '46 chromosomes, organisés en 23 paires.'
            },
            {
                question: 'Quel est le caryotype d\'un garçon ?',
                options: ['XX', 'XY', 'YY', 'XO'],
                correct: 1,
                explanation: 'Les garçons ont un chromosome X (de maman) et un Y (de papa).'
            }
        ],
        relatedSimulations: ['genetics-dna', 'human-reproduction']
    },

    'ions-formation': {
        title: 'Formation des Ions',
        description: 'Cations, anions et solutions ioniques',
        type: 'chemistry',
        config: {},
        analogy: {
            title: 'Les Ions : Des Atomes Électriques',
            content: `Un atome est normalement neutre (autant de + que de -). ⚛️😐

Mais parfois, il gagne ou perd des électrons (les petits - qui tournent autour).

Le Cation (+) : C'est un atome qui a PERDU un électron. Il est devenu positif car le moins (-) est parti.
C'est comme quelqu'un qui se décharge d'un poids négatif, il devient positif ! Ex: Sodium (Na+).

L'Anion (-) : C'est un atome qui a GAGNÉ un électron. Il est devenu négatif car il a pris un truc négatif en plus.
Ex: Chlorure (Cl-).

Na+ et Cl- s'attirent comme des aimants pour former le Sel (NaCl) !`
        },
        theory: `Les Ions

Un ion est un atome (ou groupe d'atomes) qui a perdu ou gagné un ou plusieurs électrons.

1. Cation (Positif)
- A perdu des électrons.
- Ex : Na+ (Sodium), H+ (Hydrogène), Cu2+ (Cuivre).
- Test : Soude (NaOH) donne un précipité coloré avec les ions métalliques (Bleu pour Cu2+, Rouille pour Fe3+).

2. Anion (Négatif)
- A gagné des électrons.
- Ex : Cl- (Chlorure), OH- (Hydroxyde).
- Test : Nitrate d'argent donne un précipité blanc avec Cl- (noircit à la lumière).

3. Électrolyse
Le courant électrique circule dans l'eau salée grâce au déplacement des ions (porteurs de charge).`,
        exercises: [
            {
                question: 'Un atome qui perd un électron devient...',
                options: ['Un ion négatif (Anion)', 'Un ion positif (Cation)', 'Un neutron', 'Une molécule'],
                correct: 1,
                explanation: 'Il perd une charge négative (-), donc il devient positif (+), c\'est un Cation !'
            },
            {
                question: 'Quel ion donne une couleur bleue avec la soude ?',
                options: ['Fer (Fe2+)', 'Cuivre (Cu2+)', 'Zinc (Zn2+)', 'Sodium (Na+)'],
                correct: 1,
                explanation: 'Le précipité bleu caractérique identifie les ions Cuivre II.'
            }
        ],
        relatedSimulations: ['atomic-structure', 'ph-scale']
    },

    'ph-scale': {
        title: 'Échelle de pH',
        description: 'Acides, bases et indicateurs colorés',
        type: 'lab',
        config: {},
        analogy: {
            title: 'Le pH : Acide ou Basique ?',
            content: `Le pH mesure si un liquide est "piquant" (Acide) ou "douceâtre/savonneux" (Basique). 🍋🧼

L'échelle va de 0 à 14.
7 est le Milieu (Neutre) : Comme l'eau pure. Ni l'un ni l'autre.

0 à 7 (Acide) : C'est le Citron, le Vinaigre, l'Acide de batterie. Plus c'est proche de 0, plus ça brûle ! (Beaucoup d'ions H+).

7 à 14 (Basique) : C'est l'Eau de Javel, la Soude, le Savon. Plus c'est proche de 14, plus ça ronge aussi ! (Beaucoup d'ions OH-).

Attention : Acide + Base = Explosion (ou effervescence) et ça chauffe !`
        },
        theory: `Le Potentiel Hydrogène (pH)

Le pH mesure l'acidité d'une solution aqueuse (concentration en ions H+).

Échelle de pH (à 25°C) :
- pH < 7 : Solution ACIDE (Riche en H+)
- pH = 7 : Solution NEUTRE (Eau pure)
- pH > 7 : Solution BASIQUE (Riche en OH-)

Mesure du pH :
- Papier pH (change de couleur)
- Indicateurs colorés (BBT, Phénolphtaléine)
- pH-mètre (précis)

Dangers :
Les acides et bases concentrés sont corrosifs (brûlent la peau et les vêtements). Toujours verser l'acide dans l'eau, jamais l'inverse !`,
        exercises: [
            {
                question: 'Une solution de pH = 3 est...',
                options: ['Neutre', 'Basique', 'Acide', 'Sucrée'],
                correct: 2,
                explanation: '3 est inférieur à 7, donc c\'est acide (comme du vinaigre) !'
            },
            {
                question: 'Quelle est la valeur du pH de l\'eau pure ?',
                options: ['0', '7', '14', '10'],
                correct: 1,
                explanation: 'L\'eau pure est neutre, son pH est de 7.'
            }
        ],
        relatedSimulations: ['ions-formation', 'chemical-reactions']
    },

    'weight-mass-relation': {
        title: 'Poids et Masse',
        description: 'Relation P = m x g et gravité',
        type: 'weight-mass',
        config: {},
        analogy: {
            title: 'Poids vs Masse : Terre vs Lune',
            content: `La Masse, c'est ta quantité de viande ! (en kg). Elle ne change jamais, même sur la Lune. 🍖

Le Poids, c'est la force avec laquelle la planète t'attire vers le sol ! (en Newton). 🌍🧲

Sur Terre : La planète est grosse, elle tire fort. Tu pèses lourd sur la balance (qui mesure en fait le poids mais affiche des kg... c'est faux !).

Sur la Lune : La Lune est petite, elle tire moins fort (6 fois moins). Tu serais super léger, tu pourrais faire des bonds de géant !
MAIS ta masse (quantité de matière) serait exactement la même. Tu n'as pas maigri, tu es juste moins attiré !`
        },
        theory: `Poids et Masse

1. La Masse (m)
- Quantité de matière (liée au nombre d'atomes).
- Invariable selon le lieu.
- Unité : Kilogramme (kg).
- Mesure : Balance.

2. Le Poids (P)
- Force d'attraction gravitationnelle exercée par la planète.
- Variable selon le lieu (altitude, astre).
- Unité : Newton (N).
- Mesure : Dynamomètre.

3. Relation P = m x g
P : Poids (N)
m : Masse (kg)
g : Intensité de la pesanteur (N/kg).

Sur Terre, g ≈ 9,8 (ou 10) N/kg.
Sur la Lune, g ≈ 1,6 N/kg.`,
        exercises: [
            {
                question: 'Quelle est l\'unité du Poids ?',
                options: ['Kilogramme (kg)', 'Newton (N)', 'Joule (J)', 'Watt (W)'],
                correct: 1,
                explanation: 'Le poids est une force, il se mesure en Newtons (N) ! Le kg c\'est la masse.'
            },
            {
                question: 'Si je vais sur la Lune, ma masse...',
                options: ['Diminue', 'Augmente', 'Ne change pas', 'Devient nulle'],
                correct: 2,
                explanation: 'La masse (quantité de matière) ne change pas. C\'est le poids qui diminue.'
            }
        ],
        relatedSimulations: ['forces-motion', 'volume-mass']
    },

    'thales-theorem': {
        title: 'Théorème de Thalès',
        description: 'Proportionnalité dans les triangles',
        type: 'thales',
        config: {},
        analogy: {
            title: 'Thalès et l\'Ombre de la Pyramide',
            content: `Thalès sert à mesurer des choses géantes sans monter dessus ! 📐🔺

Imagine un petit triangle et un grand triangle emboîtés l'un dans l'autre (comme une échelle double).
Si les bases sont parallèles, alors tout est PROPORTIONNEL.

C'est comme une photo qu'on agrandit (zoom).
- La hauteur de la photo zoomée est 2x plus grande.
- La largeur est aussi 2x plus grande.

Thalès a mesuré la pyramide en comparant son ombre avec l'ombre de son bâton.
Ombre bâton / Hauteur bâton = Ombre Pyramide / Hauteur Pyramide.
C'est magique !`
        },
        theory: `Théorème de Thalès

Condition : Avoir deux droites sécantes coupées par deux droites PARALLÈLES.

Énoncé :
Dans un triangle ABC, si M est sur [AB], N est sur [AC] et que (MN) est parallèle à (BC), alors :

AM / AB = AN / AC = MN / BC

Cela signifie que les longueurs du petit triangle (AMN) sont proportionnelles aux longueurs du grand triangle (ABC).

Usage :
- Calculer une longueur inaccessible.
- Vérifier si deux droites sont parallèles (Réciproque).`,
        exercises: [
            {
                question: 'Quelle est la condition indispensable pour utiliser Thalès ?',
                options: ['Un angle droit', 'Des droites parallèles', 'Un cercle', 'Un carré'],
                correct: 1,
                explanation: 'Il faut impérativement deux droites parallèles coupant deux sécantes'
            },
            {
                question: 'Si le petit triangle est une réduction de coefficient 0.5 du grand, que valent ses côtés ?',
                options: ['Le double', 'La moitié', 'Le carré', 'L\'identique'],
                correct: 1,
                explanation: 'Si le coefficient est 0.5 (1/2), les côtés mesurent la moitié.'
            }
        ],
        relatedSimulations: ['triangles-properties', 'pythagoras-theorem']
    },

    'trig-circle': {
        title: 'Cercle Trigonométrique',
        description: 'Sinus, cosinus et tangente',
        type: 'trigonometry',
        config: {},
        analogy: {
            title: 'Le Cercle Trigo : La Roue du Destin',
            content: `Le cercle trigonométrique, c'est comme une roue de vélo de rayon 1 ! 🎡

Imagine un point sur la roue.
- Le Cosinus (Cos), c'est son ombre sur le sol (axe horizontal).
- Le Sinus (Sin), c'est son ombre sur le mur (axe vertical).

Quand l'angle est 0 (à plat) :
- L'ombre au sol est max (Cos = 1)
- L'ombre au mur est nulle (Sin = 0)

Quand l'angle est 90° (en haut) :
- L'ombre au sol est nulle (Cos = 0)
- L'ombre au mur est max (Sin = 1)

C'est SOH CAH TOA !
Sinus = Opposé / Hypoténuse
Cosinus = Adjacent / Hypoténuse
Tangente = Opposé / Adjacent`
        },
        theory: `Trigonométrie dans le Triangle Rectangle

Pour un angle aigu x dans un triangle rectangle :

1. Cosinus (cos x)
= Côté Adjacent / Hypoténuse

2. Sinus (sin x)
= Côté Opposé / Hypoténuse

3. Tangente (tan x)
= Côté Opposé / Côté Adjacent
= sin x / cos x

Propriétés fondamentales :
- cos² x + sin² x = 1
- -1 ≤ cos x ≤ 1
- -1 ≤ sin x ≤ 1

Valeurs remarquables (30°, 45°, 60°) à connaître !`,
        exercises: [
            {
                question: 'Dans SOHCAHTOA, que signifie le A de CAH ?',
                options: ['Angle', 'Adjacent', 'Aire', 'Arc'],
                correct: 1,
                explanation: 'C-A-H signifie Cosinus = Adjacent / Hypoténuse.'
            },
            {
                question: 'Quel côté est toujours le plus long dans le triangle rectangle ?',
                options: ['Le côté opposé', 'Le côté adjacent', 'L\'hypoténuse', 'Ça dépend'],
                correct: 2,
                explanation: 'L\'hypoténuse est toujours le côté le plus long. Donc le sinus et le cosinus sont toujours ≤ 1.'
            }
        ],
        relatedSimulations: ['pythagoras-theorem', 'geometric-shapes']
    },

    // ========== NOUVELLES SIMULATIONS 6ème - 3ème ==========

    'water-cycle': {
        title: 'Le Cycle de l\'Eau',
        description: 'Suivez le parcours d\'une goutte d\'eau sur Terre',
        type: 'water-cycle',
        config: {},
        analogy: {
            title: 'Le Voyage de l\'Eau',
            content: `L'eau voyage comme un commerçant qui fait le tour du Sénégal ! 🚌💧

1. Évaporation (Mer → Ciel) : Le soleil chauffe l'océan, l'eau monte comme la fumée du thé chaud.
2. Condensation (Ciel → Nuages) : En haut, il fait froid, la vapeur se rassemble pour former des nuages (comme la buée sur la vitre).
3. Précipitations (Nuages → Terre) : Les nuages sont trop lourds, il pleut (Hivernage !).
4. Infiltration/Ruissellement : L'eau remplit les nappes et les fleuves, et retourne à la mer.

Et ça recommence ! C'est un cycle éternel.`
        },
        theory: `Le Cycle de l'Eau (Cycle Hydrologique)

Étapes principales :
1. Évaporation : Passage de l'état liquide à gazeux (Océans, Lacs).
2. Transpiration : Évaporation de l'eau par les plantes (Forêts).
3. Condensation : Formation des nuages (Vapeur → Gouttelettes).
4. Précipitations : Pluie, Neige, Grêle.
5. Ruissellement : Écoulement de l'eau vers les rivières.
6. Infiltration : Pénétration dans le sol (Nappes phréatiques).`,
        exercises: [
            { question: 'Quel moteur fait tourner le cycle de l\'eau ?', options: ['Le vent', 'Le Soleil', 'La Lune', 'Les arbres'], correct: 1, explanation: 'C\'est l\'énergie solaire qui chauffe l\'eau et provoque l\'évaporation.' },
            { question: 'Comment l\'eau retourne-t-elle à l\'état liquide dans les nuages ?', options: ['Par fusion', 'Par condensation', 'Par ébullition', 'Par solidification'], correct: 1, explanation: 'La vapeur se refroidit et redevient liquide (Condensation).' }
        ],
        relatedSimulations: ['states-of-matter', 'climate-change']
    },

    'simple-machines': {
        title: 'Machines Simples : Levier',
        description: 'Comment soulever lourd avec moins d\'effort',
        type: 'force',
        config: {},
        analogy: {
            title: 'La Balançoire Magique',
            content: `Pourquoi un petit enfant peut soulever un adulte sur une balançoire à bascule (Tape-Cul) ? ⚖️

C'est grâce au LEVIER !
Si l'adulte s'assoit près du centre (pivot) et l'enfant très loin... Hop ! L'enfant descend et l'adulte monte.

C'est le même principe pour ouvrir une bouteille de Gazelle avec un décapsuleur ou soulever une voiture avec un cric.
Plus le manche est long, moins on force !`
        },
        theory: `Le Levier

Un levier est une barre rigide mobile autour d'un point d'appui (Pivot).

Loi des moments :
Force 1 x Distance 1 = Force 2 x Distance 2

Pour soulever une charge lourde (F2) avec une petite force (F1), il faut que la distance (D1) soit très grande.
"Donnez-moi un point d'appui et je soulèverai le monde." - Archimède`,
        exercises: [
            { question: 'Pour soulever plus facilemement, il faut placer le point d\'appui...', options: ['Loin de la charge', 'Près de la charge', 'Au milieu exactement', 'Supprimer le point d\'appui'], correct: 1, explanation: 'Plus le pivot est près de la charge, plus le bras de levier est avantageux.' },
            { question: 'Un ciseau est-il un levier ?', options: ['Oui', 'Non', 'Seulement pour le papier', 'C\'est une poulie'], correct: 0, explanation: 'Oui, c\'est un double levier autour de la vis centrale.' }
        ],
        relatedSimulations: ['forces-motion', 'weight-mass']
    },

    'volcano-eruption': {
        title: 'Éruption Volcanique',
        description: 'Structure de la Terre et Volcans',
        type: 'tectonics',
        config: {},
        analogy: {
            title: 'La Marmite de Bouillie',
            content: `La Terre est comme une marmite de bouillie bouillante (le Magma) avec un couvercle un peu cassé (la Croûte Terrestre). 🌋🥘

Quand la bouillie bout trop fort, elle cherche à sortir par les fissures !
- Si la bouillie est liquide (Rouge), elle coule doucement (Lave).
- Si la bouillie est pâteuse (Grise) et que ça explose, ça projette des morceaux partout (Cendres et Bombes).

Les volcans sont les soupapes de sécurité de la Terre.`
        },
        theory: `Volcanisme

Magma : Roche fondue en profondeur (gaz + liquide).
Lave : Magma dégazé qui coule en surface.

Types d'éruptions :
1. Effusive (Volcan Rouge) :
- Lave fluide, coulées.
- Peu dangereux directement.
- Ex: Piton de la Fournaise.

2. Explosive (Volcan Gris) :
- Lave visqueuse, gaz sous pression.
- Nuées ardentes (gaz brûlants + cendres).
- Très dangereux.`,
        exercises: [
            { question: 'Quelle est la différence entre magma et lave ?', options: ['La couleur', 'Le magma est en profondeur, la lave en surface', 'La température', 'Aucune'], correct: 1, explanation: 'Le magma contient encore ses gaz sous pression sous terre.' },
            { question: 'Quel type de volcan est le plus dangereux ?', options: ['Effusif', 'Explosif', 'Éteint', 'Sous-marin'], correct: 1, explanation: 'Les volcans explosifs projettent des nuées ardentes mortelles.' }
        ],
        relatedSimulations: ['tectonics-plates', 'geothermics']
    },

    'sound-propagation': {
        title: 'Propagation du Son',
        description: 'Comment le son voyage-t-il ?',
        type: 'wave',
        config: {},
        analogy: {
            title: 'Le Tam-Tam Invisible',
            content: `Le son, c'est comme une bousculade dans la foule ! 🥁🗣️

Quand tu tapes sur le Tam-Tam, la peau vibre.
Elle pousse l'air devant elle, qui pousse l'air d'à côté, qui pousse l'air suivant... jusqu'à ton oreille !

Dans le vide (espace), il n'y a personne à pousser (pas d'air). Donc pas de son !
C'est pour ça que dans Star Wars, les explosions devraient être silencieuses.`
        },
        theory: `Le Son

C'est une onde mécanique progressive.
Il a besoin d'un milieu matériel pour se propager (Air, Eau, Solide).

Vitesse du son :
- Air : 340 m/s (environ 1200 km/h).
- Eau : 1500 m/s (ça va plus vite !).
- Acier : 5000 m/s.

Fréquence (Hz) :
- Grave = Basse fréquence.
- Aigu = Haute fréquence.
- Oreille humaine : 20 Hz à 20 000 Hz.`,
        exercises: [
            { question: 'Le son peut-il se propager sur la Lune ?', options: ['Oui, très vite', 'Oui, mais doucement', 'Non, c\'est le vide', 'Seulement la nuit'], correct: 2, explanation: 'Il n\'y a pas d\'atmosphère (air) sur la Lune pour transmettre les vibrations.' },
            { question: 'On voit l\'éclair avant d\'entendre le tonnerre car...', options: ['L\'œil est plus rapide', 'La lumière est plus rapide que le son', 'Le son fait un détour', 'C\'est une illusion'], correct: 1, explanation: 'Lumière (300 000 km/s) >> Son (340 m/s).' }
        ],
        relatedSimulations: ['light-speed', 'wave-interference']
    }
};

export default collegeSimulationsData;
