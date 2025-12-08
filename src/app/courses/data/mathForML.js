
export const mathForMLData = {
    id: 'math-ml',
    title: 'Mathématiques pour l\'Intelligence Artificielle',
    chapters: [
        {
            id: 'math-ml-01',
            part: 'Partie 1 : Algèbre Linéaire',
            title: '1. Vecteurs et Matrices : Le Langage de la Data',
            image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=2670&auto=format&fit=crop",
            story: "Pour un ordinateur, une image n'est pas une image. C'est une grille de nombres (une matrice). Un texte n'est pas des mots, c'est une suite de vecteurs. L'Algèbre Linéaire est la grammaire qui permet de manipuler ces objets.",
            content: `
                <h3>Vecteurs</h3>
                <p>Un vecteur est une liste ordonnée de nombres. En ML, chaque donnée est un vecteur.</p>
                <p>Exemple : Une maison = \\([120m^2, 3chambres, 2010année]\\).</p>
                <p>C'est un point dans un espace à 3 dimensions.</p>
                
                <h3>Matrices</h3>
                <p>Une matrice est un tableau 2D de nombres.</p>
                <p>En ML, tout le Dataset est une matrice \\(X\\) où :</p>
                <ul>
                    <li>Chaque <strong>ligne</strong> est un exemple (une maison).</li>
                    <li>Chaque <strong>colonne</strong> est une fonctionnalité (surface, prix...).</li>
                </ul>
                
                <h3>Produit Matriciel (Dot Product)</h3>
                <p>L'opération reine des Réseaux de Neurones.</p>
                <p>\\[ y = W \\cdot x + b \\]</p>
                <p>Multiplier des matrices permet de transformer l'espace (tourner, étirer) et de projeter les données vers la solution.</p>
            `,
            summary: [
                "Tout en ML est tenseur (scalaire, vecteur, matrice, n-dim array).",
                "Les GPUs sont rapides car ils sont optimisés pour multiplier des matrices en parallèle.",
                "Comprendre les dimensions (Shapes) est vital pour debugger un réseau de neurones."
            ],
            exercises: [
                {
                    id: 'quiz-math-1',
                    question: "Si je multiplie une matrice (3x2) par une matrice (2x4), quelle est la taille du résultat ?",
                    options: ["(3x2)", "(2x2)", "(3x4)"],
                    correctAnswer: 2,
                    explanation: "Les dimensions internes (2) s'annulent. Il reste les externes : (3x4)."
                }
            ]
        },
        {
            id: 'math-ml-02',
            part: 'Partie 2 : Analyse',
            title: '2. Dérivées et Gradients',
            image: "https://images.unsplash.com/photo-1620825937374-87fc7d6bddc2?q=80&w=2670&auto=format&fit=crop",
            story: "Comment un réseau apprend-il ? En glissant le long de la courbe de l'erreur. Pour savoir dans quel sens glisser, il a besoin de la pente. En maths, la pente, c'est la dérivée.",
            content: `
                <h3>La Dérivée \\(f'(x)\\)</h3>
                <p>Elle mesure la sensibilité d'une fonction. Si je bouge un tout petit peu x, de combien bouge f(x) ?</p>
                <ul>
                    <li>\\(f'(x) > 0\\) : La fonction monte.</li>
                    <li>\\(f'(x) < 0\\) : La fonction descend.</li>
                    <li>\\(f'(x) = 0\\) : On est sur un plat (sommet ou creux). C'est ce qu'on cherche en ML (le <strong>minimum</strong> de l'erreur).</li>
                </ul>
                
                <h3>Le Gradient \\(\\nabla f\\)</h3>
                <p>C'est la dérivée généralisée à plusieurs dimensions (pour une matrice de poids).</p>
                <p>Le vecteur Gradient pointe toujours vers la direction de la <strong>plus forte montée</strong>.</p>
                <p>Donc pour minimiser l'erreur, on va dans la direction <strong>opposée</strong> du gradient.</p>
                <p>\\[ w_{\\text{new}} = w - \\alpha \\nabla J(w) \\]</p>
                
                <h3>Chain Rule (Théorème de dérivation des fonctions composées)</h3>
                <p>C'est le moteur de la <strong>Backpropagation</strong>.</p>
                <p>Si \\(y = f(g(x))\\), alors la dérivée est le produit des dérivées :</p>
                <p>\\[ \\frac{dy}{dx} = \\frac{dy}{dg} \\cdot \\frac{dg}{dx} \\]</p>
                <p>Cela permet de calculer l'impact de la première couche sur l'erreur finale, à travers toutes les couches intermédiaires.</p>
            `,
            summary: [
                "L'apprentissage est un problème d'optimisation.",
                "Annuler le Gradient = Trouver les points critiques (minima, maxima, points selle).",
                "La complexité vient du fait qu'on optimise des millions de paramètres simultanément."
            ],
            exercises: [
                {
                    id: 'quiz-math-2',
                    question: "Si le gradient est nul, cela signifie forcément que j'ai trouvé la meilleure solution possible (Minimum Global).",
                    options: ["Vrai", "Faux"],
                    correctAnswer: 1,
                    explanation: "Faux. Ça peut être un minimum local (un petit creux) ou un point selle. C'est le grand défi de l'optimisation non-convexe."
                }
            ]
        },
        {
            id: 'math-ml-03',
            part: 'Partie 3 : Probabilités',
            title: '3. Probabilités & Théorème de Bayes',
            image: "https://images.unsplash.com/photo-1596495578065-6e0763fa1178?q=80&w=2670&auto=format&fit=crop",
            story: "L'IA ne donne jamais de certitudes, seulement des probabilités. 'Il y a 90% pour que ce soit un chat'. Comprendre l'incertitude est la clé de la décision.",
            content: `
                <h3>Probabilité Conditionnelle \\(P(A|B)\\)</h3>
                <p>La probabilité que A arrive <strong>sachant que</strong> B est arrivé.</p>
                <p>Exemple : Quelle est la probabilité qu'il pleuve (A) sachant qu'il y a des nuages (B) ?</p>
                
                <h3>Théorème de Bayes</h3>
                <p>\\[ P(A|B) = \\frac{P(B|A) \\cdot P(A)}{P(B)} \\]</p>
                <p>C'est la formule magique pour <strong>mettre à jour ses croyances</strong> avec de nouvelles preuves.</p>
                <ul>
                    <li>On a une croyance a priori (Prior).</li>
                    <li>On observe des données (Likelihood).</li>
                    <li>On obtient une croyance a posteriori (Posterior).</li>
                </ul>
                <p>C'est la base du filtrage anti-spam (Naive Bayes) et de l'IA générative moderne.</p>
            `,
            summary: [
                "L'IA est fondamentalement probabiliste (stochastique).",
                "Indépendance : P(A et B) = P(A) * P(B). Souvent une hypothèse simplificatrice en ML.",
                "L'entropie (Théorie de l'information) mesure l'incertitude ou la surprise d'une distribution."
            ],
            exercises: [
                {
                    id: 'quiz-math-3',
                    question: "Dans une classification binaire, si mon modèle prédit 0.8 pour la classe A, quelle est la probabilité pour la classe B ?",
                    options: ["0.8", "0.2", "On ne peut pas savoir"],
                    correctAnswer: 1,
                    explanation: "Si les classes sont mutuellement exclusives, la somme des probas vaut 1. Donc 1 - 0.8 = 0.2."
                }
            ]
        },
        {
            id: 'math-ml-04',
            part: 'Partie 4 : Optimisation',
            title: '4. Optimisation : SGD, Momentum & Adam',
            image: "https://images.unsplash.com/photo-1509228468518-180dd4864904?q=80&w=2670&auto=format&fit=crop",
            story: "Descendre une montagne dans le brouillard, c'est bien. Mais si vous avez un GPS qui se souvient du chemin parcouru et ajuste votre vitesse, vous irez plus vite et plus sûrement. C'est l'idée des optimiseurs modernes.",
            content: `
                <h3>Gradient Descent Classique</h3>
                <p>On a vu la formule : \\(w = w - \\alpha \\nabla J(w)\\).</p>
                <p>Problème : On calcule le gradient sur <strong>toutes</strong> les données à chaque étape. C'est lent si on a des millions d'exemples.</p>
                
                <h3>Stochastic Gradient Descent (SGD)</h3>
                <p>Au lieu de calculer le gradient sur tout le dataset, on le calcule sur <strong>un seul exemple</strong> (ou un petit batch).</p>
                <ul>
                    <li><strong>Avantage</strong> : Beaucoup plus rapide.</li>
                    <li><strong>Inconvénient</strong> : Le chemin est bruité (zigzag).</li>
                </ul>
                
                <h3>Momentum</h3>
                <p>On ajoute une "mémoire" : si on descend dans la même direction depuis plusieurs étapes, on accélère.</p>
                <p>\\[ v_t = \\beta v_{t-1} + \\nabla J(w) \\]</p>
                <p>\\[ w = w - \\alpha v_t \\]</p>
                <p>C'est comme une boule qui roule : elle prend de la vitesse dans les descentes.</p>
                
                <h3>Adam (Adaptive Moment Estimation)</h3>
                <p>L'optimiseur le plus populaire aujourd'hui. Il combine :</p>
                <ul>
                    <li><strong>Momentum</strong> : Mémoire de la direction.</li>
                    <li><strong>RMSprop</strong> : Adaptation du learning rate pour chaque paramètre.</li>
                </ul>
                <p>C'est l'optimiseur par défaut dans la plupart des frameworks (TensorFlow, PyTorch).</p>
            `,
            summary: [
                "SGD est rapide mais bruité. Momentum lisse la trajectoire.",
                "Adam est le meilleur compromis pour la plupart des problèmes.",
                "Le choix du learning rate α reste critique : trop grand = divergence, trop petit = lenteur."
            ],
            exercises: [
                {
                    id: 'quiz-math-4',
                    question: "Quel est l'avantage principal du Momentum par rapport au Gradient Descent classique ?",
                    options: ["Il est plus rapide à calculer", "Il évite de rester coincé dans les plateaux et accélère dans les vallées", "Il utilise moins de mémoire"],
                    correctAnswer: 1,
                    explanation: "Le Momentum accumule la vitesse dans la direction de descente, ce qui permet de traverser les zones plates plus rapidement et d'éviter les oscillations."
                }
            ]
        },
        {
            id: 'math-ml-05',
            part: 'Partie 5 : Statistiques',
            title: '5. Distributions & Tests d\'Hypothèses',
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop",
            story: "Vous lancez une pièce 100 fois et obtenez 60 fois 'Face'. Est-ce que la pièce est truquée ou est-ce juste de la chance ? Les statistiques répondent à cette question avec rigueur.",
            content: `
                <h3>Distributions Importantes</h3>
                <p><strong>Distribution Normale (Gaussienne)</strong> :</p>
                <p>La plus célèbre. En forme de cloche.</p>
                <p>\\[ f(x) = \\frac{1}{\\sigma\\sqrt{2\\pi}} e^{-\\frac{1}{2}(\\frac{x-\\mu}{\\sigma})^2} \\]</p>
                <ul>
                    <li>\\(\\mu\\) : Moyenne (centre de la cloche).</li>
                    <li>\\(\\sigma\\) : Écart-type (largeur de la cloche).</li>
                </ul>
                
                <p><strong>Pourquoi c'est important en ML ?</strong></p>
                <ul>
                    <li>Beaucoup de phénomènes naturels suivent une Normale (taille, poids, erreurs de mesure).</li>
                    <li>Le <strong>Théorème Central Limite</strong> dit que la somme de variables aléatoires tend vers une Normale.</li>
                    <li>On initialise souvent les poids des réseaux de neurones avec une Normale.</li>
                </ul>
                
                <h3>Tests d'Hypothèses</h3>
                <p><strong>Exemple : A/B Testing</strong></p>
                <p>Vous testez deux versions d'un site web. Version A : 100 visiteurs, 10 achats. Version B : 100 visiteurs, 15 achats.</p>
                <p>Question : La différence est-elle significative ou due au hasard ?</p>
                
                <p><strong>Démarche</strong> :</p>
                <ol>
                    <li><strong>Hypothèse Nulle (H0)</strong> : Les deux versions sont identiques.</li>
                    <li><strong>Hypothèse Alternative (H1)</strong> : B est meilleure que A.</li>
                    <li><strong>Test Statistique</strong> : Calculer une p-value.</li>
                    <li><strong>Décision</strong> : Si p-value < 0.05, on rejette H0 (B est significativement meilleure).</li>
                </ol>
            `,
            summary: [
                "La Distribution Normale est omniprésente en ML (initialisation, bruit, erreurs).",
                "Les tests d'hypothèses permettent de valider scientifiquement les résultats (pas juste de la chance).",
                "Attention à la p-value : elle ne mesure pas la taille de l'effet, juste sa significativité."
            ],
            exercises: [
                {
                    id: 'quiz-math-5',
                    question: "Si une p-value est de 0.03, cela signifie que :",
                    options: ["Il y a 3% de chances que H0 soit vraie", "Si H0 était vraie, il y aurait 3% de chances d'observer ces données", "L'effet est très fort"],
                    correctAnswer: 1,
                    explanation: "La p-value mesure la probabilité d'observer les données (ou plus extrêmes) si l'hypothèse nulle était vraie. Ce n'est PAS la probabilité que H0 soit vraie."
                }
            ]
        },
        {
            id: 'math-ml-06',
            part: 'Partie 6 : Synthèse',
            title: '6. Tout Assembler : Les Maths derrière un Réseau',
            image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=2670&auto=format&fit=crop",
            story: "Vous avez appris l'algèbre, le calcul, les probas, l'optimisation. Maintenant, voyons comment tout s'imbrique dans un vrai réseau de neurones, du début à la fin.",
            content: `
                <h3>Étape 1 : Forward Pass (Propagation Avant)</h3>
                <p>On a une image (matrice de pixels) \\(X\\).</p>
                <ul>
                    <li><strong>Couche 1</strong> : \\(Z_1 = W_1 X + b_1\\) (Produit matriciel).</li>
                    <li><strong>Activation</strong> : \\(A_1 = \\text{ReLU}(Z_1)\\) (Non-linéarité).</li>
                    <li><strong>Couche 2</strong> : \\(Z_2 = W_2 A_1 + b_2\\).</li>
                    <li><strong>Sortie</strong> : \\(\\hat{y} = \\text{Softmax}(Z_2)\\) (Probabilités pour chaque classe).</li>
                </ul>
                
                <h3>Étape 2 : Loss (Fonction de Coût)</h3>
                <p>On compare la prédiction \\(\\hat{y}\\) avec la vraie réponse \\(y\\).</p>
                <p><strong>Cross-Entropy Loss</strong> :</p>
                <p>\\[ L = -\\sum y_i \\log(\\hat{y}_i) \\]</p>
                <p>C'est la distance entre deux distributions de probabilités.</p>
                
                <h3>Étape 3 : Backward Pass (Backpropagation)</h3>
                <p>On calcule le gradient de la Loss par rapport à chaque poids.</p>
                <p><strong>Chain Rule</strong> : \\(\\frac{\\partial L}{\\partial W_1} = \\frac{\\partial L}{\\partial Z_2} \\cdot \\frac{\\partial Z_2}{\\partial A_1} \\cdot \\frac{\\partial A_1}{\\partial Z_1} \\cdot \\frac{\\partial Z_1}{\\partial W_1}\\).</p>
                
                <h3>Étape 4 : Mise à Jour (Optimizer)</h3>
                <p>On ajuste les poids avec Adam :</p>
                <p>\\[ W_1 = W_1 - \\alpha \\cdot \\text{Adam}(\\nabla_{W_1} L) \\]</p>
                
                <h3>Étape 5 : Répéter</h3>
                <p>On recommence avec un nouveau batch de données, des milliers de fois (epochs).</p>
                
                <h3>Le Miracle</h3>
                <p>Après des millions d'itérations, les poids \\(W\\) convergent vers des valeurs qui permettent au réseau de reconnaître des chats, traduire des langues, ou générer du texte.</p>
                <p><strong>Tout ça grâce aux maths.</strong></p>
            `,
            summary: [
                "Un réseau de neurones est une composition de fonctions (algèbre linéaire + non-linéarités).",
                "L'apprentissage est un problème d'optimisation (minimiser la Loss via le Gradient).",
                "Les maths ne sont pas juste de la théorie : elles sont le moteur de l'IA moderne."
            ],
            exercises: [
                {
                    id: 'quiz-math-6',
                    question: "Pourquoi la fonction d'activation (ReLU, Sigmoid) est-elle essentielle dans un réseau de neurones ?",
                    options: ["Pour accélérer le calcul", "Pour introduire de la non-linéarité et permettre d'apprendre des fonctions complexes", "Pour réduire la taille du modèle"],
                    correctAnswer: 1,
                    explanation: "Sans activation non-linéaire, empiler des couches linéaires (produits matriciels) reste équivalent à une seule couche linéaire. La non-linéarité est ce qui donne au réseau sa puissance."
                }
            ]
        }
    ]
};
