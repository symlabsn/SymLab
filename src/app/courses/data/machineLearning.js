
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
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop",
            story: "En 1886, Francis Galton étudiait la taille des enfants par rapport à celle de leurs parents. Il a découvert un phénomène fascinant : les enfants de parents très grands tendent à être plus petits que leurs parents (régression vers la moyenne). Pour modéliser cela, il a inventé la régression linéaire, l'algorithme le plus fondamental du Machine Learning.",
            content: `
### 🎯 L'Objectif : Trouver la Meilleure Droite

Imaginez que vous avez des points sur un graphique (par exemple, surface d'une maison vs prix). Vous voulez tracer une droite qui passe **le plus près possible** de tous ces points.

**Équation mathématique** :
$$ y = wx + b $$

Où :
- $x$ : La variable d'entrée (feature) - ex: surface en m²
- $y$ : La variable à prédire (target) - ex: prix en €
- $w$ : Le **poids** (weight) ou pente - mesure l'impact de x sur y
- $b$ : Le **biais** (bias) ou ordonnée à l'origine - valeur de base

**Exemple concret** : Si $w = 3000$ et $b = 50000$, alors une maison de 100m² coûterait :
$$ y = 3000 \\times 100 + 50000 = 350\\,000€ $$

### 📐 La Fonction de Coût (Loss Function)

Comment savoir si notre droite est bonne ? On mesure l'**erreur** !

**MSE (Mean Squared Error)** :
$$ MSE = \\frac{1}{n} \\sum_{i=1}^{n} (y_i - \\hat{y}_i)^2 $$

Où :
- $y_i$ : La vraie valeur (prix réel de la maison i)
- $\\hat{y}_i$ : La prédiction de notre modèle (prix prédit)
- $n$ : Nombre d'exemples

**Pourquoi élever au carré ?**
1. Les erreurs négatives et positives ne s'annulent pas
2. On pénalise plus fortement les grosses erreurs
3. C'est mathématiquement dérivable (important pour l'optimisation)

### ⛰️ Descente de Gradient : L'Algorithme Magique

**Analogie** : Vous êtes en haut d'une montagne dans le brouillard. Vous voulez descendre au point le plus bas (le minimum de l'erreur). Comment faire ?

1. **Tâter le sol** : Calculer la pente (le gradient) autour de vous
2. **Faire un pas** : Avancer dans la direction qui descend le plus
3. **Répéter** : Jusqu'à ce que vous ne puissiez plus descendre

**Formule mathématique** :
$$ w_{nouveau} = w_{ancien} - \\alpha \\frac{\\partial MSE}{\\partial w} $$
$$ b_{nouveau} = b_{ancien} - \\alpha \\frac{\\partial MSE}{\\partial b} $$

Où $\\alpha$ est le **learning rate** (taux d'apprentissage).

### 🎛️ Le Learning Rate : Un Paramètre Critique

- **Trop grand** ($\\alpha = 0.1$) : Vous sautez d'un côté à l'autre de la vallée, vous divergez
- **Trop petit** ($\\alpha = 0.0001$) : Vous avancez à pas de fourmi, ça prend des heures
- **Optimal** ($\\alpha = 0.01$) : Vous convergez rapidement vers le minimum

### 💻 Implémentation en Python (from scratch)

\`\`\`python
import numpy as np
import matplotlib.pyplot as plt

# Données d'exemple : Surface (m²) vs Prix (k€)
X = np.array([50, 60, 70, 80, 90, 100, 110, 120])
y = np.array([150, 180, 200, 220, 250, 270, 290, 320])

# Initialisation aléatoire
w = 0.0
b = 0.0
learning_rate = 0.01
epochs = 1000

# Descente de gradient
for epoch in range(epochs):
    # Prédictions
    y_pred = w * X + b
    
    # Calcul de l'erreur (MSE)
    mse = np.mean((y - y_pred) ** 2)
    
    # Calcul des gradients
    dw = -2 * np.mean(X * (y - y_pred))
    db = -2 * np.mean(y - y_pred)
    
    # Mise à jour des paramètres
    w = w - learning_rate * dw
    b = b - learning_rate * db
    
    if epoch % 100 == 0:
        print(f"Epoch {epoch}: MSE = {mse:.2f}, w = {w:.2f}, b = {b:.2f}")

print(f"\\nModèle final: y = {w:.2f}x + {b:.2f}")

# Prédiction pour une nouvelle maison de 95m²
nouvelle_surface = 95
prix_predit = w * nouvelle_surface + b
print(f"Prix prédit pour 95m²: {prix_predit:.2f}k€")
\`\`\`

### 📊 Avec Scikit-Learn (la vraie vie)

\`\`\`python
from sklearn.linear_model import LinearRegression
import numpy as np

# Données
X = np.array([[50], [60], [70], [80], [90], [100], [110], [120]])
y = np.array([150, 180, 200, 220, 250, 270, 290, 320])

# Créer et entraîner le modèle
model = LinearRegression()
model.fit(X, y)

# Afficher les paramètres
print(f"Poids (w): {model.coef_[0]:.2f}")
print(f"Biais (b): {model.intercept_:.2f}")

# Prédire
prix = model.predict([[95]])
print(f"Prix prédit pour 95m²: {prix[0]:.2f}k€")

# Score R² (coefficient de détermination)
score = model.score(X, y)
print(f"R² score: {score:.3f}")  # 1.0 = parfait, 0.0 = inutile
\`\`\`

### 🔍 Évaluation du Modèle

**R² (Coefficient de Détermination)** :
$$ R^2 = 1 - \\frac{\\sum (y_i - \\hat{y}_i)^2}{\\sum (y_i - \\bar{y})^2} $$

- **R² = 1** : Le modèle explique 100% de la variance (parfait)
- **R² = 0.8** : Le modèle explique 80% de la variance (très bon)
- **R² = 0** : Le modèle n'est pas meilleur qu'une simple moyenne
- **R² < 0** : Le modèle est pire qu'une moyenne (catastrophe)

### ⚠️ Limites de la Régression Linéaire

1. **Hypothèse de linéarité** : Si la relation n'est pas linéaire (ex: exponentielle), ça ne marchera pas
2. **Sensible aux outliers** : Un seul point aberrant peut fausser toute la droite
3. **Multicollinéarité** : Si deux variables sont très corrélées, le modèle devient instable
4. **Extrapolation dangereuse** : Prédire en dehors de la plage des données d'entraînement est risqué
            `,
            summary: [
                "La régression linéaire cherche la droite qui minimise l'erreur quadratique moyenne (MSE).",
                "La descente de gradient est l'algorithme d'optimisation : on suit la pente pour descendre vers le minimum.",
                "Le learning rate est crucial : trop grand = divergence, trop petit = lenteur.",
                "R² mesure la qualité du modèle : 1 = parfait, 0 = inutile.",
                "Attention aux outliers et à l'extrapolation en dehors des données d'entraînement."
            ],
            exercises: [
                {
                    id: 'quiz-ml-2',
                    question: "Si ma *Loss* (Erreur) est proche de 0, cela signifie que :",
                    options: ["Mon modèle est mauvais", "Mon modèle prédit presque parfaitement les données d'entraînement", "Il y a un bug"],
                    correctAnswer: 1,
                    explanation: "Une erreur faible signifie que les prédictions sont très proches des valeurs réelles. Attention cependant à l'overfitting !"
                },
                {
                    id: 'quiz-ml-lr-grad',
                    question: "Que se passe-t-il si le learning rate est trop élevé ?",
                    options: ["L'entraînement est plus rapide", "Le modèle diverge et l'erreur explose", "Le modèle converge lentement"],
                    correctAnswer: 1,
                    explanation: "Un learning rate trop élevé fait 'sauter' les paramètres d'un côté à l'autre du minimum, empêchant la convergence."
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
