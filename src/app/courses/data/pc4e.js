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
            analogy: {
                title: "🔬 La Science comme un Enquêteur de Police",
                content: `Imagine que tu es un enquêteur de police à Dakar ! 🕵️

**L'OBSERVATION** : Tu arrives sur une scène de crime et tu regardes tout attentivement.
Comme un scientifique qui observe un phénomène naturel.

**L'HYPOTHÈSE** : Tu proposes une théorie sur ce qui s'est passé.
"Je pense que le voleur est passé par la fenêtre..."

**L'EXPÉRIENCE** : Tu vérifies ta théorie avec des preuves.
Tu cherches des empreintes, des témoins, des indices.

**LA CONCLUSION** : Si les preuves confirment, ta théorie devient un fait.
Sinon, tu proposes une nouvelle hypothèse !

C'est exactement ce que font les scientifiques. Ils ne devinent pas - ils PROUVENT !
La Physique-Chimie, c'est résoudre les mystères de l'univers avec méthode.`
            },
            summary: [
                "Physique = Étude des lois de la nature.",
                "Chimie = Étude de la matière.",
                "La science repose sur l'expérience et la preuve."
            ],
            simulation: {
                id: 'scientific-method-sim',
                title: 'La Démarche Scientifique Interactive',
                type: 'chap1-science-intro'
            },
            image: '/simulations/pc4e/chap1-science.png',
            defis: [
                {
                    id: 'defi-intro-1',
                    question: "Quelle science étudie la réaction entre le vinaigre et le bicarbonate ?",
                    options: ["La Physique", "La Chimie", "La Biologie", "L'Astronomie"],
                    correctAnswer: 1,
                    explanation: "C'est une transformation de la matière (réaction chimique qui crée du gaz).",
                    points: 10
                },
                {
                    id: 'defi-intro-2',
                    question: "Quelle est la première étape de la démarche scientifique ?",
                    options: ["L'expérience", "L'hypothèse", "L'observation", "La conclusion"],
                    correctAnswer: 2,
                    explanation: "Tout commence par observer un phénomène qui nous intrigue !",
                    points: 10
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

### 3. Préfixes courants
- kilo (k) = 1000 fois plus grand
- centi (c) = 100 fois plus petit
- milli (m) = 1000 fois plus petit
            `,
            analogy: {
                title: "📏 Les Mesures comme le Commerce au Marché Sandaga",
                content: `Au marché Sandaga, tout le monde utilise les mêmes unités ! 🏪

**LE KILOGRAMME** : Quand tu achètes du riz, on te dit "5 kg", pas "un grand sac".
Si chaque vendeur avait sa propre mesure, ce serait le chaos !

**LE LITRE** : Pour l'huile, on mesure en litres.
"2 litres d'huile de palme" - tout le monde comprend.

**LE MÈTRE** : Le tailleur mesure le tissu en mètres.
"Il me faut 3 mètres de wax" - c'est précis !

**POURQUOI C'EST IMPORTANT ?**
Imagine commander 2 kg de poisson et recevoir 200 g parce que le vendeur utilise une autre mesure...
Les unités internationales, c'est comme un langage commun pour le monde entier !

La balance du marché et la balance du laboratoire parlent le même langage : le kilogramme.`
            },
            summary: [
                "Toujours indiquer l'unité après un nombre !",
                "1 L = 1 $dm^3$.",
                "1 kg = 1000 g."
            ],
            simulation: {
                id: 'measurement-tools-sim',
                title: 'Laboratoire de Mesures',
                type: 'chap2-mesures'
            },
            image: '/simulations/pc4e/chap2-mesures.png',
            defis: [
                {
                    id: 'defi-mes-1',
                    question: "Quel instrument mesure le volume d'un liquide ?",
                    options: ["La balance", "Le thermomètre", "L'éprouvette graduée", "Le double-décimètre"],
                    correctAnswer: 2,
                    explanation: "L'éprouvette graduée permet de lire le volume en mL ou L.",
                    points: 10
                },
                {
                    id: 'defi-mes-2',
                    question: "Combien de grammes dans 2,5 kg ?",
                    options: ["25 g", "250 g", "2500 g", "25000 g"],
                    correctAnswer: 2,
                    explanation: "1 kg = 1000 g, donc 2,5 × 1000 = 2500 g.",
                    points: 15
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
            analogy: {
                title: "⛵ La Densité comme les Pirogues sur le Fleuve Sénégal",
                content: `Pourquoi la pirogue en bois flotte mais la pierre coule ? 🌊

**LA PIROGUE EN BOIS**
Le bois est léger pour sa taille. Beaucoup de volume, peu de masse.
Sa densité est inférieure à 1 → Elle FLOTTE !

**LA PIERRE**
La pierre est lourde pour sa taille. Peu de volume, beaucoup de masse.
Sa densité est supérieure à 1 → Elle COULE !

**L'HUILE SUR L'EAU**
Regarde bien quand maman cuisine : l'huile flotte toujours sur l'eau du thiéboudienne.
L'huile a une densité de 0,9 (moins que l'eau = 1).

**LE TEST SIMPLE**
Prends un œuf frais et un œuf pourri, mets-les dans l'eau :
- L'œuf frais coule (plus dense)
- L'œuf pourri flotte (gaz à l'intérieur, moins dense)

C'est comme ça que grand-mère vérifie ses œufs au marché !`
            },
            summary: [
                "Masse : quantité de matière (kg).",
                "Masse Volumique : $\\rho = m/V$.",
                "Densité : indique si ça flotte ou coule."
            ],
            simulation: {
                id: 'density-explorer',
                title: 'Explorateur de Densité',
                type: 'chap3-densite'
            },
            image: '/simulations/pc4e/chap3-densite.png',
            defis: [
                {
                    id: 'defi-dens-1',
                    question: "L'huile flotte sur l'eau car :",
                    options: ["Elle est plus visqueuse", "Sa densité est inférieure à 1", "Elle est plus lourde", "C'est magique"],
                    correctAnswer: 1,
                    explanation: "Tout corps avec une densité inférieure à celle de l'eau (d < 1) flotte.",
                    points: 10
                },
                {
                    id: 'defi-dens-2',
                    question: "Un objet a une masse de 500g et un volume de 250 cm³. Quelle est sa masse volumique ?",
                    options: ["0,5 g/cm³", "2 g/cm³", "125 g/cm³", "750 g/cm³"],
                    correctAnswer: 1,
                    explanation: "ρ = m/V = 500/250 = 2 g/cm³. Cet objet coulera dans l'eau !",
                    points: 20
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
            analogy: {
                title: "🌍 Poids et Masse comme le Lutteur Sénégalais",
                content: `Imagine Balla Gaye 2, le champion de lutte sénégalaise ! 💪

**SA MASSE = 120 kg**
C'est la quantité de muscles, d'os, de chair dans son corps.
Qu'il soit à Dakar, à Paris ou sur la Lune, sa masse reste 120 kg.

**SON POIDS SUR TERRE = 1200 N**
C'est la force avec laquelle la Terre l'attire vers le sol.
P = 120 kg × 10 N/kg = 1200 Newtons

**SON POIDS SUR LA LUNE = 200 N**
Sur la Lune, g = 1,6 N/kg (6 fois moins que sur Terre).
P = 120 kg × 1,6 = 192 N ≈ 200 N
Il pourrait sauter 6 fois plus haut ! 🚀

**MAIS ATTENTION !**
Sa masse reste 120 kg. Il n'a pas maigri !
Il faudrait toujours la même force pour le pousser dans l'arène.

Le dynamomètre mesure le POIDS (force).
La balance mesure la MASSE (quantité de matière).`
            },
            summary: [
                "P = Poids (Newton).",
                "m = Masse (kg).",
                "P = m × g.",
                "Le poids varie selon la planète, la masse non."
            ],
            simulation: {
                id: 'weight-mass-sim',
                title: 'Poids vs Masse : Terre et Lune',
                type: 'chap4-poids-masse'
            },
            image: '/simulations/pc4e/chap4-poids-masse.png',
            defis: [
                {
                    id: 'defi-poids-1',
                    question: "Si votre masse est de 50 kg, votre poids sur Terre (g=10) est de :",
                    options: ["50 kg", "500 N", "5 N", "500 kg"],
                    correctAnswer: 1,
                    explanation: "$P = m \\times g = 50 \\times 10 = 500$ Newtons.",
                    points: 15
                },
                {
                    id: 'defi-poids-2',
                    question: "Sur la Lune (g=1,6), une personne de 60 kg pèse :",
                    options: ["60 N", "96 N", "600 N", "37,5 kg"],
                    correctAnswer: 1,
                    explanation: "P = 60 × 1,6 = 96 N. Attention, le poids est en Newtons, pas en kg !",
                    points: 20
                }
            ]
        },
        {
            id: 'phys-4e-05',
            part: 'Partie 1 : Physique',
            title: '5. Introduction à l\'Électricité',
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
            analogy: {
                title: "⚡ L'Électricité comme le Réseau de Car Rapide de Dakar",
                content: `L'électricité, c'est comme le système de transport de Dakar ! 🚌

**LA PILE = LA GARE ROUTIÈRE**
C'est là que tout commence ! Les passagers (électrons) partent de la borne +.
Comme la gare routière Pompiers qui envoie les cars dans toute la ville.

**LES FILS = LES ROUTES**
Ce sont les chemins que prennent les électrons.
Comme les routes goudronnées pour les cars rapides.

**L'AMPOULE = LE MARCHÉ**
C'est là que les passagers "travaillent" et dépensent leur énergie.
L'ampoule utilise l'énergie des électrons pour produire de la lumière.

**L'INTERRUPTEUR = UN BARRAGE DE POLICE**
Quand il est ouvert (route bloquée), les cars ne passent plus.
Quand il est fermé (route libre), la circulation reprend !

**CIRCUIT FERMÉ = BOUCLE COMPLÈTE**
Les cars doivent pouvoir faire le tour complet et revenir à la gare.
Si la route est coupée quelque part, plus personne ne circule !`
            },
            summary: [
                "Le courant va du + vers le -.",
                "Un interrupteur ouvert = courant coupé.",
                "Attention aux courts-circuits : Danger d'incendie !"
            ],
            simulation: {
                id: 'intro-electricity-sim',
                title: "Introduction à l'Électricité",
                type: 'chap5-electricite'
            },
            image: '/simulations/pc4e/chap5-electricite.png',
            defis: [
                {
                    id: 'defi-elec-1',
                    question: "Quel matériau est un isolant ?",
                    options: ["Le cuivre", "Le fer", "Le plastique", "L'eau salée"],
                    correctAnswer: 2,
                    explanation: "Le plastique ne contient pas de charges libres pour transporter le courant.",
                    points: 10
                },
                {
                    id: 'defi-elec-2',
                    question: "Que se passe-t-il si on ouvre l'interrupteur dans un circuit ?",
                    options: ["L'ampoule brille plus fort", "Le courant continue", "Le circuit est coupé, l'ampoule s'éteint", "La pile explose"],
                    correctAnswer: 2,
                    explanation: "Un interrupteur ouvert coupe le circuit. Le courant ne peut plus circuler.",
                    points: 10
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
            `,
            analogy: {
                title: "🌕 Sources de Lumière comme le Match de Football au Stade",
                content: `Imagine un match de football au stade Léopold Sédar Senghor la nuit ! ⚽

**LES PROJECTEURS = SOURCES PRIMAIRES**
Ils fabriquent leur propre lumière. Sans eux, le stade serait dans le noir.
Comme le Soleil, ils PRODUISENT la lumière.

**LES JOUEURS EN MAILLOT BLANC = SOURCES SECONDAIRES**
Ils ne brillent pas tout seuls ! Ils renvoient la lumière des projecteurs.
Éteins les projecteurs → tu ne vois plus les joueurs.
C'est pareil pour la Lune : elle renvoie la lumière du Soleil.

**TES YEUX = RÉCEPTEURS**
Tes yeux captent la lumière qui arrive des joueurs et des projecteurs.
Sans lumière qui arrive dans tes yeux, tu es aveugle dans le noir.

**POURQUOI TU VOIS LE BALLON ?**
Le projecteur envoie la lumière → Le ballon la renvoie → Tes yeux la captent.
C'est une chaîne : Source → Objet → Récepteur !`
            },
            summary: [
                "Primaire = Fabrique la lumière.",
                "Secondaire = Renvoie la lumière.",
                "Pour voir un objet, il faut que la lumière parte de l'objet et arrive dans notre œil."
            ],
            simulation: {
                id: 'light-sources-sim',
                title: 'Sources et Récepteurs de Lumière',
                type: 'chap6-sources-lumiere'
            },
            image: '/simulations/pc4e/chap6-sources-lumiere.png',
            defis: [
                {
                    id: 'defi-lum-1',
                    question: "La Lune est une source :",
                    options: ["Primaire", "Secondaire", "Tertiaire", "De chaleur"],
                    correctAnswer: 1,
                    explanation: "Elle ne produit pas sa propre lumière, elle diffuse celle du Soleil.",
                    points: 10
                },
                {
                    id: 'defi-lum-2',
                    question: "Pourquoi voit-on ce livre ?",
                    options: ["Il produit sa propre lumière", "Il renvoie la lumière vers nos yeux", "Nos yeux produisent la lumière", "Le livre est magique"],
                    correctAnswer: 1,
                    explanation: "Le livre est une source secondaire : il renvoie la lumière (du Soleil ou de la lampe) vers nos yeux.",
                    points: 15
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
            analogy: {
                title: "🏹 La Lumière comme une Flèche de Chasseur",
                content: `La lumière voyage comme une flèche tirée par un arc ! 🎯

**LA FLÈCHE VA TOUT DROIT**
Quand le chasseur tire sa flèche, elle part en ligne droite.
Elle ne peut pas contourner un arbre ou tourner dans un virage.
La lumière fait exactement pareil !

**L'OMBRE DU BAOBAB**
Pourquoi y a-t-il une zone fraîche sous le baobab à midi ?
Le soleil envoie ses "flèches de lumière" vers le sol.
Mais le baobab les bloque → il crée une ombre.

**TU NE VOIS PAS À TRAVERS LES MURS**
La lumière qui part de Mamadou ne peut pas traverser le mur.
Elle ne sait pas tourner pour venir jusqu'à tes yeux.
C'est pour ça que tu dois ouvrir la porte pour le voir !

**MAIS ATTENTION AU SON !**
Le son, lui, peut contourner les obstacles.
Tu entends Mamadou parler même sans le voir.
Le son fait des courbes, la lumière non.`
            },
            summary: [
                "La lumière voyage en ligne droite.",
                "Vitesse de la lumière = 300 000 km/s (très vite !).",
                "Ombre propre (sur l'objet) et Ombre portée (sur le sol)."
            ],
            simulation: {
                id: 'light-propagation-pc4',
                title: 'Propagation Rectiligne',
                type: 'chap7-propagation-lumiere'
            },
            image: '/simulations/pc4e/chap7-propagation.png',
            defis: [
                {
                    id: 'defi-prop-1',
                    question: "Comment se propage la lumière dans le vide ?",
                    options: ["En zig-zag", "En cercle", "En ligne droite", "Elle ne se propage pas"],
                    correctAnswer: 2,
                    explanation: "C'est le principe fondamental de la propagation rectiligne.",
                    points: 10
                },
                {
                    id: 'defi-prop-2',
                    question: "Pourquoi le Soleil crée une ombre derrière toi ?",
                    options: ["Parce que tu es transparent", "Parce que la lumière ne peut pas te traverser", "Parce que l'ombre est attirée par toi", "Parce que le Soleil a peur de toi"],
                    correctAnswer: 1,
                    explanation: "Tu es opaque : tu bloques la lumière du Soleil, créant une zone sans lumière derrière toi.",
                    points: 15
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

### 3. Loi de Snell-Descartes
$n_1 \\times \\sin(i) = n_2 \\times \\sin(r)$
            `,
            analogy: {
                title: "🚗 La Réfraction comme un Car Rapide sur Deux Routes",
                content: `Imagine un car rapide qui passe du goudron au sable ! 🚌

**LE CAR SUR LE GOUDRON**
Il roule vite sur la belle route goudronnée.
C'est comme la lumière dans l'air : elle va vite.

**LA ROUE DROITE ENTRE DANS LE SABLE**
Quand le car arrive sur le sable en biais, la roue droite freine d'abord.
La roue gauche continue à la même vitesse.
Résultat : le car TOURNE vers la droite !

**C'EST LA RÉFRACTION !**
La lumière fait pareil quand elle passe de l'air à l'eau :
- L'eau "freine" la lumière (elle ralentit)
- La lumière change de direction

**LE BÂTON "CASSÉ" DANS L'EAU**
Le bâton n'est pas vraiment cassé !
C'est juste la lumière qui change de direction en sortant de l'eau.
Notre cerveau est trompé → il pense que le bâton est plié.

**LES LUNETTES ET LES LOUPES**
Elles utilisent la réfraction pour agrandir ou corriger la vue !`
            },
            summary: [
                "Réflexion = Rebond (Miroir).",
                "Réfraction = Déviation (Lentille, Eau).",
                "C'est la réfraction qui permet aux loupes et aux lunettes de fonctionner."
            ],
            simulation: {
                id: 'refraction-simulator',
                title: 'Simulateur de Réfraction',
                type: 'chap8-refraction'
            },
            image: '/simulations/pc4e/chap8-refraction.png',
            defis: [
                {
                    id: 'defi-ref-1',
                    question: "Le phénomène qui fait qu'un bâton paraît brisé dans l'eau est :",
                    options: ["La réflexion", "La réfraction", "La diffraction", "L'absorption"],
                    correctAnswer: 1,
                    explanation: "Les rayons lumineux sont déviés en sortant de l'eau, trompant notre cerveau sur la position réelle du bâton.",
                    points: 10
                },
                {
                    id: 'defi-ref-2',
                    question: "Dans un miroir plan, ton image apparaît :",
                    options: ["Plus grande", "Plus petite", "De la même taille mais inversée gauche-droite", "Floue"],
                    correctAnswer: 2,
                    explanation: "Le miroir plan donne une image de même taille, mais avec inversion gauche-droite (comme ta main).",
                    points: 15
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
            analogy: {
                title: "🍲 Mélanges comme la Cuisine Sénégalaise",
                content: `Le thiéboudienne et les corps purs ! 🍚

**LE THIÉBOUDIENNE = MÉLANGE HÉTÉROGÈNE**
Tu vois clairement le riz, le poisson, les légumes séparés.
Chaque ingrédient garde son identité.
Tu peux même les séparer avec tes doigts !

**LE CAFÉ TOUBA = MÉLANGE HOMOGÈNE**
Le café, le poivre selim et l'eau sont bien mélangés.
Tu ne peux pas voir les différents ingrédients à l'œil nu.
Mais ce n'est PAS de l'eau pure... c'est un mélange !

**L'EAU DISTILLÉE = CORPS PUR**
C'est de l'eau et RIEN que de l'eau. Pas de sel, pas de minéraux.
Comme un seul joueur, tout seul sur le terrain.

**LA DÉCANTATION À LA MAISON**
L'eau du robinet parfois est trouble. On la met dans une jarre.
Les impuretés tombent au fond → L'eau claire est au-dessus.
C'est de la décantation !

**LA FILTRATION**
Le filtre du café retient les grains mais laisse passer le liquide.
Au labo, on utilise du papier filtre.`
            },
            summary: [
                "Mélange homogène = 1 seule phase visible.",
                "Mélange hétérogène = Plusieurs phases.",
                "L'eau minérale est un mélange homogène."
            ],
            simulation: {
                id: 'mixture-separation-sim',
                title: 'Séparation des Mélanges',
                type: 'chap9-melanges'
            },
            image: '/simulations/pc4e/chap9-melanges.png',
            defis: [
                {
                    id: 'defi-mel-1',
                    question: "L'eau boueuse (terre + eau) est un mélange :",
                    options: ["Homogène", "Hétérogène", "Gazeux", "Pur"],
                    correctAnswer: 1,
                    explanation: "On voit distinctement les particules de terre flotter, donc c'est hétérogène.",
                    points: 10
                },
                {
                    id: 'defi-mel-2',
                    question: "Comment séparer le sable de l'eau ?",
                    options: ["Par distillation", "Par filtration", "Par décantation puis filtration", "Impossible"],
                    correctAnswer: 2,
                    explanation: "On laisse reposer (décantation), puis on filtre pour retenir le sable.",
                    points: 15
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

### 3. Structure de l'atome
- Noyau central : protons (+) et neutrons (0)
- Électrons (-) qui tournent autour
            `,
            analogy: {
                title: "🧱 Les Atomes comme les Briques de Lego",
                content: `L'univers est un immense jeu de Lego ! 🎮

**LES BRIQUES DE BASE = LES ATOMES**
Tu as des briques rouges (Oxygène), bleues (Hydrogène), noires (Carbone)...
Chaque couleur est un type d'atome différent.
Il existe environ 118 "couleurs" différentes (éléments chimiques).

**LES CONSTRUCTIONS = LES MOLÉCULES**
Quand tu assembles 2 briques bleues (H) + 1 brique rouge (O) → Tu fais de l'eau !
$H_2O$ = La molécule d'eau.

Une maison Lego = Une molécule complexe (comme l'ADN dans ton corps).

**ON NE PEUT PAS CASSER UNE BRIQUE LEGO**
L'atome est la plus petite brique. On ne peut pas le couper simplement.
(En réalité on peut, mais ça demande BEAUCOUP d'énergie → bombe atomique !)

**LE FER = PLEIN DE BRIQUES IDENTIQUES**
Un morceau de fer, c'est des milliards de briques "Fe" collées ensemble.
Toutes identiques, comme un mur fait de la même brique.

**L'AIR = UN MÉLANGE DE CONSTRUCTIONS**
L'air contient des molécules $O_2$ (dioxygène), $N_2$ (diazote), $CO_2$...`
            },
            summary: [
                "Atome = Brique de base.",
                "Molécule = Assemblage d'atomes.",
                "Formule chimique ($H_2O$) indique la composition."
            ],
            simulation: {
                id: 'atom-builder-sim',
                title: 'Constructeur de Molécules',
                type: 'chap10-atomes'
            },
            image: '/simulations/pc4e/chap10-atomes.png',
            defis: [
                {
                    id: 'defi-atom-1',
                    question: "Quel est le symbole de l'atome d'Oxygène ?",
                    options: ["Ox", "O", "Y", "G"],
                    correctAnswer: 1,
                    explanation: "O comme Oxygène. H comme Hydrogène. C comme Carbone.",
                    points: 10
                },
                {
                    id: 'defi-atom-2',
                    question: "Combien d'atomes y a-t-il dans une molécule d'eau H₂O ?",
                    options: ["1 atome", "2 atomes", "3 atomes", "20 atomes"],
                    correctAnswer: 2,
                    explanation: "H₂O = 2 atomes d'Hydrogène + 1 atome d'Oxygène = 3 atomes au total.",
                    points: 15
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
            analogy: {
                title: "📦 La Mole comme les Œufs au Marché",
                content: `Au marché, on ne compte pas les œufs un par un ! 🥚

**LA DOUZAINE D'ŒUFS**
Personne ne dit "je veux 12 œufs". On dit "une douzaine".
C'est plus pratique pour les gros achats.

**LA MOLE = UNE "DOUZAINE" GÉANTE**
1 mole = $6,02 \\times 10^{23}$ particules
C'est un nombre tellement grand qu'on ne peut même pas l'imaginer !
Si tu comptais 1 atome par seconde, tu mettrais 20 milliards d'années !

**POURQUOI CE NOMBRE ?**
Parce que 1 mole d'atomes de carbone pèse EXACTEMENT 12 grammes.
Pratique pour les chimistes : on peut peser au lieu de compter !

**EXEMPLE CONCRET**
1 mole de molécules d'eau ($H_2O$) = 18 grammes d'eau.
C'est environ 18 mL d'eau, soit presque 2 cuillères à soupe !

**AU LABORATOIRE**
On ne dit pas "donne-moi 602 000 000 000 000 000 000 000 atomes de fer".
On dit "donne-moi 1 mole de fer" = 56 g de fer. Simple !`
            },
            summary: [
                "Mole = Paquet d'atomes.",
                "Constante d'Avogadro $N_A = 6,02 \\times 10^{23}$.",
                "n (mol) = m (g) / M (g/mol)."
            ],
            simulation: {
                id: 'mole-concept-sim',
                title: 'Le Concept de Mole',
                type: 'chap11-mole'
            },
            image: '/simulations/pc4e/chap11-mole.png',
            defis: [
                {
                    id: 'defi-mol-1',
                    question: "L'unité de la quantité de matière est :",
                    options: ["Le gramme", "Le litre", "La mole", "Le mètre"],
                    correctAnswer: 2,
                    explanation: "La mole est l'unité internationale pour compter les entités chimiques.",
                    points: 10
                },
                {
                    id: 'defi-mol-2',
                    question: "Si M(C) = 12 g/mol, quelle masse pour 2 moles de carbone ?",
                    options: ["6 g", "12 g", "24 g", "2 g"],
                    correctAnswer: 2,
                    explanation: "m = n × M = 2 × 12 = 24 g de carbone.",
                    points: 20
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

### 4. Conservation de la masse
Masse des réactifs = Masse des produits
            `,
            analogy: {
                title: "🍳 La Réaction Chimique comme la Cuisine",
                content: `La chimie, c'est comme cuisiner le thiéboudienne ! 🍚

**LES RÉACTIFS = LES INGRÉDIENTS**
Tu prends : riz + poisson + tomate + oignon + huile
Ce sont les réactifs, les "matières premières".

**LA RÉACTION = LA CUISSON**
Pendant la cuisson, les ingrédients se transforment.
Les saveurs se mélangent, les couleurs changent.
Une nouvelle "substance" se forme !

**LES PRODUITS = LE PLAT FINAL**
Le thiéboudienne prêt est le produit de la réaction.
Ce n'est plus du riz + poisson séparés → C'est un nouveau plat délicieux !

**CONSERVATION DE LA MASSE**
Si tu pèses tous tes ingrédients avant = 2 kg
Ton thiéboudienne pèsera aussi = 2 kg
(sauf si de l'eau s'est évaporée !)

"Rien ne se perd, rien ne se crée, tout se transforme" - Lavoisier

**LE TRIANGLE DU FEU**
Pour faire le feu sous la marmite : Bois + Oxygène + Chaleur
Si tu enlèves un élément → le feu s'éteint !`
            },
            summary: [
                "Réactifs $\\rightarrow$ Produits.",
                "Conservation de la masse (Masse avant = Masse après).",
                "Conservation des atomes (Il faut équilibrer l'équation)."
            ],
            simulation: {
                id: 'mass-conservation',
                title: 'Conservation de la Masse',
                type: 'chap12-conservation'
            },
            image: '/simulations/pc4e/chap12-conservation.png',
            defis: [
                {
                    id: 'defi-reac-1',
                    question: "Dans la réaction $C + O_2 \\rightarrow CO_2$, qui sont les réactifs ?",
                    options: ["$CO_2$", "$C$ et $O_2$", "$O_2$ seulement", "La chaleur"],
                    correctAnswer: 1,
                    explanation: "Les réactifs sont ceux qui sont consommés (avant la flèche).",
                    points: 10
                },
                {
                    id: 'defi-reac-2',
                    question: "Si on brûle 12 g de carbone avec 32 g d'oxygène, quelle masse de CO₂ obtient-on ?",
                    options: ["12 g", "32 g", "44 g", "20 g"],
                    correctAnswer: 2,
                    explanation: "Conservation de la masse : 12 g + 32 g = 44 g de CO₂.",
                    points: 20
                }
            ]
        }
    ]
};
