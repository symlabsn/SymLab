export const mathTsData = {
    id: 'math-ts',
    title: 'Mathématiques Terminale S',
    chapters: [
        // ==========================================
        // PARTIE 1 : ANALYSE
        // ==========================================
        {
            id: 'ana-ts-01',
            part: 'Partie 1 : Analyse',
            title: '1. Limites et Continuité',
            story: "Imaginez que vous vous approchez d'un ravin sans jamais tomber. C'est ça la limite. La continuité, c'est pouvoir tracer sa route (ou sa courbe) sans lever le crayon. Ces concepts sont la base de tout le calcul infinitésimal.",
            content: `
                <h3>1. Limites</h3>
                <p>On étudie le comportement d'une fonction quand $x$ tend vers l'infini ou vers une valeur interdite.</p>
                <ul>
                    <li>Formes indéterminées : $\\frac{0}{0}, \\frac{\\infty}{\\infty}, \\infty - \\infty, 0 \\times \\infty$.</li>
                    <li>Règle de l'Hôpital ou factorisation pour lever l'indétermination.</li>
                </ul>
                <h3>2. Continuité</h3>
                <p>Une fonction $f$ est continue en $x_0$ si $\\lim_{x \\to x_0} f(x) = f(x_0)$.</p>
                <h3>3. Théorème des Valeurs Intermédiaires (TVI)</h3>
                <p>Si $f$ est continue sur $[a, b]$, elle prend toutes les valeurs comprises entre $f(a)$ et $f(b)$.</p>
            `,
            summary: [
                "Une fonction peut avoir une limite sans être définie au point.",
                "TVI : Indispensable pour prouver l'existence de solutions d'équations $f(x)=k$.",
                "Asymptotes : Droites vers lesquelles la courbe se rapproche indéfiniment."
            ],
            exercises: [
                {
                    id: 'ex-lim-1',
                    question: "Quelle est la limite de $\\frac{1}{x}$ quand $x \\to +\\infty$ ?",
                    options: ["0", "1", "$+\\infty$", "$-\\infty$"],
                    correctAnswer: 0,
                    explanation: "Si on divise 1 par un nombre immense, le résultat est proche de 0."
                }
            ]
        },
        {
            id: 'ana-ts-02',
            part: 'Partie 1 : Analyse',
            title: '2. Dérivation et Primitives',
            story: "La dérivée, c'est la vitesse instantanée. La primitive, c'est le chemin parcouru. Elles sont inverses l'une de l'autre, comme monter et descendre un escalier.",
            content: `
                <h3>1. Dérivation</h3>
                <p>Le nombre dérivé $f'(x)$ correspond à la pente de la tangente en ce point.</p>
                <ul>
                    <li>$(u^n)' = n u' u^{n-1}$</li>
                    <li>$(uv)' = u'v + uv'$</li>
                    <li>$(\\frac{u}{v})' = \\frac{u'v - uv'}{v^2}$</li>
                </ul>
                <h3>2. Primitives</h3>
                <p>$F$ est une primitive de $f$ si $F' = f$. Toute fonction continue admet des primitives définies à une constante près.</p>
            `,
            summary: [
                "Signe de la dérivée $\\iff$ Variations de la fonction.",
                "Primitive de $x^n$ est $\\frac{x^{n+1}}{n+1}$.",
                "La dérivée s'annule souvent aux extremums locaux."
            ],
            exercises: [
                {
                    id: 'ex-der-1',
                    question: "Quelle est la dérivée de $f(x) = x^3$ ?",
                    options: ["$3x$", "$3x^2$", "$x^2$", "$3x^3$"],
                    correctAnswer: 1,
                    explanation: "On utilise la formule $(x^n)' = n x^{n-1}$ avec $n=3$."
                }
            ]
        },
        {
            id: 'ana-ts-03',
            part: 'Partie 1 : Analyse',
            title: '3. Fonction Logarithme Népérien',
            story: "Le logarithme, c'est l'outil qui transforme les multiplications en additions. Inventé pour simplifier les calculs des astronomes, il est aujourd'hui au cœur de l'étude des phénomènes de croissance lente.",
            content: `
                <h3>1. Définition</h3>
                <p>La fonction $\\ln(x)$ est définie sur $]0, +\\infty[$. Elle est la primitive de $1/x$ qui s'annule en 1.</p>
                <h3>2. Propriétés algébriques</h3>
                <ul>
                    <li>$\\ln(ab) = \\ln(a) + \\ln(b)$</li>
                    <li>$\\ln(\\frac{a}{b}) = \\ln(a) - \\ln(b)$</li>
                    <li>$\\ln(a^n) = n\\ln(a)$</li>
                </ul>
                <h3>3. Limites usuelles</h3>
                <p>$\\lim_{x \\to 0^+} \\ln(x) = -\\infty$ et $\\lim_{x \\to +\\infty} \\ln(x) = +\\infty$.</p>
            `,
            summary: [
                "$\\ln(1) = 0$ et $\\ln(e) = 1$.",
                "Croissance très lente à l'infini (plus lente que n'importe quelle puissance).",
                "Domaine de définition : toujours vérifier que l'argument est strictement positif."
            ],
            exercises: [
                {
                    id: 'ex-ln-1',
                    question: "Que vaut $\\ln(e^3)$ ?",
                    options: ["e", "3", "1", "3e"],
                    correctAnswer: 1,
                    explanation: "$\\ln(e^x) = x$, donc $\\ln(e^3) = 3$."
                }
            ]
        },
        {
            id: 'ana-ts-04',
            part: 'Partie 1 : Analyse',
            title: '4. Fonction Exponentielle',
            story: "L'exponentielle est la seule fonction qui est égale à sa propre dérivée (à un coefficient près). C'est le modèle de la croissance explosive : bactéries, viralité, intérêts composés.",
            content: `
                <h3>1. Définition</h3>
                <p>La fonction $\\exp(x)$ ou $e^x$ est la réciproque de $\\ln(x)$. Elle est définie sur $\\mathbb{R}$ et strictement positive.</p>
                <h3>2. Propriétés</h3>
                <ul>
                    <li>$e^{a+b} = e^a \\times e^b$</li>
                    <li>$(e^u)' = u' e^u$</li>
                    <li>$e^x > 0$ pour tout $x$.</li>
                </ul>
                <h3>3. Limites</h3>
                <p>$\\lim_{x \\to -\\infty} e^x = 0$ et $\\lim_{x \\to +\\infty} e^x = +\\infty$.</p>
            `,
            summary: [
                "$e^0 = 1$.",
                "La fonction croît plus vite que n'importe quel polynôme en $+\\infty$.",
                "Relation fondamentale : $y = \\ln(x) \\iff x = e^y$."
            ],
            exercises: [
                {
                    id: 'ex-exp-1',
                    question: "Quelle est la dérivée de $e^{2x}$ ?",
                    options: ["$e^{2x}$", "$2e^{2x}$", "$2xe^{2x}$", "$e^x$"],
                    correctAnswer: 1,
                    explanation: "On utilise $(e^u)' = u'e^u$ avec $u=2x$, donc $u'=2$."
                }
            ]
        },
        {
            id: 'ana-ts-05',
            part: 'Partie 1 : Analyse',
            title: '5. Suites Numériques',
            story: "Une suite est une liste infinie de nombres ordonnés. On cherche souvent à savoir si elle se rapproche d'une valeur (limite) ou si elle part vers l'infini.",
            content: `
                <h3>1. Raisonnement par Récurrence</h3>
                <p>Pour prouver une propriété $P_n$ pour tout $n$ : Initialisation + Hérédité.</p>
                <h3>2. Limites de suites</h3>
                <p>Théorèmes de convergence (gendarmes, suite monotone bornée).</p>
                <h3>3. Suites géométriques</h3>
                <p>$u_n = u_0 \\times q^n$. Converge vers 0 si $|q| < 1$.</p>
            `,
            summary: [
                "Toute suite croissante et majorée converge.",
                "Raisonnement par récurrence est l'outil clé.",
                "Attention à ne pas confondre suite et fonction."
            ],
            exercises: [
                {
                    id: 'ex-suite-1',
                    question: "Si $(u_n)$ est géométrique de raison $q=0.5$, quelle est sa limite ?",
                    options: ["0", "1", "$+\\infty$", "Indéterminé"],
                    correctAnswer: 0,
                    explanation: "Car $|0.5| < 1$, la suite tend vers 0."
                }
            ]
        },
        {
            id: 'ana-ts-06',
            part: 'Partie 1 : Analyse',
            title: '6. Calcul Intégral',
            story: "L'intégrale mesure l'aire sous la courbe. C'est la somme continue d'une infinité de petites quantités. Le lien avec les primitives est le Théorème Fondamental de l'Analyse.",
            content: `
                <h3>1. Définition</h3>
                <p>$\\int_a^b f(x) dx = [F(x)]_a^b = F(b) - F(a)$ où $F$ est une primitive de $f$.</p>
                <h3>2. Propriétés</h3>
                <ul>
                    <li>Linéarité : $\\int (af + bg) = a\\int f + b\\int g$</li>
                    <li>Positivité : Si $f \\geq 0$, alors $\\int f \\geq 0$</li>
                    <li>Relation de Chasles : $\\int_a^c + \\int_c^b = \\int_a^b$</li>
                </ul>
                <h3>3. Intégration par Parties (IPP)</h3>
                <p>$\\int u'v = [uv] - \\int uv'$.</p>
            `,
            summary: [
                "L'intégrale correspond algébriquement à une aire (signée).",
                "Toujours vérifier les bornes d'intégration.",
                "La valeur moyenne est $\\frac{1}{b-a}\\int_a^b f(x)dx$."
            ],
            exercises: [
                {
                    id: 'ex-int-1',
                    question: "Calculer $\\int_0^1 2x dx$.",
                    options: ["0", "1", "2", "0.5"],
                    correctAnswer: 1,
                    explanation: "Primitive de $2x$ est $x^2$. Donc $[x^2]_0^1 = 1^2 - 0^2 = 1$."
                }
            ]
        },
        {
            id: 'ana-ts-07',
            part: 'Partie 1 : Analyse',
            title: '7. Équations Différentielles',
            story: "Une équation différentielle lie une fonction à sa vitesse de variation (sa dérivée). C'est le langage universel de la physique pour décrire l'évolution des systèmes.",
            content: `
                <h3>1. Équation linéaire du 1er ordre</h3>
                <p>$y' = ay + b$. Solutions de la forme $y(x) = Ke^{ax} - \\frac{b}{a}$.</p>
                <h3>2. Équation linéaire du 2nd ordre</h3>
                <p>$ay'' + by' + cy = 0$. On résout l'équation caractéristique $ar^2 + br + c = 0$.</p>
            `,
            summary: [
                "Les solutions dépendent de constantes déterminées par les conditions initiales.",
                "C'est la modélisation mathématique du déterminisme.",
                "Résoudre $y'=y$ donne $y=Ke^x$."
            ],
            exercises: [
                {
                    id: 'ex-eqdiff-1',
                    question: "Solution générale de $y' = 2y$ ?",
                    options: ["$y = 2x + C$", "$y = Ce^{2x}$", "$y = e^{2x} + C$", "$y = C e^x$"],
                    correctAnswer: 1,
                    explanation: "C'est une équation $y'=ay$ avec $a=2$."
                }
            ]
        },
        {
            id: 'ana-ts-08',
            part: 'Partie 1 : Analyse',
            title: '8. Étude de Fonction Complète',
            story: "C'est la synthèse de l'analyse. On combine tout : domaine, limites, dérivée, variations, asymptotes, position relative... pour dresser le portrait robot parfait de la fonction.",
            content: `
                <h3>1. Méthodologie</h3>
                <ol>
                    <li>Domaine de définition ($D_f$).</li>
                    <li>Limites aux bornes (Asymptotes ?).</li>
                    <li>Calcul de $f'(x)$ et étude de son signe.</li>
                    <li>Tableau de variations.</li>
                    <li>Points particuliers et tracer.</li>
                </ol>
                <h3>2. Convexité</h3>
                <p>Signe de la dérivée seconde $f''(x)$. Point d'inflexion si $f''$ s'annule en changeant de signe.</p>
            `,
            summary: [
                "Ne jamais oublier l'ensemble de définition.",
                "Le tableau de variations est la carte d'identité de la fonction.",
                "Vérifier la cohérence entre limites et sens de variation."
            ],
            exercises: [
                {
                    id: 'ex-etude-1',
                    question: "Si $f'(x) > 0$ sur un intervalle, alors f est...",
                    options: ["Décroissante", "Constante", "Croissante", "Nulle"],
                    correctAnswer: 2,
                    explanation: "Une dérivée positive indique une fonction croissante."
                }
            ]
        },

        // ==========================================
        // PARTIE 2 : ALGÈBRE
        // ==========================================
        {
            id: 'alg-ts-09',
            part: 'Partie 2 : Algèbre',
            title: '9. Nombres Complexes',
            story: "Et si les nombres négatifs avaient des racines carrées ? Les mathématiciens ont inventé $i$ tel que $i^2 = -1$. Cela ouvre un nouveau plan de nombres (le plan complexe) où la géométrie devient de l'algèbre.",
            content: `
                <h3>1. Forme algébrique</h3>
                <p>$z = a + ib$ avec $a$ partie réelle, $b$ partie imaginaire.</p>
                <h3>2. Forme exponentielle</h3>
                <p>$z = re^{i\\theta}$ avec $r = |z|$ (module) et $\\theta = \\arg(z)$ (argument).</p>
                <h3>3. Géométrie</h3>
                <p>Affixe d'un point $M(a,b)$. Module = Distance. Argument = Angle.</p>
                <h3>4. Équations dans $\\mathbb{C}$</h3>
                <p>Résolution d'équations du second degré avec $\\Delta < 0$. Solutions : $\\frac{-b \\pm i\\sqrt{|\\Delta|}}{2a}$.</p>
            `,
            summary: [
                "$i^2 = -1$.",
                "Formule de Moivre : $(\\cos x + i\\sin x)^n = \\cos(nx) + i\\sin(nx)$.",
                "Formule d'Euler : $\\cos x = \\frac{e^{ix} + e^{-ix}}{2}$."
            ],
            exercises: [
                {
                    id: 'ex-cplx-1',
                    question: "Quel est le module de $1 + i$ ?",
                    options: ["1", "2", "$\\sqrt{2}$", "$i$"],
                    correctAnswer: 2,
                    explanation: "$|z| = \\sqrt{a^2 + b^2} = \\sqrt{1^2 + 1^2} = \\sqrt{2}$."
                }
            ]
        },

        // ==========================================
        // PARTIE 3 : PROBABILITÉS ET STATISTIQUES
        // ==========================================
        {
            id: 'prob-ts-10',
            part: 'Partie 3 : Probabilités et Stats',
            title: '10. Probabilités',
            story: "Le hasard a ses lois. Probabilités conditionnelles, indépendance, lois de densité... On apprend à quantifier l'incertitude.",
            content: `
                <h3>1. Conditionnement</h3>
                <p>$P_B(A) = \\frac{P(A \\cap B)}{P(B)}$. Formule des probabilités totales.</p>
                <h3>2. Indépendance</h3>
                <p>$A$ et $B$ indépendants si $P(A \\cap B) = P(A) \\times P(B)$.</p>
                <h3>3. Lois de probabilité</h3>
                <ul>
                    <li>Loi Binomiale (Bernoulli répété).</li>
                    <li>Loi Exponentielle (Durée de vie sans mémoire).</li>
                    <li>Loi Normale (Courbe en cloche, la reine des probas).</li>
                </ul>
            `,
            summary: [
                "Toujours faire un arbre pondéré pour visualiser.",
                "Somme des probabilités = 1.",
                "Espérance = Moyenne théorique."
            ],
            exercises: [
                {
                    id: 'ex-prob-1',
                    question: "Si P(A)=0.5 et P(B)=0.2 et A, B indépendants, que vaut P(A et B) ?",
                    options: ["0.7", "0.3", "0.1", "0.5"],
                    correctAnswer: 2,
                    explanation: "Indépendance $\\implies P(A \\cap B) = P(A) \\times P(B) = 0.5 \\times 0.2 = 0.1$."
                }
            ]
        },
        {
            id: 'prob-ts-11',
            part: 'Partie 3 : Probabilités et Stats',
            title: '11. Statistique',
            story: "L'analyse des données à deux variables. On cherche à savoir si deux phénomènes sont liés (corrélation) et à prédire l'avenir (ajustement).",
            content: `
                <h3>1. Séries à deux variables</h3>
                <p>Nuage de points $(x_i, y_i)$. Point moyen $G(\\bar{x}, \\bar{y})$.</p>
                <h3>2. Ajustement affine</h3>
                <p>Droite de régression (moindres carrés) $y = ax + b$. Passe par le point moyen G.</p>
                <h3>3. Coefficient de corrélation</h3>
                <p>Si proche de 1 ou -1, l'ajustement est pertinent.</p>
            `,
            summary: [
                "Visualiser le nuage de points avant tout calcul.",
                "La droite de régression permet de faire des prévisions/extrapolations.",
                "Attention : Corrélation n'est pas causalité !"
            ],
            exercises: [
                {
                    id: 'ex-stat-1',
                    question: "Si le nuage de points est très allongé le long d'une droite, la corrélation est...",
                    options: ["Faible", "Forte", "Nulle", "Impossible"],
                    correctAnswer: 1,
                    explanation: "Cela signifie qu'une relation linéaire lie les deux variables."
                }
            ]
        }
    ]
};
