export const math5eData = {
    id: 'math-5e',
    title: 'Mathématiques 5ème',
    chapters: [
        // ==========================================
        // PARTIE 1 : ACTIVITES NUMERIQUES
        // ==========================================

        {
            id: 'alg-5e-01',
            part: 'Partie 1 : Activités Numériques',
            title: '1. Puissances dans D',
            story: "Imaginez que vous pliez une feuille de papier en deux. Ça fait 2 épaisseurs. Vous pliez encore : 4. Encore : 8. Encore : 16. La puissance, c'est ce pouvoir magique de multiplication rapide. 2 à la puissance 10, c'est plus de 1000 épaisseurs !",
            content: `
                <h3>1. Définition</h3>
                <p>La puissance d'un nombre est une manière d'écrire une multiplication répétée de ce même nombre.</p>
                <ul>
                    <li>$a^n = a \\times a \\times ... \\times a$ (n fois)</li>
                    <li>$a^2$ se lit "a au carré" ($a \\times a$)</li>
                    <li>$a^3$ se lit "a au cube" ($a \\times a \times a$)</li>
                </ul>
                <div class="analogy">
                    <strong>🚀 Analogie : Le Super-Multiplicateur</strong><br>
                    Écrire $10^6$ est beaucoup plus rapide que d'écrire $1~000~000$. La puissance est l'outil des grands nombres (comme la distance Terre-Soleil) ou des très petits (taille d'un atome).
                </div>
                <h3>2. Règles de calcul</h3>
                <ul>
                    <li>$a^0 = 1$ (sauf si a=0)</li>
                    <li>$a^1 = a$</li>
                    <li>$10^n$ = un 1 suivi de 'n' zéros.</li>
                </ul>
            `,
            summary: [
                "Une puissance sert à simplifier l'écriture d'une multiplication répétée.",
                "$a^n$ signifie qu'on multiplie 'a' par lui-même 'n' fois.",
                "Tout nombre (non nul) à la puissance 0 vaut 1."
            ],
            exercises: [
                {
                    id: 'ex-pui-1',
                    question: "Que vaut $2^3$ ?",
                    options: ["6 (2 x 3)", "8 (2 x 2 x 2)", "5 (2 + 3)", "9"],
                    correctAnswer: 1,
                    explanation: "La puissance indique le nombre de répétitions. $2^3 = 2 \\times 2 \\times 2 = 8$."
                },
                {
                    id: 'ex-pui-2',
                    question: "Quelle est l'écriture décimale de $10^4$ ?",
                    options: ["1000", "40", "10000", "104"],
                    correctAnswer: 2,
                    explanation: "$10^4$ est un 1 suivi de 4 zéros, donc 10 000."
                }
            ]
        },
        {
            id: 'alg-5e-02',
            part: 'Partie 1 : Activités Numériques',
            title: '2. Multiples et Diviseurs',
            story: "C'est l'histoire d'une grande famille de nombres. Les multiples sont les 'enfants' (ils sont plus grands, issus de la multiplication) et les diviseurs sont les 'parents' ou les 'briques' qui composent le nombre.",
            content: `
                <h3>1. Multiple</h3>
                <p>Un nombre A est un multiple de B s'il existe un entier K tel que A = B x K. (En gros, A est dans la table de multiplication de B).</p>
                <h3>2. Diviseur</h3>
                <p>Un nombre B est un diviseur de A si la division de A par B tombe juste (reste = 0).</p>
                <h3>3. Critères de divisibilité</h3>
                <ul>
                    <li><strong>Par 2</strong> : se termine par 0, 2, 4, 6, 8.</li>
                    <li><strong>Par 5</strong> : se termine par 0 ou 5.</li>
                    <li><strong>Par 3</strong> : la somme des chiffres est dans la table de 3.</li>
                    <li><strong>Par 9</strong> : la somme des chiffres est dans la table de 9.</li>
                </ul>
            `,
            summary: [
                "Multiple =résultat d'une multiplication.",
                "Diviseur = nombre qui divise sans reste.",
                "Connaître les critères de divisibilité permet de simplifier les fractions."
            ],
            exercises: [
                {
                    id: 'ex-mul-1',
                    question: "Lequel de ces nombres est divisible par 3 ?",
                    options: ["14", "25", "111", "100"],
                    correctAnswer: 2,
                    explanation: "La somme des chiffres de 111 est 1+1+1=3. 3 est dans la table de 3, donc 111 est divisible par 3."
                }
            ]
        },
        {
            id: 'alg-5e-03',
            part: 'Partie 1 : Activités Numériques',
            title: '3. Fractions',
            story: "Imaginez une pizza. Si vous la coupez en 4 et que vous mangez 3 parts, vous avez mangé les 3/4. La fraction est le langage du partage équitable.",
            content: `
                <h3>1. Vocabulaire</h3>
                <p>Une fraction s'écrit $\\frac{a}{b}$.</p>
                <ul>
                    <li><strong>Numérateur (a)</strong> : Nombre de parts qu'on prend (en haut).</li>
                    <li><strong>Dénominateur (b)</strong> : Nombre total de parts dans l'unité (en bas). Il ne peut jamais être égal à 0.</li>
                </ul>
                <h3>2. Fractions égales</h3>
                <p>On ne change pas la valeur d'une fraction si on multiplie (ou divise) le haut et le bas par le même nombre.</p>
                <div class="analogy">
                    <strong>🍕 Analogie : La Pizza</strong><br>
                    Manger 1 demi-pizza (1/2) est exactement la même chose que manger 2 quarts de pizza (2/4). Les parts sont plus petites, mais on en a plus, donc la quantité totale est la même.
                </div>
            `,
            summary: [
                "Le dénominateur indique en combien on a coupé l'unité.",
                "Le numérateur indique combien de morceaux on a pris.",
                "Pour simplifier une fraction, on divise les deux termes par un diviseur commun."
            ],
            exercises: [
                {
                    id: 'ex-frac-1',
                    question: "Dans la fraction 3/5, quel nombre est le dénominateur ?",
                    options: ["3", "5", "8", "2"],
                    correctAnswer: 1,
                    explanation: "Le dénominateur est le nombre du bas, qui 'dénomme' (donne le nom) de la part (ici des cinquièmes)."
                }
            ]
        },
        {
            id: 'alg-5e-04',
            part: 'Partie 1 : Activités Numériques',
            title: '4. Proportionnalité',
            story: "Si 1 bonbon coûte 10F, alors 2 bonbons coûtent 20F et 10 bonbons coûtent 100F. C'est logique, non ? Cette logique simple s'appelle la proportionnalité. C'est la règle d'or du commerce et de la cuisine.",
            content: `
                <h3>1. Reconnaître la proportionnalité</h3>
                <p>Deux grandeurs sont proportionnelles si on peut passer de l'une à l'autre en multipliant par un même nombre appelé <strong>coefficient de proportionnalité</strong>.</p>
                <h3>2. La règle de trois (ou produit en croix)</h3>
                <p>Si j'ai 3 stylos pour 150F, combien coûtent 5 stylos ?</p>
                <p>Calcul : $\\frac{150 \\times 5}{3} = 250$ F.</p>
                <div class="analogy">
                    <strong>⚖️ Analogie : La Recette</strong><br>
                    Si la recette du gâteau demande 2 œufs pour 4 personnes, il faut 4 œufs pour 8 personnes. On double tout. On garde les proportions.
                </div>
            `,
            summary: [
                "Tableau de proportionnalité = on passe d'une ligne à l'autre par multiplication.",
                "Le produit en croix permet de trouver une valeur manquante (la 4ème proportionnelle).",
                "Les graphiques de proportionnalité sont des droites qui passent par l'origine (0)."
            ],
            exercises: [
                {
                    id: 'ex-prop-1',
                    question: "Si 2 kg de riz coûtent 600F, combien coûtent 5 kg ?",
                    options: ["1000F", "1200F", "1500F", "3000F"],
                    correctAnswer: 2,
                    explanation: "1 kg coûte 300F (600/2). Donc 5 kg coûtent 5 x 300 = 1500F."
                }
            ]
        },
        {
            id: 'alg-5e-05',
            part: 'Partie 1 : Activités Numériques',
            title: '5. Nombres Décimaux Relatifs',
            story: "Jusqu'à présent, vous connaissiez l'étage 0, 1, 2... Mais il existe un sous-sol ! Les nombres relatifs sont comme un ascenseur qui peut monter (+) ou descendre (-). Ils servent à mesurer les températures glaciales ou les dettes.",
            content: `
                <h3>1. Les nombres positifs et négatifs</h3>
                <ul>
                    <li><strong>Positifs (+)</strong> : Plus grands que 0 (ex: +5°C, gagner 1000F).</li>
                    <li><strong>Négatifs (-)</strong> : Plus petits que 0 (ex: -10°C, perdre 500F).</li>
                </ul>
                <h3>2. La droite graduée</h3>
                <p>Le 0 est l'origine. À droite (ou en haut), c'est positif. À gauche (ou en bas), c'est négatif.</p>
                 <div class="analogy">
                    <strong>🌡 Analogie : Le Thermomètre</strong><br>
                    Quand il fait chaud, on monte au-dessus de 0. Quand il gèle, on descend en dessous de 0. -5 est plus froid (plus petit) que +2, même si le chiffre 5 paraît plus grand.
                </div>
            `,
            summary: [
                "Un nombre relatif a un signe (+ ou -) et une distance à zéro (valeur absolue).",
                "Deux nombres opposés ont la même distance à zéro mais des signes contraires (ex: +3 et -3).",
                "Plus un nombre négatif est 'grand' en apparence (sans le signe), plus il est petit en réalité."
            ],
            exercises: [
                {
                    id: 'ex-rel-1',
                    question: "Quel nombre est le plus petit ?",
                    options: ["-2", "-10", "0", "+1"],
                    correctAnswer: 1,
                    explanation: "Sur la droite graduée, -10 est le plus loin à gauche (le plus froid). Donc c'est le plus petit."
                }
            ]
        },
        {
            id: 'alg-5e-06',
            part: 'Partie 1 : Activités Numériques',
            title: '6. Représentation graphique',
            story: "Un tableau de chiffres, c'est bien. Mais un dessin, c'est mieux ! La représentation graphique permet de 'voir' les nombres. Une courbe qui monte, qui descend... C'est comme le tracé cardiaque d'une situation.",
            content: `
               <h3>1. Le Repère</h3>
               <p>Pour dessiner, on trace deux axes :</p>
               <ul>
                   <li><strong>Axe des abscisses (x)</strong> : Horizontal.</li>
                   <li><strong>Axe des ordonnées (y)</strong> : Vertical.</li>
               </ul>
               <p>Chaque couple de nombres du tableau devient un point (x, y) sur le graphique.</p>
            `,
            summary: [
                "Chaque colonne du tableau donne les coordonnées d'un point.",
                "Si les points sont alignés avec l'origine, c'est une situation de proportionnalité.",
                "Le graphique permet de lire des valeurs intermédiaires."
            ],
            exercises: [
                {
                    id: 'ex-graph-1',
                    question: "Sur un graphique, l'axe horizontal s'appelle :",
                    options: ["L'axe des ordonnées", "L'axe des abscisses", "L'origine", "La diagonale"],
                    correctAnswer: 1,
                    explanation: "Moyen mnémotechnique : Abscisse commence comme 'Assis' (à plat, horizontal)."
                }
            ]
        },

        // ==========================================
        // PARTIE 2 : ACTIVITES GEOMETRIQUES
        // ==========================================

        {
            id: 'geo-5e-07',
            part: 'Partie 2 : Activités Géométriques',
            title: '7. Symétrie Centrale',
            story: "Regardez une carte à jouer (le Roi de Cœur). Si vous la retournez tête bèche, elle est identique. C'est ça la symétrie centrale : faire un demi-tour complet autour d'un point.",
            content: `
                <h3>1. Définition</h3>
                <p>Deux figures sont symétriques par rapport à un point O si elles se superposent après un demi-tour (180°) autour de O.</p>
                <h3>2. Propriétés</h3>
                <p>La symétrie centrale conserve tout :</p>
                <ul>
                    <li>Les longueurs (les segments ont la même taille).</li>
                    <li>Les angles (la forme ne change pas).</li>
                    <li>Le parallélisme (deux droites parallèles restent parallèles).</li>
                </ul>
                <div class="analogy">
                    <strong>🔄 Analogie : La Roue</strong><br>
                    Imaginez le point O comme l'axe d'une roue. Si le point A est en haut du pneu, après un demi-tour, il se retrouve tout en bas (point A').
                </div>
            `,
            summary: [
                "Symétrie centrale = Demi-tour autour d'un point.",
                "Le point O est le milieu du segment [AA'].",
                "L'image d'une droite est une droite parallèle."
            ],
            exercises: [
                {
                    id: 'ex-sym-1',
                    question: "Si A' est le symétrique de A par rapport à O, alors :",
                    options: ["A est le milieu de [OA']", "O est le milieu de [AA']", "A' est le milieu de [AO]", "Les points ne sont pas alignés"],
                    correctAnswer: 1,
                    explanation: "Le centre de symétrie est toujours au milieu du segment reliant un point et son image."
                }
            ]
        },
        {
            id: 'geo-5e-08',
            part: 'Partie 2 : Activités Géométriques',
            title: '8. Angles',
            story: "Les angles sont les coudes de la géométrie. Parfois ils sont pointus (aigus), parfois carrés (droits), parfois très ouverts (obtus). Quand deux droites se croisent, elles forment des paires d'angles jumelles.",
            content: `
                <h3>1. Vocabulaire des paires d'angles</h3>
                <ul>
                    <li><strong>Opposés par le sommet</strong> : Se font face en X. Ils sont toujours égaux.</li>
                    <li><strong>Alternes-Internes</strong> : Forment un "Z" entre deux droites coupées par une sécante. Si les droites sont parallèles, ils sont égaux.</li>
                    <li><strong>Correspondants</strong> : Forment un "F". Même position, même étage. Égaux si parallèles.</li>
                </ul>
            `,
            summary: [
                "Opposés par le sommet = Toujours égaux.",
                "Alternes-internes et Correspondants = Égaux SEULEMENT si les droites sont parallèles.",
                "La somme des angles d'un triangle fait toujours 180°."
            ],
            exercises: [
                {
                    id: 'ex-angle-1',
                    question: "Deux angles opposés par le sommet sont :",
                    options: ["Toujours égaux", "Toujours différents", "Leur somme fait 180°", "Toujours droits"],
                    correctAnswer: 0,
                    explanation: "C'est une propriété fondamentale. Ils on la même mesure."
                }
            ]
        },
        {
            id: 'geo-5e-09',
            part: 'Partie 2 : Activités Géométriques',
            title: '9. Parallélogramme',
            story: "Le parallélogramme est un quadrilatère diplomate : ses côtés opposés s'entendent bien, ils sont toujours parallèles et de même longueur. C'est la forme de base qui peut se transformer en rectangle, losange ou carré.",
            content: `
                <h3>1. Définition</h3>
                <p>C'est un quadrilatère dont les côtés opposés sont parallèles deux à deux.</p>
                <h3>2. Propriétés Magiques</h3>
                <ul>
                    <li>Ses diagonales se coupent en leur milieu.</li>
                    <li>Ses côtés opposés sont de même longueur.</li>
                    <li>Ses angles opposés sont égaux.</li>
                </ul>
                <div class="analogy">
                    <strong>🔧 Analogie : Les Diagonales</strong><br>
                    Pour vérifier si un cadre est tordu (parallélogramme) ou droit (rectangle), les menuisiers mesurent les diagonales. Si elles se coupent juste au milieu, c'est déjà un parallélogramme.
                </div>
            `,
            summary: [
                "Côtés opposés parallèles.",
                "Diagonales se coupent en leur milieu (centre de symétrie).",
                "Côtés opposés de même longueur."
            ],
            exercises: [
                {
                    id: 'ex-para-1',
                    question: "Si les diagonales d'un quadrilatère se coupent en leur milieu, alors c'est un :",
                    options: ["Trapèze", "Parallélogramme", "Triangle", "Cercle"],
                    correctAnswer: 1,
                    explanation: "C'est la propriété caractéristique principale du parallélogramme."
                }
            ]
        },
        {
            id: 'geo-5e-10',
            part: 'Partie 2 : Activités Géométriques',
            title: '10. Triangles',
            story: "Le triangle est la forme la plus solide de la nature. C'est pourquoi les charpentes et les ponts sont faits de triangles. Il en existe des familles spéciales.",
            content: `
                <h3>1. Les Familles de Triangles</h3>
                <ul>
                    <li><strong>Isocèle</strong> : 2 côtés égaux (et 2 angles égaux). Comme un chapeau pointe.</li>
                    <li><strong>Équilatéral</strong> : 3 côtés égaux (et 3 angles de 60°). La perfection.</li>
                    <li><strong>Rectangle</strong> : Possède un angle droit (90°). Comme une équerre.</li>
                </ul>
                <h3>2. Construction</h3>
                <p>Pour construire un triangle précis, on utilise la règle et le compas (pour reporter les longueurs des côtés).</p>
            `,
            summary: [
                "Somme des angles = 180°.",
                "Isocèle = 2 côtés égaux.",
                "Équilatéral = 3 côtés égaux.",
                "Rectangle = 1 angle droit."
            ],
            exercises: [
                {
                    id: 'ex-tri-1',
                    question: "Combien mesurent les angles d'un triangle équilatéral ?",
                    options: ["90°", "45°", "60°", "Ça dépend"],
                    correctAnswer: 2,
                    explanation: "Comme les 3 angles sont égaux et que la somme fait 180°, 180 / 3 = 60°."
                }
            ]
        },
        {
            id: 'geo-5e-11',
            part: 'Partie 2 : Activités Géométriques',
            title: '11. Trapèze',
            story: "Le trapèze est le cousin boiteux du parallélogramme. Il n'a qu'une seule paire de côtés parallèles (les bases). L'autre paire fait ce qu'elle veut !",
            content: `
                <h3>1. Définition</h3>
                <p>Quadrilatère ayant deux côtés parallèles appelés <strong>bases</strong> (Grande Base et petite base).</p>
                <h3>2. Cas particuliers</h3>
                <ul>
                    <li><strong>Trapèze rectangle</strong> : Possède deux angles droits (un côté perpendiculaire aux bases).</li>
                    <li><strong>Trapèze isocèle</strong> : Les côtés non parallèles sont de même longueur.</li>
                </ul>
            `,
            summary: [
                "Uniquement 2 côtés parallèles.",
                "Aire = (Grande Base + petite base) x Hauteur / 2.",
                "Sert souvent de forme pour les toits ou les ponts."
            ],
            exercises: [
                {
                    id: 'ex-trap-1',
                    question: "Comment appelle-t-on les côtés parallèles d'un trapèze ?",
                    options: ["Les hauteurs", "Les bases", "Les diagonales", "Les médianes"],
                    correctAnswer: 1,
                    explanation: "Il y a la grande base (B) et la petite base (b)."
                }
            ]
        },
        {
            id: 'geo-5e-12',
            part: 'Partie 2 : Activités Géométriques',
            title: '12. Rectangle',
            story: "Le rectangle est un parallélogramme qui a décidé de se tenir droit. Il a 'redressé' ses angles pour qu'ils soient tous droits (90°). C'est la forme de votre cahier, de votre écran, de votre porte...",
            content: `
                <h3>1. Définition</h3>
                <p>Un quadrilatère qui a 4 angles droits.</p>
                <h3>2. Propriétés (Les bonus du rectangle)</h3>
                <p>Il a toutes les propriétés du parallélogramme, PLUS :</p>
                <ul>
                    <li>Ses diagonales sont de <strong>même longueur</strong>.</li>
                    <li>Ses axes de symétrie sont les médiatrices des côtés.</li>
                </ul>
            `,
            summary: [
                "4 angles droits.",
                "Diagonales égales et se coupent au milieu.",
                "C'est un parallélogramme particulier."
            ],
            exercises: [
                {
                    id: 'ex-rect-1',
                    question: "Quelle propriété est VRAIE pour les diagonales d'un rectangle ?",
                    options: ["Elles sont perpendiculaires", "Elles sont de même longueur", "Elles sont parallèles", "L'une est plus grande que l'autre"],
                    correctAnswer: 1,
                    explanation: "C'est ce qui différencie le rectangle d'un parallélogramme quelconque."
                }
            ]
        },
        {
            id: 'geo-5e-13',
            part: 'Partie 2 : Activités Géométriques',
            title: '13. Losange',
            story: "Le losange, c'est un carré qui a été un peu écrasé sur les côtés, ou un cerf-volant parfait. Il ne s'occupe pas des angles droits, mais il est obsédé par l'égalité : ses 4 côtés sont tous pareils !",
            content: `
                <h3>1. Définition</h3>
                <p>Un quadrilatère qui a 4 côtés de même longueur.</p>
                <h3>2. Propriétés (Les bonus du losange)</h3>
                <p>Il a toutes les propriétés du parallélogramme, PLUS :</p>
                <ul>
                    <li>Ses diagonales sont <strong>perpendiculaires</strong>.</li>
                    <li>Ses diagonales sont les bissectrices des angles (elles coupent les angles en deux).</li>
                </ul>
                <div class="analogy">
                    <strong>💎 Analogie : Le Diamant</strong><br>
                    Le symbole "carreau" des cartes est un losange. Ses diagonales forment une croix parfaite (angle droit).
                </div>
            `,
            summary: [
                "4 côtés égaux.",
                "Diagonales perpendiculaires.",
                "Pas d'angles droits (sauf si c'est aussi un carré)."
            ],
            exercises: [
                {
                    id: 'ex-los-1',
                    question: "Les diagonales d'un losange sont toujours :",
                    options: ["De même longueur", "Perpendiculaires", "Parallèles", "Égales aux côtés"],
                    correctAnswer: 1,
                    explanation: "Elles se coupent en leur milieu ET forment un angle droit."
                }
            ]
        },
        {
            id: 'geo-5e-14',
            part: 'Partie 2 : Activités Géométriques',
            title: '14. Carré',
            story: "Le carré est l'enfant parfait du Rectangle et du Losange. Il a tout pris ! Les angles droits de papa Rectangle et les côtés égaux de maman Losange. C'est la figure régulière par excellence.",
            content: `
                <h3>1. Définition</h3>
                <p>Un quadrilatère qui a 4 angles droits ET 4 côtés de même longueur.</p>
                <h3>2. Propriétés (Le Super-Quadrilatère)</h3>
                <ul>
                    <li>Diagonales égales (comme le rectangle).</li>
                    <li>Diagonales perpendiculaires (comme le losange).</li>
                    <li>Diagonales se coupent au milieu (comme tout parallélogramme).</li>
                </ul>
            `,
            summary: [
                "Le carré est à la fois un rectangle et un losange.",
                "Il possède le maximum de symétries.",
                "Tout est égal et droit chez lui."
            ],
            exercises: [
                {
                    id: 'ex-car-1',
                    question: "Pour montrer qu'un quadrilatère est un carré, il suffit de montrer que :",
                    options: ["C'est un rectangle", "C'est un losange", "C'est à la fois un rectangle et un losange", "Il a 4 côtés"],
                    correctAnswer: 2,
                    explanation: "Si on prouve qu'il a les angles droits (rectangle) ET les côtés égaux (losange), c'est gagné."
                }
            ]
        },
        {
            id: 'geo-5e-15',
            part: 'Partie 2 : Activités Géométriques',
            title: '15. Géométrie dans l’espace',
            story: "Quittons le monde plat de la feuille (2D) pour entrer dans le monde réel (3D) ! Les prismes droits sont comme des boîtes de Toblerone ou des immeubles. Les cylindres sont comme des boîtes de conserve.",
            content: `
                <h3>1. Le Prisme Droit</h3>
                <p>C'est un solide qui a deux faces identiques et parallèles (les <strong>bases</strong>, qui peuvent être des triangles, polygones...) et des faces latérales rectangulaires.</p>
                <h3>2. Le Cylindre de Révolution</h3>
                <p>C'est comme un prisme, mais ses bases sont des disques. On l'obtient en faisant tourner un rectangle autour d'un de ses côtés.</p>
                <h3>3. Patron et Volume</h3>
                <ul>
                    <li>Le <strong>Patron</strong> est le dessin à plat qu'on découpe et plie pour fabriquer le solide.</li>
                    <li><strong>Volume</strong> = Aire de la Base × Hauteur.</li>
                </ul>
            `,
            summary: [
                "Prisme : Bases polygonales + faces rectangulaires.",
                "Cylindre : Bases circulaires.",
                "Volume = Base x Hauteur (pour les deux !)."
            ],
            exercises: [
                {
                    id: 'ex-esp-1',
                    question: "Quelle forme ont les faces latérales d'un prisme droit ?",
                    options: ["Des triangles", "Des cercles", "Des rectangles", "Des losanges"],
                    correctAnswer: 2,
                    explanation: "Les murs d'un prisme droit sont toujours des rectangles verticaux."
                }
            ]
        }
    ]
};
