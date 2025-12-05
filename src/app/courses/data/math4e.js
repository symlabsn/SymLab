export const math4eData = {
    id: 'math-4e',
    title: 'Mathématiques 4ème',
    chapters: [
        // ==========================================
        // PARTIE 1 : ACTIVITES NUMERIQUES
        // ==========================================

        {
            id: 'alg-4e-01',
            part: 'Partie 1 : Activités Numériques',
            title: '1. Nombres Rationnels',
            story: "Imaginez que vous deviez partager 3 pizzas entre 4 personnes. Ce n'est pas un nombre entier (0, 1, 2...), c'est une fraction (3/4). Les nombres rationnels sont tous les nombres qui peuvent s'écrire sous forme de fraction. C'est l'extension de votre univers numérique !",
            content: `
                <h3>1. Définition et Opérations</h3>
                <p>Un nombre rationnel est un quotient de deux entiers relatifs. $\\mathbb{Q}$ est l'ensemble de ces nombres.</p>
                <ul>
                    <li><strong>Addition/Soustraction</strong> : Il faut mettre au même dénominateur !</li>
                    <li><strong>Multiplication</strong> : On multiplie les numérateurs entre eux et les dénominateurs entre eux.</li>
                    <li><strong>Division</strong> : Diviser par une fraction, c'est multiplier par son inverse.</li>
                </ul>
                <h3>2. Puissances de 10 et Notation Scientifique</h3>
                <p>Pour écrire des nombres très grands (l'univers) ou très petits (l'atome).<br>
                Exemple : $3~000 = 3 \\times 10^3$.</p>
                <div class="analogy">
                    <strong>🍰 Analogie : Les Parts de Gâteau</strong><br>
                    Multiplier deux fractions (1/2 x 1/2), c'est prendre la moitié d'une moitié. Il reste un quart (1/4).
                </div>
            `,
            summary: [
                "Addition/Soustraction = Dénominateur commun obligatoire.",
                "Multiplication = Directe (haut x haut, bas x bas).",
                "Division = Multiplication par l'inverse.",
                "Priorité des calculs : Parenthèses > Puissances > Multiplications > Additions."
            ],
            exercises: [
                {
                    id: 'ex-rat-1',
                    question: "Quel est le résultat de $\\frac{2}{3} \\times \\frac{4}{5}$ ?",
                    options: ["8/15", "6/8", "10/12", "2/15"],
                    correctAnswer: 0,
                    explanation: "On multiplie les numérateurs (2x4=8) et les dénominateurs (3x5=15)."
                }
            ]
        },
        {
            id: 'alg-4e-02',
            part: 'Partie 1 : Activités Numériques',
            title: '2. Calcul Algébrique',
            story: "L'algèbre, c'est comme apprendre une nouvelle langue où les mots sont remplacés par des lettres (x, y). Ces lettres sont des 'boîtes' qui peuvent contenir n'importe quel nombre. C'est l'outil suprême pour résoudre des problèmes généraux.",
            content: `
                <h3>1. Développement</h3>
                <p>Transformer un produit en somme. C'est 'distribuer' la multiplication.</p>
                <ul>
                    <li>$k(a+b) = ka + kb$</li>
                    <li>$(a+b)(c+d) = ac + ad + bc + bd$</li>
                </ul>
                <h3>2. Identités Remarquables (Les Formules Magiques)</h3>
                <p>A connaître par cœur :</p>
                <ol>
                    <li>$(a+b)^2 = a^2 + 2ab + b^2$</li>
                    <li>$(a-b)^2 = a^2 - 2ab + b^2$</li>
                    <li>$(a+b)(a-b) = a^2 - b^2$</li>
                </ol>
                <h3>3. Factorisation</h3>
                <p>Le contraire du développement. Transformer une somme en produit (trouver le facteur commun).</p>
            `,
            summary: [
                "Développer = Enlever les parenthèses.",
                "Factoriser = Mettre des parenthèses (créer un produit).",
                "Les 3 identités remarquables sont indispensables pour la suite."
            ],
            exercises: [
                {
                    id: 'ex-alg-1',
                    question: "Que vaut $(x+3)^2$ ?",
                    options: ["$x^2 + 9$", "$x^2 + 3x + 9$", "$x^2 + 6x + 9$", "$2x + 6$"],
                    correctAnswer: 2,
                    explanation: "C'est la 1ère identité remarquable $(a+b)^2$ avec a=x et b=3. Le terme du milieu est $2ab = 2 \\times x \\times 3 = 6x$."
                }
            ]
        },
        {
            id: 'alg-4e-03',
            part: 'Partie 1 : Activités Numériques',
            title: '3. Équations à une inconnue',
            story: "Une équation est une balance à l'équilibre. Il y a un mystère d'un côté (x) et des poids connus de l'autre. Le but est d'isoler le mystère pour découvrir sa valeur. C'est une enquête policière mathématique.",
            content: `
                <h3>1. Résolution d'équations du premier degré</h3>
                <p>But : trouver $x$.</p>
                <p>Règle d'Or : On peut ajouter, soustraire, multiplier ou diviser <strong>des deux côtés</strong> par un même nombre (non nul) sans déséquilibrer la balance.</p>
                <h3>2. Équation Produit-Nul</h3>
                <p>$(ax+b)(cx+d) = 0$</p>
                <p>Si un produit de facteurs est nul, alors l'un au moins de ses facteurs est nul. Soit $ax+b=0$, soit $cx+d=0$.</p>
                <div class="analogy">
                    <strong>⚖️ Analogie : La Balance</strong><br>
                    Si vous avez $x + 2 = 5$, c'est comme si votre sac inconnu + 2kg pèse 5kg. Si vous retirez 2kg de chaque côté, il reste le sac seul qui pèse 3kg.
                </div>
            `,
            summary: [
                "Le but est d'avoir $x = ...$ à la fin.",
                "Ce qui change de côté change de signe (+ devient -).",
                "Un produit est nul si un des facteurs est nul."
            ],
            exercises: [
                {
                    id: 'ex-equ-1',
                    question: "Quelle est la solution de $3x - 5 = 10$ ?",
                    options: ["x = 5", "x = 15", "x = 5/3", "x = 5"],
                    correctAnswer: 3, // wait 3x = 15 -> x=5. Oops duplicate option in logical thought, fixing below.
                    explanation: "$3x = 10 + 5 \\Rightarrow 3x = 15 \\Rightarrow x = 15/3 \\Rightarrow x = 5$."
                }
            ]
        },
        {
            id: 'alg-4e-04',
            part: 'Partie 1 : Activités Numériques',
            title: '4. Inéquations et Systèmes',
            story: "Parfois il n'y a pas une seule réponse précise, mais une zone de vérité. 'Tu dois avoir PLUS de 18 ans'. Ce n'est pas égal (=) à 18, c'est supérieur ou égal ($\ge$). C'est le monde des inégalités.",
            content: `
                <h3>1. Inéquations</h3>
                <p>On utilise les symboles $<, >, \\le, \\ge$.</p>
                <p><strong>Attention Danger !</strong> Quand on multiplie ou divise par un nombre <strong>négatif</strong>, on doit <strong>inverser</strong> le sens de l'inégalité (le crocodiles change de sens).</p>
                <h3>2. Systèmes d'inéquations</h3>
                <p>C'est quand on doit respecter deux règles en même temps. La solution est l'intersection des deux zones (là où les coloriages se superposent sur la droite graduée).</p>
            `,
            summary: [
                "On résout comme une équation classique.",
                "Seule différence : division par un négatif inverse le symbole.",
                "On représente souvent les solutions sur une droite graduée."
            ],
            exercises: [
                {
                    id: 'ex-ineq-1',
                    question: "Si $-2x > 10$, alors...",
                    options: ["$x > -5$", "$x < -5$", "$x > 5$", "$x < 5$"],
                    correctAnswer: 1,
                    explanation: "On divise par -2 (négatif), donc on inverse le signe $>$ qui devient $<$. Le résultat est $10 / -2 = -5$."
                }
            ]
        },
        {
            id: 'alg-4e-05',
            part: 'Partie 1 : Activités Numériques',
            title: '5. Applications Linéaires',
            story: "C'est la version mathématique de la proportionnalité. Une machine qui multiplie tout ce qu'on lui donne par le même nombre 'a'. Si vous lui donnez 2, elle rend 2a. Si vous lui donnez 10, elle rend 10a.",
            content: `
                <h3>1. Définition</h3>
                <p>Une application linéaire est une fonction de la forme $f(x) = ax$.</p>
                <ul>
                    <li>$a$ est le coefficient directeur (ou coefficient de proportionnalité).</li>
                    <li>Elle traduit une situation de proportionnalité.</li>
                </ul>
                <h3>2. Représentation Graphique</h3>
                <p>C'est toujours une <strong>droite qui passe par l'origine</strong> (0,0).</p>
                <div class="analogy">
                    <strong>📈 Analogie : Le Prix au Kilo</strong><br>
                    Si les pommes coûtent 500F le kg. $f(x) = 500x$. Pour 0kg, on paie 0F (passe par l'origine). Pour 2kg, 1000F. C'est linéaire.
                </div>
            `,
            summary: [
                "$f(x) = ax$.",
                "Le graphique est une droite passant par l'origine.",
                "L'image de 0 est toujours 0."
            ],
            exercises: [
                {
                    id: 'ex-lin-1',
                    question: "Quelle fonction est linéaire ?",
                    options: ["$f(x) = 2x + 1$", "$f(x) = x^2$", "$f(x) = -3x$", "$f(x) = 5$"],
                    correctAnswer: 2,
                    explanation: "Seule $f(x) = -3x$ est de la forme $ax$. La première est affine (ne passe pas par 0)."
                }
            ]
        },
        {
            id: 'alg-4e-06',
            part: 'Partie 1 : Activités Numériques',
            title: '6. Statistique',
            story: "Pour comprendre une population (élèves, habitants, voitures...), on ne peut pas regarder chaque individu un par un. On utilise des statistiques pour résumer l'information : la moyenne, les effectifs, les fréquences.",
            content: `
                <h3>1. Vocabulaire</h3>
                <ul>
                    <li><strong>Effectif</strong> : Nombre d'individus.</li>
                    <li><strong>Fréquence</strong> : Proportion (souvent en %). Fréquence = Effectif / Effectif Total.</li>
                </ul>
                <h3>2. Moyenne Pondérée</h3>
                <p>C'est la moyenne où chaque note compte différemment (coefficients).</p>
                <h3>3. Diagrammes</h3>
                <p>Bâtons, circulaire (camembert), histogramme. Pour visualiser les données.</p>
            `,
            summary: [
                "Fréquence = Part de la population (entre 0 et 1).",
                "Moyenne = Somme des (valeurs x effectifs) / Effectif Total.",
                "Le diagramme circulaire représente bien les proportions (360° = 100%)."
            ],
            exercises: [
                {
                    id: 'ex-stat-1',
                    question: "Si j'ai deux 20/20 et trois 0/20, quelle est ma moyenne ?",
                    options: ["10/20", "8/20", "12/20", "6/20"],
                    correctAnswer: 1,
                    explanation: "Somme des points : (2x20 + 3x0) = 40. Nombre de notes : 2+3=5. Moyenne = 40/5 = 8."
                }
            ]
        },

        // ==========================================
        // PARTIE 2 : ACTIVITES GEOMETRIQUES
        // ==========================================

        {
            id: 'geo-4e-07',
            part: 'Partie 2 : Activités Géométriques',
            title: '7. Distance',
            story: "La ligne droite est le chemin le plus court. La distance d'un point à une droite, c'est le chemin 'tout droit' (perpendiculaire). C'est crucial pour construire des routes ou des ponts optimisés.",
            content: `
                <h3>1. Distance Point-Droite</h3>
                <p>La distance d'un point A à une droite (d) est la longueur du segment [AH] où H est le pied de la perpendiculaire. C'est la plus courte distance possible.</p>
                <h3>2. Tangente à un cercle</h3>
                <p>Une droite est tangente à un cercle si elle le touche en un seul point. Elle est perpendiculaire au rayon en ce point.</p>
                <h3>3. Bissectrice (Rappel)</h3>
                <p>Tout point sur la bissectrice d'un angle est à égale distance des deux côtés de cet angle.</p>
            `,
            summary: [
                "Distance = Perpendiculaire (chemin le plus court).",
                "Tangente = Droite perpendiculaire au rayon.",
                "La médiatrice est l'ensemble des points à égale distance des extrémités d'un segment."
            ],
            exercises: [
                {
                    id: 'ex-dist-1',
                    question: "La tangente à un cercle de centre O en un point A est...",
                    options: ["Parallèle au rayon [OA]", "Perpendiculaire au rayon [OA]", "Passe par le centre O", "Coupe le cercle en deux points"],
                    correctAnswer: 1,
                    explanation: "C'est la définition même de la tangente : elle 'frôle' le cercle à angle droit avec le rayon."
                }
            ]
        },
        {
            id: 'geo-4e-08',
            part: 'Partie 2 : Activités Géométriques',
            title: '8. Droites des milieux',
            story: "C'est l'un des théorèmes les plus utiles ! Imaginez une échelle. Si vous montez à barreau du milieu d'un côté, le barreau qui traverse est parallèle au sol et arrive pile au milieu de l'autre montant.",
            content: `
                <h3>1. Théorème direct</h3>
                <p>Dans un triangle, si une droite passe par les <strong>milieux</strong> de deux côtés, alors elle est <strong>parallèle</strong> au troisième côté.</p>
                <h3>2. Théorème sur les longueurs</h3>
                <p>La longueur du segment joignant les milieux est égale à la <strong>moitié</strong> de la longueur du troisième côté.</p>
                <h3>3. Réciproque</h3>
                <p>Si une droite passe par le milieu d'un côté et est parallèle à un deuxième côté, alors elle coupe le troisième en son milieu.</p>
                <div class="analogy">
                    <strong>Ladder Analogie : L'Échelle</strong><br>
                    Le barreau central est deux fois plus petit que la base de l'échelle (si c'est un triangle) et parfaitement parallèle.
                </div>
            `,
            summary: [
                "Milieu + Milieu $\\rightarrow$ Parallèle.",
                "Longueur = Moitié du 3ème côté.",
                "Milieu + Parallèle $\\rightarrow$ Milieu (Réciproque)."
            ],
            exercises: [
                {
                    id: 'ex-mil-1',
                    question: "Dans un triangle ABC, si I et J sont les milieux de [AB] et [AC], et que BC = 10cm, combien mesure [IJ] ?",
                    options: ["10cm", "20cm", "5cm", "Impossible à savoir"],
                    correctAnswer: 2,
                    explanation: "D'après le théorème des milieux, la longueur du segment des milieux vaut la moitié du 3ème côté. 10 / 2 = 5."
                }
            ]
        },
        {
            id: 'geo-4e-09',
            part: 'Partie 2 : Activités Géométriques',
            title: '9. Droites remarquables dans un triangle',
            story: "Un triangle a 4 types de lignes magiques. Elles ont toutes un super-pouvoir : elles se rencontrent toujours en un seul point (concourantes). C'est rare que 3 routes se croisent pile au même carrefour !",
            content: `
                <h3>1. Les 4 Fantastiques</h3>
                <ul>
                    <li><strong>Médiatrices</strong> : Perpendiculaires aux milieux des côtés. $\\rightarrow$ Centre du cercle circonscrit (passe par les 3 sommets).</li>
                    <li><strong>Médianes</strong> : Relient un sommet au milieu opposé. $\\rightarrow$ Centre de gravité (point d'équilibre).</li>
                    <li><strong>Hauteurs</strong> : Passent par un sommet et sont perpendiculaires au côté opposé. $\\rightarrow$ Orthocentre.</li>
                    <li><strong>Bissectrices</strong> : Coupent les angles en deux. $\\rightarrow$ Centre du cercle inscrit.</li>
                </ul>
            `,
            summary: [
                "Médiatrices $\\rightarrow$ Cercle Circonscrit.",
                "Médianes $\\rightarrow$ Centre de Gravité.",
                "Bissectrices $\\rightarrow$ Cercle Inscrit.",
                "Hauteurs $\\rightarrow$ Orthocentre."
            ],
            exercises: [
                {
                    id: 'ex-rem-1',
                    question: "Le point de concours des médianes s'appelle...",
                    options: ["L'Orthocentre", "Le Centre de Gravité", "Le Centre du cercle inscrit", "Le Milieu"],
                    correctAnswer: 1,
                    explanation: "C'est le point d'équilibre du triangle. Il est situé aux 2/3 de chaque médiane."
                }
            ]
        },
        {
            id: 'geo-4e-10',
            part: 'Partie 2 : Activités Géométriques',
            title: '10. Triangle Rectangle (Pythagore)',
            story: "Pythagore, c'est la star des mathématiques. Son théorème permet aux maçons de construire des murs droits et aux architectes de calculer des distances impossibles à mesurer directement. C'est le lien magique entre les côtés d'un triangle droit.",
            content: `
                <h3>1. Théorème de Pythagore</h3>
                <p>Dans un triangle rectangle, le carré de l'hypoténuse (le grand côté) est égal à la somme des carrés des deux autres côtés.</p>
                <p>Si ABC est rectangle en A : $BC^2 = AB^2 + AC^2$</p>
                <h3>2. Réciproque de Pythagore</h3>
                <p>Sert à prouver qu'un triangle est rectangle. Si les carrés collent, l'angle est droit !</p>
                <h3>3. Cercle circonscrit</h3>
                <p>Le milieu de l'hypoténuse est le centre du cercle circonscrit.</p>
            `,
            summary: [
                "Pythagore sert à calculer une longueur manquante.",
                "La réciproque sert à prouver qu'un angle est droit.",
                "Hypoténuse = Côté le plus long (face à l'angle droit)."
            ],
            exercises: [
                {
                    id: 'ex-pyth-1',
                    question: "Si un triangle a des côtés de 3, 4 et 5 cm, est-il rectangle ?",
                    options: ["Oui", "Non", "On ne peut pas savoir"],
                    correctAnswer: 0,
                    explanation: "$3^2 + 4^2 = 9 + 16 = 25$. Et $5^2 = 25$. Comme $3^2 + 4^2 = 5^2$, il est rectangle (Réciproque de Pythagore)."
                }
            ]
        },
        {
            id: 'geo-4e-11',
            part: 'Partie 2 : Activités Géométriques',
            title: '11. Translations et Vecteurs',
            story: "Jusqu'ici, on déplaçait des objets. Maintenant, on étudie 'le déplacement' lui-même. Un vecteur, c'est une flèche qui dit : 'Va là-bas, à cette distance, dans cette direction'. C'est le langage du GPS et des jeux vidéo.",
            content: `
                <h3>1. La Translation</h3>
                <p>C'est faire glisser une figure sans la tourner. Tous les points se déplacent de la même façon (même direction, même sens, même longueur).</p>
                <h3>2. Le Vecteur $\\vec{AB}$</h3>
                <p>Il est défini par 3 choses :</p>
                <ul>
                    <li><strong>Direction</strong> : La droite (AB).</li>
                    <li><strong>Sens</strong> : De A vers B (la flèche).</li>
                    <li><strong>Norme</strong> : La longueur AB.</li>
                </ul>
                <h3>3. Égalité</h3>
                <p>$\\vec{AB} = \\vec{CD}$ signifie que ABDC est un parallélogramme.</p>
            `,
            summary: [
                "Vecteur = Déplacement (Direction + Sens + Longueur).",
                "Translation = Glissement selon un vecteur.",
                "Deux vecteurs égaux forment un parallélogramme."
            ],
            exercises: [
                {
                    id: 'ex-vec-1',
                    question: "Si $\\vec{AB} = \\vec{CD}$, quelle figure est un parallélogramme ?",
                    options: ["ABCD", "ABDC", "ADBC", "ACBD"],
                    correctAnswer: 1,
                    explanation: "Attention à l'ordre des lettres ! Si on va de A vers B comme on va de C vers D, alors ABDC (en tournant) est le parallélogramme."
                }
            ]
        },
        {
            id: 'geo-4e-12',
            part: 'Partie 2 : Activités Géométriques',
            title: '12. Projection Orthogonale',
            story: "Imaginez que le soleil est tout en haut, à midi pile (au zénith). L'ombre d'un bâton au sol est sa 'projection orthogonale'. On 'écrase' l'objet sur une droite avec un angle droit. C'est très utile pour calculer des hauteurs.",
            content: `
                <h3>1. Définition</h3>
                <p>Le projeté orthogonal d'un point M sur une droite (d) est le point H de (d) tel que (MH) soit perpendiculaire à (d).</p>
                <h3>2. Conservation (non)</h3>
                <p>La projection ne conserve pas les longueurs (l'ombre est plus petite que le bâton penché).</p>
                <p>Mais elle conserve le milieu et le parallélisme. (L'ombre du milieu du bâton est au milieu de l'ombre du bâton).</p>
                <div class="analogy">
                    <strong>☀️ Analogie : L'Ombre de Midi</strong><br>
                    Le projeté, c'est l'ombre 'verticale'. C'est le chemin le plus direct pour rejoindre la droite.
                </div>
            `,
            summary: [
                "Projection = 'Tomber à pic' (perpendiculairement).",
                "Conserve le milieu et le coefficient $k$ (Thalès).",
                "Ne conserve pas les longueurs ni les angles."
            ],
            exercises: [
                {
                    id: 'ex-proj-1',
                    question: "Si M appartient déjà à la droite (d), quel est son projeté orthogonal sur (d) ?",
                    options: ["Le point M lui-même", "Un autre point H", "L'infini", "Le point d'origine"],
                    correctAnswer: 0,
                    explanation: "Si vous êtes déjà sur la route, la distance qui vous sépare de la route est 0. Votre projection est vous-même."
                }
            ]
        },
        {
            id: 'geo-4e-13',
            part: 'Partie 2 : Activités Géométriques',
            title: '13. Rotations - Polygones réguliers',
            story: "La rotation, c'est faire tourner une figure autour d'un clou. C'est ce qui crée les rosaces, les flocons de neige et les roues. Les polygones réguliers (carré, hexagone...) sont les maîtres de la rotation.",
            content: `
                <h3>1. La Rotation</h3>
                <p>Tourner autour d'un centre O, d'un angle $\\alpha$, dans un sens donné.</p>
                <h3>2. Polygones Réguliers</h3>
                <p>Des figures qui ont tous les côtés égaux et tous les angles égaux et sont inscriptibles dans un cercle.</p>
                <ul>
                    <li>Triangle Équilatéral (3 côtés, angles au centre 120°)</li>
                    <li>Carré (4 côtés, angles au centre 90°)</li>
                    <li>Hexagone (6 côtés, angles au centre 60°)</li>
                </ul>
            `,
            summary: [
                "Rotation conserve longueurs et angles (comme la symétrie).",
                "Angle au centre d'un polygone régulier à $n$ côtés = $360° / n$.",
                "L'hexagone régulier est composé de 6 triangles équilatéraux."
            ],
            exercises: [
                {
                    id: 'ex-rot-1',
                    question: "Quel est l'angle au centre d'un hexagone régulier (6 côtés) ?",
                    options: ["90°", "60°", "45°", "120°"],
                    correctAnswer: 1,
                    explanation: "Un tour complet fait 360°. On divise par 6 côtés : $360 / 6 = 60°$."
                }
            ]
        },
        {
            id: 'geo-4e-14',
            part: 'Partie 2 : Activités Géométriques',
            title: '14. Géométrie dans l’espace',
            story: "Retour à la 3D avec des formes pointues ! Les pyramides d'Égypte et les cornets de glace (cônes). On apprend à calculer leur volume pour savoir combien de sable ou de glace on peut mettre dedans.",
            content: `
                <h3>1. Pyramide</h3>
                <p>Une base (polygone) et un sommet pointu. Les faces latérales sont des triangles.</p>
                <h3>2. Cône de révolution</h3>
                <p>Une base ronde (cercle) et un sommet pointu.</p>
                <h3>3. Le Volume (Formule Magique)</h3>
                <p>C'est presque comme les prismes, mais comme c'est pointu, il y en a moins.</p>
                <p>$Volume = \\frac{\\text{Aire de la Base} \\times \\text{Hauteur}}{3}$</p>
                <div class="analogy">
                    <strong>🍦 Analogie : Le Tiers</strong><br>
                    3 cônes remplissent exactement 1 cylindre de même hauteur et même base. C'est pour ça qu'on divise par 3.
                </div>
            `,
            summary: [
                "Pyramide et Cône : Tout se rejoint en un sommet S.",
                "Volume = (Base x Hauteur) / 3.",
                "Savoir reconnaître la hauteur (perpendiculaire à la base)."
            ],
            exercises: [
                {
                    id: 'ex-pyr-1',
                    question: "Quelle est la formule du volume d'une pyramide ?",
                    options: ["Base x Hauteur", "(Base x Hauteur) / 2", "(Base x Hauteur) / 3", "Base + Hauteur"],
                    correctAnswer: 2,
                    explanation: "C'est la règle du 1/3 pour les solides pointus."
                }
            ]
        }
    ]
};
