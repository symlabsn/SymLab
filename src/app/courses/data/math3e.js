export const math3eData = {
    id: 'math-3e',
    title: 'Mathématiques 3ème',
    chapters: [
        // ==========================================
        // PARTIE 1 : ACTIVITES NUMERIQUES
        // ==========================================

        {
            id: 'alg-3e-01',
            part: 'Partie 1 : Activités Numériques',
            title: '1. Racine Carrée',
            story: "Imaginez un carré de 25 m². Quelle est la longueur de son côté ? C'est 5m, car 5×5=25. La racine carrée, c'est l'opération inverse du carré. C'est comme 'défaire' une multiplication par elle-même.",
            content: `
                <h3>1. Définition</h3>
                <p>La racine carrée d'un nombre positif $a$ est le nombre positif dont le carré vaut $a$.</p>
                <p>On note : $\\sqrt{a}$. Exemple : $\\sqrt{25} = 5$ car $5^2 = 25$.</p>
                <h3>2. Propriétés</h3>
                <ul>
                    <li>$\\sqrt{a \\times b} = \\sqrt{a} \\times \\sqrt{b}$</li>
                    <li>$\\sqrt{\\frac{a}{b}} = \\frac{\\sqrt{a}}{\\sqrt{b}}$</li>
                    <li>$(\\sqrt{a})^2 = a$</li>
                </ul>
                <h3>3. Simplification</h3>
                <p>$\\sqrt{50} = \\sqrt{25 \\times 2} = \\sqrt{25} \\times \\sqrt{2} = 5\\sqrt{2}$</p>
                <div class="analogy">
                    <strong>📦 Analogie : Le Carton</strong><br>
                    Si un carton carré a une surface de 36 m², chaque côté mesure $\\sqrt{36} = 6$ m. C'est le côté du carré parfait.
                </div>
            `,
            summary: [
                "$\\sqrt{a^2} = a$ (si a positif).",
                "On ne peut pas calculer la racine d'un nombre négatif (dans $\\mathbb{R}$).",
                "Simplifier en cherchant les carrés parfaits."
            ],
            exercises: [
                {
                    id: 'ex-rac-1',
                    question: "Que vaut $\\sqrt{64}$ ?",
                    options: ["6", "7", "8", "32"],
                    correctAnswer: 2,
                    explanation: "$8 \\times 8 = 64$, donc $\\sqrt{64} = 8$."
                }
            ]
        },
        {
            id: 'alg-3e-02',
            part: 'Partie 1 : Activités Numériques',
            title: '2. Équations et Inéquations à une inconnue',
            story: "Vous êtes maintenant des experts de la balance ! Cette année, on ajoute les équations avec des racines carrées et des fractions plus complexes. Le principe reste le même : isoler x.",
            content: `
                <h3>1. Équations du type $ax + b = cx + d$</h3>
                <p>On regroupe les termes en x d'un côté et les constantes de l'autre.</p>
                <h3>2. Équations avec fractions</h3>
                <p>Multiplier par le dénominateur commun pour éliminer les fractions.</p>
                <h3>3. Inéquations</h3>
                <p>Attention au changement de sens si on multiplie/divise par un négatif !</p>
            `,
            summary: [
                "Toujours vérifier la solution en la remplaçant dans l'équation.",
                "Une inéquation a souvent une infinité de solutions.",
                "Représenter graphiquement sur une droite graduée."
            ],
            exercises: [
                {
                    id: 'ex-eq-1',
                    question: "Résoudre : $3x - 7 = 2x + 5$",
                    options: ["x = 2", "x = 12", "x = -2", "x = 6"],
                    correctAnswer: 1,
                    explanation: "$3x - 2x = 5 + 7 \\Rightarrow x = 12$."
                }
            ]
        },
        {
            id: 'alg-3e-03',
            part: 'Partie 1 : Activités Numériques',
            title: '3. Systèmes d'équations à deux inconnues',
            story: "Deux inconnues (x et y), deux équations. C'est comme deux indices dans une enquête. Ensemble, ils permettent de trouver les deux coupables !",
            content: `
                <h3>1. Méthode par Substitution</h3>
                <p>On exprime une variable en fonction de l'autre dans une équation, puis on remplace.</p>
                <h3>2. Méthode par Combinaison</h3>
                <p>On additionne ou soustrait les équations pour éliminer une variable.</p>
                <h3>3. Interprétation Graphique</h3>
                <p>Chaque équation est une droite. La solution est le point d'intersection.</p>
            `,
            summary: [
                "Un système a une solution unique si les droites se coupent.",
                "Pas de solution si les droites sont parallèles.",
                "Infinité de solutions si les droites sont confondues."
            ],
            exercises: [
                {
                    id: 'ex-sys-1',
                    question: "Combien de solutions a un système dont les droites sont parallèles ?",
                    options: ["0", "1", "2", "Une infinité"],
                    correctAnswer: 0,
                    explanation: "Deux droites parallèles ne se croisent jamais, donc aucune solution."
                }
            ]
        },
        {
            id: 'alg-3e-04',
            part: 'Partie 1 : Activités Numériques',
            title: '4. Systèmes d'inéquations',
            story: "Maintenant, au lieu de chercher un point précis, on cherche une zone entière. C'est comme dire 'tous les points qui sont à la fois au-dessus de cette ligne ET en dessous de celle-là'.",
            content: `
                <h3>1. Principe</h3>
                <p>Résoudre chaque inéquation séparément, puis trouver l'intersection des solutions.</p>
                <h3>2. Représentation</h3>
                <p>Sur un graphique, on colorie les zones et on garde la partie commune.</p>
            `,
            summary: [
                "La solution est l'intersection des deux zones.",
                "Bien vérifier les bornes (ouvertes ou fermées).",
                "Tester un point pour vérifier."
            ],
            exercises: [
                {
                    id: 'ex-ineq-1',
                    question: "Si $x > 2$ ET $x < 5$, quelle est la solution ?",
                    options: ["$x \\in ]-\\infty, 2[$", "$x \\in ]2, 5[$", "$x \\in ]5, +\\infty[$", "Pas de solution"],
                    correctAnswer: 1,
                    explanation: "C'est l'intervalle entre 2 et 5 (exclus)."
                }
            ]
        },
        {
            id: 'alg-3e-05',
            part: 'Partie 1 : Activités Numériques',
            title: '5. Statistique',
            story: "Les statistiques, c'est l'art de résumer des milliers de données en quelques chiffres clés : moyenne, médiane, étendue. C'est indispensable pour comprendre les sondages et les études.",
            content: `
                <h3>1. Moyenne</h3>
                <p>Somme des valeurs / Nombre de valeurs.</p>
                <h3>2. Médiane</h3>
                <p>La valeur du milieu quand on range les données dans l'ordre.</p>
                <h3>3. Étendue</h3>
                <p>Max - Min. Mesure la dispersion.</p>
                <h3>4. Quartiles</h3>
                <p>Q1 (25%), Q2 (médiane, 50%), Q3 (75%).</p>
            `,
            summary: [
                "Moyenne sensible aux valeurs extrêmes.",
                "Médiane plus robuste.",
                "Diagramme en boîte (box plot) pour visualiser."
            ],
            exercises: [
                {
                    id: 'ex-stat-1',
                    question: "Quelle est la médiane de : 3, 7, 9, 12, 15 ?",
                    options: ["7", "9", "12", "9.2"],
                    correctAnswer: 1,
                    explanation: "C'est la valeur centrale : 9 (il y a 2 valeurs avant et 2 après)."
                }
            ]
        },
        {
            id: 'alg-3e-06',
            part: 'Partie 1 : Activités Numériques',
            title: '6. Applications Affines',
            story: "Une fonction affine, c'est une machine qui transforme x en ax+b. C'est la généralisation de la fonction linéaire. Son graphique est toujours une droite, mais qui ne passe pas forcément par l'origine.",
            content: `
                <h3>1. Définition</h3>
                <p>$f(x) = ax + b$</p>
                <ul>
                    <li>$a$ : coefficient directeur (pente).</li>
                    <li>$b$ : ordonnée à l'origine (où la droite coupe l'axe des y).</li>
                </ul>
                <h3>2. Représentation</h3>
                <p>Droite qui passe par le point (0, b).</p>
                <h3>3. Cas particuliers</h3>
                <ul>
                    <li>Si $b = 0$ : fonction linéaire.</li>
                    <li>Si $a = 0$ : fonction constante (droite horizontale).</li>
                </ul>
            `,
            summary: [
                "$a > 0$ : fonction croissante.",
                "$a < 0$ : fonction décroissante.",
                "Deux droites parallèles ont le même coefficient $a$."
            ],
            exercises: [
                {
                    id: 'ex-aff-1',
                    question: "Quelle est l'ordonnée à l'origine de $f(x) = 3x - 5$ ?",
                    options: ["3", "-5", "0", "5"],
                    correctAnswer: 1,
                    explanation: "C'est la valeur de $b$ dans $ax + b$, donc -5."
                }
            ]
        },

        // ==========================================
        // PARTIE 2 : ACTIVITES GEOMETRIQUES
        // ==========================================

        {
            id: 'geo-3e-07',
            part: 'Partie 2 : Activités Géométriques',
            title: '7. Théorème de Thalès',
            story: "Thalès, c'est le roi de la proportionnalité en géométrie. Imaginez deux échelles parallèles appuyées contre un mur. Si vous montez deux fois plus haut sur l'une, vous montez deux fois plus haut sur l'autre. C'est Thalès !",
            content: `
                <h3>1. Configuration</h3>
                <p>Deux droites parallèles coupées par deux sécantes.</p>
                <h3>2. Théorème Direct</h3>
                <p>Si (BC) // (DE), alors : $\\frac{AB}{AD} = \\frac{AC}{AE} = \\frac{BC}{DE}$</p>
                <h3>3. Réciproque</h3>
                <p>Si les rapports sont égaux, alors les droites sont parallèles.</p>
                <div class="analogy">
                    <strong>📏 Analogie : La Photocopieuse</strong><br>
                    Thalès, c'est comme un zoom. Si vous agrandissez une photo de 50%, toutes les longueurs sont multipliées par 1.5.
                </div>
            `,
            summary: [
                "Attention à l'ordre des points dans les rapports.",
                "Réciproque : pour prouver que deux droites sont parallèles.",
                "Contraposée : pour prouver qu'elles ne sont PAS parallèles."
            ],
            exercises: [
                {
                    id: 'ex-tha-1',
                    question: "Si $\\frac{AB}{AD} = \\frac{AC}{AE}$ et les points alignés, que peut-on conclure ?",
                    options: ["(BC) // (DE)", "AB = AC", "Les triangles sont égaux", "Rien"],
                    correctAnswer: 0,
                    explanation: "C'est la réciproque de Thalès : égalité des rapports implique parallélisme."
                }
            ]
        },
        {
            id: 'geo-3e-08',
            part: 'Partie 2 : Activités Géométriques',
            title: '8. Angles Inscrits',
            story: "Un angle inscrit dans un cercle a un super-pouvoir : il vaut toujours la moitié de l'angle au centre qui intercepte le même arc. C'est magique et ça marche à tous les coups !",
            content: `
                <h3>1. Définition</h3>
                <p>Un angle inscrit a son sommet sur le cercle et ses côtés passent par deux autres points du cercle.</p>
                <h3>2. Théorème</h3>
                <p>L'angle inscrit vaut la moitié de l'angle au centre qui intercepte le même arc.</p>
                <h3>3. Conséquence</h3>
                <p>Tous les angles inscrits qui interceptent le même arc sont égaux.</p>
            `,
            summary: [
                "Angle inscrit = Angle au centre / 2.",
                "Si l'arc est un demi-cercle, l'angle inscrit vaut 90°.",
                "Utile pour prouver qu'un triangle est rectangle."
            ],
            exercises: [
                {
                    id: 'ex-ang-1',
                    question: "Si l'angle au centre vaut 80°, l'angle inscrit interceptant le même arc vaut :",
                    options: ["160°", "40°", "80°", "20°"],
                    correctAnswer: 1,
                    explanation: "Angle inscrit = Angle au centre / 2 = 80 / 2 = 40°."
                }
            ]
        },
        {
            id: 'geo-3e-09',
            part: 'Partie 2 : Activités Géométriques',
            title: '9. Trigonométrie dans le triangle rectangle',
            story: "SOH-CAH-TOA ! C'est le code secret pour retenir sinus, cosinus et tangente. Avec ces trois outils, vous pouvez calculer n'importe quelle longueur ou angle dans un triangle rectangle.",
            content: `
                <h3>1. Les 3 Rapports</h3>
                <ul>
                    <li>$\\sin(\\alpha) = \\frac{\\text{Opposé}}{\\text{Hypoténuse}}$ (SOH)</li>
                    <li>$\\cos(\\alpha) = \\frac{\\text{Adjacent}}{\\text{Hypoténuse}}$ (CAH)</li>
                    <li>$\\tan(\\alpha) = \\frac{\\text{Opposé}}{\\text{Adjacent}}$ (TOA)</li>
                </ul>
                <h3>2. Formule Fondamentale</h3>
                <p>$\\sin^2(\\alpha) + \\cos^2(\\alpha) = 1$</p>
            `,
            summary: [
                "Toujours identifier l'hypoténuse (côté le plus long).",
                "Opposé et Adjacent dépendent de l'angle considéré.",
                "Calculatrice en mode degré !"
            ],
            exercises: [
                {
                    id: 'ex-trig-1',
                    question: "Dans un triangle rectangle, si l'opposé vaut 3 et l'hypoténuse 5, que vaut sin(α) ?",
                    options: ["3/5", "5/3", "4/5", "3/4"],
                    correctAnswer: 0,
                    explanation: "$\\sin(\\alpha) = \\frac{\\text{Opposé}}{\\text{Hypoténuse}} = \\frac{3}{5}$."
                }
            ]
        },
        {
            id: 'geo-3e-10',
            part: 'Partie 2 : Activités Géométriques',
            title: '10. Géométrie dans l'espace',
            story: "Retour à la 3D ! Cette fois, on étudie la sphère (la boule parfaite) et le cylindre (la canette de soda). Volumes et aires, c'est parti !",
            content: `
                <h3>1. La Sphère</h3>
                <ul>
                    <li>Volume : $V = \\frac{4}{3}\\pi R^3$</li>
                    <li>Aire : $A = 4\\pi R^2$</li>
                </ul>
                <h3>2. Le Cylindre</h3>
                <ul>
                    <li>Volume : $V = \\pi R^2 \\times h$</li>
                    <li>Aire latérale : $A = 2\\pi R \\times h$</li>
                </ul>
                <div class="analogy">
                    <strong>⚽ Analogie : Le Ballon</strong><br>
                    Un ballon de foot est une sphère. Pour calculer combien d'air il contient, on utilise la formule du volume.
                </div>
            `,
            summary: [
                "Rayon au cube pour la sphère.",
                "Cylindre = Prisme à base circulaire.",
                "Toujours vérifier les unités (cm³, m³)."
            ],
            exercises: [
                {
                    id: 'ex-esp-1',
                    question: "Quelle est la formule du volume d'une sphère ?",
                    options: ["$\\pi R^2$", "$4\\pi R^2$", "$\\frac{4}{3}\\pi R^3$", "$\\pi R^3$"],
                    correctAnswer: 2,
                    explanation: "C'est la formule classique : $V = \\frac{4}{3}\\pi R^3$."
                }
            ]
        },
        {
            id: 'geo-3e-11',
            part: 'Partie 2 : Activités Géométriques',
            title: '11. Vecteurs',
            story: "Les vecteurs, c'est la suite de la 4ème. On approfondit avec les coordonnées et les opérations. Un vecteur, c'est toujours une flèche avec direction, sens et longueur.",
            content: `
                <h3>1. Coordonnées</h3>
                <p>$\\vec{AB} \\begin{pmatrix} x_B - x_A \\\\ y_B - y_A \\end{pmatrix}$</p>
                <h3>2. Addition</h3>
                <p>$\\vec{u} + \\vec{v} = \\begin{pmatrix} x_u + x_v \\\\ y_u + y_v \\end{pmatrix}$</p>
                <h3>3. Multiplication par un scalaire</h3>
                <p>$k\\vec{u} = \\begin{pmatrix} kx_u \\\\ ky_u \\end{pmatrix}$</p>
            `,
            summary: [
                "Vecteur nul : $\\vec{0} = \\begin{pmatrix} 0 \\\\ 0 \\end{pmatrix}$.",
                "Vecteurs colinéaires : même direction.",
                "Relation de Chasles : $\\vec{AB} + \\vec{BC} = \\vec{AC}$."
            ],
            exercises: [
                {
                    id: 'ex-vec-1',
                    question: "Si A(1,2) et B(4,6), quelles sont les coordonnées de $\\vec{AB}$ ?",
                    options: ["(3, 4)", "(5, 8)", "(4, 6)", "(1, 2)"],
                    correctAnswer: 0,
                    explanation: "$\\vec{AB} = \\begin{pmatrix} 4-1 \\\\ 6-2 \\end{pmatrix} = \\begin{pmatrix} 3 \\\\ 4 \\end{pmatrix}$."
                }
            ]
        },
        {
            id: 'geo-3e-12',
            part: 'Partie 2 : Activités Géométriques',
            title: '12. Repérage dans le plan',
            story: "Le repère, c'est le GPS des mathématiques. Chaque point a une adresse unique (x, y). Avec ça, on peut tout localiser et calculer des distances.",
            content: `
                <h3>1. Coordonnées d'un point</h3>
                <p>M(x, y) où x est l'abscisse et y l'ordonnée.</p>
                <h3>2. Distance entre deux points</h3>
                <p>$AB = \\sqrt{(x_B - x_A)^2 + (y_B - y_A)^2}$ (Pythagore !)</p>
                <h3>3. Milieu d'un segment</h3>
                <p>$I\\left(\\frac{x_A + x_B}{2}, \\frac{y_A + y_B}{2}\\right)$</p>
            `,
            summary: [
                "Origine O(0, 0).",
                "Axe des abscisses (horizontal), axe des ordonnées (vertical).",
                "Distance toujours positive."
            ],
            exercises: [
                {
                    id: 'ex-rep-1',
                    question: "Quel est le milieu du segment [AB] avec A(2,4) et B(6,8) ?",
                    options: ["(4, 6)", "(8, 12)", "(3, 5)", "(2, 4)"],
                    correctAnswer: 0,
                    explanation: "$I = \\left(\\frac{2+6}{2}, \\frac{4+8}{2}\\right) = (4, 6)$."
                }
            ]
        },
        {
            id: 'geo-3e-13',
            part: 'Partie 2 : Activités Géométriques',
            title: '13. Transformations du plan',
            story: "Les transformations, ce sont les mouvements géométriques : translation (glisser), rotation (tourner), symétrie (miroir), homothétie (zoom). Chacune a ses propriétés magiques.",
            content: `
                <h3>1. Translation</h3>
                <p>Glissement selon un vecteur $\\vec{u}$.</p>
                <h3>2. Rotation</h3>
                <p>Tourner autour d'un centre O d'un angle $\\alpha$.</p>
                <h3>3. Symétrie</h3>
                <p>Centrale (par rapport à un point) ou Axiale (par rapport à une droite).</p>
                <h3>4. Homothétie</h3>
                <p>Agrandissement ou réduction de rapport k.</p>
            `,
            summary: [
                "Translation et Rotation conservent les longueurs et les angles.",
                "Symétrie centrale = Rotation de 180°.",
                "Homothétie change les longueurs (multiplie par k)."
            ],
            exercises: [
                {
                    id: 'ex-trans-1',
                    question: "Quelle transformation conserve les longueurs ET les angles ?",
                    options: ["L'homothétie", "La translation", "La projection", "Aucune"],
                    correctAnswer: 1,
                    explanation: "La translation est une isométrie (conserve tout)."
                }
            ]
        }
    ]
};
