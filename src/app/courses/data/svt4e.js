export const svt4eData = {
    id: 'svt-4e',
    title: 'SVT 4ème - Sciences de la Vie et de la Terre',
    chapters: [
        // ==========================================
        // PARTIE 1 : SCIENCES DE LA VIE
        // ==========================================

        // THEME 1 : ENVIRONNEMENT
        {
            id: 'svt-4e-01',
            part: 'Partie 1 : Sciences de la Vie',
            title: '1. Ressources naturelles et gestion durable',
            story: "Imaginez un compte en banque avec une somme d'argent qui ne se renouvelle pas (ou très lentement). Si vous dépensez tout tout de suite, il ne restera rien pour vos enfants. La Terre est ce compte en banque.",
            content: `
### 1. Types de ressources
- **Renouvelables** : Se régénèrent vite (Soleil, vent, forêts si bien gérées).
- **Non-renouvelables** : Stock limité (Pétrole, minerais).

### 2. Gestion durable
C'est répondre à nos besoins présents sans compromettre la capacité des générations futures à répondre aux leurs.

> **🎣 Analogie : La Pêche**
>
> Si on pêche tous les poissons, y compris les bébés, il n'y aura plus de reproduction et la pêche s'arrêtera pour toujours. La gestion durable, c'est laisser les bébés grandir.
            `,
            summary: [
                "Ressource = Richesse naturelle.",
                "Développement durable = Écologie + Économie + Social.",
                "Il faut économiser l'eau et l'énergie."
            ],
            exercises: [
                {
                    id: 'ex-ress-1',
                    question: "Le pétrole est une ressource :",
                    options: ["Renouvelable", "Non-renouvelable", "Inépuisable", "Artificielle"],
                    correctAnswer: 1,
                    explanation: "Il faut des millions d'années pour former du pétrole. À l'échelle humaine, il est non-renouvelable."
                }
            ]
        },

        // THEME 2 : FONCTION DE NUTRITION (Implied from content flow L2-L5)
        {
            id: 'svt-4e-02',
            part: 'Partie 1 : Sciences de la Vie',
            title: '2. Digestion et absorption intestinale',
            story: "Votre corps est un chantier de construction. La nourriture, ce sont les briques (trop grosses). La digestion, ce sont les ouvriers qui cassent ces grosses briques en poussière de brique (nutriments) pour qu'elles puissent passer par les petites portes (l'intestin).",
            content: `
### 1. La Digestion
Transformation des aliments en **nutriments** (glucose, acides aminés...) grâce aux dents (action mécanique) et aux sucs digestifs/enzymes (action chimique).

### 2. L'Absorption
C'est le passage des nutriments de l'intestin vers le sang. Cela se passe au niveau des **villosités intestinales** (des petits replis qui augmentent la surface).
            `,
            summary: [
                "Enzymes = Ciseaux chimiques.",
                "Intestin grêle = Lieu de l'absorption.",
                "Les déchets non digérés forment les selles."
            ],
            exercises: [
                {
                    id: 'ex-dig-1',
                    question: "Où les nutriments passent-ils dans le sang ?",
                    options: ["Dans l'estomac", "Dans l'intestin grêle", "Dans la bouche", "Dans le gros intestin"],
                    correctAnswer: 1,
                    explanation: "La paroi de l'intestin grêle est fine et riche en vaisseaux sanguins pour permettre ce passage."
                }
            ]
        },
        {
            id: 'svt-4e-03',
            part: 'Partie 1 : Sciences de la Vie',
            title: '3. Le sang : composition et maladies',
            story: "Le sang est le 'fleuve de la vie' qui transporte tout dans votre corps. C'est une soupe rouge avec plein d'ingrédients flottants : des transporteurs d'oxygène, des soldats et des pansements.",
            content: `
### 1. Composition du sang
- **Plasma** : Le liquide jaune (eau + nutriments).
- **Globules Rouges (Hématies)** : Transportent l'Oxygène (O2). Ils sont rouges.
- **Globules Blancs (Leucocytes)** : Défendent le corps (Soldats).
- **Plaquettes** : Coagulation (bouchent les trous).

### 2. Maladies
L'**Anémie** est un manque de globules rouges (ou de fer). On est fatigué et pâle.
            `,
            summary: [
                "Sang = Plasma + Cellules.",
                "Hémoglobine = Pigment rouge qui fixe l'oxygène.",
                "Anémie = Fatigue due au manque d'oxygène."
            ],
            exercises: [
                {
                    id: 'ex-sang-1',
                    question: "Quel est le rôle des globules rouges ?",
                    options: ["Tuer les microbes", "Transporter l'oxygène", "Coaguler le sang", "Transporter les sucres"],
                    correctAnswer: 1,
                    explanation: "Ils contiennent l'hémoglobine qui agit comme un aimant à oxygène."
                }
            ]
        },
        {
            id: 'svt-4e-04',
            part: 'Partie 1 : Sciences de la Vie',
            title: '4. La circulation sanguine',
            story: "Le cœur est une pompe incroyable qui bat 100 000 fois par jour sans jamais s'arrêter. Il envoie le sang faire deux voyages différents : un petit tour aux poumons pour faire le plein d'air, et un grand tour dans tout le corps pour livrer.",
            content: `
### 1. Le Cœur
Muscle creux à 4 cavités (2 oreillettes, 2 ventricules). Le côté gauche propulse le sang riche en O2 (rouge), le côté droit le sang pauvre en O2 (bleu).

### 2. La Double Circulation
- **Petite circulation (Pulmonaire)** : Cœur $\\rightarrow$ Poumons $\\rightarrow$ Cœur. (Pour oxygéner le sang).
- **Grande circulation (Générale)** : Cœur $\\rightarrow$ Organes $\\rightarrow$ Cœur. (Pour nourrir les organes).
            `,
            summary: [
                "Artères = Cœur vers Organes (partent du cœur).",
                "Veines = Organes vers Cœur (reviennent au cœur).",
                "Le sang rouge et le sang bleu ne se mélangent jamais."
            ],
            exercises: [
                {
                    id: 'ex-circ-1',
                    question: "Quel vaisseau ramène le sang au cœur ?",
                    options: ["Une artère", "Une veine", "Un capillaire", "Une aorte"],
                    correctAnswer: 1,
                    explanation: "Moyen mnémotechnique : Veine = Vient vers le cœur."
                }
            ]
        },
        {
            id: 'svt-4e-05',
            part: 'Partie 1 : Sciences de la Vie',
            title: '5. Pression artérielle et maladies',
            story: "Quand vous arrosez le jardin, si vous appuyez sur le tuyau, l'eau sort plus fort. La pression artérielle, c'est la force avec laquelle le sang pousse contre les murs de vos artères. Si c'est trop fort, ça abîme les tuyaux !",
            content: `
### 1. La Tension (Pression)
On mesure deux chiffres (ex: 12/8). C'est la pression quand le cœur se contracte (Maxi) et quand il se relâche (Mini).

### 2. Maladies Cardiovasculaires
- **Hypertension** : Tension trop haute en permanence. Fatigue le cœur.
- **AVC** : Vaisseau bouché ou éclaté dans le cerveau.
- **Infarctus** : Crise cardiaque (le cœur ne reçoit plus de sang).

> **🚴 Analogie : Le Pneu**
>
> Si on gonfle trop un pneu de vélo (hypertension), il devient dur et risque d'éclater.
            `,
            summary: [
                "Éviter le sel, le tabac et le stress.",
                "Faire du sport protège le cœur.",
                "Hypertension = Tueur silencieux."
            ],
            exercises: [
                {
                    id: 'ex-press-1',
                    question: "Quel facteur augmente le risque de maladies cardiovasculaires ?",
                    options: ["Le sport", "Les légumes", "Le tabac", "L'eau"],
                    correctAnswer: 2,
                    explanation: "Le tabac durcit les artères et augmente la pression."
                }
            ]
        },

        // THEME 3 : REPRODUCTION HUMAINE
        {
            id: 'svt-4e-06',
            part: 'Partie 1 : Sciences de la Vie',
            title: '6. La Puberté',
            story: "C'est le passage de l'enfant à l'adulte capable de se reproduire. C'est comme une 'mise à jour' du corps déclenchée par des messagers chimiques appelés hormones. Tout change : voix, poils, formes...",
            content: `
### 1. Caractères sexuels
- Primaires : Organes reproducteurs (présents à la naissance).
- Secondaires : Poils, seins, mue de la voix (apparaissent à la puberté).

### 2. Fonctionnement
- **Garçon** : Production continue de spermatozoïdes dès la puberté.
- **Fille** : Cycle menstruel (Règles) et ovulation cyclique (tous les 28 jours environ).
            `,
            summary: [
                "Cerveau $\\rightarrow$ Hormones $\\rightarrow$ Organes Sexuels.",
                "Testostérone (Garçon), Œstrogènes (Fille).",
                "Les règles marquent le début d'un nouveau cycle."
            ],
            exercises: [
                {
                    id: 'ex-pub-1',
                    question: "Quelle est la durée moyenne du cycle chez la femme ?",
                    options: ["14 jours", "28 jours", "3 mois", "1 an"],
                    correctAnswer: 1,
                    explanation: "C'est une moyenne. L'ovulation a lieu généralement au 14ème jour."
                }
            ]
        },
        {
            id: 'svt-4e-07',
            part: 'Partie 1 : Sciences de la Vie',
            title: '7. De la fécondation à la naissance',
            story: "C'est l'histoire d'une course de millions de spermatozoïdes. Un seul gagnera le droit d'entrer dans l'ovule. De cette fusion naît une cellule unique qui va se diviser pour devenir un bébé complet.",
            content: `
### 1. La Fécondation
Rencontre des gamètes dans les trompes. Formation de la cellule-œuf.

### 2. La Grossesse
- **Embryon** (2 premiers mois) : Formation des organes.
- **Fœtus** (dès le 3ème mois) : Les organes sont là, il grandit.
- **Placenta** : Organe d'échange (nourriture/oxygène) entre la mère et le bébé. Ils ne mélangent pas leur sang.
            `,
            summary: [
                "Fécondation interne.",
                "Gestation de 9 mois.",
                "L'accouchement : Contractions $\\rightarrow$ Dilatation $\\rightarrow$ Expulsion."
            ],
            exercises: [
                {
                    id: 'ex-fec-1',
                    question: "Comment s'appelle le futur bébé à partir du 3ème mois ?",
                    options: ["L'embryon", "Le fœtus", "La cellule-œuf", "Le nouveau-né"],
                    correctAnswer: 1,
                    explanation: "À ce stade, tous les organes sont formés, il ressemble à un humain miniature."
                }
            ]
        },
        {
            id: 'svt-4e-08',
            part: 'Partie 1 : Sciences de la Vie',
            title: '8. Contraception (Éviter la grossesse)',
            story: "On peut choisir le moment d'avoir un enfant. Pour cela, il faut empêcher la rencontre entre le spermatozoïde et l'ovule. C'est comme mettre une barrière sur la route.",
            content: `
### 1. Méthodes Mécaniques (Barrières)
**Préservatif** (Masculin/Féminin). Seul moyen qui protège aussi des IST (Sida, etc.).

### 2. Méthodes Chimiques et Hormonales
- **Pilule** : Bloque l'ovulation.
- **Implant/Stérilet**.

### 3. Méthodes Naturelles
Abstinence, calcul du cycle (moins fiable).
            `,
            summary: [
                "Contraception = Contra (Contre) + Conception (Bébé).",
                "Le préservatif protège des maladies ET des grossesses.",
                "La pilule se prend tous les jours."
            ],
            exercises: [
                {
                    id: 'ex-cont-1',
                    question: "Quelle méthode protège des IST (Sida) ?",
                    options: ["La pilule", "Le stérilet", "Le préservatif", "Le calendrier"],
                    correctAnswer: 2,
                    explanation: "C'est une barrière physique étanche qui empêche tout contact entre les liquides corporels."
                }
            ]
        },

        // THEME 4 : GENETIQUE
        {
            id: 'svt-4e-09',
            part: 'Partie 1 : Sciences de la Vie',
            title: '9. La transmission des caractères héréditaires',
            story: "Pourquoi avez-vous les yeux de votre mère et le nez de votre père ? Parce que lors de la fabrication, vous avez reçu la moitié du plan de construction de chacun. Ce plan est écrit en code ADN.",
            content: `
### 1. Le Support de l'Hérédité
Dans le noyau des cellules, il y a des **Chromosomes** (46 chez l'homme, 23 paires). Ils sont faits d'ADN.

### 2. Gènes et Allèles
- **Gène** : Morceau de chromosome qui code pour un caractère (ex: Couleur des yeux).
- **Allèle** : Version du gène (ex: Version Bleue, Version Marron).

### 3. Dominant / Récessif
Certains allèles sont plus forts (Dominants). Si on a un gène Marron et un gène Bleu, on aura les yeux Marrons.

> **📚 Analogie : La Bibliothèque**
>
> Le Noyau est la bibliothèque. Le Chromosome est un livre. Le Gène est une recette de cuisine dans le livre. L'Allèle est la variante de la recette (avec ou sans chocolat).
            `,
            summary: [
                "46 chromosomes (23 du père, 23 de la mère).",
                "XX = Fille, XY = Garçon.",
                "L'ADN porte l'information génétique."
            ],
            exercises: [
                {
                    id: 'ex-gen-1',
                    question: "Combien de chromosomes possède une cellule humaine normale ?",
                    options: ["23", "46", "100", "2"],
                    correctAnswer: 1,
                    explanation: "23 paires, donc 46 chromosomes au total."
                }
            ]
        },

        // THEME 5 : AGRESSIONS
        {
            id: 'svt-4e-10',
            part: 'Partie 1 : Sciences de la Vie',
            title: '10. Contamination par les microorganismes',
            story: "Nous vivons dans un monde invisible peuplé de microbes. La plupart sont gentils, mais certains sont des 'méchants' (pathogènes). Votre corps est une forteresse avec des murs (peau) et une armée (système immunitaire).",
            content: `
### 1. Les Microbes
- **Bactéries** : Vivantes, se multiplient seules. (Se soignent avec des Antibiotiques).
- **Virus** : Pirates, obligés d'entrer dans une cellule pour se multiplier. (Grippe, Sida).

### 2. Contamination et Infection
**Contamination** : Le microbe entre (plaie, bouche).<br>
**Infection** : Le microbe se multiplie et on tombe malade.

### 3. La Lutte
Asepsie (nettoyer), Antisepsie (désinfecter), Vaccination (entraîner l'armée).
            `,
            summary: [
                "Virus $\\neq$ Bactérie.",
                "Antibiotique = Anti-Vie (des bactéries), inefficace sur les virus.",
                "Vaccin = Prévention."
            ],
            exercises: [
                {
                    id: 'ex-mic-1',
                    question: "Les antibiotiques sont efficaces contre :",
                    options: ["Les virus", "Les bactéries", "Les champignons", "La fatigue"],
                    correctAnswer: 1,
                    explanation: "C'est la règle d'or : 'Les antibiotiques, c'est pas automatique' (c'est que pour les bactéries)."
                }
            ]
        },

        // ==========================================
        // PARTIE 2 : SCIENCES DE LA TERRE
        // ==========================================

        // THEME 6 : VOLCANISME
        {
            id: 'svt-4e-11',
            part: 'Partie 2 : Sciences de la Terre',
            title: '11. Le Volcanisme',
            story: "La Terre a chaud ! À l'intérieur, la roche fond et devient du magma. Comme le lait qui bout dans une casserole, ça monte, ça pousse le couvercle et ça déborde. C'est l'éruption.",
            content: `
### 1. Magma vs Lave
- **Magma** : Roche fondue + Gaz (sous terre).
- **Lave** : Roche fondue dégazée (une fois sortie).

### 2. Types d'éruptions
- **Effusive (Rouge)** : Lave fluide, coulées tranquilles. (Ex: volcans d'Hawaii).
- **Explosive (Grise)** : Lave pâteuse/visqueuse, explosions de gaz et de cendres. Très dangereux.
            `,
            summary: [
                "Le moteur est le gaz sous pression.",
                "Lave fluide = Volcan rouge.",
                "Lave visqueuse = Volcan gris (Explosif)."
            ],
            exercises: [
                {
                    id: 'ex-volc-1',
                    question: "Quelle est la différence entre le magma et la lave ?",
                    options: ["La température", "La couleur", "La présence de gaz", "C'est la même chose"],
                    correctAnswer: 2,
                    explanation: "Le magma contient du gaz sous pression. Quand il sort, le gaz s'échappe et cela devient de la lave."
                }
            ]
        },
        {
            id: 'svt-4e-12',
            part: 'Partie 2 : Sciences de la Terre',
            title: '12. Formation des roches magmatiques',
            story: "Quand la lave refroidit, elle durcit et redevient de la pierre. Selon qu'elle refroidisse vite (dehors au frigo) ou lentement (dedans au four), elle ne donne pas la même roche.",
            content: `
### 1. Refroidissement Rapide (En surface)
La lave fige instantanément. Les cristaux n'ont pas le temps de grandir. $\\rightarrow$ Roche volcanique (ex: **Basalte**, noire et fine).

### 2. Refroidissement Lent (En profondeur)
Le magma reste coincé et refroidit sur des milliers d'années. Les cristaux deviennent gros. $\\rightarrow$ Roche plutonique (ex: **Granite**, tacheté).

> **🍫 Analogie : Le Chocolat**
>
> Si vous mettez le chocolat fondu au congélateur, il durcit vite et reste lisse (Basalte). Si vous le laissez durcir lentement à température ambiante, il peut 'blanchir' et cristalliser (Granite).
            `,
            summary: [
                "Basalte = Volcanique (Microlithique).",
                "Granite = Plutonique (Grenue).",
                "La texture dépend de la vitesse de refroidissement."
            ],
            exercises: [
                {
                    id: 'ex-roch-1',
                    question: "Le Granite est une roche :",
                    options: ["Sédimentaire", "Volcanique", "Plutonique", "Métamorphique"],
                    correctAnswer: 2,
                    explanation: "Elle se forme en profondeur dans des 'plutons' magmatiques."
                }
            ]
        },

        // THEME 7 : SEISMES
        {
            id: 'svt-4e-13',
            part: 'Partie 2 : Sciences de la Terre',
            title: '13. Séismes et Structure du globe',
            story: "La Terre est comme un puzzle géant dont les pièces (plaques tectoniques) bougent. Parfois, elles coincent. La force s'accumule... et CRAC ! Ça casse d'un coup. C'est le tremblement de terre.",
            content: `
### 1. Le Séisme
Une rupture brutale des roches en profondeur au **Foyer**. Cela crée des ondes qui se propagent jusqu'à l'**Épicentre** (lieu en surface où c'est le plus fort).

### 2. Structure de la Terre
Les ondes sismiques nous ont permis de faire une échographie de la Terre :
- **Croûte** : Solide et fine (comme la coquille d'œuf).
- **Manteau** : Très épais, solide mais déformable.
- **Noyau** : Fer (Liquide à l'extérieur, Solide au centre).
            `,
            summary: [
                "Sismographe = Enregistre les ondes.",
                "Magnitude (Richter) = Énergie libérée.",
                "La Terre est constituée de couches concentriques."
            ],
            exercises: [
                {
                    id: 'ex-seis-1',
                    question: "Le point à la surface verticale du foyer s'appelle :",
                    options: ["L'hypocentre", "Le cratère", "L'épicentre", "La faille"],
                    correctAnswer: 2,
                    explanation: "C'est l'endroit où les secousses sont les plus violentes."
                }
            ]
        }
    ]
};
