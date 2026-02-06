// Données détaillées des simulations du Lycée avec analogies sénégalaises
// Couvre Seconde, Première et Terminale (Séries S, L)

export const lyceeSimulationsData = {
    // ========== SECONDE ==========
    'magnetic-field-earth': {
        title: 'Champ Magnétique Terrestre',
        description: 'Boussole et pôles magnétiques',
        type: 'magnetic-field',
        config: {},
        analogy: {
            title: 'La Terre est un Aimant Géant',
            content: `La Terre se comporte comme s'il y avait un énorme barreau aimanté en son centre ! 🌎🧲

Le Pôle Nord géographique (en haut de la carte) attire le pôle NORD de la boussole.
Donc... magnétiquement, c'est un Pôle SUD ! (Car les opposés s'attirent).
C'est piégeux hein ?

Ce champ magnétique nous protège des particules dangereuses du soleil (Vent solaire) comme un bouclier de force invisible.`
        },
        theory: `Champ Magnétique Terrestre
La Terre possède un champ magnétique dipolaire généré par les mouvements de fer liquide dans le noyau externe (Effet dynamo).

Boussole :
- L'aiguille est un petit aimant.
- Elle s'aligne sur les lignes de champ.
- Indique le Nord Magnétique (légèrement différent du Nord Géographique, décalage = Déclinaison).

Composantes du champ :
- Horizontale (Bh)
- Inclinaison (I) : Angle avec l'horizontale.`,
        exercises: [
            { question: 'Le pôle Nord de la boussole pointe vers...', options: ['Le Sud Magnétique (qui est au Nord Géographique)', 'Le Sud Géographique', 'L\'Est', 'Le ciel'], correct: 0, explanation: 'Le Nord de la boussole est attiré par le Sud magnétique terrestre (situé près du Pôle Nord géo).' },
            { question: 'Quelle est l\'origine du champ magnétique terrestre ?', options: ['Des aimants enterrés', 'Le noyau de fer liquide', 'L\'atmosphère', 'La lune'], correct: 1, explanation: 'Les mouvements de convection du fer liquide dans le noyau externe créent le champ.' }
        ],
        relatedSimulations: ['electromagnetic-induction', 'forces-motion']
    },
    'homeostasis-regulation': {
        title: 'Régulation de la Glycémie',
        description: 'Insuline, Glucagon et Homéostasie',
        type: 'blood-sugar-regulation',
        config: {},
        analogy: {
            title: 'Le Thermostat du Sucre',
            content: `Ton corps veut toujours avoir environ 1g de sucre par litre de sang. C'est la loi ! 🍬👮

Si tu manges trop de bonbons (Hyperglycémie) :
Le Pancréas envoie l'Insuline (les maçons) qui stocke le sucre dans le foie et les muscles.

Si tu as faim et que tu cours (Hypoglycémie) :
Le Pancréas envoie le Glucagon (les démolisseurs) qui casse les stocks pour libérer du sucre dans le sang.

C'est un équilibre constant pour ne pas tomber dans les pommes ou abîmer les organes.`
        },
        theory: `Homéostasie : La Glycémie
Maintien de la concentration de glucose sanguin (environ 1 g/L).

Organe capteur et effecteur : Pancréas (Îlots de Langerhans).
1. Cellules Bêta : Sécrètent l'Insuline (Hypoglycémiante) quand la glycémie monte.
   - Favorise le stockage (Glycogénogenèse) dans le foie/muscles.
   - Favorise l'entrée du glucose dans les cellules.

2. Cellules Alpha : Sécrètent le Glucagon (Hyperglycémiante) quand la glycémie baisse.
   - Favorise le déstockage (Glycogénolyse) hépatique.

Diabète : Dysfonctionnement de ce système.`,
        exercises: [
            { question: 'Quelle hormone fait baisser le sucre dans le sang ?', options: ['Glucagon', 'Adrénaline', 'Insuline', 'Vitamine C'], correct: 2, explanation: 'L\'Insuline est la seule hormone hypoglycémiante.' },
            { question: 'Où est stocké le glucose en réserve ?', options: ['Dans l\'estomac', 'Dans le foie et les muscles', 'Dans le cerveau', 'Dans les os'], correct: 1, explanation: 'Sous forme de Glycogène dans le foie et les muscles.' }
        ],
        relatedSimulations: ['physiological-changes', 'digestive-system']
    },
    'vision-eye': {
        title: 'L\'Œil et la Vision',
        description: 'Formation des images et lentilles',
        type: 'lens-optics',
        config: {},
        analogy: {
            title: 'L\'Œil est un Appareil Photo',
            content: `Ton œil fonctionne exactement comme une caméra ! 📷👁️

- La Cornée et le Cristallin sont l'Objectif (Lentilles) : Ils font converger la lumière.
- La Pupille est le Diaphragme : Elle s'ouvre ou se ferme selon la lumière.
- La Rétine est le Capteur (Pellicule) : L'image s'imprime dessus... mais à l'envers !
- Le Cerveau est l'Ordinateur : Il remet l'image à l'endroit.

Si le cristallin est trop bombé (Myope), l'image se forme AVANT la rétine (flou de loin).
S'il est trop plat (Hypermétrope), l'image se forme APRÈS la rétine (flou de près).`
        },
        theory: `Optique de l'Œil
L'œil est un système optique convergent.

Composants optiques :
1. Cristallin : Lentille biconvexe souple.
2. Accommodation : Le cristallin se bombe pour voir de près (augmente sa vergence).
3. Rétine : Écran où se forme l'image (réelle et renversée).

Défauts :
- Myopie : Œil trop long ou trop convergent. Correction : Lentille divergente.
- Hypermétropie : Œil trop court. Correction : Lentille convergente.
- Presbytie : Le cristallin perd sa souplesse (ne peut plus accommoder).`,
        exercises: [
            { question: 'Sur la rétine, l\'image est...', options: ['À l\'endroit', 'À l\'envers', 'En noir et blanc', 'Floue'], correct: 1, explanation: 'L\'image formée par une lentille convergente (cristallin) est réelle et renversée.' },
            { question: 'Pour corriger la myopie, on utilise une lentille...', options: ['Convergente', 'Divergente', 'Opaque', 'Neutre'], correct: 1, explanation: 'Le myope voit flou car ça converge trop tôt, il faut faire diverger la lumière.' }
        ],
        relatedSimulations: ['refraction-light', 'light-reflection']
    },
    'diffraction-light': {
        title: 'Diffraction de la Lumière',
        description: 'Nature ondulatoire de la lumière',
        type: 'diffraction',
        config: {},
        analogy: {
            title: 'La Lumière qui contourne les obstacles',
            content: `Si tu cries derrière un mur, on t'entend. Le son contourne le mur. C'est la Diffraction. 🗣️🧱
La lumière fait pareil, mais seulement si le trou est tout petit (minuscule) !

Si la lumière passe par un trou d'épingle ou un cheveu, elle ne va pas tout droit. Elle s'étale !
Ça prouve que la lumière est une ONDE (comme des vagues), pas juste des billes.`
        },
        theory: `Diffraction
Modification de la direction de propagation d'une onde lorsqu'elle rencontre une ouverture ou un obstacle de dimension proche de sa longueur d'onde.

Relation :
θ = λ / a
- θ : Écart angulaire (demi-largeur tache centrale).
- λ : Longueur d'onde.
- a : Taille de l'ouverture/obstacle.

Plus l'ouverture est petite (a petit), plus ça diffracte (θ grand, la tache s'étale).`,
        exercises: [
            { question: 'La diffraction est plus visible si le trou est...', options: ['Très grand', 'Très petit', 'Carré', 'Rond'], correct: 1, explanation: 'Il faut que la taille du trou soit proche de la longueur d\'onde (très petite).' },
            { question: 'La diffraction prouve que la lumière est...', options: ['Une particule', 'Une onde', 'De la chaleur', 'Magnétique'], correct: 1, explanation: 'C\'est une caractéristique des ondes.' }
        ],
        relatedSimulations: ['wave-interference', 'refraction-light']
    },
    'electrolysis': {
        title: 'Électrolyse',
        description: 'Réactions chimiques forcées par le courant',
        type: 'electrochemical',
        config: {},
        analogy: {
            title: 'Remonter le Courant de la Rivière',
            content: `Dans une pile, la chimie crée de l'électricité (ça descend la rivière tout seul).
Dans l'électrolyse, on utilise l'électricité pour FORCER une réaction chimique (on remonte la rivière à la rame) ! 🚣⚡

On branche un générateur.
- Il arrache les électrons d'un côté (Oxydation forcée).
- Il les pousse de l'autre (Réduction forcée).

C'est comme ça qu'on recharge ton téléphone ou qu'on plaque de l'or sur des bijoux !`
        },
        theory: `Électrolyse
Transformation chimique forcée par le passage d'un courant électrique imposé par un générateur.
Réaction inverse de la transformation spontanée.

Pôles :
- Anode (+) : Reliée au + du générateur. Oxydation (départ e⁻).
- Cathode (-) : Reliée au - du générateur. Réduction (arrivée e⁻).

Attention : Dans l'électrolyse, l'Anode est POSITIVE (contraire de la pile) ! Mais c'est toujours le siège de l'Oxydation.`,
        exercises: [
            { question: 'L\'électrolyse est une transformation...', options: ['Spontanée', 'Forcée', 'Naturelle', 'Rapide'], correct: 1, explanation: 'Elle nécessite un apport d\'énergie électrique externe.' },
            { question: 'À la cathode (-), on a...', options: ['Une oxydation', 'Une réduction', 'Rien', 'Une explosion'], correct: 1, explanation: 'Cathode = Réduction (Consonne/Consonne).' }
        ],
        relatedSimulations: ['redox-reactions', 'ions-formation']
    },
    'quality-control-titration': {
        title: 'Contrôle Qualité par Titrage',
        description: 'Vérification de la teneur d\'un produit',
        type: 'titration',
        config: {},
        analogy: {
            title: 'L\'Inspecteur des Étiquettes',
            content: `Sur la bouteille de lait, c'est écrit "contient 10g de calcium". Vrai ou Faux ? 🥛🕵️
Le chimiste fait un Titrage pour vérifier.

Il prend le lait, et ajoute goutte à goutte un réactif qui "mange" le calcium.
Il compte combien de gouttes il faut pour tout manger.
S'il faut beaucoup de gouttes, c'est qu'il y a beaucoup de calcium !

Si le résultat n'est pas bon, l'usine a triché (ou s'est trompée) !`
        },
        theory: `Titrage et Contrôle Qualité
Utilisation du titrage pour vérifier une indication (concentration, masse, degré d'acidité).

Méthodes :
- Colorimétrique (changement couleur).
- pH-métrique (suivi pH).
- Conductimétrique (suivi conductivité).

Calcul :
À l'équivalence : n(titré) = n(titrant) / coeff
m = n · M
On compare la masse trouvée à la valeur affichée (écart relatif).`,
        exercises: [
            { question: 'Le but d\'un titrage est de...', options: ['Créer un nouveau produit', 'Déterminer une quantité inconnue', 'Chauffer la solution', 'Changer la couleur'], correct: 1, explanation: 'C\'est une méthode d\'analyse quantitative.' },
            { question: 'L\'écart relatif permet de évaluer...', options: ['La température', 'La précision/justesse par rapport à la théorie', 'Le temps', 'Le coût'], correct: 1, explanation: 'C\'est l\'erreur en pourcentage entre la valeur mesurée et la valeur théorique.' }
        ],
        relatedSimulations: ['acid-base-titration', 'molar-concentration']
    },
    'meiosis-diversity': {
        title: 'Méiose et Diversité',
        description: 'Brassage génétique et formation des gamètes',
        type: 'chromosomes-division',
        config: {},
        analogy: {
            title: 'Le Grand Mélange des Cartes',
            content: `Pourquoi n'es-tu pas la copie conforme de ton frère ou ta sœur ? 🃏👨‍👩‍👧‍👦
C'est grâce à la Méiose !

Quand on fabrique les spermatozoïdes ou les ovules :
1. Brassage Interchromosomique : On mélange les chromosomes de Papy et Mamy au hasard. (Comme battre un jeu de cartes).
2. Brassage Intrachromosomique (Crossing-over) : Les chromosomes s'échangent des morceaux ! (Comme si on coupait et recollait des bouts de cartes).

Résultat : Chaque bébé est une combinaison unique et inédite !`
        },
        theory: `Méiose et Diversité Génétique
La méiose produit 4 cellules haploïdes (n) à partir d'une cellule diploïde (2n).

1. Brassage Intrachromosomique (Prophase I)
- Échange de segments entre chromosomes homologues (Crossing-over).
- Création de nouvelles combinaisons d'allèles.

2. Brassage Interchromosomique (Anaphase I)
- Séparation aléatoire des chromosomes homologues.
- 2^23 combinaisons possibles chez l'homme !

Fécondation : Rencontre aléatoire des gamètes, amplifie encore la diversité.`,
        exercises: [
            { question: 'La méiose produit...', options: ['2 cellules identiques', '4 cellules génétiquement différentes', '2 cellules différentes', '4 cellules identiques'], correct: 1, explanation: '4 gamètes tous différents grâce aux brassages.' },
            { question: 'Le crossing-over a lieu en...', options: ['Prophase I', 'Métaphase I', 'Anaphase II', 'Télophase'], correct: 0, explanation: 'Lors de l\'appariement des homologues en début de méiose.' }
        ],
        relatedSimulations: ['dna-replication', 'cell-division']
    },
    'adaptive-immunity': {
        title: 'Immunité Adaptative',
        description: 'Lymphocytes B et T',
        type: 'immune',
        config: {},
        analogy: {
            title: 'Les Forces Spéciales du Corps',
            content: `L'Immunité Innée (globules blancs normaux) tire sur tout ce qui bouge.
L'Immunité Adaptative (LB et LT), c'est le GIGN ! 👮‍♂️🎯

1. Ils identifient l'ennemi précis (Virus X ou Y).
2. Les Lymphocytes B (B pour Bombardiers) fabriquent des missiles téléguidés (Anticorps) spécifiques à cet ennemi.
3. Les Lymphocytes T (T pour Tueurs) vont au corps-à-corps détruire les cellules infectées (Le "Baiser de la mort").

Ils gardent une MÉMOIRE. La prochaine fois que le virus revient, ils l'éliminent avant même que tu tombes malade !`
        },
        theory: `Immunité Adaptative (Spécifique)
Intervient après l'immunité innée si l'infection persiste.

1. Lymphocytes B (LB)
- Immunité à médiation humorale.
- Se différencient en Plasmocytes sécréteurs d'ANTICORPS.
- Anticorps neutralisent les antigènes circulants.

2. Lymphocytes T (LT)
- LT CD4 (Auxiliaires) : Chefs d'orchestre, activent les autres.
- LT CD8 (Cytotoxiques) : Détruisent les cellules infectées (Lyse).

3. Mémoire Immunitaire : Base de la vaccination.`,
        exercises: [
            { question: 'Qui produit les anticorps ?', options: ['Les Lymphocytes T', 'Les Lymphocytes B (Plasmocytes)', 'Les Macrophages', 'Les globules rouges'], correct: 1, explanation: 'Les LB se transforment en usines à anticorps.' },
            { question: 'Quel est le rôle des LT CD8 ?', options: ['Manger les bactéries', 'Produire des anticorps', 'Tuer les cellules infectées', 'Transporter l\'oxygène'], correct: 2, explanation: 'Ce sont des tueurs (cytotoxiques) qui détruisent les cellules corrompues.' }
        ],
        relatedSimulations: ['immune-system', 'cell-respiration']
    },
    'geothermics': {
        title: 'Géothermie',
        description: 'L\'énergie de la Terre',
        type: 'energy',
        config: {},
        analogy: {
            title: 'La Bouilloire Souterraine',
            content: `Sous nos pieds, ça chauffe ! 🌋🔥
Plus on creuse, plus il fait chaud (Gradient géothermique).

La Terre est comme une bouilloire qui ne s'éteint jamais (grâce à la radioactivité des roches).
On peut utiliser cette chaleur pour :
- Chauffer des maisons (Géothermie basse énergie).
- Faire tourner des turbines et faire de l'électricité (Géothermie haute énergie, comme en Islande).

C'est une énergie renouvelable et propre !`
        },
        theory: `Géothermie
Exploitation de la chaleur interne de la Terre.

Origine de la chaleur :
- Désintégration radioactive (Uranium, Thorium, Potassium) dans le manteau/croûte.
- Chaleur résiduelle de la formation de la Terre.

Utilisation :
1. Très basse énergie : Pompe à chaleur (maison).
2. Basse énergie : Chauffage urbain (nappes chaudes).
3. Haute énergie : Production d'électricité (Vapeur sous pression).

Gradient géothermique moyen : +30°C par km de profondeur.`,
        exercises: [
            { question: 'D\'où vient la chaleur de la Terre ?', options: ['Du soleil', 'De la radioactivité des roches', 'Du magma uniquement', 'Des volcans'], correct: 1, explanation: 'Principalement de la désintégration des éléments radioactifs naturels.' },
            { question: 'La géothermie est une énergie...', options: ['Fossile', 'Polluante', 'Renouvelable', 'Intermittente'], correct: 2, explanation: 'La chaleur de la Terre est inépuisable à notre échelle.' }
        ],
        relatedSimulations: ['radioactivity', 'tectonics-plates']
    },
    'rectilinear-motion': {
        title: 'Mouvement Rectiligne',
        description: 'Vitesse, distance et temps',
        type: 'energy',
        config: {},
        analogy: {
            title: 'Le Taxi-Brousse sur l\'Autoroute',
            content: `Le mouvement rectiligne uniforme, c'est comme un taxi-brousse sur l'autoroute à péage ! 🚐💨

Si le chauffeur bloque son compteur à 100 km/h :
- En 1 heure, il parcourt 100 km.
- En 2 heures, il parcourt 200 km.
C'est régulier, ça ne change pas. C'est "Uniforme".

Si le chauffeur accélère pour doubler (Mouvement Accéléré), sa vitesse augmente.
S'il freine pour le péage (Mouvement Décéléré), sa vitesse diminue.

La distance, c'est comme le nombre de bornes kilométriques qu'il a passées.`
        },
        theory: `Mouvement et Vitesse
1. Référentiel : Objet par rapport auquel on étudie le mouvement (ex: le sol).
2. Trajectoire : Ensemble des positions occupées. Regtiligne = Ligne droite.
3. Vitesse Moyenne : v = d / t (Distance / Temps).
4. Mouvement Rectiligne Uniforme (MRU) : Vitesse constante.
5. Mouvement Rectiligne Varié : La vitesse change (Accélération/Décélération).`,
        exercises: [
            { question: 'Si je fais 100km en 2h, quelle est ma vitesse ?', options: ['20 km/h', '50 km/h', '200 km/h', '100 km/h'], correct: 1, explanation: 'v = d/t = 100/2 = 50 km/h.' },
            { question: 'Dans un MRU, l\'accélération est...', options: ['Constante', 'Nulle', 'Positive', 'Variable'], correct: 1, explanation: 'Si la vitesse est constante, l\'accélération est nulle (pas de changement).' }
        ],
        relatedSimulations: ['forces-motion', 'energy-conservation']
    },
    'refraction-light': {
        title: 'Réfraction de la Lumière',
        description: 'Loi de Snell-Descartes et déviation',
        type: 'wave',
        config: {},
        analogy: {
            title: 'Le Bâton Cassé dans l\'Eau',
            content: `As-tu déjà mis un bâton dans l'eau ? On dirait qu'il est cassé ! 🥢💧
C'est la Réfraction.

Imagine une voiture qui roule sur le goudron (l'air, rapide) et qui arrive dans le sable (l'eau, lent) en biais.
La roue qui touche le sable en premier ralentit, l'autre continue vite.
Résultat : La voiture tourne brusquement !

La lumière fait pareil quand elle change de milieu (Air -> Eau). Elle change de direction.`
        },
        theory: `Loi de Snell-Descartes
n₁ · sin(i₁) = n₂ · sin(i₂)

- n₁ et n₂ : Indices de réfraction des milieux (Air ≈ 1, Eau ≈ 1.33, Verre ≈ 1.5).
- i₁ : Angle d'incidence.
- i₂ : Angle de réfraction.

Plus le milieu est "dense" optiquement (n grand), plus la lumière est freinée et se rapproche de la normale.`,
        exercises: [
            { question: 'Pourquoi le bâton semble brisé dans l\'eau ?', options: ['Magie', 'Réflexion', 'Réfraction', 'Diffraction'], correct: 2, explanation: 'C\'est la réfraction : la lumière change de direction en changeant de milieu.' },
            { question: 'Si la lumière passe de l\'air à l\'eau, elle...', options: ['Accélère', 'Ralentit', 'Garde la même vitesse', 'S\'arrête'], correct: 1, explanation: 'Elle ralentit car l\'eau est plus réfringente que l\'air.' }
        ],
        relatedSimulations: ['light-reflection', 'wave-interference']
    },
    'light-spectrum': {
        title: 'Spectres Lumineux',
        description: 'Dispersion par un prisme et arc-en-ciel',
        type: 'light-propagation',
        config: {},
        analogy: {
            title: 'L\'Arc-en-Ciel du Prisme',
            content: `La lumière blanche du soleil est un mélange de toutes les couleurs ! 🌈
Le prisme (ou la goutte de pluie) est comme un trieur.

Le Rouge est le plus costaud, il est peu dévié.
Le Violet est le plus fragile, il est très dévié.

Résultat : Ils sont séparés à la sortie ! C'est comme trier des billes en les lançant dans un virage.`
        },
        theory: `Dispersion de la Lumière
La lumière blanche est polychromatique (plusieurs longueurs d'onde).
L'indice de réfraction du verre dépend de la longueur d'onde (couleur).
- Le Violet (400nm) est plus dévié.
- Le Rouge (800nm) est moins dévié.

Spectre d'émission : Lumière émise par un gaz chaud (raies colorées sur fond noir).
Spectre d'absorption : Lumière traversant un gaz froid (raies noires sur fond coloré).`,
        exercises: [
            { question: 'Quelle couleur est la plus déviée par un prisme ?', options: ['Rouge', 'Vert', 'Violet', 'Jaune'], correct: 2, explanation: 'Le Violet a la plus courte longueur d\'onde et est le plus dévié.' },
            { question: 'Un corps chaud émet un spectre...', options: ['De raies', 'Continu', 'D\'absorption', 'Sonore'], correct: 1, explanation: 'Un corps chaud (comme le soleil ou une lampe) émet un spectre continu.' }
        ],
        relatedSimulations: ['refraction-light', 'wave-interference']
    },
    'gravitation-universal': {
        title: 'Gravitation Universelle',
        description: 'Attraction entre les masses',
        type: 'earth-movement',
        config: {},
        analogy: {
            title: 'L\'Aimant Universel',
            content: `Tout attire tout dans l'univers ! 🌍🌕
La Terre attire la Lune, mais la Lune attire aussi la Terre !

C'est comme deux aimants.
Plus ils sont gros (Masse), plus ils s'attirent fort.
Plus ils sont loin (Distance), moins ils s'attirent.

C'est cette force invisible qui garde nos pieds sur terre et la Lune dans le ciel.`
        },
        theory: `Loi de la Gravitation (Newton)
F = G · (mA · mB) / d²

- F : Force d'attraction (N)
- G : Constante universelle (6.67 x 10⁻¹¹ N·m²/kg²)
- mA, mB : Masses des corps (kg)
- d : Distance entre les centres (m)

La force diminue très vite quand la distance augmente (loi en carré inverse).`,
        exercises: [
            { question: 'Si la distance double, la force...', options: ['Double', 'Reste pareille', 'Est divisée par 2', 'Est divisée par 4'], correct: 3, explanation: 'La force est divisée par d² = 2² = 4.' },
            { question: 'La force exercée par la Terre sur la Lune est...', options: ['Plus grande que celle de la Lune sur Terre', 'Plus petite', 'Égale', 'Nulle'], correct: 2, explanation: 'Action-Réaction : Les forces sont égales en intensité (mais opposées).' }
        ],
        relatedSimulations: ['weight-mass-relation', 'forces-motion']
    },
    'periodic-table': {
        title: 'Tableau Périodique',
        description: 'Classification des éléments chimiques',
        type: 'periodic-table',
        config: {},
        analogy: {
            title: 'L\'Hôtel des Éléments',
            content: `Le tableau périodique est un grand hôtel pour atomes ! 🏨
- Les étages (Lignes/Périodes) : Plus on monte, plus les atomes ont de couches d'électrons.
- Les chambres (Colonnes/Familles) : Tous les atomes d'une même colonne se ressemblent (même nombre d'électrons sur le balcon/couche externe).

Colonne 1 (Alcalins) : Ils sont très réactifs, ils veulent donner 1 électron.
Colonne 18 (Gaz Nobles) : Ce sont les riches satisfaits, ils ne réagissent avec personne.`
        },
        theory: `Classification Périodique (Mendeleïev)
- Classés par numéro atomique Z croissant.
- Périodes (Lignes) : Nombre de couches électroniques (K, L, M...).
- Familles (Colonnes) : Même configuration électronique externe.
  - Col 1 : Alcalins (ns¹)
  - Col 2 : Alcalino-terreux (ns²)
  - Col 17 : Halogènes (ns²np⁵)
  - Col 18 : Gaz Nobles (ns²np⁶, stables)`,
        exercises: [
            { question: 'Les éléments de la même colonne ont...', options: ['La même masse', 'La même taille', 'Les mêmes propriétés chimiques', 'Le même nom'], correct: 2, explanation: 'Ils ont la même structure externe, donc les mêmes propriétés chimiques.' },
            { question: 'Quel est le gaz noble de la période 1 ?', options: ['Hélium', 'Néon', 'Argon', 'Krypton'], correct: 0, explanation: 'L\'Hélium (He) est le gaz noble de la première ligne.' }
        ],
        relatedSimulations: ['atomic-structure', 'ions-formation']
    },
    'mole-concept': {
        title: 'La Mole',
        description: 'Quantité de matière et nombre d\'Avogadro',
        type: 'mole-concept',
        config: {},
        analogy: {
            title: 'La Mole, c\'est comme la "Douzaine" des chimistes',
            content: `Les atomes sont trop petits pour être comptés un par un.
Alors les chimistes les comptent par "paquets", comme un vendeur d'œufs compte par "plateaux". 🥚📦

Une "Mole", c'est juste un GIGA paquet !
Ce paquet contient toujours 6,02 x 10²³ atomes (Nombre d'Avogadro).

C'est colossal ! Si tu avais une mole de grains de riz, ça recouvrirait tout le Sénégal sur des kilomètres de haut !`
        },
        theory: `La Mole (n)
Unité de quantité de matière.
- Nombre d'Avogadro (NA) = 6.022 x 10²³ mol⁻¹
- Relation : N = n · NA (N = nombre d'entités)

Masse Molaire (M) : Masse d'une mole d'atomes (en g/mol).
- n = m / M
  (m en g, M en g/mol)

Volume Molaire (Vm) : Pour les gaz.
- n = V / Vm (Vm ≈ 22.4 ou 24 L/mol selon T°C)`,
        exercises: [
            { question: 'Combien d\'atomes dans 2 moles de Carbone ?', options: ['12', '6.02 x 10²³', '12.04 x 10²³', '24'], correct: 2, explanation: '2 x NA = 2 x 6.02x10²³ = 12.04 x 10²³.' },
            { question: 'Quelle est l\'unité de la masse molaire ?', options: ['g', 'mol', 'g/mol', 'kg'], correct: 2, explanation: 'Grammes par mole (g/mol).' }
        ],
        relatedSimulations: ['atomic-structure', 'chemical-reactions']
    },
    'molar-concentration': {
        title: 'Concentration Molaire',
        description: 'Solutions et dilution',
        type: 'molar-concentration',
        config: {},
        analogy: {
            title: 'Le Sirop de Menthe',
            content: `La concentration, c'est la "force" de ton sirop ! 🥤
- Si tu mets beaucoup de sirop dans peu d'eau : C'est concentré (fort).
- Si tu rajoutes de l'eau : Tu dilues (ça devient moins fort).

La quantité de sirop (moles) ne change pas quand tu rajoutes de l'eau, mais le volume total augmente, donc la concentration baisse.`
        },
        theory: `Concentration Molaire (C)
C = n / V
- C : Concentration (mol/L)
- n : Quantité de matière (mol)
- V : Volume de solution (L)

Dilution :
On conserve la quantité de matière : n_initiale = n_finale
Ci · Vi = Cf · Vf
(La concentration baisse car le volume augmente)`,
        exercises: [
            { question: 'Si je double le volume d\'eau, la concentration...', options: ['Double', 'Est divisée par 2', 'Ne change pas', 'Devient nulle'], correct: 1, explanation: 'C = n/V. Si V double, C est divisée par 2.' },
            { question: 'L\'unité de la concentration molaire est...', options: ['g/L', 'mol/L', 'L/mol', '%'], correct: 1, explanation: 'Moles par Litre (mol/L).' }
        ],
        relatedSimulations: ['solutions-solubility', 'acid-base-titration']
    },
    'cell-respiration': {
        title: 'Respiration Cellulaire',
        description: 'La mitochondrie et la production d\'ATP',
        type: 'cell-respiration',
        config: {},
        analogy: {
            title: 'Le Moteur Hybride de la Cellule',
            content: `Ta cellule est comme une voiture hybride ! 🚗⚡
Elle a besoin d'énergie (ATP) pour avancer.

1. Respiration (Moteur Essence) : Utilise de l'Oxygène. C'est très efficace (36 ATP), ça va loin, mais ça pollue un peu (CO₂). Se passe dans les mitochondries.
2. Fermentation (Moteur Électrique de secours) : Sans Oxygène. C'est peu efficace (2 ATP), c'est pour les petits trajets ou quand on étouffe (sprint).`
        },
        theory: `Métabolisme Énergétique
Ensemble des réactions chimiques produisant de l'énergie.

1. Respiration Cellulaire (Aérobie)
- Utilise O₂
- Combiustion complète du glucose
- Glucose + 6O₂ → 6CO₂ + 6H₂O + 36 ATP
- Haut rendement

2. Fermentation (Anaérobie)
- Sans O₂
- Dégradation incomplète
- Lactique (muscles) ou Alcoolique (levures)
- Faible rendement (2 ATP)`,
        exercises: [
            { question: 'Quel processus produit le plus d\'énergie ?', options: ['Fermentation', 'Respiration', 'Digestion', 'Photosynthèse'], correct: 1, explanation: 'La respiration produit ~36 ATP contre 2 pour la fermentation.' },
            { question: 'Quel gaz est nécessaire pour la respiration ?', options: ['CO₂', 'N₂', 'O₂', 'Méthane'], correct: 2, explanation: 'Le Dioxygène (O₂) est le carburant comburant.' }
        ],
        relatedSimulations: ['respiration-human', 'photosynthesis']
    },
    'solar-energy-flux': {
        title: 'Flux d\'Énergie Solaire',
        description: 'Albédo et Effet de serre',
        type: 'energy',
        config: {},
        analogy: {
            title: 'La Terre sous une Couverture',
            content: `L'Effet de Serre, c'est comme dormir sous une couverture épaisse ! 🛌
Le soleil chauffe la Terre (la chaleur entre).
La Terre essaie de renvoyer la chaleur vers l'espace.
Mais les Gaz à Effet de Serre (CO₂, Méthane) agissent comme la couverture : ils gardent une partie de la chaleur.
Sans ça, il ferait -18°C ! (On gèlerait).
Mais avec trop de couvertures (pollution), on a trop chaud (Réchauffement Climatique) !

L'Albédo, c'est le miroir : La glace blanche renvoie tout le soleil. L'océan noir absorbe tout.`
        },
        theory: `Bilan Radiatif Terrestre
Le soleil envoie de l'énergie (Rayonnement solaire).

1. Albédo : Pourcentage d'énergie réfléchie directement par l'atmosphère et le sol. (Moyenne Terre ≈ 30%).
- Glace : fort albédo
- Forêt/Océan : faible albédo

2. Effet de Serre :
- Le sol absorbe le solaire et réémet des Infrarouges (IR).
- Les gaz (H₂O, CO₂, CH₄) absorbent ces IR et réchauffent l'atmosphère.
- Indispensable à la vie, mais dangereux si amplifié.`,
        exercises: [
            { question: 'Si la glace fond, l\'albédo de la Terre...', options: ['Augmente', 'Diminue', 'Reste stable', 'S\'annule'], correct: 1, explanation: 'L\'océan sombre absorbe plus que la glace blanche. Donc l\'albédo baisse (et ça chauffe plus !).' },
            { question: 'Quel est le principal gaz à effet de serre naturel ?', options: ['CO₂', 'Vapeur d\'eau', 'Ozone', 'Azote'], correct: 1, explanation: 'La vapeur d\'eau est le principal gaz à effet de serre naturel.' }
        ],
        relatedSimulations: ['water-cycle', 'ecosystem-dynamics']
    },
    'physiological-changes': {
        title: 'Physiologie à l\'Effort',
        description: 'Adaptation du corps au sport',
        type: 'human-body',
        config: {},
        analogy: {
            title: 'Le Corps en Mode Turbo',
            content: `Quand tu cours, ton corps passe en mode Turbo ! 🏃💨
Les muscles réclament plus d'énergie et d'oxygène.

1. Le Cœur (La Pompe) accélère : Pour envoyer le sang (le carburant) plus vite.
2. Les Poumons (La Ventilation) accélèrent : Pour charger plus d'oxygène et virer le CO₂.
3. La Transpiration (Le Radiateur) : Pour refroidir le moteur qui chauffe !`
        },
        theory: `Adaptations à l'Effort Physique
Pour répondre au besoin accru en O₂ et nutriments des muscles :

1. Paramètres Cardiaques
- Fréquence Cardiaque (FC) augmente.
- Volume d'Éjection Systolique (VES) augmente.
- Débit Cardiaque (DC = FC x VES) augmente fortement.

2. Paramètres Ventilatoires
- Fréquence Respiratoire augmente.
- Volume courant augmente.
- Débit Ventilatoire augmente.

3. Vasodilatation des vaisseaux musculaires (plus de sang) et vasoconstriction digestive (moins de sang).`,
        exercises: [
            { question: 'Comment calcule-t-on le débit cardiaque ?', options: ['FC + VES', 'FC / VES', 'FC x VES', 'FC - VES'], correct: 2, explanation: 'Débit = Fréquence x Volume éjecté à chaque battement.' },
            { question: 'Pourquoi transpire-t-on ?', options: ['Pour perdre du poids', 'Pour réguler la température', 'Pour éliminer l\'eau', 'Pour glisser'], correct: 1, explanation: 'L\'évaporation de la sueur refroidit le corps (Thermorégulation).' }
        ],
        relatedSimulations: ['respiration-human', 'blood-circulation']
    },

    // ========================================
    // NOUVELLES SIMULATIONS SECONDE (PHYSIQUE/CHIMIE)
    // ========================================

    'forces-inertia': {
        title: 'Principe d\'Inertie',
        description: 'Pourquoi les objets s\'arrêtent-ils (ou pas) ?',
        type: 'forces-inertia',
        config: {},
        analogy: {
            title: 'Le Glissement sur le Carrelage',
            content: `Imagine que tu glisses en chaussettes ! 🧦
- Sur du carrelage mouillé (pas de frottement) : Tu glisses à l'infini sans t'arrêter ! (C'est l'INERTIE).
- Sur du sable (frotterment fort) : Tu t'arrêtes tout de suite.

Galilée et Newton l'ont dit : "Si on ne touche à rien (pas de force), ça continue tout droit à la même vitesse POUR TOUJOURS."
C'est dur à croire sur Terre car il y a toujours des frottements (air, sol) qui nous freinent.`
        },
        theory: `Principe d'Inertie (1ère Loi de Newton)
Tout corps persévère dans son état de repos ou de mouvement rectiligne uniforme si les forces qui s'exercent sur lui se compensent (ou s'il n'y a aucune force).

ΣF = 0  ⟺  v = constante (vecteur)

Contre-intuitif :
On pense souvent qu'il faut une force pour *maintenir* le mouvement. C'est FAUX ! Il faut une force pour *changer* le mouvement (accélérer ou freiner).`,
        exercises: [
            { question: 'Si la somme des forces est nulle, l\'objet...', options: ['S\'arrête forcément', 'Accélère', 'Voit sa vitesse changer', 'Conserve sa vitesse (immobile ou MRU)'], correct: 3, explanation: 'C\'est le principe d\'inertie : vecteur vitesse constant.' },
            { question: 'Pourquoi une voiture finit-elle par s\'arrêter au point mort ?', options: ['Parce qu\'elle n\'a plus de moteur', 'À cause des frottements', 'Parce que l\'inertie disparaît', 'Car la Terre tourne'], correct: 1, explanation: 'Les frottements (air, route) sont des forces qui s\'opposent au mouvement.' }
        ],
        relatedSimulations: ['rectilinear-motion', 'forces-motion']
    },

    'sound-waves': {
        title: 'Le Son et les Signaux',
        description: 'Fréquence, Période et Oscilloscope',
        type: 'sound-waves',
        config: {},
        analogy: {
            title: 'Le Tam-Tam qui Vibre',
            content: `Le son, c'est de l'air qui tremble ! 🥁
- La Hauteur (Grave/Aigu) c'est la Vitesse de vibration (Fréquence).
  Un moustique bat des ailes très vite (Aigu). Un lion rugit lentement (Grave).
- Le Volume (Fort/Faible) c'est la taille des vibrations (Amplitude).

L'oscilloscope dessine ces vagues.
- Vagues serrées = Aigu.
- Vagues hautes = Fort.`
        },
        theory: `Signal Périodique
Un phénomène qui se répète identique à lui-même.

1. Période (T) : Durée d'un motif (en secondes, s).
2. Fréquence (f) : Nombre de motifs par seconde (en Hertz, Hz).
   f = 1 / T

3. Vitesse du son (dans l'air) : v ≈ 340 m/s.
   Dans l'eau c'est plus vite (1500 m/s) !

Ondes Audibles : 20 Hz à 20 000 Hz.`,
        exercises: [
            { question: 'Si la fréquence augmente, le son devient...', options: ['Plus fort', 'Plus grave', 'Plus aigu', 'Plus rapide'], correct: 2, explanation: 'Fréquence élevée = Son aigu.' },
            { question: 'La relation entre f et T est...', options: ['f = T', 'f = 1/T', 'f = T²', 'f = 10T'], correct: 1, explanation: 'Elles sont inverses.' }
        ],
        relatedSimulations: ['diffraction-light', 'rectilinear-motion']
    },

    'gas-laws': {
        title: 'Lois des Gaz (Boyle-Mariotte)',
        description: 'Pression et Volume',
        type: 'gas-laws',
        config: {},
        analogy: {
            title: 'La Pompe à Vélo',
            content: `Prends une seringue et bouche le bout. 💉
Si tu appuies sur le piston (tu diminues le Volume), c'est super dur ! (La Pression augmente).
Si tu tires (tu augmentes le Volume), ça aspire ! (La Pression diminue).

Les molécules de gaz sont comme des enfants excités dans une pièce. Si tu rétrécis la pièce, ils cognent beaucoup plus fort contre les murs !`
        },
        theory: `Modèle du Gaz Parfait
À température constante :

Loi de Boyle-Mariotte :
P × V = constante

- Si le Volume est divisé par 2, la Pression double !
- P : Pascal (Pa)
- V : Mètre cube (m³)

Note : 1 bar = 100 000 Pa.` ,
        exercises: [
            { question: 'Si je comprime un gaz (Volume diminue), sa pression...', options: ['Diminue', 'Augmente', 'Ne change pas', 'Devient nulle'], correct: 1, explanation: 'Les molécules sont plus serrées et cognent plus fort -> Pression monte.' },
            { question: 'La loi de Boyle-Mariotte s\'écrit...', options: ['P = V', 'P + V = 0', 'P × V = cte', 'P / V = cte'], correct: 2, explanation: 'Le produit P.V est constant à température constante.' }
        ],
        relatedSimulations: ['states-of-matter', 'mole-concept']
    },

    'extraction-distillation': {
        title: 'Hydrodistillation',
        description: 'Extraction d\'huiles essentielles',
        type: 'extraction-distillation',
        config: {},
        analogy: {
            title: 'Le Sauna des Plantes',
            content: `Pour récupérer l'odeur de la menthe, on lui fait prendre un sauna ! 🧖‍♀️🌿
La vapeur d'eau chaude traverse les feuilles et emporte les petites gouttes d'huile (l'essece).
Ensuite, on refroidit cette vapeur (dans le réfrigérant) pour qu'elle redevienne liquide.
À la fin, l'huile flotte sur l'eau (car elle est moins dense) et on peut la récupérer !`
        },
        theory: `Extraction par Hydrodistillation
Technique pour extraire des composés volatils non miscibles à l'eau.

1. Ébullition : L'eau bout et la vapeur entraîne les composés organiques (azéotrope).
2. Condensation : Le réfrigérant liquéfie les vapeurs.
3. Décantation : On sépare les deux phases (aqueuse et organique) selon leur densité.

Miscibilité :
L'huile essentielle n'est généralement pas miscible à l'eau (formation de 2 phases).`,
        exercises: [
            { question: 'Quel est le rôle du réfrigérant ?', options: ['Chauffer', 'Mélanger', 'Liquéfier les vapeurs', 'Filtrer'], correct: 2, explanation: 'Il refroidit les gaz pour qu\'ils redeviennent liquides.' },
            { question: 'Pourquoi récupère-t-on l\'huile essentielle au-dessus de l\'eau ?', options: ['Elle est plus dense', 'Elle est moins dense', 'Elle est miscible', 'Elle est gazeuse'], correct: 1, explanation: 'Généralement d < 1, donc elle flotte.' }
        ],
        relatedSimulations: ['states-of-matter', 'molar-concentration']
    },

    'atomic-structure-seconde': {
        title: 'Cortège Électronique',
        description: 'Couches K, L, M et règles de stabilité',
        type: 'atomic-structure-seconde',
        config: {},
        analogy: {
            title: 'Le Bus Tata et ses Sièges',
            content: `Les électrons remplissent les couches autour du noyau comme des passagers dans un Bus Tata ! 🚌
1ère rangée (K) : 2 places seulement. (Trop petit !)
2ème rangée (L) : 8 places.
3ème rangée (M) : 8 places.

Règle d'or : On remplit toujours les rangées du fond (proches du chauffeur/noyau) d'abord.
Quand une rangée est pleine, on passe à la suivante.
Les électrons de la dernière rangée (periphérique) sont les plus importants : c'est eux qui font la chimie !`
        },
        theory: `Structure Électronique
Répartition des électrons en couches (n=1, 2, 3...).

Règles de remplissage :
1. Couche K (n=1) : max 2 électrons.
2. Couche L (n=2) : max 8 électrons.
3. Couche M (n=3) : max 8 électrons (simplifié Lycée).

Électrons de Valence :
Ceux de la dernière couche occupée. Ils déterminent les propriétés chimiques et la famille dans le tableau périodique.

Stabilité (Octet/Duet) :
Les atomes veulent avoir leur couche externe PLEINE (2 ou 8 e⁻) pour ressembler aux Gaz Nobles.`,
        exercises: [
            { question: 'Combien d\'électrons max sur la couche L ?', options: ['2', '8', '18', '32'], correct: 1, explanation: 'La couche L sature à 8 électrons.' },
            { question: 'Le Carbone (Z=6) a pour structure...', options: ['(K)2 (L)4', '(K)4 (L)2', '(K)6', '(L)6'], correct: 0, explanation: '6 électrons total : 2 sur K (plein), reste 4 sur L.' }
        ],
        relatedSimulations: ['periodic-table', 'mole-concept']
    },

    'chromatography': {
        title: 'Chromatographie (CCM)',
        description: 'Séparation des espèces chimiques',
        type: 'chromatography',
        config: {},
        analogy: {
            title: 'La Course des Colorants',
            content: `C'est comme une course à pied dans le sable ! 🏃‍♂️🏖️
Les colorants sont les coureurs. L'éluant (le liquide) les pousse.
Certains coureurs sont très lourds ou collent au sable (phase fixe) : ils n'avancent pas vite.
D'autres sont légers et glissent bien : ils montent très haut !

À la fin, tout le monde est séparé selon sa vitesse. On peut voir de quoi est fait le mélange.`
        },
        theory: `Chromatographie sur Couche Mince (CCM)
Technique de séparation et d'identification.

Principe :
Migration différentielle des espèces d'un mélange entraînés par un éluant (phase mobile) sur un support (phase fixe).

Rapport Frontal (Rf) :
Rf = h (espèce) / H (éluant)
Chaque espèce a un Rf caractéristique pour un éluant donné.
Si on voit 2 taches verticalement = C'est un mélange !`,
        exercises: [
            { question: 'Si un dépôt se sépare en 3 taches, c\'est...', options: ['Un corps pur', 'Un mélange', 'De l\'eau', 'Impossible'], correct: 1, explanation: 'Plusieurs taches = Plusieurs composants différents.' },
            { question: 'Le rapport frontal Rf est toujours...', options: ['Supérieur à 1', 'Inférieur à 1', 'Égal à 0', 'Infini'], correct: 1, explanation: 'Rf = petit h / grand H. Donc toujours < 1.' }
        ],
        relatedSimulations: ['extraction-distillation', 'chemical-tests']
    },

    // === CHIMIE 2NDE S - SIMULATIONS IMMERSIVES ===
    'separation-lab': {
        title: 'Laboratoire de Séparation',
        description: 'Filtration, décantation, distillation et chromatographie',
        type: 'separation-lab',
        config: {},
        analogy: {
            title: 'Le Trieur de Mélanges',
            content: `Pour séparer des mélanges, il faut connaître leurs différences ! 🧪

- **Filtration** : Sépare un solide d'un liquide. Comme passer le sable avec une passoire.
- **Décantation** : Sépare deux liquides non miscibles. Comme l'huile et l'eau qui se séparent seules.
- **Distillation** : Sépare deux liquides miscibles par leurs points d'ébullition différents.
- **Chromatographie** : Les colorants font la course sur le papier !`
        },
        theory: `Techniques de Séparation des Mélanges

1. **Filtration** : Séparation solide/liquide
   - Le filtre retient le solide (résidu)
   - Le liquide passe (filtrat)

2. **Décantation** : Pour liquides non miscibles
   - Les phases se séparent par différence de densité
   - Ampoule à décanter

3. **Distillation** : Pour liquides miscibles
   - Exploitation des points d'ébullition différents
   - Chauffage → Vaporisation → Condensation

4. **Chromatographie** : Pour colorants et composés
   - Migration différentielle sur support
   - Rapport frontal Rf = h/H`,
        exercises: [
            { question: 'Pour séparer eau + sable, quelle technique ?', options: ['Distillation', 'Filtration', 'Chromatographie', 'Électrolyse'], correct: 1, explanation: 'Le sable est solide, l eau est liquide. La filtration les sépare.' },
            { question: 'Pour séparer eau + huile, quelle technique ?', options: ['Filtration', 'Décantation', 'Distillation', 'Catalyse'], correct: 1, explanation: 'L huile et l eau ne se mélangent pas, elles se séparent par décantation.' }
        ],
        relatedSimulations: ['chromatography', 'chemical-tests', 'extraction-distillation']
    },

    'lewis-structure': {
        title: 'Structure de Lewis',
        description: 'Visualisation 3D des molécules et liaisons',
        type: 'lewis-structure',
        config: {},
        analogy: {
            title: 'Les Mariage des Atomes',
            content: `Les atomes veulent être stables ! 💍
            
Un atome est heureux quand sa couche externe est pleine (2 ou 8 électrons).
Pour y arriver, ils partagent des électrons. C'est le mariage covalent !

- **H** a besoin de 1 électron (célibataire, 1 liaison)
- **O** a besoin de 2 électrons (2 liaisons)
- **N** a besoin de 3 électrons (3 liaisons)
- **C** a besoin de 4 électrons (4 liaisons)`
        },
        theory: `Formule de Lewis

Représentation des électrons de valence autour d'un atome.

1. **Doublet liant** : Paire d'électrons partagée entre 2 atomes (liaison covalente)
2. **Doublet non liant** : Paire d'électrons appartenant à un seul atome

Règle de l'Octet : 
- Pour Z > 4 : 8 électrons sur la couche externe (comme les gaz nobles)
- Pour H : 2 électrons (règle du duet)

Valences courantes :
- H = 1, O = 2, N = 3, C = 4`,
        exercises: [
            { question: 'Combien de liaisons forme le carbone ?', options: ['1', '2', '3', '4'], correct: 3, explanation: 'Le carbone a 4 électrons de valence, il forme 4 liaisons.' },
            { question: 'Dans H₂O, l oxygène a combien de doublets non liants ?', options: ['0', '1', '2', '4'], correct: 2, explanation: 'L oxygène fait 2 liaisons (avec les 2 H) et garde 2 doublets non liants.' }
        ],
        relatedSimulations: ['molecular-geometry', 'atomic-structure-seconde']
    },

    'mole-scale': {
        title: 'La Mole (Balance)',
        description: 'Pesée et calculs de quantité de matière',
        type: 'mole-scale',
        config: {},
        analogy: {
            title: 'Le Paquet d Atomes',
            content: `La mole, c'est juste un GIGA paquet ! 📦

Comme on ne peut pas compter les atomes un par un (trop petits !), on les compte par paquets.
1 mole = 6,02 × 10²³ atomes (Nombre d'Avogadro)

C'est comme compter des œufs par plateaux plutôt qu'un par un !`
        },
        theory: `Quantité de Matière

n = m / M

- n : quantité de matière (mol)
- m : masse (g)
- M : masse molaire (g/mol)

Constante d'Avogadro : NA = 6,02 × 10²³ mol⁻¹

Pour les gaz : n = V / Vm (Vm ≈ 22,4 L/mol à 0°C)`,
        exercises: [
            { question: '2 moles de carbone (M=12) pèsent...', options: ['6 g', '12 g', '24 g', '36 g'], correct: 2, explanation: 'm = n × M = 2 × 12 = 24 g.' },
            { question: 'Combien de mol dans 36g d eau (M=18) ?', options: ['1 mol', '2 mol', '18 mol', '36 mol'], correct: 1, explanation: 'n = m/M = 36/18 = 2 mol.' }
        ],
        relatedSimulations: ['mole-concept', 'molar-concentration']
    },

    'equation-balancer': {
        title: 'Équilibrage des Équations',
        description: 'Conservation de la masse - Loi de Lavoisier',
        type: 'equation-balancer',
        config: {},
        analogy: {
            title: 'La Recette de Cuisine Équilibrée',
            content: `Une réaction chimique c'est comme une recette ! 👨‍🍳

Si tu mets 2 œufs et 100g de farine AVANT la cuisson,
tu auras exactement les mêmes atomes APRÈS. Rien ne disparaît !

Les atomes changent juste de partenaire. On doit avoir autant de chaque type d'atome à gauche qu'à droite.`
        },
        theory: `Conservation de la Masse (Lavoisier)

"Rien ne se perd, rien ne se crée, tout se transforme"

L'équation-bilan doit être équilibrée :
- Même nombre de chaque atome à gauche et à droite
- On ajuste avec des coefficients stœchiométriques

Exemple : 2 H₂ + O₂ → 2 H₂O
- Gauche : 4 H, 2 O
- Droite : 4 H, 2 O ✓`,
        exercises: [
            { question: 'Pour équilibrer H₂ + O₂ → H₂O, il faut...', options: ['2 H₂ + O₂ → 2 H₂O', 'H₂ + O₂ → H₂O', 'H₂ + 2 O₂ → H₂O', '3 H₂ + O₂ → H₂O'], correct: 0, explanation: '2 H₂ + O₂ → 2 H₂O donne 4 H et 2 O des deux côtés.' },
            { question: 'La conservation de la masse vient de...', options: ['Newton', 'Lavoisier', 'Einstein', 'Pasteur'], correct: 1, explanation: 'Lavoisier a énoncé la loi de conservation de la masse.' }
        ],
        relatedSimulations: ['mole-concept', 'chemical-reactions']
    },

    'chemical-tests': {
        title: 'Tests d\'Identification',
        description: 'Identifier les ions en solution',
        type: 'chemical-tests',
        config: {},
        analogy: {
            title: 'Le Chimiste Détective',
            content: `Comment savoir ce qu'il y a dans l'eau transparente ? On utilise des "mouchards" ! 🕵️‍♂️
Chaque ion a un ennemi juré (le réactif). Quand ils se rencontrent, ils se battent et forment un nuage coloré (le précipité) !

- Cuivre + Soude = Nuage BLEU 🔵
- Fer II + Soude = Nuage VERT 🟢
- Chlorure + Argent = Nuage BLANC ⚪`
        },
        theory: `Tests de Reconnaissance des Ions
Méthode par précipitation.

1. Ions Métalliques (avec Soude NaOH) :
- Cu²⁺ : Précipité Bleu (Hydroxyde de cuivre)
- Fe²⁺ : Précipité Vert (Hydroxyde de fer II)
- Fe³⁺ : Précipité Rouille (Hydroxyde de fer III)
- Zn²⁺ : Précipité Blanc

2. Ion Chlorure (avec Nitrate d'Argent AgNO3) :
- Cl⁻ : Précipité Blanc qui noircit à la lumière.`,
        exercises: [
            { question: 'Quel réactif détecte les ions Cuivre II ?', options: ['Nitrate d\'argent', 'Soude (NaOH)', 'Acide', 'Eau'], correct: 1, explanation: 'La Soude forme un précipité bleu caractéristiques avec le Cuivre.' },
            { question: 'Un précipité blanc avec le nitrate d\'argent indique...', options: ['Des ions Chlorure', 'Des ions Fer', 'Du sel', 'Du sucre'], correct: 0, explanation: 'C\'est la signature des ions Cl-.' }
        ],
        relatedSimulations: ['solutions-solubility', 'chromatography']
    },

    'base-solution': {
        title: 'Solution Aqueuse Basique',
        description: 'Dissolution des bases et calcul du pH',
        type: 'base-solution',
        config: {},
        analogy: {
            title: 'Le Savon et la Soude',
            content: `Les bases sont les opposés des acides ! 🧴🧼
            
Si les acides piquent, les bases sont "glissantes" au toucher (comme du savon).
L'ion responsable de la basicité est l'ion Hydroxyde OH⁻.

Une base forte comme la Soude (NaOH) se décompose totalement dans l'eau pour libérer cet ion.
- Si le pH est 7 : C'est neutre (Eau pure).
- Si le pH est plus grand que 7 : C'est basique !

Plus il y a de OH⁻, plus le pH monte vers 14.`
        },
        theory: `Les Solutions Basiques (C8)

1. **Définition (Arrhenius)** :
Une base est une espèce chimique capable de libérer des ions hydroxyde OH⁻ en solution aqueuse.

2. **Dissolution des bases fortes** :
La dissociation est totale.
Exemple : NaOH (s) → Na⁺ (aq) + OH⁻ (aq)
[OH⁻] = C (Concentration molaire)

3. **Le pH des solutions basiques** :
À 25°C, une solution est basique si son pH > 7.
Produit ionique de l'eau : Ke = [H₃O⁺][OH⁻] = 10⁻¹⁴
pH = 14 + log[OH⁻]

4. **Exemples** :
- Soude (Hydroxyde de sodium) : Déboucheurs, savon.
- Ammoniaque : Nettoyants ménagers.
- Potasse : Engrais, piles.`,
        exercises: [
            { question: 'Quel ion est responsable de la basicité ?', options: ['H₃O⁺', 'OH⁻', 'Na⁺', 'Cl⁻'], correct: 1, explanation: 'L\'ion hydroxyde OH- est le marqueur des bases.' },
            { question: 'Une solution de pH 12 est...', options: ['Acide', 'Neutre', 'Basique', 'Inoffensive'], correct: 2, explanation: 'pH > 7 est basique. pH 12 est une base forte.' },
            { question: 'Si on dissout 0,1 mol de NaOH dans 1L d\'eau, le pH est...', options: ['1', '7', '13', '14'], correct: 2, explanation: '[OH-] = 0,1 = 10^-1 mol/L. pH = 14 + log(0,1) = 14 - 1 = 13.' }
        ],
        relatedSimulations: ['ph-scale', 'molar-concentration', 'titrage-advanced']
    },

    'sonar-echolocation': {
        title: 'Sonar et Écholocation',
        description: 'Mesurer des distances avec le son',
        type: 'sonar-echolocation',
        config: {},
        analogy: {
            title: 'La Chauve-Souris et le Bateau',
            content: `Comment voir dans le noir ? En criant ! 🦇🔊
La chauve-souris (ou le bateau) envoie un "BIP".
Le son rebondit sur l'obstacle et revient : "BIP... (écho) ...BIP".
Si l'écho met longtemps à revenir, c'est que l'obstacle est loin !

C'est simple : Vitesse = Distance / Temps.
Attention, le son fait l'aller-retour (2 fois la distance) !`
        },
        theory: `Principe du Sonar
Utilisation de la réflexion des ondes sonores (ultrasons).

Formule :
v = 2d / t  =>  d = (v × t) / 2

- v : Vitesse du son (ex: 1500 m/s dans l'eau)
- t : Temps aller-retour (écho)
- d : Distance de la cible

Applications : Cartographie des fonds marins, échographie médicale, radars de recul.` ,
        exercises: [
            { question: 'Pourquoi divise-t-on par 2 pour trouver la profondeur ?', options: ['Car le son va deux fois moins vite', 'Car le son fait l\'aller-retour', 'Pour faire la moyenne', 'C\'est une constante'], correct: 1, explanation: 'Le temps mesuré est pour descendre ET remonter.' },
            { question: 'Si l\'écho revient en 1s (v=1500m/s), la profondeur est...', options: ['1500m', '750m', '3000m', '150m'], correct: 1, explanation: 'd = 1500 x 1 / 2 = 750 m.' }
        ],
        relatedSimulations: ['sound-waves', 'rectilinear-motion']
    },

    'power-energy': {
        title: 'Puissance et Énergie',
        description: 'La grue et l\'haltérophile',
        type: 'power-energy',
        config: {},
        analogy: {
            title: 'Le Sprinteur vs le Marcheur',
            content: `Deux personnes montent au 5ème étage. Ils font le même TRAVAIL (monter 70kg).
Mais le sprinteur le fait en 10 secondes, le marcheur en 2 minutes.

Le sprinteur est plus PUISSANT ! 💪⚡
La Puissance, c'est la vitesse à laquelle on dépense l'énergie.
Grosse Puissance = Travail fait très vite.`
        },
        theory: `Puissance Mécanique (P)
Capacité à effectuer un travail rapidement.

P = W / t  = E / t

- P : Puissance en Watt (W)
- W/E : Énergie ou Travail en Joule (J)
- t : Temps en seconde (s)

Exemple : Soulever une masse m d'une hauteur h.
E = m · g · h
P = (m · g · h) / t`,
        exercises: [
            { question: 'Si je fais le même travail en deux fois moins de temps, ma puissance...', options: ['Diminue', 'Reste pareille', 'Double', 'Est nulle'], correct: 2, explanation: 'P = E/t. Si t est divisé par 2, P est multiplié par 2.' },
            { question: 'Quelle est l\'unité de la Puissance ?', options: ['Joule', 'Newton', 'Watt', 'Volt'], correct: 2, explanation: 'Le Watt (W).' }
        ],
        relatedSimulations: ['kinetic-potential-energy', 'rectilinear-motion']
    },

    // ========== PREMIÈRE ==========
    'kinetic-potential-energy': {
        title: 'Énergie Cinétique et Potentielle',
        description: 'Montagnes russes et conservation',
        type: 'energy-skate-park',
        config: {},
        analogy: {
            title: 'Le Skater dans la Rampe',
            content: `C'est comme un skater dans une rampe en U ! 🛹
En Haut (Départ) : Il est à l'arrêt, mais il est haut. Il a plein d'Énergie Potentielle (de hauteur), mais 0 Cinétique (vitesse).
En Bas (Milieu) : Il va super vite ! Toute son énergie de hauteur s'est transformée en Vitesse (Cinétique).
Remontée : Il ralentit (perd de la vitesse) mais gagne de la hauteur.

Rien ne se perd, tout se transforme ! (Énergie Mécanique constante si pas de frottement).`
        },
        theory: `Conservation de l'Énergie Mécanique
Em = Ec + Epp

1. Énergie Cinétique (Ec) : Liée à la vitesse.
Ec = 1/2 · m · v²
(Objet lourd ou rapide = grosse énergie)

2. Énergie Potentielle de Pesanteur (Epp) : Liée à la hauteur.
Epp = m · g · h

Conservation :
Si les frottements sont négligeables, Em est constante.
Quand l'objet tombe, Epp diminue et Ec augmente.`,
        exercises: [
            { question: 'Si la vitesse double, l\'énergie cinétique...', options: ['Double', 'Triple', 'Quadruple', 'Reste la même'], correct: 2, explanation: 'Ec dépend de v². Si v x 2, alors v² x 4. L\'énergie quadruple !' },
            { question: 'Au sommet d\'une chute, l\'énergie potentielle est...', options: ['Nulle', 'Maximale', 'Minimale', 'Égale à cinétique'], correct: 1, explanation: 'Elle est maximale car la hauteur est maximale.' }
        ],
        relatedSimulations: ['energy-conservation', 'forces-motion']
    },
    'thermal-transfer': {
        title: 'Transferts Thermiques',
        description: 'Conduction, Convection, Rayonnement',
        type: 'thermal-transfer',
        config: {},
        analogy: {
            title: 'La Marmite de Soupe',
            content: `Comment chauffe la soupe ? 🍲🔥

1. Conduction (La poignée chaude) : La chaleur passe de proche en proche dans le métal. Aïe ça brûle la main ! (Contact direct).
2. Convection (Les remous) : La soupe chaude monte, la froide descend. Ça tourne dans la marmite ! (Mouvement de matière).
3. Rayonnement (Le feu) : La chaleur du feu traverse l'air pour toucher la marmite sans contact. (Ondes invisibles).`
        },
        theory: `Modes de Transfert Thermique
Le transfert se fait toujours du CHAUD vers le FROID.

1. Conduction
- Transfert sans déplacement de matière (vibration des atomes).
- Solides (Métaux = bons conducteurs / Bois = isolant).

2. Convection
- Transfert avec déplacement de matière (courants).
- Fluides (Liquides et Gaz).

3. Rayonnement
- Transfert par ondes électromagnétiques (Infrarouges).
- Peut se faire dans le vide (Soleil).

Flux Thermique (Φ) : Vitesse d'échange d'énergie (en Watt).
Rth : Résistance thermique (capacité à isoler).`,
        exercises: [
            { question: 'Quel mode de transfert fonctionne dans le vide ?', options: ['Conduction', 'Convection', 'Rayonnement', 'Aucun'], correct: 2, explanation: 'Le rayonnement (comme celui du soleil) n\'a pas besoin de matière.' },
            { question: 'Pourquoi l\'air chaud monte ?', options: ['Il est plus léger (moins dense)', 'Il est magique', 'Il est poussé par le bas', 'Il n\'aime pas le sol'], correct: 1, explanation: 'La dilatation thermique rend l\'air chaud moins dense, donc il monte (Convection).' }
        ],
        relatedSimulations: ['states-of-matter', 'solar-energy-flux']
    },
    'redox-reactions': {
        title: 'Oxydoréduction',
        description: 'Piles et échange d\'électrons',
        type: 'electrochemical',
        config: {},
        analogy: {
            title: 'Le Troc d\'Électrons',
            content: `L'Oxydoréduction, c'est une bagarre pour des électrons ! 🥊⚡
L'Oxydant est un voleur méchant : il PREND des électrons.
Le Réducteur est un gentil donneur : il PERD des électrons.

Moyen mnémotechnique : "L'Oxydant mord" (il prend).

Dans une pile, on sépare le voleur et le donneur. Pour s'échanger l'électron, ils sont obligés de le faire passer par un fil électrique.
Hop ! Ça crée du courant ! 💡`
        },
        theory: `Réactions d'Oxydoréduction
Échange d'électrons entre deux couples Ox/Red.

1. Définitions
- Oxydant (Ox) : Capte des électrons.
- Réducteur (Red) : Cède des électrons.
- Ox + ne⁻ ⇌ Red

2. Réaction
Ox1 + Red2 → Red1 + Ox2
(Le plus fort oxydant réagit avec le plus fort réducteur).

3. Piles
- Convertissent l'énergie chimique en électrique.
- Anode (-) : Oxydation (Perte e⁻)
- Cathode (+) : Réduction (Gain e⁻)
- Pont salin : Assure la neutralité électrique.`,
        exercises: [
            { question: 'Un oxydant est une espèce qui...', options: ['Cède des électrons', 'Capte des électrons', 'Cède des protons', 'Reste neutre'], correct: 1, explanation: 'L\'Oxydant capte (mord) les électrons.' },
            { question: 'À l\'anode d\'une pile, il y a...', options: ['Réduction', 'Oxydation', 'Précipitation', 'Rien'], correct: 1, explanation: 'Anode commence par A (voyelle) -> Oxydation commence par O (voyelle). (Moyen mnémotechnique !)' }
        ],
        relatedSimulations: ['chemical-reactions', 'ions-formation']
    },
    'organic-chemistry': {
        title: 'Chimie Organique',
        description: 'Molécules 3D et isomérie',
        type: 'organic-chemistry',
        config: {},
        analogy: {
            title: 'Le LEGO du Vivant',
            content: `La chimie organique, c'est du LEGO avec du Carbone ! 🧱
Le Carbone a 4 bras (tétravalent). Il doit toujours tenir 4 choses.

A- Chaine principale : C'est la colonne vertébrale (le plus long train de carbones).
M- Méth 1, Éth 2, Prop 3, But 4... (Maman Et Papa Bébés).

B- Groupes Fonctionnels : Les accessoires qui changent tout !
- OH (Alcool) : C'est la fête. 🍷
- COOH (Acide) : Ça pique. 🍋
- NH2 (Amine) : Ça sent le poisson. 🐟`
        },
        theory: `Chimie Organique
Chimie des composés du Carbone (C).

1. Alcanes (CnH2n+2)
- Chaine carbonée saturée (liaisons simples).
- Méthane, Éthane, Propane, Butane...
- Combustibles (Gaz, Pétrole).

2. Alcools (R-OH)
- Groupe Hydroxyle (-OH).
- Nomenclature : -ol (ex: Éthanol).
- 3 classes : Primaire, Secondaire, Tertiaire.

3. Isomères
- Mêmes atomes, mais agencement différent.
- Propriétés différentes.`,
        exercises: [
            { question: 'Quelle est la formule du Propane (3 carbones) ?', options: ['C3H6', 'C3H8', 'C3H3', 'C4H10'], correct: 1, explanation: 'Alcane Cn H2n+2 -> C3 H(2x3+2) -> C3H8.' },
            { question: 'Quel groupe caractérise les alcools ?', options: ['-COOH', '-OH', '-NH2', '-CO-'], correct: 1, explanation: 'Le groupe Hydroxyle (-OH).' }
        ],
        relatedSimulations: ['molecular-geometry', 'chemical-reactions']
    },
    'dna-replication': {
        title: 'Réplication de l\'ADN',
        description: 'Duplication semi-conservative',
        type: 'dna-replication',
        config: {},
        analogy: {
            title: 'La Photocopieuse à Zipper',
            content: `Pour copier l'ADN, on ouvre la fermeture éclair ! 🧬🤐
L'ADN est une double hélice (2 brins collés).

1. L'Hélicase (le curseur du zip) ouvre les deux brins.
2. L'ADN Polymérase (le maçon) construit un nouveau brin complémentaire sur chaque vieux brin.
A avec T, C avec G.

À la fin, on a 2 molécules d'ADN.
Chacune a 1 vieux brin et 1 nouveau brin. C'est "Semi-Conservatif" (On garde la moitié de l'original).`
        },
        theory: `Réplication de l'ADN (Phase S)
Mécanisme permettant de doubler la quantité d'ADN avant la division cellulaire.

Mode Semi-Conservatif (Meselson & Stahl)
Chaque molécule fille conserve un brin de la molécule mère.

Enzymes clés :
1. Hélicase : Ouvre la double hélice (rompt liaisons H).
2. Primase : Pose une amorce ARN.
3. ADN Polymérase : Synthétise le nouveau brin (5' vers 3') par complémentarité des bases (A-T, G-C).
4. Ligase : Colle les fragments (Okazaki) sur le brin retardé.`,
        exercises: [
            { question: 'Le mode de réplication de l\'ADN est...', options: ['Conservatif', 'Dispersif', 'Semi-conservatif', 'Aléatoire'], correct: 2, explanation: 'On garde un brin ancien et on fabrique un nouveau.' },
            { question: 'Quelle base va avec l\'Adénine (A) ?', options: ['Cytosine (C)', 'Guanine (G)', 'Thymine (T)', 'Uracile (U)'], correct: 2, explanation: 'A va toujours avec T (Aura Toujours). G avec C.' }
        ],
        relatedSimulations: ['cell-division', 'protein-synthesis']
    },
    'enzymes-properties': {
        title: 'Propriétés des Enzymes',
        description: 'Catalyse biologique et site actif',
        type: 'chemical',
        config: {},
        analogy: {
            title: 'L\'Enzyme : Clé et Serrure',
            content: `Une enzyme est un ouvrier spécialisé super rapide (Catalyseur). 🔧⚡
Chaque enzyme a une forme unique (Serrure).
Elle ne travaille qu'avec une seule molécule précise qui a la bonne forme (Clé ou Substrat).

Exemple : L'Amylase (dans la salive) est une pince qui coupe l'amidon (le pain) en sucre. Elle ne peut pas couper la viande !

Si tu chauffes trop (Fièvre), l'enzyme fond et se déforme : La clé ne rentre plus, l'usine s'arrête !`
        },
        theory: `Enzymologie
Les enzymes sont des catalyseurs biologiques (protéines).
Elles accélèrent les réactions chimiques sans être consommées.

Spécificité :
1. De substrat : L'enzyme n'agit que sur une molécule précise (Modèle Clé-Serrure).
2. D'action : Elle ne catalyse qu'un type de réaction (hydrolyse, synthèse...).

Facteurs influençant l'activité :
- Température (Optimum ~37°C chez l'homme, dénaturation si trop chaud).
- pH (Optimum variable).
- Concentration en substrat (Vitesse maximale Vmax).`,
        exercises: [
            { question: 'Si on bout une enzyme, elle...', options: ['Travaille plus vite', 'Est dénaturée (détruite)', 'Se multiplie', 'Devient un sucre'], correct: 1, explanation: 'La chaleur détruit la forme 3D de la protéine (Dénaturation), elle ne marche plus.' },
            { question: 'Une enzyme est...', options: ['Un lipide', 'Un glucide', 'Une protéine', 'Un minéral'], correct: 2, explanation: 'La quasi-totalité des enzymes sont des protéines.' }
        ],
        relatedSimulations: ['protein-synthesis', 'digestive-system']
    },
    'tectonics-plates': {
        title: 'Tectonique des Plaques',
        description: 'Dérive des continents et séismes',
        type: 'tectonics',
        config: {},
        analogy: {
            title: 'Le Tapis Roulant Terrestre',
            content: `La croûte terrestre n'est pas solide, c'est un puzzle de plaques qui flottent sur du magma (comme des biscuits sur de la confiture chaude) ! 🌍🍪

Le magma en dessous tourne (convection), ce qui fait bouger les plaques.
- Divergence : Elles s'écartent (Le trou se remplit de lave -> Dorsale/Volcan).
- Convergence : Elles se cognent. La plus lourde (Océan) plonge sous l'autre (Subduction). Ça gratte, ça bloque... et CRAC ! Séisme ! 💥
- Collision : Deux continents se cognent, ça se plisse -> Montagne (Himalaya).`
        },
        theory: `Tectonique des Plaques (Wegener)
La lithosphère (rigide) est découpée en plaques qui bougent sur l'asthénosphère (visqueuse).

Mouvements :
1. Divergence (Accrétion) : Écartement, formation de croûte océanique (Dorsales).
2. Convergence (Subduction) : Une plaque plonge sous l'autre (Fosses, Volcanisme explosif, Séismes profonds).
3. Convergence (Collision) : Formation de chaînes de montagnes.
4. Coulissage : Frottement latéral (Failles).

Moteur : Courants de convection du manteau thermique.`,
        exercises: [
            { question: 'Que se passe-t-il au niveau d\'une dorsale ?', options: ['Destruction de croûte', 'Création de croûte océanique', 'Collision', 'Rien'], correct: 1, explanation: 'Les plaques s\'écartent et le magma monte pour créer du nouveau sol marin.' },
            { question: 'Quel est le moteur du mouvement des plaques ?', options: ['Le vent', 'Les marées', 'La chaleur interne (convection)', 'Le magnétisme'], correct: 2, explanation: 'C\'est la chaleur du noyau qui crée des courants de convection dans le manteau.' }
        ],
        relatedSimulations: ['volcano-eruption', 'earth-movement']
    },

    // ========== TERMINALE ==========
    'satellite-motion': {
        title: 'Mouvement des Satellites',
        description: 'Lois de Kepler et orbites',
        type: 'force',
        config: {},
        analogy: {
            title: 'La Fronde Cosmique',
            content: `Un satellite, c'est comme une balle au bout d'une ficelle (la gravité) que tu fais tourner au-dessus de ta tête ! 🛰️🔄

Il tombe en permanence vers la Terre, mais comme il a une grande vitesse horizontale, il "rate" la Terre à chaque fois !
C'est la chute libre perpétuelle.

Si tu coupes la ficelle (plus de gravité), il part tout droit.
S'il ralentit, la ficelle le tire trop fort, il s'écrase.
Il faut la vitesse parfaite pour rester en orbite.`
        },
        theory: `Lois de Kepler et Satellites

1ère Loi (Orbites) : Les planètes décrivent des ellipses dont le Soleil est un des foyers.
2ème Loi (Aires) : Le rayon vecteur balaie des aires égales en temps égaux (Plus vite près du soleil).
3ème Loi (Périodes) : T² / r³ = Constante.

Mouvement Circulaire Uniforme :
- Vitesse v = √(G·M / r)
- Période T = 2πr / v
- Indépendant de la masse du satellite !`,
        exercises: [
            { question: 'Pour mettre un satellite plus haut, il doit aller...', options: ['Plus vite', 'Moins vite', 'Même vitesse', 'À l\'envers'], correct: 1, explanation: 'Plus on est loin, moins la gravité est forte, donc moins on a besoin d\'aller vite pour ne pas tomber. (v = racine(GM/r)). Attention c\'est contre-intuitif !' },
            { question: 'Que se passe-t-il si la vitesse devient nulle ?', options: ['Il flotte', 'Il tombe tout droit', 'Il part dans l\'espace', 'Il explose'], correct: 1, explanation: 'Sans vitesse tangentielle, la gravité l\'attire directement vers le centre (Crash).' }
        ],
        relatedSimulations: ['gravitation-universal', 'forces-motion']
    },
    'rc-circuit': {
        title: 'Circuit RC',
        description: 'Charge et décharge condensateur',
        type: 'rc-circuit',
        config: {},
        analogy: {
            title: 'Le Condensateur est un Seau d\'Eau',
            content: `Un condensateur, c'est comme un seau 🪣 sous un robinet (Résistance).

Charge : On ouvre le robinet.
- Au début, le seau est vide, l'eau coule à flot (Intensité max).
- Plus le seau se remplit, plus c'est dur de rajouter de l'eau (ça pousse contre). L'intensité baisse.
- À la fin, le seau est plein, le courant s'arrête.

Décharge : On perce le fond du seau.
- Ça gicle fort au début (Tension max).
- Puis ça coule de moins en moins fort jusqu'à être vide.`
        },
        theory: `Le Dipôle RC
Association d'une Résistance (R) et d'un Condensateur (C).

Loi d'additivité (Charge) : E = uR + uC = R·i + uC
Équation différentielle : E = RC·(duC/dt) + uC

Constante de temps (τ = Tau) :
τ = R · C (en secondes)
- À t = τ, le condensateur est chargé à 63%.
- À t = 5τ, il est chargé à 99% (Régime permanent).

Énergie stockée : E = 1/2 · C · uC²`,
        exercises: [
            { question: 'Quelle est l\'unité de la capacité C ?', options: ['Ohm', 'Volt', 'Farad', 'Ampère'], correct: 2, explanation: 'Le Farad (F).' },
            { question: 'À 5 fois la constante de temps (5τ), le condensateur est...', options: ['Vide', 'À moitié plein', 'Quasi totalement chargé', 'Cassé'], correct: 2, explanation: 'On considère la charge terminée (99%) à 5τ.' }
        ],
        relatedSimulations: ['simple-circuits', 'electric-resistance']
    },
    'chemical-equilibrium': {
        title: 'Équilibre Chimique',
        description: 'Quotient de réaction et constante K',
        type: 'chemical',
        config: {},
        analogy: {
            title: 'L\'Équilibre des Voyageurs',
            content: `Imagine deux villes A et B reliées par une route. 🏙️🚌🏙️

Au début, tout le monde est à A.
Les gens partent vers B (Réaction directe).
Mais quand il y a du monde à B, certains veulent revenir à A (Réaction inverse) !

L'Équilibre, c'est quand il y a autant de bus qui vont de A vers B que de B vers A.
Les quantités de gens dans chaque ville ne changent plus, MAIS ça continue de bouger (Équilibre Dynamique). Ce n'est pas figé !`
        },
        theory: `Équilibre Chimique
Une réaction est à l'équilibre quand les vitesses des réactions directe et inverse sont égales.
aA + bB ⇌ cC + dD

Quotient de Réaction (Qr) :
Qr = ([C]ᶜ·[D]ᵈ) / ([A]ᵃ·[B]ᵇ)
(Calculé à n'importe quel instant).

Constante d'Équilibre (K) :
C'est la valeur de Qr à l'état final d'équilibre. K ne dépend que de la Température.

Critère d'évolution :
- Qr < K : Évolution sens direct (→)
- Qr > K : Évolution sens inverse (←)
- Qr = K : Équilibre`,
        exercises: [
            { question: 'À l\'équilibre dynamique, la réaction...', options: ['S\'arrête', 'Continue dans les 2 sens à même vitesse', 'Va vers la droite', 'Va vers la gauche'], correct: 1, explanation: 'Rien ne s\'arrête au niveau micro ! Les échanges se compensent parfaitement.' },
            { question: 'Si K est très grand (>10⁴), la réaction est...', options: ['Totale', 'Impossible', 'Limitée', 'Lente'], correct: 0, explanation: 'Si K est immense, on ne forme quasi que des produits. La réaction est considérée totale.' }
        ],
        relatedSimulations: ['reaction-mechanisms', 'acid-base-titration']
    },
    'nerve-muscle-reflex': {
        title: 'Réflexe Myotatique',
        description: 'Circuit neuronale et contraction',
        type: 'nerve-impulse',
        config: {},
        analogy: {
            title: 'Le Coup de Marteau sur le Genou',
            content: `Pourquoi ta jambe saute quand le docteur tape le genou ? 🔨🦵
C'est un Réflexe (Automatique, pas besoin de réfléchir).

1. Le muscle est étiré brusquement (Ouhlà, on tire sur moi !).
2. Un capteur envoie un SOS à la moelle épinière (Message Sensoriel).
3. La moelle épinière répond DIRECTEMENT : "Contracte-toi vite pour ne pas déchirer !" (Message Moteur).
4. Le muscle se contracte.

Ça ne passe même pas par le cerveau ! C'est un aller-retour express (Arc Réflexe) pour protéger le muscle.`
        },
        theory: `Le Réflexe Myotatique
Contraction involontaire d'un muscle en réponse à son propre étirement.

Circuit (Arc Réflexe Monosynaptique) :
1. Récepteur : Fuseau neuromusculaire (détecte l'étirement).
2. Voie afférente : Neurone sensitif (vers la moelle).
3. Centre nerveux : Moelle épinière (substance grise).
4. Synapse : Connexion directe neurone sensitif - motoneurone.
5. Voie efférente : Motoneurone (vers le muscle).
6. Effecteur : Muscle (contraction).

Rôle : Maintien de la posture et du tonus musculaire.`,
        exercises: [
            { question: 'Le centre nerveux du réflexe myotatique est...', options: ['Le cerveau', 'Le cervelet', 'La moelle épinière', 'Le muscle'], correct: 2, explanation: 'C\'est un réflexe médullaire (moelle), ce qui le rend très rapide.' },
            { question: 'Combien de synapses dans ce réflexe ?', options: ['0', '1 (Monosynaptique)', 'Plusieurs', '100'], correct: 1, explanation: 'Une seule synapse entre le neurone sensitif et le moteur.' }
        ],
        relatedSimulations: ['nervous-system', 'synaptic-transmission']
    },

    // ========== ANCIENNES SIMULATIONS (Déjà présentes) ==========
    'wave-interference': {
        title: 'Interférences d\'Ondes',
        description: 'Visualisez les phénomènes d\'interférence lumineuse',
        type: 'wave',
        config: {},
        analogy: {
            title: 'Les Interférences comme les Vagues sur le Fleuve Sénégal',
            content: `Imagine deux pirogues qui avancent côte à côte sur le fleuve Sénégal calme. 🛶🛶

Chaque pirogue crée des vagues (ondes) derrière elle.
Quand les vagues de la première pirogue rencontrent celles de la deuxième, quelque chose de magique se produit !

Interférence Constructive (Le Sommet) :
Si le sommet d'une vague rencontre le sommet de l'autre, elles s'ajoutent pour former une vague géante !
C'est comme quand deux tam-tams frappent en même temps : le son est beaucoup plus fort ! 🥁

Interférence Destructive (Le Creux) :
Si le sommet d'une vague rencontre le creux de l'autre, elles s'annulent. L'eau devient plate !
C'est comme si deux personnes poussaient une porte dans des sens opposés : rien ne bouge.

C'est ce qui se passe avec la lumière dans l'expérience des fentes de Young : des zones très brillantes (constructives) et des zones noires (destructives).`
        },
        theory: `Interférences d'Ondes

Le phénomène d'interférence se produit lorsque deux ondes se superposent.

Conditions d'Interférence
- Sources cohérentes (même fréquence, déphasage constant)
- Ondes de même nature (lumineuses, sonores, mécaniques)

Types d'Interférences

Constructives
- Les ondes sont en phase (différence de marche δ = k·λ)
- Les amplitudes s'ajoutent
- Résultat : Intensité maximale (frange brillante)

Destructives
- Les ondes sont en opposition de phase (δ = (k + 0.5)·λ)
- Les amplitudes se soustraient
- Résultat : Intensité minimale ou nulle (frange sombre)

Expérience des Fentes de Young
Thomas Young (1801) a démontré la nature ondulatoire de la lumière.
- Une source lumineuse éclaire deux fentes fines.
- Sur un écran, on observe une alternance de bandes claires et sombres (figure d'interférence).
- Interfrange (i) : distance entre deux franges de même nature.
  i = (λ · D) / a
  (λ: longueur d'onde, D: distance fentes-écran, a: distance entre fentes)

Applications
- Holographie
- Traitement antireflet des lunettes
- Interféromètres (détection ondes gravitationnelles)`,

        exercises: [
            {
                question: 'Que se passe-t-il lors d\'une interférence constructive ?',
                options: ['Les ondes s\'annulent', 'Les ondes s\'ajoutent', 'La fréquence change', 'La lumière devient noire'],
                correct: 1,
                explanation: 'Les ondes s\'ajoutent pour créer une amplitude plus grande, comme une vague géante !'
            },
            {
                question: 'Quelle est la condition pour observer des interférences stables ?',
                options: ['Sources incohérentes', 'Sources de fréquences différentes', 'Sources cohérentes', 'Sources mobiles'],
                correct: 2,
                explanation: 'Il faut des sources cohérentes (même fréquence et déphasage constant) pour que la figure ne bouge pas.'
            }
        ],
        relatedSimulations: ['quantum-mechanics', 'special-relativity', 'light-reflection']
    },


    'molecular-geometry': {
        title: 'Géométrie Moléculaire',
        description: 'VSEPR et formes 3D',
        type: 'molecular-geometry',
        config: {},
        analogy: {
            title: 'La Géométrie Moléculaire comme la Construction d\'une Case',
            content: `Construire une molécule, c'est comme construire une case traditionnelle ! 🏠

Les atomes sont comme les poteaux de la charpente.
Les liaisons sont les poutres qui les relient.

Mais attention ! Les poutres (paires d'électrons) se repoussent, elles veulent être le plus loin possible les unes des autres pour que la case soit stable. C'est la théorie VSEPR.

- 2 poutres : Elles se mettent à l'opposé (180°) → Forme Linéaire (comme un bâton).
- 3 poutres : Elles forment un triangle (120°) → Forme Trigonale.
- 4 poutres : Elles pointent vers les coins d'une pyramide (109.5°) → Forme Tétraédrique.

L'eau (H₂O) est comme une case avec deux poutres invisibles (doublets non liants) qui poussent les murs : c'est pour ça qu'elle est "pliée" (coudée) !`
        },
        theory: `Géométrie Moléculaire (VSEPR)

La théorie VSEPR (Valence Shell Electron Pair Repulsion) permet de prédire la géométrie des molécules.

Principe
Les paires d'électrons (liantes et non liantes) autour de l'atome central se repoussent et s'éloignent au maximum pour minimiser la répulsion électrique.

Notation AXₙEₘ
- A : Atome central
- X : Atomes liés (n = nombre)
- E : Doublets non liants (m = nombre)

Géométries Principales

Linéaire (AX₂)
- Angle : 180°
- Ex: CO₂, BeCl₂

Trigonale Plane (AX₃)
- Angle : 120°
- Ex: BF₃, SO₃

Coudée (AX₂E₁)
- Angle : < 120°
- Ex: SO₂, O₃

Tétraédrique (AX₄)
- Angle : 109.5°
- Ex: CH₄ (Méthane)

Pyramidale à base trigonale (AX₃E₁)
- Angle : < 109.5°
- Ex: NH₃ (Ammoniac)

Coudée (AX₂E₂)
- Angle : << 109.5° (env. 104.5°)
- Ex: H₂O (Eau)

Importance
La géométrie détermine la polarité, la réactivité et l'état physique de la matière.`,
        exercises: [
            {
                question: 'Quelle est la forme de la molécule de méthane (CH₄) ?',
                options: ['Linéaire', 'Coudée', 'Tétraédrique', 'Plane'],
                correct: 2,
                explanation: 'Le méthane a 4 liaisons qui s\'écartent au maximum, formant un tétraèdre (pyramide à 4 faces).'
            },
            {
                question: 'Pourquoi la molécule d\'eau est-elle coudée ?',
                options: ['À cause de la gravité', 'À cause des doublets non liants', 'Par hasard', 'Elle est linéaire'],
                correct: 1,
                explanation: 'Les deux doublets non liants de l\'oxygène repoussent les liaisons O-H, pliant la molécule.'
            }
        ],
        relatedSimulations: ['atomic-structure', 'chemical-reactions', 'states-of-matter']
    },

    'cell-division': {
        title: 'Division Cellulaire',
        description: 'Mitose et cycle cellulaire',
        type: 'cell-mitosis',
        config: {},
        analogy: {
            title: 'La Mitose comme la Construction d\'une Nouvelle Maison',
            content: `La mitose, c'est comme quand une grande famille construit une deuxième maison identique juste à côté pour s'agrandir ! 🏡🏡

1. Prophase (Préparation) : On rassemble tous les meubles et les plans (chromosomes) au milieu du salon. On emballe tout.

2. Métaphase (Alignement) : On aligne tous les cartons parfaitement au centre de la pièce pour être sûr de ne rien oublier. C'est l'inventaire !

3. Anaphase (Séparation) : On sépare chaque lot en deux copies exactes. Une équipe tire les meubles vers la nouvelle maison, l'autre garde les originaux dans l'ancienne.

4. Télophase (Reconstruction) : On finit les murs entre les deux maisons. On déballe les meubles.

Maintenant, on a deux maisons (cellules) parfaitement identiques avec exactement les mêmes meubles (ADN) !`
        },
        theory: `La Division Cellulaire : Mitose

La mitose est le processus par lequel une cellule mère se divise en deux cellules filles génétiquement identiques.

Cycle Cellulaire
- Interphase (G1, S, G2) : Croissance et réplication de l'ADN
- Mitose (M) : Division du noyau
- Cytocinèse : Division du cytoplasme

Les Phases de la Mitose

1. Prophase
- Condensation de la chromatine en chromosomes
- Disparition de l'enveloppe nucléaire
- Formation du fuseau mitotique

2. Métaphase
- Alignement des chromosomes sur la plaque équatoriale
- Attachement des microtubules aux centromères

3. Anaphase
- Séparation des chromatides sœurs
- Migration vers les pôles opposés de la cellule

4. Télophase
- Décondensation des chromosomes
- Reformation de l'enveloppe nucléaire
- Disparition du fuseau

Importance
- Croissance des organismes
- Réparation des tissus (cicatrisation)
- Reproduction asexuée`,
        exercises: [
            {
                question: 'À quelle phase les chromosomes s\'alignent-ils au centre ?',
                options: ['Prophase', 'Métaphase', 'Anaphase', 'Télophase'],
                correct: 1,
                explanation: 'C\'est la Métaphase (M comme Milieu) où tout est aligné pour l\'inventaire !'
            },
            {
                question: 'Quel est le résultat de la mitose ?',
                options: ['2 cellules différentes', '4 cellules identiques', '2 cellules identiques', '1 cellule morte'],
                correct: 2,
                explanation: 'La mitose produit 2 cellules filles génétiquement identiques à la mère.'
            }
        ],
        relatedSimulations: ['cell-structure', 'genetics-dna', 'protein-synthesis']
    },

    'ecosystem-dynamics': {
        title: 'Dynamique des Écosystèmes',
        description: 'Simulez les interactions dans un écosystème',
        type: 'ecosystem-dynamics',
        config: {},
        analogy: {
            title: 'L\'Écosystème comme le Parc Niokolo-Koba',
            content: `Un écosystème, c'est comme le parc national du Niokolo-Koba ! 🦁🌿

C'est un équilibre fragile entre tous les habitants :

Les Producteurs (Herbes, Arbres) : Ils fabriquent la nourriture grâce au soleil. Ce sont les cuisines du parc.

Les Consommateurs Primaires (Antilopes, Phacochères) : Ils mangent les plantes. Ce sont les clients du restaurant végétarien.

Les Consommateurs Secondaires (Lions, Léopards) : Ils mangent les antilopes. Ce sont les chasseurs.

Les Décomposeurs (Termites, Champignons) : Ils nettoient tout et rendent la terre fertile. Ce sont les agents de propreté indispensables !

Si tu enlèves les lions, il y aura trop d'antilopes, elles mangeront toute l'herbe, et le parc deviendra un désert. Tout est lié dans le "Cercle de la Vie" !`
        },
        theory: `Dynamique des Écosystèmes

Un écosystème est l'ensemble des interactions entre les êtres vivants (biocénose) et leur milieu (biotope).

Niveaux Trophiques

1. Producteurs (Autotrophes)
- Plantes vertes, algues, cyanobactéries
- Convertissent l'énergie solaire en matière organique (Photosynthèse)

2. Consommateurs (Hétérotrophes)
- Primaires : Herbivores
- Secondaires : Carnivores mangeurs d'herbivores
- Tertiaires : Super-prédateurs

3. Décomposeurs
- Bactéries, champignons, détritivores
- Recyclent la matière organique en matière minérale

Flux d'Énergie
- L'énergie circule d'un niveau à l'autre
- Perte de 90% d'énergie à chaque niveau (chaleur, respiration)
- Pyramide écologique

Interactions
- Prédation (+/-)
- Compétition (-/-)
- Symbiose/Mutualisme (+/+)
- Parasitisme (+/-)
- Commensalisme (+/0)

Équilibre Dynamique
Les populations fluctuent autour d'un point d'équilibre. Les perturbations peuvent causer des effondrements.`,
        exercises: [
            {
                question: 'Qui sont les producteurs dans un écosystème ?',
                options: ['Les lions', 'Les champignons', 'Les plantes vertes', 'Les herbivores'],
                correct: 2,
                explanation: 'Les plantes sont les producteurs car elles fabriquent leur propre matière avec le soleil.'
            },
            {
                question: 'Que se passe-t-il si on supprime les prédateurs ?',
                options: ['Rien ne change', 'Les proies augmentent trop', 'Les plantes augmentent', 'L\'écosystème va mieux'],
                correct: 1,
                explanation: 'Sans prédateurs, les herbivores se multiplient trop et détruisent la végétation (déséquilibre).'
            }
        ],
        relatedSimulations: ['photosynthesis', 'evolution-selection', 'water-cycle']
    },

    // ========== PREMIÈRE S ==========
    'electromagnetic-induction': {
        title: 'Induction Électromagnétique',
        description: 'Expérimentez avec les champs magnétiques et le courant',
        type: 'electromagnetic-induction',
        config: {},
        analogy: {
            title: 'L\'Induction comme la Dynamo du Vélo',
            content: `L'induction, c'est la magie qui allume la lampe de ton vélo quand tu pédales ! 🚲💡

Imagine un aimant qui danse à l'intérieur d'une bobine de fil de cuivre.

Quand l'aimant bouge (change de position), il "pousse" les électrons dans le fil. C'est comme si le mouvement de l'aimant créait un vent qui fait avancer les électrons.

Si l'aimant ne bouge pas, pas de courant ! Il faut du changement.

C'est la loi de Faraday : "Pas de changement, pas de courant !"

C'est exactement comme ça que la SENELEC fabrique l'électricité pour tout le Sénégal : de gigantesques aimants qui tournent (grâce au fioul, au gaz ou au soleil) dans des bobines géantes !`
        },
        theory: `Induction Électromagnétique

L'induction est la production d'un courant électrique par la variation d'un champ magnétique.

Flux Magnétique (Φ)
- Mesure la quantité de champ magnétique traversant une surface.
- Φ = B · S · cos(α)
  (B: champ magnétique, S: surface, α: angle)
- Unité : Weber (Wb)

Loi de Faraday
La force électromotrice (f.é.m) induite est proportionnelle à la vitesse de variation du flux magnétique.
e = - dΦ / dt

Loi de Lenz
Le courant induit a un sens tel qu'il s'oppose, par ses effets, à la cause qui lui donne naissance.
(C'est le signe "-" dans la loi de Faraday).
C'est une forme d'inertie électromagnétique.

Applications
- Générateurs (Alternateurs)
- Transformateurs
- Moteurs électriques
- Plaques à induction
- Freinage magnétique`,
        exercises: [
            {
                question: 'Que faut-il pour créer un courant induit ?',
                options: ['Un aimant immobile', 'Un champ magnétique constant', 'Une variation de flux magnétique', 'Une grosse batterie'],
                correct: 2,
                explanation: 'Il faut que le flux magnétique CHANGE (varie) pour créer un courant. Le mouvement est clé !'
            },
            {
                question: 'Quelle loi dit que le courant s\'oppose à la cause ?',
                options: ['Loi d\'Ohm', 'Loi de Lenz', 'Loi de Newton', 'Loi de Joule'],
                correct: 1,
                explanation: 'La loi de Lenz explique l\'opposition ("le signe moins"). La nature n\'aime pas le changement brusque !'
            }
        ],
        relatedSimulations: ['simple-circuits', 'forces-motion', 'energy-conservation']
    },

    'acid-base-titration': {
        title: 'Dosage Acido-Basique',
        description: 'Titrage pH-métrique, indicateurs colorés',
        type: 'titration',
        config: {},
        analogy: {
            title: 'Le Dosage comme le Mélange Parfait du Jus de Bissap',
            content: `Le dosage, c'est comme trouver l'équilibre parfait sucre-acidité pour un bon jus de Bissap ! 🍷

Tu as un jus très acide (Acide) dans ton verre.
Tu ajoutes doucement du sirop de sucre (Base) goutte par goutte.

Au début, c'est toujours acide.
Puis, soudain, à UNE goutte près, le goût change complètement ! C'est l'Équivalence.
Si tu continues, ça devient trop sucré (Basique).

L'indicateur coloré (comme le BBT) est comme un ami qui change de couleur de visage :
- Jaune = Trop acide
- Bleu = Trop basique
- Vert = Parfait (Neutre) !

Le but est de trouver exactement combien de sirop il faut pour neutraliser l'acidité.`
        },
        theory: `Dosage Acide-Base (Titrage)

Technique permettant de déterminer la concentration inconnue d'une solution (titrée) en la faisant réagir avec une solution de concentration connue (titrante).

Réaction de Neutralisation
Acide + Base → Sel + Eau
H₃O⁺ + OH⁻ → 2 H₂O (réaction exothermique)

Point d'Équivalence
Moment où les réactifs ont été introduits dans les proportions stœchiométriques.
n(acide) = n(base)
Cₐ · Vₐ = Cb · VbE

pH et Courbe de Titrage
- Au début : pH acide (faible)
- Saut de pH : variation brusque autour de l'équivalence
- À la fin : pH basique (élevé)

Indicateurs Colorés
Substances qui changent de couleur selon le pH (zone de virage).
On choisit un indicateur dont la zone de virage contient le pH à l'équivalence.
- Hélianthine (3.1 - 4.4)
- Bleu de Bromothymol (BBT) (6.0 - 7.6)
- Phénolphtaléine (8.2 - 10.0)`,
        exercises: [
            {
                question: 'À l\'équivalence d\'un dosage acide fort-base forte, quel est le pH ?',
                options: ['3', '7', '10', '14'],
                correct: 1,
                explanation: 'À l\'équivalence pour acide fort/base forte, la solution est neutre, donc pH = 7.'
            },
            {
                question: 'Quelle relation utilise-t-on pour calculer la concentration inconnue ?',
                options: ['Ca = Cb', 'Va = Vb', 'Ca·Va = Cb·VbE', 'pH = -log[H3O+]'],
                correct: 2,
                explanation: 'À l\'équivalence : n(acide) = n(base), donc Ca·Va = Cb·VbE.'
            }
        ],
        relatedSimulations: ['chemical-reactions', 'molecular-geometry', 'states-of-matter']
    },

    // ========== TERMINALE S ==========
    'quantum-mechanics': {
        title: 'Mécanique Quantique',
        description: 'Visualisez les orbitales atomiques et la dualité onde-corpuscule',
        type: 'atom',
        config: {},
        analogy: {
            title: 'La Quantique comme les Cauris du Devin',
            content: `La mécanique quantique, c'est comme le lancer de Cauris par un grand marabout ! 🐚

Avant de regarder, le cauri n'est ni "ouvert" ni "fermé". Il est dans une superposition des deux états. Il est les deux à la fois !

C'est seulement quand tu regardes (mesure) qu'il "choisit" d'être ouvert ou fermé.

L'électron est pareil : il n'est pas à un endroit précis. Il est un nuage de probabilité, un "fantôme" qui est un peu partout autour du noyau.

Principe d'incertitude : C'est comme essayer d'attraper un djinn. Si tu sais où il est, tu ne sais pas où il va. Si tu sais où il va, tu ne sais pas où il est !`
        },
        theory: `Mécanique Quantique

Branche de la physique décrivant le comportement de la matière à l'échelle atomique.

Dualité Onde-Corpuscule
La lumière et la matière se comportent à la fois comme des ondes et des particules.
- Relation de De Broglie : λ = h / p

Fonction d'Onde (Ψ)
Décrit l'état quantique d'un système.
|Ψ|² représente la densité de probabilité de présence.

Équation de Schrödinger
HΨ = EΨ
Équation fondamentale régissant l'évolution de la fonction d'onde.

Principe d'Incertitude de Heisenberg
Impossible de connaître simultanément avec précision la position (x) et la quantité de mouvement (p) d'une particule.
Δx · Δp ≥ h / 4π

Orbitales Atomiques
Zones de l'espace où la probabilité de trouver l'électron est élevée (95%).
Formes : s (sphère), p (haltère), d (trèfle)...
Nombres quantiques (n, l, m, s) définissent l'état de l'électron.`,
        exercises: [
            {
                question: 'Que représente le carré de la fonction d\'onde |Ψ|² ?',
                options: ['L\'énergie', 'La vitesse', 'La probabilité de présence', 'La charge'],
                correct: 2,
                explanation: 'C\'est la probabilité de trouver la particule à un endroit donné.'
            },
            {
                question: 'Selon Heisenberg, peut-on connaître vitesse et position parfaitement ?',
                options: ['Oui, avec un bon microscope', 'Non, c\'est impossible', 'Seulement pour les protons', 'Oui, à 0 Kelvin'],
                correct: 1,
                explanation: 'Non, c\'est une limite fondamentale de la nature. Plus on précise l\'un, plus l\'autre devient flou.'
            }
        ],
        relatedSimulations: ['atomic-structure', 'wave-interference', 'radioactivity']
    },

    'radioactivity': {
        title: 'Radioactivité et Décroissance',
        description: 'Simulez la désintégration radioactive',
        type: 'atom',
        config: {},
        analogy: {
            title: 'La Radioactivité comme la Fonte d\'un Bloc de Glace',
            content: `La radioactivité, c'est comme un bloc de glace au soleil qui fond petit à petit. 🧊

Les atomes instables (radioactifs) sont comme des glaçons qui veulent devenir de l'eau (stables).
Ils "transpirent" en émettant des rayonnements (Alpha, Bêta, Gamma).

La Demi-vie : C'est le temps qu'il faut pour que la moitié du bloc fonde.
Peu importe la taille du bloc au début !
Si tu as 1000 glaçons, après une demi-vie, il en reste 500.
Après une autre demi-vie, il en reste 250 (la moitié de 500, pas 0 !).

C'est un processus aléatoire : on ne sait pas QUEL glaçon va fondre, mais on sait COMBIEN vont fondre en tout.`
        },
        theory: `Radioactivité

Transformation spontanée d'un noyau atomique instable en un noyau plus stable avec émission de rayonnement.

Types de Désintégration

Alpha (α)
- Émission d'un noyau d'Hélium (⁴₂He)
- Arrêté par une feuille de papier
- Concerne les noyaux lourds

Bêta Moins (β⁻)
- Émission d'un électron (e⁻)
- Neutron → Proton + e⁻
- Arrêté par l'aluminium

Bêta Plus (β⁺)
- Émission d'un positon (e⁺)
- Proton → Neutron + e⁺

Gamma (γ)
- Rayonnement électromagnétique (photons)
- Désexcitation du noyau
- Très pénétrant (nécessite du plomb)

Loi de Décroissance Radioactive
N(t) = N₀ · e^(-λt)
- N(t) : nombre de noyaux restants
- λ : constante radioactive
- t : temps

Demi-vie (t½)
Temps nécessaire pour que la moitié des noyaux se désintègrent.
t½ = ln(2) / λ

Activité (A)
Nombre de désintégrations par seconde.
Unité : Becquerel (Bq)`,
        exercises: [
            {
                question: 'Quel rayonnement est le plus pénétrant ?',
                options: ['Alpha', 'Bêta', 'Gamma', 'X'],
                correct: 2,
                explanation: 'Le rayonnement Gamma est de l\'énergie pure, il traverse presque tout sauf le plomb épais.'
            },
            {
                question: 'Si la demi-vie est de 2h, combien reste-t-il après 4h ?',
                options: ['0%', '25%', '50%', '75%'],
                correct: 1,
                explanation: 'Après 2h (1 demi-vie) il reste 50%. Après 4h (2 demi-vies), il reste la moitié de 50%, soit 25%.'
            }
        ],
        relatedSimulations: ['atomic-structure', 'quantum-mechanics', 'energy-conservation']
    },

    'special-relativity': {
        title: 'Relativité Restreinte',
        description: 'Explorez la dilatation du temps et la contraction des longueurs',
        type: 'force',
        config: {},
        analogy: {
            title: 'La Relativité comme le Temps des Vacances',
            content: `La relativité d'Einstein, c'est un peu comme la perception du temps, mais en version extrême ! 🚀

Imagine deux jumeaux : Moussa reste à Dakar, et Fatou part en voyage dans une fusée super rapide (proche de la vitesse de la lumière).

Pour Fatou dans la fusée, le temps passe normalement. Elle mange, dort, lit.
Mais pour Moussa qui la regarde avec un télescope magique, Fatou bouge au ralenti ! Son horloge tourne tout doucement.

Quand Fatou revient après ce qui lui a semblé être 1 an, Moussa a vieilli de 10 ans !

C'est la dilatation du temps. Plus tu vas vite, plus ton temps ralentit par rapport à ceux qui restent immobiles.

Et aussi, la fusée de Fatou semble toute écrasée, toute courte pour Moussa (contraction des longueurs).

La seule chose qui ne change jamais, c'est la vitesse de la lumière (c). C'est la limite de vitesse universelle de la police de l'Univers !`
        },
        theory: `Relativité Restreinte (Einstein, 1905)

Théorie révolutionnant notre compréhension de l'espace et du temps.

Postulats
1. Les lois de la physique sont les mêmes dans tous les référentiels inertiels.
2. La vitesse de la lumière dans le vide (c ≈ 300 000 km/s) est constante et indépendante de la source.

Conséquences

Dilatation du Temps
Une horloge en mouvement bat plus lentement qu'une horloge immobile.
Δt' = γ · Δt
(γ est le facteur de Lorentz, toujours ≥ 1)

Contraction des Longueurs
Un objet en mouvement apparaît plus court dans la direction du mouvement.
L' = L / γ

Facteur de Lorentz (γ)
γ = 1 / √(1 - v²/c²)
- Si v est petit, γ ≈ 1 (physique classique)
- Si v approche c, γ tend vers l'infini

Équivalence Masse-Énergie
E = m · c²
La masse est une forme d'énergie concentrée.
Une petite quantité de masse peut libérer une énergie colossale (nucléaire).`,
        exercises: [
            {
                question: 'Que se passe-t-il pour le temps quand on voyage très vite ?',
                options: ['Il accélère', 'Il ralentit', 'Il s\'arrête', 'Il recule'],
                correct: 1,
                explanation: 'Le temps ralentit (se dilate) pour l\'objet en mouvement rapide par rapport à l\'observateur.'
            },
            {
                question: 'Quelle est la vitesse maximale possible dans l\'univers ?',
                options: ['Vitesse du son', 'Vitesse d\'une fusée', 'Vitesse de la lumière', 'Infinie'],
                correct: 2,
                explanation: 'Rien ne peut dépasser la vitesse de la lumière dans le vide (c).'
            }
        ],
        relatedSimulations: ['radioactivity', 'quantum-mechanics', 'wave-interference']
    },

    'protein-synthesis': {
        title: 'Synthèse des Protéines',
        description: 'Transcription et Traduction',
        type: 'protein-synthesis',
        config: {},
        analogy: {
            title: 'La Synthèse des Protéines comme une Chaîne de Production de Thiéboudienne',
            content: `La synthèse des protéines, c'est comme une grande cuisine qui suit une recette pour préparer du thiéboudienne ! 🍚

L'ADN est le grand livre de recettes gardé précieusement dans le coffre-fort (noyau).

Transcription : Un cuisinier (ARN polymérase) copie la recette sur un papier (ARN messager) pour l'apporter en cuisine. On ne sort jamais le livre original !

L'ARN messager sort du noyau et va vers les ribosomes (les cuisines).

Traduction : Les ribosomes lisent la recette (ARN messager) et assemblent les ingrédients (acides aminés) dans le bon ordre pour faire le plat (protéine).

Les ARN de transfert sont comme les serveurs qui apportent chaque ingrédient au bon moment.

Chaque groupe de 3 lettres (codon) sur la recette correspond à un ingrédient spécifique. C'est le code génétique universel !`,
        },
        theory: `Synthèse des Protéines

La synthèse des protéines se déroule en deux étapes principales : transcription et traduction.

Transcription (Noyau)

Initiation
- L'ARN polymérase se fixe sur le promoteur du gène
- Ouverture de la double hélice d'ADN

Élongation
- L'ARN polymérase lit le brin matrice (3' → 5')
- Synthèse de l'ARN messager (5' → 3')
- Appariement : A-U, T-A, G-C, C-G

Terminaison
- Signal de terminaison
- Libération de l'ARN pré-messager
- Maturation (épissage, coiffe, queue poly-A)

Traduction (Ribosome)

Code Génétique
- 1 codon = 3 nucléotides = 1 acide aminé
- 64 codons possibles, 20 acides aminés
- Codon START : AUG (Méthionine)
- Codons STOP : UAA, UAG, UGA

Étapes
1. Initiation : Ribosome se fixe sur l'ARNm
2. Élongation : Ajout séquentiel des acides aminés
3. Terminaison : Codon stop, libération de la protéine

ARN de Transfert (ARNt)
- Apporte les acides aminés
- Anticodon complémentaire au codon
- Liaison peptidique entre acides aminés`,
        exercises: [
            {
                question: 'Où se déroule la transcription ?',
                options: ['Cytoplasme', 'Ribosome', 'Noyau', 'Mitochondrie'],
                correct: 2,
                explanation: 'La transcription se passe dans le noyau où se trouve l\'ADN, comme le coffre-fort des recettes !'
            },
            {
                question: 'Combien de nucléotides forment un codon ?',
                options: ['1', '2', '3', '4'],
                correct: 2,
                explanation: 'Un codon est formé de 3 nucléotides qui codent pour un acide aminé.'
            }
        ],
        relatedSimulations: ['genetics-dna', 'cell-structure', 'cell-division']
    },

    'advanced-photosynthesis': {
        title: 'Photosynthèse Avancée',
        description: 'Explorez en détail les réactions lumineuses et le cycle de Calvin',
        type: 'plant-cell',
        config: {},
        analogy: {
            title: 'La Photosynthèse comme une Usine Solaire Complète',
            content: `La photosynthèse, c'est une usine en deux ateliers qui transforme la lumière en nourriture ! ☀️🌿

Atelier 1 - Réactions Lumineuses (Thylakoïdes) :
C'est comme des panneaux solaires qui capturent l'énergie du soleil.
- La chlorophylle attrape les photons (grains de lumière)
- L'eau est cassée en morceaux (photolyse) : H₂O → O₂ + H⁺ + e⁻
- On fabrique des "batteries" (ATP) et des "chargeurs" (NADPH)
- L'oxygène est libéré comme déchet (notre air !)

Atelier 2 - Cycle de Calvin (Stroma) :
C'est l'atelier de fabrication qui utilise les batteries.
- Le CO₂ de l'air est capturé (fixation)
- Avec l'énergie des batteries (ATP + NADPH), on construit du glucose
- C'est comme assembler des briques de LEGO pour faire une maison

Sans lumière, l'Atelier 1 s'arrête, mais l'Atelier 2 peut continuer un peu avec les réserves !`,
        },
        theory: `Photosynthèse Avancée

Équation globale : 6 CO₂ + 6 H₂O + Lumière → C₆H₁₂O₆ + 6 O₂

Phase Lumineuse (Thylakoïdes)

Photosystème II (P680)
- Absorption de photons
- Photolyse de l'eau : 2 H₂O → O₂ + 4 H⁺ + 4 e⁻
- Transfert d'électrons dans la chaîne de transport
- Pompage de protons dans le lumen

Photosystème I (P700)
- Absorption de photons
- Réduction du NADP⁺ en NADPH
- NADP⁺ + 2e⁻ + H⁺ → NADPH

Photophosphorylation
- Gradient de protons (force proton-motrice)
- ATP synthase produit ATP
- ADP + Pi → ATP

Bilan : Lumière + H₂O → O₂ + ATP + NADPH

Phase Sombre - Cycle de Calvin (Stroma)

1. Fixation du CO₂
- RuBisCO fixe CO₂ sur RuBP (5C)
- Formation de 2 molécules de PGA (3C)

2. Réduction
- PGA réduit en G3P (triose phosphate)
- Utilisation d'ATP et NADPH

3. Régénération du RuBP
- Une partie du G3P régénère le RuBP
- Le reste forme le glucose

Bilan : 6 CO₂ + 18 ATP + 12 NADPH → C₆H₁₂O₆

Facteurs Limitants
- Intensité lumineuse
- Concentration en CO₂
- Température
- Disponibilité en eau`,
        exercises: [
            {
                question: 'Où se déroulent les réactions lumineuses ?',
                options: ['Stroma', 'Thylakoïdes', 'Cytoplasme', 'Noyau'],
                correct: 1,
                explanation: 'Les réactions lumineuses se passent dans les thylakoïdes, comme des panneaux solaires !'
            },
            {
                question: 'Quelle enzyme fixe le CO₂ dans le cycle de Calvin ?',
                options: ['ATP synthase', 'RuBisCO', 'Chlorophylle', 'NADPH'],
                correct: 1,
                explanation: 'La RuBisCO est l\'enzyme qui capture le CO₂ de l\'air pour le fixer sur le RuBP.'
            }
        ],
        relatedSimulations: ['photosynthesis', 'cell-structure', 'ecosystem-dynamics']
    },

    'synaptic-transmission': {
        title: 'Transmission Synaptique',
        description: 'Visualisez la communication entre neurones',
        type: 'neuron',
        config: {},
        analogy: {
            title: 'La Synapse comme le Passage de Témoin au Relais',
            content: `La transmission synaptique, c'est comme une course de relais au stade ! 🏃‍♂️➡️🏃‍♀️

Le premier coureur (neurone pré-synaptique) arrive à toute vitesse avec le témoin (influx nerveux).

Mais attention ! Il y a un petit espace entre lui et le suivant (fente synaptique). Il ne peut pas toucher directement le prochain coureur !

Alors il lance des petits ballons (neurotransmetteurs) par-dessus l'espace.

Le deuxième coureur (neurone post-synaptique) attrape les ballons avec ses mains spéciales (récepteurs).

Quand il attrape assez de ballons, il se met à courir à son tour (nouveau potentiel d'action) !

Après, des ramasseurs (recapture) récupèrent les ballons pour les réutiliser ou les détruire (enzymes).

C'est comme ça que ton cerveau transmet les messages à la vitesse de l'éclair !`,
        },
        theory: `Transmission Synaptique

La synapse est la zone de communication entre deux neurones.

Structure de la Synapse

Neurone Pré-synaptique
- Bouton terminal
- Vésicules synaptiques (contiennent neurotransmetteurs)
- Canaux calciques voltage-dépendants

Fente Synaptique
- Espace de 20-40 nm
- Contient enzymes de dégradation

Neurone Post-synaptique
- Récepteurs membranaires
- Canaux ioniques chimio-dépendants

Mécanisme de Transmission

1. Arrivée du Potentiel d'Action
- Dépolarisation du bouton terminal
- Ouverture des canaux Ca²⁺

2. Libération des Neurotransmetteurs
- Entrée de Ca²⁺
- Fusion des vésicules avec la membrane
- Exocytose des neurotransmetteurs

3. Liaison aux Récepteurs
- Diffusion dans la fente
- Fixation sur récepteurs post-synaptiques
- Ouverture de canaux ioniques

4. Potentiel Post-synaptique
- PPSE (excitateur) : dépolarisation
- PPSI (inhibiteur) : hyperpolarisation
- Sommation spatiale et temporelle

5. Terminaison du Signal
- Recapture par le neurone pré-synaptique
- Dégradation enzymatique
- Diffusion hors de la synapse

Principaux Neurotransmetteurs
- Acétylcholine (ACh)
- Dopamine
- Sérotonine
- GABA (inhibiteur)
- Glutamate (excitateur)
- Noradrénaline`,
        exercises: [
            {
                question: 'Quel ion déclenche la libération des neurotransmetteurs ?',
                options: ['Na⁺', 'K⁺', 'Ca²⁺', 'Cl⁻'],
                correct: 2,
                explanation: 'L\'entrée de calcium (Ca²⁺) déclenche la fusion des vésicules et la libération des neurotransmetteurs !'
            },
            {
                question: 'Comment s\'appelle l\'espace entre deux neurones ?',
                options: ['Axone', 'Dendrite', 'Fente synaptique', 'Myéline'],
                correct: 2,
                explanation: 'La fente synaptique est le petit espace où les neurotransmetteurs doivent traverser.'
            }
        ],
        relatedSimulations: ['nervous-system', 'cell-structure', 'protein-synthesis']
    },

    'evolution-selection': {
        title: 'Évolution et Sélection Naturelle',
        description: 'Simulez l\'évolution des populations par sélection naturelle',
        type: 'dna',
        config: {},
        analogy: {
            title: 'L\'Évolution comme l\'Adaptation des Pêcheurs du Fleuve',
            content: `L'évolution, c'est comme les pêcheurs du fleuve Sénégal qui s'adaptent au fil des générations ! 🎣

Il y a longtemps, certains pêcheurs avaient des filets à petites mailles, d'autres à grandes mailles (variation).

Quand les gros poissons sont devenus rares, ceux avec les petits filets attrapaient plus de nourriture (sélection).

Ces pêcheurs prospères ont eu plus d'enfants et leur ont appris à faire des petits filets (hérédité).

Après plusieurs générations, presque tous les pêcheurs utilisent des petits filets (évolution de la population).

Ce n'est pas que les pêcheurs ont "décidé" de changer. C'est l'environnement (manque de gros poissons) qui a favorisé ceux qui avaient déjà les bons outils !

Les mutations sont comme des innovations accidentelles : parfois un pêcheur invente un nouveau type de filet par hasard. Si c'est utile, ça se répand !`,
        },
        theory: `Évolution et Sélection Naturelle

L'évolution est la modification des caractéristiques héréditaires des populations au cours des générations.

Principes de Darwin

1. Variation
- Les individus d'une population diffèrent
- Variations héréditaires (génétiques)

2. Surproduction
- Plus de descendants que de ressources
- Compétition pour la survie

3. Sélection Naturelle
- Les mieux adaptés survivent et se reproduisent
- "Survie du plus apte"

4. Hérédité
- Transmission des caractères avantageux
- Accumulation sur les générations

Mécanismes de l'Évolution

Mutations
- Source de variation génétique
- Aléatoires et rares
- Peuvent être neutres, avantageuses ou désavantageuses

Dérive Génétique
- Changements aléatoires dans les petites populations
- Effet fondateur, goulot d'étranglement

Flux Génique
- Migration d'individus entre populations
- Introduction de nouveaux allèles

Sélection Naturelle
- Directionnelle : favorise un extrême
- Stabilisante : favorise la moyenne
- Disruptive : favorise les extrêmes

Preuves de l'Évolution
- Fossiles (paléontologie)
- Anatomie comparée (organes homologues)
- Embryologie
- Biologie moléculaire (ADN, protéines)
- Biogéographie

Spéciation
Formation de nouvelles espèces par :
- Isolement géographique
- Isolement reproductif
- Divergence génétique`,
        exercises: [
            {
                question: 'Qui a proposé la théorie de la sélection naturelle ?',
                options: ['Mendel', 'Darwin', 'Lamarck', 'Watson'],
                correct: 1,
                explanation: 'Charles Darwin a proposé la théorie de la sélection naturelle en 1859 !'
            },
            {
                question: 'Quelle est la source principale de variation génétique ?',
                options: ['L\'environnement', 'Les mutations', 'L\'apprentissage', 'Le hasard'],
                correct: 1,
                explanation: 'Les mutations de l\'ADN sont la source principale de nouvelles variations génétiques.'
            }
        ],
        relatedSimulations: ['genetics-dna', 'ecosystem-dynamics', 'cell-division']
    },

    // ========== NOUVELLES SIMULATIONS (Lot 1) ==========

    'doppler-effect': {
        title: 'Effet Doppler',
        description: 'Changement de fréquence d\'une onde en mouvement',
        type: 'wave',
        config: {},
        analogy: {
            title: 'L\'Ambulance qui Passe',
            content: `PIN-PON ! PIN-PON ! 🚑
Quand l'ambulance vient vers toi, le son est AIGU (bzzz).
Quand elle s'éloigne, le son devient GRAVE (beuhhh).

C'est l'Effet Doppler !
- En approche : L'ambulance "écrase" les ondes devant elle (Fréquence augmente).
- En éloignement : Elle "étire" les ondes derrière elle (Fréquence diminue).

C'est pareil pour les radars de vitesse des gendarmes !`
        },
        theory: `Effet Doppler
Décalage de fréquence d'une onde acoustique ou électromagnétique observé entre les mesures à l'émission et à la réception, lorsque la distance entre l'émetteur et le récepteur varie au cours du temps.

Formule simplifiée (v << c) :
Δf = fR - fE = (v/c) · fE
- v : vitesse relative
- c : célérité de l'onde

Applications : Radars routiers, Échographie, Astrophysique (Expansion de l'univers).`,
        exercises: [
            { question: 'Si une étoile s\'éloigne de la Terre, sa lumière se décale vers...', options: ['Le Bleu', 'Le Rouge', 'Le Vert', 'Le Noir'], correct: 1, explanation: 'Redshift : L\'éloignement étire les ondes vers les grandes longueurs d\'onde (Rouge).' },
            { question: 'Une moto qui s\'approche émet un son...', options: ['Plus grave', 'Plus aigu', 'Identique', 'Sans son'], correct: 1, explanation: 'Les ondes sont comprimées, la fréquence reçue augmente (Aigu).' }
        ],
        relatedSimulations: ['sound-propagation', 'light-spectrum']
    },
    'kepler-laws': {
        title: 'Lois de Kepler',
        description: 'Mouvement des planètes',
        type: 'kepler-laws',
        config: {},
        analogy: {
            title: 'Le Lanceur de Pierre',
            content: `Imagine un lanceur qui fait tourner une pierre attachée à une corde.
Si la corde raccourcit, la pierre tourne plus vite !

Pour les planètes autour du Soleil :
Quand la Terre est PROCHE du Soleil (Périhélie), elle accélère (comme si elle tombait vers lui).
Quand elle est LOIN (Aphélie), elle ralentit.
Et l'orbite n'est pas un rond parfait, c'est une Ellipse (un rond aplati).`
        },
        theory: `Les 3 Lois de Kepler

1. Loi des Orbites : Les planètes décrivent des ellipses dont le Soleil occupe un des foyers.

2. Loi des Aires : Le rayon vecteur balaie des aires égales en des temps égaux. (La planète va plus vite quand elle est près).

3. Loi des Périodes : T² / a³ = k (constante)
- T : Période de révolution
- a : Demi-grand axe
Permet de calculer la masse de l'astre central.`,
        exercises: [
            { question: 'La trajectoire d\'une planète est...', options: ['Un cercle parfait', 'Une ellipse', 'Une parabole', 'Une ligne droite'], correct: 1, explanation: 'Première loi de Kepler : Les orbites sont elliptiques.' },
            { question: 'Quand la Terre est au plus près du Soleil, elle va...', options: ['Plus vite', 'Moins vite', 'À la même vitesse', 'En arrière'], correct: 0, explanation: 'Deuxième loi de Kepler (Loi des aires).' }
        ],
        relatedSimulations: ['gravitation-universal', 'satellite-motion']
    },
    'pendulum-oscillation': {
        title: 'Oscillations : Le Pendule',
        description: 'Mouvement périodique et énergie',
        type: 'force',
        config: {},
        analogy: {
            title: 'La Balançoire',
            content: `Le pendule simple, c'est juste une balançoire sans personne dessus qui pousse ! 🎢

Si tu la lâches d'en haut :
- En haut : Elle s'arrête un instant (Vitesse = 0, Énergie Potentielle max).
- En bas : Elle va le plus vite (Vitesse max, Énergie Cinétique max).

Et ça continue (Période T) jusqu'à ce que les frottement l'arrêtent.
Si tu raccourcis la corde, ça balance plus vite !`
        },
        theory: `Pendule Simple
Oscillateur mécanique.

Période (pour petites oscillations) :
T = 2π · √(L / g)
- L : Longueur du fil
- g : Gravité

Remarque : La période ne dépend PAS de la masse ! (Une boule lourde et une légère oscillent à la même vitesse).
Échange constant entre Énergie Potentielle et Cinétique.`,
        exercises: [
            { question: 'Si je double la masse au bout du pendule, la période...', options: ['Double', 'Diminue', 'Reste la même', 'S\'annule'], correct: 2, explanation: 'La période T est indépendante de la masse m.' },
            { question: 'Pour aller plus vite (diminuer T), il faut...', options: ['Raccourcir la corde', 'Allonger la corde', 'Pousser fort', 'Chauffer la corde'], correct: 0, explanation: 'T est proportionnel à la racine de la longueur L.' }
        ],
        relatedSimulations: ['energy-conservation-skater', 'rectilinear-motion']
    },
    'rlc-circuit': {
        title: 'Circuit RLC',
        description: 'Oscillations électriques libres',
        type: 'circuit',
        config: {},
        analogy: {
            title: 'Le Ressort Électrique',
            content: `Un circuit RLC (Résistance, Bobine, Condensateur), c'est comme un poids accroché à un ressort.

- Condensateur chargé = Ressort tendu (Stocke l'énergie Potentielle).
- Bobine = Masse (Inertie, Stocke l'énergie Cinétique/Magnétique).
- Résistance = Frottements (Perte d'énergie).

L'énergie passe du condensateur à la bobine, puis revient... ça oscille !
Mais la résistance "freine" le courant petit à petit (Amortissement).`
        },
        theory: `Circuit RLC Série
Circuit comportant une Résistance, une Inductance (Bobine) et une Capacité.

Oscillations amorties :
La charge q(t) oscille autour de 0 avec une amplitude qui décroît exponentiellement.

Période propre :
T₀ = 2π · √(L · C)

L'énergie totale se dissipe par effet Joule dans la résistance.`,
        exercises: [
            { question: 'Quel composant stocke l\'énergie magnétique ?', options: ['Le Condensateur', 'La Bobine', 'La Résistance', 'Le Générateur'], correct: 1, explanation: 'La bobine stocke l\'énergie sous forme de champ magnétique.' },
            { question: 'Quel composant dissipe l\'énergie (amortissement) ?', options: ['La Résistance', 'La Bobine', 'Le Condensateur', 'L\'interrupteur'], correct: 0, explanation: 'La résistance transforme l\'énergie électrique en chaleur (Effet Joule).' }
        ],
        relatedSimulations: ['rc-circuit', 'electromagnetic-induction']
    },
    'photoelectric-effect': {
        title: 'Effet Photoélectrique',
        description: 'Lumière, Photons et Électrons',
        type: 'atom',
        config: {},
        analogy: {
            title: 'Le Champ de Cocos et la Pluie',
            content: `Imagine un champ de noix de coco (électrons) sur un toit. 🥥
Tu veux les faire tomber en jetant des cailloux (photons/lumière).

Si tu jettes des millions de grains de sable (Lumière rouge intense) : RIEN ne tombe. (Pas assez d'énergie par choc).
Si tu jettes UN SEUL gros caillou (Lumière violette faible) : CLACK ! Une coco tombe.

Ça prouve que la lumière est faite de "paquets" (photons).
Même peu de lumière suffit, si chaque paquet est assez fort.`
        },
        theory: `Effet Photoélectrique (Einstein, 1905)
Émission d'électrons par un matériau soumis à la lumière.

Interprétation corpusculaire :
- La lumière est constituée de photons d'énergie E = h·ν.
- Pour arracher un électron, il faut E > W (Travail d'extraction).
- L'énergie cinétique restante est : Ec = h·ν - W.

Application : Panneaux solaires photovoltaïques.`,
        exercises: [
            { question: 'Qui a expliqué l\'effet photoélectrique ?', options: ['Newton', 'Einstein', 'Maxwell', 'Curie'], correct: 1, explanation: 'Albert Einstein (Prix Nobel 1921).' },
            { question: 'Pour arracher un électron, il faut une fréquence...', options: ['Suffisante (Seuil)', 'Nulle', 'Faible', 'Infinie'], correct: 0, explanation: 'Il faut que l\'énergie du photon (hν) dépasse le travail d\'extraction.' }
        ],
        relatedSimulations: ['quantum-mechanics', 'light-spectrum']
    },
    'fusion-fission': {
        title: 'Fusion et Fission',
        description: 'Énergie Nucléaire',
        type: 'atom',
        config: {},
        analogy: {
            title: 'Casser ou Coller des Légos',
            content: `L'énergie nucléaire, c'est jouer avec le noyau des atomes. ⚛️🧱

FISSION (Centrales nucléaires) :
On prend un ÉNORME atome (Uranium, comme une grosse construction Lego) et on tire dedans. BOUM ! Il se casse en deux.
Ça libère de l'énergie (et des déchets).

FUSION (Le Soleil) :
On prend deux PETITS atomes (Hydrogène) et on les écrase l'un contre l'autre très fort. PLOP ! Ils fusionnent pour en faire un plus gros (Hélium).
Ça libère ENCORE PLUS d'énergie (et c'est propre).`
        },
        theory: `Réactions Nucléaires

1. Fission :
- Noyau lourd instable (U235) + neutron → 2 noyaux moyens + neutrons + ÉNERGIE.
- Réaction en chaîne.

2. Fusion :
- 2 noyaux légers (Deutérium + Tritium) → Noyau plus lourd (Hélium) + neutron + ÉNERGIE.
- Nécessite des températures extrêmes (millions de degrés).
- Défaut de masse Δm transformé en énergie (E = mc²).`,
        exercises: [
            { question: 'Quelle réaction a lieu dans le Soleil ?', options: ['Fission', 'Fusion', 'Combustion', 'Évaporation'], correct: 1, explanation: 'Le Soleil fusionne des atomes d\'hydrogène en hélium.' },
            { question: 'Les centrales nucléaires actuelles utilisent la...', options: ['Fission', 'Fusion', 'Géothermie', 'Éolien'], correct: 0, explanation: 'Elles cassent des atomes d\'uranium (Fission).' }
        ],
        relatedSimulations: ['radioactivity', 'molar-mass']
    },
    'esterification': {
        title: 'Estérification',
        description: 'Chimie des parfums et arômes',
        type: 'chemical',
        config: {},
        analogy: {
            title: 'Le Mariage Acide-Alcool',
            content: `Comment fabriquer une odeur de banane ou de jasmin ? 🍌🌸
On marie deux produits qui ne sentent pas bon !

Monsieur Acide Carboxylique (Vinaigre...) + Madame Alcool = Bébé Ester (Parfum) + Eau.

C'est une réaction lente et limitée (ils peuvent divorcer : c'est l'Hydrolyse !).
Pour les forcer à rester mariés, on enlève l'eau au fur et à mesure (on sort la belle-mère ?).`
        },
        theory: `Estérification et Hydrolyse

Équation bilan :
R-COOH (Acide) + R'-OH (Alcool) ⇌ R-COO-R' (Ester) + H₂O (Eau)

Caractéristiques :
- Lente
- Limitée (Équilibre chimique)
- Athermique

Pour améliorer le rendement :
- Mettre un réactif en excès.
- Éliminer un produit (l'eau ou l'ester) pendant la réaction.
- Utiliser un catalyseur (Acide sulfurique) pour accélérer.`,
        exercises: [
            { question: 'Quel est le produit odorant de la réaction ?', options: ['L\'acide', 'L\'alcool', 'L\'ester', 'L\'eau'], correct: 2, explanation: 'Les esters sont responsables des arômes naturels de fruits et fleurs.' },
            { question: 'Comment accélérer l\'estérification ?', options: ['Ajouter de l\'eau', 'Refroidir', 'Ajouter un catalyseur (H₂SO₄)', 'Mettre moins d\'alcool'], correct: 2, explanation: 'Un catalyseur augmente la vitesse sans changer l\'état final.' }
        ],
        relatedSimulations: ['chemical-equilibrium', 'organic-chemistry']
    },
    'soap-saponification': {
        title: 'Saponification',
        description: 'La chimie du Savon',
        type: 'chemical',
        config: {},
        analogy: {
            title: 'L\'Attaque de la Soude',
            content: `Comment on fait du savon ? 🧼
On prend du Gras (Huile ou Beurre de Karité) et on l'attaque avec une base très forte (Soude Caustique).

C'est une bagarre totale et définitive !
Le Gras est coupé en morceaux :
- Une partie devient du Savon (Nettoyant).
- L'autre devient de la Glycérine (Douceur).

Contrairement à l'estérification, ici c'est irréversible : on ne peut pas refaire de l'huile avec du savon !`
        },
        theory: `Saponification

Réaction entre un ester gras (Triglycéride) et une base forte (NaOH ou KOH).

Équation :
Triglycéride + 3 (Na+ + HO-) → 3 Savon (Carboxylate de sodium) + Glycérol

Propriétés du savon :
Structure amphiphile :
- Tête hydrophile (aime l'eau).
- Queue lipophile (aime le gras).
Permet de former des micelles pour emprisonner la saleté.`,
        exercises: [
            { question: 'La saponification est une réaction...', options: ['Totale et rapide à chaud', 'Lente et limitée', 'Impossible', 'Gazeuse'], correct: 0, explanation: 'À chaud avec de la soude concentrée, elle est totale.' },
            { question: 'Pourquoi le savon lave-t-il ?', options: ['Il est acide', 'Il est amphiphile (aime eau et gras)', 'Il est rouge', 'Il chauffe'], correct: 1, explanation: 'Il fait le pont entre l\'eau de lavage et le gras de la tache.' }
        ],
        relatedSimulations: ['esterification', 'molecular-geometry']
    },
    'chirality-molecules': {
        title: 'Chiralité',
        description: 'Molécules en miroir',
        type: 'water',
        config: {},
        analogy: {
            title: 'La Main Gauche et la Main Droite',
            content: `Regarde tes mains. ✋🤚
Elles se ressemblent, mais elles ne sont pas superposables !
Tu ne peux pas mettre ton gant gauche à la main droite.

C'est la Chiralité.
Certaines molécules sont comme ça. Il y a la version "Gauche" et la version "Droite".
Parfois, la version "Gauche" est un médicament (ex: Ibuprofène) et la version "Droite" est inutile ou toxique !`
        },
        theory: `Chiralité et Isomérie Optique

Une molécule est chirale si elle n'est pas superposable à son image dans un miroir.
Cause principale : Présence d'un Carbone Asymétrique (C*) lié à 4 groupes différents.

Isomères optiques (Énantiomères) :
- Mêmes propriétés physiques (sauf action sur la lumière polarisée).
- Propriétés biologiques souvent très différentes (clé/serrure enzymatique).`,
        exercises: [
            { question: 'Une molécule chirale...', options: ['A un axe de symétrie', 'N\'est pas superposable à son image miroir', 'Est toujours toxique', 'Est gazeuse'], correct: 1, explanation: 'Comme une main ou une chaussure.' },
            { question: 'Que faut-il souvent pour être chiral ?', options: ['Un Carbone Asymétrique', 'Une double liaison', 'De l\'oxygène', 'Deux azotes'], correct: 0, explanation: 'Un carbone lié à 4 atomes/groupes différents.' }
        ],
        relatedSimulations: ['molecular-geometry', 'enzyme-kinetics']
    },

    // ========== NOUVELLES SIMULATIONS (Lot 2) ==========

    'muscle-contraction': {
        title: 'Contraction Musculaire',
        description: 'Mouvement et ATP',
        type: 'human-body',
        config: {},
        analogy: {
            title: 'Les Rameurs de la Pirogue',
            content: `Dans tes muscles, il y a des milliers de petits filaments qui glissent les uns sur les autres.

Imagine des rameurs (les têtes de Myosine) qui tirent sur des cordes (les filaments d'Actine).
Pour ramer, il faut de l'énergie (ATP) et le signal du capitaine (Calcium).

"Hisse et Oh !" : Le muscle se raccourcit, et ton bras se plie.`
        },
        theory: `Mécanisme de la Contraction Musculaire

Glissement des myofilaments d'actine et de myosine dans le sarcomère.

Cycle de contraction :
1. Fixation de l'ATP sur la tête de myosine.
2. Hydrolyse de l'ATP → Redressement de la tête.
3. Fixation sur l'actine (Pons d'union) en présence de Ca²+.
4. Pivotement de la tête (Libération ADP + Pi) → Glissement.
5. Détachement (Nouvelle ATP obligatoire, sinon crampe/rigidité cadavérique).`,
        exercises: [
            { question: 'Quel ion est indispensable pour déclencher la contraction ?', options: ['Le Sodium', 'Le Calcium', 'Le Fer', 'Le Chlore'], correct: 1, explanation: 'Le Calcium libère les sites de fixation sur l\'actine.' },
            { question: 'Quelle molécule fournit l\'énergie ?', options: ['L\'ADN', 'L\'ATP', 'L\'Eau', 'La Vitamine C'], correct: 1, explanation: 'L\'Adénosine TriPhosphate est la monnaie énergétique de la cellule.' }
        ],
        relatedSimulations: ['cell-respiration', 'synaptic-transmission']
    },
    'aids-virus': {
        title: 'Le VIH et le Système Immunitaire',
        description: 'Infection et Défense',
        type: 'immune',
        config: {},
        analogy: {
            title: 'Le Cheval de Troie',
            content: `Le VIH est un virus très rusé.
Il n'attaque pas les soldats de base (Anticorps), il attaque le GÉNÉRAL des armées (Lymphocytes T4) !

Il rentre dans le quartier général en se déguisant, pirate l'usine de photocopieuse (noyau) pour se dupliquer, et détruit le général en sortant.
Sans général pour donner les ordres, l'armée ne sait plus se défendre, même contre un petit rhume.`
        },
        theory: `Infection par le VIH

Le Virus de l'Immunodéficience Humaine est un rétrovirus (ARN).

Cycle :
1. Fixation sur le récepteur CD4 des Lymphocytes T4.
2. Pénétration et Rétrotranscription (ARN → ADN).
3. Intégration dans l'ADN de la cellule.
4. Transcription et Traduction de nouveaux virus.
5. Bourgeonnement et destruction du LT4.

Stade SIDA : Quand le taux de LT4 est trop bas, les maladies opportunistes apparaissent.`,
        exercises: [
            { question: 'Quelle cellule est la cible principale du VIH ?', options: ['Le Globule Rouge', 'Le Lymphocyte T4', 'Le Neurone', 'La Peau'], correct: 1, explanation: 'Le LT4 est le chef d\'orchestre de la réponse immunitaire.' },
            { question: 'Le VIH est un rétrovirus, cela signifie qu\'il contient...', options: ['De l\'ADN', 'De l\'ARN', 'Des protéines seulement', 'Du sucre'], correct: 1, explanation: 'Son matériel génétique est l\'ARN, qu\'il convertit en ADN (Rétrotranscription).' }
        ],
        relatedSimulations: ['adaptive-immunity', 'protein-synthesis']
    },
    'climate-feedback': {
        title: 'Rétroactions Climatiques',
        description: 'Effet de serre et conséquences',
        type: 'tectonics',
        config: {},
        analogy: {
            title: 'L\'Effet Boule de Neige',
            content: `La machine climatique peut s'emballer !

Exemple de l'Albédo (L'effet miroir de la glace) :
1. Il fait chaud, la glace fond.
2. Moins de glace = Moins de surface blanche pour réfléchir le soleil.
3. L'océan (sombre) absorbe plus de chaleur.
4. Il fait ENCORE PLUS chaud, donc encore plus de glace fond...

C'est une boucle vicieuse (Rétroaction Positive).`
        },
        theory: `Rétroactions Climatiques

Amplificateurs du réchauffement (Positives) :
- Fonte des glaces (Baisse Albédo).
- Fonte du Permafrost (Libération de Méthane).
- Vapeur d'eau (Gaz à effet de serre puissant).

Stabilisateurs (Négatives) :
- Photosynthèse (Puits de carbone), mais limitée.
- Océans (Absorbe CO2), mais s'acidifient.`,
        exercises: [
            { question: 'Quand la banquise fond, la Terre absorbe...', options: ['Moins de chaleur', 'Plus de chaleur', 'Pareil', 'Du froid'], correct: 1, explanation: 'L\'eau sombre absorbe les rayons, la glace blanche les renvoyait (Albédo).' },
            { question: 'Le CO2 est un gaz à...', options: ['Effet de serre', 'Effet de froid', 'Odeur de rose', 'Couleur verte'], correct: 0, explanation: 'Il piège le rayonnement infrarouge émis par la Terre.' }
        ],
        relatedSimulations: ['greenhouse-effect', 'ecosystem-dynamics']
    },
    'plant-growth': {
        title: 'Croissance des Végétaux',
        description: 'Auxine et phototropisme',
        type: 'plant-cell',
        config: {},
        analogy: {
            title: 'La Plante qui Cherche le Soleil',
            content: `Pourquoi les plantes poussent-elles vers la lumière ? 🌻
Parce qu'elles ont une hormone (l'Auxine) qui déteste le soleil !

L'auxine se cache du côté à l'ombre de la tige.
Elle fait grandir les cellules de ce côté-là plus vite.
Résultat : La tige se courbe vers la lumière !

C'est comme si tu avais une jambe qui grandissait plus vite que l'autre, tu tournerais en rond.`
        },
        theory: `Développement Végétal

Méristèmes : Zones de division cellulaire (Mitose).

Auxine : Hormone végétale (Phytohormone) responsable de l'élongation cellulaire.

Phototropisme :
- Éclairement anisotrope (un seul côté).
- Migration de l'auxine vers la face sombre.
- Élongation plus forte face sombre.
- Courbure vers la lumière.`,
        exercises: [
            { question: 'L\'auxine est une hormone qui...', options: ['Tue la plante', 'Fait grandir les cellules', 'Fait rougir les fruits', 'Attire les abeilles'], correct: 1, explanation: 'Elle stimule l\'élongation cellulaire.' },
            { question: 'Si la lumière vient de droite, l\'auxine va...', options: ['À droite', 'À gauche (à l\'ombre)', 'En haut', 'En bas'], correct: 1, explanation: 'Elle fuit la lumière, provoquant la croissance du côté gauche pour courber vers la droite.' }
        ],
        relatedSimulations: ['photosynthesis', 'cell-division']
    },
    'enzyme-kinetics': {
        title: 'Cinétique Enzymatique',
        description: 'Vitesse des réactions catalysées',
        type: 'enzyme-kinetics',
        config: {},
        analogy: {
            title: 'L\'Enzyme : L\'Ouvrier Ultra-Rapide',
            content: `Une enzyme est un ouvrier spécialisé dans une tâche précise. 🔧⏱️

Imagine une usine de découpe de gâteaux.
Le gâteau (Substrat) arrive sur le tapis roulant.
L'ouvrier (Enzyme) le coupe avec son couteau spécial (Site Actif).

La Vitesse dépend de :
1. Nombre d'ouvriers : Plus d'enzymes = Plus de produits.
2. Nombre de gâteaux : Plus de substrat = Plus vite (jusqu'à saturation).
3. Fatigue/Conditions : Température et pH affectent l'efficacité.

À la Saturation (Vmax) : Tous les ouvriers sont occupés en permanence.
Même si tu ajoutes plus de gâteaux, ils ne peuvent pas aller plus vite !`
        },
        theory: `Cinétique Enzymatique

L'enzyme (E) catalyse la transformation du Substrat (S) en Produit (P).
E + S ⇌ ES → E + P

Vitesse de réaction (v = d[P]/dt) :
- Augmente avec [S] au début.
- Plafonne quand toutes les enzymes sont occupées (Saturation).

Facteurs influents :
- Température (Optimum).
- pH (Optimum).
- Concentration en Enzyme.`,
        exercises: [
            { question: 'Quand toutes les enzymes sont occupées, on dit qu\'il y a...', options: ['Fatigue', 'Saturation', 'Grève', 'Vacances'], correct: 1, explanation: 'Le complexe ES est formé partout, la vitesse est maximale.' },
            { question: 'Si on chauffe trop une enzyme, elle...', options: ['Travaille plus vite', 'Se dénature (casse)', 'Fond', 'S\'évapore'], correct: 1, explanation: 'Comme le blanc d\'œuf qui cuit, la protéine perd sa forme et sa fonction.' }
        ],
        relatedSimulations: ['protein-synthesis', 'digestive-system']
    },
    'beer-lambert-law': {
        title: 'Loi de Beer-Lambert',
        description: 'Dosage par spectrophotométrie',
        type: 'water',
        config: {},
        analogy: {
            title: 'Le Verre de Bissap',
            content: `Comment savoir si le jus de Bissap est concentré sans le goûter ? 🥤
On regarde sa couleur !

- Plus c'est foncé, plus c'est concentré.
- Plus le verre est large, plus ça paraît foncé.

C'est la loi de Beer-Lambert :
L'assombrissement (Absorbance) dépend de la Concentration et de l'Épaisseur.`
        },
        theory: `Loi de Beer-Lambert

Absorbance (A) d'une solution colorée :
A = ε · l · C

- A : Absorbance (sans unité)
- ε : Coefficient d'extinction molaire (dépend de la molécule et de la longueur d'onde)
- l : Longueur de la cuve (cm)
- C : Concentration (mol/L)

A est proportionnel à C. La courbe d'étalonnage est une droite passant par l'origine.` ,
        exercises: [
            { question: 'Si la concentration double, l\'absorbance...', options: ['Double', 'Reste pareille', 'Diminue', 'Devient nulle'], correct: 0, explanation: 'Il y a proportionnalité directe (Relation linéaire).' },
            { question: 'Pour doser une solution bleue, on utilise une lumière...', options: ['Bleue', 'Rouge/Orange (Complémentaire)', 'Noire', 'Invisible'], correct: 1, explanation: 'La solution est bleue car elle absorbe les autres couleurs (surtout l\'orange/rouge).' }
        ],
        relatedSimulations: ['molar-concentration', 'light-spectrum']
    },
    'radioactive-dating': {
        title: 'Datation Carbone 14',
        description: 'Comment savoir l\'âge d\'une momie ?',
        type: 'radioactive-decay',
        config: {},
        analogy: {
            title: 'Le Sablier Géant',
            content: `Le Carbone 14 est comme un sablier intégré dans tous les êtres vivants. ⏳💀

Tant qu'on est vivant, on le remplit (en mangeant/respirant).
Quand on meurt, le sablier se vide doucement (le C14 disparaît).
Il faut 5700 ans pour qu'il se vide à moitié (Demi-Vie).

Si on trouve un os avec la moitié de la dose normale, il a 5700 ans !
S'il reste un quart, il a 2 x 5700 = 11 400 ans.`
        },
        theory: `Datation Absolue

Loi de décroissance radioactive :
N(t) = N₀ · e^(-λt)

Demi-vie (t1/2) : Temps pour que la moitié des noyaux se désintègrent.
Pour C14, t1/2 = 5730 ans.

Utilisable pour dater des objets organiques (bois, os, tissu) de moins de 50 000 ans.
Pour les roches plus anciennes, on utilise Uranium-Plomb ou Potassium-Argon.`,
        exercises: [
            { question: 'Après deux demi-vies, il reste...', options: ['Rien', 'La moitié (50%)', 'Le quart (25%)', 'Tout'], correct: 2, explanation: '100% -> 50% -> 25%.' },
            { question: 'Peut-on dater un dinosaure (65 millions d\'années) au Carbone 14 ?', options: ['Oui', 'Non', 'Peut-être', 'Seulement les T-Rex'], correct: 1, explanation: 'Non, tout le C14 a disparu depuis longtemps. Il faut d\'autres isotopes.' }
        ],
        relatedSimulations: ['radioactivity', 'nuclear-fusion']
    },
    'laser-principle': {
        title: 'Le Laser',
        description: 'Émission stimulée de lumière',
        type: 'diffraction',
        config: {},
        analogy: {
            title: 'L\'Armée de Clones',
            content: `La lumière normale (ampoule), c'est comme une foule qui sort d'un stade : ça part dans tous les sens, en désordre.

Le LASER, c'est un défilé militaire :
- Tous les soldats sont habillés pareil (Monochromatique : 1 seule couleur).
- Ils marchent tous au même pas (Cohérence).
- Ils vont tous dans la même direction (Directivité).

C'est pour ça qu'un laser peut aller jusqu'à la Lune sans s'élargir !`
        },
        theory: `LASER (Light Amplification by Stimulated Emission of Radiation)

Principes clés :
1. Pompage optique : Exciter les atomes (Inversion de population).
2. Émission stimulée : Un photon incident provoque l'émission d'un photon JUMEAU (même fréquence, phase, direction).
3. Amplification : Miroirs parallèles pour faire passer la lumière plusieurs fois.

Propriétés : Monochromatique, Cohérent, Directif, Puissant.`,
        exercises: [
            { question: 'Que signifie le "S" de LASER ?', options: ['Soleil', 'Stimulated (Stimulée)', 'Super', 'Speed'], correct: 1, explanation: 'Émission Stimulée de rayonnement.' },
            { question: 'La lumière d\'un laser est...', options: ['Multicolore', 'Monochromatique', 'Froide', 'Invisible'], correct: 1, explanation: 'Elle ne contient qu\'une seule longueur d\'onde (couleur pure).' }
        ],
        relatedSimulations: ['light-spectrum', 'quantum-mechanics']
    },

    // ========== NOUVELLES SIMULATIONS ==========
    'rlc-circuit': {
        title: 'Circuit RLC',
        description: 'Oscillations électriques et résonance',
        type: 'rlc-circuit',
        config: {},
        analogy: {
            title: 'Le Circuit RLC : Une Balançoire Électrique',
            content: `Un circuit RLC, c'est comme une balançoire ! 🎢⚡

Le Condensateur (C) : C'est le gamin sur la balançoire. Quand il est en haut, il a de l'énergie (tendu, prêt à descendre).
La Bobine (L) : C'est le mouvement de la balançoire. Plus elle va vite, plus elle a d'élan.
La Résistance (R) : C'est le frottement de l'air qui ralentit petit à petit.

Quand tu lâches le condensateur chargé, l'énergie passe du condensateur à la bobine et vice-versa.
C'est une oscillation électrique !

À la fréquence de résonance, l'amplitude est maximale. C'est comme pousser la balançoire au bon rythme !`
        },
        theory: `Circuit RLC Série

Composants :
- R : Résistance (Ohms)
- L : Inductance (Henry)  
- C : Capacité (Farad)

Équation différentielle :
L·(d²q/dt²) + R·(dq/dt) + q/C = u(t)

Régime libre :
- Pseudo-période : T = 2π√(LC)
- Amortissement : dépend de R

Régime forcé sinusoïdal :
- Impédance : Z = √(R² + (Lω - 1/Cω)²)
- Résonance quand Lω = 1/Cω → ω₀ = 1/√(LC)

Applications : Radio, filtres, oscillateurs.`,
        exercises: [
            { question: 'Quelle est la condition de résonance ?', options: ['R = 0', 'Lω = 1/Cω', 'C = L', 'L = R'], correct: 1, explanation: 'À la résonance, les réactances de L et C se compensent.' },
            { question: 'Que se passe-t-il à la résonance ?', options: ['Le courant est nul', 'Le courant est maximal', 'La tension est nulle', 'Le circuit explose'], correct: 1, explanation: 'L\'impédance est minimale (= R), donc le courant est maximal.' }
        ],
        relatedSimulations: ['rc-circuit', 'electromagnetic-induction']
    },
    'photoelectric-effect': {
        title: 'Effet Photoélectrique',
        description: 'Émission d\'électrons par la lumière',
        type: 'photoelectric-effect',
        config: {},
        analogy: {
            title: 'L\'Effet Photoélectrique : Le Lanceur de Boules',
            content: `L'effet photoélectrique, c'est comme un jeu de foire où tu lances des balles pour faire tomber des boîtes ! 🎯

Les photons (grains de lumière) sont les balles.
Les électrons dans le métal sont les boîtes sur l'étagère.

Règle 1 : Si la balle est trop molle (lumière rouge), même si tu en lances 1000, aucune boîte ne tombe !
Règle 2 : Si la balle est assez dure (lumière bleue/UV), UNE SEULE balle peut faire tomber une boîte.

C'est la couleur (fréquence) qui compte, pas le nombre de balles !

Einstein a expliqué ça : la lumière est faite de paquets d'énergie (photons).
E = h·f (plus la fréquence est haute, plus le photon transporte d'énergie).`
        },
        theory: `Effet Photoélectrique (Einstein, 1905)

L'éjection d'électrons d'un métal par absorption de lumière.

Équation d'Einstein :
E_photon = W + Ec
h·f = W + ½·m·v²

- h : Constante de Planck (6.63 × 10⁻³⁴ J·s)
- f : Fréquence de la lumière
- W : Travail d'extraction (seuil)
- Ec : Énergie cinétique de l'électron éjecté

Seuil photoélectrique :
f₀ = W / h (Fréquence minimale)
λ₀ = c / f₀ (Longueur d'onde seuil)

Propriétés :
- Effet instantané
- Pas d'effet si f < f₀ (même avec lumière intense)
- Ec augmente avec f (pas avec l'intensité)

Preuve de la nature quantique de la lumière !`,
        exercises: [
            { question: 'Pourquoi la lumière rouge ne produit pas d\'effet photo sur le zinc ?', options: ['Elle est trop faible', 'Sa fréquence est trop basse', 'Elle est trop chaude', 'Le zinc est réfléchissant'], correct: 1, explanation: 'L\'énergie du photon rouge (h·f) est inférieure au travail d\'extraction W.' },
            { question: 'Qu\'a prouvé l\'effet photoélectrique ?', options: ['La lumière est une onde', 'La lumière est faite de photons', 'Les électrons sont lourds', 'Le métal conduit'], correct: 1, explanation: 'C\'est LA preuve de la nature corpusculaire (quantique) de la lumière.' }
        ],
        relatedSimulations: ['quantum-mechanics', 'radioactivity']
    },
    'pendulum-oscillations': {
        title: 'Oscillations : Le Pendule',
        description: 'Mouvement périodique et énergie',
        type: 'pendulum-oscillations',
        config: {},
        analogy: {
            title: 'Le Pendule : La Balançoire Cosmique',
            content: `Un pendule, c'est la physique la plus pure ! Comme la balançoire de ton enfance. 🎢

Quand tu es en haut (écarté), tu as plein d'Énergie Potentielle (stockée).
Quand tu passes en bas, toute cette énergie s'est transformée en Vitesse (Énergie Cinétique).
Tu remontes de l'autre côté... et ça recommence !

🔥 Le truc magique : La période (temps d'un aller-retour) ne dépend PAS de l'amplitude !
Que tu fasses de petits ou grands mouvements, le temps est le même (si l'angle reste petit).
C'est l'isochronisme du pendule, découvert par Galilée !

T = 2π√(L/g) → Seule la longueur L et la gravité g comptent.`
        },
        theory: `Oscillations du Pendule Simple

Équation du mouvement :
θ'' + (g/L)·sin(θ) = 0

Approximation petits angles (sin θ ≈ θ) :
θ'' + ω₀²·θ = 0

Solution : θ(t) = θ_max · cos(ω₀t + φ)

Période :
T = 2π√(L/g)
- L : Longueur du fil
- g : Accélération de la gravité

Énergie mécanique :
Em = Ec + Ep = constante (sans frottement)
- Ec = ½·m·v²
- Ep = m·g·h

Facteur de qualité Q :
Mesure l'amortissement. Plus Q est grand, plus le pendule oscille longtemps.`,
        exercises: [
            { question: 'Pour doubler la période d\'un pendule, il faut...', options: ['Doubler la masse', 'Quadrupler la longueur', 'Doubler la longueur', 'Réduire g'], correct: 1, explanation: 'T = 2π√(L/g). Pour T×2, il faut L×4 (car racine carrée).' },
            { question: 'La période du pendule dépend-elle de la masse ?', options: ['Oui', 'Non', 'Seulement pour les grands angles', 'Seulement sur la Lune'], correct: 1, explanation: 'Non ! T = 2π√(L/g), la masse n\'apparaît pas.' }
        ],
        relatedSimulations: ['energy-conservation', 'rlc-circuit']
    },
    'nuclear-fusion-fission': {
        title: 'Fusion et Fission Nucléaires',
        description: 'Énergie du noyau atomique',
        type: 'nuclear-fusion-fission',
        config: {},
        analogy: {
            title: 'Fission et Fusion : Casser ou Coller les LEGO',
            content: `L'énergie nucléaire, c'est comme jouer aux LEGO atomiques ! 🧱💥

FISSION (Casser) :
Tu prends un gros LEGO (Uranium-235).
Tu le casses en deux morceaux moyens.
BOUM ! De l'énergie est libérée !
C'est ce qu'on fait dans les centrales nucléaires.

FUSION (Coller) :
Tu prends deux tout petits LEGO (Hydrogène).
Tu les colles très fort pour faire un LEGO moyen (Hélium).
BOOM ! Encore PLUS d'énergie libérée !
C'est ce que fait le Soleil depuis 5 milliards d'années ! ☀️

Pourquoi ça libère de l'énergie ?
Parce que les noyaux moyens sont les plus stables. Quand on y arrive (depuis gros ou petits), on libère du "trop-plein".`
        },
        theory: `Réactions Nucléaires

FISSION :
Cassure d'un noyau lourd en noyaux plus légers.
²³⁵U + n → ¹⁴¹Ba + ⁹²Kr + 3n + Énergie (200 MeV)

Réaction en chaîne : Les neutrons produits cassent d'autres noyaux.
Contrôle : Barres de contrôle absorbent les neutrons.

FUSION :
Assemblage de noyaux légers en noyau plus lourd.
²H + ³H → ¹He + n + Énergie (17.6 MeV)

Conditions : T > 100 millions °C, confinement (gravitationnel/magnétique).

Défaut de masse (Δm) :
E = Δm · c²
La masse des produits est inférieure à celle des réactifs.
Cette masse "perdue" est convertie en énergie colossale !

Énergie de liaison par nucléon :
Maximum pour le Fer-56 → Noyau le plus stable.`,
        exercises: [
            { question: 'Quelle réaction alimente le Soleil ?', options: ['Fission de l\'Uranium', 'Fusion de l\'Hydrogène', 'Combustion', 'Désintégration'], correct: 1, explanation: 'Le Soleil fusionne l\'hydrogène en hélium depuis des milliards d\'années.' },
            { question: 'Pourquoi la fusion libère-t-elle de l\'énergie ?', options: ['Parce que c\'est chaud', 'À cause du défaut de masse', 'Parce que ça explose', 'Par magie'], correct: 1, explanation: 'La masse des produits est inférieure, la différence devient énergie (E = Δm·c²).' }
        ],
        relatedSimulations: ['radioactivity', 'atomic-structure']
    },
    'esterification-reaction': {
        title: 'Estérification',
        description: 'Synthèse d\'esters et équilibre',
        type: 'esterification-reaction',
        config: {},
        analogy: {
            title: 'L\'Estérification : Le Mariage Chimique',
            content: `L'estérification, c'est le mariage entre un Acide et un Alcool ! 💒

L'Acide Carboxylique (COOH) est le marié.
L'Alcool (OH) est la mariée.
Ensemble, ils forment un ESTER (le bébé) et de l'Eau (le cadeau aux invités).

Acide + Alcool ⇌ Ester + Eau

Pourquoi les parfums sentent bon ? Ce sont des esters !
- Acétate d'éthyle → Odeur de poire 🍐
- Butanoate d'éthyle → Odeur d'ananas 🍍

⚠️ C'est un mariage réversible ! L'ester peut "divorcer" et redonner l'acide et l'alcool (Hydrolyse).
C'est un équilibre chimique.`
        },
        theory: `Estérification et Hydrolyse

Réaction d'estérification :
Acide Carboxylique + Alcool ⇌ Ester + Eau
R-COOH + R'-OH ⇌ R-COO-R' + H₂O

Caractéristiques :
- Lente (catalyse acide : H⁺)
- Athermique (faible effet de T)
- Réversible (équilibre)
- Limité (rendement < 100%)

Rendement à l'équilibre :
Dépend des proportions initiales et du type d'alcool.
- Alcool primaire : ~67%
- Alcool secondaire : ~60%
- Alcool tertiaire : ~5%

Pour déplacer l'équilibre :
- Excès d'un réactif
- Éliminer l'eau (Dean-Stark)
- Utiliser un catalyseur (H₂SO₄)

Nomenclature :
Acide butanoïque + Éthanol → Butanoate d'éthyle`,
        exercises: [
            { question: 'Quel produit caractéristique de l\'estérification ?', options: ['CO₂', 'H₂O', 'H₂', 'O₂'], correct: 1, explanation: 'L\'estérification produit de l\'eau (condensation).' },
            { question: 'L\'estérification est-elle totale ?', options: ['Oui', 'Non, elle est limitée', 'Seulement si on chauffe', 'Seulement sans catalyseur'], correct: 1, explanation: 'C\'est une réaction équilibrée, limitée par l\'hydrolyse inverse.' }
        ],
        relatedSimulations: ['chemical-equilibrium', 'organic-chemistry']
    },
    'saponification-soap': {
        title: 'Saponification',
        description: 'Fabrication du savon',
        type: 'saponification-soap',
        config: {},
        analogy: {
            title: 'La Saponification : Fabriquer du Savon',
            content: `La saponification, c'est la cuisine du savon ! 🧼

Ingrédients :
- Corps gras (Huile d'olive, beurre de karité, huile de palme...)
- Base forte (Soude NaOH ou Potasse KOH)

Recette :
On chauffe l'huile + la soude ensemble. La magie opère !
Le gras est "cassé" en deux parties :
1. Le Savon (qui nettoie)
2. La Glycérine (qui adoucit la peau)

Au Sénégal, le savon noir traditionnel utilise de la cendre (contient de la potasse) !

⚠️ Contrairement à l'estérification, la saponification est TOTALE et IRRÉVERSIBLE.
Une fois que c'est fait, c'est fait !`
        },
        theory: `Saponification

Réaction :
Ester (Triglycéride) + Base → Savon + Glycérol
(RCOO)₃-C₃H₅ + 3 NaOH → 3 RCOO⁻Na⁺ + C₃H₅(OH)₃

Caractéristiques :
- Totale (irréversible)
- Exothermique
- Lente (catalysée par T)

Savon = Carboxylate de sodium (ou potassium)
- Partie hydrophile : COO⁻ (aime l'eau)
- Partie hydrophobe : R (chaîne carbonée, aime le gras)

Action nettoyante :
1. La queue hydrophobe s'accroche à la saleté grasse.
2. La tête hydrophile reste dans l'eau.
3. Le savon forme des micelles qui emprisonnent le gras.
4. L'eau emporte les micelles !

Indice de saponification :
Masse de KOH nécessaire pour saponifier 1g de corps gras.`,
        exercises: [
            { question: 'La saponification est-elle réversible ?', options: ['Oui', 'Non, elle est totale', 'Seulement à haute température', 'Seulement avec un catalyseur'], correct: 1, explanation: 'C\'est une réaction totale et irréversible.' },
            { question: 'Quel produit accompagne le savon ?', options: ['Eau', 'Glycérine (Glycérol)', 'CO₂', 'Éthanol'], correct: 1, explanation: 'La saponification produit du savon ET du glycérol.' }
        ],
        relatedSimulations: ['esterification-reaction', 'organic-chemistry']
    },
    'chirality-stereochemistry': {
        title: 'Chiralité',
        description: 'Molécules miroirs et stéréoisomérie',
        type: 'chirality-stereochemistry',
        config: {},
        analogy: {
            title: 'La Chiralité : Tes Mains Chimiques',
            content: `Regarde tes deux mains. 🤚🖐️

Elles sont identiques (mêmes doigts, même taille), MAIS tu ne peux pas superposer ta main gauche sur ta droite !
C'est le même problème pour certaines molécules.

Une molécule chirale est comme une main : elle a une image miroir qui n'est pas superposable.
- Ta main droite = Énantiomère R (ou D)
- Ta main gauche = Énantiomère S (ou L)

Ça a l'air anodin, mais en médecine c'est VITAL !
- Un énantiomère peut guérir.
- L'autre peut être un poison !

C'est pour ça que la Thalidomide (médicament) a causé des malformations dans les années 60. On donnait le mauvais "main" !`
        },
        theory: `Chiralité et Stéréoisomérie

Carbone Asymétrique :
Un atome de carbone lié à 4 substituants DIFFÉRENTS.
C'est le centre de chiralité (*C).

Énantiomères :
Deux molécules images l'une de l'autre dans un miroir, non superposables.
Même formule, mêmes propriétés physiques, MAIS :
- Activité optique opposée (dévient la lumière polarisée)
- Activité biologique différente

Configuration R/S (Règle CIP) :
1. Classer les 4 groupes par priorité (Z le plus lourd).
2. Placer le groupe le moins prioritaire à l'arrière.
3. Si on tourne dans le sens horaire : R (Rectus).
4. Sens antihoraire : S (Sinister).

Mélange Racémique :
50% R + 50% S → Pas d'activité optique (les rotations s'annulent).

Diastéréoisomères :
Stéréoisomères qui ne sont PAS images miroir (≥ 2 carbones asymétriques).`,
        exercises: [
            { question: 'Deux énantiomères ont...', options: ['Des formules différentes', 'La même activité biologique', 'Des propriétés physiques différentes', 'Une activité optique opposée'], correct: 3, explanation: 'Ils dévient la lumière polarisée dans des sens opposés.' },
            { question: 'Un carbone asymétrique est lié à...', options: ['4 H', '4 substituants identiques', '4 substituants différents', '2 atomes'], correct: 2, explanation: 'C\'est ce qui crée l\'asymétrie et la chiralité.' }
        ],
        relatedSimulations: ['organic-chemistry', 'molecular-geometry']
    },
    'muscle-contraction': {
        title: 'Contraction Musculaire',
        description: 'Du signal nerveux au mouvement',
        type: 'muscle-contraction',
        config: {},
        analogy: {
            title: 'Les Rameurs du Muscle',
            content: `Tes muscles sont comme une équipe de rameurs ! 🚣‍♂️💪

Les filaments d'Actine sont les rames.
Les têtes de Myosine sont les mains des rameurs.

Quand le cerveau dit "GO !" (Signal nerveux) :
1. Du Calcium est libéré (C'est le coup de sifflet).
2. Les mains (Myosine) attrapent les rames (Actine).
3. Elles tirent ! Les rames glissent, le muscle raccourcit.
4. Elles lâchent, rattrapent plus loin, et retirent.

Ça consomme beaucoup d'ATP (l'énergie).
C'est pour ça que tu es fatigué après le sport !`
        },
        theory: `Contraction Musculaire

Unité : Sarcomère (entre 2 stries Z).

Filaments :
- Fins (Actine) : Ancrés aux stries Z.
- Épais (Myosine) : Au centre, avec des têtes.

Cycle de Contraction :
1. Potentiel d'action → Libération de Ca²⁺ du réticulum sarcoplasmique.
2. Ca²⁺ se fixe sur Troponine → Expose les sites de fixation sur Actine.
3. Tête de Myosine se fixe à l'Actine (Pont d'union).
4. Coup de rame (Pivotement) → Glissement des filaments.
5. ATP se fixe → Détachement de la Myosine.
6. Hydrolyse ATP → Ré-armement de la tête.

Énergie : ATP fourni par la respiration cellulaire.`,
        exercises: [
            { question: 'Quel ion déclenche la contraction ?', options: ['Na⁺', 'K⁺', 'Ca²⁺', 'Cl⁻'], correct: 2, explanation: 'Le Calcium libéré du réticulum sarcoplasmique déclenche le cycle.' },
            { question: 'L\'ATP sert à...', options: ['Déclencher la contraction', 'Détacher la Myosine', 'Produire du Calcium', 'Créer les filaments'], correct: 1, explanation: 'L\'ATP permet de casser le pont Actine-Myosine et réarmer la tête.' }
        ],
        relatedSimulations: ['nerve-muscle-reflex', 'cell-respiration']
    },
    'hiv-immune-system': {
        title: 'Le VIH et le Système Immunitaire',
        description: 'Comment le SIDA affaiblit les défenses',
        type: 'hiv-immune-system',
        config: {},
        analogy: {
            title: 'Le VIH : L\'Espion qui Détruit l\'Armée',
            content: `Le VIH est un virus très malin. C'est un espion qui cible les généraux de ton armée ! 🦠🎖️

Les Lymphocytes T CD4 (ou T4) sont les chefs de l'armée immunitaire.
Ils donnent les ordres aux soldats (LT8, LB).

Le VIH s'infiltre dans les T4, se multiplie en secret, puis les détruit.

Sans généraux, l'armée est désorganisée.
Des infections normalement bénignes deviennent mortelles (Infections Opportunistes).

C'est le SIDA : Le système de défense est à plat.

⚠️ Le VIH se transmet par le sang, le sexe non protégé, ou de mère à enfant.
Prévention : Capote, dépistage, traitements antirétroviraux.`
        },
        theory: `VIH et SIDA

VIH = Virus de l'Immunodéficience Humaine.
SIDA = Syndrome d'ImmunoDéficience Acquise (stade final).

Cible : Lymphocytes T CD4 (Auxiliaires).

Cycle du VIH :
1. Fixation sur le récepteur CD4 + corécepteur (CCR5 ou CXCR4).
2. Fusion et entrée.
3. Transcription inverse : ARN viral → ADN (via Transcriptase Inverse).
4. Intégration dans le génome de la cellule hôte (via Intégrase).
5. Expression et multiplication.
6. Bourgeonnement : Nouveaux virus sortent et détruisent la cellule.

Évolution :
- Primo-infection : Symptômes grippaux.
- Phase asymptomatique : Des années.
- SIDA : Chute des T4 < 200/mm³, infections opportunistes.

Traitements : Trithérapie (antirétroviraux) bloque le cycle.`,
        exercises: [
            { question: 'Quelle cellule le VIH cible-t-il ?', options: ['Les globules rouges', 'Les LT CD8', 'Les LT CD4', 'Les plaquettes'], correct: 2, explanation: 'Les Lymphocytes T4 (CD4) sont les cibles principales.' },
            { question: 'Que signifie la transcription inverse ?', options: ['ADN → ARN', 'ARN → ADN', 'Protéine → ADN', 'Rien'], correct: 1, explanation: 'Le VIH transforme son ARN en ADN pour s\'intégrer au génome.' }
        ],
        relatedSimulations: ['adaptive-immunity', 'immune-system']
    },
    'infection-defense': {
        title: 'Infection et Défense',
        description: 'Réponse immunitaire aux pathogènes',
        type: 'infection-defense',
        config: {},
        analogy: {
            title: 'La Bataille contre les Envahisseurs',
            content: `Ton corps est une forteresse assiégée par des méchants (bactéries, virus) ! 🏰⚔️

PHASE 1 - Les Murailles (Barrières) :
La peau et les muqueuses bloquent l'entrée.
Le mucus piège les ennemis. Les larmes et la salive les brûlent (lysozyme).

PHASE 2 - La Garde Rapide (Immunité Innée) :
Si un ennemi passe, la garde (Macrophages, Neutrophiles) arrive en courant.
Ils mangent tout ce qui est étranger (Phagocytose). Pas de questions !
Inflammation : Rougeur, chaleur, gonflement = Les renforts arrivent.

PHASE 3 - L'Armée Spécialisée (Immunité Adaptative) :
Si l'ennemi résiste, on appelle les forces spéciales (Lymphocytes).
Ils sont lents mais précis : ils fabriquent des armes sur mesure (Anticorps).
Et ils gardent le souvenir de l'ennemi pour la prochaine fois (Mémoire).`
        },
        theory: `Réponse Immunitaire

1. Barrières Naturelles :
- Peau (épithélium)
- Muqueuses (mucus)
- Sécrétions (larmes, salive, sueur)
- pH acide (estomac)

2. Immunité Innée (Non spécifique) :
- Réponse rapide (minutes/heures)
- Cellules : Macrophages, Neutrophiles, Cellules NK
- Mécanismes : Phagocytose, Inflammation, Fièvre
- Reconnaissance par motifs généraux (PAMP)

3. Immunité Adaptative (Spécifique) :
- Réponse lente (jours) mais ciblée
- Lymphocytes B : Anticorps (Immunité humorale)
- Lymphocytes T CD4 : Coordination
- Lymphocytes T CD8 : Destruction cellules infectées (Immunité cellulaire)
- Mémoire immunitaire (Vaccination)`,
        exercises: [
            { question: 'La phagocytose fait partie de...', options: ['L\'immunité adaptative', 'L\'immunité innée', 'La barrière cutanée', 'La mémoire immunitaire'], correct: 1, explanation: 'C\'est une réponse rapide et non spécifique.' },
            { question: 'Pourquoi a-t-on de la fièvre quand on est malade ?', options: ['Le corps abandonne', 'C\'est une défense pour ralentir les microbes', 'C\'est un hasard', 'On a trop chaud'], correct: 1, explanation: 'La fièvre rend l\'environnement hostile aux pathogènes et stimule les défenses.' }
        ],
        relatedSimulations: ['adaptive-immunity', 'immune-system']
    },
    'climate-feedback': {
        title: 'Rétroactions Climatiques',
        description: 'Amplification et régulation du climat',
        type: 'climate-feedback',
        config: {},
        analogy: {
            title: 'L\'Effet Boule de Neige du Climat',
            content: `Le climat a des "boucles" qui amplifient ou freinent les changements. ❄️🔥

RÉTROACTION POSITIVE (Boule de neige) :
1. Il fait plus chaud → La glace fond.
2. Moins de glace blanche → Moins de réflexion (Albédo baisse).
3. Plus d'absorption de chaleur → Il fait encore plus chaud !
C'est un cercle vicieux qui s'emballe.

RÉTROACTION NÉGATIVE (Frein) :
1. Il fait plus chaud → Plus d'évaporation → Plus de nuages.
2. Les nuages réfléchissent le soleil → Moins de chaleur.
C'est un mécanisme de régulation.

Malheureusement, les rétroactions positives dominent dans le réchauffement actuel 😓`
        },
        theory: `Rétroactions Climatiques

RÉTROACTIONS POSITIVES (Amplification) :
1. Albédo Glace :
   Réchauffement → Fonte → Moins réflexion → Plus réchauffement.

2. Vapeur d'eau :
   Réchauffement → Plus évaporation → Plus effet de serre → Plus réchauffement.

3. Permafrost :
   Réchauffement → Dégel → Libération CH₄ (méthane) → Plus effet de serre.

RÉTROACTIONS NÉGATIVES (Régulation) :
1. Nuages :
   Réchauffement → Plus évaporation → Plus nuages → Réflexion → Moins réchauffement.

2. Végétation :
   Plus CO₂ → Plus photosynthèse → Moins CO₂ (pompe biologique).

Le bilan actuel est dominé par les rétroactions positives, d'où l'accélération.`,
        exercises: [
            { question: 'La fonte des glaces est une rétroaction...', options: ['Positive', 'Négative', 'Neutre', 'Inverse'], correct: 0, explanation: 'Elle amplifie le réchauffement (moins de réflexion).' },
            { question: 'Le méthane du permafrost vient de...', options: ['L\'industrie', 'La décomposition de matière organique gelée', 'Les vaches', 'L\'océan'], correct: 1, explanation: 'Le permafrost contient de la matière organique gelée depuis des millénaires.' }
        ],
        relatedSimulations: ['solar-energy-flux', 'water-cycle']
    },
    'enzymatic-kinetics': {
        title: 'Cinétique Enzymatique',
        description: 'Vitesse des réactions catalysées',
        type: 'enzyme-kinetics',
        config: {},
        analogy: {
            title: 'L\'Enzyme : L\'Ouvrier Ultra-Rapide',
            content: `Une enzyme est un ouvrier spécialisé dans une tâche précise. 🔧⏱️

Imagine une usine de découpe de gâteaux.
Le gâteau (Substrat) arrive sur le tapis roulant.
L'ouvrier (Enzyme) le coupe avec son couteau spécial (Site Actif).

La Vitesse dépend de :
1. Nombre d'ouvriers : Plus d'enzymes = Plus de produits.
2. Nombre de gâteaux : Plus de substrat = Plus vite (jusqu'à saturation).
3. Fatigue/Conditions : Température et pH affectent l'efficacité.

À la Saturation (Vmax) : Tous les ouvriers sont occupés en permanence.
Même si tu ajoutes plus de gâteaux, ils ne peuvent pas aller plus vite !`
        },
        theory: `Cinétique Enzymatique (Michaelis-Menten)

Vitesse de réaction :
V = (Vmax · [S]) / (Km + [S])

- V : Vitesse initiale
- Vmax : Vitesse maximale (saturation)
- [S] : Concentration en substrat
- Km : Constante de Michaelis (affinité)

Interprétation de Km :
Km = [S] quand V = Vmax/2.
Km faible → Forte affinité enzyme-substrat.

Facteurs :
- Température : Optimum (37°C chez l'homme), dénaturation si trop chaud.
- pH : Optimum variable (pepsine pH 2, trypsine pH 8).
- Inhibiteurs : Compétitifs (se fixent au site actif), Non compétitifs (ailleurs).

Représentation :
- Courbe hyperbolique (Michaelis-Menten)
- Double inverse de Lineweaver-Burk (droite)`,
        exercises: [
            { question: 'Que représente Vmax ?', options: ['La vitesse minimale', 'La vitesse quand l\'enzyme est saturée', 'La concentration de substrat', 'L\'affinité'], correct: 1, explanation: 'C\'est la vitesse maximale quand tous les sites actifs sont occupés.' },
            { question: 'Si Km est très petit, l\'enzyme a...', options: ['Une faible affinité', 'Une forte affinité', 'Pas d\'affinité', 'Une Vmax nulle'], correct: 1, explanation: 'Petit Km signifie que l\'enzyme atteint Vmax/2 avec peu de substrat (forte affinité).' }
        ],
        relatedSimulations: ['enzymes-properties', 'chemical-equilibrium']
    },

    // ========== PHYSIQUE 2NDE - SIMULATIONS DÉDIÉES ==========

    // --- ÉLECTRICITÉ (P1-P7) ---
    'electrisation-2nde': {
        title: 'P1. Phénomènes d\'Électrisation',
        description: 'Frottement, charge électrique et loi de Coulomb',
        type: 'electrisation-2nde',
        config: {},
        analogy: {
            title: 'L\'Ambre Magique de Thalès',
            content: `En frottant de l'ambre (elektron en grec) avec de la laine, Thalès a découvert l'électricité statique ! ⚡🧶

Quand tu frottes une règle en plastique avec un chiffon :
- La règle ARRACHE des électrons à la laine.
- La règle devient NÉGATIVE (excès d'électrons).
- La laine devient POSITIVE (manque d'électrons).

C'est comme un vol à la tire : La règle vole les électrons à la laine !
Ensuite, elle peut attirer des petits bouts de papier grâce à la force électrostatique.`
        },
        theory: `Électrisation par Frottement

Trois modes d'électrisation :
1. Par FROTTEMENT : Transfert d'électrons entre deux corps.
2. Par CONTACT : Partage de charges.
3. Par INFLUENCE : Redistribution sans contact.

Charge élémentaire : e = 1,6 × 10⁻¹⁹ C

Loi de Coulomb :
F = k × |q₁ × q₂| / r²
k = 9 × 10⁹ N·m²/C²

Charges de même signe se repoussent.
Charges de signes opposés s'attirent.`,
        exercises: [
            { question: 'Quand on frotte une règle en plastique avec de la laine, la règle devient négative car...', options: ['Elle perd des protons', 'Elle gagne des électrons', 'Elle perd des électrons', 'Elle gagne des protons'], correct: 1, explanation: 'La règle arrache des électrons (négatifs) à la laine, elle devient donc négative.' },
            { question: 'Deux charges de même signe...', options: ['S\'attirent', 'Se repoussent', 'N\'interagissent pas', 'Se neutralisent'], correct: 1, explanation: 'D\'après Coulomb, les charges de même signe se repoussent.' }
        ],
        relatedSimulations: ['circuit-electrique-2nde', 'loi-ohm-2nde']
    },
    'circuit-electrique-2nde': {
        title: 'P2-P4. Circuit Électrique',
        description: 'Courant, tension, ampèremètre et voltmètre',
        type: 'circuit-electrique-2nde',
        config: {},
        analogy: {
            title: 'Le Circuit Hydraulique',
            content: `Un circuit électrique, c'est comme un circuit d'eau fermé ! 💧🔌

- Le GÉNÉRATEUR est la pompe : Il "pousse" les charges.
- Les FILS sont les tuyaux : L'eau (courant) y circule.
- La RÉSISTANCE est un robinet étroit : Elle freine le débit.
- La LAMPE est une turbine : Elle utilise l'énergie pour briller.

Le courant (débit d'eau) est le même partout dans un circuit en série.
La tension (pression) se répartit entre les éléments.`
        },
        theory: `Courant et Tension Électrique

COURANT (I) :
- Déplacement ordonné de charges.
- Unité : Ampère (A).
- Mesuré avec un AMPÈREMÈTRE en SÉRIE.
- Sens conventionnel : de (+) vers (-) à l'extérieur du générateur.

TENSION (U) :
- Différence de potentiel entre deux points.
- Unité : Volt (V).
- Mesurée avec un VOLTMÈTRE en PARALLÈLE.

Loi des nœuds : ΣI_arrivant = ΣI_repartant
Loi des mailles : ΣU = 0`,
        exercises: [
            { question: 'L\'ampèremètre se branche...', options: ['En parallèle', 'En série', 'N\'importe comment', 'Aux bornes du générateur'], correct: 1, explanation: 'L\'ampèremètre doit être traversé par le courant, donc en série.' },
            { question: 'Le sens conventionnel du courant va de...', options: ['(-) vers (+)', '(+) vers (-)', 'Du fil vers la lampe', 'Il n\'y a pas de sens'], correct: 1, explanation: 'Par convention, le courant va de (+) vers (-) à l\'extérieur du générateur.' }
        ],
        relatedSimulations: ['loi-ohm-2nde', 'generateur-2nde']
    },
    'loi-ohm-2nde': {
        title: 'P5. Loi d\'Ohm',
        description: 'Relation tension-intensité et résistance',
        type: 'loi-ohm-2nde',
        config: {},
        analogy: {
            title: 'Le Robinet et la Pression',
            content: `La résistance, c'est comme un robinet à moitié fermé ! 🚰

- Plus tu POUSSES fort (tension U), plus l'eau passe vite (courant I).
- Plus le robinet est FERMÉ (résistance R), moins l'eau passe.

Formule : U = R × I

Si tu veux le même débit avec un robinet plus fermé,
il faut pousser plus fort (augmenter la tension).

La pente de la droite U = f(I) donne la résistance R.`
        },
        theory: `Loi d'Ohm pour un Conducteur Ohmique

U = R × I

- U : Tension aux bornes (V)
- R : Résistance (Ω)
- I : Intensité (A)

Caractéristique :
Pour un conducteur ohmique, la courbe U = f(I) est une droite passant par l'origine.
La pente de cette droite = R.

Associations :
- Série : R_eq = R₁ + R₂ + ...
- Parallèle : 1/R_eq = 1/R₁ + 1/R₂ + ...

Puissance dissipée (effet Joule) :
P = U × I = R × I² = U²/R`,
        exercises: [
            { question: 'Une résistance de 100Ω sous 20V. Intensité ?', options: ['0,2 A', '2 A', '5 A', '2000 A'], correct: 0, explanation: 'I = U/R = 20/100 = 0,2 A.' },
            { question: 'Deux résistances de 10Ω et 20Ω en série donnent...', options: ['6,67 Ω', '15 Ω', '30 Ω', '200 Ω'], correct: 2, explanation: 'En série : R_eq = 10 + 20 = 30 Ω.' }
        ],
        relatedSimulations: ['circuit-electrique-2nde', 'generateur-2nde']
    },
    'generateur-2nde': {
        title: 'P6. Dipôles Actifs',
        description: 'f.é.m, résistance interne et bilan énergétique',
        type: 'generateur-2nde',
        config: {},
        analogy: {
            title: 'La Pompe à Eau',
            content: `Le générateur est comme une pompe hydraulique ! 🔋

La f.é.m (E) = la pression maximale que la pompe peut fournir.
La résistance interne (r) = les frottements dans la pompe elle-même.

Quand l'eau coule fort (grand I), la pompe fatigue :
La pression de sortie (U) est plus faible que la pression max (E).

U = E - r × I

Plus tu tires de courant, plus tu perds en tension aux bornes.
À vide (I=0), U = E (pas de pertes internes).`
        },
        theory: `Loi d'Ohm pour un Générateur

U = E - r × I

- E : Force électromotrice (f.é.m) en V
- r : Résistance interne en Ω
- I : Intensité débitée en A
- U : Tension aux bornes en V

Courant de court-circuit : I_cc = E/r (dangereux !)

Bilan de puissance :
E × I = U × I + r × I²
P_totale = P_utile + P_perdue

Rendement :
η = P_utile / P_totale = U/E`,
        exercises: [
            { question: 'Une pile (E=4,5V, r=1Ω) débite 0,5A. Tension aux bornes ?', options: ['4,5 V', '4,0 V', '5,0 V', '0,5 V'], correct: 1, explanation: 'U = E - rI = 4,5 - 1×0,5 = 4,0 V.' },
            { question: 'La f.é.m correspond à la tension...', options: ['Quand I est maximal', 'À vide (I=0)', 'De court-circuit', 'Aux bornes de la résistance'], correct: 1, explanation: 'Si I=0, alors U = E - 0 = E.' }
        ],
        relatedSimulations: ['loi-ohm-2nde', 'circuit-electrique-2nde']
    },

    // --- MÉCANIQUE (P8-P12) ---
    'mouvement-2nde': {
        title: 'P8. Généralités sur le Mouvement',
        description: 'Référentiel, trajectoire et vecteur vitesse',
        type: 'mouvement-2nde',
        config: {},
        analogy: {
            title: 'Le Passager du Train',
            content: `Le mouvement dépend de ton point de vue ! 🚂👀

Imagine : Tu es dans un TER Dakar-Thiès.
- Par rapport au wagon, tu es IMMOBILE (assis sur ton siège).
- Par rapport au sol, tu te déplaces à 100 km/h !

C'est la même chose pour une balle lancée dans le train.
Pour toi, elle va tout droit.
Pour quelqu'un sur le quai, elle fait une courbe !

Le référentiel, c'est le "caméra" que tu choisis pour filmer le mouvement.`
        },
        theory: `Généralités sur le Mouvement

RÉFÉRENTIEL :
Solide par rapport auquel on étudie le mouvement.
Le mouvement est RELATIF au référentiel choisi.

TRAJECTOIRE :
Ensemble des positions successives du mobile.
- Rectiligne (droite)
- Circulaire
- Curviligne

VITESSE MOYENNE :
V_m = d/t (m/s)

VECTEUR VITESSE INSTANTANÉE :
- Point d'application : le mobile
- Direction : TANGENTE à la trajectoire
- Sens : celui du mouvement
- Norme : |v| (compteur de vitesse)`,
        exercises: [
            { question: 'Un bus roule à 72 km/h. Vitesse en m/s ?', options: ['72 m/s', '20 m/s', '200 m/s', '36 m/s'], correct: 1, explanation: 'Pour passer de km/h à m/s, on divise par 3,6. 72/3,6 = 20 m/s.' },
            { question: 'Le vecteur vitesse est toujours...', options: ['Dirigé vers le centre', 'Tangent à la trajectoire', 'Constant', 'Nul'], correct: 1, explanation: 'Le vecteur vitesse est toujours tangent à la trajectoire.' }
        ],
        relatedSimulations: ['forces-poids-2nde', 'equilibre-3forces-2nde']
    },
    'forces-poids-2nde': {
        title: 'P9-P10. Forces et Poids',
        description: 'Masse, poids, g et plan incliné',
        type: 'forces-poids-2nde',
        config: {},
        analogy: {
            title: 'L\'Haltère Spatiale',
            content: `Masse et Poids, ce n'est PAS pareil ! 🏋️🌙

Une haltère de 100 kg :
- Sur TERRE : super lourde (P = 100 × 9,8 ≈ 980 N).
- Sur la LUNE : légère (P = 100 × 1,6 = 160 N).
- Dans l'ESPACE : elle ne pèse RIEN (P = 0 N).

Mais dans les 3 cas, si elle te percute, ça fait TOUT AUSSI MAL !
Car sa MASSE (100 kg) ne change jamais.

La masse, c'est la quantité de matière.
Le poids, c'est la force d'attraction de la planète.`
        },
        theory: `Poids et Masse

MASSE (m) :
- Quantité de matière
- Unité : kg
- INVARIABLE (même sur la Lune)
- Mesure : Balance

POIDS (P) :
- Force d'attraction gravitationnelle
- Unité : Newton (N)
- VARIABLE selon le lieu
- Mesure : Dynamomètre

RELATION :
P = m × g

g = Intensité de pesanteur :
- Terre : g ≈ 9,8 N/kg
- Lune : g ≈ 1,6 N/kg
- Mars : g ≈ 3,7 N/kg`,
        exercises: [
            { question: 'Un astronaute de 80 kg sur la Lune. Sa masse ?', options: ['13,3 kg', '80 kg', '0 kg', '480 kg'], correct: 1, explanation: 'La masse est INVARIABLE ! Elle ne change pas.' },
            { question: 'Poids sur Terre d\'un objet de 10 kg (g=9,8) ?', options: ['10 N', '0,98 N', '98 N', '98 kg'], correct: 2, explanation: 'P = m × g = 10 × 9,8 = 98 N.' }
        ],
        relatedSimulations: ['mouvement-2nde', 'equilibre-3forces-2nde']
    },
    'equilibre-3forces-2nde': {
        title: 'P11. Équilibre à 3 Forces',
        description: 'Forces concourantes et triangle des forces',
        type: 'equilibre-3forces-2nde',
        config: {},
        analogy: {
            title: 'Le Hamac Équilibré',
            content: `Comment tient un hamac ? Par l'équilibre de 3 forces ! 🏝️⚖️

Imagine-toi allongé dans un hamac entre deux cocotiers.
Trois forces agissent sur toi :
1. Ton POIDS (vers le bas)
2. La TENSION du côté gauche (tire en haut à gauche)
3. La TENSION du côté droit (tire en haut à droite)

Pour rester immobile, ces 3 forces doivent :
- Passer par le même point (concourantes)
- Former un triangle fermé (bout à bout)

Si tu mets tout ça bout à bout, tu reviens au départ !`
        },
        theory: `Équilibre d'un Solide soumis à 3 Forces

CONDITIONS D'ÉQUILIBRE :
1. COPLANARITÉ : Les 3 forces sont dans le même plan.
2. CONCOURANCE : Les lignes d'action se coupent en un point.
3. SOMME NULLE : F₁ + F₂ + F₃ = 0

TRIANGLE DES FORCES :
Si on place les vecteurs bout à bout, on forme un triangle FERMÉ.

MÉTHODES DE RÉSOLUTION :
1. Géométrique : Trigonométrie sur le triangle.
2. Analytique : Projection sur deux axes :
   ΣF_x = 0
   ΣF_y = 0`,
        exercises: [
            { question: 'Si 3 forces s\'équilibrent, leur triangle est...', options: ['Ouvert', 'Plat', 'Fermé', 'Nul'], correct: 2, explanation: 'Si F₁+F₂+F₃=0, les vecteurs bout à bout forment un triangle fermé.' },
            { question: 'Si les droites d\'action ne sont pas concourantes...', options: ['Le solide est en translation', 'Le solide tourne', 'Rien de spécial', 'Il reste immobile'], correct: 1, explanation: 'Sans concurrence, il se crée un couple qui fait tourner le solide.' }
        ],
        relatedSimulations: ['moment-force-2nde', 'forces-poids-2nde']
    },
    'moment-force-2nde': {
        title: 'P12. Moment d\'une Force',
        description: 'Effet de levier et théorème des moments',
        type: 'moment-force-2nde',
        config: {},
        analogy: {
            title: 'La Porte et la Poignée',
            content: `Pourquoi les poignées sont-elles loin des gonds ? 🚪💪

Essaie de pousser une porte PRÈS des charnières : c'est TRÈS DUR !
Pousse PRÈS de la poignée : c'est FACILE !

La même force crée un effet de rotation plus grand si elle est loin de l'axe.
C'est le principe du LEVIER d'Archimède !

M = F × d
Plus le bras de levier (d) est grand, plus le moment est fort.

"Donnez-moi un point d'appui et je soulèverai le monde" - Archimède`
        },
        theory: `Moment d'une Force

MOMENT par rapport à un axe Δ :
M_Δ(F) = ± F × d

- F : Intensité de la force (N)
- d : Bras de levier (distance perpendiculaire) en m
- ± : Signe selon le sens de rotation

Unité : Newton-mètre (N·m)

THÉORÈME DES MOMENTS :
À l'équilibre : Σ Moments = 0
Somme des moments moteurs = Somme des moments résistants.

COUPLE DE FORCES :
Deux forces parallèles, opposées, de même intensité.
Moment du couple : M = F × D (D = écartement)`,
        exercises: [
            { question: 'Pour dévisser un écrou bloqué, mieux vaut une clé...', options: ['Très courte', 'Très longue', 'Moyenne', 'Avec les doigts'], correct: 1, explanation: 'Clé longue = grand bras de levier = grand moment avec la même force.' },
            { question: 'Si la force passe par l\'axe, le moment est...', options: ['Maximum', 'Nul', 'Égal à F', 'Infini'], correct: 1, explanation: 'Si la force passe par l\'axe, d=0, donc M = F×0 = 0.' }
        ],
        relatedSimulations: ['equilibre-3forces-2nde', 'forces-poids-2nde']
    },

    // --- OPTIQUE (P13-P15) ---
    'propagation-lumiere-2nde': {
        title: 'P13. Propagation de la Lumière',
        description: 'Rayons lumineux, ombre et pénombre',
        type: 'propagation-lumiere-2nde',
        config: {},
        analogy: {
            title: 'L\'Éclipse',
            content: `Pourquoi l'ombre existe ? Parce que la lumière va TOUT DROIT ! 🌑

Quand la Lune passe entre la Terre et le Soleil, elle bloque la lumière.
Sur Terre, on voit une zone d'OMBRE totale et une zone de PÉNOMBRE.

Source ponctuelle (petite) → Ombre nette, pas de pénombre.
Source étendue (grande) → Ombre + pénombre (zone de transition).

C'est aussi pourquoi tu ne peux pas voir à travers un mur :
La lumière ne peut pas contourner les obstacles !`
        },
        theory: `Propagation Rectiligne de la Lumière

PRINCIPE :
Dans un milieu homogène et transparent, la lumière se propage en LIGNE DROITE.

VITESSE : c ≈ 3 × 10⁸ m/s (dans le vide)

SOURCES DE LUMIÈRE :
- Primaires : Produisent leur lumière (Soleil, lampe)
- Secondaires : Diffusent la lumière reçue (Lune, mur)

MILIEUX :
- Transparent : Laisse passer (verre, air)
- Translucide : Diffuse (verre dépoli)
- Opaque : Bloque (mur)

OMBRE ET PÉNOMBRE :
- Ombre propre : Partie non éclairée de l'objet.
- Ombre portée : Zone sombre sur l'écran.
- Pénombre : Zone de transition (source étendue).`,
        exercises: [
            { question: 'La Lune est une source de lumière...', options: ['Primaire', 'Secondaire', 'Artificielle', 'Nulle'], correct: 1, explanation: 'La Lune ne produit pas de lumière, elle réfléchit celle du Soleil.' },
            { question: 'Dans quel milieu la lumière ne va PAS en ligne droite ?', options: ['Vide', 'Air calme', 'Eau pure', 'Air chaud (mirage)'], correct: 3, explanation: 'Si l\'air n\'est pas homogène (température variable), la lumière se courbe.' }
        ],
        relatedSimulations: ['reflexion-lumiere-2nde', 'refraction-dispersion-2nde']
    },
    'reflexion-lumiere-2nde': {
        title: 'P14. Réflexion de la Lumière',
        description: 'Miroir plan, lois de Snell-Descartes',
        type: 'reflexion-lumiere-2nde',
        config: {},
        analogy: {
            title: 'Le Billard Lumineux',
            content: `La lumière sur un miroir, c'est comme une boule de billard sur la bande ! 🎱✨

Quand tu lances une boule contre le bord de la table,
elle rebondit avec LE MÊME ANGLE de l'autre côté.

C'est exactement pareil pour la lumière :
L'angle d'arrivée (incidence) = L'angle de départ (réflexion).
i = r

C'est pour ça que tu te vois dans un miroir :
Les rayons reviennent vers toi comme ils sont venus !`
        },
        theory: `Réflexion de la Lumière

DÉFINITION :
Retour de la lumière dans son milieu d'origine après avoir rencontré une surface.

LOIS DE SNELL-DESCARTES (Réflexion) :
1. Le rayon réfléchi est dans le plan d'incidence.
2. L'angle de réflexion égale l'angle d'incidence :
   i = r

TYPES DE RÉFLEXION :
- Spéculaire : Surface lisse (miroir) → Image nette.
- Diffuse : Surface rugueuse (mur) → Pas d'image.

IMAGE PAR UN MIROIR PLAN :
- Virtuelle (derrière le miroir)
- Symétrique par rapport au miroir
- Même taille que l'objet`,
        exercises: [
            { question: 'Un rayon perpendiculaire au miroir. Angle de réflexion ?', options: ['90°', '0°', '45°', '180°'], correct: 1, explanation: 'Si le rayon est perpendiculaire, i=0°, donc r=0° (il repart sur lui-même).' },
            { question: 'L\'image dans un miroir plan est...', options: ['Réelle et renversée', 'Virtuelle et symétrique', 'Plus petite', 'Plus grande'], correct: 1, explanation: 'L\'image est virtuelle, symétrique et de même taille.' }
        ],
        relatedSimulations: ['propagation-lumiere-2nde', 'refraction-dispersion-2nde']
    },
    'refraction-dispersion-2nde': {
        title: 'P15. Réfraction et Dispersion',
        description: 'Loi de Snell-Descartes, prisme et arc-en-ciel',
        type: 'refraction-dispersion-2nde',
        config: {},
        analogy: {
            title: 'La Voiture dans la Boue',
            content: `Pourquoi la paille semble cassée dans un verre d'eau ? 🥤

Imagine une voiture arrivant de biais sur une route boueuse.
La roue DROITE touche la boue en premier et RALENTIT.
La roue GAUCHE continue vite sur le bitume.
Résultat : La voiture PIVOTE et change de direction !

C'est pareil pour la lumière qui passe de l'air à l'eau :
Elle ralentit et se rapproche de la normale.

Et pour l'arc-en-ciel ? Les gouttes d'eau séparent les couleurs
car le bleu ralentit plus que le rouge !`
        },
        theory: `Réfraction et Dispersion

RÉFRACTION :
Déviation de la lumière au passage entre deux milieux différents.

INDICE DE RÉFRACTION :
n = c/v (toujours ≥ 1)
Air ≈ 1, Eau ≈ 1,33, Verre ≈ 1,5

LOI DE SNELL-DESCARTES :
n₁ × sin(i₁) = n₂ × sin(i₂)

- Si n₂ > n₁ : Le rayon se rapproche de la normale.
- Si n₁ > n₂ : Le rayon s'écarte de la normale.

RÉFLEXION TOTALE :
Si n₁ > n₂ et i₁ > angle limite → Pas de réfraction !
Application : Fibres optiques.

DISPERSION :
L'indice n dépend de la couleur (longueur d'onde).
Le bleu est plus dévié que le rouge → Arc-en-ciel, prisme.`,
        exercises: [
            { question: 'Un rayon passe de l\'air (n=1) vers l\'eau (n=1,33). Il...', options: ['S\'écarte de la normale', 'Se rapproche de la normale', 'Ne change pas', 'Disparaît'], correct: 1, explanation: 'Comme n₂>n₁, l\'angle de réfraction est plus petit : il se rapproche de la normale.' },
            { question: 'L\'arc-en-ciel existe grâce à...', options: ['La réflexion', 'L\'eau colorée', 'La dispersion', 'Une illusion'], correct: 2, explanation: 'Les gouttes dispersent la lumière en séparant les couleurs.' }
        ],
        relatedSimulations: ['reflexion-lumiere-2nde', 'propagation-lumiere-2nde']
    },

    // ========== CHIMIE 2NDE S - SIMULATIONS AVANCÉES ==========
    'separation-lab': {
        title: '🔬 Laboratoire de Séparation',
        description: 'Techniques de séparation des mélanges avec Mode Défi',
        type: 'separation-lab',
        config: {},
        analogy: {
            title: 'Le Laboratoire Virtuel',
            content: `Bienvenue dans ton laboratoire virtuel ! 🧪

Tu vas apprendre à séparer différents mélanges de la vie quotidienne :
- L'eau de mer + sable → Filtration
- L'huile + eau de friture → Décantation
- L'eau salée → Distillation
- Les colorants de l'encre → Chromatographie

Mode Défi : Des scénarios chronométrés avec indices et score !`
        },
        theory: `Techniques de Séparation

FILTRATION : Sépare un solide d'un liquide
- Le filtre retient le solide
- Le liquide passe au travers (filtrat)

DÉCANTATION : Sépare deux liquides non miscibles
- On laisse reposer
- Le plus dense va en bas
- On utilise une ampoule à décanter

DISTILLATION : Sépare des liquides miscibles
- On chauffe le mélange
- Le plus volatil s'évapore en premier
- On condense la vapeur

CHROMATOGRAPHIE : Sépare les composants d'un mélange
- Basée sur la différence de migration
- Éluant + Phase stationnaire`,
        exercises: [],
        relatedSimulations: ['chromatography', 'dissolution-simulation']
    },
    'atomic-structure-advanced': {
        title: '⚛️ Structure Atomique (Avancé)',
        description: 'Modèle de Bohr avec Mode Défi interactif',
        type: 'atomic-structure-advanced',
        config: {},
        analogy: {
            title: 'Le Mini Système Solaire',
            content: `L'atome est comme un minuscule système solaire ! ☀️

Le noyau = Le Soleil (protons + neutrons)
Les électrons = Les planètes en orbite

Chaque couche (K, L, M, N...) peut contenir un nombre limité d'électrons :
- K : 2 max
- L : 8 max
- M : 18 max

Mode Défi : Réponds aux questions sur les atomes !`
        },
        theory: `Structure de l'Atome

NOYAU :
- Protons (+) : Numéro atomique Z
- Neutrons (0) : N = A - Z
- Nucléons = A (nombre de masse)

ÉLECTRONS :
- Même nombre que les protons (atome neutre)
- Organisés en couches : K, L, M, N...
- Électrons de valence = dernière couche

NOTATION : ᴬ_Z X
Exemple : ¹²_6 C = 6 protons, 6 neutrons, 6 électrons`,
        exercises: [],
        relatedSimulations: ['lewis-structure-advanced', 'periodic-table']
    },
    'lewis-structure-advanced': {
        title: '🔬 Structure de Lewis (Avancé)',
        description: 'Représentation des molécules avec Mode Défi',
        type: 'lewis-structure-advanced',
        config: {},
        analogy: {
            title: 'Les Mariages d\'Atomes',
            content: `Les atomes veulent être stables comme les gaz nobles ! 💍

Pour cela, ils "se marient" en partageant des électrons :
- Doublet liant = Électrons partagés (le mariage)
- Doublet non liant = Électrons qui restent seuls

La règle de l'Octet : 8 électrons sur la couche externe = Stabilité !
(Sauf pour H et He : 2 électrons = règle du Duet)

Mode Défi : Compte les doublets !`
        },
        theory: `Structure de Lewis

RÈGLE DE L'OCTET :
Les atomes cherchent à avoir 8 électrons sur leur couche externe
(2 pour H et He = règle du Duet)

DOUBLET LIANT :
Paire d'électrons partagée entre deux atomes
Représenté par un trait : C-H

DOUBLET NON LIANT :
Paire d'électrons qui reste sur l'atome
Représenté par deux points

VALENCE :
H = 1, O = 2, N = 3, C = 4

GÉOMÉTRIE :
Les doublets se repoussent → forme de la molécule
H₂O : 104.5°, NH₃ : 107°, CH₄ : 109.5°`,
        exercises: [],
        relatedSimulations: ['atomic-structure-advanced', 'mole-scale-advanced']
    },
    'mole-scale-advanced': {
        title: '⚖️ La Mole (Avancé)',
        description: 'Quantité de matière avec Mode Défi calcul',
        type: 'mole-scale-advanced',
        config: {},
        analogy: {
            title: 'La Douzaine du Chimiste',
            content: `La mole, c'est comme une "douzaine" mais en BEAUCOUP plus grand ! 📦

Une mole = 6,02 × 10²³ entités (Nombre d'Avogadro)

Imagine : Si tu comptes 1 entité par seconde, il te faudrait plus de 19 MILLIARDS d'années pour finir une mole !

La formule magique : n = m / M
- n = quantité de matière (mol)
- m = masse (g)
- M = masse molaire (g/mol)

Mode Défi : Calcule les quantités !`
        },
        theory: `La Mole et Quantité de Matière

DÉFINITION :
1 mole = 6,02 × 10²³ entités (Nₐ)

MASSE MOLAIRE (M) :
Masse d'une mole de substance
M(C) = 12 g/mol, M(H) = 1 g/mol, M(O) = 16 g/mol
M(H₂O) = 2×1 + 16 = 18 g/mol

FORMULE FONDAMENTALE :
n = m / M
où n en mol, m en g, M en g/mol

VOLUME MOLAIRE DES GAZ :
À 0°C et 1 atm : Vm = 22,4 L/mol
n = V / Vm`,
        exercises: [],
        relatedSimulations: ['equation-balancer-advanced', 'dilution-simulation']
    },
    'equation-balancer-advanced': {
        title: '⚖️ Équations-Bilan (Avancé)',
        description: 'Équilibrage avec Mode Défi chronométré',
        type: 'equation-balancer-advanced',
        config: {},
        analogy: {
            title: 'La Loi de Lavoisier',
            content: `"Rien ne se perd, rien ne se crée, tout se transforme" ⚖️

Dans une réaction chimique :
- Les atomes se réarrangent
- Mais leur NOMBRE reste le même !

C'est comme cuisiner : tu peux transformer tes ingrédients en plat, mais tu ne crées pas de matière !

Règle d'or : Même nombre d'atomes à gauche et à droite

Mode Défi : Équilibre le plus vite possible !`
        },
        theory: `Équation-Bilan

LOI DE LAVOISIER :
Conservation de la masse et des atomes

MÉTHODE D'ÉQUILIBRAGE :
1. Écrire l'équation non équilibrée
2. Compter les atomes de chaque côté
3. Ajouter des coefficients stœchiométriques
4. Vérifier l'équilibre

EXEMPLE :
CH₄ + O₂ → CO₂ + H₂O (non équilibrée)
CH₄ + 2O₂ → CO₂ + 2H₂O (équilibrée)

RÈGLES :
- Ne JAMAIS modifier les indices des formules
- Uniquement ajouter des coefficients devant
- Commencer par l'élément le plus complexe`,
        exercises: [],
        relatedSimulations: ['mole-scale-advanced', 'dissolution-simulation']
    },
    'dilution-advanced': {
        title: '🧪 Dilution (Avancé)',
        description: 'Concentration et dilution avec Mode Défi calcul',
        type: 'dilution-advanced',
        config: {},
        analogy: {
            title: 'Le Sirop du Sénégal',
            content: `Tu connais le sirop de bissap ou de bouye ? 🍹

Quand tu le dilues avec de l'eau :
- La QUANTITÉ de sirop ne change pas
- Mais la CONCENTRATION diminue !

C'est exactement pareil en chimie avec la formule magique :
Ci × Vi = Cf × Vf

Mode Défi : Calcule les concentrations et volumes !`
        },
        theory: `Dilution et Concentration

CONCENTRATION MOLAIRE :
C = n / V (mol/L)

CONCENTRATION MASSIQUE :
Cm = m / V (g/L)

Relation : Cm = C × M

DILUTION :
Conservation de la quantité de soluté :
n(initial) = n(final)
Ci × Vi = Cf × Vf

Facteur de dilution F = Vf / Vi`,
        exercises: [],
        relatedSimulations: ['mole-scale-advanced', 'titrage-advanced']
    },
    'titrage-advanced': {
        title: '⚗️ Titrage Acide-Base (Avancé)',
        description: 'Dosage avec recherche du point d\'équivalence',
        type: 'titrage-advanced',
        config: {},
        analogy: {
            title: 'La Bataille Chimique',
            content: `Imagine un combat entre l'Acide et la Base ! ⚔️

L'Acide envoie ses soldats H₃O⁺
La Base riposte avec ses soldats OH⁻

Quand il y a autant de soldats des deux côtés :
C'est l'ÉQUIVALENCE ! Le combat est terminé.
La solution devient neutre (pH ≈ 7).

Mode Défi : Trouve le volume d'équivalence !`
        },
        theory: `Titrage Acide-Base

PRINCIPE :
On verse une solution titrante (base) dans une solution à titrer (acide).

ÉQUIVALENCE :
n(acide) = n(base)
Ca × Va = Cb × Vb

À l'équivalence :
- Tous les H₃O⁺ ont réagi avec les OH⁻
- pH = 7 (pour acide fort + base forte)
- L'indicateur coloré change de couleur

FORMULE :
Veq = (Ca × Va) / Cb`,
        exercises: [],
        relatedSimulations: ['ph-indicateurs-advanced', 'dilution-advanced']
    },

    // ========================================
    // CHIMIE 2NDE S - SIMULATIONS AVANCÉES
    // ========================================

    'separation-lab': {
        title: '🔬 Labo de Séparation (Avancé)',
        description: 'Filtration, Décantation, Distillation, Chromatographie',
        type: 'separation-lab',
        config: {},
        analogy: {
            title: 'Le Tri Sélectif de la Matière',
            content: `Séparer les mélanges, c'est comme faire le tri ! 🗑️♻️

- Filtration : Comme une passoire à pâtes. Le solide (pâtes) reste, le liquide (eau) passe.
- Décantation : Comme l'huile et le vinaigre. On attend que ça se calme, le plus lourd coule, le plus léger flotte.
- Distillation : Comme faire bouillir de l'eau salée pour récupérer l'eau pure (la vapeur).
- Chromatographie : La course des couleurs ! Les plus rapides gagnent.`
        },
        theory: `Techniques de Séparation

1. Filtration :
Sépare un solide d'un liquide hétérogène grâce à un filtre poreux.

2. Décantation :
Sépare deux liquides non miscibles de densités différentes (ex: Huile/Eau) ou un solide lourd.

3. Distillation :
Sépare les constituants d'un mélange homogène liquide selon leur température d'ébullition (Teb).
Le composé le plus volatil (Teb la plus basse) s'évapore en premier.

4. Chromatographie (CCM) :
Sépare les espèces chimiques par migration différentielle sur un support.`,
        exercises: [],
        relatedSimulations: ['states-of-matter', 'molar-concentration']
    },

    'lewis-structure-advanced': {
        title: '🔬 Structure de Lewis (Avancé)',
        description: 'Construis des molécules et visualise les doublets',
        type: 'lewis-structure-advanced',
        config: {},
        analogy: {
            title: 'Le Mariage des Atomes',
            content: `Les atomes sont célibataires et cherchent l'âme sœur pour être stables (avoir 8 électrons autour d'eux, règle de l'Octet). 💍

- Ils se tiennent la main (Doublet liant).
- Ils gardent leurs valises (Doublets non-liants).

Le carbone a 4 mains (4 liaisons).
L'oxygène a 2 mains et 2 valises.`
        },
        theory: `Représentation de Lewis

Permet de visualiser la structure externe des atomes dans une molécule.
- Doublet liant (Trait) : Mise en commun de 2 électrons entre 2 atomes.
- Doublet non-liant (Baquet) : Paire d'électrons appartenant à un seul atome.

Règles de stabilité :
- Règle du Duet (pour H) : 2 électrons.
- Règle de l'Octet (C, N, O, F...) : 8 électrons autour de l'atome central.`,
        exercises: [],
        relatedSimulations: ['atomic-structure-seconde', 'molecular-geometry']
    },

    'mole-scale-advanced': {
        title: '⚖️ La Mole (Avancé)',
        description: 'Visualise le nombre d\'Avogadro et la masse molaire',
        type: 'mole-scale-advanced',
        config: {},
        analogy: {
            title: 'Le Paquet Géant',
            content: `Une Mole, c'est juste un paquet de 602 000 milliards de milliards d'atomes ! 📦
C'est l'unité de base du chimiste pour passer du microscopique (atome) au macroscopique (gramme).`
        },
        theory: `La Mole et Masse Molaire

Nombre d'Avogadro : NA = 6.02 × 10²³ mol⁻¹

Masses molaires atomiques (M) :
- H : 1 g/mol
- C : 12 g/mol
- O : 16 g/mol

Relation fondamentale :
n = m / M
(quantité en mol = masse en g / masse molaire en g/mol)`,
        exercises: [],
        relatedSimulations: ['atomic-structure-seconde', 'dilution-advanced']
    },

    'equation-balancer-advanced': {
        title: '⚖️ Équilibreur d\'Équations (Avancé)',
        description: 'Jeu pour apprendre à équilibrer les réactions chimiques',
        type: 'equation-balancer-advanced',
        config: {},
        analogy: {
            title: 'La Cuisine Chimique',
            content: `Une réaction chimique, c'est comme une recette ! 🍳
Rien ne se perd, rien ne se crée.
Si tu mets 2 œufs et 500g de farine au début...
Tu dois retrouver l'équivalent de 2 œufs et 500g de farine dans le gâteau à la fin !

Il faut juste trouver les bonnes proportions (coefficients stœchiométriques).`
        },
        theory: `Équilibrage d'Équations Chimiques

Loi de Lavoisier : "Rien ne se perd, rien ne se crée, tout se transforme."

Conservation des éléments :
Le nombre d'atomes de chaque élément doit être identique dans les Réactifs (gauche) et les Produits (droite).

Méthode :
Ajuster les coéfficients stœchiométriques (les chiffres DEVANT les formules) sans jamais changer les indices (les petits chiffres EN BAS).`,
        exercises: [],
        relatedSimulations: ['mole-scale-advanced', 'chemical-reactions']
    },

    'dilution-advanced': {
        title: '🧪 Dilution (Avancé)',
        description: 'Prépare des solutions par dilution (CiVi = CfVf)',
        type: 'dilution-advanced',
        config: {},
        analogy: {
            title: 'Allonger la Sauce',
            content: `Diluer, c'est rajouter de l'eau ! 💧
Tu as un sirop très fort (Concentré).
Tu rajoutes de l'eau.
Le mélange devient moins fort (Dilué).

Mais attention : La quantité de sucre dans le verre n'a pas changé ! Elle est juste noyée dans plus d'eau.`
        },
        theory: `Principe de la Dilution

Lors d'une dilution, la quantité de matière de soluté se conserve :
n_initiale = n_finale

Or, n = C × V

Donc la formule magique est :
Ci × Vi = Cf × Vf

- Ci : Concentration mère (initiale)
- Vi : Volume mère à prélever (initial)
- Cf : Concentration fille (finale, plus petite)
- Vf : Volume fille total (final, plus grand)`,
        exercises: [],
        relatedSimulations: ['molar-concentration', 'titrage-advanced']
    },

    'titrage-advanced': {
        title: '⚗️ Titrage Acide-Base (Avancé)',
        description: 'Dosage colorimétrique et suivi pH-métrique',
        type: 'titrage-advanced',
        config: {},
        analogy: {
            title: 'Le Duel Chimique',
            content: `Un titrage, c'est une bataille précise entre un Acide et une Base ! ⚔️
Tu verses la Base goutte à goutte sur l'Acide (ou l'inverse).
Ils s'annulent mutuellement.

À l'ÉQUIVALENCE : Il y a exactement autant de soldats Bases que de soldats Acides. Tout le monde est neutralisé !
L'indicateur change de couleur pour signaler la fin du combat.`
        },
        theory: `Titrage Acide-Base

Technique pour déterminer la concentration inconnue d'une solution.

Réaction support :
H₃O⁺ (acide) + OH⁻ (base) → 2H₂O
(Réaction totale, rapide et unique).

À l'équivalence :
Les réactifs ont été introduits dans les proportions stœchiométriques.
n(acide)initial = n(base)versé

Soit : Ca × Va = Cb × Veq`,
        exercises: [],
        relatedSimulations: ['dilution-advanced', 'ph-indicateurs-advanced']
    },

    'ph-indicateurs-advanced': {
        title: '📊 pH et Indicateurs (Avancé)',
        description: 'Échelle de pH et indicateurs colorés interactifs',
        type: 'ph-indicateurs-advanced',
        config: {},
        analogy: {
            title: 'Le Thermomètre de l\'Acidité',
            content: `Le pH, c'est comme un thermomètre mais pour mesurer l'acidité ! 🌡️

Échelle de 0 à 14 :
- 0-6 : ACIDE (citron, vinaigre, cola)
- 7 : NEUTRE (eau pure)
- 8-14 : BASIQUE (savon, javel, soude)

Plus le pH est bas, plus c'est acide.
Plus le pH est haut, plus c'est basique.

Les indicateurs colorés changent de couleur selon le pH !`
        },
        theory: `pH et Indicateurs Colorés

DÉFINITION :
pH = -log[H₃O⁺]
[H₃O⁺] = 10^(-pH) mol/L

ÉCHELLE (25°C) :
pH < 7 : Acide ([H₃O⁺] > [OH⁻])
pH = 7 : Neutre ([H₃O⁺] = [OH⁻])
pH > 7 : Basique ([H₃O⁺] < [OH⁻])

INDICATEURS :
BBT : Jaune (acide) → Vert (neutre) → Bleu (basique)
Phénolphtaléine : Incolore → Rose (basique)
Hélianthine : Rouge → Orange → Jaune`,
        exercises: [],
        relatedSimulations: ['titrage-advanced', 'tests-ions-advanced']
    },
    'tests-ions-advanced': {
        title: '🔬 Tests d\'Ions (Avancé)',
        description: 'Identification des ions avec Mode Mystère',
        type: 'tests-ions-advanced',
        config: {},
        analogy: {
            title: 'Le Détective Chimiste',
            content: `Deviens un détective de laboratoire ! 🔍

Tu as une solution inconnue. Comment savoir ce qu'elle contient ?

Chaque ion laisse une "empreinte" colorée quand tu utilises le bon réactif :
- Cu²⁺ + Soude = Bleu 💙
- Fe²⁺ + Soude = Vert 💚
- Fe³⁺ + Soude = Rouille 🧡
- Cl⁻ + Nitrate d'Argent = Blanc ⚪

Mode Mystère : Identifie l'ion caché !`
        },
        theory: `Tests de Caractérisation des Ions

CATIONS (avec Soude NaOH) :
Cu²⁺ → Précipité BLEU (hydroxyde de cuivre)
Fe²⁺ → Précipité VERT (hydroxyde de fer II)
Fe³⁺ → Précipité ROUILLE (hydroxyde de fer III)
Zn²⁺ → Précipité BLANC (se redissout en excès)
Al³⁺ → Précipité BLANC

ANIONS :
Cl⁻ + AgNO₃ → Précipité BLANC (noircit à la lumière)
SO₄²⁻ + BaCl₂ → Précipité BLANC`,
        exercises: [],
    },

    // ========== PHYSIQUE 1ÈRE S ==========
    'p1s-travail': {
        title: '🔧 Travail et Puissance',
        description: 'Chariot sur rampe avec force, angle et déplacement',
        type: 'p1s-travail',
        config: {},
        analogy: {
            title: 'Pousser un Chariot à Sandaga',
            content: `Imagine tu dois pousser un chariot lourd au marché Sandaga ! 🛒

Plus tu pousses dans le sens du mouvement, plus le travail est efficace.
Si tu pousses en angle (30°), une partie de ta force est "gaspillée".

W = F × d × cos(α)

Le travail mesure vraiment combien tu as déplacé quelque chose avec ta force.`
        },
        theory: `Travail et Puissance

TRAVAIL D'UNE FORCE :
W = F × AB × cos(α)
- W en Joules (J)
- F en Newtons (N)
- AB en mètres (m)
- α : angle entre F et le déplacement

PUISSANCE :
P = W / t = F × v
- P en Watts (W)
- t en secondes (s)
- v : vitesse en m/s`,
        exercises: [
            { question: 'Un chariot de 50 kg est poussé sur 10 m avec une force de 100 N parallèle au déplacement. Quel est le travail ?', options: ['500 J', '1000 J', '5000 J', '50 J'], correct: 1, explanation: 'W = F × d × cos(0°) = 100 × 10 × 1 = 1000 J' }
        ],
        relatedSimulations: ['p1s-cinetique', 'p1s-mecanique']
    },
    'p1s-cinetique': {
        title: '🚗 Énergie Cinétique',
        description: 'Voiture en mouvement et distance de freinage',
        type: 'p1s-cinetique',
        config: {},
        analogy: {
            title: 'Freiner sur la Corniche',
            content: `Ta voiture roule sur la Corniche de Dakar 🚗

Plus tu vas vite, plus tu as d'énergie cinétique.
Et attention : si tu doubles ta vitesse, ton énergie est QUADRUPLÉE !

Ec = ½ × m × v²

C'est pour ça que la distance de freinage augmente énormément avec la vitesse.
À 60 km/h tu freines en 18m. À 120 km/h ? 72m !`
        },
        theory: `Énergie Cinétique

DÉFINITION :
Ec = ½ × m × v²
- Ec en Joules (J)
- m en kg
- v en m/s

THÉORÈME DE L'ÉNERGIE CINÉTIQUE :
W(forces) = ΔEc = Ecf - Ec0

Plus la masse ou la vitesse augmente, plus l'énergie cinétique est grande.`,
        exercises: [
            { question: 'Une voiture de 1000 kg roule à 20 m/s. Quelle est son énergie cinétique ?', options: ['10 000 J', '200 000 J', '400 000 J', '20 000 J'], correct: 1, explanation: 'Ec = ½ × 1000 × 20² = ½ × 1000 × 400 = 200 000 J' }
        ],
        relatedSimulations: ['p1s-travail', 'p1s-mecanique']
    },
    'p1s-mecanique': {
        title: '🎢 Énergie Mécanique',
        description: 'Pendule avec conservation Ec + Ep',
        type: 'p1s-mecanique',
        config: {},
        analogy: {
            title: 'La Balançoire du Parc',
            content: `Regarde une balançoire au parc de Hann ! 🎢

En haut : Toute l'énergie est potentielle (Ep = mgh)
En bas : Toute l'énergie est cinétique (Ec = ½mv²)

L'énergie totale Em = Ep + Ec reste CONSTANTE (si pas de frottements).

C'est la Conservation de l'Énergie Mécanique !`
        },
        theory: `Énergie Mécanique

ÉNERGIE POTENTIELLE :
Ep = m × g × h

ÉNERGIE MÉCANIQUE :
Em = Ec + Ep = ½mv² + mgh

CONSERVATION :
Sans frottements : Em = constante
Avec frottements : Em diminue (dissipation)`,
        exercises: [
            { question: 'Un objet de 2 kg tombe de 5 m. Quelle est la variation d\'énergie potentielle ?', options: ['10 J', '50 J', '100 J', '1000 J'], correct: 2, explanation: 'ΔEp = m × g × Δh = 2 × 10 × 5 = 100 J' }
        ],
        relatedSimulations: ['p1s-travail', 'p1s-cinetique']
    },
    'p1s-potentielle': {
        title: '🏗️ Énergie Potentielle',
        description: 'Gravité, hauteur et Epp = mgh',
        type: 'p1s-potentielle',
        config: {},
        analogy: {
            title: 'Monter des Briques',
            content: `Imagine un maçon qui monte des briques au 3ème étage. 🏗️
            
Plus la brique est haute, plus elle a d'énergie "en réserve".
Si elle tombe du 3ème étage, elle fera plus de dégâts que si elle tombe du 1er !

C'est l'Énergie Potentielle de Pesanteur.`
        },
        theory: `Énergie Potentielle de Pesanteur (Epp)

DÉFINITION :
Epp = m × g × z
- Epp en Joules (J)
- m en kg
- g = 9.81 N/kg (sur Terre)
- z : altitude en mètres (m)

RÉFÉRENCE :
L'altitude z se mesure par rapport à un niveau de référence (z=0) arbitraire (souvent le sol).`,
        exercises: [
            { question: 'Si je double la hauteur, l\'énergie potentielle...', options: ['Double', 'Quadruple', 'Reste la même', 'Diminue'], correct: 0, explanation: 'Epp est proportionnelle à h (Epp = mgh).' }
        ],
        relatedSimulations: ['p1s-mecanique', 'p1s-travail']
    },
    'p1s-electro': {
        title: '⚡ Champ Électrique',
        description: 'Charges et lignes de champ E',
        type: 'p1s-electro',
        config: {},
        analogy: {
            title: 'Les Charges comme des Aimants',
            content: `Les charges électriques créent un champ invisible autour d'elles ! ⚡

+ attire - (comme les opposés)
+ repousse + (comme les semblables)

Le champ électrique E montre la direction de la force sur une charge positive.
Plus les lignes sont serrées, plus le champ est intense.`
        },
        theory: `Champ Électrique

DÉFINITION :
E = F / q
- E en V/m
- F en Newtons
- q en Coulombs

CHAMP UNIFORME :
E = U / d
Entre deux plaques parallèles.`,
        exercises: [],
        relatedSimulations: ['p1s-electronique']
    },
    'p1s-ondes': {
        title: '🌊 Ondes Mécaniques',
        description: 'Cuve à ondes et interférences',
        type: 'p1s-ondes',
        config: {},
        analogy: {
            title: 'Les Vagues de la Plage',
            content: `Regarde les vagues à la plage de Ngor ! 🌊

Quand deux vagues se rencontrent :
- Si elles sont en phase : Elles s'additionnent (interférence constructive)
- Si elles sont en opposition : Elles s'annulent (interférence destructive)

La longueur d'onde λ = v / f`
        },
        theory: `Ondes Mécaniques

CARACTÉRISTIQUES :
- Période T (s)
- Fréquence f = 1/T (Hz)
- Longueur d'onde λ = v × T (m)
- Célérité v (m/s)

INTERFÉRENCES :
Δφ = 0 → Constructive
Δφ = π → Destructive`,
        exercises: [],
        relatedSimulations: ['p1s-optique']
    },
    'p1s-optique': {
        title: '🔭 Optique Géométrique',
        description: 'Banc optique avec lentilles convergentes',
        type: 'p1s-optique',
        config: {},
        analogy: {
            title: 'La Loupe et l\'Appareil Photo',
            content: `Une lentille convergente, c'est comme une loupe ! 🔍

Elle fait converger les rayons de lumière vers un point : le Foyer.

L'appareil photo utilise ce principe pour former une image nette sur le capteur.

1/OA' - 1/OA = 1/f (Relation de conjugaison)`
        },
        theory: `Optique - Lentilles

LENTILLE CONVERGENTE :
- Plus épaisse au centre
- Vergence C = 1/f (dioptries)
- Foyers F et F'

IMAGE :
Réelle si objet au-delà de F
Virtuelle si objet entre O et F`,
        exercises: [],
        relatedSimulations: ['p1s-ondes', 'vision-eye']
    },
    'p1s-electronique': {
        title: '📺 Électronique - Circuit RC',
        description: 'Condensateur, résistance et oscilloscope',
        type: 'p1s-electronique',
        config: {},
        analogy: {
            title: 'Le Réservoir d\'Électricité',
            content: `Le condensateur est comme un réservoir d'eau ⚡

La charge : Remplir le réservoir
La décharge : Vider le réservoir

τ = R × C est le temps caractéristique.
Après 5τ, le condensateur est chargé à 99%.`
        },
        theory: `Circuit RC

CHARGE :
Uc(t) = E(1 - e^(-t/τ))

DÉCHARGE :
Uc(t) = E × e^(-t/τ)

CONSTANTE DE TEMPS :
τ = R × C (secondes)`,
        exercises: [],
        relatedSimulations: ['p1s-electro']
    },

    // ========== CHIMIE 1ÈRE S ==========
    'c1s-general': {
        title: '🧪 Tétravalence du Carbone',
        description: 'Structure du méthane CH4 en 3D',
        type: 'c1s-general',
        config: {},
        analogy: {
            title: 'Le Carbone a 4 Bras',
            content: `Le carbone est comme un atome à 4 bras ! 🤲

Il peut toujours tenir 4 autres atomes (ou groupes).
C'est la TÉTRAVALENCE.

Le méthane CH4 forme un tétraèdre parfait avec des angles de 109.5°.`
        },
        theory: `Chimie Organique - Généralités

TÉTRAVALENCE DU CARBONE :
Le carbone forme toujours 4 liaisons covalentes.

GÉOMÉTRIE :
- 4 liaisons simples → Tétraèdre (109.5°)
- 1 double liaison → Plan (120°)
- 1 triple liaison → Linéaire (180°)`,
        exercises: [],
        relatedSimulations: ['c1s-alcanes', 'c1s-alcenes']
    },
    'c1s-alcanes': {
        title: '⛽ Les Alcanes',
        description: 'Nomenclature et formule CnH2n+2',
        type: 'c1s-alcanes',
        config: {},
        analogy: {
            title: 'Le Gaz de Cuisine',
            content: `Le butane dans ta bouteille de gaz, c'est un alcane ! ⛽

Formule générale : CnH2n+2
- Méthane CH4 (n=1)
- Éthane C2H6 (n=2)
- Propane C3H8 (n=3)
- Butane C4H10 (n=4)`
        },
        theory: `Les Alcanes

FORMULE GÉNÉRALE :
CnH2n+2

NOMENCLATURE :
Racine (nb de C) + suffixe "-ane"

COMBUSTION :
CnH2n+2 + O2 → CO2 + H2O`,
        exercises: [],
        relatedSimulations: ['c1s-general', 'c1s-alcenes']
    },
    'c1s-alcenes': {
        title: '🧬 Alcènes et Double Liaison',
        description: 'Éthène C2H4 et réactions d\'addition',
        type: 'c1s-alcenes',
        config: {},
        analogy: {
            title: 'Les Plastiques sont des Alcènes',
            content: `Le polyéthylène (sac plastique) vient de l'éthène ! 🧬

La double liaison C=C est très réactive.
Elle s'ouvre pour former des polymères.

Formule générale : CnH2n`
        },
        theory: `Les Alcènes

FORMULE GÉNÉRALE :
CnH2n (une double liaison)

RÉACTIONS D'ADDITION :
- Hydrogénation : + H2
- Halogénation : + Br2 (décoloration)
- Hydratation : + H2O`,
        exercises: [],
        relatedSimulations: ['c1s-alcanes', 'c1s-benzene']
    },
    'c1s-benzene': {
        title: '💎 Benzène Aromatique',
        description: 'Cycle C6H6 avec électrons délocalisés',
        type: 'c1s-benzene',
        config: {},
        analogy: {
            title: 'Le Parfum et le Danger',
            content: `Le benzène a une odeur douce (arôme) mais il est TOXIQUE ! 💎

Son cycle à 6 carbones est exceptionnellement stable.
Les électrons π sont délocalisés (le cercle au milieu).

Il préfère la SUBSTITUTION à l'addition.`
        },
        theory: `Le Benzène

FORMULE :
C6H6

STRUCTURE :
Cycle plan hexagonal
Liaisons délocalisées (stabilité aromatique)

RÉACTIONS :
Substitution électrophile (nitration, halogénation)`,
        exercises: [],
        relatedSimulations: ['c1s-alcenes', 'c1s-oxygenes']
    },
    'c1s-oxygenes': {
        title: '🧪 Composés Oxygénés',
        description: 'Alcools, Aldéhydes et Cétones',
        type: 'c1s-oxygenes',
        config: {},
        analogy: {
            title: 'L\'Éthanol et le Parfum',
            content: `L'éthanol (alcool) est dans la bière et le parfum ! 🍺

Groupe -OH = Alcool
Groupe -CHO = Aldéhyde (odeur du formol)
Groupe C=O = Cétone (acétone du dissolvant)

L'oxydation transforme : Alcool → Aldéhyde → Acide`
        },
        theory: `Composés Oxygénés

ALCOOLS (R-OH) :
Oxydation ménagée possible

ALDÉHYDES (R-CHO) :
Test Fehling positif (rouge)

CÉTONES (R-CO-R') :
Test Fehling négatif`,
        exercises: [],
        relatedSimulations: ['c1s-benzene', 'c1s-redox']
    },
    'c1s-redox': {
        title: '⚗️ Règle du Gamma',
        description: 'Réactions redox et classification des couples',
        type: 'c1s-redox',
        config: {},
        analogy: {
            title: 'La Lame de Zinc dans le Cuivre',
            content: `Plonge une lame de zinc dans du sulfate de cuivre 🔋

Le zinc se dissout (oxydation)
Le cuivre se dépose (réduction)

Règle du Gamma : L'oxydant le plus fort réagit avec le réducteur le plus fort !`
        },
        theory: `Oxydoréduction

COUPLE OX/RED :
Cu²⁺/Cu, Zn²⁺/Zn, Fe³⁺/Fe²⁺

RÈGLE DU GAMMA :
L'oxydant le plus fort (en haut) réagit avec le réducteur le plus fort (en bas)

POTENTIEL E° :
Plus E° est élevé, plus l'oxydant est fort`,
        exercises: [],
        relatedSimulations: ['c1s-electrolyse', 'c1s-voieseche']
    },
    'c1s-electrolyse': {
        title: '⚡ Électrolyse',
        description: 'Loi de Faraday et dépôt métallique',
        type: 'c1s-electrolyse',
        config: {},
        analogy: {
            title: 'Forcer la Réaction',
            content: `L'électrolyse, c'est forcer une réaction avec l'électricité ! ⚡

Contrairement à la pile (spontanée), l'électrolyse consomme de l'énergie.

Anode (+) : Oxydation
Cathode (-) : Réduction

Loi de Faraday : m = (I × t × M) / (n × F)`
        },
        theory: `Électrolyse

LOI DE FARADAY :
m = (I × t × M) / (n × F)
F = 96500 C/mol

ÉLECTRODES :
Anode (+) : Oxydation
Cathode (-) : Réduction`,
        exercises: [],
        relatedSimulations: ['c1s-redox', 'c1s-voieseche']
    },
    'c1s-voieseche': {
        title: '🔥 Voie Sèche',
        description: 'Aluminothermie et réduction des oxydes',
        type: 'c1s-voieseche',
        config: {},
        analogy: {
            title: 'Le Haut Fourneau',
            content: `La sidérurgie extrait le fer de son minerai ! 🔥

Fe2O3 + 2Al → 2Fe + Al2O3

L'aluminium (réducteur puissant) arrache l'oxygène au fer.
Température : ~2500°C

C'est l'ALUMINOTHERMIE !`
        },
        theory: `Voie Sèche

PRINCIPE :
Réduction des oxydes métalliques sans eau

ALUMINOTHERMIE :
Fe2O3 + 2Al → 2Fe + Al2O3
Réaction très exothermique`,
        exercises: [],
        relatedSimulations: ['c1s-redox', 'c1s-electrolyse']
    },

    // ================================================
    // ========== PHYSIQUE TERMINALE S ==========
    // ================================================

    // === PARTIE 1 : CINÉMATIQUE - DYNAMIQUE ===

    'pts-cinematique': {
        title: '📍 Cinématique du Point',
        description: 'Vecteurs position, vitesse, accélération - MRU, MRUV',
        type: 'pts-cinematique',
        image: '/simulations/physique-ts/cinematique.png',
        level: 'Terminale S',
        subject: 'Physique',
        config: {},
        analogy: {
            title: 'Le GPS de la Voiture',
            content: `La cinématique, c'est comme le GPS de ta voiture ! 🚗📍

POSITION : Où tu es exactement sur la carte (coordonnées x, y, z).

VITESSE : À quelle vitesse tu te déplaces. C'est la dérivée de ta position !
Si tu bouges de 100m en 10s, ta vitesse moyenne est 10 m/s.

ACCÉLÉRATION : À quelle vitesse ta vitesse change !
Si tu appuies sur l'accélérateur, ta vitesse augmente → accélération positive.
Si tu freines, ta vitesse diminue → accélération négative (décélération).

MRU (Mouvement Rectiligne Uniforme) : Tu roules tout droit à vitesse constante.
MRUV (Uniformément Varié) : Tu accélères ou freines de manière régulière.`
        },
        theory: `Cinématique du Point Matériel

1. VECTEUR POSITION
𝑂𝑀⃗ = x𝑖⃗ + y𝑗⃗ + z𝑘⃗
Le point M est repéré par ses coordonnées (x, y, z).

2. VECTEUR VITESSE
𝑣⃗ = d𝑂𝑀⃗/dt = ẋ𝑖⃗ + ẏ𝑗⃗ + ż𝑘⃗
La vitesse est la dérivée de la position.

3. VECTEUR ACCÉLÉRATION
𝑎⃗ = d𝑣⃗/dt = ẍ𝑖⃗ + ÿ𝑗⃗ + z̈𝑘⃗
L'accélération est la dérivée de la vitesse.

4. MOUVEMENTS PARTICULIERS

MRU : 𝑎⃗ = 0⃗, v = cste, x(t) = vt + x₀

MRUV : 𝑎⃗ = cste
  v(t) = at + v₀
  x(t) = ½at² + v₀t + x₀

MCU (Circulaire Uniforme) : aₙ = v²/R (centripète)`,
        exercises: [
            { question: 'Si l\'accélération est nulle et constante, le mouvement est...', options: ['Accéléré', 'Rectiligne Uniforme', 'Circulaire', 'Impossible'], correct: 1, explanation: 'Si 𝑎⃗ = 0⃗, alors 𝑣⃗ est constant. Le mouvement est rectiligne uniforme (ou repos).' },
            { question: 'L\'unité de l\'accélération dans le SI est...', options: ['m/s', 'm/s²', 'km/h', 'N'], correct: 1, explanation: 'L\'accélération s\'exprime en mètres par seconde carrée (m/s² ou m.s⁻²).' },
            { question: 'Dans un MRUV, si a = 2 m/s² et v₀ = 0, quelle est la vitesse après 5s ?', options: ['5 m/s', '10 m/s', '25 m/s', '2 m/s'], correct: 1, explanation: 'v = at + v₀ = 2×5 + 0 = 10 m/s.' }
        ],
        relatedSimulations: ['pts-dynamique', 'pts-applications']
    },

    'pts-dynamique': {
        title: '⚖️ Bases de la Dynamique',
        description: 'Les trois lois de Newton - PFD',
        type: 'pts-dynamique',
        image: '/simulations/physique-ts/dynamique.png',
        level: 'Terminale S',
        subject: 'Physique',
        config: {},
        analogy: {
            title: 'La Pomme de Newton',
            content: `Newton a révolutionné la physique avec trois lois simples ! 🍎

1ère LOI (INERTIE) : Si personne ne te pousse, tu restes tranquille.
Une voiture au point mort sur un terrain plat parfait glisserait éternellement !
C'est la PARESSE naturelle des objets.

2ème LOI (PFD) : F = ma
Plus tu pousses fort (F), plus ça accélère (a).
Plus c'est lourd (m), moins ça accélère pour la même force.
Pousser une brouette vide vs une brouette pleine !

3ème LOI (ACTION-RÉACTION) : Quand tu frappes un mur, le mur te frappe aussi fort !
C'est pour ça que ça fait mal. Le mur renvoie exactement ta force.`
        },
        theory: `Les Lois de Newton (Dynamique)

1. PRINCIPE D'INERTIE (1ère Loi)
Si Σ𝐹⃗ₑₓₜ = 0⃗, alors 𝑣⃗ = constante
Un corps persévère dans son état de repos ou de MRU si aucune force ne s'exerce.

2. PRINCIPE FONDAMENTAL DE LA DYNAMIQUE (2ème Loi)
Dans un référentiel galiléen :
Σ𝐹⃗ₑₓₜ = m𝑎⃗

La somme vectorielle des forces = masse × accélération.
Unité : 1 N = 1 kg.m.s⁻²

3. PRINCIPE DES ACTIONS RÉCIPROQUES (3ème Loi)
𝐹⃗ₐ/ᵦ = -𝐹⃗ᵦ/ₐ

Les forces d'interaction sont égales en norme, de même direction, mais de sens opposés.

THÉORÈME DU CENTRE D'INERTIE (TCI)
Le mouvement de G est déterminé par : Σ𝐹⃗ₑₓₜ = m𝑎⃗ᴳ`,
        exercises: [
            { question: 'Quelle est l\'unité de la force dans le SI ?', options: ['Joule', 'Watt', 'Newton', 'Pascal'], correct: 2, explanation: 'Le Newton (N). 1 N = 1 kg.m.s⁻².' },
            { question: 'Si F = 10 N et m = 2 kg, quelle est l\'accélération ?', options: ['5 m/s²', '20 m/s²', '0.2 m/s²', '12 m/s²'], correct: 0, explanation: 'a = F/m = 10/2 = 5 m/s².' },
            { question: 'La Terre attire la pomme avec une force F. La pomme attire la Terre avec...', options: ['Une force nulle', 'Une force F', 'Une force plus petite', 'Une force plus grande'], correct: 1, explanation: 'Action-Réaction : Les forces sont égales en norme (mais la Terre bouge moins car sa masse est énorme).' }
        ],
        relatedSimulations: ['pts-cinematique', 'pts-applications']
    },

    'pts-applications': {
        title: '🎯 Applications de la Dynamique',
        description: 'Mouvement projectile, plan incliné, TEC',
        type: 'pts-applications',
        image: '/simulations/physique-ts/projectile.png',
        level: 'Terminale S',
        subject: 'Physique',
        config: {},
        analogy: {
            title: 'Le Tir au But',
            content: `Le mouvement d'un ballon de foot c'est de la physique pure ! ⚽

PROJECTILE : Quand tu frappes le ballon, il suit une PARABOLE.
- Horizontalement : il avance à vitesse constante (pas de force).
- Verticalement : il monte, ralentit, s'arrête (sommet), puis retombe (gravité).

PLAN INCLINÉ : Une bille sur une pente.
On décompose le poids en deux :
- Une composante qui pousse vers le bas de la pente (fait accélérer)
- Une composante perpendiculaire (annulée par la réaction du sol)

TEC (Théorème de l'Énergie Cinétique) :
Toute l'énergie que tu mets en frappant se retrouve dans la vitesse du ballon !`
        },
        theory: `Applications de la Dynamique

1. MOUVEMENT DANS UN CHAMP DE PESANTEUR UNIFORME

Projectile lancé avec 𝑣⃗₀ :
𝑎⃗ = 𝑔⃗ (verticale vers le bas)

Équations :
  vₓ = v₀cos(α)     x(t) = v₀cos(α)·t
  vᵧ = v₀sin(α) - gt   y(t) = v₀sin(α)·t - ½gt²

Trajectoire = Parabole (sauf tir vertical)
Portée = distance horizontale maximale
Flèche = hauteur maximale

2. PLAN INCLINÉ (angle θ)
Projection du poids :
  Parallèle : P·sin(θ) → accélère
  Perpendiculaire : P·cos(θ) → annulée par N

Sans frottement : a = g·sin(θ)

3. THÉORÈME DE L'ÉNERGIE CINÉTIQUE (TEC)
ΔEc = Σ W(𝐹⃗)
½mv² - ½mv₀² = Travail des forces`,
        exercises: [
            { question: 'Au sommet de la trajectoire d\'un projectile, la vitesse verticale est...', options: ['Maximale', 'Nulle', 'Négative', 'Égale à g'], correct: 1, explanation: 'Au sommet, le projectile s\'arrête de monter avant de redescendre → vᵧ = 0.' },
            { question: 'L\'accélération d\'une bille sur un plan incliné sans frottement dépend de...', options: ['La masse de la bille', 'L\'angle du plan', 'La couleur de la bille', 'La température'], correct: 1, explanation: 'a = g·sin(θ). L\'accélération ne dépend que de l\'angle, pas de la masse !' },
            { question: 'Le travail d\'une force perpendiculaire au déplacement est...', options: ['Maximal', 'Nul', 'Négatif', 'Infini'], correct: 1, explanation: 'W = F·d·cos(90°) = 0. Une force perpendiculaire ne travaille pas.' }
        ],
        relatedSimulations: ['pts-dynamique', 'pts-gravitation']
    },

    'pts-gravitation': {
        title: '🌍 Gravitation Universelle',
        description: 'Loi de Newton, satellites, lois de Kepler',
        type: 'pts-gravitation',
        image: '/simulations/physique-ts/gravitation.png',
        level: 'Terminale S',
        subject: 'Physique',
        config: {},
        analogy: {
            title: 'La Fronde Cosmique',
            content: `La gravitation, c'est la colle de l'Univers ! 🌍🌕

LOI DE NEWTON : Tout attire tout !
La Terre attire la Lune, mais la Lune attire aussi la Terre.
Plus les masses sont grandes, plus ça attire.
Plus c'est loin, moins ça attire (très vite : 1/d²).

SATELLITES : Pourquoi ne tombent-ils pas ?
Ils TOMBENT constamment... mais ils vont tellement vite qu'ils ratent la Terre !
C'est une chute libre perpétuelle en cercle.

SATELLITE GÉOSTATIONNAIRE : Période = 24h
Il tourne à la même vitesse que la Terre → paraît immobile dans le ciel.
C'est là qu'on met les satellites de télé !`
        },
        theory: `Gravitation Universelle

1. LOI DE NEWTON
𝐹⃗ₐ/ᵦ = -G(mₐmᵦ/d²)𝑢⃗ₐᵦ

G = 6,67 × 10⁻¹¹ N.m².kg⁻²
Force attractive, loi en 1/d²

2. MOUVEMENT DES SATELLITES (Orbite circulaire)
Vitesse orbitale : v = √(GM/r)
Période : T = 2πr/v = 2π√(r³/GM)

Indépendant de la masse du satellite !

3. LOIS DE KEPLER

1ère Loi : Orbites elliptiques (Soleil au foyer)

2ème Loi : Loi des Aires
Vitesse aréolaire constante (plus vite près du Soleil)

3ème Loi : T²/r³ = constante
Pour tous les satellites d'un même astre central.`,
        exercises: [
            { question: 'Si la distance entre deux planètes double, la force gravitationnelle...', options: ['Double', 'Est divisée par 2', 'Est divisée par 4', 'Reste constante'], correct: 2, explanation: 'F ∝ 1/d². Si d × 2, alors d² × 4, donc F ÷ 4.' },
            { question: 'Un satellite géostationnaire a une période de...', options: ['1 heure', '12 heures', '24 heures', '1 mois'], correct: 2, explanation: '24h pour tourner avec la Terre et paraître immobile.' },
            { question: 'La vitesse d\'un satellite dépend-elle de sa masse ?', options: ['Oui, plus c\'est lourd plus c\'est lent', 'Non, ça ne dépend pas de sa masse', 'Oui, plus c\'est lourd plus c\'est rapide', 'Seulement pour les petits satellites'], correct: 1, explanation: 'v = √(GM/r) ne contient pas la masse du satellite !' }
        ],
        relatedSimulations: ['pts-applications', 'satellite-motion']
    },

    // === PARTIE 2 : ÉLECTROMAGNÉTISME ===

    'pts-champ-magnetique': {
        title: '🧲 Champs Magnétiques',
        description: 'Création, visualisation et solénoïde',
        type: 'pts-champ-magnetique',
        image: '/simulations/physique-ts/champ-magnetique.png',
        level: 'Terminale S',
        subject: 'Physique',
        config: {},
        analogy: {
            title: 'La Boussole et les Aimants',
            content: `Le champ magnétique est invisible mais partout autour de nous ! 🧭

VISUALISATION : Fais tomber de la limaille de fer sur un aimant.
Les petits morceaux de fer s'alignent et dessinent les lignes de champ !
Elles sortent du pôle Nord et entrent au pôle Sud.

BOUSSOLE : C'est un petit aimant.
Son pôle Nord est attiré par le Sud magnétique de la Terre (qui est au Nord géographique !).

SOLÉNOÏDE : Une bobine de fil.
Quand le courant passe, il crée un champ magnétique uniforme à l'intérieur.
C'est un électroaimant !`
        },
        theory: `Champs Magnétiques

1. LE CHAMP 𝐵⃗
Vecteur défini en tout point de l'espace
Unité : Tesla (T)
Visualisé par les lignes de champ (Nord → Sud)

2. CHAMPS CRÉÉS PAR DES COURANTS

Fil rectiligne infini :
  B = μ₀I/(2πd)
  Lignes circulaires autour du fil

Solénoïde (bobine longue) :
  B = μ₀nI
  n = N/L (spires par mètre)
  Champ UNIFORME à l'intérieur

μ₀ = 4π × 10⁻⁷ T.m.A⁻¹

3. SUPERPOSITION
𝐵⃗ₜₒₜₐₗ = 𝐵⃗₁ + 𝐵⃗₂ + ...
Somme vectorielle des contributions`,
        exercises: [
            { question: 'Une charge IMMOBILE crée-t-elle un champ magnétique ?', options: ['Oui', 'Non', 'Seulement si elle est chargée négativement', 'Seulement dans le vide'], correct: 1, explanation: 'Non ! Il faut des charges EN MOUVEMENT (courant) pour créer un champ magnétique.' },
            { question: 'Où le champ d\'un solénoïde est-il uniforme ?', options: ['À l\'extérieur', 'Aux extrémités seulement', 'À l\'intérieur', 'Nulle part'], correct: 2, explanation: 'À l\'intérieur d\'un solénoïde long, B est constant (parallèle et uniforme).' },
            { question: 'Quelle est l\'unité du champ magnétique ?', options: ['Newton', 'Volt', 'Tesla', 'Ampère'], correct: 2, explanation: 'Le Tesla (T). 1 T est un champ très intense !' }
        ],
        relatedSimulations: ['pts-lorentz', 'pts-laplace']
    },

    'pts-lorentz': {
        title: '⚡ Force de Lorentz',
        description: 'Particule chargée dans un champ B',
        type: 'pts-lorentz',
        image: '/simulations/physique-ts/lorentz.png',
        level: 'Terminale S',
        subject: 'Physique',
        config: {},
        analogy: {
            title: 'L\'Électron Danseur',
            content: `Un électron qui entre dans un champ magnétique se met à tourner en rond ! 💃

Imagine une bille qui roule sur une patinoire avec du vent latéral.
Le vent la pousse toujours perpendiculairement à sa direction.
Résultat : elle tourne en cercle !

FORCE DE LORENTZ : F = qv × B
Elle est perpendiculaire à la vitesse ET au champ.
Règle des trois doigts de la main droite !

Cette force ne TRAVAILLE jamais (car ⊥ à v).
L'énergie cinétique reste constante, seule la direction change.

CYCLOTRON : On utilise ça pour accélérer des particules.`
        },
        theory: `Force de Lorentz

1. EXPRESSION
𝐹⃗ = q𝑣⃗ × 𝐵⃗ (Produit vectoriel)

Direction : ⊥ au plan (𝑣⃗, 𝐵⃗)
Sens : Règle de la main droite (attention au signe de q !)
Intensité : F = |q|vB sin(α)

2. CARACTÉRISTIQUES
- Toujours ⊥ à 𝑣⃗ → ne travaille pas (Ec constante)
- Ne modifie que la direction, pas la norme de v

3. MOUVEMENT DANS B UNIFORME
Si 𝑣⃗ ⊥ 𝐵⃗ : Mouvement CIRCULAIRE UNIFORME

Rayon : R = mv/(|q|B)
Période : T = 2πm/(|q|B) (indépendante de v !)

4. APPLICATIONS
- Cyclotron (accélérateur)
- Spectrographe de masse
- Tube cathodique`,
        exercises: [
            { question: 'La trajectoire d\'un électron entrant perpendiculairement dans B uniforme est...', options: ['Une droite', 'Une parabole', 'Un cercle', 'Une spirale'], correct: 2, explanation: 'F toujours ⊥ à v et constante en norme → trajectoire circulaire.' },
            { question: 'La force de Lorentz travaille-t-elle ?', options: ['Oui, beaucoup', 'Non, jamais', 'Seulement si B est intense', 'Seulement si q > 0'], correct: 1, explanation: 'F ⊥ v → W = F·d·cos(90°) = 0. Elle ne modifie pas l\'énergie.' },
            { question: 'Si on double la vitesse, le rayon de la trajectoire...', options: ['Double', 'Est divisé par 2', 'Reste constant', 'Quadruple'], correct: 0, explanation: 'R = mv/(qB). Si v × 2, alors R × 2.' }
        ],
        relatedSimulations: ['pts-champ-magnetique', 'pts-laplace']
    },

    'pts-laplace': {
        title: '🔌 Loi de Laplace',
        description: 'Moteur électrique et haut-parleur',
        type: 'pts-laplace',
        image: '/simulations/physique-ts/laplace.png',
        level: 'Terminale S',
        subject: 'Physique',
        config: {},
        analogy: {
            title: 'Le Moteur qui Tourne',
            content: `Laplace, c'est Lorentz mais pour les fils électriques ! 🔌⚡

Un fil parcouru par un courant, c'est plein d'électrons qui bougent.
S'ils sont dans un champ magnétique, chacun subit une force de Lorentz.
Tous ensemble = Une GROSSE force sur le fil !

MOTEUR ÉLECTRIQUE : Une spire de fil entre deux aimants.
Le courant dans le fil crée une force qui le fait tourner.
On alterne le sens du courant → rotation continue !

HAUT-PARLEUR : Un fil en spirale collé à une membrane.
Le courant varie → le fil bouge → la membrane vibre → SON !`
        },
        theory: `Loi de Laplace

1. EXPRESSION
d𝐹⃗ = I·d𝑙⃗ × 𝐵⃗

Pour un fil rectiligne de longueur L :
𝐹⃗ = I·𝐿⃗ × 𝐵⃗
F = BIL sin(α)

2. SENS DE LA FORCE
Règle des trois doigts (I remplace v)
ou règle de la main droite

3. APPLICATIONS

Moteur à courant continu :
- Spire soumise à un couple de forces
- Rotation grâce au collecteur (inverseur)

Haut-parleur :
- Bobine mobile dans champ permanent
- I variable → mouvement oscillant
- Signal électrique → Son

Rails de Laplace :
- Tige mobile sur rails
- F = BIL pousse la tige`,
        exercises: [
            { question: 'La force de Laplace dépend de...', options: ['L\'angle entre I et B', 'La température', 'La couleur du fil', 'L\'heure'], correct: 0, explanation: 'F = BIL sin(α). L\'angle est crucial !' },
            { question: 'Dans un haut-parleur, qu\'est-ce qui vibre ?', options: ['L\'aimant', 'La membrane attachée à la bobine', 'Le boîtier', 'L\'air ambiant'], correct: 1, explanation: 'La bobine bouge grâce à la force de Laplace et fait vibrer la membrane.' },
            { question: 'La force de Laplace est la version macroscopique de...', options: ['La force électrique', 'La force de Lorentz', 'La gravité', 'Le frottement'], correct: 1, explanation: 'C\'est la somme des forces de Lorentz sur tous les porteurs de charge du fil.' }
        ],
        relatedSimulations: ['pts-lorentz', 'pts-induction']
    },

    'pts-induction': {
        title: '🔋 Induction Magnétique - Dipôle RL',
        description: 'Loi de Faraday, auto-induction, bobine',
        type: 'pts-induction',
        image: '/simulations/physique-ts/induction.png',
        level: 'Terminale S',
        subject: 'Physique',
        config: {},
        analogy: {
            title: 'La Dynamo du Vélo',
            content: `L'induction, c'est créer de l'électricité avec un aimant ! 🚲💡

FARADAY : Si tu bouges un aimant près d'une bobine, un courant apparaît !
C'est la dynamo de ton vélo : la roue fait tourner un aimant → lumière !

LOI DE LENZ : La nature est paresseuse.
Le courant induit S'OPPOSE TOUJOURS à ce qui lui donne naissance.
Si tu approches l'aimant, le courant créé tend à le repousser.
C'est le signe "-" dans e = -dΦ/dt.

BOBINE (INDUCTANCE L) : Elle n'aime pas le changement.
Au début, elle freine l'établissement du courant.
Elle lisse les variations, comme un amortisseur.`
        },
        theory: `Induction Électromagnétique

1. LOI DE LENZ-FARADAY
Une variation de flux magnétique Φ crée une f.é.m. induite :
e = -dΦ/dt

Le signe "-" traduit la loi de Lenz : opposition à la cause.

2. AUTO-INDUCTION
Une bobine parcourue par i variable :
e = -L(di/dt)

L = inductance (Henry, H)
La bobine s'oppose aux variations de i.

3. DIPÔLE RL (Résistance + Bobine)

Équation lors de l'établissement :
E = Ri + L(di/dt)

Solution : i(t) = (E/R)(1 - e^(-t/τ))

Constante de temps : τ = L/R

4. ÉNERGIE MAGNÉTIQUE
Eₗ = ½Li²
Stockée dans le champ B de la bobine.`,
        exercises: [
            { question: 'La bobine assure la continuité de...', options: ['La tension', 'Le courant', 'La résistance', 'La température'], correct: 1, explanation: 'Par auto-induction, i ne peut pas varier brusquement (discontinuité impossible).' },
            { question: 'Quel composant s\'oppose aux variations rapides de courant ?', options: ['Le condensateur', 'La résistance', 'La bobine', 'La diode'], correct: 2, explanation: 'La bobine "freine" les variations de courant par e = -L(di/dt).' },
            { question: 'Quelle est l\'unité de l\'inductance L ?', options: ['Farad', 'Henry', 'Ohm', 'Tesla'], correct: 1, explanation: 'Le Henry (H). 1 H est une inductance importante.' }
        ],
        relatedSimulations: ['pts-laplace', 'pts-rc']
    },

    'pts-rc': {
        title: '🔋 Dipôle RC',
        description: 'Charge et décharge du condensateur',
        type: 'pts-rc',
        image: '/simulations/physique-ts/dipole-rc.png',
        level: 'Terminale S',
        subject: 'Physique',
        config: {},
        analogy: {
            title: 'Le Réservoir d\'Électricité',
            content: `Le condensateur est comme un réservoir d'eau ! 💧🔋

CHARGE : Tu ouvres le robinet (on branche la pile).
Au début, le réservoir est vide → l'eau coule à flot (i fort).
Plus ça se remplit, plus la pression s'oppose → le débit diminue.
À la fin, c'est plein → plus rien ne coule (i = 0, u = E).

DÉCHARGE : Tu ouvres le fond du réservoir.
Au début, la pression est forte → ça gicle !
Plus ça se vide, moins il y a de pression → le débit faiblit.

τ = RC : Temps caractéristique.
À t = τ, on a 63% de la valeur finale.
À t = 5τ, c'est fini (99%).`
        },
        theory: `Dipôle RC (Résistance + Condensateur)

1. LE CONDENSATEUR
Deux armatures séparées par un isolant
q = C × uᴄ
C = capacité (Farad, F)

2. CHARGE DU CONDENSATEUR
E = Ri + uᴄ = RC(duᴄ/dt) + uᴄ

Solution : uᴄ(t) = E(1 - e^(-t/τ))
avec τ = RC

i(t) = (E/R)e^(-t/τ)

3. DÉCHARGE
uᴄ(t) = uᴄ(0) × e^(-t/τ)

Décroissance exponentielle

4. ÉNERGIE STOCKÉE
Eᴄ = ½Cuᴄ²

5. INTERPRÉTATIONS
- τ petit → réponse rapide
- τ grand → réponse lente
- 5τ → régime permanent (99%)`,
        exercises: [
            { question: 'Le condensateur assure la continuité de...', options: ['Le courant', 'La tension', 'La résistance', 'La charge'], correct: 1, explanation: 'La tension aux bornes du condensateur ne peut pas changer brusquement.' },
            { question: 'Quelle est l\'unité de la constante de temps RC ?', options: ['Ampère', 'Volt', 'Seconde', 'Hertz'], correct: 2, explanation: 'τ = RC est homogène à un temps (en secondes).' },
            { question: 'À t = τ, le condensateur est chargé à...', options: ['37%', '50%', '63%', '99%'], correct: 2, explanation: 'À t = τ : uᴄ = E(1-e⁻¹) ≈ 0.63E = 63%.' }
        ],
        relatedSimulations: ['pts-induction', 'pts-oscillations-lc']
    },

    // === PARTIE 3 : OSCILLATIONS - OPTIQUE ===

    'pts-oscillations-lc': {
        title: '📡 Oscillations LC et RLC',
        description: 'Circuit oscillant et résonance',
        type: 'pts-oscillations-lc',
        image: '/simulations/physique-ts/oscillations-lc.png',
        level: 'Terminale S',
        subject: 'Physique',
        config: {},
        analogy: {
            title: 'Le Ping-Pong Énergétique',
            content: `L'énergie joue au ping-pong entre le condensateur et la bobine ! 🏓

CIRCUIT LC (sans résistance) :
Le condensateur est chargé (énergie électrique).
Il se décharge dans la bobine (énergie magnétique).
La bobine renvoie l'énergie au condensateur (mais inversé !).
Et ça recommence... pour toujours ! (Oscillations libres)

CIRCUIT RLC (avec résistance) :
La résistance "mange" de l'énergie à chaque passage (effet Joule).
Les oscillations diminuent progressivement (amorties).

RÉSONANCE : Comme une balançoire !
Si tu pousses au bon rythme (fréquence propre), l'amplitude explose !`
        },
        theory: `Oscillations Électriques

1. OSCILLATIONS LIBRES (Circuit LC)
Échange perpétuel : Eélec ↔ Emag

Équation : L(d²q/dt²) + q/C = 0

Période propre : T₀ = 2π√(LC)
Pulsation : ω₀ = 1/√(LC)

Conservation : Eₗ + Eᴄ = constante

2. AMORTISSEMENT (Circuit RLC)
R dissipe l'énergie (Joule)

Régime pseudo-périodique : oscillations amorties
Régime apériodique : pas d'oscillation (retour lent)
Régime critique : retour le plus rapide sans oscillation

3. OSCILLATIONS FORCÉES
Générateur impose sa fréquence f

RÉSONANCE d'intensité :
- Quand f = f₀ = 1/(2π√LC)
- Impédance minimale Z = R
- Intensité maximale

Application : Syntonisation radio`,
        exercises: [
            { question: 'Dans un circuit RLC libre, l\'énergie totale...', options: ['Se conserve', 'Augmente', 'Diminue', 'Oscille'], correct: 2, explanation: 'Elle diminue à cause des pertes par effet Joule dans R.' },
            { question: 'La période propre d\'un circuit LC dépend de...', options: ['R uniquement', 'L et C', 'La tension', 'La température'], correct: 1, explanation: 'T₀ = 2π√(LC). Seules L et C comptent.' },
            { question: 'À la résonance, l\'impédance du circuit RLC série est...', options: ['Maximale', 'Minimale (= R)', 'Nulle', 'Infinie'], correct: 1, explanation: 'Z = R (minimale) et l\'intensité est maximale.' }
        ],
        relatedSimulations: ['pts-rc', 'pts-oscillations-meca']
    },

    'pts-oscillations-meca': {
        title: '⏱️ Oscillations Mécaniques',
        description: 'Pendule et ressort',
        type: 'pts-oscillations-meca',
        image: '/simulations/physique-ts/oscillations-mecaniques.png',
        level: 'Terminale S',
        subject: 'Physique',
        config: {},
        analogy: {
            title: 'La Balançoire du Parc',
            content: `Le pendule et le ressort sont les cousins mécaniques du circuit LC ! ⏱️

PENDULE SIMPLE : Une bille au bout d'un fil.
Si tu l'écartes et lâches, elle oscille.
LA PÉRIODE NE DÉPEND PAS DE LA MASSE ! (Incroyable !)
Seulement de la longueur du fil et de g.

RESSORT : Une masse attachée à un ressort.
Tu tires, tu lâches, ça oscille.
Le ressort ramène toujours vers le centre (force de rappel).

CONSERVATION DE L'ÉNERGIE :
En haut : beaucoup d'Ep, peu d'Ec (lent)
En bas : beaucoup d'Ec, peu d'Ep (rapide)
Total constant (si pas de frottement) !`
        },
        theory: `Oscillations Mécaniques Libres

1. PENDULE ÉLASTIQUE (Ressort)
Masse m, ressort de raideur k
Force de rappel : F = -kx

Équation : m(d²x/dt²) + kx = 0

Période : T₀ = 2π√(m/k)
Pulsation : ω₀ = √(k/m)

2. PENDULE PESANT SIMPLE
Masse m, fil de longueur l
Petites oscillations seulement !

Équation : (d²θ/dt²) + (g/l)θ = 0

Période : T₀ = 2π√(l/g)
Indépendante de la masse !

3. ÉNERGIE MÉCANIQUE
Em = Ec + Ep = constante (sans frottement)

Ressort : Ep = ½kx²
Pendule : Ep = mgh

ISOCHRONISME :
La période ne dépend pas de l'amplitude (petites oscillations).`,
        exercises: [
            { question: 'La période du pendule simple dépend de...', options: ['La masse', 'La longueur et g', 'L\'amplitude', 'La couleur'], correct: 1, explanation: 'T = 2π√(l/g). La masse n\'intervient pas !' },
            { question: 'Si on double la masse attachée au ressort, la période...', options: ['Double', 'Est multipliée par √2', 'Reste constante', 'Est divisée par 2'], correct: 1, explanation: 'T = 2π√(m/k). Si m × 2, alors √m × √2, donc T × √2.' },
            { question: 'Au point le plus bas du pendule, l\'énergie potentielle est...', options: ['Maximale', 'Minimale', 'Nulle', 'Égale à Ec'], correct: 2, explanation: 'On prend h = 0 en bas, donc Ep = 0 et Ec est maximale.' }
        ],
        relatedSimulations: ['pts-oscillations-lc', 'kinetic-potential-energy']
    },

    'pts-interferences': {
        title: '🌈 Interférences Lumineuses',
        description: 'Fentes de Young et diffraction',
        type: 'pts-interferences',
        image: '/simulations/physique-ts/interferences.png',
        level: 'Terminale S',
        subject: 'Physique',
        config: {},
        analogy: {
            title: 'Les Vagues qui se Rencontrent',
            content: `Quand deux vagues se croisent, c'est magique ! 🌊

INTERFÉRENCE CONSTRUCTIVE :
Deux sommets de vague se rencontrent → SUPER vague (plus haute) !
Comme deux amis qui poussent la même porte ensemble.

INTERFÉRENCE DESTRUCTIVE :
Un sommet rencontre un creux → Ils s'annulent (eau plate) !
Comme pousser et tirer la porte en même temps.

FENTES DE YOUNG :
La lumière passe par deux fentes.
Sur l'écran : des bandes brillantes (constructif) et sombres (destructif).
C'est LA preuve que la lumière est une onde !

La lumière rouge fait des bandes plus espacées que le bleu.`
        },
        theory: `Interférences Lumineuses

1. CONDITIONS D'INTERFÉRENCE
Sources COHÉRENTES nécessaires :
- Même fréquence
- Déphasage constant

Obtenues par division du front d'onde (fentes de Young)

2. DIFFÉRENCE DE MARCHE δ
δ = d₂ - d₁ (différence des chemins)

Constructive (brillant) : δ = kλ
Destructive (sombre) : δ = (k + ½)λ

3. INTERFRANGE i
Distance entre deux franges brillantes consécutives :

i = λD/a

λ = longueur d'onde
D = distance fentes-écran
a = écart entre les fentes

Plus a petit → i grand (franges espacées)
Plus λ grand (rouge) → i grand

4. LUMIÈRE BLANCHE
Franges irisées (couleurs)
Frange centrale blanche
Le rouge plus étalé que le bleu`,
        exercises: [
            { question: 'Si on écarte les fentes (a augmente), l\'interfrange...', options: ['Augmente', 'Diminue', 'Reste constant', 'Disparaît'], correct: 1, explanation: 'i = λD/a. Si a augmente, i diminue (franges plus serrées).' },
            { question: 'Pour une interférence constructive, la différence de marche doit être...', options: ['λ/2', 'kλ (entier)', '0 uniquement', 'Infinie'], correct: 1, explanation: 'δ = kλ avec k entier (0, 1, 2, 3...) donne un maximum de lumière.' },
            { question: 'L\'expérience de Young prouve que la lumière est...', options: ['Une particule', 'Une onde', 'De la chaleur', 'Invisible'], correct: 1, explanation: 'Les interférences sont caractéristiques du comportement ondulatoire.' }
        ],
        relatedSimulations: ['wave-interference', 'diffraction-light']
    },

    // === PARTIE 4 : PHÉNOMÈNES CORPUSCULAIRES ===

    'pts-photoelectrique': {
        title: '💡 Effet Photoélectrique',
        description: 'Photons et dualité onde-corpuscule',
        type: 'pts-photoelectrique',
        image: '/simulations/physique-ts/photoelectrique.png',
        level: 'Terminale S',
        subject: 'Physique',
        config: {},
        analogy: {
            title: 'Les Billes de Lumière',
            content: `Einstein a montré que la lumière est aussi faite de petits grains d'énergie : les PHOTONS ! 💡

Imagine que tu bombardes une plaque de métal avec des billes (photons).
Si les billes sont assez énergétiques, elles éjectent des électrons du métal !

SEUIL DE FRÉQUENCE :
Des billes molles (rouge, infrarouge) ne font rien.
Des billes dures (bleu, UV) arrachent les électrons !

Ce qui compte, c'est l'ÉNERGIE de chaque photon (E = hν), pas le nombre.
Tu peux envoyer des milliards de photons rouges : rien ne se passe !
Mais UN SEUL photon UV peut éjecter un électron.

C'est pour ça qu'Einstein a eu le Nobel !`
        },
        theory: `Effet Photoélectrique

1. OBSERVATION
Émission d'électrons par un métal éclairé
Ne se produit que si ν > ν₀ (fréquence seuil)
L'intensité lumineuse n'a pas d'effet sur le seuil

2. INTERPRÉTATION D'EINSTEIN (1905)
La lumière = flux de PHOTONS
Énergie d'un photon : E = hν = hc/λ

h = 6,63 × 10⁻³⁴ J.s (constante de Planck)

3. BILAN ÉNERGÉTIQUE
hν = W₀ + Ec,max

hν : Énergie du photon incident
W₀ : Travail d'extraction (énergie pour sortir l'e⁻)
Ec : Énergie cinétique de l'électron éjecté

4. DUALITÉ ONDE-CORPUSCULE
La lumière se comporte comme :
- Une onde (interférences, diffraction)
- Des particules (effet photoélectrique)

Relation de De Broglie : λ = h/p`,
        exercises: [
            { question: 'L\'énergie d\'un photon dépend de...', options: ['Son intensité', 'Sa vitesse', 'Sa fréquence', 'Sa masse'], correct: 2, explanation: 'E = hν. Plus la fréquence est grande, plus le photon est énergétique.' },
            { question: 'Quel rayonnement a les photons les plus énergétiques ?', options: ['Infrarouge', 'Lumière rouge', 'Lumière bleue', 'Ultraviolet'], correct: 3, explanation: 'UV a la fréquence la plus élevée → photons les plus énergétiques.' },
            { question: 'Si on augmente l\'intensité lumineuse (plus de photons), on augmente...', options: ['L\'énergie des électrons', 'Le nombre d\'électrons éjectés', 'La fréquence seuil', 'Le travail d\'extraction'], correct: 1, explanation: 'Plus d\'intensité = plus de photons = plus d\'électrons éjectés (mais même énergie chacun).' }
        ],
        relatedSimulations: ['pts-niveaux-energie', 'quantum-mechanics']
    },

    'pts-niveaux-energie': {
        title: '🔬 Niveaux d\'Énergie de l\'Atome',
        description: 'Spectres et modèle de Bohr',
        type: 'pts-niveaux-energie',
        image: '/simulations/physique-ts/niveaux-energie.png',
        level: 'Terminale S',
        subject: 'Physique',
        config: {},
        analogy: {
            title: 'L\'Ascenseur de l\'Électron',
            content: `L'électron ne peut pas être n'importe où : il habite à des ÉTAGES précis ! 🏢

NIVEAUX D'ÉNERGIE : Comme un immeuble avec des étages.
- E₁ (RDC) : Niveau fondamental (le plus stable)
- E₂, E₃... (étages) : États excités

ABSORPTION : L'électron reçoit un photon et monte d'un étage.
Mais il faut EXACTEMENT l'énergie correspondante !
Si tu lui donnes trop ou pas assez, il refuse.

ÉMISSION : L'électron redescend et libère un photon.
La couleur du photon dépend de la hauteur de la chute.
Grand saut → photon bleu/violet (énergétique)
Petit saut → photon rouge (moins énergétique)

SPECTRE DE RAIES : Chaque élément a sa signature unique !`
        },
        theory: `Niveaux d'Énergie de l'Atome

1. QUANTIFICATION
Les électrons ne peuvent occuper que certains niveaux discrets :
E₁ < E₂ < E₃ < ... < E∞ = 0 (ionisation)

Niveau fondamental : E₁ (le plus bas)
États excités : E₂, E₃, ...

2. TRANSITIONS

Absorption : atome absorbe un photon
L'électron monte : hν = Ehaut - Ebas

Émission : atome émet un photon
L'électron descend : hν = Ehaut - Ebas

3. SPECTRES DE RAIES

Émission : raies colorées sur fond noir
(Gaz chaud qui rayonne)

Absorption : raies noires sur fond coloré
(Gaz froid traversé par lumière blanche)

Signature UNIQUE de chaque élément !

4. ATOME D'HYDROGÈNE
Série de Balmer (visible) : transitions vers n = 2
En = -13,6/n² eV (formule de Bohr)

5. APPLICATIONS
Laser : Émission stimulée
Spectroscopie : Identification des éléments`,
        exercises: [
            { question: 'Si un photon a une énergie différente de ΔE entre deux niveaux, l\'atome...', options: ['L\'absorbe quand même', 'L\'ignore (le photon passe)', 'Explose', 'Change de couleur'], correct: 1, explanation: 'Quantification : l\'atome n\'accepte que l\'énergie exacte.' },
            { question: 'Le niveau fondamental est...', options: ['Le plus haut', 'Le plus bas', 'Toujours excité', 'Ionisé'], correct: 1, explanation: 'E₁ est le niveau d\'énergie le plus bas, le plus stable.' },
            { question: 'Un spectre d\'émission présente...', options: ['Des raies noires sur fond coloré', 'Des raies colorées sur fond noir', 'Un arc-en-ciel continu', 'Rien de visible'], correct: 1, explanation: 'Gaz chaud = raies brillantes sur fond noir.' }
        ],
        relatedSimulations: ['pts-photoelectrique', 'pts-nucleaire']
    },

    'pts-nucleaire': {
        title: '☢️ Réactions Nucléaires',
        description: 'Fission, fusion et radioactivité',
        type: 'pts-nucleaire',
        image: '/simulations/physique-ts/nucleaire.png',
        level: 'Terminale S',
        subject: 'Physique',
        config: {},
        analogy: {
            title: 'Casser ou Coller les Noyaux',
            content: `Au cœur de l'atome, une énergie colossale est cachée ! ☢️

FISSION : On CASSE un gros noyau (Uranium).
Comme briser une grosse bille en deux.
Ça libère de l'énergie + des neutrons qui cassent d'autres noyaux.
Réaction en chaîne → Centrale nucléaire (contrôlée) ou Bombe A (pas contrôlée).

FUSION : On COLLE des petits noyaux (Hydrogène → Hélium).
C'est ce que fait le Soleil !
Ça libère ENCORE PLUS d'énergie que la fission.
Mais il faut des millions de degrés (difficile à faire sur Terre).

E = mc² : Une toute petite masse perdue = ÉNORME énergie libérée.`
        },
        theory: `Réactions Nucléaires

1. LE NOYAU
Nucléons = Protons (Z) + Neutrons (N)
Notation : ᴬ_Z X avec A = Z + N
Isotopes : même Z, A différent

2. RADIOACTIVITÉ (Désintégration spontanée)

Alpha (α) : émission de ⁴₂He
  ᴬ_Z X → ᴬ⁻⁴_{Z-2} Y + ⁴₂He

Bêta moins (β⁻) : n → p + e⁻
  ᴬ_Z X → ᴬ_{Z+1} Y + e⁻

Bêta plus (β⁺) : p → n + e⁺

Gamma (γ) : désexcitation (photon)

Loi de décroissance : N(t) = N₀ e^(-λt)
Demi-vie : t₁/₂ = ln(2)/λ

3. FISSION
Noyau lourd → 2 noyaux moyens + neutrons
²³⁵U + n → produits + 2-3 n + ÉNERGIE
Réaction en chaîne (centrales, bombe A)

4. FUSION
2 noyaux légers → 1 noyau + ÉNERGIE
²H + ³H → ⁴He + n
Libère plus que la fission (Soleil, bombe H)

5. DÉFAUT DE MASSE
ΔE = Δm × c²
La masse perdue devient énergie`,
        exercises: [
            { question: 'Lors d\'une désintégration alpha, le noyau émet...', options: ['Un électron', 'Un noyau d\'hélium', 'Un neutron', 'Un photon'], correct: 1, explanation: 'La particule α est un noyau d\'hélium (2 protons, 2 neutrons).' },
            { question: 'La fusion se produit naturellement dans...', options: ['Les centrales nucléaires', 'Le Soleil', 'Les bombes A', 'Les réacteurs à fission'], correct: 1, explanation: 'Le Soleil fusionne l\'hydrogène en hélium depuis 5 milliards d\'années.' },
            { question: 'Si la demi-vie est 10 ans, après 20 ans, il reste...', options: ['0%', '25%', '50%', '75%'], correct: 1, explanation: 'Après 10 ans : 50%. Après 20 ans : 25% (moitié de 50%).' }
        ],
        relatedSimulations: ['pts-niveaux-energie', 'radioactivity']
    },

    // ========================================
    // CHIMIE TERMINALE S - SIMULATIONS
    // ========================================

    'cts-alcools': {
        title: '🧪 Alcools et Oxydation',
        description: 'Oxydation ménagée des alcools primaires, secondaires et tertiaires',
        type: 'cts-alcools',
        image: '/simulations/chimie-ts/alcools.png',
        level: 'Terminale S',
        subject: 'Chimie',
        config: {},
        analogy: {
            title: 'Du Vin au Vinaigre',
            content: `L'oxydation des alcools, c'est comme la transformation du vin en vinaigre ! 🍷→🫗

Alcool Primaire (R-CH₂-OH) : Comme un couloir avec une issue.
→ Aldéhyde → Acide carboxylique

Alcool Secondaire (R-CHOH-R') : Comme une pièce avec deux portes.
→ Cétone (et ça s'arrête là !)

Alcool Tertiaire (R₃C-OH) : Comme une pièce fermée.
→ PAS DE RÉACTION ! Trop encombré.

Le KMnO₄ (violet) est l'oxydant qui "brûle" les alcools.`
        },
        theory: `Oxydation Ménagée des Alcools

1. CLASSES D'ALCOOLS
Le carbone porteur du groupe OH peut être lié à 1, 2 ou 3 autres carbones.

- Primaire : R-CH₂-OH (1 C voisin)
- Secondaire : R-CHOH-R' (2 C voisins)
- Tertiaire : R₃C-OH (3 C voisins)

2. OXYDATION
Oxydant : KMnO₄ ou K₂Cr₂O₇ en milieu acide.

Alcool I → Aldéhyde → Acide Carboxylique
Alcool II → Cétone
Alcool III → Pas de réaction

3. TESTS
- 2,4-DNPH : Positif pour Aldéhydes et Cétones
- Liqueur de Fehling : Positif UNIQUEMENT pour Aldéhydes`,
        exercises: [
            { question: 'Que donne l\'oxydation d\'un alcool secondaire ?', options: ['Un aldéhyde', 'Une cétone', 'Un acide carboxylique', 'Pas de réaction'], correct: 1, explanation: 'L\'alcool secondaire donne une cétone car il n\'y a plus d\'hydrogène sur le carbone fonctionnel.' },
            { question: 'Quel test distingue un aldéhyde d\'une cétone ?', options: ['2,4-DNPH', 'Liqueur de Fehling', 'Papier pH', 'Flamme'], correct: 1, explanation: 'La liqueur de Fehling donne un précipité rouge uniquement avec les aldéhydes.' }
        ],
        relatedSimulations: ['cts-acides-carbo', 'cts-amines']
    },

    'cts-amines': {
        title: '🔬 Amines et Propriétés',
        description: 'Structure et caractère basique des amines',
        type: 'cts-amines',
        image: '/simulations/chimie-ts/amines.png',
        level: 'Terminale S',
        subject: 'Chimie',
        config: {},
        analogy: {
            title: 'L\'odeur du Poisson',
            content: `Les amines sont responsables de l'odeur caractéristique du poisson ! 🐟

Dérivées de l'ammoniac (NH₃), où des H sont remplacés par des groupes alkyles.

- Primaire : R-NH₂ (1 remplacement)
- Secondaire : R-NH-R' (2 remplacements)
- Tertiaire : R₃N (3 remplacements)

Le DOUBLET NON-LIANT sur l'azote est la clé :
→ Caractère BASIQUE : Capte les H⁺
→ Caractère NUCLÉOPHILE : Attaque les centres positifs

Phénolphtaléine → ROSE dans une solution d'amine !`
        },
        theory: `Amines

1. STRUCTURE
Dérivés de NH₃ par remplacement des H par des groupes alkyles.

- Primaire : R-NH₂
- Secondaire : R-NH-R'
- Tertiaire : R-N(R')(R'')

2. PROPRIÉTÉS
Le doublet libre de l'azote confère :

Caractère basique :
R-NH₂ + H₂O ⇌ R-NH₃⁺ + HO⁻

Caractère nucléophile :
Réaction avec les dérivés halogénés (Alkylation d'Hofmann).

3. GÉOMÉTRIE
Azote trigonal pyramidal (forme de parasol).
Angle de liaison ≈ 107°`,
        exercises: [
            { question: 'Pourquoi les amines sont-elles basiques ?', options: ['À cause des liaisons C-H', 'À cause du doublet non liant de N', 'À cause de leur masse', 'À cause du carbone'], correct: 1, explanation: 'Le doublet non liant peut capter un proton H⁺.' },
            { question: 'Quelle est la géométrie autour de l\'azote ?', options: ['Plane', 'Linéaire', 'Pyramidale', 'Tétraédrique'], correct: 2, explanation: 'Le doublet non liant repousse les liaisons, créant une forme pyramidale.' }
        ],
        relatedSimulations: ['cts-alcools', 'cts-acides-amines']
    },

    'cts-acides-carbo': {
        title: '⚗️ Estérification',
        description: 'Réaction acide carboxylique + alcool → ester + eau',
        type: 'cts-acides-carbo',
        image: '/simulations/chimie-ts/esterification.png',
        level: 'Terminale S',
        subject: 'Chimie',
        config: {},
        analogy: {
            title: 'La Fabrique de Parfums',
            content: `Les esters donnent les odeurs fruitées des parfums ! 🌸

ACIDE + ALCOOL ⇌ ESTER + EAU

C'est une réaction :
- LENTE (peut durer des heures)
- LIMITÉE (équilibre, rendement ≈ 67%)
- ATHERMIQUE (pas de dégagement de chaleur)

Pour accélérer : Catalyseur H₂SO₄ + Chauffage
Pour rendre totale : Utiliser un chlorure d'acyle ou un anhydride !

Nom des esters : "Alcanoate d'alkyle"
Ex: Éthanoate d'éthyle (parfum de banane)`
        },
        theory: `Estérification et Hydrolyse

1. RÉACTION D'ESTÉRIFICATION
Acide carboxylique + Alcool ⇌ Ester + Eau

Caractéristiques :
- Lente
- Limitée (équilibre)
- Athermique

2. CATALYSE
H₂SO₄ concentré : Accélère sans modifier l'équilibre.
Chauffage : Augmente la vitesse.

3. DÉPLACEMENT D'ÉQUILIBRE
- Excès d'un réactif
- Élimination d'un produit (distillation de l'eau)
- Utilisation d'anhydride ou chlorure d'acyle (réaction totale)

4. SAPONIFICATION
Ester + Base forte → Savon + Alcool
Réaction TOTALE (pas d'équilibre)`,
        exercises: [
            { question: 'Comment rendre l\'estérification totale ?', options: ['Chauffer', 'Ajouter de l\'eau', 'Utiliser un chlorure d\'acyle', 'Refroidir'], correct: 2, explanation: 'Les chlorures d\'acyle réagissent totalement et rapidement.' },
            { question: 'L\'estérification est-elle exothermique ?', options: ['Oui', 'Non, athermique', 'Endothermique', 'Variable'], correct: 1, explanation: 'La réaction n\'échange pas de chaleur avec l\'extérieur.' }
        ],
        relatedSimulations: ['cts-alcools', 'cts-cinetique']
    },

    'cts-acides-amines': {
        title: '🔬 Acides Aminés et Chiralité',
        description: 'Structure des acides α-aminés et stéréochimie',
        type: 'cts-acides-amines',
        image: '/simulations/chimie-ts/acides-amines.png',
        level: 'Terminale S',
        subject: 'Chimie',
        config: {},
        analogy: {
            title: 'Les Briques de la Vie',
            content: `Les acides aminés sont les LEGO du vivant ! 🧬

Structure : NH₂-CHR-COOH
- Un côté ACIDE (COOH)
- Un côté AMINE (NH₂)
- Au milieu : le carbone α (asymétrique*)

*Asymétrique = 4 groupes différents = CHIRALITÉ
Comme tes mains : L (gauche) et D (droite), non superposables !

Dans le corps : TOUS les acides aminés sont de type L.
C'est la signature du vivant !

Zwitterion : NH₃⁺-CHR-COO⁻ (double charge)`
        },
        theory: `Acides α-aminés

1. STRUCTURE
R-CH(NH₂)-COOH
Le carbone α porte 4 groupes différents (sauf Glycine).

2. CHIRALITÉ
Carbone asymétrique → Deux énantiomères (L et D).
Représentation de Fischer.
Acides aminés naturels = série L.

3. PROPRIÉTÉS ACIDO-BASIQUES
Zwitterion (Amphion) : R-CH(NH₃⁺)-COO⁻
- Ampholyte : Peut être acide ET base
- Point isoélectrique (pHi) : Charge globale nulle

4. LIAISON PEPTIDIQUE
COOH + NH₂ → CO-NH + H₂O
Formation des protéines`,
        exercises: [
            { question: 'Qu\'est-ce qu\'un carbone asymétrique ?', options: ['Porteur de 4 groupes identiques', 'Porteur de 4 groupes différents', 'Un carbone terminal', 'Un carbone avec double liaison'], correct: 1, explanation: 'C\'est la condition pour avoir une molécule chirale.' },
            { question: 'Les acides aminés naturels sont de série...', options: ['D', 'L', 'DL', 'Aucune'], correct: 1, explanation: 'C\'est une signature du vivant terrestre.' }
        ],
        relatedSimulations: ['cts-amines', 'cts-ph']
    },

    'cts-cinetique': {
        title: '⏱️ Cinétique Chimique',
        description: 'Vitesse de réaction, facteurs cinétiques et t½',
        type: 'cts-cinetique',
        image: '/simulations/chimie-ts/cinetique.png',
        level: 'Terminale S',
        subject: 'Chimie',
        config: {},
        analogy: {
            title: 'La Course des Réactifs',
            content: `Certaines réactions sont des sprinters, d'autres des marathoniens ! 🏃

VITESSE DE RÉACTION = Combien de produit se forme par seconde.

Facteurs qui ACCÉLÈRENT :
1. TEMPÉRATURE ↑ : Les molécules bougent plus vite, se cognent plus fort.
2. CONCENTRATION ↑ : Plus de molécules = plus de chocs.
3. CATALYSEUR : Un raccourci qui facilite la réaction.

TEMPS DE DEMI-RÉACTION (t½) :
Temps pour atteindre 50% de l'avancement final.
C'est comme le "mi-temps" de la réaction !`
        },
        theory: `Cinétique Chimique

1. VITESSE DE RÉACTION
v = (1/V) × (dx/dt)
C'est la pente de la tangente à la courbe x(t).

2. FACTEURS CINÉTIQUES
- Température : Énergie des chocs
- Concentration : Fréquence des chocs
- Catalyseur : Abaisse l'énergie d'activation

3. TEMPS DE DEMI-RÉACTION
t½ : Durée pour x = xmax/2

4. MÉTHODES DE SUIVI
- Titrage (prélèvements)
- Spectrophotométrie (couleur)
- Pressiométrie (gaz)
- Conductimétrie (ions)

Trempe : Refroidissement brutal pour stopper la réaction.`,
        exercises: [
            { question: 'Comment évolue la vitesse au cours du temps ?', options: ['Elle augmente', 'Elle reste constante', 'Elle diminue', 'Elle oscille'], correct: 2, explanation: 'La concentration des réactifs diminue, donc la vitesse aussi.' },
            { question: 'Un catalyseur modifie-t-il l\'équilibre ?', options: ['Oui', 'Non', 'Parfois', 'Dépend de la température'], correct: 1, explanation: 'Le catalyseur accélère mais ne change pas les proportions finales.' }
        ],
        relatedSimulations: ['cts-acides-carbo', 'cts-ph']
    },

    'cts-ph': {
        title: '🧪 pH et Autoprotolyse',
        description: 'Définition du pH et produit ionique de l\'eau',
        type: 'cts-ph',
        image: '/simulations/chimie-ts/ph-eau.png',
        level: 'Terminale S',
        subject: 'Chimie',
        config: {},
        analogy: {
            title: 'L\'Échelle de l\'Acidité',
            content: `Le pH mesure l'acidité comme un thermomètre mesure la température ! 🌡️

Échelle de 0 à 14 :
- pH < 7 : ACIDE (citron, vinaigre)
- pH = 7 : NEUTRE (eau pure)
- pH > 7 : BASIQUE (savon, javel)

L'EAU S'IONISE ELLE-MÊME :
2H₂O ⇌ H₃O⁺ + HO⁻

Produit ionique : Ke = [H₃O⁺][HO⁻] = 10⁻¹⁴ (à 25°C)

pH = -log[H₃O⁺]
Si [H₃O⁺] = 10⁻³ mol/L → pH = 3`
        },
        theory: `pH et Autoprotolyse de l'eau

1. AUTOPROTOLYSE
2H₂O ⇌ H₃O⁺ + HO⁻

Produit ionique : Ke = [H₃O⁺][HO⁻] = 10⁻¹⁴ (à 25°C)

2. DÉFINITION DU pH
pH = -log[H₃O⁺]
[H₃O⁺] = 10⁻ᵖᴴ

3. MILIEUX
- Acide : pH < 7, [H₃O⁺] > [HO⁻]
- Neutre : pH = 7, [H₃O⁺] = [HO⁻]
- Basique : pH > 7, [H₃O⁺] < [HO⁻]

4. INDICATEURS COLORÉS
Couples acide-base avec formes colorées différentes.
Zone de virage autour du pKa de l'indicateur.`,
        exercises: [
            { question: 'Si [H₃O⁺] = 10⁻⁵ mol/L, quel est le pH ?', options: ['5', '-5', '9', '7'], correct: 0, explanation: 'pH = -log(10⁻⁵) = 5' },
            { question: 'Ke dépend de...', options: ['La concentration', 'Le volume', 'La température', 'Le pH'], correct: 2, explanation: 'Ke augmente avec la température.' }
        ],
        relatedSimulations: ['cts-acides-forts', 'cts-acides-faibles']
    },

    'cts-acides-forts': {
        title: '💧 Acides et Bases Forts',
        description: 'Réactions totales avec l\'eau, dosages',
        type: 'cts-acides-forts',
        image: '/simulations/chimie-ts/acides-forts.png',
        level: 'Terminale S',
        subject: 'Chimie',
        config: {},
        analogy: {
            title: 'Les Brutes de la Chimie',
            content: `Les acides et bases FORTS ne font pas dans la dentelle ! 💥

ACIDE FORT (HCl, HNO₃) :
"Je donne TOUS mes H⁺ à l'eau, sans négocier !"
HCl + H₂O → H₃O⁺ + Cl⁻ (Réaction TOTALE)
pH = -log C

BASE FORTE (NaOH, KOH) :
"Je prends TOUS les H⁺ de l'eau !"
NaOH → Na⁺ + HO⁻ (Dissociation TOTALE)
pH = 14 + log C

Attention : Très corrosifs ! Toujours verser l'acide dans l'eau.`
        },
        theory: `Acides et Bases Forts

1. ACIDE FORT
Réaction totale avec l'eau.
HA + H₂O → H₃O⁺ + A⁻

pH = -log C (si C > 10⁻⁶ mol/L)

Exemples : HCl, HNO₃, H₂SO₄

2. BASE FORTE
Dissociation totale.
BOH → B⁺ + HO⁻

pH = 14 + log C

Exemples : NaOH, KOH

3. DOSAGE ACIDE FORT / BASE FORTE
À l'équivalence : pH = 7 (à 25°C)
Saut de pH brutal (pente verticale).
Relation : CaVa = CbVb`,
        exercises: [
            { question: 'pH d\'une solution de HCl à 10⁻² mol/L ?', options: ['2', '12', '7', '-2'], correct: 0, explanation: 'pH = -log(10⁻²) = 2' },
            { question: 'pH d\'une solution de NaOH à 10⁻³ mol/L ?', options: ['3', '11', '7', '14'], correct: 1, explanation: 'pH = 14 + log(10⁻³) = 14 - 3 = 11' }
        ],
        relatedSimulations: ['cts-ph', 'cts-acides-faibles']
    },

    'cts-acides-faibles': {
        title: '⚖️ Acides Faibles et Ka',
        description: 'Équilibres acido-basiques et Henderson-Hasselbalch',
        type: 'cts-acides-faibles',
        image: '/simulations/chimie-ts/acides-faibles.png',
        level: 'Terminale S',
        subject: 'Chimie',
        config: {},
        analogy: {
            title: 'Le Partage des H⁺',
            content: `Les acides FAIBLES partagent leurs H⁺ à contrecœur ! ⚖️

AH + H₂O ⇌ A⁻ + H₃O⁺

C'est un ÉQUILIBRE, pas une réaction totale.
Certaines molécules gardent leur H⁺, d'autres le donnent.

Ka = [A⁻][H₃O⁺] / [AH]
pKa = -log Ka

Plus Ka est grand (pKa petit) → Plus l'acide est fort.

FORMULE MAGIQUE (Henderson-Hasselbalch) :
pH = pKa + log([A⁻]/[AH])

Si pH = pKa → [Acide] = [Base conjuguée] !`
        },
        theory: `Acides et Bases Faibles

1. ÉQUILIBRE CHIMIQUE
AH + H₂O ⇌ A⁻ + H₃O⁺

Constante d'acidité :
Ka = [A⁻][H₃O⁺] / [AH]
pKa = -log Ka

2. RELATION D'HENDERSON-HASSELBALCH
pH = pKa + log([Base]/[Acide])

3. DOMAINES DE PRÉDOMINANCE
Si pH < pKa : L'acide AH prédomine
Si pH > pKa : La base A⁻ prédomine
Si pH = pKa : [AH] = [A⁻]

4. CLASSIFICATION
Plus le pKa est petit, plus l'acide est fort.
L'eau est ampholyte : H₃O⁺/H₂O et H₂O/HO⁻`,
        exercises: [
            { question: 'Si pH = pKa, que vaut le rapport [A⁻]/[AH] ?', options: ['0', '1', '10', '100'], correct: 1, explanation: 'log(1) = 0, donc pH = pKa.' },
            { question: 'Un acide avec pKa = 2 est-il plus fort qu\'un acide avec pKa = 5 ?', options: ['Oui', 'Non', 'Égaux', 'Impossible à dire'], correct: 0, explanation: 'pKa petit = Ka grand = acide fort.' }
        ],
        relatedSimulations: ['cts-acides-forts', 'cts-tampon']
    },

    'cts-tampon': {
        title: '🧪 Solutions Tampons',
        description: 'Effet tampon et stabilité du pH',
        type: 'cts-tampon',
        image: '/simulations/chimie-ts/tampon.png',
        level: 'Terminale S',
        subject: 'Chimie',
        config: {},
        analogy: {
            title: 'L\'Amortisseur du pH',
            content: `Une solution tampon, c'est comme un amortisseur pour le pH ! 🛡️

Elle résiste aux variations de pH quand on ajoute un peu d'acide ou de base.

COMPOSITION :
Acide faible + Sa base conjuguée (en quantités équimolaires)
Ex: CH₃COOH + CH₃COO⁻

FONCTIONNEMENT :
- Si on ajoute H⁺ → La base A⁻ les capture : A⁻ + H⁺ → AH
- Si on ajoute OH⁻ → L'acide réagit : AH + OH⁻ → A⁻ + H₂O

Le pH ne bouge presque pas !
C'est vital pour le sang (pH ≈ 7.4 très stable).`
        },
        theory: `Solutions Tampons

1. DÉFINITION
Solution dont le pH varie peu par :
- Dilution modérée
- Ajout modéré d'acide ou de base forte

2. COMPOSITION
Mélange d'un acide faible et de sa base conjuguée.
Concentrations proches (rapport entre 0.1 et 10).

3. MÉCANISME
Ajout d'acide : A⁻ + H₃O⁺ → AH + H₂O
Ajout de base : AH + HO⁻ → A⁻ + H₂O

Les réserves d'AH et A⁻ "absorbent" les perturbations.

4. pH DU TAMPON
pH = pKa (si [AH] = [A⁻])

5. APPLICATIONS
- Sang : Tampon H₂CO₃/HCO₃⁻
- Industrie : Fermentation, galvanoplastie`,
        exercises: [
            { question: 'Un tampon contient...', options: ['Acide fort + Base forte', 'Acide faible + Base conjuguée', 'Eau pure', 'Sel neutre'], correct: 1, explanation: 'C\'est la définition d\'un tampon.' },
            { question: 'Pourquoi le pH du sang est-il stable ?', options: ['Car il est dilué', 'Grâce au tampon HCO₃⁻/H₂CO₃', 'Car il est chaud', 'Car il circule'], correct: 1, explanation: 'Le système bicarbonate maintient le pH à 7.4.' }
        ],
        relatedSimulations: ['cts-acides-faibles', 'cts-ph']
    }

};

export default lyceeSimulationsData;

