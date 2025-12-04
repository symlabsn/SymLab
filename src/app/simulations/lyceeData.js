// Données détaillées des simulations du Lycée avec analogies sénégalaises
// Couvre Seconde, Première et Terminale (Séries S, L)

export const lyceeSimulationsData = {
    // ========== SECONDE ==========
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
        description: 'Construisez et visualisez des molécules en 3D',
        type: 'water',
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
        title: 'Division Cellulaire (Mitose)',
        description: 'Observez les étapes de la mitose en temps réel',
        type: 'cell',
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
        type: 'water-cycle',
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
        type: 'circuit',
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
        title: 'Dosage Acide-Base',
        description: 'Réalisez un titrage virtuel avec indicateurs colorés',
        type: 'water',
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
        type: 'atom', // À adapter
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
        type: 'atom', // À adapter
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
        type: 'atom', // À adapter
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
    }
};

export default lyceeSimulationsData;
