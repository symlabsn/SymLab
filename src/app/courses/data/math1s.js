export const math1sData = {
    id: 'math-1s',
    title: 'Mathématiques 1ère S',
    author: 'SymLab Team (Conforme Programme Sénégal)',
    description: 'Programme complet de Mathématiques 1ère S : Analyse, Algèbre et Géométrie.',
    chapters: [
        // ==========================================
        // PARTIE 1 : ACTIVITÉS NUMÉRIQUES
        // ==========================================
        {
            id: 'm1s-01',
            part: 'Activités Numériques',
            title: '1. Équations, Inéquations, Systèmes',
            story: "Résoudre des problèmes complexes impose souvent de jongler avec plusieurs inconnues. C'est l'art de la mise en équation.",
            content: `
                <h3>1. Polynômes du second degré</h3>
                <p>Pour $ax^2 + bx + c = 0$, on calcule le discriminant $\\Delta = b^2 - 4ac$.</p>
                <ul>
                    <li>Si $\\Delta > 0$ : Deux racines distinctes $x_{1,2} = \\frac{-b \\pm \\sqrt{\\Delta}}{2a}$.</li>
                    <li>Si $\\Delta = 0$ : Une racine double $x_0 = \\frac{-b}{2a}$.</li>
                </ul>

                <h3>2. Équations bicarrées</h3>
                <p>De la forme $ax^4 + bx^2 + c = 0$. On pose $X = x^2$ (avec $X \\ge 0$) pour se ramener au second degré.</p>

                <h3>3. Systèmes linéaires (3 inconnues)</h3>
                <p>Méthode du pivot de Gauss pour résoudre des systèmes $3 \\times 3$.</p>
                <p>$$ \\begin{cases} x + y + z = 6 \\\\ 2x - y + z = 3 \\\\ x - y + 2z = 5 \\end{cases} $$</p>
            `,
            summary: [
                "Signe du trinôme : Du signe de a à l'extérieur des racines.",
                "Somme et Produit : $S = -b/a$ et $P = c/a$."
            ],
            exercises: [
                {
                    id: 'exo-m1s-01',
                    question: "Si $\\Delta < 0$, le trinôme $ax^2+bx+c$ est...",
                    options: ["Toujours positif", "Toujours négatif", "Du signe de a", "Du signe de -a"],
                    correctAnswer: 2,
                    explanation: "Si le discriminant est négatif, la parabole ne coupe pas l'axe des abscisses, elle reste tout entière du côté du signe de a."
                }
            ]
        },
        {
            id: 'm1s-02',
            part: 'Activités Numériques',
            title: '2. Généralités sur les Applications',
            story: "Une fonction est une machine qui transforme des nombres. Mais comment qualifier cette transformation ?",
            content: `
                <h3>1. Définitions</h3>
                <p>Une application $f: E \\to F$ associe à tout élément de $E$ un unique élément de $F$.</p>

                <h3>2. Injection, Surjection, Bijection</h3>
                <ul>
                    <li><strong>Injection :</strong> Tout élément de $F$ a au plus un antécédent. ($f(x)=f(y) \\implies x=y$).</li>
                    <li><strong>Surjection :</strong> Tout élément de $F$ a au moins un antécédent. ($f(E) = F$).</li>
                    <li><strong>Bijection :</strong> Tout élément de $F$ a un unique antécédent. (A la fois injective et surjective).</li>
                </ul>

                <h3>3. Composition</h3>
                <p>$g \\circ f$ existe si l'ensemble d'arrivée de $f$ est inclus dans l'ensemble de départ de $g$.</p>
            `,
            summary: [
                "Bijection $\\iff$ existence de la réciproque $f^{-1}$.",
                "Composée : $(g \\circ f)(x) = g(f(x))$."
            ],
            exercises: [
                {
                    id: 'exo-m1s-02',
                    question: "La fonction carré $f(x)=x^2$ de $\\mathbb{R}$ dans $\\mathbb{R}$ est-elle injective ?",
                    options: ["Oui", "Non", "Seulement sur R+", "Impossible à dire"],
                    correctAnswer: 1,
                    explanation: "Non, car $f(-2) = f(2) = 4$. Deux antécédents différents pour une même image."
                }
            ]
        },
        {
            id: 'm1s-03',
            part: 'Activités Numériques',
            title: '3. Dénombrement',
            story: "Combien de façons de choisir un capitaine et un suppléant ? Ou de former une équipe de foot ?",
            content: `
                <h3>1. Principe multiplicatif</h3>
                <p>Si une épreuve a $n$ issues et une autre $p$ issues, le couple a $n \\times p$ issues.</p>

                <h3>2. Arrangements et Permutations</h3>
                <p>Arrangement $A_n^p$ : Choix ordonné de $p$ éléments parmi $n$.</p>
                <p>$$ A_n^p = \\frac{n!}{(n-p)!} $$</p>
                <p>Permutation $P_n = n!$ (Ordre de $n$ éléments).</p>

                <h3>3. Combinaisons</h3>
                <p>Choix non ordonné (simultané). Notation $C_n^p$.</p>
                <p>$$ C_n^p = \\binom{n}{p} = \\frac{A_n^p}{p!} = \\frac{n!}{p!(n-p)!} $$</p>
            `,
            summary: [
                "Ordre important $\\to$ Arrangement.",
                "Ordre non important (équipe, main de cartes) $\\to$ Combinaison."
            ],
            exercises: [
                {
                    id: 'exo-m1s-03',
                    question: "Combien de tiercés possibles dans l'ordre avec 10 chevaux ?",
                    options: ["10", "120", "720", "1000"],
                    correctAnswer: 2,
                    explanation: "L'ordre compte. $A_{10}^3 = 10 \\times 9 \\times 8 = 720$."
                }
            ]
        },
        {
            id: 'm1s-04',
            part: 'Activités Numériques',
            title: '4. Limites et Continuité',
            story: "Que se passe-t-il quand x s'approche de l'infini ou d'une valeur interdite ? On frôle l'interdit.",
            content: `
                <h3>1. Limites usuelles</h3>
                <p>$\\lim_{x \\to +\\infty} x^2 = +\\infty$, $\\lim_{x \\to +\\infty} \\frac{1}{x} = 0$.</p>
                <p>Formes indéterminées : $\\infty - \\infty$, $0 \\times \\infty$, $\\frac{\\infty}{\\infty}$, $\\frac{0}{0}$.</p>

                <h3>2. Technques de levée d'indétermination</h3>
                <ul>
                    <li>Factorisation par le terme de plus haut degré.</li>
                    <li>Expression conjuguée (racines).</li>
                    <li>Taux d'accroissement (sinus cardinal).</li>
                </ul>

                <h3>3. Continuité</h3>
                <p>$f$ est continue en $a$ si $\\lim_{x \\to a} f(x) = f(a)$.</p>
                <p>Théorème des Valeurs Intermédiaires (TVI).</p>
            `,
            summary: [
                "Polynôme en $\\infty$ : Limite de son terme de plus haut degré.",
                "Fonction rationnelle en $\\infty$ : Limite du quotient des termes de plus haut degré."
            ],
            exercises: [
                {
                    id: 'exo-m1s-04',
                    question: "Quelle est la limite de $\\frac{2x^2+1}{x^2}$ en $+\\infty$ ?",
                    options: ["0", "1", "2", "Infini"],
                    correctAnswer: 2,
                    explanation: "On garde les termes de plus haut degré : $\\frac{2x^2}{x^2} = 2$."
                }
            ]
        },
        {
            id: 'm1s-05',
            part: 'Activités Numériques',
            title: '5. Dérivation',
            story: "La dérivée mesure la vitesse de variation instantanée. C'est l'outil roi pour étudier les fonctions.",
            content: `
                <h3>1. Nombre dérivé</h3>
                <p>$$ f'(a) = \\lim_{h \\to 0} \\frac{f(a+h) - f(a)}{h} $$</p>
                <p>C'est la pente de la tangente en $a$.</p>

                <h3>2. Formules usuelles</h3>
                <ul>
                    <li>$(x^n)' = n x^{n-1}$</li>
                    <li>$(\\frac{1}{x})' = -\\frac{1}{x^2}$</li>
                    <li>$(\\sqrt{x})' = \\frac{1}{2\\sqrt{x}}$</li>
                </ul>

                <h3>3. Opérations</h3>
                <p>$(uv)' = u'v + uv'$</p>
                <p>$(\\frac{u}{v})' = \\frac{u'v - uv'}{v^2}$</p>
                <p>$(v \\circ u)' = u' \\times (v' \\circ u)$</p>
            `,
            summary: [
                "Dérivée > 0 $\\implies$ Fonction croissante.",
                "Tangente : $y = f'(a)(x-a) + f(a)$."
            ],
            exercises: [
                {
                    id: 'exo-m1s-05',
                    question: "Quelle est la dérivée de $f(x) = x^3 + 2x$ ?",
                    options: ["$3x^2 + 2$", "$3x + 2$", "$x^2 + 2$", "$3x^2$"],
                    correctAnswer: 0,
                    explanation: "Dérivée de $x^n$ est $nx^{n-1}$. Donc $(x^3)' = 3x^2$ et $(2x)' = 2$."
                }
            ]
        },
        {
            id: 'm1s-06',
            part: 'Activités Numériques',
            title: '6. Étude de fonctions',
            story: "Mettre tout ensemble : domaine, limites, dérivée, tableau de variation, pour tracer la courbe parfaite.",
            content: `
                <h3>1. Plan d'étude</h3>
                <ol>
                    <li>Domaine de définition $D_f$.</li>
                    <li>Limites aux bornes et asymptotes (Horizontale, Verticale, Oblique).</li>
                    <li>Calcul de la dérivée $f'(x)$ et étude de son signe.</li>
                    <li>Tableau de variations.</li>
                    <li>Points particuliers et tracé.</li>
                </ol>

                <h3>2. Centre et Axe de symétrie</h3>
                <p>Axe $x=a$ : $f(2a-x) = f(x)$.</p>
                <p>Centre $\\Omega(a,b)$ : $f(2a-x) + f(x) = 2b$.</p>
            `,
            summary: [
                "Asymptote oblique $y=ax+b$ si $\\lim (f(x) - (ax+b)) = 0$.",
                "Point d'inflexion : Là où la dérivée seconde s'annule en changeant de signe."
            ],
            exercises: [
                {
                    id: 'exo-m1s-06',
                    question: "Si $f'(x) < 0$ sur un intervalle, alors f est...",
                    options: ["Croissante", "Décroissante", "Constante", "Nulle"],
                    correctAnswer: 1,
                    explanation: "Une dérivée négative indique une pente descendante, donc une fonction décroissante."
                }
            ]
        },
        {
            id: 'm1s-07',
            part: 'Activités Numériques',
            title: '7. Suites Numériques',
            story: "Une suite est une liste infinie de nombres ordonnés. Progression arithmétique ou géométrique ?",
            content: `
                <h3>1. Modes de génération</h3>
                <p>Formule explicite : $U_n = f(n)$.</p>
                <p>Récurrence : $U_{n+1} = f(U_n)$.</p>

                <h3>2. Suites Arithmétiques ($+r$)</h3>
                <p>$U_{n+1} = U_n + r$. Terme général : $U_n = U_0 + nr$.</p>
                <p>Somme : $S = \\frac{nombre\\ de\\ termes \\times (U_{premier} + U_{dernier})}{2}$.</p>

                <h3>3. Suites Géométriques ($\\times q$)</h3>
                <p>$U_{n+1} = q U_n$. Terme général : $U_n = U_0 q^n$.</p>
                <p>Somme : $S = U_{premier} \\times \\frac{1-q^N}{1-q}$.</p>
            `,
            summary: [
                "Suite monotone : $U_{n+1} - U_n$ garde un signe constant.",
                "Convergence : Une suite croissante et majorée converge."
            ],
            exercises: [
                {
                    id: 'exo-m1s-07',
                    question: "Si $U_0 = 2$ et $U_{n+1} = 3 U_n$, que vaut $U_3$ ?",
                    options: ["6", "18", "54", "162"],
                    correctAnswer: 2,
                    explanation: "C'est une suite géométrique de raison 3. $2 \\to 6 \\to 18 \\to 54$."
                }
            ]
        },
        {
            id: 'm1s-08',
            part: 'Activités Numériques',
            title: '8. Statistiques',
            story: "Analyser des données pour en tirer du sens. Moyenne, écart-type, médiane...",
            content: `
                <h3>1. Paramètres de position</h3>
                <ul>
                    <li><strong>Moyenne $\\bar{x}$ :</strong> Centre de gravité de la série.</li>
                    <li><strong>Médiane $Me$ :</strong> Valeur qui partage la série en deux effectifs égaux.</li>
                    <li><strong>Mode :</strong> Valeur la plus fréquente.</li>
                </ul>

                <h3>2. Paramètres de dispersion</h3>
                <p>Variance $V$ : Moyenne des carrés des écarts à la moyenne.</p>
                <p>Écart-type $\\sigma = \\sqrt{V}$. Plus $\\sigma$ est grand, plus la série est dispersée.</p>
            `,
            summary: [
                "Diagramme en boîte (Moustache) pour visualiser quartiles et médiane.",
                "Fréquence cumulée croissante."
            ],
            exercises: [
                {
                    id: 'exo-m1s-08',
                    question: "Si la variance est de 16, quel est l'écart-type ?",
                    options: ["4", "8", "16", "256"],
                    correctAnswer: 0,
                    explanation: "L'écart-type est la racine carrée de la variance : $\\sqrt{16} = 4$."
                }
            ]
        },

        // ==========================================
        // PARTIE 2 : ACTIVITÉS GÉOMÉTRIQUES
        // ==========================================
        {
            id: 'm1s-09',
            part: 'Activités Géométriques',
            title: '9. Barycentre',
            story: "Le point d'équilibre. Où placer le pivot pour que la balançoire tienne avec un adulte et un enfant ?",
            content: `
                <h3>1. Barycentre de 2 points</h3>
                <p>G est barycentre de $(A, \\alpha)$ et $(B, \\beta)$ si :</p>
                <p>$$ \\alpha \\vec{GA} + \\beta \\vec{GB} = \\vec{0} $$</p>
                <p>Existe si $\\alpha + \\beta \\neq 0$.</p>
                <p>Relation vectorielle : $\\vec{AG} = \\frac{\\beta}{\\alpha + \\beta} \\vec{AB}$.</p>

                <h3>2. Associativité</h3>
                <p>On peut remplacer plusieurs points par leur barycentre partiel (affecté de la somme des poids).</p>
            `,
            summary: [
                "Isobaycentre : Poids égaux (Milieu pour 2 pts, Centre de gravité pour 3).",
                "L'alignement est la clé."
            ],
            exercises: [
                {
                    id: 'exo-m1s-09',
                    question: "Si G est le barycentre de (A, 1) et (B, 3), où se situe G ?",
                    options: ["Au milieu de [AB]", "Plus près de A", "Plus près de B", "Sur A"],
                    correctAnswer: 2,
                    explanation: "G est attiré par le point qui a le plus grand poids. Ici B (3) > A (1)."
                }
            ]
        },
        {
            id: 'm1s-10',
            part: 'Activités Géométriques',
            title: '10. Angles orientés',
            story: "En géométrie aussi, le sens compte. Tourner à gauche ou à droite, ce n'est pas pareil.",
            content: `
                <h3>1. Mesure principale</h3>
                <p>L'angle orienté $(\\vec{u}, \\vec{v})$ est défini modulo $2\\pi$.</p>
                <p>La mesure principale $\\alpha$ est unique dans $]-\\pi ; \\pi]$.</p>

                <h3>2. Relation de Chasles</h3>
                <p>$$ (\\vec{u}, \\vec{w}) = (\\vec{u}, \\vec{v}) + (\\vec{v}, \\vec{w}) \\quad [2\\pi] $$</p>

                <h3>3. Trigonométrie</h3>
                <p>Cercle trigonométrique. $\\cos^2 x + \\sin^2 x = 1$.</p>
            `,
            summary: [
                "Sens direct (trigo) : Inverse des aiguilles d'une montre (+).",
                "Sens indirect (horaire) : (-)."
            ],
            exercises: [
                {
                    id: 'exo-m1s-10',
                    question: "Quelle est la mesure principale de $13\\pi / 4$ ?",
                    options: ["$\\pi/4$", "$-3\\pi/4$", "$13\\pi/4$", "$5\\pi/4$"],
                    correctAnswer: 1,
                    explanation: "$13\\pi/4 = 3.25\\pi$. On retire $4\\pi$. $13\\pi/4 - 16\\pi/4 = -3\\pi/4$. C'est bien dans $]-\\pi, \\pi]$."
                }
            ]
        },
        {
            id: 'm1s-11',
            part: 'Activités Géométriques',
            title: '11. Trigonométrie (Formules)',
            story: "L'art de transformer les angles. Formules d'addition et de duplication.",
            content: `
                <h3>1. Formules d'addition</h3>
                <p>$\\cos(a+b) = \\cos a \\cos b - \\sin a \\sin b$</p>
                <p>$\\sin(a+b) = \\sin a \\cos b + \\cos a \\sin b$</p>

                <h3>2. Formules de duplication</h3>
                <p>$\\cos(2a) = \\cos^2 a - \\sin^2 a = 2\\cos^2 a - 1$</p>
                <p>$\\sin(2a) = 2 \\sin a \\cos a$</p>

                <h3>3. Équations trigo</h3>
                <p>$\\cos x = \\cos a \\iff x = a + 2k\\pi$ ou $x = -a + 2k\\pi$.</p>
            `,
            summary: [
                "Retenir 'Coco-Sisi' (Cos(a+b)) et 'Sicoco-Si' (Sin(a+b)).",
                "Linéarisation : Transformer un produit en somme."
            ],
            exercises: [
                {
                    id: 'exo-m1s-11',
                    question: "Que vaut $\\sin(2x)$ ?",
                    options: ["$2\\sin x$", "$\\sin x \\cos x$", "$2\\sin x \\cos x$", "$\\cos 2x$"],
                    correctAnswer: 2,
                    explanation: "Formule de duplication fondamentale."
                }
            ]
        },
        {
            id: 'm1s-12',
            part: 'Activités Géométriques',
            title: '12. Produit Scalaire',
            story: "Multiplier deux vecteurs pour obtenir un nombre. Un outil puissant pour l'orthogonalité.",
            content: `
                <h3>1. Définitions</h3>
                <p>$\\vec{u} \\cdot \\vec{v} = ||\\vec{u}|| \\times ||\\vec{v}|| \\times \\cos(\\vec{u}, \\vec{v})$.</p>
                <p>Dans un repère orthonormé : $xx' + yy'$.</p>

                <h3>2. Propriétés</h3>
                <p>Si $\\vec{u} \\cdot \\vec{v} = 0$, alors les vecteurs sont orthogonaux.</p>
                <p>Théorème d'Al Kashi (Pythagore généralisé) : $a^2 = b^2 + c^2 - 2bc \\cos \\hat{A}$.</p>
            `,
            summary: [
                "Permet de calculer des longueurs et des angles.",
                "Projection orthogonale : $\\vec{u} \\cdot \\vec{v} = \\overline{AH} \\times \\overline{AB}$."
            ],
            exercises: [
                {
                    id: 'exo-m1s-12',
                    question: "Dans un repère orthonormé, produit scalaire de $\\vec{u}(1, 2)$ et $\\vec{v}(-2, 1)$ ?",
                    options: ["0", "4", "-4", "1"],
                    correctAnswer: 0,
                    explanation: "$1\\times(-2) + 2\\times1 = -2 + 2 = 0$. Ils sont orthogonaux."
                }
            ]
        },
        {
            id: 'm1s-13',
            part: 'Activités Géométriques',
            title: '13. Transformations',
            story: "Déformer le plan tout en gardant une structure. Homothétie et Rotation.",
            content: `
                <h3>1. Homothétie $h(\\Omega, k)$</h3>
                <p>$M' = h(M) \\iff \\vec{\\Omega M'} = k \\vec{\\Omega M}$.</p>
                <p>Conserve les angles, multiplie les distances par $|k|$ et les aires par $k^2$.</p>

                <h3>2. Rotation $r(\\Omega, \\theta)$</h3>
                <p>Tourner autour d'un point. Conserve les distances (isométrie) et les angles orientés.</p>
            `,
            summary: [
                "Si $k=1$, identité. Si $k=-1$, symétrie centrale.",
                "Ces transformations conservent l'alignement."
            ],
            exercises: [
                {
                    id: 'exo-m1s-13',
                    question: "Par une homothétie de rapport 3, une aire de 2 $m^2$ devient...",
                    options: ["6 $m^2$", "9 $m^2$", "18 $m^2$", "2 $m^2$"],
                    correctAnswer: 2,
                    explanation: "Les aires sont multipliées par $k^2 = 3^2 = 9$. Donc $2 \\times 9 = 18$."
                }
            ]
        },
        {
            id: 'm1s-14',
            part: 'Activités Géométriques',
            title: '14. Espace (Droites et Plans)',
            story: "Sortons du plan. La géométrie en 3D demande de visualiser l'invisible.",
            content: `
                <h3>1. Positions relatives</h3>
                <ul>
                    <li>Droites : Coplanaires (sécantes/parallèles) ou non coplanaires.</li>
                    <li>Droite et Plan : Sécants ou parallèles.</li>
                    <li>Plans : Sécants (selon une droite) ou parallèles.</li>
                </ul>

                <h3>2. Orthogonalité</h3>
                <p>Une droite est orthogonale à un plan si elle est orthogonale à deux droites sécantes de ce plan.</p>
            `,
            summary: [
                "Théorème du toit : Intersection de deux plans passant par deux droites parallèles.",
            ],
            exercises: [
                {
                    id: 'exo-m1s-14',
                    question: "Si une droite est perpendiculaire à un plan, elle est orthogonale à...",
                    options: ["Une seule droite du plan", "Deux droites du plan", "Toutes les droites du plan", "Aucune"],
                    correctAnswer: 2,
                    explanation: "C'est la définition fondamentale. Elle est orthogonale à toutes les droites contenues dans ce plan."
                }
            ]
        },
        {
            id: 'm1s-15',
            part: 'Activités Géométriques',
            title: '15. Vecteurs de l\'Espace',
            story: "L'outil vectoriel s'étend naturellement à la 3ème dimension.",
            content: `
                <h3>1. Base et Repère</h3>
                <p>Base $(\\vec{i}, \\vec{j}, \\vec{k})$. Repère $(O; \\vec{i}, \\vec{j}, \\vec{k})$.</p>
                <p>Coordonnées $(x, y, z)$.</p>

                <h3>2. Coplanarité</h3>
                <p>Trois vecteurs $\\vec{u}, \\vec{v}, \\vec{w}$ sont coplanaires si l'un est combinaison linéaire des deux autres.</p>
                <p>$\\vec{w} = a\\vec{u} + b\\vec{v}$ (Déterminant nul).</p>
            `,
            summary: [
                "Produit scalaire dans l'espace : $xx' + yy' + zz'$.",
                "Équation cartésienne de plan : $ax + by + cz + d = 0$."
            ],
            exercises: [
                {
                    id: 'exo-m1s-15',
                    question: "Quelle est la norme du vecteur $\\vec{u}(1, 2, 2)$ ?",
                    options: ["3", "5", "9", "Racine de 5"],
                    correctAnswer: 0,
                    explanation: "$||\\vec{u}|| = \\sqrt{1^2 + 2^2 + 2^2} = \\sqrt{1+4+4} = \\sqrt{9} = 3$."
                }
            ]
        }
    ]
};
