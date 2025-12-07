
export const mathForMLData = {
    id: 'math-ml',
    title: 'Mathématiques pour l\'IA',
    chapters: [
        {
            id: 'math-ml-01',
            part: 'Partie 1 : Algèbre Linéaire',
            title: '1. Vecteurs et Matrices',
            story: "En IA, une image n'est pas une image, c'est un tableau de nombres (matrice). Une phrase est un vecteur. L'algèbre linéaire est le moteur qui fait tourner tous les calculs graphiques et neuronaux.",
            content: `
                <h3>1. Vecteurs</h3>
                <p>Objet mathématique défini par une direction et une norme. En ML, c'est souvent une liste de features. $v = [x_1, x_2, ..., x_n]$.</p>
                <h3>2. Matrices</h3>
                <p>Tableau 2D. Opération clé : <strong>Multiplication matricielle</strong>.</p>
                <p>Si $A$ est $(m \\times n)$ et $B$ est $(n \\times p)$, alors $C = AB$ est $(m \\times p)$.</p>
                <h3>3. Tenseurs</h3>
                <p>Généralisation aux dimensions supérieures (ex: image couleur = tenseur 3D HxWxC).</p>
            `,
            summary: [
                "Produit scalaire $u \\cdot v = ||u|| ||v|| \\cos \\theta$ mesure la similarité.",
                "Les GPU sont conçus spécifiquement pour multiplier des matrices rapidement.",
                "Les opérations se font par 'batch' (lots) de matrices."
            ],
            exercises: [
                {
                    id: 'quiz-mml-1',
                    question: "Peut-on multiplier une matrice 3x2 par une matrice 3x2 ?",
                    options: ["Oui", "Non", "Seulement si elles sont carrées", "Seulement si le déterminant est nul"],
                    correctAnswer: 1,
                    explanation: "Non, le nombre de colonnes de la 1ère (2) doit égaler le nombre de lignes de la 2ème (3)."
                }
            ]
        },
        {
            id: 'math-ml-02',
            part: 'Partie 2 : Analyse',
            title: '2. Gradients et Optimisation',
            story: "Comment un réseau apprend-il ? En cherchant le fond de la vallée de l'erreur. Pour ça, il doit connaître la pente du terrain sous ses pieds : c'est le Gradient.",
            content: `
                <h3>1. Dérivées Partielles</h3>
                <p>Si $f(x, y)$ dépend de plusieurs variables, $\\frac{\\partial f}{\\partial x}$ est la dérivée par rapport à $x$ en gardant $y$ constant.</p>
                <h3>2. Le Gradient $\\nabla f$</h3>
                <p>C'est le vecteur qui rassemble toutes les dérivées partielles : $\\nabla f = [\\frac{\\partial f}{\\partial x_1}, ..., \\frac{\\partial f}{\\partial x_n}]$.</p>
                <p>Il indique la direction de la plus forte pente montante.</p>
                <h3>3. Chain Rule (Dérivation en chaîne)</h3>
                <p>Essentielle pour la Backpropagation : $\\frac{dz}{dx} = \\frac{dz}{dy} \\cdot \\frac{dy}{dx}$.</p>
            `,
            summary: [
                "Pour minimiser une erreur, on va dans la direction opposée au gradient : $-\\nabla f$.",
                "Le gradient s'annule aux extremums (min ou max).",
                "Jacobienne et Hessienne sont les généralisations matricielles."
            ],
            exercises: [
                {
                    id: 'quiz-mml-2',
                    question: "Le gradient pointe toujours vers...",
                    options: ["Le minimum global", "Le minimum local", "La plus forte ascension", "0"],
                    correctAnswer: 2,
                    explanation: "Mathématiquement, il pointe vers la plus forte croissance de la fonction."
                }
            ]
        },
        {
            id: 'math-ml-03',
            part: 'Partie 3 : Probabilités',
            title: '3. Théorème de Bayes',
            story: "Comment mettre à jour nos croyances face à de nouvelles preuves ? Bayes nous donne la formule exacte. C'est la base de l'IA probabiliste et de la prise de décision.",
            content: `
                <h3>1. La Formule</h3>
                <p>$$P(A|B) = \\frac{P(B|A) P(A)}{P(B)}$$</p>
                <ul>
                    <li>$P(A|B)$ : Probabilité "Posterior" (ce qu'on cherche).</li>
                    <li>$P(B|A)$ : Vraisemblance (Likelihood).</li>
                    <li>$P(A)$ : "Prior" (notre croyance initiale).</li>
                    <li>$P(B)$ : Evidence.</li>
                </ul>
                <h3>2. Maximum de Vraisemblance (MLE)</h3>
                <p>Méthode pour estimer les paramètres d'un modèle statistique en maximisant la probabilité d'observer les données données.</p>
            `,
            summary: [
                "Bayes permet d'inverser les conditionnements : passer de P(Symptôme|Maladie) à P(Maladie|Symptôme).",
                "Fondamental pour comprendre les classifieurs Naive Bayes et les filtres anti-spam."
            ],
            exercises: [
                {
                    id: 'quiz-mml-3',
                    question: "Dans le filtre spam, P(Spam) est...",
                    options: ["La Likelihood", "Le Posterior", "Le Prior", "L'Evidence"],
                    correctAnswer: 2,
                    explanation: "C'est la probabilité qu'un message soit un spam a priori, avant même de l'avoir lu."
                }
            ]
        }
    ]
};
