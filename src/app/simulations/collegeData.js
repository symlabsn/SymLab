// Données détaillées des simulations du collège avec analogies sénégalaises

export const collegeSimulationsData = {
    'cell-structure': {
        title: 'Structure de la Cellule',
        description: 'Découvrez l\'intérieur d\'une cellule vivante en 3D',
        type: 'cell',
        config: {},
        analogy: {
            title: 'La Cellule comme un Marché Sandaga',
            content: `Imagine la cellule comme le grand marché Sandaga de Dakar ! 🏪

La **membrane cellulaire** est comme les portes du marché - elle contrôle qui entre et qui sort.

Le **noyau** est le bureau du chef du marché - c'est là que toutes les décisions importantes sont prises.

Les **mitochondries** sont comme les générateurs électriques - elles fournissent l'énergie pour tout faire fonctionner.

Les **ribosomes** sont les artisans qui fabriquent les produits (protéines) vendus au marché.

Tout comme Sandaga est organisé avec différentes sections, la cellule a des organites spécialisés !`
        },
        theory: `La Cellule : Unité de Vie

La cellule est l'unité fondamentale de tout être vivant. Elle contient tous les éléments nécessaires pour maintenir la vie.

**Organites Principaux**

**Membrane Cellulaire**
- Enveloppe protectrice
- Contrôle les échanges avec l'extérieur
- Composée de lipides et protéines

**Noyau**
- Contient l'ADN (information génétique)
- Centre de contrôle de la cellule
- Entouré d'une membrane nucléaire

**Mitochondries**
- Centrales énergétiques de la cellule
- Produisent l'ATP (énergie)
- Possèdent leur propre ADN

**Ribosomes**
- Synthèse des protéines
- Présents dans le cytoplasme
- Peuvent être liés au réticulum endoplasmique

**Différences Cellule Animale vs Végétale**

**Cellule Végétale**
- Paroi cellulaire rigide
- Chloroplastes (photosynthèse)
- Grande vacuole centrale

**Cellule Animale**
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
        type: 'cell',
        config: {},
        analogy: {
            title: 'La Photosynthèse comme une Cuisine Solaire',
            content: `La photosynthèse, c'est comme cuisiner avec l'énergie du soleil sénégalais ! ☀️

Les **feuilles** sont comme des panneaux solaires qui captent la lumière.

Le **chloroplaste** est la cuisine où se prépare le repas énergétique.

L'**eau** (H₂O) vient des racines, comme l'eau du robinet pour cuisiner.

Le **CO₂** est pris dans l'air, comme les épices qu'on ajoute.

Le **glucose** produit est le thiéboudienne (plat énergétique) de la plante !

L'**oxygène** libéré est le cadeau que les plantes nous offrent pour respirer.`
        },
        theory: `La Photosynthèse

La photosynthèse est le processus par lequel les plantes transforment l'énergie lumineuse en énergie chimique.

**Équation Globale**
6 CO₂ + 6 H₂O + Lumière → C₆H₁₂O₆ + 6 O₂

**Les Étapes**

**1. Capture de la Lumière**
- Les chloroplastes contiennent la chlorophylle
- La chlorophylle absorbe la lumière (surtout rouge et bleue)
- Donne la couleur verte aux plantes

**2. Réactions Lumineuses**
- Se déroulent dans les thylakoïdes
- Production d'ATP et NADPH
- Libération d'oxygène (O₂)

**3. Cycle de Calvin (Réactions Sombres)**
- Se déroule dans le stroma
- Fixation du CO₂
- Production de glucose (C₆H₁₂O₆)

**Importance**
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
        type: 'atom',
        config: { protons: 1, neutrons: 0, electrons: 1 },
        analogy: {
            title: 'Les États de la Matière comme la Danse du Sabar',
            content: `Les molécules sont comme des danseurs de sabar ! 💃🕺

**État SOLIDE** (Glace)
Les danseurs sont serrés, épaule contre épaule, ne bougeant presque pas.
Comme les gens assis pendant la cérémonie avant que la musique commence.

**État LIQUIDE** (Eau)
Les danseurs bougent librement mais restent proches.
Comme pendant le sabar, on danse ensemble mais on peut se déplacer !

**État GAZEUX** (Vapeur)
Les danseurs sont partout dans la salle, très espacés, bougeant rapidement.
Comme quand tout le monde danse librement dans tout l'espace !

La **température** est comme l'intensité de la musique - plus c'est chaud, plus ça bouge !`
        },
        theory: `Les États de la Matière

La matière existe sous trois états principaux : solide, liquide et gazeux.

**État Solide**
- Forme et volume définis
- Molécules très proches et organisées
- Vibrations faibles
- Exemple : glace, fer, sel

**État Liquide**
- Volume défini, forme variable
- Molécules proches mais mobiles
- Prend la forme du récipient
- Exemple : eau, huile, lait

**État Gazeux**
- Ni forme ni volume définis
- Molécules très espacées et rapides
- Occupe tout l'espace disponible
- Exemple : air, vapeur d'eau, CO₂

**Changements d'État**

**Fusion** : Solide → Liquide (chauffage)
**Solidification** : Liquide → Solide (refroidissement)
**Vaporisation** : Liquide → Gaz (chauffage)
**Condensation** : Gaz → Liquide (refroidissement)
**Sublimation** : Solide → Gaz direct`,
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
        type: 'atom',
        config: { protons: 29, neutrons: 35, electrons: 29 },
        analogy: {
            title: 'Le Circuit Électrique comme le Réseau de Car Rapide',
            content: `Un circuit électrique, c'est comme le réseau de transport de Dakar ! 🚌

La **pile** est comme la gare routière - c'est là que tout commence et finit.

Les **fils électriques** sont comme les routes - ils transportent les passagers (électrons).

L'**ampoule** est comme un marché où les gens descendent et dépensent leur énergie.

Les **électrons** sont comme les passagers dans les cars rapides - ils circulent en boucle !

Un **circuit ouvert** = route bloquée, les cars ne passent pas.
Un **circuit fermé** = route libre, les cars circulent !

Plus il y a de passagers (courant fort), plus l'ampoule brille !`
        },
        theory: `Circuits Électriques Simples

Un circuit électrique est un chemin fermé permettant la circulation du courant.

**Composants de Base**

**Générateur (Pile)**
- Fournit l'énergie électrique
- Possède deux bornes : + et -
- Crée une différence de potentiel (tension)

**Fils Conducteurs**
- Transportent le courant
- Généralement en cuivre
- Relient les composants

**Récepteurs (Ampoule, Moteur)**
- Utilisent l'énergie électrique
- Transforment l'énergie (lumière, mouvement)

**Interrupteur**
- Ouvre ou ferme le circuit
- Contrôle le passage du courant

**Lois Fondamentales**

**Circuit Fermé**
- Le courant circule
- Les récepteurs fonctionnent

**Circuit Ouvert**
- Le courant ne circule pas
- Les récepteurs ne fonctionnent pas

**Sens du Courant**
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
    }
};

export default collegeSimulationsData;
