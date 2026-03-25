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
            title: '🔬 La Science comme une Enquête de Police',
            content: `Imagine que tu es un enquêteur de police à Dakar ! 🕵️

**L'OBSERVATION** 👀 — Tu arrives sur une scène de crime et tu regardes tout attentivement. Comme un scientifique qui observe un phénomène naturel.

**L'HYPOTHÈSE** 💭 — Tu proposes une théorie sur ce qui s'est passé. "Je pense que le voleur est passé par la fenêtre..."

**L'EXPÉRIENCE** 🧪 — Tu vérifies ta théorie avec des preuves. Tu cherches des empreintes, des témoins, des indices.

**LA CONCLUSION** ✅ — Si les preuves confirment, ta théorie devient un fait. Sinon, tu proposes une nouvelle hypothèse !

> C'est exactement ce que font les scientifiques. Ils ne devinent pas — ils **PROUVENT** ! La Physique-Chimie, c'est résoudre les mystères de l'univers avec méthode.`
        },
        theory: `### 🔬 Qu'est-ce que la Physique-Chimie ?

C'est la science qui explique les **phénomènes naturels** :

- **Physique** — Étudie les mouvements, les forces, l'énergie, la lumière...
- **Chimie** — Étudie la composition de la matière et ses réactions (mélanges, explosions...)

---

### 🧭 La Démarche Scientifique

La méthode scientifique suit **5 étapes** essentielles :

| Étape | Description | Exemple |
|-------|------------|---------|
| 1️⃣ **Observation** | Observer un phénomène | "La plante ne pousse plus" |
| 2️⃣ **Hypothèse** | Proposer une explication | "Elle manque peut-être d'eau" |
| 3️⃣ **Expérience** | Tester l'hypothèse | Arroser la plante et observer |
| 4️⃣ **Résultats** | Analyser les données | "Elle repousse après arrosage" |
| 5️⃣ **Conclusion** | Confirmer ou infirmer | "L'eau est nécessaire à la croissance" |

---

### 💡 À retenir

> **Observation** → **Hypothèse** → **Expérience** → **Conclusion**

La science repose sur l'**expérience** et la **preuve**. Une hypothèse non vérifiée n'est qu'une idée !`,
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
            title: '⚖️ Les Mesures comme le Commerce au Marché',
            content: `Au marché Sandaga, tout le monde utilise les mêmes unités pour s'entendre ! 🛍️

**LE KILOGRAMME** ⚖️ — Pour le riz, on vend "5 kg", pas "un grand sac" au hasard.
**LE LITRE** 🛢️ — Pour l'huile d'arachide, on mesure précisément en litres.
**LE MÈTRE** 📏 — Le tailleur mesure le tissu pour ton boubou en mètres.

> Les unités internationales (SI), c'est un **langage commun** pour que le monde entier se comprenne, du marché local aux grands laboratoires !`
        },
        theory: `### 📏 Grandeurs Physiques et Unités

Les grandeurs physiques ont des unités standardisées appelées **Système International (SI)**.

| Grandeur | Symbole | Unité (SI) | Symbole de l'unité | Instrument |
|----------|---------|------------|--------------------|------------|
| **Longueur** | $l$ ou $L$ | Mètre | m | Règle / Ruban |
| **Masse** | $m$ | Kilogramme | kg | Balance |
| **Temps** | $t$ | Seconde | s | Chronomètre |
| **Volume** | $V$ | Mètre cube | m³ (ou L) | Éprouvette |

---

### 💡 À retenir

- Toujours lire le **ménisque** (le creux de l'eau) au niveau des yeux pour l'éprouvette.
- Toujours faire la **tare** (remettre à zéro) sur une balance avant de peser.`,
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
            title: '🛶 La Densité comme les Pirogues sur le Fleuve',
            content: `Pourquoi la pirogue en bois flotte mais la pierre coule au fond du fleuve ? 🌊

**LA PIROGUE** 🪵 — Le bois est **léger pour sa taille**. Sa densité est inférieure à 1 → **ELLE FLOTTE !**

**LA PIERRE** 🪨 — La pierre est **lourde pour sa taille**. Sa densité est supérieure à 1 → **ELLE COULE !**

**L'HUILE** 🛢️ — Elle flotte toujours au-dessus de l'eau car sa densité ($d = 0,9$) est plus petite que celle de l'eau ($d = 1$).

> La densité compare le "poids d'un certain volume" d'un objet par rapport au même volume d'eau !`
        },
        theory: `### ⚖️ Masse Volumique ($\\rho$)

La masse volumique représente la masse d'un certain volume de matière.

$$ \\rho = \\frac{m}{V} $$

- **$\\rho$** (rho) = Masse volumique (en $kg/m^3$ ou $g/cm^3$)
- **$m$** = Masse de l'objet
- **$V$** = Volume de l'objet

---

### 🌊 La Densité ($d$)

La densité compare la masse volumique d'un corps à celle de l'eau. **Elle n'a pas d'unité.**

$$ d = \\frac{\\rho_{\\text{objet}}}{\\rho_{\\text{eau}}} $$

#### Règle de flottaison :
- Si **$d < 1$** : L'objet **flotte** (ex: Bois, Huile)
- Si **$d > 1$** : L'objet **coule** (ex: Fer, Pierre)`,
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
            title: '💪 Poids et Masse comme le Lutteur Sénégalais',
            content: `Imagine Balla Gaye 2, le célèbre champion de lutte ! 🤼

**SA MASSE** = 120 kg. C'est sa quantité de muscles, d'os, de matière. Qu'il soit à Dakar ou sur la Lune, sa masse reste TOUJOURS **120 kg**.

**SON POIDS SUR TERRE** = 1200 N. C'est la force avec laquelle la Terre l'attire vers le bas.
**SON POIDS SUR LA LUNE** = 200 N. La Lune est plus petite, elle l'attire moins fort !

> **Conclusion** : Avec la même masse, il se sentirait **6 fois plus léger** sur la Lune et pourrait faire des sauts très hauts !`
        },
        theory: `### ⚖️ Différence entre Poids et Masse

Beaucoup de gens confondent le poids et la masse, mais en physique :

| Caractéristique | Masse ($m$) | Poids ($P$) |
|-----------------|-------------|-------------|
| **Définition** | Quantité de matière | Force d'attraction (Gravité) |
| **Unité** | Kilogramme (**kg**) | Newton (**N**) |
| **Instrument** | Balance | Dynamomètre |
| **Variation** | Constante partout | Change selon la planète |

---

### 🧮 La Formule Magnétique

La relation entre le poids et la masse est donnée par :

$$ P = m \\times g $$

- **$P$** = Poids (en Newton, $N$)
- **$m$** = Masse (en $kg$)
- **$g$** = Intensité de la pesanteur (en $N/kg$)

*Sur Terre, $g \\approx 10 \\text{ N/kg}$. Sur la Lune, $g \\approx 1,6 \\text{ N/kg}$.*`,
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
            title: "🚌 L'Électricité comme les Cars Rapides",
            content: `L'électricité circule dans les fils comme les **Cars Rapides** sur les routes de Dakar ! 🛣️

**LA PILE / GÉNÉRATEUR** 🔋 — C'est la **Gare Routière**. C'est de là que partent les électrons chargés d'énergie.
**LES FILS** 🧵 — Ce sont les **Routes**. C'est le chemin que suivent les électrons.
**L'AMPOULE** 💡 — C'est le **Marché** ou la destination. L'énergie y est utilisée !
**L'INTERRUPTEUR** 🚧 — C'est un **Barrage de Police**. S'il est baissé (fermé), les cars passent. S'il est levé (ouvert), personne ne passe !

> **Règle d'or** : Pour que ça marche, il faut un circuit **DOM** (Fermé). Les cars doivent pouvoir faire un tour complet pour revenir au garage !`
        },
        theory: `### ⚡ Les Circuits Électriques

Un circuit électrique est une **boucle ininterrompue** de composants électriques.

| Composant | Rôle | Exemple |
|-----------|------|---------|
| **Générateur** | Fournit l'énergie au circuit | Pile, Batterie |
| **Récepteur** | Convertit l'énergie (lumière, chaleur, mouvement) | Lampe, Moteur |
| **Fils conducteurs** | Transportent le courant | Fils de cuivre |
| **Interrupteur** | Permet d'ouvrir ou de fermer le circuit | Interrupteur mural |

---

### 🛡️ Conducteurs vs Isolants

- **Conducteurs** (Laissent passer le courant) : Tous les métaux (Cuivre, Fer, Or), Grapihte, Corps humain, Eau salée.
- **Isolants** (Bloquent le courant) : Plastique, Bois sec, Verre, Air, Caoutchouc.`,
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
            title: '🏟️ Sources de Lumière comme un Match au Stade',
            content: `Imagine un match au stade **Léopold Sédar Senghor** la nuit ! ⚽

**LES PROJECTEURS** 💡 — Ce sont les **SOURCES PRIMAIRES**, car ils fabriquent leur propre lumière !
**TON MAILLOT BLANC** 👕 — C'est une **SOURCE SECONDAIRE**, car il ne fait que renvoyer la lumière des projecteurs. S'ils s'éteignent, ton maillot devient noir !
**TES YEUX** 👀 — Ce sont les **RÉCEPTEURS**, car ils captent la lumière.

> **Pour voir le ballon** : La lumière part du *Projecteur* → Elle rebondit sur le *Ballon* → Elle entre dans *Tes Yeux*. C'est magique !`
        },
        theory: `### ☀️ Les Sources de Lumière

On classe les objets lumineux en deux grandes catégories :

| Type de Source | Définition | Exemples |
|----------------|------------|----------|
| **Source Primaire** | Objet qui **produit** la lumière qu'il émet. | Soleil, Étoiles, Flamme, Lampe allumée, Luciole |
| **Source Secondaire** (Objet diffusant) | Objet qui **renvoie** (diffuse) la lumière qu'il reçoit d'une source primaire. | La Lune, un miroir, un mur blanc, cette page d'écran |

---

### 👁️ Les Récepteurs de Lumière

Un récepteur de lumière est un objet ou organe dont l'état change lorsqu'il reçoit de la lumière :
- **Naturels** : L'œil (la rétine), la peau (qui bronze), les plantes (photosynthèse).
- **Artificiels** : Les panneaux solaires, les appareils photo, les capteurs de téléphone.`,
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
            title: '🏹 La Lumière comme une Flèche',
            content: `La lumière voyage exactement comme une flèche tirée par un arc très puissant ! 🎯

**LA FLÈCHE VA TOUT DROIT** ➡️ — Elle ne peut pas contourner un arbre. Si elle rencontre un obstacle opaque, elle s'arrête net.
**L'OMBRE DU BAOBAB** 🌳 — Le Soleil envoie ses "flèches" de lumière partout. Le tronc du baobab bloque certaines flèches : l'endroit noir derrière, c'est l'ombre !
**PAS À TRAVERS LES MURS** 🧱 — C'est pour ça qu'on ne voit pas derrière un mur : la lumière ne sait pas faire un virage !

> Et cette flèche est super rapide : la lumière voyage à **$300 000 \\text{ km/s}$**. Elle pourrait faire 7.5 fois le tour de la Terre en une seule seconde !`
        },
        theory: `### 📏 Le Principe de Propagation Rectiligne

> "Dans un milieu transparent et homogène (comme l'air clair ou le vide), la lumière se propage **rigoureusement en ligne droite**."

Pour représenter ce trajet rectiligne en physique, on dessine un **Rayon Lumineux** : 
Une droite avec une flèche ($\\rightarrow$) qui indique le **sens** de propagation, de la source vers le récepteur.

---

### 🌑 La Formation des Ombres

Lorsqu'un objet opaque (qui bloque la lumière) est éclairé par une petite source de lumière, il se forme :

1. **L'ombre propre** : C'est la partie de l'objet lui-même qui n'est pas éclairée (la phase cachée).
2. **L'ombre portée** : C'est la zone noire projetée sur l'écran ou le sol derrière l'objet.
3. **Le cône d'ombre** : C'est l'espace sombre en 3D entre l'objet et l'écran.`,
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
            title: '🚌 La Réfraction comme un Car sur Deux Routes',
            content: `Imagine un gros car qui roule vite et passe du goudron au sable fin ! 🏖️

**SUR LE GOUDRON** 🛣️ — Il roule vite (c'est comme la lumière dans l'air).
**LA ROUE DROITE BIFURQUE DANS LE SABLE** 🏜️ — Elle ralentit la première.
**RÉSULTAT** 🔄 — Le car entier **TOURNE** spontanément vers la droite !

> **C'est ça la RÉFRACTION !** Quand la lumière passe d'un milieu à un autre où elle va moins vite (comme de l'air à l'eau), elle ralentit et *change de direction*. C'est pour ça qu'un bâton semble brisé dans l'eau !`
        },
        theory: `### 🔁 La Réflexion

Sur une surface polie (comme un miroir), la lumière **rebondit**.
**Loi de la réflexion** : L'angle d'incidence ($i$) est toujours égal à l'angle de réflexion ($r$).

$$ i = r $$

---

### 💧 La Réfraction

C'est le changement de direction de la lumière quand elle traverse la surface (le dioptre) séparant deux milieux transparents différents (ex: Air $\\rightarrow$ Eau).

**Loi de Snell-Descartes** :
$$ n_1 \\times \\sin(i_1) = n_2 \\times \\sin(i_2) $$

- **$n_1, n_2$** : Indices de réfraction des milieux
- **$i_1$** : Angle d'incidence
- **$i_2$** : Angle de réfraction`,
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
            title: '🍚 Les Mélanges comme la Cuisine Sénégalaise',
            content: `La chimie, c'est comme préparer le repas de midi ! 🍲

**LE THIÉBOUDIENNE** 🍛 — C'est un **MÉLANGE HÉTÉROGÈNE**. Tu peux facilement voir le riz, le poisson, les carottes et distinguer chaque ingrédient.
**LE CAFÉ TOUBA** ☕ — C'est un **MÉLANGE HOMOGÈNE**. Le sucre et le café sont tellement bien mélangés que tu ne vois plus qu'un seul liquide noir.
**L'EAU DISTILLÉE** 💧 — C'est un **CORPS PUR**. Il n'y a *rien* d'autre dedans, juste de l'eau parfaite !

> Pour séparer les ingrédients du bouillon (décantation), tu laisses la marmite tranquille pour que le dépôt tombe au fond !`
        },
        theory: `### 🧪 Les Types de Systèmes

En chimie, la matière se présente sous différentes formes :

| Type | Définition | Exemples |
|------|------------|----------|
| **Corps Pur** | Constitué d'une seule et même substance. | Eau distillée, Fer pur, Sucre |
| **Mélange Homogène** | On y distingue **une seule phase** à l'œil nu. | Eau salée, Air, Lait |
| **Mélange Hétérogène**| On y distingue **plusieurs phases** à l'œil nu. | Eau + Huile, Eau boueuse |

---

### ⚗️ Techniques de Séparation

Pour séparer les constituants d'un mélange, on utilise plusieurs techniques :

1. **La Décantation** : Laisse reposer un mélange hétérogène (liquide-solide ou liquide-liquide). Les corps plus denses tombent au fond.
2. **La Filtration** : Fait passer le mélange à travers un filtre. Le liquide qui passe s'appelle le *filtrat*.
3. **La Distillation** : Pour un mélange homogène, on fait bouillir le liquide puis on condense la vapeur (le *distillat*).`,
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
            title: '🧱 Les Atomes comme des Briques de Construction',
            content: `L'univers entier est un immense jeu de briques ! 🏗️

**LES BRIQUES DE BASE** 🟥 — Ce sont les **ATOMES** (Hydrogène, Oxygène, Carbone...). Tu ne peux pas les couper en deux !
**LA CONSTRUCTION** 🏠 — C'est la **MOLÉCULE**. Tu as pris plusieurs atomes que tu as collés ensemble.

> Si tu prends **2 briques bleues** (Hydrogène) et **1 brique rouge** (Oxygène), tu construis la molécule d'eau ! ($H_{2}O$) 💧`
        },
        theory: `### ⚛️ Atomes et Éléments

L'atome est le constituant élémentaire et invisible de la matière.
Chaque type d'atome est un **élément chimique** et a un **symbole** (une Majuscule, suivie parfois d'une minuscule).

Exemples :
- **C** = Carbone
- **O** = Oxygène
- **Fe** = Fer
- **H** = Hydrogène

---

### 🔬 Les Molécules

Une molécule est un assemblage d'atomes fortement liés entre eux. On la représente par une **formule chimique**.

Dans la formule $H_{2}O$ :
- **$H$** indique l'atome d'Hydrogène, et le **$2$** indique qu'il y en a 2.
- **$O$** indique l'atome d'Oxygène, s'il n'y a pas de chiffre c'est qu'il y en a 1 seul.`,
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
            title: '🥚 La Mole comme les Œufs au Marché',
            content: `Au marché, personne n'a le temps de compter les œufs un par un ! 🛒

**LA DOUZAINE** 🥚 — C'est un "paquet" de 12 œufs.
**LA MOLE** 📦 — C'est le "paquet" des chimistes, mais il contient **602 mille milliards de milliards** de particules microscopiques ($6,02 \\times 10^{23}$) !

> Peser une mole, c'est facile ! 1 mole d'eau ($H_{2}O$) pèse exactement **18 grammes** (environ 2 cuillères à soupe). Pas besoin de compter les particules !`
        },
        theory: `### 📦 Quantité de Matière : La Mole (mol)

Les atomes sont si microscopiques qu'on ne peut pas les compter à l'unité. On les regroupe par "paquets" appelés **moles**.

- **Le nombre d'Avogadro** ($N_A$) : Une mole contiendra toujours $6,02 \\times 10^{23}$ entités (atomes ou molécules).

---

### ⚖️ Masse Molaire ($M$)

C'est la masse d'**une mole** de cet atome ou de cette molécule.

- $M(C) = 12 \\text{ g/mol}$ (Une mole de Carbone pèse $12\\text{ g}$)
- $M(O) = 16 \\text{ g/mol}$
- $M(H_{2}O) = (2 \\times 1) + 16 = 18 \\text{ g/mol}$

**Formule de cours :**
$$ n = \\frac{m}{M} $$
- **$n$** : nombre de moles (en mol)
- **$m$** : masse de l'échantillon (en g)
- **$M$** : masse molaire (en g/mol)`,
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
            title: '🍳 La Réaction Chimique comme la Cuisine',
            content: `La chimie, c'est exactement comme préparer le repas ! 👨🏾‍🍳

**LA FARINE + L'EAU + LA LEVURE** 🥣 — Ce sont les **RÉACTIFS**. Ce sont les ingrédients de départ, ils vont "disparaître" pendant la cuisson.
**LA CUISSON** 🔥 — C'est la **RÉACTION CHIMIQUE**.
**LE PAIN** 🥖 — C'est le **PRODUIT**. C'est le résultat délicieux de la transformation.

> **Règle absolue d'Antoine de Lavoisier** : *"Rien ne se perd, rien ne se crée, tout se transforme"*. Si tu utilises exactement 500g d'ingrédients au total (farine + eau + sel), tu obtiendras très exactement 500g de pain !`
        },
        theory: `### 🔁 Réactifs et Produits

Lors d'une **transformation chimique**, des corps disparaissent et de nouveaux corps apparaissent.
- **Les Réactifs** : Les substances qui disparaissent (gauche de la flèche).
- **Les Produits** : Les substances formées (droite de la flèche).

On modélise cela par l'équation :
$$ \\text{Réactif}_1 + \\text{Réactif}_2 \\longrightarrow \\text{Produit}_1 + \\text{Produit}_2 $$

---

### ⚖️ Loi de Conservation de la Masse

> "Au cours d'une réaction chimique, la masse totale des réactifs disparus est toujours égale à la masse totale des produits formés. Il y a **conservation de la masse**."

*Exemple* : Si $12\\text{g}$ de Carbone réagissent avec $32\\text{g}$ de Dioxygène, ils formeront exactement $44\\text{g}$ de Dioxyde de Carbone ($12 + 32 = 44$).`,
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
