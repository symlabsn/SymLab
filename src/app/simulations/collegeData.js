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

**Structure de la Terre**

**Croûte**
- Continentale (30-70 km)
- Océanique (5-10 km)
- Rigide et cassante

**Manteau**
- Lithosphère (rigide)
- Asthénosphère (plastique)
- Convection thermique

**Noyau**
- Externe (liquide)
- Interne (solide)
- Très chaud (5000°C)

**Mouvements des Plaques**

**Divergence**
- Plaques s'éloignent
- Dorsales océaniques
- Création de croûte
- Exemple : Dorsale Atlantique

**Convergence**
- Plaques se rapprochent
- Subduction ou collision
- Destruction de croûte
- Exemple : Himalaya

**Coulissage**
- Plaques glissent
- Failles transformantes
- Exemple : Faille de San Andreas

**Conséquences**

**Séismes**
- Libération d'énergie
- Ondes sismiques
- Magnitude (Richter)

**Volcans**
- Magma en surface
- Zones de subduction
- Points chauds

**Montagnes**
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

**Équation Chimique**

Réactifs → Produits

Exemple : 2 H₂ + O₂ → 2 H₂O

**Loi de Conservation**

**Loi de Lavoisier**
"Rien ne se perd, rien ne se crée, tout se transforme"
- Masse totale constante
- Nombre d'atomes conservé
- Équation équilibrée

**Types de Réactions**

**Synthèse**
A + B → AB
Exemple : 2 H₂ + O₂ → 2 H₂O

**Décomposition**
AB → A + B
Exemple : 2 H₂O → 2 H₂ + O₂

**Substitution**
AB + C → AC + B
Exemple : Fe + CuSO₄ → FeSO₄ + Cu

**Double Déplacement**
AB + CD → AD + CB
Exemple : NaCl + AgNO₃ → NaNO₃ + AgCl

**Énergie**

**Réaction Exothermique**
- Libère de l'énergie (chaleur)
- Exemple : combustion

**Réaction Endothermique**
- Absorbe de l'énergie
- Exemple : photosynthèse

**Indicateurs**

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

**Les Trois Lois de Newton**

**1ère Loi (Inertie)**
Un objet au repos reste au repos, un objet en mouvement continue son mouvement rectiligne uniforme, sauf si une force extérieure agit sur lui.

**2ème Loi (Fondamentale)**
F = m × a
- F : Force (Newton, N)
- m : Masse (kilogramme, kg)
- a : Accélération (m/s²)

**3ème Loi (Action-Réaction)**
À toute action correspond une réaction égale et opposée.

**Types de Forces**

**Force de Gravité**
- Attraction vers le centre de la Terre
- F = m × g (g = 9,8 m/s²)
- Poids d'un objet

**Force de Frottement**
- S'oppose au mouvement
- Dépend de la surface
- Ralentit les objets

**Force Normale**
- Perpendiculaire à la surface
- Support d'un objet

**Tension**
- Dans une corde ou un câble
- Tire sur l'objet

**Mouvement**

**Vitesse**
v = distance / temps
Unité : m/s ou km/h

**Accélération**
a = Δv / Δt
Changement de vitesse

**Chute Libre**
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

**Structure de l'ADN**

**Double Hélice**
- Découverte par Watson et Crick (1953)
- Deux brins enroulés
- Forme d'escalier en colimaçon

**Composants**
- Sucre (désoxyribose)
- Phosphate
- Bases azotées : A, T, G, C

**Appariement des Bases**
- Adénine (A) ↔ Thymine (T)
- Guanine (G) ↔ Cytosine (C)
- Liaisons hydrogène

**Gènes et Chromosomes**

**Gène**
- Segment d'ADN
- Code pour une protéine
- Unité d'hérédité

**Chromosome**
- ADN condensé
- Humain : 23 paires (46 total)
- 22 paires autosomes + 1 paire sexuelle (XX ou XY)

**Hérédité**

**Lois de Mendel**

**1ère Loi (Uniformité)**
Tous les hybrides F1 sont identiques

**2ème Loi (Ségrégation)**
Les allèles se séparent lors de la formation des gamètes

**3ème Loi (Indépendance)**
Les gènes se transmettent indépendamment

**Génotype et Phénotype**
- Génotype : composition génétique
- Phénotype : caractères observables

**Allèles**
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

**Défenses Non Spécifiques**

**Barrières Physiques**
- Peau (imperméable)
- Muqueuses (nez, bouche)
- Larmes, salive (lysozyme)

**Réponse Inflammatoire**
- Rougeur, chaleur, douleur, gonflement
- Augmentation du flux sanguin
- Arrivée des globules blancs

**Phagocytose**
- Macrophages
- Neutrophiles
- "Mangent" les microbes

**Défenses Spécifiques**

**Immunité Humorale**
- Lymphocytes B
- Production d'anticorps
- Neutralisation des antigènes

**Immunité Cellulaire**
- Lymphocytes T
- Destruction des cellules infectées
- Lymphocytes T auxiliaires (CD4)
- Lymphocytes T cytotoxiques (CD8)

**Anticorps**

**Structure**
- Forme de Y
- Sites de liaison spécifiques
- Immunoglobulines (IgG, IgM, IgA, etc.)

**Fonctions**
- Neutralisation
- Agglutination
- Précipitation
- Activation du complément

**Vaccination**

**Principe**
- Introduction d'antigène atténué
- Stimulation de la mémoire immunitaire
- Protection à long terme

**Types**
- Vaccins vivants atténués
- Vaccins inactivés
- Vaccins à sous-unités

**Maladies**
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

**Composition**

**Noyau**
- Protons (charge +)
- Neutrons (charge 0)
- Très dense
- 99,9% de la masse

**Nuage Électronique**
- Électrons (charge -)
- Orbitales (niveaux d'énergie)
- Presque vide
- Détermine les propriétés chimiques

**Caractéristiques**

**Numéro Atomique (Z)**
- Nombre de protons
- Définit l'élément
- Exemple : Carbone Z=6

**Nombre de Masse (A)**
- A = Protons + Neutrons
- Exemple : Carbone-12 (6p + 6n)

**Isotopes**
- Même Z, différent A
- Même élément, masses différentes
- Exemple : Carbone-12, Carbone-14

**Modèles Atomiques**

**Modèle de Rutherford (1911)**
- Noyau central
- Électrons en orbite
- Système planétaire

**Modèle de Bohr (1913)**
- Niveaux d'énergie quantifiés
- Couches électroniques (K, L, M, N)
- Sauts quantiques

**Modèle Quantique Moderne**
- Orbitales (s, p, d, f)
- Probabilité de présence
- Principe d'incertitude

**Ions**

**Cation** (charge +)
- Perte d'électrons
- Exemple : Na⁺

**Anion** (charge -)
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

**Formes d'Énergie**

**Énergie Cinétique (Ec)**
- Énergie du mouvement
- Ec = ½ m v²
- Dépend de la masse et de la vitesse

**Énergie Potentielle (Ep)**
- Énergie de position
- Ep = m g h
- Dépend de la hauteur

**Énergie Thermique**
- Énergie de chaleur
- Agitation moléculaire

**Énergie Chimique**
- Liaisons chimiques
- Aliments, carburants

**Énergie Électrique**
- Mouvement d'électrons
- Courant électrique

**Énergie Lumineuse**
- Rayonnement électromagnétique
- Photons

**Loi de Conservation**

**Principe**
Énergie totale = constante
E_initiale = E_finale

**Transformations**

**Pendule**
Ep (haut) ↔ Ec (bas)

**Chute Libre**
Ep → Ec + chaleur (frottements)

**Centrale Électrique**
Chimique → Thermique → Mécanique → Électrique

**Photosynthèse**
Lumineuse → Chimique

**Rendement**

**Définition**
η = (Énergie utile / Énergie totale) × 100%

**Pertes**
- Frottements
- Chaleur
- Son

**Exemple**
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
    }
};

export default collegeSimulationsData;
