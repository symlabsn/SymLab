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
                <h3>1. Types de ressources</h3>
                <ul>
                    <li><strong>Renouvelables</strong> : Se régénèrent vite (Soleil, vent, forêts si bien gérées).</li>
                    <li><strong>Non-renouvelables</strong> : Stock limité (Pétrole, minerais).</li>
                </ul>
                <h3>2. Gestion durable</h3>
                <p>C'est répondre à nos besoins présents sans compromettre la capacité des générations futures à répondre aux leurs.</p>
                <div class="analogy">
                    <strong>🎣 Analogie : La Pêche</strong><br>
                    Si on pêche tous les poissons, y compris les bébés, il n'y aura plus de reproduction et la pêche s'arrêtera pour toujours. La gestion durable, c'est laisser les bébés grandir.
                </div>
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
                <h3>1. La Digestion</h3>
                <p>Transformation des aliments en <strong>nutriments</strong> (glucose, acides aminés...) grâce aux dents (action mécanique) et aux sucs digestifs/enzymes (action chimique).</p>
                <h3>2. L'Absorption</h3>
                <p>C'est le passage des nutriments de l'intestin vers le sang. Cela se passe au niveau des <strong>villosités intestinales</strong> (des petits replis qui augmentent la surface).</p>
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
                <h3>1. Composition du sang</h3>
                <ul>
                    <li><strong>Plasma</strong> : Le liquide jaune (eau + nutriments).</li>
                    <li><strong>Globules Rouges (Hématies)</strong> : Transportent l'Oxygène (O2). Ils sont rouges.</li>
                    <li><strong>Globules Blancs (Leucocytes)</strong> : Défendent le corps (Soldats).</li>
                    <li><strong>Plaquettes</strong> : Coagulation (bouchent les trous).</li>
                </ul>
                <h3>2. Maladies</h3>
                <p>L'<strong>Anémie</strong> est un manque de globules rouges (ou de fer). On est fatigué et pâle.</p>
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
                <h3>1. Le Cœur</h3>
                <p>Muscle creux à 4 cavités (2 oreillettes, 2 ventricules). Le côté gauche propulse le sang riche en O2 (rouge), le côté droit le sang pauvre en O2 (bleu).</p>
                <h3>2. La Double Circulation</h3>
                <ul>
                    <li><strong>Petite circulation (Pulmonaire)</strong> : Cœur $\\rightarrow$ Poumons $\\rightarrow$ Cœur. (Pour oxygéner le sang).</li>
                    <li><strong>Grande circulation (Générale)</strong> : Cœur $\\rightarrow$ Organes $\\rightarrow$ Cœur. (Pour nourrir les organes).</li>
                </ul>
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
                <h3>1. La Tension (Pression)</h3>
                <p>On mesure deux chiffres (ex: 12/8). C'est la pression quand le cœur se contracte (Maxi) et quand il se relâche (Mini).</p>
                <h3>2. Maladies Cardiovasculaires</h3>
                <ul>
                    <li><strong>Hypertension</strong> : Tension trop haute en permanence. Fatigue le cœur.</li>
                    <li><strong>AVC</strong> : Vaisseau bouché ou éclaté dans le cerveau.</li>
                    <li><strong>Infarctus</strong> : Crise cardiaque (le cœur ne reçoit plus de sang).</li>
                </ul>
                <div class="analogy">
                    <strong>🚴 Analogie : Le Pneu</strong><br>
                    Si on gonfle trop un pneu de vélo (hypertension), il devient dur et risque d'éclater.
                </div>
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
                <h3>1. Caractères sexuels</h3>
                <ul>
                    <li>Primaires : Organes reproducteurs (présents à la naissance).</li>
                    <li>Secondaires : Poils, seins, mue de la voix (apparaissent à la puberté).</li>
                </ul>
                <h3>2. Fonctionnement</h3>
                <ul>
                    <li><strong>Garçon</strong> : Production continue de spermatozoïdes dès la puberté.</li>
                    <li><strong>Fille</strong> : Cycle menstruel (Règles) et ovulation cyclique (tous les 28 jours environ).</li>
                </ul>
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
                <h3>1. La Fécondation</h3>
                <p>Rencontre des gamètes dans les trompes. Formation de la cellule-œuf.</p>
                <h3>2. La Grossesse</h3>
                <ul>
                    <li><strong>Embryon</strong> (2 premiers mois) : Formation des organes.</li>
                    <li><strong>Fœtus</strong> (dès le 3ème mois) : Les organes sont là, il grandit.</li>
                    <li><strong>Placenta</strong> : Organe d'échange (nourriture/oxygène) entre la mère et le bébé. Ils ne mélangent pas leur sang.</li>
                </ul>
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
                <h3>1. Méthodes Mécaniques (Barrières)</h3>
                <p><strong>Préservatif</strong> (Masculin/Féminin). Seul moyen qui protège aussi des IST (Sida, etc.).</p>
                <h3>2. Méthodes Chimiques et Hormonales</h3>
                <ul>
                    <li><strong>Pilule</strong> : Bloque l'ovulation.</li>
                    <li><strong>Implant/Stérilet</strong>.</li>
                </ul>
                <h3>3. Méthodes Naturelles</h3>
                <p>Abstinence, calcul du cycle (moins fiable).</p>
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
                <h3>1. Le Support de l'Hérédité</h3>
                <p>Dans le noyau des cellules, il y a des <strong>Chromosomes</strong> (46 chez l'homme, 23 paires). Ils sont faits d'ADN.</p>
                <h3>2. Gènes et Allèles</h3>
                <ul>
                    <li><strong>Gène</strong> : Morceau de chromosome qui code pour un caractère (ex: Couleur des yeux).</li>
                    <li><strong>Allèle</strong> : Version du gène (ex: Version Bleue, Version Marron).</li>
                </ul>
                <h3>3. Dominant / Récessif</h3>
                <p>Certains allèles sont plus forts (Dominants). Si on a un gène Marron et un gène Bleu, on aura les yeux Marrons.</p>
                <div class="analogy">
                    <strong>📚 Analogie : La Bibliothèque</strong><br>
                    Le Noyau est la bibliothèque. Le Chromosome est un livre. Le Gène est une recette de cuisine dans le livre. L'Allèle est la variante de la recette (avec ou sans chocolat).
                </div>
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
                <h3>1. Les Microbes</h3>
                <ul>
                    <li><strong>Bactéries</strong> : Vivantes, se multiplient seules. (Se soignent avec des Antibiotiques).</li>
                    <li><strong>Virus</strong> : Pirates, obligés d'entrer dans une cellule pour se multiplier. (Grippe, Sida).</li>
                </ul>
                <h3>2. Contamination et Infection</h3>
                <p><strong>Contamination</strong> : Le microbe entre (plaie, bouche).<br>
                <strong>Infection</strong> : Le microbe se multiplie et on tombe malade.</p>
                <h3>3. La Lutte</h3>
                <p>Asepsie (nettoyer), Antisepsie (désinfecter), Vaccination (entraîner l'armée).</p>
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
                <h3>1. Magma vs Lave</h3>
                <ul>
                    <li><strong>Magma</strong> : Roche fondue + Gaz (sous terre).</li>
                    <li><strong>Lave</strong> : Roche fondue dégazée (une fois sortie).</li>
                </ul>
                <h3>2. Types d'éruptions</h3>
                <ul>
                    <li><strong>Effusive (Rouge)</strong> : Lave fluide, coulées tranquilles. (Ex: volcans d'Hawaii).</li>
                    <li><strong>Explosive (Grise)</strong> : Lave pâteuse/visqueuse, explosions de gaz et de cendres. Très dangereux.</li>
                </ul>
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
                <h3>1. Refroidissement Rapide (En surface)</h3>
                <p>La lave fige instantanément. Les cristaux n'ont pas le temps de grandir. $\\rightarrow$ Roche volcanique (ex: <strong>Basalte</strong>, noire et fine).</p>
                <h3>2. Refroidissement Lent (En profondeur)</h3>
                <p>Le magma reste coincé et refroidit sur des milliers d'années. Les cristaux deviennent gros. $\\rightarrow$ Roche plutonique (ex: <strong>Granite</strong>, tacheté).</p>
                <div class="analogy">
                    <strong>🍫 Analogie : Le Chocolat</strong><br>
                    Si vous mettez le chocolat fondu au congélateur, il durcit vite et reste lisse (Basalte). Si vous le laissez durcir lentement à température ambiante, il peut 'blanchir' et cristalliser (Granite).
                </div>
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
                <h3>1. Le Séisme</h3>
                <p>Une rupture brutale des roches en profondeur au <strong>Foyer</strong>. Cela crée des ondes qui se propagent jusqu'à l'<strong>Épicentre</strong> (lieu en surface où c'est le plus fort).</p>
                <h3>2. Structure de la Terre</h3>
                <p>Les ondes sismiques nous ont permis de faire une échographie de la Terre :</p>
                <ul>
                    <li><strong>Croûte</strong> : Solide et fine (comme la coquille d'œuf).</li>
                    <li><strong>Manteau</strong> : Très épais, solide mais déformable.</li>
                    <li><strong>Noyau</strong> : Fer (Liquide à l'extérieur, Solide au centre).</li>
                </ul>
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
