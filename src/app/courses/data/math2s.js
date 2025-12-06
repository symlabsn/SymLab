export const math2sData = {
    id: 'math-2s',
    title: 'Mathématiques 2nde S',
    author: 'SymLab Team (Conforme Programme Sénégal)',
    description: 'Cours complet de Mathématiques Seconde S : Algèbre, Analyse et Géométrie.',
    chapters: [
        // ==========================================
        // ACTIVITÉS NUMÉRIQUES
        // ==========================================
        {
            id: 'm2s-num-01',
            part: 'Activités Numériques',
            title: 'Calcul dans IR',
            story: "Les nombres réels sont le terrain de jeu de l'analyse. Maîtriser leurs propriétés, c'est comme connaître les règles des échecs avant de jouer.",
            content: `
                <h3>1. Les Ensembles de Nombres</h3>
                <p>On rappelle les inclusions successives : $\\mathbb{N} \\subset \\mathbb{Z} \\subset \\mathbb{D} \\subset \\mathbb{Q} \\subset \\mathbb{R}$.</p>
                <ul>
                    <li>$\\mathbb{N}$ : Entiers naturels ($0, 1, 2...$).</li>
                    <li>$\\mathbb{Z}$ : Entiers relatifs ($-2, -1, 0, 1...$).</li>
                    <li>$\\mathbb{D}$ : Décimaux ($a/10^n$).</li>
                    <li>$\\mathbb{Q}$ : Rationnels ($p/q$).</li>
                    <li>$\\mathbb{R}$ : Réels (tous les nombres sur la droite graduée).</li>
                </ul>

                <h3>2. Valeur Absolue</h3>
                <p>La valeur absolue d'un réel $x$, notée $|x|$, est la distance de $x$ à 0.</p>
                <ul>
                    <li>Si $x \\ge 0$, $|x| = x$.</li>
                    <li>Si $x < 0$, $|x| = -x$.</li>
                    <li>Propriétés : $|xy| = |x||y|$ et $|x+y| \\le |x| + |y|$ (Inégalité triangulaire).</li>
                </ul>

                <h3>3. Puissances et Racines</h3>
                <p>Soit $a \\ge 0$. La racine carrée de $a$, notée $\\sqrt{a}$, est l'unique nombre réel positif dont le carré est $a$.</p>
                <p>$$ \\sqrt{a^2} = |a| $$</p>
                <p>Pour tout $n \\in \\mathbb{N}^*$, $a^n \\times a^p = a^{n+p}$.</p>
            `,
            summary: [
                "$\\mathbb{R}$ contient tous les nombres rationnels et irrationnels.",
                "$|x|$ représente une distance : $|x-a| = d(x,a)$.",
                "$\\sqrt{x^2} = |x|$ (Attention au signe !)."
            ],
            exercises: [
                {
                    id: 'exo-num-01',
                    question: "Simplifier l'expression $A = \\sqrt{(3- \\pi)^2}$.",
                    options: ["$3 - \\pi$", "$\\pi - 3$", "$3 + \\pi$", "Impossible"],
                    correctAnswer: 1,
                    explanation: "Comme $\\pi \\approx 3,14 > 3$, $3-\\pi$ est négatif. Donc $\\sqrt{(3-\\pi)^2} = |3-\\pi| = -(3-\\pi) = \\pi - 3$."
                }
            ]
        },
        {
            id: 'm2s-num-02',
            part: 'Activités Numériques',
            title: 'Intervalle et calcul approché',
            story: "En physique comme en ingénierie, la précision absolue est rare. On travaille souvent avec des encadrements et des approximations.",
            content: `
                <h3>1. Les Intervalles de $\\mathbb{R}$</h3>
                <p>Un intervalle est un sous-ensemble de $\\mathbb{R}$ défini par des inégalités.</p>
                <ul>
                    <li>Intervalle fermé borné $[a, b] = \\{x \\in \\mathbb{R} \\mid a \\le x \\le b\\}$.</li>
                    <li>Intervalle ouvert $]a, b[ = \\{x \\in \\mathbb{R} \\mid a < x < b\\}$.</li>
                    <li>Intervalle semi-ouvert $[a, +\\infty[ = \\{x \\in \\mathbb{R} \\mid x \\ge a\\}$.</li>
                </ul>
                <p>Le centre de $[a, b]$ est $c = \\frac{a+b}{2}$ et son rayon est $r = \\frac{b-a}{2}$.</p>

                <h3>2. Encadrement et Valeur Approchée</h3>
                <p>Soit $x$ un réel. $a$ est une valeur approchée de $x$ à $\\epsilon$ près si $|x - a| \\le \\epsilon$.</p>
                <p>Cela équivaut à : $a - \\epsilon \\le x \\le a + \\epsilon$.</p>
            `,
            summary: [
                "L'intersection $I \\cap J$ contient les éléments communs.",
                "La réunion $I \\cup J$ contient tous les éléments de I et de J.",
                "$|x - a| \\le r \\iff x \\in [a-r, a+r]$."
            ],
            exercises: [
                {
                    id: 'exo-num-02',
                    question: "Traduire $|x - 2| \\le 3$ sous forme d'intervalle.",
                    options: ["$[-1, 5]$", "$[2, 5]$", "$[-5, 1]$", "$] -\\infty, 5]$"],
                    correctAnswer: 0,
                    explanation: "$|x - 2| \\le 3 \\iff -3 \\le x - 2 \\le 3 \\iff -1 \\le x \\le 5$. Donc $x \\in [-1, 5]$."
                }
            ]
        },
        {
            id: 'm2s-num-03',
            part: 'Activités Numériques',
            title: "Systèmes d'équations et d'inéquations",
            story: "Résoudre un système, c'est trouver un consensus qui satisfait plusieurs contraintes simultanément.",
            content: `
                <h3>1. Systèmes Linéaires du 1er degré</h3>
                <p>Un système de deux équations à deux inconnues ($x, y$) s'écrit :</p>
                <p>$$ \\begin{cases} ax + by = c \\\\ a'x + b'y = c' \\end{cases} $$</p>
                <p><strong>Méthodes de résolution :</strong></p>
                <ul>
                    <li>Substitution : On exprime $y$ en fonction de $x$ dans (1) et on remplace dans (2).</li>
                    <li>Combinaison linéaire : On multiplie les équations pour éliminer une inconnue par addition.</li>
                    <li>Déterminant (Cramer) : Si $D = ab' - a'b \\neq 0$, le système a une solution unique.</li>
                </ul>

                <h3>2. Systèmes d'Inéquations</h3>
                <p>On résout souvent graphiquement en coloriant les demi-plans solutions. L'intersection des zones coloriées est la solution du système.</p>
            `,
            summary: [
                "Si $D = 0$, le système n'a pas de solution unique (soit aucune, soit une infinité).",
                "La méthode graphique est utile pour visualiser les contraintes (programmation linéaire)."
            ],
            exercises: [
                {
                    id: 'exo-num-03',
                    question: "Résoudre le système $\\begin{cases} x + y = 5 \\\\ 2x - y = 1 \\end{cases}$",
                    options: ["(3, 2)", "(2, 3)", "(1, 4)", "(0, 5)"],
                    correctAnswer: 1,
                    explanation: "Par addition : $(x+y) + (2x-y) = 5+1 \\Rightarrow 3x = 6 \\Rightarrow x = 2$. Alors $2 + y = 5 \\Rightarrow y = 3$."
                }
            ]
        },
        {
            id: 'm2s-num-04',
            part: 'Activités Numériques',
            title: 'Second degré',
            story: "Les paraboles sont partout : trajectoire d'un ballon, antennes satellites. Le second degré est la clé de ces courbes.",
            content: `
                <h3>1. Forme Canonique</h3>
                <p>Toute expression $P(x) = ax^2 + bx + c$ ($a \\neq 0$) peut s'écrire :</p>
                <p>$$ P(x) = a(x - \\alpha)^2 + \\beta $$</p>
                <p>Avec $\\alpha = -\\frac{b}{2a}$.</p>

                <h3>2. Résolution de $ax^2 + bx + c = 0$</h3>
                <p>On calcule le discriminant $\\Delta = b^2 - 4ac$.</p>
                <ul>
                    <li>Si $\\Delta < 0$ : Pas de solution réelle. $S = \\emptyset$.</li>
                    <li>Si $\\Delta = 0$ : Une solution double $x_0 = -\\frac{b}{2a}$.</li>
                    <li>Si $\\Delta > 0$ : Deux solutions distinctes $x_1 = \\frac{-b - \\sqrt{\\Delta}}{2a}$ et $x_2 = \\frac{-b + \\sqrt{\\Delta}}{2a}$.</li>
                </ul>
            `,
            summary: [
                "Le signe de $a$ donne l'orientation de la parabole (vers le haut si $a>0$).",
                "La somme des racines est $S = -b/a$ et le produit $P = c/a$."
            ],
            exercises: [
                {
                    id: 'exo-num-04',
                    question: "Résoudre $x^2 - 4x + 3 = 0$.",
                    options: ["{1, 3}", "{-1, -3}", "{2, 2}", "Impossible"],
                    correctAnswer: 0,
                    explanation: "$\\Delta = (-4)^2 - 4(1)(3) = 16 - 12 = 4$. $x_1 = (4-2)/2 = 1$, $x_2 = (4+2)/2 = 3$."
                }
            ]
        },
        {
            id: 'm2s-num-05',
            part: 'Activités Numériques',
            title: 'Polynômes et fractions rationnelles',
            story: "Les polynômes sont les briques élémentaires des fonctions complexes. Savoir les factoriser est essentiel.",
            content: `
                <h3>1. Polynômes</h3>
                <p>Un polynôme $P(x)$ est une somme de termes en $a_k x^k$. Le degré est la plus grande puissance de $x$.</p>
                <p><strong>Racine :</strong> $\\alpha$ est racine de $P$ si $P(\\alpha) = 0$.</p>
                <p><strong>Théorème :</strong> Si $\\alpha$ est racine, alors $P(x)$ est factorisable par $(x - \\alpha)$.</p>

                <h3>2. Fractions Rationnelles</h3>
                <p>Une fraction rationnelle est le quotient de deux polynômes : $F(x) = \\frac{P(x)}{Q(x)}$.</p>
                <p><strong>Domaine de définition :</strong> Il faut exclure les valeurs qui annulent le dénominateur ($Q(x) = 0$).</p>
                <p>Pour étudier le signe, on fait un tableau de signes avec chaque facteur.</p>
            `,
            summary: [
                "L'identification des coefficients permet de trouver des polynômes inconnus.",
                "Toujours déterminer le domaine de définition avant de simplifier une fraction."
            ],
            exercises: [
                {
                    id: 'exo-num-05',
                    question: "Quel est le domaine de définition de $f(x) = \\frac{1}{x^2 - 1}$ ?",
                    options: ["$\\mathbb{R}$", "$\\mathbb{R} \\setminus \\{1\\}$", "$\\mathbb{R} \\setminus \\{-1, 1\\}$", "$]1, +\\infty[$"],
                    correctAnswer: 2,
                    explanation: "Le dénominateur s'annule si $x^2 - 1 = 0$, soit $(x-1)(x+1)=0$, donc $x=1$ ou $x=-1$."
                }
            ]
        },
        {
            id: 'm2s-num-06',
            part: 'Activités Numériques',
            title: 'Fonctions',
            story: "Une fonction est une machine qui transforme un nombre en un autre. C'est le concept central de l'analyse.",
            content: `
                <h3>1. Généralités</h3>
                <p>Une fonction $f$ associe à tout réel $x$ de son domaine $D_f$ une unique image $f(x)$.</p>
                <ul>
                    <li>Image de $x$ : $y = f(x)$.</li>
                    <li>Antécédent(s) de $y$ : Les $x$ tels que $f(x) = y$.</li>
                </ul>

                <h3>2. Variations</h3>
                <p>$f$ est croissante sur $I$ si pour tout $a < b$, $f(a) \\le f(b)$ (l'ordre est conservé).</p>
                <p>$f$ est décroissante sur $I$ si pour tout $a < b$, $f(a) \\ge f(b)$ (l'ordre est inversé).</p>

                <h3>3. Parité</h3>
                <ul>
                    <li>Paire : $f(-x) = f(x)$ (Symétrie axe des ordonnées).</li>
                    <li>Impaire : $f(-x) = -f(x)$ (Symétrie centrale origine O).</li>
                </ul>
            `,
            summary: [
                "Variations : Croissante = 'Monte', Décroissante = 'Descend'.",
                "Le tableau de variation résume le comportement de la fonction."
            ],
            exercises: [
                {
                    id: 'exo-num-06',
                    question: "La fonction $f(x) = x^2$ est-elle paire ou impaire ?",
                    options: ["Paire", "Impaire", "Ni l'un ni l'autre", "Les deux"],
                    correctAnswer: 0,
                    explanation: "$f(-x) = (-x)^2 = x^2 = f(x)$. Elle est paire."
                }
            ]
        },

        // ==========================================
        // ACTIVITÉS GÉOMÉTRIQUES
        // ==========================================
        {
            id: 'm2s-geo-01',
            part: 'Activités Géométriques',
            title: 'Calcul vectoriel',
            story: "Les vecteurs permettent de déplacer la géométrie vers le calcul. Ils modélisent forces, vitesses et translations.",
            content: `
                <h3>1. Définition et Somme</h3>
                <p>Un vecteur $\\vec{AB}$ est défini par une direction, un sens et une norme (longueur).</p>
                <p><strong>Relation de Chasles :</strong> $\\vec{AB} + \\vec{BC} = \\vec{AC}$.</p>
                
                <h3>2. Colinéarité</h3>
                <p>Deux vecteurs $\\vec{u}$ et $\\vec{v}$ sont colinéaires s'il existe un réel $k$ tel que $\\vec{u} = k \\vec{v}$.</p>
                <p>Cela traduit le parallélisme des droites supports.</p>

                <h3>3. Base et Coordonnées</h3>
                <p>Dans une base $(\\vec{i}, \\vec{j})$, si $\\vec{u} = x\\vec{i} + y\\vec{j}$, alors le vecteur a pour coordonnées $(x, y)$.</p>
                <p>Condition de colinéarité : $xy' - x'y = 0$ (Déterminant nul).</p>
            `,
            summary: [
                "$\\vec{AB}$ a pour coordonnées $(x_B - x_A ; y_B - y_A)$.",
                "Milieu de $[AB]$ : $M(\\frac{x_A+x_B}{2} ; \\frac{y_A+y_B}{2})$."
            ],
            exercises: [
                {
                    id: 'exo-geo-01',
                    question: "Si $\\vec{u}(2; -3)$ et $\\vec{v}(-4; 6)$, sont-ils colinéaires ?",
                    options: ["Oui", "Non", "On ne peut pas savoir", "Uniquement si k=2"],
                    correctAnswer: 0,
                    explanation: "On voit que $\\vec{v} = -2 \\vec{u}$. Le déterminant vaut $2(6) - (-3)(-4) = 12 - 12 = 0$. Oui."
                }
            ]
        },
        {
            id: 'm2s-geo-02',
            part: 'Activités Géométriques',
            title: 'Barycentre',
            story: "Le barycentre est le point d'équilibre d'un système pondéré. Utile en mécanique pour trouver le centre de gravité.",
            content: `
                <h3>1. Barycentre de deux points</h3>
                <p>Soit $(A, \\alpha)$ et $(B, \\beta)$ deux points pondérés avec $\\alpha + \\beta \\neq 0$.</p>
                <p>Le barycentre $G$ est l'unique point tel que :</p>
                <p>$$ \\alpha \\vec{GA} + \\beta \\vec{GB} = \\vec{0} $$</p>
                <p>Ou encore : $\\vec{AG} = \\frac{\\beta}{\\alpha + \\beta} \\vec{AB}$.</p>

                <h3>2. Propriétés</h3>
                <p><strong>Alignement :</strong> $G$, $A$ et $B$ sont toujours alignés.</p>
                <p><strong>Homogénéité :</strong> On ne change pas le barycentre si on multiplie tous les poids par le même nombre $k \\neq 0$.</p>
            `,
            summary: [
                "Le barycentre se situe toujours sur la droite $(AB)$.",
                "Si $\\alpha = \\beta$, $G$ est l'isobarycentre (le milieu)."
            ],
            exercises: [
                {
                    id: 'exo-geo-02',
                    question: "Soit $G$ le barycentre de $(A, 1)$ et $(B, 3)$. Exprimer $\\vec{AG}$.",
                    options: ["$\\vec{AG} = 1/3 \\vec{AB}$", "$\\vec{AG} = 3/4 \\vec{AB}$", "$\\vec{AG} = 1/4 \\vec{AB}$", "$\\vec{AG} = 3 \\vec{AB}$"],
                    correctAnswer: 1,
                    explanation: "La formule est $\\vec{AG} = \\frac{\\beta}{\\alpha + \\beta} \\vec{AB} = \\frac{3}{1+3} \\vec{AB} = \\frac{3}{4} \\vec{AB}$."
                }
            ]
        },
        {
            id: 'm2s-geo-03',
            part: 'Activités Géométriques',
            title: 'Repérage',
            story: "Cartésius a eu l'idée géniale de quadriller le plan. Repérer un point, c'est lui donner une adresse unique.",
            content: `
                <h3>1. Repères du Plan</h3>
                <p>$(O, \\vec{i}, \\vec{j})$ est un repère.</p>
                <ul>
                    <li>Orthogonal : $\\vec{i} \\perp \\vec{j}$.</li>
                    <li>Orthonormé : $\\vec{i} \\perp \\vec{j}$ et $||\\vec{i}|| = ||\\vec{j}|| = 1$.</li>
                </ul>

                <h3>2. Distance et Milieu</h3>
                <p>Dans un repère orthonormé :</p>
                <p>$$ AB = \\sqrt{(x_B - x_A)^2 + (y_B - y_A)^2} $$</p>
            `,
            summary: [
                "Toujours vérifier si le repère est orthonormé avant de calculer une distance."
            ],
            exercises: [
                {
                    id: 'exo-geo-03',
                    question: "Calculer AB avec $A(1; 2)$ et $B(4; 6)$ dans un R.O.N.",
                    options: ["3", "4", "5", "7"],
                    correctAnswer: 2,
                    explanation: "$AB = \\sqrt{(4-1)^2 + (6-2)^2} = \\sqrt{3^2 + 4^2} = \\sqrt{9+16} = \\sqrt{25} = 5$."
                }
            ]
        },
        {
            id: 'm2s-geo-04',
            part: 'Activités Géométriques',
            title: 'Angles et trigonométrie',
            story: "Mesurer la terre (géo-métrie) nécessite de maîtriser les angles. Le cercle trigonométrique est l'horloge des mathématiciens.",
            content: `
                <h3>1. Le Cercle Trigonométrique</h3>
                <p>Cercle de rayon 1 orienté dans le sens direct (anti-horaire).</p>
                <p>L'unité de mesure est le <strong>Radian</strong>. $180^\\circ = \\pi \\text{ rds}$.</p>

                <h3>2. Cosinus et Sinus</h3>
                <p>Pour un point $M$ du cercle associé à l'angle $x$ :</p>
                <ul>
                    <li>$\\cos(x)$ est l'abscisse de $M$.</li>
                    <li>$\\sin(x)$ est l'ordonnée de $M$.</li>
                </ul>
                <p><strong>Relation fondamentale :</strong> $\\cos^2(x) + \\sin^2(x) = 1$.</p>
            `,
            summary: [
                "$\\cos(\\pi/3) = 1/2$, $\\sin(\\pi/3) = \\sqrt{3}/2$.",
                "$\\cos(\\pi/6) = \\sqrt{3}/2$, $\\sin(\\pi/6) = 1/2$."
            ],
            exercises: [
                {
                    id: 'exo-geo-04',
                    question: "Convertir 90° en radians.",
                    options: ["$\\pi$", "$\\pi/2$", "$\\pi/4$", "$2\\pi$"],
                    correctAnswer: 1,
                    explanation: "$180^\\circ = \\pi$, donc $90^\\circ = \\pi/2$."
                }
            ]
        },
        {
            id: 'm2s-geo-05',
            part: 'Activités Géométriques',
            title: 'Produit scalaire',
            story: "Comment multiplier deux vecteurs pour obtenir un nombre ? Le produit scalaire est l'outil pour tester l'orthogonalité.",
            content: `
                <h3>1. Définition Géométrique</h3>
                <p>$\\vec{u} \\cdot \\vec{v} = ||\\vec{u}|| \\times ||\\vec{v}|| \\times \\cos(\\vec{u}, \\vec{v})$.</p>
                
                <h3>2. Expression Analytique</h3>
                <p>Dans un R.O.N, si $\\vec{u}(x, y)$ et $\\vec{v}(x', y')$ :</p>
                <p>$$ \\vec{u} \\cdot \\vec{v} = xx' + yy' $$</p>

                <h3>3. Orthogonalité</h3>
                <p>$\\vec{u} \\perp \\vec{v} \\iff \\vec{u} \\cdot \\vec{v} = 0$.</p>
            `,
            summary: [
                "Le produit scalaire permet de calculer des angles et des longueurs (Théorème d'Al-Kashi).",
                "Carré scalaire : $\\vec{u}^2 = ||\\vec{u}||^2$."
            ],
            exercises: [
                {
                    id: 'exo-geo-05',
                    question: "Calculer $\\vec{u} \\cdot \\vec{v}$ avec $\\vec{u}(1; 2)$ et $\\vec{v}(3; -1)$.",
                    options: ["1", "5", "0", "-1"],
                    correctAnswer: 0,
                    explanation: "$1 \\times 3 + 2 \\times (-1) = 3 - 2 = 1$."
                }
            ]
        },
        {
            id: 'm2s-geo-06',
            part: 'Activités Géométriques',
            title: 'Transformations',
            story: "Bouger les figures sans les déformer (isométries) ou en les agrandissant (homothéties).",
            content: `
                <h3>1. Homothétie</h3>
                <p>Une homothétie $h$ de centre $\\Omega$ et de rapport $k$ transforme $M$ en $M'$ tel que :</p>
                <p>$$ \\vec{\\Omega M'} = k \\vec{\\Omega M} $$</p>
                <ul>
                    <li>Si $|k| > 1$ : Agrandissement.</li>
                    <li>Si $|k| < 1$ : Réduction.</li>
                </ul>

                <h3>2. Isométries</h3>
                <p>Les translations, rotations et symétries conservent les distances.</p>
            `,
            summary: [
                "L'image d'une droite par homothétie est une droite parallèle.",
                "Thalès est un cas particulier d'homothétie."
            ],
            exercises: [
                {
                    id: 'exo-geo-06',
                    question: "Si $h$ est une homothétie de rapport -2, l'image est-elle inversée ?",
                    options: ["Oui", "Non", "Seulement si k=0", "Impossible"],
                    correctAnswer: 0,
                    explanation: "Oui, un rapport négatif inverse le sens des vecteurs (retourne la figure de l'autre côté du centre)."
                }
            ]
        },
        {
            id: 'm2s-geo-07',
            part: 'Activités Géométriques',
            title: 'Espace',
            story: "Sortons du plan pour explorer la 3D. Droites, plans et solides.",
            content: `
                <h3>1. Positions relatives</h3>
                <ul>
                    <li>Deux droites dans l'espace peuvent être sécantes, parallèles ou <strong>non coplanaires</strong> (ni l'un ni l'autre).</li>
                    <li>Une droite est orthogonale à un plan si elle est orthogonale à deux droites sécantes de ce plan.</li>
                </ul>

                <h3>2. Solides Usuels</h3>
                <p>Cube, Tétraèdre, Pyramide, Prisme.</p>
                <p>Volume Pyramide = $\\frac{1}{3} \\times \\text{Aire Base} \\times \\text{Hauteur}$.</p>
            `,
            summary: [
                "Pour prouver l'orthogonalité droite/plan, cherchez deux droites sécantes."
            ],
            exercises: [
                {
                    id: 'exo-geo-07',
                    question: "Combien de faces a un tétraèdre ?",
                    options: ["3", "4", "5", "6"],
                    correctAnswer: 1,
                    explanation: "Tétra = 4. Il a 4 faces triangulaires."
                }
            ]
        }
    ]
};
