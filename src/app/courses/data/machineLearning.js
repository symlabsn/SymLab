
export const machineLearningData = {
    id: 'ml-intro',
    title: 'Introduction au Machine Learning',
    chapters: [
        {
            id: 'ml-01',
            part: 'Partie 1 : Fondamentaux',
            title: '1. Qu\'est-ce que le Machine Learning ?',
            image: "https://images.unsplash.com/photo-1527474305487-b87b222841cc?q=80&w=2574&auto=format&fit=crop",
            story: "Imaginez un enfant apprenant à reconnaître un chat. On ne lui donne pas une définition mathématique ('oreilles pointues + moustaches'). On lui montre des images : 'Ça c'est un chat', 'Ça c'est un chien'. Le Machine Learning, c'est exactement ça : l'ordinateur apprend par l'exemple.",
            content: `
### 1. Définition Simplifiée
Le Machine Learning (Apprentissage Automatique) consiste à créer des programmes qui **s'améliorent avec l'expérience** (les données) sans être explicitement reprogrammés.

$$ \\text{Programme Classique} : \\text{Données} + \\text{Règles} = \\text{Réponses} $$
$$ \\text{Machine Learning} : \\text{Données} + \\text{Réponses} = \\text{Règles} $$

### 2. Les 3 Grands Types
- **Supervisé** : On a les réponses (labels).
    - *Exemple* : Prédire le prix d'une maison (Régression) ou dire si un email est un spam (Classification).
- **Non-Supervisé** : On n'a pas les réponses, on cherche des structures.
    - *Exemple* : Grouper des clients similaires (Clustering).
- **Par Renforcement** : Apprendre par essai-erreur via des récompenses.
    - *Exemple* : Apprendre à marcher à un robot ou à jouer à Mario.

### 3. Le Workflow du Data Scientist
1.  **Récolte** : Trouver des données propres.
2.  **Nettoyage (Preprocessing)** : Gérer les valeurs manquantes, normaliser.
3.  **Entraînement** : Le modèle apprend sur le *Training Set*.
4.  **Évaluation** : On teste la performance sur le *Test Set*.
5.  **Déploiement** : Mise en production.
            `,
            summary: [
                "Le ML trouve des patterns que l'humain ne peut pas voir.",
                "La qualité des données (Data Quality) est plus critique que le choix de l'algorithme.",
                "Toujours séparer ses données en Train (80%) et Test (20%) pour vérifier que le modèle ne triche pas (Overfitting)."
            ],
            exercises: [
                {
                    id: 'quiz-ml-1',
                    question: "Si je veux grouper des articles de news par thématique sans avoir de catégories prédéfinies, j'utilise :",
                    options: ["Apprentissage Supervisé", "Apprentissage Non-Supervisé", "Régression Linéaire"],
                    correctAnswer: 1,
                    explanation: "C'est du clustering (Non-Supervisé) car on n'a pas de labels (catégories) au départ."
                },
                {
                    id: 'quiz-ml-workflow',
                    question: "Quelle étape prend généralement 80% du temps d'un Data Scientist ?",
                    options: ["Choisir l'algorithme", "Optimiser les paramètres", "Nettoyer et préparer les données"],
                    correctAnswer: 2,
                    explanation: "Le 'Data Cleaning' est la partie la plus longue et la plus ingrate mais essentielle."
                }
            ]
        },
        {
            id: 'ml-02',
            part: 'Partie 1 : Fondamentaux',
            title: '2. Régression Linéaire',
            image: "https://images.unsplash.com/photo-1543286386-713df548e9cc?q=80&w=2670&auto=format&fit=crop",
            story: "Galton, un cousin de Darwin, voulait prédire la taille des enfants en fonction de celle de leurs parents. Il a tracé une ligne à travers son nuage de points : la première régression de l'histoire.",
            content: `
### Intuition
On cherche la **droite** qui passe le plus près possible de tous les points.
Équation : $y = ax + b$ (ou $y = wx + b$ en ML).
- $w$ (poids/pente) : L'importance de la variable.
- $b$ (biais) : La valeur de base.

### Comment l'ordinateur trouve la droite ?
Il utilise une **Fonction de Coût (Loss Function)** : la MSE (Mean Squared Error).
C'est la moyenne des carrés des distances entre les points et la droite.
$$ MSE = \\frac{1}{n} \\sum (y_{vrai} - y_{poids})^2 $$

L'objectif est de **minimiser** cette erreur.

### Descente de Gradient
Imaginez que vous êtes en haut d'une montagne dans le brouillard et que vous voulez descendre. Vous tâtez le sol et faites un pas dans la direction qui descend le plus fort.
- **Learning Rate** : La taille de vos pas. Trop grands, vous ratez le creux. Trop petits, vous mettez 1000 ans.
            `,
            summary: [
                "La régression sert à prédire des valeurs continues (prix, température, taille).",
                "Le modèle cherche à minimiser l'erreur entre sa prédiction et la réalité.",
                "Attention aux 'Outliers' (valeurs extrêmes) qui peuvent fausser la droite."
            ],
            exercises: [
                {
                    id: 'quiz-ml-2',
                    question: "Si ma *Loss* (Erreur) est proche de 0, cela signifie que :",
                    options: ["Mon modèle est mauvais", "Mon modèle prédit presque parfaitement les données d'entraînement", "Il y a un bug"],
                    correctAnswer: 1,
                    explanation: "Une erreur faible signifie que les prédictions sont très proches des valeurs réelles."
                }
            ]
        },
        {
            id: 'ml-03',
            part: 'Partie 2 : Algorithmes Classiques',
            title: '3. Classification : Logistic Regression & KNN',
            image: "https://images.unsplash.com/photo-1599658880436-c61792e70672?q=80&w=2670&auto=format&fit=crop",
            story: "Comment votre banque décide-t-elle si une transaction est frauduleuse ou non ? C'est binaire : Oui/Non. La régression linéaire ne marche pas ici, il nous faut... la Logistique.",
            content: `
### Régression Logistique
Malgré son nom, c'est un algo de **Classification**.
Elle n'utilise pas une droite, mais une **Sigmoïde** (courbe en S) qui écrase les valeurs entre 0 et 1.
$$ P(y=1|x) = \\frac{1}{1 + e^{-(wx+b)}} $$
Si probabilité > 0.5 $\\rightarrow$ Classe 1. Sinon Classe 0.

### K-Nearest Neighbors (KNN)
"Dis-moi qui sont tes voisins, je te dirai qui tu es."
Pour classer un nouveau point, on regarde les **K** points les plus proches dans les données d'entraînement.
- Si 3 voisins sont rouges et 2 sont bleus $\\rightarrow$ Je suis Rouge.
- C'est un algorithme "paresseux" (Lazy Learning) car il n'apprend pas de modèle, il stocke juste les données.
            `,
            summary: [
                "Classification = Prédire une catégorie (Chat/Chien, Malade/Sain).",
                "La matrice de confusion permet d'évaluer les erreurs (Faux Positifs vs Faux Négatifs).",
                "KNN est simple mais lent si on a beaucoup de données (car il doit calculer toutes les distances)."
            ],
            exercises: [
                {
                    id: 'quiz-ml-knn',
                    question: "Avec K=1 dans KNN, le modèle risque de...",
                    options: ["Être trop simple (Underfitting)", "Être trop sensible au bruit (Overfitting)", "Être parfait"],
                    correctAnswer: 1,
                    explanation: "Avec K=1, le modèle copie simplement le point le plus proche, même si c'est une aberration (bruit). Il manque de généralisation."
                }
            ]
        },
        {
            id: 'ml-04',
            part: 'Partie 3 : Réseaux de Neurones',
            title: '4. Introduction au Deep Learning',
            image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2565&auto=format&fit=crop",
            story: "Le cerveau humain contient 86 milliards de neurones. Le Deep Learning tente d'imiter cette structure en empilant des couches de neurones artificiels pour comprendre des données complexes comme des images ou du texte.",
            content: `
### Le Neurone Artificiel
C'est une fonction mathématique simple :
1.  Il reçoit des entrées ($x_1, x_2...$).
2.  Il fait une somme pondérée ($w_1 x_1 + w_2 x_2...$).
3.  Il applique une **Fonction d'Activation** (ReLU, Sigmoid) pour décider s'il "tire" ou non.

### Réseaux de Neurones (Neural Networks)
On connecte ces neurones en couches :
- **Couche d'entrée** : Les pixels de l'image.
- **Couches cachées** (Hidden Layers) : Détectent des formes (bords, cercles, yeux...).
- **Couche de sortie** : La décision finale ("C'est un Chat").

Le **Deep Learning**, c'est quand il y a beaucoup de couches cachées (+ de profondeur).

### Backpropagation (Rétropropagation)
C'est l'algorithme clé. Quand le réseau se trompe, il calcule l'erreur et remonte en arrière pour corriger un tout petit peu les poids de chaque neurone. Après des millions d'exemples, il devient expert.
            `,
            summary: [
                "Le Deep Learning excelle sur les données non structurées (Images, Son, Texte).",
                "Il nécessite beaucoup de données et beaucoup de puissance de calcul (GPU).",
                "C'est une 'Black Box' : il est difficile d'expliquer pourquoi le réseau a pris cette décision."
            ],
            exercises: [
                {
                    id: 'quiz-ml-dl',
                    question: "Quel composant permet à un réseau de neurones d'apprendre des relations non-linéaires complexes ?",
                    options: ["Les poids", "Le biais", "La fonction d'activation"],
                    correctAnswer: 2,
                    explanation: "Sans fonction d'activation (comme ReLU), empiler des couches revient à faire une simple multiplication géante. La non-linéarité est essentielle."
                }
            ]
        },
        {
            id: 'ml-05',
            part: 'Partie 4 : Algorithmes Avancés',
            title: '5. Arbres de Décision & Random Forest',
            image: "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?q=80&w=2574&auto=format&fit=crop",
            story: "Imaginez un médecin qui diagnostique une maladie. Il pose des questions : 'Avez-vous de la fièvre ?' Si oui, 'Depuis combien de jours ?'. C'est exactement comme ça que fonctionne un arbre de décision : une série de questions binaires.",
            content: `
### Arbre de Décision
C'est un modèle qui ressemble à un organigramme :
- Chaque **nœud** pose une question sur une variable.
- Chaque **branche** est une réponse possible.
- Chaque **feuille** est une prédiction finale.

**Avantages** :
- Très interprétable (on peut dessiner l'arbre).
- Gère les données catégorielles et numériques.
- Pas besoin de normaliser les données.

**Inconvénients** :
- Tendance à l'overfitting (arbre trop profond).
- Instable (un petit changement dans les données peut changer tout l'arbre).

### Random Forest (Forêt Aléatoire)
Pour corriger l'instabilité, on crée **plusieurs arbres** (une forêt) et on fait voter :
- Chaque arbre est entraîné sur un sous-ensemble aléatoire des données.
- La prédiction finale est la moyenne (régression) ou le vote majoritaire (classification).

C'est un exemple de **Ensemble Learning** : combiner plusieurs modèles faibles pour en faire un fort.

\`\`\`python
from sklearn.ensemble import RandomForestClassifier
from sklearn.datasets import load_iris

# Charger les données
iris = load_iris()
X, y = iris.data, iris.target

# Entraîner
rf = RandomForestClassifier(n_estimators=100, max_depth=3)
rf.fit(X, y)

# Prédire
prediction = rf.predict([[5.1, 3.5, 1.4, 0.2]])
print(f"Espèce prédite : {iris.target_names[prediction[0]]}")
\`\`\`
            `,
            summary: [
                "Les arbres sont faciles à comprendre mais instables.",
                "Random Forest améliore la robustesse en moyennant plusieurs arbres.",
                "Très performant en pratique, souvent utilisé en compétition Kaggle."
            ],
            exercises: [
                {
                    id: 'quiz-ml-tree',
                    question: "Pourquoi Random Forest est-il plus robuste qu'un seul arbre de décision ?",
                    options: ["Il est plus rapide", "Il combine plusieurs arbres pour réduire la variance", "Il utilise moins de mémoire"],
                    correctAnswer: 1,
                    explanation: "En moyennant les prédictions de plusieurs arbres entraînés sur des données différentes, Random Forest réduit l'overfitting et la variance."
                }
            ]
        },
        {
            id: 'ml-06',
            part: 'Partie 4 : Algorithmes Avancés',
            title: '6. Clustering : K-Means & DBSCAN',
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop",
            story: "Netflix ne sait pas à l'avance combien de 'types' de spectateurs existent. Mais en analysant les habitudes de visionnage, il peut découvrir des groupes : les fans d'action, les amateurs de comédies romantiques, etc. C'est le clustering.",
            content: `
### K-Means
L'algorithme le plus populaire pour grouper des données.

**Comment ça marche ?**
1.  Choisir K (nombre de clusters).
2.  Placer K centroïdes au hasard.
3.  Assigner chaque point au centroïde le plus proche.
4.  Recalculer les centroïdes (moyenne des points du cluster).
5.  Répéter jusqu'à convergence.

**Exemple : Segmentation Client**
\`\`\`python
from sklearn.cluster import KMeans
import numpy as np

# Données : [Âge, Revenu]
X = np.array([[25, 30000], [30, 40000], [35, 50000], 
              [45, 60000], [50, 70000], [55, 80000]])

# K-Means avec 2 clusters
kmeans = KMeans(n_clusters=2, random_state=42)
kmeans.fit(X)

# Prédire le cluster d'un nouveau client
nouveau_client = [[28, 35000]]
cluster = kmeans.predict(nouveau_client)
print(f"Ce client appartient au cluster {cluster[0]}")
\`\`\`

### DBSCAN (Density-Based)
Contrairement à K-Means, DBSCAN ne nécessite pas de spécifier K.
Il trouve des clusters de **densité** : les zones où les points sont proches.
- Avantage : Détecte les formes complexes et les outliers.
- Inconvénient : Sensible aux paramètres (epsilon, min_samples).
            `,
            summary: [
                "K-Means est simple et rapide mais nécessite de choisir K à l'avance.",
                "DBSCAN est plus flexible et détecte les outliers automatiquement.",
                "Le clustering est non-supervisé : on découvre la structure cachée des données."
            ],
            exercises: [
                {
                    id: 'quiz-ml-cluster',
                    question: "Quelle est la principale limitation de K-Means ?",
                    options: ["Il est trop lent", "Il faut spécifier le nombre de clusters K à l'avance", "Il ne fonctionne que sur des images"],
                    correctAnswer: 1,
                    explanation: "K-Means nécessite de définir K au départ, ce qui peut être difficile si on ne connaît pas la structure des données. Des méthodes comme la 'méthode du coude' aident à choisir K."
                }
            ]
        },
        {
            id: 'ml-07',
            part: 'Partie 5 : Projet Pratique',
            title: '7. Projet : Prédiction de Prix Immobiliers',
            image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=2573&auto=format&fit=crop",
            story: "Vous êtes Data Scientist dans une agence immobilière. Votre mission : créer un modèle qui prédit le prix d'une maison en fonction de ses caractéristiques (surface, nombre de chambres, quartier). C'est parti !",
            content: `
### Étape 1 : Chargement et Exploration
\`\`\`python
import pandas as pd
import numpy as np
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression
from sklearn.ensemble import RandomForestRegressor
from sklearn.metrics import mean_absolute_error, r2_score

# Charger les données (exemple fictif)
df = pd.read_csv('houses.csv')
# Colonnes : Surface, Chambres, Salles_Bain, Quartier, Prix

# Explorer
print(df.head())
print(df.describe())
print(df.isnull().sum())  # Valeurs manquantes ?
\`\`\`

### Étape 2 : Preprocessing
\`\`\`python
# Encoder les variables catégorielles (Quartier)
df = pd.get_dummies(df, columns=['Quartier'], drop_first=True)

# Séparer X (features) et y (target)
X = df.drop('Prix', axis=1)
y = df['Prix']

# Split Train/Test (80/20)
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42
)
\`\`\`

### Étape 3 : Entraînement
\`\`\`python
# Modèle 1 : Régression Linéaire
lr = LinearRegression()
lr.fit(X_train, y_train)
y_pred_lr = lr.predict(X_test)

# Modèle 2 : Random Forest
rf = RandomForestRegressor(n_estimators=100, max_depth=10, random_state=42)
rf.fit(X_train, y_train)
y_pred_rf = rf.predict(X_test)
\`\`\`

### Étape 4 : Évaluation
\`\`\`python
# Métriques
mae_lr = mean_absolute_error(y_test, y_pred_lr)
r2_lr = r2_score(y_test, y_pred_lr)

mae_rf = mean_absolute_error(y_test, y_pred_rf)
r2_rf = r2_score(y_test, y_pred_rf)

print(f"Régression Linéaire - MAE: {mae_lr:.2f}, R²: {r2_lr:.3f}")
print(f"Random Forest - MAE: {mae_rf:.2f}, R²: {r2_rf:.3f}")
\`\`\`

### Étape 5 : Interprétation
- **MAE (Mean Absolute Error)** : Erreur moyenne en euros. Plus c'est bas, mieux c'est.
- **R² (Coefficient de Détermination)** : % de variance expliquée. R²=1 = parfait, R²=0 = inutile.
- **Feature Importance** : Quelles variables sont les plus importantes ?

\`\`\`python
# Importance des features (Random Forest)
importances = rf.feature_importances_
features = X.columns
for f, imp in sorted(zip(features, importances), key=lambda x: x[1], reverse=True):
    print(f"{f}: {imp:.3f}")
\`\`\`
            `,
            summary: [
                "Un projet ML complet suit toujours : Exploration → Preprocessing → Entraînement → Évaluation.",
                "Comparer plusieurs modèles est essentiel (baseline simple vs modèle complexe).",
                "L'interprétation est aussi importante que la performance : comprendre pourquoi le modèle prédit."
            ],
            exercises: [
                {
                    id: 'quiz-ml-project',
                    question: "Pourquoi sépare-t-on les données en Train et Test ?",
                    options: ["Pour accélérer l'entraînement", "Pour vérifier que le modèle généralise sur des données non vues", "Pour économiser de la mémoire"],
                    correctAnswer: 1,
                    explanation: "Le Test Set permet de mesurer la vraie performance du modèle sur des données qu'il n'a jamais vues pendant l'entraînement, évitant ainsi l'overfitting."
                }
            ]
        }
    ]
};
