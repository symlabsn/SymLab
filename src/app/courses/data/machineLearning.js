
export const machineLearningData = {
    id: 'ml-intro',
    title: 'Introduction au Machine Learning',
    chapters: [
        {
            id: 'ml-01',
            part: 'Partie 1 : Fondamentaux',
            title: '1. Qu\'est-ce que le Machine Learning ?',
            story: "Imaginez un enfant apprenant à reconnaître un chat. On ne lui donne pas une définition mathématique ('oreilles pointues + moustaches'). On lui montre des images : 'Ça c'est un chat', 'Ça c'est un chien'. Le Machine Learning, c'est exactement ça : l'ordinateur apprend par l'exemple.",
            content: `
                <h3>1. Définition</h3>
                <p>Le Machine Learning (Apprentissage Automatique) est un sous-domaine de l'Intelligence Artificielle qui permet aux ordinateurs d'apprendre sans être explicitement programmés pour chaque tâche.</p>
                <h3>2. Types d'apprentissage</h3>
                <ul>
                    <li><strong>Apprentissage Supervisé :</strong> On fournit les données et les réponses attendues (labels). Exemple : classification d'emails (spam ou non).</li>
                    <li><strong>Apprentissage Non Supervisé :</strong> On fournit uniquement les données, l'algo cherche des structures. Exemple : segmentation client.</li>
                    <li><strong>Apprentissage par Renforcement :</strong> L'agent apprend par essais/erreurs pour maximiser une récompense. Exemple : jeu d'échecs.</li>
                </ul>
                <h3>3. Le Workflow ML</h3>
                <p>Data Collection $\\rightarrow$ Preprocessing $\\rightarrow$ Training $\\rightarrow$ Evaluation $\\rightarrow$ Deployment.</p>
            `,
            summary: [
                "Le ML remplace les règles 'if-then' coder à la main par des modèles statistiques.",
                "La qualité des données est plus importante que la complexité de l'algorithme.",
                "Distinguer clairement Supervisé (avec prof) et Non Supervisé (autodidacte)."
            ],
            exercises: [
                {
                    id: 'quiz-ml-1',
                    question: "Prédire le prix d'une maison à partir de sa surface est un problème de...",
                    options: ["Classification", "Régression", "Clustering", "Réduction de dimension"],
                    correctAnswer: 1,
                    explanation: "On prédit une valeur continue (prix), c'est donc une régression (Supervisé)."
                }
            ]
        },
        {
            id: 'ml-02',
            part: 'Partie 1 : Fondamentaux',
            title: '2. Régression Linéaire',
            story: "C'est l'algo le plus simple mais le plus fondamental. C'est comme tracer la 'meilleure droite' qui passe à travers un nuage de points. Galton l'a utilisé pour étudier la taille des enfants par rapport aux parents.",
            content: `
                <h3>1. Modèle Mathématique</h3>
                <p>On cherche une fonction $f(x) = wx + b$.</p>
                <ul>
                    <li>$x$ : variable d'entrée (feature)</li>
                    <li>$y$ : variable cible (target)</li>
                    <li>$w$ : poids (pente)</li>
                    <li>$b$ : biais (ordonnée à l'origine)</li>
                </ul>
                <h3>2. Fonction de Coût (MSE)</h3>
                <p>On veut minimiser l'erreur quadratique moyenne : $J(w,b) = \\frac{1}{n} \\sum (y_i - (wx_i + b))^2$.</p>
                <h3>3. Descente de Gradient</h3>
                <p>Pour trouver le minimum de $J$, on descend la 'colline' de l'erreur pas à pas : $w_{new} = w_{old} - \\alpha \\frac{\\partial J}{\\partial w}$.</p>
            `,
            summary: [
                "L'objectif est de trouver les paramètres w et b qui minimisent l'erreur.",
                "La Descente de Gradient est l'algorithme d'optimisation universel en ML.",
                "Attention au sur-apprentissage (overfitting) si le modèle est trop complexe."
            ],
            exercises: [
                {
                    id: 'quiz-ml-2',
                    question: "Dans la descente de gradient, que contrôle le 'learning rate' $\\alpha$ ?",
                    options: ["La précision finale", "La taille du pas de descente", "Le nombre de données", "La complexité du modèle"],
                    correctAnswer: 1,
                    explanation: "Si $\\alpha$ est trop grand, on diverge. Si trop petit, c'est trop lent."
                }
            ]
        },
        {
            id: 'ml-03',
            part: 'Partie 2 : Algorithmes Avancés',
            title: '3. Réseaux de Neurones',
            story: "Inspirés du cerveau humain, les neurones artificiels sont connectés en couches. Chaque 'neurone' fait une somme pondérée et décide s'il 's'active'. C'est la base du Deep Learning.",
            content: `
                <h3>1. Le Perceptron</h3>
                <p>Modèle de base : $y = \\text{activation}(\\sum w_i x_i + b)$.</p>
                <p>Fonctions d'activation : Sigmoid, ReLU, Tanh.</p>
                <h3>2. Architecture</h3>
                <ul>
                    <li>Input Layer : Entrée des données brutes.</li>
                    <li>Hidden Layers : Extraction de caractéristiques complexes.</li>
                    <li>Output Layer : Prédiction finale.</li>
                </ul>
                <h3>3. Backpropagation</h3>
                <p>L'algo magique qui permet d'entraîner des réseaux profonds en propageant l'erreur de la fin vers le début pour ajuster les poids.</p>
            `,
            summary: [
                "Un réseau de neurones avec une couche cachée peut approximer n'importe quelle fonction (théorème d'approximation universelle).",
                "Deep Learning = Beaucoup de couches cachées.",
                "ReLU est l'activation la plus utilisée aujourd'hui."
            ],
            exercises: [
                {
                    id: 'quiz-ml-3',
                    question: "Pourquoi utilise-t-on des fonctions d'activation non-linéaires ?",
                    options: ["Pour accélérer le calcul", "Pour empiler les couches intelligemment", "Pour limiter la sortie entre 0 et 1", "Pour imiter le cerveau"],
                    correctAnswer: 1,
                    explanation: "Sans non-linéarité, un réseau profond équivaut à une seule couche linéaire (combinaison linéaire de combinaisons linéaires est linéaire)."
                }
            ]
        }
    ]
};
