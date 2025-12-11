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
            story: `Imaginez un carré de 25 m². Quelle est la longueur de son côté ? C'est 5 m, car 5 fois 5 égale 25. La racine carrée, c'est l'opération inverse du carré. C'est comme défaire une multiplication par elle-même.`,
            content: `
### 1. Définition
La racine carrée d'un nombre positif $a$ est le nombre positif dont le carré vaut $a$.
On note : $\\sqrt{a}$. Exemple : $\\sqrt{25} = 5$ car $5^2 = 25$.

### 2. Propriétés
- $\\sqrt{a \\times b} = \\sqrt{a} \\times \\sqrt{b}$
- $\\sqrt{\\frac{a}{b}} = \\frac{\\sqrt{a}}{\\sqrt{b}}$
- $(\\sqrt{a})^2 = a$

### 3. Simplification
$\\sqrt{50} = \\sqrt{25 \\times 2} = \\sqrt{25} \\times \\sqrt{2} = 5\\sqrt{2}$

> **📦 Analogie : Le Carton**  
> Si un carton carré a une surface de 36 m², chaque côté mesure $\\sqrt{36} = 6$ m. C'est le côté du carré parfait.
            `,
            summary: [
                "$\\sqrt{a^2} = a$ pour tout nombre a positif.",
                "On ne peut pas calculer la racine d'un nombre négatif.",
                "Pour simplifier : cherchez les carrés parfaits (4, 9, 16, 25...)."
            ],
            exercises: [
                {
                    id: 'ex-rac-1',
                    question: "Que vaut $\\sqrt{64}$ ?",
                    options: ["6", "7", "8", "32"],
                    correctAnswer: 2,
                    explanation: "Car $8 \\times 8 = 64$."
                }
            ]
        },
        {
            id: 'alg-3e-02',
            part: 'Partie 1 : Activités Numériques',
            title: '2. Équations et Inéquations à une inconnue',
            story: `Vous êtes maintenant des experts de la balance ! Cette année, on ajoute les équations avec des racines carrées et des fractions plus complexes. Le principe reste le même : isoler x.`,
            content: `
### 1. Équations du type $ax + b = cx + d$
On regroupe les termes en x d'un côté et les constantes de l'autre.

### 2. Équations avec fractions
Multiplier par le dénominateur commun pour éliminer les fractions.

### 3. Inéquations
Attention au changement de sens si on multiplie/divise par un négatif !
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
            title: '3. Systèmes d\'équations à deux inconnues',
            story: `Deux inconnues (x et y), deux équations. C'est comme deux indices dans une enquête. Ensemble, ils permettent de trouver les deux coupables !`,
            content: `
### 1. Méthode par Substitution
On exprime une variable en fonction de l'autre dans une équation, puis on remplace.

### 2. Méthode par Combinaison
On additionne ou soustrait les équations pour éliminer une variable.

### 3. Interprétation Graphique
Chaque équation est une droite. La solution est le point d'intersection.
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
            title: '4. Systèmes d\'inéquations',
            story: `Maintenant, au lieu de chercher un point précis, on cherche une zone entière. C'est comme dire tous les points qui sont à la fois au-dessus de cette ligne ET en dessous de celle-là.`,
            content: `
### 1. Principe
Résoudre chaque inéquation séparément, puis trouver l'intersection des solutions.

### 2. Représentation
Sur un graphique, on colorie les zones et on garde la partie commune.
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
            story: `Les statistiques, c'est l'art de résumer des milliers de données en quelques chiffres clés : moyenne, médiane, étendue. C'est indispensable pour comprendre les sondages et les études.`,
            content: `
### 1. Moyenne
Somme des valeurs / Nombre de valeurs.

### 2. Médiane
La valeur du milieu quand on range les données dans l'ordre.

### 3. Étendue
Max - Min. Mesure la dispersion.

### 4. Quartiles
Q1 (25%), Q2 (médiane, 50%), Q3 (75%).
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
            story: `Une fonction affine, c'est une machine qui transforme x en ax+b. C'est la généralisation de la fonction linéaire. Son graphique est toujours une droite, mais qui ne passe pas forcément par l'origine.`,
            content: `
### 1. Définition
$f(x) = ax + b$

- $a$ : coefficient directeur (pente).
- $b$ : ordonnée à l'origine (où la droite coupe l'axe des y).

### 2. Représentation
Droite qui passe par le point (0, b).

### 3. Cas particuliers
- Si $b = 0$ : fonction linéaire.
- Si $a = 0$ : fonction constante (droite horizontale).
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
            story: `Thalès, c'est le roi de la proportionnalité en géométrie. Imaginez deux échelles parallèles appuyées contre un mur. Si vous montez deux fois plus haut sur l'une, vous montez deux fois plus haut sur l'autre. C'est Thalès !`,
            content: `
### 1. Configuration
Deux droites parallèles coupées par deux sécantes.

### 2. Théorème Direct
Si (BC) // (DE), alors : $\\frac{AB}{AD} = \\frac{AC}{AE} = \\frac{BC}{DE}$

### 3. Réciproque
Si les rapports sont égaux, alors les droites sont parallèles.

> **📏 Analogie : La Photocopieuse**  
> Thalès, c'est comme un zoom. Si vous agrandissez une photo de 50%, toutes les longueurs sont multipliées par 1.5.
            `,
            summary: [
                "Milieu + Milieu → Parallèle.",
                "Longueur = Moitié du 3ème côté.",
                "Milieu + Parallèle → Milieu (Réciproque)."
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
            story: `Un angle inscrit dans un cercle a un super-pouvoir : il vaut toujours la moitié de l'angle au centre qui intercepte le même arc. C'est magique et ça marche à tous les coups !`,
            content: `
### 1. Définition
Un angle inscrit a son sommet sur le cercle et ses côtés passent par deux autres points du cercle.

### 2. Théorème
L'angle inscrit vaut la moitié de l'angle au centre qui intercepte le même arc.

### 3. Conséquence
Tous les angles inscrits qui interceptent le même arc sont égaux.
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
            story: `SOH-CAH-TOA ! C'est le code secret pour retenir sinus, cosinus et tangente. Avec ces trois outils, vous pouvez calculer n'importe quelle longueur ou angle dans un triangle rectangle.`,
            content: `
### 1. Les 3 Rapports
- $\\sin(\\alpha) = \\frac{\\text{Opposé}}{\\text{Hypoténuse}}$ (SOH)
- $\\cos(\\alpha) = \\frac{\\text{Adjacent}}{\\text{Hypoténuse}}$ (CAH)
- $\\tan(\\alpha) = \\frac{\\text{Opposé}}{\\text{Adjacent}}$ (TOA)

### 2. Formule Fondamentale
$\\sin^2(\\alpha) + \\cos^2(\\alpha) = 1$
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
            title: '10. Géométrie dans l\'espace',
            story: `Retour à la 3D ! Cette fois, on étudie la sphère (la boule parfaite) et le cylindre (la canette de soda). Volumes et aires, c'est parti !`,
            content: `
### 1. La Sphère
- Volume : $V = \\frac{4}{3}\\pi R^3$
- Aire : $A = 4\\pi R^2$

### 2. Le Cylindre
- Volume : $V = \\pi R^2 \\times h$
- Aire latérale : $A = 2\\pi R \\times h$

> **⚽ Analogie : Le Ballon**  
> Un ballon de foot est une sphère. Pour calculer combien d'air il contient, on utilise la formule du volume.
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
            story: `Les vecteurs, c'est la suite de la 4ème. On approfondit avec les coordonnées et les opérations. Un vecteur, c'est toujours une flèche avec direction, sens et longueur.`,
            content: `
### 1. Coordonnées
$\\vec{AB} \\begin{pmatrix} x_B - x_A \\\\ y_B - y_A \\end{pmatrix}$

### 2. Addition
$\\vec{u} + \\vec{v} = \\begin{pmatrix} x_u + x_v \\\\ y_u + y_v \\end{pmatrix}$

### 3. Multiplication par un scalaire
$k\\vec{u} = \\begin{pmatrix} kx_u \\\\ ky_u \\end{pmatrix}$
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
            story: `Le repère, c'est le GPS des mathématiques. Chaque point a une adresse unique (x, y). Avec ça, on peut tout localiser et calculer des distances.`,
            content: `
### 1. Coordonnées d'un point
M(x, y) où x est l'abscisse et y l'ordonnée.

### 2. Distance entre deux points
$AB = \\sqrt{(x_B - x_A)^2 + (y_B - y_A)^2}$ (Pythagore !)

### 3. Milieu d'un segment
$I\\left(\\frac{x_A + x_B}{2}, \\frac{y_A + y_B}{2}\\right)$
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
            story: `Les transformations, ce sont les mouvements géométriques : translation (glisser), rotation (tourner), symétrie (miroir), homothétie (zoom). Chacune a ses propriétés magiques.`,
            content: `
### 1. Translation
Glissement selon un vecteur $\\vec{u}$.

### 2. Rotation
Tourner autour d'un centre O d'un angle $\\alpha$.

### 3. Symétrie
Centrale (par rapport à un point) ou Axiale (par rapport à une droite).

### 4. Homothétie
Agrandissement ou réduction de rapport k.
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
