// Simulations PC 3e - Programme Physique-Chimie 3ème Sénégal
// 11 simulations interactives et immersives

export const pc3eSimulationsData = {
    // ========================================
    // PHYSIQUE - 7 SIMULATIONS
    // ========================================

    'lens-optics-3e': {
        title: 'Lentilles Minces',
        description: 'Explorez lentilles convergentes et divergentes, foyer et images',
        type: 'lens-optics',
        config: {
            focalLength: 10,
            objectDistance: 20,
            lensType: 'convergent'
        },
        analogy: {
            title: 'La Lentille comme un Vendeur de Lunettes à Sandaga',
            content: `Les lentilles, c'est comme choisir des lunettes au marché Sandaga ! 🔍

Lentille CONVERGENTE (loupe, lunettes pour hypermétropes) :
- Elle est bombée au milieu, plus épaisse au centre
- Elle fait converger les rayons vers un point (le foyer)
- Comme quand le vendeur te montre une loupe pour grossir le texte !

Lentille DIVERGENTE (lunettes pour myopes) :
- Elle est creuse au milieu, plus fine au centre  
- Elle écarte les rayons de lumière
- Comme quand on regarde à travers le fond d'une bouteille d'eau

Le FOYER (F) est le point où tous les rayons se rencontrent.
Plus la distance focale est petite, plus la lentille est puissante !

🎓 Règle des rayons :
1. Un rayon passant par le centre O n'est PAS dévié
2. Un rayon parallèle à l'axe passe par le foyer F'
3. Un rayon passant par F ressort parallèle`
        },
        theory: `Lentilles Minces - Optique Géométrique

Types de Lentilles

Lentille Convergente
- Plus épaisse au centre
- Fait converger les rayons parallèles
- Note : forme de lentille de haricot ( )
- Exemples : loupe, œil, appareil photo

Lentille Divergente
- Plus fine au centre  
- Fait diverger les rayons parallèles
- Note : forme de sablier ) (
- Exemples : judas de porte, correction myopie

Éléments Caractéristiques

Centre Optique (O)
- Point central de la lentille
- Rayon passant par O non dévié

Axe Optique
- Droite passant par O, perpendiculaire à la lentille

Foyers (F et F')
- F : Foyer objet (côté objet)
- F' : Foyer image (côté image)
- Position symétrique par rapport à O

Distance Focale (f)
- Distance OF = OF' = f
- En mètres (m)
- Positive pour convergente, négative pour divergente

Vergence (C)
C = 1/f (en dioptries, δ)

Construction d'Images

3 Rayons Principaux :
1. Rayon par O → non dévié
2. Rayon parallèle à l'axe → passe par F'
3. Rayon par F → ressort parallèle

Types d'Images :
- Image réelle : peut être projetée sur un écran
- Image virtuelle : ne peut pas être projetée

Formules de Conjugaison

1/OA' = 1/OA + 1/f

Grandissement : γ = A'B'/AB = OA'/OA`,
        exercises: [
            {
                question: 'Quel type de lentille est plus épais au centre ?',
                options: ['Divergente', 'Convergente', 'Les deux', 'Aucune'],
                correct: 1,
                explanation: 'Une lentille convergente est plus épaisse au centre, comme une loupe !'
            },
            {
                question: 'Où se forme l\'image d\'un objet très éloigné avec une lentille convergente ?',
                options: ['Au centre O', 'Au foyer F\'', 'Très loin', 'Nulle part'],
                correct: 1,
                explanation: 'Les rayons parallèles (objet à l\'infini) convergent au foyer image F\'.'
            },
            {
                question: 'Un rayon passant par le centre optique O est :',
                options: ['Dévié vers F', 'Dévié vers F\'', 'Non dévié', 'Réfléchi'],
                correct: 2,
                explanation: 'Le rayon passant par le centre O traverse sans être dévié.'
            }
        ],
        relatedSimulations: ['light-dispersion-3e', 'light-reflection', 'refraction-simulator']
    },

    'light-dispersion-3e': {
        title: 'Dispersion de la Lumière',
        description: 'L\'arc-en-ciel et le prisme : décomposition de la lumière blanche',
        type: 'light-dispersion',
        config: {
            prismAngle: 60,
            showSpectrum: true,
            lightSource: 'white'
        },
        analogy: {
            title: 'L\'Arc-en-ciel comme un Secret de la Lumière',
            content: `La dispersion de la lumière, c'est comme découvrir un secret caché ! 🌈

Après la pluie au Sénégal, regarde le ciel : l'arc-en-ciel apparaît !
C'est parce que les gouttes d'eau agissent comme des millions de petits prismes.

La lumière blanche du Soleil semble incolore, mais en réalité...
Elle contient TOUTES les couleurs mélangées !

Le PRISME (ou les gouttes d'eau) sépare ces couleurs :
🔴 Rouge (dévié le moins)
🟠 Orange
🟡 Jaune
🟢 Vert
🔵 Bleu
🟣 Indigo
🟣 Violet (dévié le plus)

Moyen mnémotechnique : « ROY G. BIV » ou « Richard Of York Gave Battle In Vain »

Pourquoi cette séparation ?
Chaque couleur voyage à une vitesse légèrement différente dans le verre.
Le violet est plus ralenti que le rouge, donc plus dévié !

La lumière d'une seule couleur (laser rouge) ne peut pas être décomposée : elle est MONOCHROMATIQUE.`
        },
        theory: `Dispersion de la Lumière

La Lumière Blanche

Composition
- Mélange de toutes les couleurs visibles
- Longueurs d'onde de 380 nm (violet) à 780 nm (rouge)
- Appelée lumière POLYCHROMATIQUE

Sources de lumière blanche
- Soleil
- Ampoules incandescentes
- Flash d'appareil photo

Le Spectre Visible

Les 7 couleurs principales (ROYGBIV) :
1. Rouge (780 nm) - moins dévié
2. Orange (620 nm)
3. Jaune (580 nm)
4. Vert (530 nm)
5. Bleu (470 nm)
6. Indigo (450 nm)
7. Violet (380 nm) - plus dévié

Le Prisme

Fonction
- Sépare la lumière blanche en ses composantes
- Dispersion par réfraction

Explication physique
- L'indice de réfraction dépend de la longueur d'onde
- Le violet (courte λ) a un indice plus grand
- Donc le violet est plus dévié que le rouge

Formule (loi de Cauchy) :
n(λ) = A + B/λ²

Types de Lumière

Polychromatique
- Composée de plusieurs couleurs
- Exemple : lumière blanche

Monochromatique
- Une seule couleur/longueur d'onde
- Exemple : laser, LED colorée
- Ne peut pas être dispersée

Phénomènes Naturels

Arc-en-ciel
- Dispersion par les gouttes d'eau
- Réflexion interne dans les gouttes
- Arc primaire : rouge en haut
- Arc secondaire : couleurs inversées

Halo
- Cristaux de glace en altitude
- Cercle autour du Soleil/Lune`,
        exercises: [
            {
                question: 'Combien de couleurs principales compose la lumière blanche ?',
                options: ['3', '5', '7', '12'],
                correct: 2,
                explanation: 'La lumière blanche se décompose en 7 couleurs : Rouge, Orange, Jaune, Vert, Bleu, Indigo, Violet.'
            },
            {
                question: 'Quelle couleur est la plus déviée par un prisme ?',
                options: ['Rouge', 'Jaune', 'Violet', 'Vert'],
                correct: 2,
                explanation: 'Le violet a la plus courte longueur d\'onde, donc l\'indice de réfraction le plus élevé, il est le plus dévié.'
            },
            {
                question: 'Comment appelle-t-on une lumière d\'une seule couleur ?',
                options: ['Polychromatique', 'Monochromatique', 'Achromatique', 'Panchromatique'],
                correct: 1,
                explanation: 'Mono = un, chromatique = couleur. Une lumière monochromatique n\'a qu\'une seule couleur.'
            }
        ],
        relatedSimulations: ['lens-optics-3e', 'light-reflection', 'wave-interference']
    },

    'forces-vectors-3e': {
        title: 'Forces et Vecteurs',
        description: 'Représentation vectorielle des forces, poids et Newton',
        type: 'forces-vectors',
        config: {
            showGrid: true,
            gravity: 10,
            showComponents: true
        },
        analogy: {
            title: 'Les Forces comme des Troupes de Danseurs',
            content: `Les forces, c'est comme diriger des troupes de danseurs de sabar ! 💪

Une FORCE = une action qui peut :
- Mettre en mouvement (pousser une pirogue)
- Ralentir ou arrêter (freiner un vélo)
- Déformer (écraser une mangue)

La force a 4 caractéristiques comme une flèche :
1. POINT D'APPLICATION : Où tu pousses (le centre du ballon)
2. DIRECTION : Dans quel sens (horizontale, verticale, oblique)
3. SENS : Vers où (vers la gauche ou la droite)
4. INTENSITÉ : Avec quelle force (en Newton N)

Le POIDS est une force spéciale :
- C'est la force exercée par la Terre sur tout objet
- Direction : verticale
- Sens : vers le bas (vers le centre de la Terre)
- Formule : P = m × g

Avec :
- P en Newton (N)
- m la masse en kg
- g ≈ 10 N/kg (intensité de pesanteur)

Un sac de riz de 50 kg pèse : P = 50 × 10 = 500 N !

Sur la Lune (g = 1,6 N/kg), ce même sac pèserait seulement 80 N,
mais sa masse reste 50 kg (la masse ne change jamais !).`
        },
        theory: `Forces et Représentation Vectorielle

Définition de la Force

Une force est une action mécanique capable de :
- Modifier le mouvement d'un corps
- Déformer un corps
- Maintenir un corps en équilibre

Notation vectorielle : →F

Les 4 Caractéristiques d'une Force

1. Point d'application
   - Endroit où s'exerce la force
   - Représenté par l'origine du vecteur

2. Direction
   - Droite selon laquelle s'exerce la force
   - Ex : horizontale, verticale, oblique

3. Sens
   - Sur la direction, vers où la force pousse
   - Indiqué par la pointe de la flèche

4. Intensité (ou norme)
   - "Grandeur" de la force
   - Unité : Newton (N)
   - Instrument de mesure : dynamomètre

Représentation Graphique

Échelle : 1 cm ↔ x Newton
Exemple : échelle 1 cm = 5 N

Vecteur :
- Origine au point d'application
- Longueur proportionnelle à l'intensité
- Flèche dans le bon sens

Le Poids

Définition
Le poids est la force d'attraction exercée par la Terre sur un objet.

Caractéristiques :
- Direction : verticale
- Sens : vers le centre de la Terre
- Point d'application : centre de gravité

Formule fondamentale
→P = m × →g

En norme : P = m × g

Avec :
- P en Newton (N)
- m en kilogramme (kg)  
- g en N/kg (≈ 10 N/kg sur Terre)

Variation de g :
- Terre : g ≈ 9,8 N/kg
- Lune : g ≈ 1,6 N/kg
- Mars : g ≈ 3,7 N/kg

Poids ≠ Masse
- Masse : quantité de matière (invariable)
- Poids : force (varie selon le lieu)`,
        exercises: [
            {
                question: 'Quelle est l\'unité de la force ?',
                options: ['Le kilogramme (kg)', 'Le Newton (N)', 'Le Joule (J)', 'Le Watt (W)'],
                correct: 1,
                explanation: 'L\'unité internationale de force est le Newton (N), en hommage à Isaac Newton.'
            },
            {
                question: 'Un objet de masse 5 kg a un poids de (g = 10 N/kg) :',
                options: ['5 N', '15 N', '50 N', '500 N'],
                correct: 2,
                explanation: 'P = m × g = 5 × 10 = 50 Newton.'
            },
            {
                question: 'Sur la Lune, la masse d\'un objet :',
                options: ['Augmente', 'Diminue', 'Ne change pas', 'Devient nulle'],
                correct: 2,
                explanation: 'La masse est une propriété intrinsèque de l\'objet. Elle ne change jamais, contrairement au poids !'
            }
        ],
        relatedSimulations: ['work-power-3e', 'weight-mass-relation', 'forces-motion']
    },

    'work-power-3e': {
        title: 'Travail et Puissance',
        description: 'Calcul du travail W = F×d et puissance P = W/t',
        type: 'work-power',
        config: {
            showEnergy: true,
            frictionEnabled: true,
            animationSpeed: 1
        },
        analogy: {
            title: 'Le Travail comme Porter des Sacs au Marché',
            content: `Le travail et la puissance, c'est comme porter des sacs de riz au marché ! 🏋️

Imagine : tu dois porter un sac de 50 kg (poids = 500 N) sur une distance de 10 mètres.

Le TRAVAIL c'est l'effort total :
W = Force × Distance
W = 500 N × 10 m = 5000 Joules (J)

Maintenant, comparons deux porteurs :
- Mamadou le fait en 10 secondes
- Ibrahima le fait en 50 secondes

Qui est le plus PUISSANT ?

La PUISSANCE c'est le travail par seconde :
P = Travail / Temps

Mamadou : P = 5000 J / 10 s = 500 Watts (W)
Ibrahima : P = 5000 J / 50 s = 100 Watts (W)

Mamadou est 5 fois plus puissant ! 💪

⚡ Important :
- Si tu pousses un mur et il ne bouge pas → distance = 0 → travail = 0 !
- Le travail existe seulement si l'objet se déplace.

1 kilowatt (kW) = 1000 W
Une ampoule de 60 W utilise 60 J chaque seconde.`
        },
        theory: `Travail et Puissance

Le Travail d'une Force

Définition
Le travail est l'énergie transférée par une force lors d'un déplacement.

Condition : La force doit provoquer un déplacement !

Formule générale
W = F × d × cos(α)

Cas particuliers :

1. Force parallèle au déplacement (α = 0°)
   W = F × d (travail moteur, positif)

2. Force opposée au déplacement (α = 180°)
   W = -F × d (travail résistant, négatif)

3. Force perpendiculaire (α = 90°)
   W = 0 (pas de travail)

Unités
- Travail : Joule (J)
- Force : Newton (N)
- Distance : mètre (m)
- 1 J = 1 N × 1 m

Types de Travail

Travail moteur (W > 0)
- Force et déplacement dans le même sens
- La force fournit de l'énergie
- Ex : pousser un chariot

Travail résistant (W < 0)
- Force opposée au déplacement
- La force absorbe de l'énergie
- Ex : frottements

Travail nul (W = 0)
- Force perpendiculaire au déplacement
- Ex : réaction du sol sur un marcheur

La Puissance

Définition
La puissance est le travail effectué par unité de temps.
C'est la "vitesse" à laquelle on transfère l'énergie.

Formule
P = W / t

Unités
- Puissance : Watt (W)
- Travail : Joule (J)
- Temps : seconde (s)
- 1 W = 1 J/s

Multiples
- 1 kW = 1000 W
- 1 MW = 1 000 000 W
- 1 CV (cheval-vapeur) ≈ 736 W

Relation avec la force et la vitesse
P = F × v
(quand la force est constante)`,
        exercises: [
            {
                question: 'Une force de 20 N déplace un objet de 5 m. Le travail est :',
                options: ['4 J', '25 J', '100 J', '100 W'],
                correct: 2,
                explanation: 'W = F × d = 20 × 5 = 100 Joules.'
            },
            {
                question: 'Si ce travail de 100 J est fait en 10 secondes, la puissance est :',
                options: ['10 W', '100 W', '1000 W', '10 J'],
                correct: 0,
                explanation: 'P = W/t = 100/10 = 10 Watts.'
            },
            {
                question: 'Une force perpendiculaire au déplacement effectue un travail :',
                options: ['Maximum', 'Positif', 'Nul', 'Négatif'],
                correct: 2,
                explanation: 'Quand la force est perpendiculaire au déplacement (cos 90° = 0), le travail est nul.'
            }
        ],
        relatedSimulations: ['forces-vectors-3e', 'energy-transformations-3e', 'energy-conservation']
    },

    'electrostatics-3e': {
        title: 'Électrisation par Frottement',
        description: 'Charges électriques, attraction et répulsion',
        type: 'electrostatics',
        config: {
            showElectricField: true,
            showCharges: true,
            interactionMode: true
        },
        analogy: {
            title: 'L\'Électricité Statique comme un Jeu d\'Aimant Invisible',
            content: `L'électricité statique, c'est comme de la magie invisible ! ⚡

Tu as déjà frotté un ballon sur tes cheveux et il colle au mur ?
Ou senti tes cheveux se dresser sur ta tête ?
C'est l'électrisation par frottement !

Il existe DEUX types de charges :
➕ Charge POSITIVE (comme les protons)
➖ Charge NÉGATIVE (comme les électrons)

Les règles du jeu :
🔄 Charges de MÊME SIGNE → se REPOUSSENT
   (+) avec (+) = Répulsion !
   (-) avec (-) = Répulsion !

❤️ Charges de SIGNES OPPOSÉS → s'ATTIRENT
   (+) avec (-) = Attraction !

Que se passe-t-il quand tu frottes ?

Quand tu frottes une règle en plastique avec un tissu :
- Le plastique arrache des électrons au tissu
- La règle devient NÉGATIVE (trop d'électrons)
- Le tissu devient POSITIF (manque d'électrons)

Maintenant, la règle peut attirer des petits bouts de papier !
(Le papier neutre est "polarisé" par la règle chargée)

⚠️ ATTENTION : L'électricité statique peut créer des étincelles !
C'est dangereux près de l'essence ou du gaz.`
        },
        theory: `Électrisation par Frottement

Les Charges Électriques

Nature des charges
- Charge positive (+) : protons
- Charge négative (-) : électrons
- Unité : Coulomb (C)
- Charge élémentaire : e = 1,6 × 10⁻¹⁹ C

Les atomes
- Noyau : protons (+) et neutrons (0)
- Nuage électronique : électrons (-)
- Atome neutre : autant de + que de -

Électrisation par Frottement

Phénomène
Le frottement arrache des électrons d'un matériau à l'autre.

Résultat :
- Matériau qui perd des e⁻ → devient positif
- Matériau qui gagne des e⁻ → devient négatif

Série triboélectrique
Classement des matériaux selon leur tendance à :
- Perdre des électrons (en haut)
- Gagner des électrons (en bas)

Exemple :
Verre > Laine > Fourrure > Coton > Papier > Caoutchouc > Plastique

Loi des Interactions Électriques

Loi de Coulomb (qualitative)

1. Charges de même signe : RÉPULSION
   (+) et (+) → se repoussent
   (-) et (-) → se repoussent

2. Charges de signes contraires : ATTRACTION
   (+) et (-) → s'attirent

Force électrique
F = k × |q₁ × q₂| / r²
(La force dépend des charges et de la distance)

Conducteurs et Isolants

Conducteurs
- Électrons libres de se déplacer
- Exemples : métaux, eau salée
- Se déchargent facilement

Isolants
- Électrons fixés aux atomes
- Exemples : plastique, verre, bois sec
- Gardent la charge longtemps

Applications

Protection
- Paratonnerres
- Mise à la terre

Problèmes
- Étincelles (danger : stations essence)
- Poussière attirée sur les écrans

Utilisations
- Photocopieurs
- Peinture électrostatique`,
        exercises: [
            {
                question: 'Deux objets chargés négativement vont :',
                options: ['S\'attirer', 'Se repousser', 'Rester immobiles', 'Exploser'],
                correct: 1,
                explanation: 'Les charges de même signe se repoussent toujours !'
            },
            {
                question: 'Lors du frottement, qu\'est-ce qui est transféré ?',
                options: ['Des protons', 'Des électrons', 'Des neutrons', 'Des atomes'],
                correct: 1,
                explanation: 'Ce sont les électrons (légers et en périphérie) qui sont transférés par frottement.'
            },
            {
                question: 'Un atome neutre possède :',
                options: ['Plus de protons que d\'électrons', 'Plus d\'électrons que de protons', 'Autant de protons que d\'électrons', 'Aucun électron'],
                correct: 2,
                explanation: 'Un atome neutre a autant de charges positives (protons) que négatives (électrons).'
            }
        ],
        relatedSimulations: ['resistance-ohm-3e', 'simple-circuits', 'atomic-structure']
    },

    'resistance-ohm-3e': {
        title: 'Résistance et Loi d\'Ohm',
        description: 'U = R×I, résistances en série et parallèle',
        type: 'ohm-law-circuit',
        config: {
            showVoltmeter: true,
            showAmmeter: true,
            resistanceValue: 100,
            voltage: 12
        },
        analogy: {
            title: 'La Résistance comme un Tuyau d\'Arrosage',
            content: `La loi d\'Ohm, c'est comme l'eau dans un tuyau d'arrosage ! 💧

Imagine un tuyau qui transporte l'eau du robinet au jardin :

La TENSION (U) en Volt = la pression de l'eau au robinet
Plus la pression est forte, plus l'eau pousse pour sortir.

L'INTENSITÉ (I) en Ampère = le débit de l'eau (litres par seconde)
C'est combien d'eau passe vraiment dans le tuyau.

La RÉSISTANCE (R) en Ohm (Ω) = la finesse du tuyau
Un tuyau fin laisse passer moins d'eau qu'un gros tuyau.

🔥 La LOI D'OHM dit :
U = R × I    ou    I = U / R

Plus la résistance est grande, moins le courant passe !
C'est comme pincer le tuyau : moins d'eau sort.

📊 En SÉRIE (les résistances bout à bout) :
R_totale = R₁ + R₂ + R₃...
Les résistances s'additionnent ! Le courant doit toutes les traverser.

📊 En PARALLÈLE (branches séparées) :
1/R_totale = 1/R₁ + 1/R₂ + ...
La résistance totale est plus petite ! Le courant a plusieurs chemins.

⚖️ Exemple concret :
U = 12 V, R = 4 Ω
I = U/R = 12/4 = 3 Ampères`
        },
        theory: `Résistance Électrique et Loi d'Ohm

La Résistance Électrique

Définition
La résistance est la propriété d'un conducteur à s'opposer au passage du courant électrique.

Symbole : R
Unité : Ohm (Ω)
Symbole électrique : rectangle ou zigzag

Facteurs influençant R
- Longueur L : plus c'est long, plus R est grand
- Section S : plus c'est fin, plus R est grand
- Nature du matériau : résistivité ρ
- Température : généralement R augmente avec T

R = ρ × L / S

La Loi d'Ohm

Énoncé
La tension U aux bornes d'un conducteur ohmique est proportionnelle à l'intensité I qui le traverse.

Formule fondamentale
U = R × I

Autres formes :
- I = U / R
- R = U / I

Unités :
- U en Volt (V)
- I en Ampère (A)
- R en Ohm (Ω)

Caractéristique U-I
- Droite passant par l'origine
- Pente = R (résistance)
- Plus la pente est raide, plus R est grand

Association de Résistances

En Série
Les résistances sont traversées par le même courant.

R_eq = R₁ + R₂ + R₃ + ...

Propriétés :
- Même intensité I dans toutes les résistances
- U_totale = U₁ + U₂ + U₃ + ...
- Résistance équivalente plus grande

En Parallèle (Dérivation)
Même tension aux bornes de toutes les résistances.

1/R_eq = 1/R₁ + 1/R₂ + 1/R₃ + ...

Pour 2 résistances : R_eq = (R₁ × R₂)/(R₁ + R₂)

Propriétés :
- Même tension U pour toutes les résistances
- I_totale = I₁ + I₂ + I₃ + ...
- Résistance équivalente plus petite

Applications

- Chauffage électrique (effet Joule)
- Limiteur de courant
- Diviseur de tension
- Capteurs (thermistance, photorésistance)`,
        exercises: [
            {
                question: 'Si U = 12V et R = 4Ω, que vaut I ?',
                options: ['3 A', '8 A', '16 A', '48 A'],
                correct: 0,
                explanation: 'I = U/R = 12/4 = 3 Ampères.'
            },
            {
                question: 'Deux résistances de 10Ω en série donnent une résistance totale de :',
                options: ['5 Ω', '10 Ω', '20 Ω', '100 Ω'],
                correct: 2,
                explanation: 'En série : R_total = R₁ + R₂ = 10 + 10 = 20 Ω.'
            },
            {
                question: 'Quel appareil mesure la résistance ?',
                options: ['Voltmètre', 'Ampèremètre', 'Ohmmètre', 'Wattmètre'],
                correct: 2,
                explanation: 'L\'ohmmètre (ou multimètre en position Ohm) mesure la résistance électrique.'
            }
        ],
        relatedSimulations: ['electrostatics-3e', 'simple-circuits', 'circuit-series-parallel']
    },

    'energy-transformations-3e': {
        title: 'Transformations d\'Énergie',
        description: 'Conservation et rendement énergétique',
        type: 'energy-flow',
        config: {
            showSankey: true,
            showEfficiency: true,
            deviceType: 'motor'
        },
        analogy: {
            title: 'L\'Énergie comme de l\'Argent qui Change de Forme',
            content: `L'énergie, c'est comme l'argent : elle peut changer de forme mais jamais disparaître ! 💰

Imagine tes différentes "monnaies d'énergie" :
⚡ Énergie ÉLECTRIQUE (la pile, la prise)
🔥 Énergie THERMIQUE (chaleur)
💡 Énergie LUMINEUSE (lumière)
🔊 Énergie SONORE (son)
🏃 Énergie MÉCANIQUE (mouvement)
🧪 Énergie CHIMIQUE (essence, nourriture)
☢️ Énergie NUCLÉAIRE (centrale atomique)

Que fait une AMPOULE ?
Elle convertit : Électrique → Lumineuse + Thermique
(Oui, elle chauffe aussi ! C'est du "gaspillage")

Que fait un MOTEUR ?
Électrique → Mécanique + Thermique + Sonore

Que fait TON CORPS ?
Chimique (nourriture) → Mécanique + Thermique

🔑 RÈGLE D'OR (Conservation de l'énergie) :
"Rien ne se perd, rien ne se crée, tout se transforme"
L'énergie totale reste TOUJOURS la même !

📊 Le RENDEMENT mesure "l'efficacité" :
η = (Énergie utile / Énergie totale) × 100%

Exemple : Une ampoule à incandescence
- Entrée : 100 J d'électricité
- Sortie utile : 5 J de lumière
- Pertes : 95 J de chaleur
- Rendement : 5% (très mauvais !)

Une LED a un rendement de 40% (beaucoup mieux !)`
        },
        theory: `Transformations et Conservation de l'Énergie

Les Formes d'Énergie

1. Énergie Mécanique
   - Cinétique : liée au mouvement (Ec = ½mv²)
   - Potentielle : liée à la position (Ep = mgh)

2. Énergie Thermique
   - Chaleur, agitation des molécules
   - Unité : Joule (J) ou calorie (cal)

3. Énergie Électrique
   - Transport facile par les fils
   - E = U × I × t

4. Énergie Lumineuse (rayonnante)
   - Photons, ondes électromagnétiques
   - Soleil, lampes

5. Énergie Chimique
   - Stockée dans les liaisons
   - Combustibles, batteries, nourriture

6. Énergie Nucléaire
   - Stockée dans le noyau atomique
   - Libérée par fission ou fusion

Principe de Conservation

Énoncé
L'énergie totale d'un système isolé reste constante.
Elle peut changer de forme mais pas disparaître.

"Rien ne se perd, rien ne se crée, tout se transforme."

Chaîne énergétique
Représentation graphique des conversions d'énergie.

Exemple : Centrale thermique
Chimique → Thermique → Mécanique → Électrique

Le Rendement

Définition
Le rendement mesure l'efficacité d'une conversion énergétique.

η = E_utile / E_totale = P_utile / P_totale

En pourcentage :
η = (E_utile / E_totale) × 100%

Propriétés :
- Toujours inférieur à 100%
- Les pertes sont souvent thermiques
- On cherche à maximiser le rendement

Exemples de rendements :
- Ampoule incandescente : 5%
- Ampoule LED : 40%
- Moteur électrique : 80-95%
- Moteur thermique : 25-40%
- Centrale nucléaire : 33%
- Panneau solaire : 15-20%

Énergie Utile vs Pertes

Énergie utile
- Celle qu'on veut obtenir
- Ex : lumière pour une lampe

Pertes énergétiques
- Énergie non désirée
- Souvent sous forme de chaleur
- Dues aux frottements, effet Joule...

E_totale = E_utile + E_pertes`,
        exercises: [
            {
                question: 'Dans une ampoule, l\'énergie électrique devient :',
                options: ['Uniquement lumineuse', 'Lumineuse et thermique', 'Uniquement thermique', 'Chimique'],
                correct: 1,
                explanation: 'Une ampoule produit de la lumière ET de la chaleur (d\'où le rendement < 100%).'
            },
            {
                question: 'Un appareil reçoit 200 J et fournit 160 J utiles. Son rendement est :',
                options: ['60%', '80%', '125%', '40 J'],
                correct: 1,
                explanation: 'η = 160/200 = 0,8 = 80%.'
            },
            {
                question: 'Que dit le principe de conservation de l\'énergie ?',
                options: ['L\'énergie augmente avec le temps', 'L\'énergie peut être créée', 'L\'énergie totale reste constante', 'L\'énergie diminue toujours'],
                correct: 2,
                explanation: 'L\'énergie ne peut être ni créée ni détruite, seulement transformée.'
            }
        ],
        relatedSimulations: ['work-power-3e', 'forces-vectors-3e', 'energy-conservation']
    },

    // ========================================
    // CHIMIE - 4 SIMULATIONS  
    // ========================================

    'aqueous-solutions-3e': {
        title: 'Solutions Aqueuses',
        description: 'Solvant, soluté, concentration et saturation',
        type: 'solution-mixing',
        config: {
            soluteType: 'salt',
            showParticles: true,
            temperature: 25
        },
        analogy: {
            title: 'Les Solutions comme le Thé à la Menthe',
            content: `Les solutions aqueuses, c'est comme préparer l'ataya (thé sénégalais) ! 🍵

Quand tu prépares le thé :
- L'EAU chaude = le SOLVANT (ce qui dissout)
- Le SUCRE et le THÉ = les SOLUTÉS (ce qui est dissous)
- Le mélange final = la SOLUTION

Vocabulaire :
💧 SOLVANT : Le liquide qui dissout (ici l'eau → solution AQUEUSE)
🧂 SOLUTÉ : Ce qui est dissous (sucre, sel, thé...)
🥤 SOLUTION : Mélange homogène des deux

Combien de sucre ? C'est la CONCENTRATION !
C = masse de soluté / volume de solution
C = m / V (en grammes par litre, g/L)

Exemple : 50 g de sucre dans 500 mL d'eau
C = 50 / 0,5 = 100 g/L

Et si tu mets TROP de sucre ?
Il reste au fond ! La solution est SATURÉE.
On ne peut plus dissoudre de sucre supplémentaire.

🌡️ La température aide :
- Eau chaude → peut dissoudre PLUS de sucre
- Eau froide → saturation plus rapide

Pour DILUER : on ajoute de l'eau → la concentration diminue
Comme quand tu rajoutes de l'eau dans un jus trop concentré !`
        },
        theory: `Solutions Aqueuses

Définitions

Solvant
- Liquide qui dissout
- Le plus abondant dans la solution
- Solution aqueuse : solvant = eau

Soluté
- Substance dissoute
- Peut être solide, liquide ou gaz
- Exemples : sel, sucre, CO₂

Solution
- Mélange homogène soluté + solvant
- Aspect uniforme
- Le soluté est invisible à l'œil nu

La Concentration

Définition
La concentration massique indique la masse de soluté par unité de volume de solution.

Formule
C = m / V

Avec :
- C : concentration en g/L (ou g·L⁻¹)
- m : masse de soluté en g
- V : volume de solution en L

Calculs dérivés :
- m = C × V
- V = m / C

Exemple
50 g de sel dans 2 L d'eau
C = 50 / 2 = 25 g/L

La Saturation

Définition
Une solution est saturée quand elle ne peut plus dissoudre de soluté supplémentaire.

Au-delà de la saturation :
- Le soluté reste au fond (précipité)
- La concentration atteint un maximum

Solubilité
- Quantité maximale de soluté qu'on peut dissoudre
- Dépend de la température
- Généralement augmente avec T (pour les solides)

La Dilution

Principe
Ajouter du solvant pour diminuer la concentration.

Conservation de la quantité de soluté :
C₁ × V₁ = C₂ × V₂

Facteur de dilution :
F = V_final / V_initial = C₁ / C₂

Préparation de Solutions

Dissolution
1. Peser le soluté
2. Dissoudre dans un peu d'eau
3. Compléter au volume final

Dilution (à partir d'une solution mère)
1. Calculer le volume de solution mère
2. Prélever ce volume
3. Compléter avec de l'eau`,
        exercises: [
            {
                question: 'Dans l\'eau salée, quel est le solvant ?',
                options: ['Le sel', 'L\'eau', 'Les deux', 'Aucun'],
                correct: 1,
                explanation: 'L\'eau est le solvant (elle dissout), le sel est le soluté (il est dissous).'
            },
            {
                question: '20 g de sucre dans 500 mL d\'eau. La concentration est :',
                options: ['25 g/L', '40 g/L', '10 g/L', '100 g/L'],
                correct: 1,
                explanation: 'C = m/V = 20/0,5 = 40 g/L.'
            },
            {
                question: 'Une solution qui ne peut plus dissoudre de soluté est :',
                options: ['Diluée', 'Concentrée', 'Saturée', 'Insaturée'],
                correct: 2,
                explanation: 'Quand la limite est atteinte, la solution est saturée.'
            }
        ],
        relatedSimulations: ['acids-bases-ph-3e', 'metals-properties-3e', 'solutions-solubility']
    },

    'acids-bases-ph-3e': {
        title: 'Acides, Bases et pH',
        description: 'Échelle pH, indicateurs colorés et neutralisation',
        type: 'ph-scale',
        config: {
            showIndicators: true,
            showMolecules: true,
            currentPH: 7
        },
        analogy: {
            title: 'Le pH comme une Échelle de Saveur',
            content: `Le pH, c'est comme mesurer le "goût" chimique d'une solution ! 🧪

Imagine une échelle de 0 à 14 :

🍋 ACIDE (pH < 7) = Goût aigre, piquant
   0-1-2-3-4-5-6
   Exemples : citron (pH 2), vinaigre (pH 3), estomac (pH 2) !

💧 NEUTRE (pH = 7) = Pas de goût particulier
   Exemple : eau pure

🧼 BASIQUE (pH > 7) = Goût amer, savonneux
   8-9-10-11-12-13-14
   Exemples : savon (pH 10), javel (pH 12), soude (pH 14)

Comment mesurer le pH ?
📏 PAPIER pH : Il change de couleur !
   Rouge = Acide
   Vert = Neutre
   Bleu/Violet = Basique

📱 pH-MÈTRE : Mesure électronique précise

La réaction ACIDE + BASE = NEUTRALISATION
Acide + Base → Sel + Eau
Le pH se rapproche de 7 !

Exemple : 
HCl + NaOH → NaCl + H₂O
Acide chlorhydrique + Soude → Sel de cuisine + Eau

⚠️ Danger !
Les acides ET les bases forts sont CORROSIFS !
Toujours porter des gants et lunettes au labo.`
        },
        theory: `Acides, Bases et pH

Le pH

Définition
Le pH mesure l'acidité ou la basicité d'une solution.

Échelle
- 0 à 14 (pour les solutions aqueuses diluées)
- pH = - log[H₃O⁺]

Classification :
- pH < 7 : solution ACIDE
- pH = 7 : solution NEUTRE
- pH > 7 : solution BASIQUE (alcaline)

Mesures du pH

Papier pH
- Change de couleur selon le pH
- Lecture par comparaison avec une échelle

Indicateurs colorés
- BBT (bleu de bromothymol) : jaune (acide), vert (neutre), bleu (basique)
- Phénolphtaléine : incolore (acide/neutre), rose (basique)

pH-mètre
- Mesure électronique
- Plus précis (0,1 unité)

Caractéristiques des Acides

Propriétés
- Goût aigre (ne jamais goûter au labo !)
- Attaquent les métaux (dégagement H₂)
- Virent les indicateurs (rouge avec le papier pH)

Exemples
- Acide chlorhydrique HCl (estomac)
- Acide sulfurique H₂SO₄ (batteries)
- Acide citrique (citron)
- Acide acétique (vinaigre)

Caractéristiques des Bases

Propriétés
- Goût amer
- Toucher savonneux/glissant
- Virent les indicateurs (bleu avec le papier pH)

Exemples
- Soude NaOH
- Potasse KOH
- Ammoniaque NH₃
- Chaux Ca(OH)₂

Réaction de Neutralisation

Principe
Acide + Base → Sel + Eau

Exemples
HCl + NaOH → NaCl + H₂O
H₂SO₄ + 2 KOH → K₂SO₄ + 2 H₂O

Caractéristiques
- Réaction exothermique (dégage de la chaleur)
- Le pH se rapproche de 7
- Formation d'un sel (composé ionique)`,
        exercises: [
            {
                question: 'Une solution de pH = 3 est :',
                options: ['Neutre', 'Acide', 'Basique', 'Salée'],
                correct: 1,
                explanation: 'pH < 7 signifie que la solution est acide.'
            },
            {
                question: 'Quel est le pH de l\'eau pure ?',
                options: ['0', '7', '10', '14'],
                correct: 1,
                explanation: 'L\'eau pure est neutre, son pH est égal à 7.'
            },
            {
                question: 'Acide + Base donne :',
                options: ['Acide + Gaz', 'Sel + Eau', 'Base + Oxygène', 'Métal + CO₂'],
                correct: 1,
                explanation: 'La réaction de neutralisation : Acide + Base → Sel + Eau.'
            }
        ],
        relatedSimulations: ['aqueous-solutions-3e', 'metals-properties-3e', 'ph-scale']
    },

    'metals-properties-3e': {
        title: 'Propriétés des Métaux',
        description: 'Réactions avec l\'oxygène, l\'eau et les acides',
        type: 'metal-reactions',
        config: {
            metalType: 'iron',
            reagent: 'acid',
            showReactionEquation: true
        },
        analogy: {
            title: 'Les Métaux comme des Personnalités Différentes',
            content: `Les métaux ont des "personnalités" très différentes ! ⚙️

Certains sont très RÉACTIFS (nerveux) :
🔥 Le SODIUM réagit violemment avec l'eau → explosion !
🔥 Le POTASSIUM aussi → flamme violette !
⚠️ Ne JAMAIS mettre ces métaux dans l'eau !

D'autres sont MOYENNEMENT réactifs :
🔩 Le FER rouille lentement (réaction avec l'oxygène + eau)
   Fer + Oxygène + Eau → Rouille (oxyde de fer)
🔩 Le ZINC et l'ALUMINIUM réagissent avec les acides

Et certains sont très CALMES (nobles) :
👑 L'OR ne réagit presque jamais - d'où sa valeur !
👑 L'ARGENT, le PLATINE restent brillants

Réaction MÉTAL + ACIDE :
Fer + Acide → Sel + Hydrogène
Fe + 2 HCl → FeCl₂ + H₂↑

Le gaz H₂ forme des bulles ! 💨
⚠️ L'hydrogène est inflammable - attention aux flammes !

Test d'identification du H₂ :
On approche une allumette enflammée → "Pop" caractéristique !

Protection contre la corrosion :
🎨 Peinture (couche protectrice)
🔩 Galvanisation (couche de zinc)
⚡ Protection cathodique (courant électrique)`
        },
        theory: `Propriétés Chimiques des Métaux

Réaction avec l'Oxygène (Oxydation)

Principe
Métal + Oxygène → Oxyde métallique

Exemples
4 Fe + 3 O₂ → 2 Fe₂O₃ (rouille)
2 Mg + O₂ → 2 MgO (magnésie)
4 Al + 3 O₂ → 2 Al₂O₃ (alumine)

Observations
- Formation d'une couche d'oxyde
- Parfois protectrice (Al, Cr)
- Parfois poreuse et destructrice (Fe)

La Corrosion
- Dégradation du métal par réaction chimique
- Rouille = corrosion du fer
- Nécessite : eau + oxygène + temps

Réaction avec l'Eau

Métaux alcalins (très réactifs)
2 Na + 2 H₂O → 2 NaOH + H₂↑
- Réaction violente
- Dégagement d'hydrogène
- Formation de base (hydroxyde)

La plupart des autres métaux
- Ne réagissent pas avec l'eau froide
- Certains réagissent avec la vapeur d'eau

Réaction avec les Acides

Réaction générale
Métal + Acide → Sel + Dihydrogène

Exemples
Zn + 2 HCl → ZnCl₂ + H₂↑
Fe + H₂SO₄ → FeSO₄ + H₂↑
2 Al + 6 HCl → 2 AlCl₃ + 3 H₂↑

Observations
- Dégagement de bulles (H₂)
- Dissolution du métal
- Formation d'un sel métallique

Test du dihydrogène
- Gaz incolore et inodore
- Plus léger que l'air
- Inflammable → "Pop" avec une flamme

Métaux Nobles (peu réactifs)

Exemples
- Or (Au)
- Argent (Ag)
- Platine (Pt)

Caractéristiques
- Ne réagissent pas avec O₂, H₂O, acides courants
- Conservent leur éclat
- D'où leur valeur !
- Résistent à la corrosion

Classification des Métaux

Par réactivité (du plus au moins réactif) :
K > Na > Mg > Al > Zn > Fe > Pb > Cu > Ag > Au

Protection des Métaux

- Peinture : barrière physique
- Galvanisation : couche de zinc
- Chromage : couche de chrome
- Anodisation : oxyde protecteur
- Alliage inoxydable : Cr + Ni + Fe`,
        exercises: [
            {
                question: 'Quel gaz se dégage quand le zinc réagit avec un acide ?',
                options: ['Oxygène', 'Dioxyde de carbone', 'Dihydrogène', 'Chlore'],
                correct: 2,
                explanation: 'Métal + Acide → Sel + H₂ (dihydrogène, gaz inflammable).'
            },
            {
                question: 'Quel métal ne rouille pratiquement pas ?',
                options: ['Fer', 'Zinc', 'Or', 'Sodium'],
                correct: 2,
                explanation: 'L\'or est un métal noble qui ne réagit presque pas - d\'où sa valeur et son utilisation en bijouterie.'
            },
            {
                question: 'La rouille est le résultat de la réaction du fer avec :',
                options: ['L\'eau seule', 'L\'oxygène seul', 'L\'eau et l\'oxygène', 'L\'acide'],
                correct: 2,
                explanation: 'La rouille (oxyde de fer hydraté) nécessite à la fois l\'eau ET l\'oxygène.'
            }
        ],
        relatedSimulations: ['acids-bases-ph-3e', 'hydrocarbons-3e', 'chemical-reactions']
    },

    'hydrocarbons-3e': {
        title: 'Hydrocarbures et Combustion',
        description: 'Pétrole, alcanes et réaction de combustion',
        type: 'combustion-3d',
        config: {
            fuelType: 'methane',
            oxygenLevel: 21,
            showMolecules: true
        },
        analogy: {
            title: 'Les Hydrocarbures comme la Cuisine du Feu',
            content: `Les hydrocarbures, c'est l'essence de la vie moderne ! ⛽

Le PÉTROLE est un mélange d'hydrocarbures fossiles.
"Hydro" = Hydrogène (H)
"Carbone" = Carbone (C)
→ Les hydrocarbures = molécules avec uniquement C et H

Les ALCANES sont la famille la plus simple :
CH₄ = Méthane (gaz de cuisine)
C₂H₆ = Éthane
C₃H₈ = Propane (bouteille de gaz)
C₄H₁₀ = Butane (briquet)
C₈H₁₈ ≈ Essence (voiture)

La COMBUSTION = brûler un carburant

Combustion COMPLÈTE (beaucoup d'oxygène) :
Hydrocarbure + O₂ → CO₂ + H₂O + Énergie
✅ Flamme bleue
✅ Produits : dioxyde de carbone + eau
✅ Pas de danger particulier

Combustion INCOMPLÈTE (pas assez d'oxygène) :
⚠️ Flamme jaune/orange
⚠️ Production de CO (monoxyde de carbone)
💀 CO = Gaz MORTEL, inodore et incolore !
   → "Tueur silencieux" - Toujours bien aérer !
⚠️ Production de suie (carbone noir)

C'est pourquoi les chauffe-eau doivent être bien ventilés !
6 millions de personnes meurent chaque année à cause de la pollution de l'air intérieur.`
        },
        theory: `Hydrocarbures et Combustion

Les Hydrocarbures

Définition
Composés organiques formés uniquement de Carbone (C) et Hydrogène (H).

Formule générale des alcanes
CₙH₂ₙ₊₂

Les Alcanes

Exemples importants
- Méthane CH₄ (gaz naturel)
- Éthane C₂H₆
- Propane C₃H₈
- Butane C₄H₁₀
- Octane C₈H₁₈ (essence)

Propriétés
- Liaisons simples C-C uniquement
- Saturés (pas de double liaison)
- Combustibles (source d'énergie)

Le Pétrole

Composition
- Mélange complexe d'hydrocarbures
- Origine fossile (êtres vivants anciens)
- Se trouve sous terre ou sous la mer

Raffinage (distillation fractionnée)
Séparation des composants par température :
- Gaz (butane, propane)
- Essence
- Kérosène
- Gazole
- Fioul
- Bitume

La Combustion

Définition
Réaction chimique entre un combustible et un comburant (O₂) avec dégagement d'énergie.

Le triangle du feu
3 éléments nécessaires :
1. Combustible (hydrocarbure)
2. Comburant (oxygène)
3. Énergie d'activation (étincelle)

Supprimer un élément → éteindre le feu

Combustion Complète

Conditions
- Excès d'oxygène
- Flamme bleue

Équation
CₙH₂ₙ₊₂ + (3n+1)/2 O₂ → n CO₂ + (n+1) H₂O + Énergie

Exemple (méthane)
CH₄ + 2 O₂ → CO₂ + 2 H₂O + Énergie

Produits
- Dioxyde de carbone CO₂ (gaz à effet de serre)
- Eau H₂O

Combustion Incomplète

Conditions
- Manque d'oxygène
- Flamme jaune/orange

Produits dangereux
- Monoxyde de carbone CO
- Carbone C (suie)

CO : Le tueur silencieux
- Gaz incolore et inodore
- Toxique : se fixe à l'hémoglobine
- 100 ppm → maux de tête
- 6400 ppm → mort en 15 min

Prévention
- Bonne ventilation
- Entretien des appareils
- Détecteurs de CO`,
        exercises: [
            {
                question: 'Les hydrocarbures sont composés de :',
                options: ['C et O', 'H et O', 'C et H uniquement', 'C, H et O'],
                correct: 2,
                explanation: 'Hydro (H) + Carbone (C) = Hydrocarbures (uniquement C et H).'
            },
            {
                question: 'Quel gaz dangereux se forme lors d\'une combustion incomplète ?',
                options: ['CO₂', 'O₂', 'CO', 'H₂'],
                correct: 2,
                explanation: 'Le monoxyde de carbone (CO) est un gaz mortel produit par combustion incomplète.'
            },
            {
                question: 'La combustion complète du méthane produit :',
                options: ['CO + H₂O', 'CO₂ + H₂O', 'CO₂ + H₂', 'C + H₂O'],
                correct: 1,
                explanation: 'CH₄ + 2O₂ → CO₂ + 2H₂O (dioxyde de carbone et eau).'
            }
        ],
        relatedSimulations: ['metals-properties-3e', 'energy-transformations-3e', 'chemical-reactions']
    }
};

export default pc3eSimulationsData;
