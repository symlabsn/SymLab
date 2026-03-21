// Simulations PC 4e - Programme Physique-Chimie 4ème Sénégal
// Simulations pour chapitres 1-12

export const pc4eSimulationsData = {
    // ========================================
    // PHYSIQUE - CHAPITRES 1-8
    // ========================================

    // Chapitre 1: Introduction aux Sciences Physiques
    'scientific-method-sim': {
        title: 'La Démarche Scientifique',
        description: 'Découvrez les étapes de la méthode scientifique : observation, hypothèse, expérience, conclusion',
        type: 'chap1-science-intro',
        config: {},
        analogy: {
            title: 'La Science comme une Enquête de Police',
            content: `La démarche scientifique, c'est comme résoudre une enquête ! 🔍

OBSERVATION : Tu arrives sur une scène et tu regardes tout attentivement.
HYPOTHÈSE : Tu proposes une théorie sur ce qui s'est passé.
EXPÉRIENCE : Tu vérifies ta théorie avec des preuves.
CONCLUSION : Si les preuves confirment, ta théorie devient un fait.

Les scientifiques ne devinent pas - ils PROUVENT !`
        },
        theory: `La démarche scientifique permet de comprendre le monde de manière rigoureuse.

Étapes:
1. Observation d'un phénomène
2. Formulation d'une hypothèse
3. Réalisation d'expériences
4. Analyse des résultats
5. Conclusion`,
        exercises: [
            {
                question: "Quelle est la première étape de la démarche scientifique ?",
                options: ["L'expérience", "L'hypothèse", "L'observation", "La conclusion"],
                correct: 2,
                explanation: "Tout commence par observer un phénomène qui nous intrigue !"
            }
        ]
    },

    // Chapitre 2: Grandeurs Physiques et Mesures
    'measurement-tools-sim': {
        title: 'Laboratoire de Mesures',
        description: 'Utilisez différents instruments de mesure : règle, balance, éprouvette, chronomètre',
        type: 'chap2-mesures',
        config: {},
        analogy: {
            title: 'Les Mesures comme le Commerce au Marché',
            content: `Au marché Sandaga, tout le monde utilise les mêmes unités !

LE KILOGRAMME : Pour le riz, on dit "5 kg", pas "un grand sac".
LE LITRE : Pour l'huile, on mesure en litres.
LE MÈTRE : Le tailleur mesure le tissu en mètres.

Les unités internationales, c'est un langage commun pour le monde entier !`
        },
        theory: `Les grandeurs physiques ont des unités standardisées (SI).

Longueur → mètre (m)
Masse → kilogramme (kg)
Temps → seconde (s)
Volume → mètre cube (m³) ou litre (L)`,
        exercises: [
            {
                question: "Quel instrument mesure le volume d'un liquide ?",
                options: ["La balance", "Le thermomètre", "L'éprouvette graduée", "Le double-décimètre"],
                correct: 2,
                explanation: "L'éprouvette graduée permet de lire le volume en mL ou L."
            }
        ]
    },

    // Chapitre 3: Masse, Masse Volumique et Densité
    'density-explorer': {
        title: 'Explorateur de Densité',
        description: 'Expérimentez la flottaison des objets dans différents liquides',
        type: 'chap3-densite',
        config: {},
        analogy: {
            title: 'La Densité comme les Pirogues sur le Fleuve',
            content: `Pourquoi la pirogue en bois flotte mais la pierre coule ?

LA PIROGUE : Le bois est léger pour sa taille. Densité < 1 → FLOTTE !
LA PIERRE : La pierre est lourde pour sa taille. Densité > 1 → COULE !
L'HUILE : Elle flotte sur l'eau car sa densité (0,9) < eau (1).

ρ = m / V (masse volumique en kg/L ou g/cm³)`
        },
        theory: `Masse volumique (ρ) = masse / volume

ρ = m / V

Densité (d) = comparaison par rapport à l'eau
d = ρ_objet / ρ_eau

Si d < 1 : l'objet flotte
Si d > 1 : l'objet coule`,
        exercises: [
            {
                question: "L'huile flotte sur l'eau car :",
                options: ["Elle est plus visqueuse", "Sa densité est inférieure à 1", "Elle est plus lourde", "C'est magique"],
                correct: 1,
                explanation: "Tout corps avec une densité inférieure à celle de l'eau (d < 1) flotte."
            },
            {
                question: "Coche les objets qui FLOTTENT sur l'eau (d=1) :",
                type: 'multi-select',
                options: ["Bois (d=0.7)", "Fer (d=7.8)", "Glace (d=0.9)", "Or (d=19.3)"],
                correct: [0, 2],
                explanation: "Seuls le bois (0.7) et la glace (0.9) ont une densité < 1. Ils flottent !"
            },
            {
                question: "Si je coupe un morceau de bois en deux, sa densité :",
                options: ["Diminue de moitié", "Reste la même", "Double", "Devient nulle"],
                correct: 1,
                explanation: "La densité est une propriété INTRINSÈQUE. Elle ne change pas, peu importe la taille du morceau !"
            }
        ]
    },

    // Chapitre 4: Poids et relation Poids-Masse
    'weight-mass-sim': {
        title: 'Poids vs Masse : Terre et Lune',
        description: 'Comparez le poids d\'un objet sur différentes planètes',
        type: 'chap4-poids-masse',
        config: {},
        analogy: {
            title: 'Poids et Masse comme le Lutteur Sénégalais',
            content: `Imagine Balla Gaye 2, le champion de lutte ! 💪

SA MASSE = 120 kg (quantité de muscles, d'os)
Qu'il soit à Dakar ou sur la Lune, sa masse reste 120 kg.

SON POIDS SUR TERRE = 1200 N (P = m × g = 120 × 10)
SON POIDS SUR LA LUNE = 200 N (g = 1,6 N/kg)

Il pourrait sauter 6 fois plus haut sur la Lune !`
        },
        theory: `### Relation Poids-Masse

$$P = m \\times g$$

- **P** = Poids (en Newton, N)
- **m** = Masse (en kg) - invariable
- **g** = Intensité de la pesanteur (en N/kg)

Sur Terre : $g \\approx 10 \\text{ N/kg}$
Sur la Lune : $g \\approx 1,6 \\text{ N/kg}$`,
        exercises: [
            {
                question: "Sur la Lune (g=1,6), une personne de 60 kg pèse :",
                options: ["60 N", "96 N", "600 N", "37,5 kg"],
                correct: 1,
                explanation: "P = 60 × 1,6 = 96 N. Le poids est en Newtons, pas en kg !"
            },
            {
                question: "Sélectionne les affirmations VRAIES :",
                type: 'multi-select',
                options: [
                    "La masse change selon la planète",
                    "Le poids change selon la planète",
                    "Le poids se mesure en Newtons",
                    "La masse se mesure en Newtons"
                ],
                correct: [1, 2],
                explanation: "La masse est constante (kg). Le poids est une force (N) qui change avec la gravité (g)."
            },
            {
                question: "Si tu vas sur Jupiter (g=24.8), ton poids sera :",
                options: ["2.5 fois plus grand", "2.5 fois plus petit", "Identique", "Nul"],
                correct: 0,
                explanation: "g(Jupiter) ≈ 2.5 × g(Terre). Donc ton poids sera multiplié par 2.5 !"
            }
        ]
    },

    // Chapitre 5: Introduction à l'Électricité
    'intro-electricity-sim': {
        title: "Introduction à l'Électricité",
        description: 'Construisez des circuits électriques avec générateurs, lampes et interrupteurs',
        type: 'chap5-electricite',
        config: {},
        analogy: {
            title: "L'Électricité comme le Réseau de Car Rapide",
            content: `L'électricité, c'est comme le transport à Dakar ! 🚌

LA PILE = LA GARE ROUTIÈRE (d'où partent les électrons)
LES FILS = LES ROUTES (les chemins des électrons)
L'AMPOULE = LE MARCHÉ (où l'énergie est utilisée)
L'INTERRUPTEUR = UN BARRAGE DE POLICE (contrôle le passage)

CIRCUIT FERMÉ = Les cars peuvent faire le tour complet et revenir !`
        },
        theory: `Circuit électrique = boucle fermée

Composants:
- Générateur (pile) : fournit l'énergie
- Récepteur (lampe) : utilise l'énergie
- Fils conducteurs : transportent le courant
- Interrupteur : ouvre/ferme le circuit

Conducteurs : métaux, eau salée
Isolants : plastique, bois, verre`,
        exercises: [
            {
                question: "Que se passe-t-il si on ouvre l'interrupteur ?",
                options: ["L'ampoule brille plus fort", "Le courant continue", "Le circuit est coupé", "La pile explose"],
                correct: 2,
                explanation: "Un interrupteur ouvert coupe le circuit. Le courant ne peut plus circuler."
            },
            {
                question: "Sélectionne les matériaux CONDUCTEURS :",
                type: 'multi-select',
                options: ["Plastique", "Cuivre", "Eau salée", "Bois sec"],
                correct: [1, 2],
                explanation: "Le cuivre (métal) et l'eau salée conduisent l'électricité. Le plastique et le bois sont des isolants."
            }
        ]
    },

    // Chapitre 6: Sources et Récepteurs de lumière
    'light-sources-sim': {
        title: 'Sources et Récepteurs de Lumière',
        description: 'Distinguez sources primaires et secondaires de lumière',
        type: 'chap6-sources-lumiere',
        config: {},
        analogy: {
            title: 'Sources de Lumière comme un Match au Stade',
            content: `Imagine un match au stade Léopold Sédar Senghor la nuit ! ⚽

LES PROJECTEURS = SOURCES PRIMAIRES (fabriquent la lumière)
LES JOUEURS = SOURCES SECONDAIRES (renvoient la lumière)
TES YEUX = RÉCEPTEURS (captent la lumière)

Pour voir le ballon : Projecteur → Ballon → Tes yeux`
        },
        theory: `Sources de lumière:
- Primaires : produisent leur propre lumière (Soleil, lampe, feu)
- Secondaires : diffusent la lumière reçue (Lune, miroir, objets)

Récepteurs : œil, caméra, panneau solaire`,
        exercises: [
            {
                question: "La Lune est une source :",
                options: ["Primaire", "Secondaire", "Tertiaire", "De chaleur"],
                correct: 1,
                explanation: "La Lune ne produit pas sa propre lumière, elle diffuse celle du Soleil."
            }
        ]
    },

    // Chapitre 7: Propagation rectiligne de la lumière
    'light-propagation-pc4': {
        title: 'Propagation Rectiligne',
        description: 'Observez comment la lumière voyage en ligne droite et crée des ombres',
        type: 'chap7-propagation-lumiere',
        config: {},
        analogy: {
            title: 'La Lumière comme une Flèche',
            content: `La lumière voyage comme une flèche tirée par un arc ! 🎯

LA FLÈCHE VA TOUT DROIT : elle ne peut pas contourner un arbre.
L'OMBRE DU BAOBAB : le soleil envoie ses "flèches", le baobab les bloque.
TU NE VOIS PAS À TRAVERS LES MURS : la lumière ne sait pas tourner !

Vitesse de la lumière = 300 000 km/s (très rapide !)`
        },
        theory: `Dans un milieu homogène, la lumière se propage en ligne droite.

Rayon lumineux = droite avec flèche (sens de propagation)

Ombres:
- Ombre propre (sur l'objet)
- Ombre portée (projetée sur une surface)`,
        exercises: [
            {
                question: "Comment se propage la lumière dans le vide ?",
                options: ["En zig-zag", "En cercle", "En ligne droite", "Elle ne se propage pas"],
                correct: 2,
                explanation: "C'est le principe fondamental de la propagation rectiligne."
            }
        ]
    },

    // Chapitre 8: Réflexion et Réfraction
    'refraction-simulator': {
        title: 'Simulateur de Réfraction',
        description: 'Observez la déviation de la lumière entre deux milieux',
        type: 'chap8-refraction',
        config: {},
        analogy: {
            title: 'La Réfraction comme un Car sur Deux Routes',
            content: `Imagine un car qui passe du goudron au sable ! 🚌

SUR LE GOUDRON : Il roule vite (comme la lumière dans l'air)
LA ROUE DROITE ENTRE DANS LE SABLE : Elle freine d'abord
RÉSULTAT : Le car TOURNE vers la droite !

C'est la RÉFRACTION ! La lumière change de direction en changeant de milieu.`
        },
        theory: `Réflexion : la lumière rebondit (miroir)
Angle d'incidence = Angle de réflexion

Réfraction : la lumière est déviée entre deux milieux différents
Loi de Snell-Descartes : n₁ × sin(i) = n₂ × sin(r)`,
        exercises: [
            {
                question: "Le phénomène qui fait qu'un bâton paraît brisé dans l'eau est :",
                options: ["La réflexion", "La réfraction", "La diffraction", "L'absorption"],
                correct: 1,
                explanation: "Les rayons sont déviés en sortant de l'eau, trompant notre cerveau."
            }
        ]
    },

    // ========================================
    // CHIMIE - CHAPITRES 9-12
    // ========================================

    // Chapitre 9: Mélanges et Corps purs
    'mixture-separation-sim': {
        title: 'Séparation des Mélanges',
        description: 'Apprenez les techniques de séparation : filtration, décantation, distillation',
        type: 'chap9-melanges',
        config: {},
        analogy: {
            title: 'Mélanges comme la Cuisine Sénégalaise',
            content: `Le thiéboudienne et les corps purs ! 🍚

THIÉBOUDIENNE = MÉLANGE HÉTÉROGÈNE (on voit le riz, le poisson...)
CAFÉ TOUBA = MÉLANGE HOMOGÈNE (tout est bien mélangé)
EAU DISTILLÉE = CORPS PUR (eau et rien d'autre)

Décantation : les impuretés tombent au fond de la jarre`
        },
        theory: `Mélanges:
- Homogène : une seule phase visible (eau salée, sirop)
- Hétérogène : plusieurs phases (eau + huile, eau + sable)

Corps pur : une seule espèce chimique

Séparation:
- Décantation : laisser reposer
- Filtration : utiliser un filtre
- Distillation : évaporation + condensation`,
        exercises: [
            {
                question: "Comment séparer le sable de l'eau ?",
                options: ["Distillation", "Filtration", "Décantation puis filtration", "Impossible"],
                correct: 2,
                explanation: "On laisse reposer (décantation), puis on filtre."
            }
        ]
    },

    // Chapitre 10: Structure de la matière (Atomes)
    'atom-builder-sim': {
        title: 'Constructeur de Molécules',
        description: 'Construisez des molécules à partir d\'atomes',
        type: 'chap10-atomes',
        config: {},
        analogy: {
            title: 'Les Atomes comme des Briques de Lego',
            content: `L'univers est un immense jeu de Lego ! 🧱

BRIQUES DE BASE = ATOMES (H, O, C, N...)
CONSTRUCTIONS = MOLÉCULES (H₂O, CO₂...)

2 briques bleues (H) + 1 brique rouge (O) = eau !
L'atome est la plus petite brique.`
        },
        theory: `Atome = constituant élémentaire de la matière
Symbole : une majuscule (C, H, O, N...)

Molécule = assemblage d'atomes liés
H₂O = 2 atomes H + 1 atome O

Structure de l'atome:
- Noyau : protons (+) et neutrons
- Électrons (-) autour du noyau`,
        exercises: [
            {
                question: "Combien d'atomes dans H₂O ?",
                options: ["1", "2", "3", "20"],
                correct: 2,
                explanation: "H₂O = 2 atomes H + 1 atome O = 3 atomes au total."
            }
        ]
    },

    // Chapitre 11: Moles et Grandeurs Molaires
    'mole-concept-sim': {
        title: 'Le Concept de Mole',
        description: 'Comprenez le nombre d\'Avogadro et la masse molaire',
        type: 'chap11-mole',
        config: {},
        analogy: {
            title: 'La Mole comme les Œufs au Marché',
            content: `Au marché, on ne compte pas les œufs un par un ! 🥚

LA DOUZAINE = 12 œufs
LA MOLE = 6,02 × 10²³ particules

1 mole de carbone = 12 g
1 mole d'eau = 18 g (environ 2 cuillères)

n = m / M (nombre de moles)`
        },
        theory: `La mole (mol) = unité de quantité de matière

1 mol = 6,02 × 10²³ particules (nombre d'Avogadro)

Masse molaire (M) : masse d'une mole (g/mol)
M(C) = 12 g/mol
M(O) = 16 g/mol

Formule : n = m / M`,
        exercises: [
            {
                question: "Si M(C) = 12 g/mol, quelle masse pour 2 moles de carbone ?",
                options: ["6 g", "12 g", "24 g", "2 g"],
                correct: 2,
                explanation: "m = n × M = 2 × 12 = 24 g de carbone."
            }
        ]
    },

    // Chapitre 12: Réaction Chimique
    'mass-conservation': {
        title: 'Conservation de la Masse',
        description: 'Vérifiez que rien ne se perd, rien ne se crée dans une réaction chimique',
        type: 'chap12-conservation',
        config: {},
        analogy: {
            title: 'La Réaction Chimique comme la Cuisine',
            content: `La chimie, c'est comme cuisiner ! 🍳

Farine + Eau + Levure → Pain
Les RÉACTIFS se transforment en PRODUITS.

Règle de Lavoisier :
"Rien ne se perd, rien ne se crée, tout se TRANSFORME"

Masse des réactifs = Masse des produits`
        },
        theory: `Réaction chimique : réarrangement d'atomes

Réactifs → Produits

Conservation de la masse (Lavoisier) :
La masse totale ne change pas.

Équation bilan :
C + O₂ → CO₂
Les atomes sont conservés des deux côtés.`,
        exercises: [
            {
                question: "Lors d'une réaction, la masse totale :",
                options: ["Augmente", "Diminue", "Reste constante", "Disparaît"],
                correct: 2,
                explanation: "Conservation de la masse : rien ne se perd, rien ne se crée."
            }
        ]
    }
};
