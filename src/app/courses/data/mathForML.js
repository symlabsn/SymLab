
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
### Vecteurs
Un vecteur est une liste ordonnée de nombres. En ML, chaque donnée est un vecteur.
Exemple : Une maison = $[120m^2, 3chambres, 2010année]$.
C'est un point dans un espace à 3 dimensions.

### Matrices
Une matrice est un tableau 2D de nombres.
En ML, tout le Dataset est une matrice $X$ où :
- Chaque **ligne** est un exemple (une maison).
- Chaque **colonne** est une fonctionnalité (surface, prix...).

### Produit Matriciel (Dot Product)
L'opération reine des Réseaux de Neurones.
$$ y = W \cdot x + b $$
Multiplier des matrices permet de transformer l'espace (tourner, étirer) et de projeter les données vers la solution.
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
### La Dérivée $f'(x)$
Elle mesure la sensibilité d'une fonction. Si je bouge un tout petit peu x, de combien bouge f(x) ?
- $f'(x) > 0$ : La fonction monte.
- $f'(x) < 0$ : La fonction descend.
- $f'(x) = 0$ : On est sur un plat (sommet ou creux). C'est ce qu'on cherche en ML (le **minimum** de l'erreur).

### Le Gradient $\\nabla f$
C'est la dérivée généralisée à plusieurs dimensions (pour une matrice de poids).
Le vecteur Gradient pointe toujours vers la direction de la **plus forte montée**.
Donc pour minimiser l'erreur, on va dans la direction **opposée** du gradient.
$$ w_{new} = w - \alpha \nabla J(w) $$

### Chain Rule (Théorème de dérivation des fonctions composées)
C'est le moteur de la **Backpropagation**.
Si $y = f(g(x))$, alors la dérivée est le produit des dérivées :
$$ \frac{dy}{dx} = \frac{dy}{dg} \cdot \frac{dg}{dx} $$
Cela permet de calculer l'impact de la première couche sur l'erreur finale, à travers toutes les couches intermédiaires.
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
### Probabilité Conditionnelle $P(A|B)$
La probabilité que A arrive **sachant que** B est arrivé.
Exemple : Quelle est la probabilité qu'il pleuve (A) sachant qu'il y a des nuages (B) ?

### Théorème de Bayes
$$ P(A|B) = \frac{P(B|A) \cdot P(A)}{P(B)} $$
C'est la formule magique pour **mettre à jour ses croyances** avec de nouvelles preuves.
- On a une croyance a priori (Prior).
- On observe des données (Likelihood).
- On obtient une croyance a posteriori (Posterior).

C'est la base du filtrage anti-spam (Naive Bayes) et de l'IA générative moderne.
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
### Gradient Descent Classique
On a vu la formule : $w = w - \\alpha \\nabla J(w)$.
Problème : On calcule le gradient sur **toutes** les données à chaque étape. C'est lent si on a des millions d'exemples.

### Stochastic Gradient Descent (SGD)
Au lieu de calculer le gradient sur tout le dataset, on le calcule sur **un seul exemple** (ou un petit batch).
- **Avantage** : Beaucoup plus rapide.
- **Inconvénient** : Le chemin est bruité (zigzag).

### Momentum
On ajoute une "mémoire" : si on descend dans la même direction depuis plusieurs étapes, on accélère.
$$ v_t = \\beta v_{t-1} + \\nabla J(w) $$
$$ w = w - \\alpha v_t $$
C'est comme une boule qui roule : elle prend de la vitesse dans les descentes.

### Adam (Adaptive Moment Estimation)
L'optimiseur le plus populaire aujourd'hui. Il combine :
- **Momentum** : Mémoire de la direction.
- **RMSprop** : Adaptation du learning rate pour chaque paramètre.

C'est l'optimiseur par défaut dans la plupart des frameworks (TensorFlow, PyTorch).
            `,
            summary: [
                "SGD est rapide mais bruité. Momentum lisse la trajectoire.",
                "Adam est le meilleur compromis pour la plupart des problèmes.",
                "Le choix du learning rate $\\alpha$ reste critique : trop grand = divergence, trop petit = lenteur."
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
### Distributions Importantes
**Distribution Normale (Gaussienne)** :
La plus célèbre. En forme de cloche.
$$ f(x) = \\frac{1}{\\sigma\\sqrt{2\\pi}} e^{-\\frac{1}{2}(\\frac{x-\\mu}{\\sigma})^2} $$
- $\\mu$ : Moyenne (centre de la cloche).
- $\\sigma$ : Écart-type (largeur de la cloche).

**Pourquoi c'est important en ML ?**
- Beaucoup de phénomènes naturels suivent une Normale (taille, poids, erreurs de mesure).
- Le **Théorème Central Limite** dit que la somme de variables aléatoires tend vers une Normale.
- On initialise souvent les poids des réseaux de neurones avec une Normale.

### Tests d'Hypothèses
**Exemple : A/B Testing**
Vous testez deux versions d'un site web. Version A : 100 visiteurs, 10 achats. Version B : 100 visiteurs, 15 achats.
Question : La différence est-elle significative ou due au hasard ?

**Démarche** :
1.  **Hypothèse Nulle (H0)** : Les deux versions sont identiques.
2.  **Hypothèse Alternative (H1)** : B est meilleure que A.
3.  **Test Statistique** : Calculer une p-value.
4.  **Décision** : Si p-value < 0.05, on rejette H0 (B est significativement meilleure).
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
### Étape 1 : Forward Pass (Propagation Avant)
On a une image (matrice de pixels) $X$.
**Couche 1** : $Z_1 = W_1 X + b_1$ (Produit matriciel).
**Activation** : $A_1 = \\text{ReLU}(Z_1)$ (Non-linéarité).
**Couche 2** : $Z_2 = W_2 A_1 + b_2$.
**Sortie** : $\\hat{y} = \\text{Softmax}(Z_2)$ (Probabilités pour chaque classe).

### Étape 2 : Loss (Fonction de Coût)
On compare la prédiction $\\hat{y}$ avec la vraie réponse $y$.
**Cross-Entropy Loss** :
$$ L = -\\sum y_i \\log(\\hat{y}_i) $$
C'est la distance entre deux distributions de probabilités.

### Étape 3 : Backward Pass (Backpropagation)
On calcule le gradient de la Loss par rapport à chaque poids.
**Chain Rule** : $\\frac{\\partial L}{\\partial W_1} = \\frac{\\partial L}{\\partial Z_2} \\cdot \\frac{\\partial Z_2}{\\partial A_1} \\cdot \\frac{\\partial A_1}{\\partial Z_1} \\cdot \\frac{\\partial Z_1}{\\partial W_1}$.

### Étape 4 : Mise à Jour (Optimizer)
On ajuste les poids avec Adam :
$$ W_1 = W_1 - \\alpha \\cdot \\text{Adam}(\\nabla_{W_1} L) $$

### Étape 5 : Répéter
On recommence avec un nouveau batch de données, des milliers de fois (epochs).

### Le Miracle
Après des millions d'itérations, les poids $W$ convergent vers des valeurs qui permettent au réseau de reconnaître des chats, traduire des langues, ou générer du texte.
**Tout ça grâce aux maths.**
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

