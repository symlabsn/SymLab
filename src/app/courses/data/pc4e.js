export const pc4eData = {
    id: 'pc-4e',
    title: 'Physique-Chimie 4ème',
    chapters: [
        // ==========================================
        // PARTIE 1 : PHYSIQUE
        // ==========================================
        {
            id: 'phys-4e-01',
            part: 'Partie 1 : Physique',
            title: '1. Introduction aux Sciences Physiques',
            story: "Imaginez que vous êtes un détective. Votre mission : comprendre comment fonctionne l'univers. Pourquoi le ciel est bleu ? Pourquoi le feu brûle ? La Physique étudie la matière et l'énergie, tandis que la Chimie étudie les transformations de la matière.",
            content: `
### 1. Qu'est-ce que la Physique-Chimie ?
C'est la science qui explique les phénomènes naturels.

- **Physique** : Étudie les mouvements, les forces, l'énergie, la lumière...
- **Chimie** : Étudie la composition de la matière et ses réactions (mélanges, explosions...).

### 2. La Démarche Scientifique
Observation $\\rightarrow$ Hypothèse $\\rightarrow$ Expérience $\\rightarrow$ Conclusion.
            `,
            summary: [
                "Physique = Étude des lois de la nature.",
                "Chimie = Étude de la matière.",
                "La science repose sur l'expérience et la preuve."
            ],
            exercises: [
                {
                    id: 'ex-intro-1',
                    question: "Quelle science étudie la réaction entre le vinaigre et le bicarbonate ?",
                    options: ["La Physique", "La Chimie", "La Biologie", "L'Astronomie"],
                    correctAnswer: 1,
                    explanation: "C'est une transformation de la matière (réaction chimique qui crée du gaz)."
                }
            ]
        },
        {
            id: 'phys-4e-02',
            part: 'Partie 1 : Physique',
            title: '2. Grandeurs Physiques et Mesures',
            story: "Si je vous dis 'C'est grand !', ça ne veut rien dire. Grand comme une maison ou comme une fourmi ? Pour être précis, les scientifiques ont inventé des unités de mesure. C'est le langage universel de la science.",
            content: `
### 1. Les Unités Internationales (SI)
- **Longueur** : Le mètre (m). Instrument : Règle, Mètre ruban.
- **Masse** : Le kilogramme (kg). Instrument : Balance.
- **Temps** : La seconde (s). Instrument : Chronomètre.
- **Volume** : Le mètre cube ($m^3$) ou le Litre (L). Instrument : Éprouvette graduée.

### 2. Les Conversions
Savoir passer des km aux m, ou des h aux min est essentiel. Tableau de conversion !

> **📏 Analogie : La Cuisine**
>
> Une recette demande '200g de farine', pas 'un peu de farine'. La précision est la clé de la réussite, en cuisine comme en science.
            `,
            summary: [
                "Toujours Indiquer l'unité après un nombre !",
                "1 L = 1 $dm^3$.",
                "1 kg = 1000 g."
            ],
            exercises: [
                {
                    id: 'ex-mes-1',
                    question: "Quel instrument mesure le volume d'un liquide ?",
                    options: ["La balance", "Le thermomètre", "L'éprouvette graduée", "Le double-décimètre"],
                    correctAnswer: 2,
                    explanation: "L'éprouvette graduée permet de lire le volume en mL ou L."
                }
            ]
        },
        {
            id: 'phys-4e-03',
            part: 'Partie 1 : Physique',
            title: '3. Masse, Masse Volumique et Densité',
            story: "Qu'est-ce qui est plus lourd : 1kg de plomb ou 1kg de plumes ? Ils ont la même masse (1kg) ! Mais le plomb prend beaucoup moins de place. C'est parce qu'il est plus 'dense'. Sa matière est plus tassée.",
            content: `
### 1. La Masse (m)
Quantité de matière dans un objet. Se mesure en kg avec une balance. Elle ne change pas, même sur la Lune.

### 2. La Masse Volumique ($\\rho$)
C'est la masse par unité de volume. Formule : $\\rho = \\frac{m}{V}$.

- Eau : $1 kg/L$ ou $1 g/cm^3$.
- Huile : plus légère (elle flotte).

### 3. La Densité (d)
Comparaison par rapport à l'eau. $d = \\frac{\\rho}{\\rho_{eau}}$. Si $d < 1$, ça flotte. Si $d > 1$, ça coule.
            `,
            summary: [
                "Masse : quantitée de matière (kg).",
                "Masse Volumique : $\\rho = m/V$.",
                "Densité : indique si ça flotte ou coule."
            ],
            exercises: [
                {
                    id: 'ex-dens-1',
                    question: "L'huile flotte sur l'eau car :",
                    options: ["Elle est plus visqueuse", "Sa densité est inférieure à 1", "Elle est plus lourde", "C'est magique"],
                    correctAnswer: 1,
                    explanation: "Tout corps avec une densité inférieure à celle de l'eau (d < 1) flotte."
                }
            ]
        },
        {
            id: 'phys-4e-04',
            part: 'Partie 1 : Physique',
            title: '4. Poids et relation Poids-Masse',
            story: "Pourquoi retombez-vous quand vous sautez ? La Terre vous attire comme un aimant géant. Cette force s'appelle le Poids. Attention, ne confondez pas Poids et Masse !",
            content: `
### 1. Différence Poids / Masse
- **Masse (m)** : Quantité de matière (en kg). Invariable.
- **Poids (P)** : Force d'attraction de la Terre (en Newton N). Mesuré avec un Dynamomètre.

### 2. La Relation
$P = m \\times g$

- g est l'intensité de la pesanteur (environ 10 N/kg sur Terre).
- Sur la Lune, g est plus faible, donc on est plus léger (Poids diminue), mais on n'a pas maigri (Masse identique) !
            `,
            summary: [
                "P = Poids (Newton).",
                "m = Masse (kg).",
                "P = m x g.",
                "Le poids varie selon la planète, la masse non."
            ],
            exercises: [
                {
                    id: 'ex-poids-1',
                    question: "Si votre masse est de 50 kg, votre poids sur Terre (g=10) est de :",
                    options: ["50 kg", "500 N", "5 N", "500 kg"],
                    correctAnswer: 1,
                    explanation: "$P = m \\times g = 50 \\times 10 = 500$ Newtons."
                }
            ]
        },
        {
            id: 'phys-4e-05',
            part: 'Partie 1 : Physique',
            title: '5. Introduction à l’Électricité',
            story: "L'électricité est comme de l'eau qui coule dans des tuyaux. La pile est la pompe, les fils sont les tuyaux, et l'ampoule est le moulin qui tourne grâce au courant. Sans circuit fermé (boucle), rien ne marche !",
            content: `
### 1. Le Circuit Électrique
Il faut au moins : un **Générateur** (pile), un **Récepteur** (lampe) et des **Fils**.

- Circuit Ouvert : Le courant ne passe pas (interrupteur ouvert).
- Circuit Fermé : Le courant circule.

### 2. Sens du courant
Par convention, le courant sort de la borne **(+)** et rentre par la borne **(-)**.

### 3. Conducteurs et Isolants
- Conducteur : Laisse passer le courant (Métaux, eau salée).
- Isolant : Bloque le courant (Plastique, bois, verre).
            `,
            summary: [
                "Le courant va du + vers le -.",
                "Un interrupteur ouvert = courant coupé.",
                "Attention aux courts-circuits (le + relié directement au -) : Danger d'incendie !"
            ],
            exercises: [
                {
                    id: 'ex-elec-1',
                    question: "Quel matériau est un isolant ?",
                    options: ["Le cuivre", "Le fer", "Le plastique", "L'eau salée"],
                    correctAnswer: 2,
                    explanation: "Le plastique ne contient pas de charges libres pour transporter le courant."
                }
            ]
        },
        {
            id: 'phys-4e-06',
            part: 'Partie 1 : Physique',
            title: '6. Sources et Récepteurs de lumière',
            story: "Dans le noir total, on ne voit rien. Pour voir, il faut de la lumière. Mais d'où vient-elle ? Soit l'objet la fabrique (Soleil, Lampe), soit il la renvoie (Lune, Miroir).",
            content: `
### 1. Sources Primaires
Elles produisent leur propre lumière. (Soleil, étoile, feu, lampe allumée, luciole).

### 2. Sources Secondaires (Objets diffusants)
Elles ne produisent pas de lumière mais renvoient celle qu'elles reçoivent. (Lune, miroir, table blanche, planète).

### 3. Récepteurs
Sensibles à la lumière (L'œil, une caméra, un panneau solaire, la peau qui bronze).

> **🌕 Analogie : La Lune**
>
> La Lune n'est pas une ampoule. C'est un miroir (un peu sale) qui réfléchit la lumière du Soleil. Sans Soleil, la Lune est invisible.
            `,
            summary: [
                "Primaire = Fabrique la lumière.",
                "Secondaire = Renvoie la lumière.",
                "Pour voir un objet, il faut que la lumière parte de l'objet et arrive dans notre œil."
            ],
            exercises: [
                {
                    id: 'ex-lum-1',
                    question: "La Lune est une source :",
                    options: ["Primaire", "Secondaire", "Tertiaire", "De chaleur"],
                    correctAnswer: 1,
                    explanation: "Elle ne produit pas sa propre lumière, elle diffuse celle du Soleil."
                }
            ]
        },
        {
            id: 'phys-4e-07',
            part: 'Partie 1 : Physique',
            title: '7. Propagation rectiligne de la lumière',
            story: "Pourquoi ne peut-on pas voir derrière un mur ? Parce que la lumière est une voyageuse pressée qui ne sait aller que tout droit. Elle ne sait pas tourner !",
            content: `
### 1. Le Principe
Dans un milieu transparent et homogène (air, eau, vide), la lumière se propage en **ligne droite**.

### 2. Le Rayon Lumineux
On le représente par une droite avec une flèche indiquant le sens de propagation.

### 3. Les Ombres
Conséquence de la propagation rectiligne. Puisque la lumière ne contourne pas les obstacles opaques, elle crée une zone d'ombre derrière eux.
            `,
            summary: [
                "La lumière voyage en ligne droite.",
                "Vitesse de la lumière = 300 000 km/s (c'est très vite !).",
                "Ombre propre (sur l'objet) et Ombre portée (sur le sol)."
            ],
            exercises: [
                {
                    id: 'ex-prop-1',
                    question: "Comment se propage la lumière dans le vide ?",
                    options: ["En zig-zag", "En cercle", "En ligne droite", "Elle ne se propage pas"],
                    correctAnswer: 2,
                    explanation: "C'est le principe fondamental de la propagation rectiligne."
                }
            ]
        },
        {
            id: 'phys-4e-08',
            part: 'Partie 1 : Physique',
            title: '8. Réflexion et Réfraction de la lumière',
            story: "Regardez une paille dans un verre d'eau : elle semble cassée ! C'est une illusion d'optique due à la Réfraction. La lumière change de direction quand elle change de milieu (Air -> Eau).",
            content: `
### 1. La Réflexion
La lumière rebondit sur une surface lisse (miroir). Angle d'incidence = Angle de réflexion.

### 2. La Réfraction
La lumière est déviée quand elle traverse la surface de séparation entre deux milieux transparents différents (ex: air et eau).

> **🏎 Analogie : La Voiture**
>
> Imaginez une voiture qui roule sur la route (l'air) et qui arrive dans le sable (l'eau). Une roue freine en premier, ce qui fait tourner la voiture. La lumière fait pareil.
            `,
            summary: [
                "Réflexion = Rebond (Miroir).",
                "Réfraction = Déviation (Lentille, Eau).",
                "C'est la réfraction qui permet aux loupes et aux lunettes de fonctionner."
            ],
            exercises: [
                {
                    id: 'ex-ref-1',
                    question: "Le phénomène qui fait qu'un bâton paraît brisé dans l'eau est :",
                    options: ["La réflexion", "La réfraction", "La diffraction", "L'absorption"],
                    correctAnswer: 1,
                    explanation: "Les rayons lumineux sont déviés en sortant de l'eau, trompant notre cerveau sur la position réelle du bâton."
                }
            ]
        },

        // ==========================================
        // PARTIE 2 : CHIMIE
        // ==========================================

        {
            id: 'chim-4e-09',
            part: 'Partie 2 : Chimie',
            title: '9. Mélanges et Corps purs',
            story: "L'eau du robinet est-elle pure ? Non ! C'est un mélange (eau + sels minéraux + chlore). Un corps pur, c'est comme une équipe composée uniquement de clones, tous identiques.",
            content: `
### 1. Mélanges
- **Homogène** : On ne distingue pas les constituants à l'œil nu (ex: eau salée, sirop).
- **Hétérogène** : On voit les différents constituants (ex: eau + huile, eau + sable).

### 2. Corps Purs
Constitué d'une seule espèce chimique. (ex: Eau distillée, Fer pur, Diamant).

### 3. Séparation
Décantation (laisser reposer), Filtration (filtre à café), Distillation (faire bouillir).
            `,
            summary: [
                "Mélange homogène = 1 seule phase visible.",
                "Mélange hétérogène = Plusieurs phases.",
                "L'eau minérale est un mélange homogène."
            ],
            exercises: [
                {
                    id: 'ex-mel-1',
                    question: "L'eau boueuse (terre + eau) est un mélange :",
                    options: ["Homogène", "Hétérogène", "Gazeux", "Pur"],
                    correctAnswer: 1,
                    explanation: "On voit distinctement les particules de terre flotter, donc c'est hétérogène."
                }
            ]
        },
        {
            id: 'chim-4e-10',
            part: 'Partie 2 : Chimie',
            title: '10. Structure de la matière (Atomes)',
            story: "Si on coupe un morceau de fer en deux, puis encore, et encore... à la fin, il reste une minuscule brique indivisible : l'Atome. Tout l'univers est un jeu de Lego géant fait d'atomes.",
            content: `
### 1. L'Atome
Constituant élémentaire de la matière. Sphérique et minuscule (0.1 nanomètre).
- Symbole : Une majuscule (ex: C pour Carbone, H pour Hydrogène, O pour Oxygène).

### 2. La Molécule
Un assemblage d'atomes liés entre eux.

- Eau ($H_2O$) : 2 atomes H + 1 atome O.
- Dioxygène ($O_2$) : 2 atomes O.

> **🧱 Analogie : Les Lego**
>
> Atome = Brique simple (Rouge, Bleue...).
> Molécule = Construction (Maison, Voiture...).
            `,
            summary: [
                "Atome = Brique de base.",
                "Molécule = Assemblage d'atomes.",
                "Formule chimique ($H_2O$) indique la composition."
            ],
            exercises: [
                {
                    id: 'ex-atom-1',
                    question: "Quel est le symbole de l'atome d'Oxygène ?",
                    options: ["Ox", "O", "Y", "G"],
                    correctAnswer: 1,
                    explanation: "O comme Oxygène. H comme Hydrogène. C comme Carbone."
                }
            ]
        },
        {
            id: 'chim-4e-11',
            part: 'Partie 2 : Chimie',
            title: '11. Moles et Grandeurs Molaires',
            story: "Les atomes sont si petits qu'il est impossible de les compter un par un. Les chimistes les comptent donc par 'paquets' géants. Ce paquet s'appelle une Mole. C'est comme une 'douzaine' d'œufs, mais version XXL.",
            content: `
### 1. La Mole (mol)
Unité de quantité de matière. Une mole contient $6,02 \\times 10^{23}$ atomes (Nombre d'Avogadro). C'est énorme !

### 2. Masse Molaire (M)
C'est la masse d'une mole d'atomes (en g/mol). On la trouve dans le tableau périodique.

- M(C) = 12 g/mol.
- M(O) = 16 g/mol.

### 3. Formule
$n = \\frac{m}{M}$
(Nombre de moles = masse / Masse Molaire)
            `,
            summary: [
                "Mole = Paquet d'atomes.",
                "Constante d'Avogadro $N_A = 6.02 \\times 10^{23}$.",
                "n (mol) = m (g) / M (g/mol)."
            ],
            exercises: [
                {
                    id: 'ex-mol-1',
                    question: "L'unité de la quantité de matière est :",
                    options: ["Le gramme", "Le litre", "La mole", "Le mètre"],
                    correctAnswer: 2,
                    explanation: "La mole est l'unité internationale pour compter les entités chimiques."
                }
            ]
        },
        {
            id: 'chim-4e-12',
            part: 'Partie 2 : Chimie',
            title: '12. Réaction Chimique',
            story: "La Chimie, c'est de la magie expliquée. Quand on mélange des ingrédients et qu'ils se transforment en quelque chose de nouveau, c'est une réaction chimique. Rien ne se perd, rien ne se crée, tout se transforme !",
            content: `
### 1. Principe (Lavoisier)
Au cours d'une réaction chimique, les atomes des **Réactifs** (ingrédients) se réarrangent pour former les **Produits** (résultat). Les atomes sont conservés.

### 2. Équation Bilan
On l'écrit comme une addition :
Carbone + Dioxygène $\\rightarrow$ Dioxyde de Carbone
$C + O_2 \\rightarrow CO_2$

### 3. Combustion
Brûler quelque chose (combustible) nécessite de l'oxygène (comburant) et dégage de la chaleur.
            `,
            summary: [
                "Réactifs $\\rightarrow$ Produits.",
                "Conservation de la masse (Masse avant = Masse après).",
                "Conservation des atomes (Il faut équilibrer l'équation)."
            ],
            exercises: [
                {
                    id: 'ex-reac-1',
                    question: "Dans la réaction $C + O_2 \\rightarrow CO_2$, qui sont les réactifs ?",
                    options: ["$CO_2$", "$C$ et $O_2$", "$O_2$ seulement", "La chaleur"],
                    correctAnswer: 1,
                    explanation: "Les réactifs sont ceux qui sont consommés (avant la flèche)."
                }
            ]
        }
    ]
};
