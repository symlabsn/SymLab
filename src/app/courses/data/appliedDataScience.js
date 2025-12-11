// Data Science Appliquée - 8 Projets Complets avec Contenu Détaillé
// Curriculum inspiré de WorldQuant University Applied Data Science Lab

export const dataScienceProjects = [
    // ==================================================================================
    // PROJET 1: IMMOBILIER AU MEXIQUE
    // ==================================================================================
    {
        id: 'housing-mexico',
        numero: 1,
        titre: 'Immobilier au Mexique',
        pays: '🇲🇽 Mexique',
        duree: '4-6 heures',
        difficulte: 'Débutant',
        couleur: 'emerald',
        icone: '🏠',

        resume: 'Analysez un dataset de 21 000 propriétés immobilières mexicaines pour déterminer si les prix sont plus influencés par la taille ou par la localisation géographique.',

        // OBJECTIFS D'APPRENTISSAGE
        objectifs: [
            'Importer et nettoyer des données depuis un fichier CSV',
            'Construire des visualisations de données percutantes',
            'Examiner la relation entre deux variables quantitatives',
            'Calculer et interpréter le coefficient de corrélation de Pearson'
        ],

        // COMPÉTENCES DÉTAILLÉES
        competences: {
            ingenierieDonnees: [
                {
                    nom: 'Import CSV avec Pandas',
                    niveau: 'Fondamental',
                    description: 'Utiliser pd.read_csv() avec gestion des encodages (UTF-8, Latin-1), séparateurs et types de données',
                    concepts: ['pd.read_csv()', 'encoding', 'sep', 'dtype', 'parse_dates']
                },
                {
                    nom: 'Nettoyage de données',
                    niveau: 'Fondamental',
                    description: 'Identifier et traiter les valeurs manquantes, doublons et outliers',
                    concepts: ['isna()', 'dropna()', 'fillna()', 'drop_duplicates()', 'IQR method']
                },
                {
                    nom: 'Sélection et filtrage',
                    niveau: 'Fondamental',
                    description: 'Sélectionner des colonnes et lignes avec loc, iloc et conditions booléennes',
                    concepts: ['df.loc[]', 'df.iloc[]', 'boolean indexing', 'query()']
                }
            ],
            analyseDonnees: [
                {
                    nom: 'Statistiques descriptives',
                    niveau: 'Fondamental',
                    description: 'Calculer moyenne, médiane, écart-type et percentiles',
                    concepts: ['mean()', 'median()', 'std()', 'describe()', 'quantile()']
                },
                {
                    nom: 'Corrélation de Pearson',
                    niveau: 'Intermédiaire',
                    description: 'Mesurer la force et la direction de la relation linéaire entre deux variables',
                    concepts: ['corr()', 'coefficient r', 'interprétation', 'p-value']
                },
                {
                    nom: 'Analyse bi-variée',
                    niveau: 'Intermédiaire',
                    description: 'Étudier la relation entre prix, surface et localisation',
                    concepts: ['scatter plot', 'groupby', 'agrégation', 'pivot_table']
                }
            ],
            visualisation: [
                {
                    nom: 'Histogrammes',
                    niveau: 'Fondamental',
                    description: 'Visualiser la distribution des prix immobiliers',
                    concepts: ['plt.hist()', 'bins', 'density', 'alpha']
                },
                {
                    nom: 'Nuages de points (Scatter plots)',
                    niveau: 'Fondamental',
                    description: 'Représenter la relation prix vs surface',
                    concepts: ['plt.scatter()', 'color', 'size', 'alpha', 'regression line']
                },
                {
                    nom: 'Boîtes à moustaches (Box plots)',
                    niveau: 'Intermédiaire',
                    description: 'Comparer les distributions par région géographique',
                    concepts: ['sns.boxplot()', 'IQR', 'outliers', 'comparaison de groupes']
                },
                {
                    nom: 'Cartes de chaleur (Heatmaps)',
                    niveau: 'Intermédiaire',
                    description: 'Visualiser les matrices de corrélation',
                    concepts: ['sns.heatmap()', 'annot', 'cmap', 'mask', 'correlation matrix']
                }
            ]
        },

        // MODULES DU COURS
        modules: [
            {
                id: 1,
                titre: 'Acquisition et exploration des données',
                duree: '45 minutes',
                objectif: 'Charger le dataset et comprendre sa structure',
                contenu: [
                    {
                        type: 'theorie',
                        titre: 'Introduction aux données immobilières',
                        texte: `Le marché immobilier mexicain est l'un des plus dynamiques d'Amérique Latine. 
                        Notre dataset contient 21 000 propriétés avec leurs caractéristiques principales :
                        - Prix en USD
                        - Surface totale et couverte (m²)
                        - Coordonnées géographiques (latitude, longitude)
                        - État et municipalité
                        
                        Question clé : Le prix dépend-il plus de la TAILLE ou de la LOCALISATION ?`
                    },
                    {
                        type: 'code',
                        titre: 'Chargement du dataset',
                        langage: 'python',
                        code: `import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns

# Configuration
plt.style.use('seaborn-v0_8-whitegrid')
sns.set_palette('husl')

# Chargement des données
df = pd.read_csv('mexico_real_estate.csv')

# Aperçu initial
print(f"Dimensions: {df.shape[0]} lignes × {df.shape[1]} colonnes")
print(f"\\nColonnes: {df.columns.tolist()}")
df.head()`
                    },
                    {
                        type: 'code',
                        titre: 'Exploration de la structure',
                        langage: 'python',
                        code: `# Types de données et valeurs manquantes
print(df.info())

# Statistiques descriptives
df.describe()

# Valeurs manquantes par colonne
df.isna().sum().sort_values(ascending=False)`
                    },
                    {
                        type: 'exercice',
                        titre: 'Exercice 1.1',
                        enonce: 'Combien de propriétés ont un prix supérieur à 500 000 USD ?',
                        indice: 'Utilisez une condition booléenne avec df[df["price"] > 500000]',
                        solution: 'len(df[df["price"] > 500000])'
                    }
                ]
            },
            {
                id: 2,
                titre: 'Nettoyage et préparation des données',
                duree: '60 minutes',
                objectif: 'Préparer les données pour l\'analyse',
                contenu: [
                    {
                        type: 'theorie',
                        titre: 'Stratégies de nettoyage',
                        texte: `Le nettoyage des données est crucial pour obtenir des résultats fiables.
                        
                        Problèmes courants à traiter :
                        1. Valeurs manquantes (NaN) - supprimer ou imputer ?
                        2. Doublons - propriétés listées plusieurs fois
                        3. Outliers - prix irréalistes (erreurs de saisie)
                        4. Types incorrects - colonnes numériques stockées comme texte
                        
                        Règle d'or : Documenter chaque transformation !`
                    },
                    {
                        type: 'code',
                        titre: 'Traitement des valeurs manquantes',
                        langage: 'python',
                        code: `# Visualiser les valeurs manquantes
import missingno as msno
msno.matrix(df)
plt.title("Matrice des valeurs manquantes")
plt.show()

# Option 1: Supprimer les lignes avec valeurs manquantes
df_clean = df.dropna(subset=['price', 'surface_total'])

# Option 2: Imputer avec la médiane (pour les surfaces)
df['surface_total'].fillna(df['surface_total'].median(), inplace=True)

print(f"Lignes avant: {len(df)}, après: {len(df_clean)}")`
                    },
                    {
                        type: 'code',
                        titre: 'Détection et traitement des outliers',
                        langage: 'python',
                        code: `# Méthode IQR pour détecter les outliers
Q1 = df['price'].quantile(0.25)
Q3 = df['price'].quantile(0.75)
IQR = Q3 - Q1

# Bornes
lower_bound = Q1 - 1.5 * IQR
upper_bound = Q3 + 1.5 * IQR

# Filtrer les outliers
df_no_outliers = df[(df['price'] >= lower_bound) & (df['price'] <= upper_bound)]

print(f"Outliers supprimés: {len(df) - len(df_no_outliers)}")`
                    },
                    {
                        type: 'code',
                        titre: 'Création de features dérivées',
                        langage: 'python',
                        code: `# Prix au mètre carré
df['price_per_m2'] = df['price'] / df['surface_total']

# Ratio surface couverte / surface totale
df['coverage_ratio'] = df['surface_covered'] / df['surface_total']

# Vérification
df[['price', 'surface_total', 'price_per_m2', 'coverage_ratio']].describe()`
                    }
                ]
            },
            {
                id: 3,
                titre: 'Visualisation exploratoire',
                duree: '90 minutes',
                objectif: 'Créer des graphiques pour comprendre les données',
                contenu: [
                    {
                        type: 'code',
                        titre: 'Distribution des prix',
                        langage: 'python',
                        code: `fig, axes = plt.subplots(1, 2, figsize=(14, 5))

# Histogramme
axes[0].hist(df['price'], bins=50, color='steelblue', edgecolor='white', alpha=0.7)
axes[0].set_xlabel('Prix (USD)')
axes[0].set_ylabel('Fréquence')
axes[0].set_title('Distribution des prix immobiliers au Mexique')
axes[0].axvline(df['price'].median(), color='red', linestyle='--', label=f'Médiane: ${df["price"].median():, .0f}')
axes[0].legend()

# Distribution log
axes[1].hist(np.log10(df['price']), bins = 50, color = 'coral', edgecolor = 'white', alpha = 0.7)
axes[1].set_xlabel('log₁₀(Prix)')
axes[1].set_ylabel('Fréquence')
axes[1].set_title('Distribution logarithmique des prix')

plt.tight_layout()
plt.show()`
                    },
                    {
                        type: 'code',
                        titre: 'Relation Prix vs Surface',
                        langage: 'python',
                        code: `plt.figure(figsize = (10, 6))

# Scatter plot avec régression
sns.regplot(
                            data = df,
                            x = 'surface_total',
                            y = 'price',
                            scatter_kws = { 'alpha': 0.3, 's': 10 },
                            line_kws = { 'color': 'red' }
                        )

plt.xlabel('Surface totale (m²)')
plt.ylabel('Prix (USD)')
plt.title('Relation entre la surface et le prix')

# Ajouter le coefficient de corrélation
r = df['price'].corr(df['surface_total'])
plt.annotate(f'r = {r:.3f}', xy = (0.05, 0.95), xycoords = 'axes fraction',
                            fontsize = 14, bbox = dict(boxstyle = 'round', facecolor = 'wheat'))

plt.show()`
                    },
                    {
                        type: 'code',
                        titre: 'Comparaison par région',
                        langage: 'python',
                        code: `# Top 10 des états par nombre de propriétés
top_states = df['state'].value_counts().head(10).index

plt.figure(figsize = (12, 6))
sns.boxplot(
                                data = df[df['state'].isin(top_states)],
                                x = 'state',
                                y = 'price',
                                palette = 'viridis'
                            )
plt.xticks(rotation = 45, ha = 'right')
plt.xlabel('État')
plt.ylabel('Prix (USD)')
plt.title('Distribution des prix par État (Top 10)')
plt.tight_layout()
plt.show()`
                    },
                    {
                        type: 'code',
                        titre: 'Matrice de corrélation',
                        langage: 'python',
                        code: `# Sélection des variables numériques
numeric_cols = ['price', 'surface_total', 'surface_covered', 'lat', 'lon']
corr_matrix = df[numeric_cols].corr()

# Heatmap
plt.figure(figsize = (8, 6))
sns.heatmap(
                                corr_matrix,
                                annot = True,
                                cmap = 'RdYlBu_r',
                                center = 0,
                                fmt = '.2f',
                                square = True,
                                linewidths = 0.5
                            )
plt.title('Matrice de corrélation')
plt.show()`
                    }
                ]
            },
            {
                id: 4,
                titre: 'Analyse et conclusions',
                duree: '45 minutes',
                objectif: 'Répondre à la question initiale avec des preuves',
                contenu: [
                    {
                        type: 'code',
                        titre: 'Analyse de corrélation finale',
                        langage: 'python',
                        code: `# Corrélations avec le prix
correlations = df[['price', 'surface_total', 'lat', 'lon']].corr()['price'].drop('price')
correlations = correlations.abs().sort_values(ascending = False)

print("Corrélations avec le prix (valeur absolue):")
print(correlations)

# Interprétation
print(f"""
CONCLUSION:
                                -----------
                            Corrélation Prix - Surface: { df['price'].corr(df['surface_total']): .3f }
Corrélation Prix - Latitude: { df['price'].corr(df['lat']): .3f }
Corrélation Prix - Longitude: { df['price'].corr(df['lon']): .3f }

La TAILLE(surface) a une corrélation plus forte avec le prix
que la localisation géographique(lat / lon).
""")`
                    },
    {
        type: 'code',
        titre: 'Visualisation de la conclusion',
        langage: 'python',
        code: `fig, axes = plt.subplots(1, 2, figsize=(14, 5))

# Corrélation par facteur
factors = ['Surface', 'Latitude', 'Longitude']
correlations = [0.65, 0.12, 0.08]  # Valeurs exemple
colors = ['green' if c > 0.5 else 'orange' if c > 0.2 else 'red' for c in correlations]

axes[0].barh(factors, correlations, color=colors)
axes[0].set_xlabel('Corrélation avec le prix')
axes[0].set_title('Facteurs influençant le prix')
axes[0].axvline(0.5, color='gray', linestyle='--', alpha=0.5)

# Prix moyen par région
price_by_state = df.groupby('state')['price'].mean().sort_values(ascending=False).head(10)
axes[1].barh(price_by_state.index, price_by_state.values, color='steelblue')
axes[1].set_xlabel('Prix moyen (USD)')
axes[1].set_title('Prix moyen par État (Top 10)')

plt.tight_layout()
plt.show()`
    },
    {
        type: 'exercice',
        titre: 'Projet final',
        enonce: 'Rédigez un rapport de 500 mots résumant vos découvertes. Incluez: (1) La question de recherche, (2) La méthodologie, (3) Les résultats clés, (4) Les limites de l\'analyse.',
        indice: 'Structurez votre rapport comme un article scientifique'
    }
]
            }
        ],

// DATASET
dataset: {
    source: 'Properati Mexico Real Estate',
        taille: '21 000 propriétés',
            colonnes: ['price', 'surface_total', 'surface_covered', 'lat', 'lon', 'state', 'municipality'],
                format: 'CSV',
                    lien: 'https://example.com/mexico_real_estate.csv'
},

// OUTILS
outils: ['Python 3.x', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Jupyter Notebook'],

    // PRÉREQUIS
    prerequis: [
        'Bases de Python (variables, boucles, fonctions)',
        'Notions de statistiques descriptives',
        'Installation d\'Anaconda ou Python + pip'
    ]
    },

// ==================================================================================
// PROJET 2: APPARTEMENTS À BUENOS AIRES
// ==================================================================================
{
    id: 'apartments-buenos-aires',
        numero: 2,
            titre: 'Appartements à Buenos Aires',
                pays: '🇦🇷 Argentine',
                    duree: '6-8 heures',
                        difficulte: 'Intermédiaire',
                            couleur: 'blue',
                                icone: '🏢',

                                    resume: 'Construisez un modèle de régression linéaire pour prédire les prix des appartements en Argentine. Apprenez à créer des pipelines de données et à réduire l\'overfitting.',

                                        objectifs: [
                                            'Construire un modèle de régression linéaire avec scikit-learn',
                                            'Créer un pipeline de prétraitement des données',
                                            'Imputer les valeurs manquantes automatiquement',
                                            'Encoder les variables catégorielles',
                                            'Détecter et réduire l\'overfitting avec la régularisation'
                                        ],

                                            competences: {
        ingenierieDonnees: [
            {
                nom: 'Pipelines scikit-learn',
                niveau: 'Intermédiaire',
                description: 'Chaîner les transformations de données',
                concepts: ['Pipeline', 'ColumnTransformer', 'make_pipeline']
            },
            {
                nom: 'Imputation automatique',
                niveau: 'Intermédiaire',
                description: 'Remplacer les valeurs manquantes',
                concepts: ['SimpleImputer', 'strategy', 'median', 'most_frequent']
            },
            {
                nom: 'Encodage catégoriel',
                niveau: 'Intermédiaire',
                description: 'Transformer les catégories en nombres',
                concepts: ['OneHotEncoder', 'LabelEncoder', 'handle_unknown']
            }
        ],
            machineLearning: [
                {
                    nom: 'Régression linéaire',
                    niveau: 'Fondamental',
                    description: 'Modéliser la relation linéaire entre features et target',
                    concepts: ['LinearRegression', 'fit()', 'predict()', 'coef_', 'intercept_']
                },
                {
                    nom: 'Train/Test Split',
                    niveau: 'Fondamental',
                    description: 'Séparer les données pour évaluer le modèle',
                    concepts: ['train_test_split', 'test_size', 'random_state', 'stratify']
                },
                {
                    nom: 'Validation croisée',
                    niveau: 'Intermédiaire',
                    description: 'Évaluation robuste avec K-fold',
                    concepts: ['cross_val_score', 'KFold', 'scoring', 'cv']
                },
                {
                    nom: 'Régularisation',
                    niveau: 'Intermédiaire',
                    description: 'Réduire l\'overfitting avec Ridge et Lasso',
                    concepts: ['Ridge', 'Lasso', 'alpha', 'L1', 'L2', 'ElasticNet']
                }
            ],
                evaluation: [
                    {
                        nom: 'MSE et RMSE',
                        niveau: 'Fondamental',
                        description: 'Mesurer l\'erreur moyenne de prédiction',
                        concepts: ['mean_squared_error', 'RMSE = √MSE', 'interprétation']
                    },
                    {
                        nom: 'R² Score',
                        niveau: 'Fondamental',
                        description: 'Coefficient de détermination',
                        concepts: ['r2_score', 'variance expliquée', '0 ≤ R² ≤ 1']
                    },
                    {
                        nom: 'Analyse des résidus',
                        niveau: 'Intermédiaire',
                        description: 'Vérifier les hypothèses du modèle',
                        concepts: ['residuals plot', 'normalité', 'homoscédasticité']
                    }
                ]
    },

    modules: [
        {
            id: 1,
            titre: 'Exploration et préparation',
            duree: '90 minutes',
            objectif: 'Comprendre les données et identifier les transformations nécessaires',
            contenu: [
                {
                    type: 'code',
                    titre: 'Chargement et exploration',
                    langage: 'python',
                    code: `import pandas as pd
import numpy as np
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression, Ridge, Lasso
from sklearn.metrics import mean_squared_error, r2_score

# Charger les données
df = pd.read_csv('buenos_aires_apartments.csv')

# Exploration
print(df.info())
print(df.describe())

# Variables catégorielles vs numériques
categorical_cols = df.select_dtypes(include=['object']).columns.tolist()
numerical_cols = df.select_dtypes(include=['number']).columns.tolist()

print(f"Catégorielles: {categorical_cols}")
print(f"Numériques: {numerical_cols}")`
                }
            ]
        },
        {
            id: 2,
            titre: 'Construction du Pipeline',
            duree: '90 minutes',
            objectif: 'Créer un pipeline de prétraitement automatisé',
            contenu: [
                {
                    type: 'theorie',
                    titre: 'Pourquoi utiliser des Pipelines ?',
                    texte: `Les pipelines scikit-learn offrent plusieurs avantages :
                        
                        1. **Reproductibilité** : Mêmes transformations appliquées uniformément
                        2. **Prévention des fuites** : Pas de data leakage entre train et test
                        3. **Validation croisée** : Transformations intégrées dans le CV
                        4. **Déploiement** : Un seul objet à sauvegarder
                        
                        Structure d'un pipeline :
                        Pipeline = [Préprocesseur → Modèle]`
                },
                {
                    type: 'code',
                    titre: 'Pipeline complet',
                    langage: 'python',
                    code: `from sklearn.pipeline import Pipeline
from sklearn.compose import ColumnTransformer
from sklearn.impute import SimpleImputer
from sklearn.preprocessing import OneHotEncoder, StandardScaler

# Définir les colonnes
numerical_features = ['surface_total', 'rooms', 'bathrooms']
categorical_features = ['neighborhood', 'property_type']

# Transformateur numérique
numerical_transformer = Pipeline(steps=[
    ('imputer', SimpleImputer(strategy='median')),
    ('scaler', StandardScaler())
])

# Transformateur catégoriel
categorical_transformer = Pipeline(steps=[
    ('imputer', SimpleImputer(strategy='constant', fill_value='missing')),
    ('onehot', OneHotEncoder(handle_unknown='ignore', sparse_output=False))
])

# Combiner les transformateurs
preprocessor = ColumnTransformer(
    transformers=[
        ('num', numerical_transformer, numerical_features),
        ('cat', categorical_transformer, categorical_features)
    ]
)

# Pipeline complet avec modèle
model_pipeline = Pipeline(steps=[
    ('preprocessor', preprocessor),
    ('regressor', LinearRegression())
])`
                }
            ]
        },
        {
            id: 3,
            titre: 'Entraînement et évaluation',
            duree: '90 minutes',
            objectif: 'Entraîner le modèle et évaluer ses performances',
            contenu: [
                {
                    type: 'code',
                    titre: 'Entraînement',
                    langage: 'python',
                    code: `# Séparation features / target
X = df.drop('price_usd', axis=1)
y = df['price_usd']

# Split train/test
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42
)

# Entraînement
model_pipeline.fit(X_train, y_train)

# Prédictions
y_train_pred = model_pipeline.predict(X_train)
y_test_pred = model_pipeline.predict(X_test)

# Métriques
print("=== Performances ===")
print(f"Train R²: {r2_score(y_train, y_train_pred):.4f}")
print(f"Test R²: {r2_score(y_test, y_test_pred):.4f}")
print(f"Train RMSE: ${np.sqrt(mean_squared_error(y_train, y_train_pred)):, .0f}")
print(f"Test RMSE: ${np.sqrt(mean_squared_error(y_test, y_test_pred)):,.0f}")`
                    }
                ]
            },
            {
                id: 4,
                titre: 'Réduction de l\'overfitting',
                duree: '60 minutes',
                objectif: 'Améliorer la généralisation avec la régularisation',
                contenu: [
                    {
                        type: 'theorie',
                        titre: 'Overfitting et régularisation',
                        texte: `L'overfitting se produit quand le modèle apprend le "bruit" des données d'entraînement.

            Symptôme : Train R² >> Test R²

        Solutions :
        - Ridge(L2) : Pénalise les grands coefficients → les réduit
        - Lasso(L1) : Pénalise les coefficients → certains deviennent 0(feature selection)
                        
                        Hyperparamètre alpha : Plus alpha est grand, plus la régularisation est forte.`
                    },
                    {
                        type: 'code',
                        titre: 'Comparaison des modèles',
                        langage: 'python',
                        code: `from sklearn.model_selection import cross_val_score

models = {
        'LinearRegression': LinearRegression(),
            'Ridge (α=1)': Ridge(alpha = 1),
                'Ridge (α=10)': Ridge(alpha = 10),
                    'Lasso (α=1)': Lasso(alpha = 1),
}

    results = []
    for name, model in models.items():
        pipeline = Pipeline([
            ('preprocessor', preprocessor),
            ('regressor', model)
        ])

    scores = cross_val_score(pipeline, X_train, y_train, cv = 5, scoring = 'r2')
    results.append({
        'Modèle': name,
        'R² moyen': scores.mean(),
        'Écart-type': scores.std()
    })

    pd.DataFrame(results).sort_values('R² moyen', ascending = False)`
                    }
                ]
            }
        ],
        
        dataset: {
            source: 'Properati Argentina',
            taille: '15 000+ appartements',
            colonnes: ['price_usd', 'surface_total', 'rooms', 'bathrooms', 'neighborhood', 'property_type'],
            format: 'CSV'
        },
        
        outils: ['Python', 'Scikit-learn', 'Pandas', 'NumPy', 'Matplotlib'],
        
        prerequis: [
            'Projet 1 complété',
            'Notions de régression linéaire',
            'Compréhension des concepts train/test'
        ]
    },

    // ==================================================================================
    // PROJET 3: QUALITÉ DE L'AIR À NAIROBI
    // ==================================================================================
    {
        id: 'air-quality-nairobi',
        numero: 3,
        titre: 'Qualité de l\'Air à Nairobi',
        pays: '🇰🇪 Kenya',
        duree: '6-8 heures',
        difficulte: 'Intermédiaire',
        couleur: 'green',
        icone: '🌍',
        
        resume: 'Construisez un modèle ARMA de séries temporelles pour prédire les niveaux de particules fines (PM2.5) à Nairobi. Apprenez à extraire des données depuis MongoDB.',
        
        objectifs: [
            'Extraire des données depuis MongoDB avec pymongo',
            'Analyser et visualiser des séries temporelles',
            'Tester la stationnarité avec le test ADF',
            'Construire un modèle ARMA/ARIMA',
            'Optimiser les hyperparamètres (p, q)'
        ],
        
        competences: {
            ingenierieDonnees: [
                {
                    nom: 'MongoDB et pymongo',
                    niveau: 'Intermédiaire',
                    description: 'Connexion et requêtes NoSQL',
                    concepts: ['MongoClient', 'find()', 'projection', 'aggregation']
                },
                {
                    nom: 'Manipulation temporelle',
                    niveau: 'Intermédiaire',
                    description: 'Index datetime et resampling',
                    concepts: ['DatetimeIndex', 'resample()', 'asfreq()', 'interpolate()']
                }
            ],
            seriesTemporelles: [
                {
                    nom: 'Stationnarité',
                    niveau: 'Intermédiaire',
                    description: 'Test ADF et différenciation',
                    concepts: ['adfuller', 'p-value', 'diff()', 'd parameter']
                },
                {
                    nom: 'ACF et PACF',
                    niveau: 'Intermédiaire',
                    description: 'Visualiser l\'autocorrélation',
                    concepts: ['plot_acf', 'plot_pacf', 'lag', 'confidence interval']
                },
                {
                    nom: 'Modèle ARMA/ARIMA',
                    niveau: 'Avancé',
                    description: 'AutoRegressive Moving Average',
                    concepts: ['ARIMA', 'order=(p,d,q)', 'AR', 'MA', 'fit()', 'forecast()']
                }
            ]
        },
        
        modules: [
            {
                id: 1,
                titre: 'Extraction MongoDB',
                duree: '60 minutes',
                objectif: 'Connecter et extraire les données de pollution',
                contenu: [
                    {
                        type: 'code',
                        titre: 'Connexion et extraction',
                        langage: 'python',
                        code: `from pymongo import MongoClient
import pandas as pd

# Connexion
    client = MongoClient("mongodb://localhost:27017/")
    db = client["air_quality"]
    collection = db["nairobi_sensors"]

# Extraction
    cursor = collection.find(
        { "city": "Nairobi" },
        { "_id": 0, "timestamp": 1, "pm2_5": 1, "pm10": 1, "temperature": 1 }
    )

# Conversion en DataFrame
    df = pd.DataFrame(list(cursor))
    df['timestamp'] = pd.to_datetime(df['timestamp'])
    df.set_index('timestamp', inplace = True)
    df.sort_index(inplace = True)

    print(f"Période: {df.index.min()} → {df.index.max()}")
    df.head()`
                    }
                ]
            },
            {
                id: 2,
                titre: 'Analyse des séries temporelles',
                duree: '90 minutes',
                objectif: 'Comprendre les patterns et tester la stationnarité',
                contenu: [
                    {
                        type: 'code',
                        titre: 'Test de stationnarité (ADF)',
                        langage: 'python',
                        code: `from statsmodels.tsa.stattools import adfuller

def test_stationarity(series, name = "Series"):
    result = adfuller(series.dropna())
    print(f"=== Test ADF: {name} ===")
    print(f"Statistique ADF: {result[0]:.4f}")
    print(f"P-value: {result[1]:.4f}")
    print(f"Stationnaire: {'OUI' if result[1] < 0.05 else 'NON'}")
    return result[1] < 0.05

# Test sur PM2.5
    is_stationary = test_stationarity(df['pm2_5'], "PM2.5")

# Si non stationnaire, différencier
    if not is_stationary:
        df['pm2_5_diff'] = df['pm2_5'].diff()
    test_stationarity(df['pm2_5_diff'].dropna(), "PM2.5 (différenciée)")`
                    }
                ]
            },
            {
                id: 3,
                titre: 'Modélisation ARMA',
                duree: '90 minutes',
                objectif: 'Construire et évaluer le modèle',
                contenu: [
                    {
                        type: 'code',
                        titre: 'Modèle ARIMA',
                        langage: 'python',
                        code: `from statsmodels.tsa.arima.model import ARIMA
        from sklearn.metrics import mean_absolute_error

# Split temporel
    train_size = int(len(df) * 0.8)
    train, test = df['pm2_5'][:train_size], df['pm2_5'][train_size:]

# Modèle ARIMA(2, 1, 1)
    model = ARIMA(train, order = (2, 1, 1))
    results = model.fit()

# Résumé
    print(results.summary())

# Prévisions
    forecast = results.forecast(steps = len(test))
    mae = mean_absolute_error(test, forecast)
    print(f"\\nMAE sur le test set: {mae:.2f} µg/m³")`
                    }
                ]
            },
            {
                id: 4,
                titre: 'Optimisation des hyperparamètres',
                duree: '60 minutes',
                objectif: 'Trouver les meilleurs paramètres (p, d, q)',
                contenu: [
                    {
                        type: 'code',
                        titre: 'Grid Search sur (p, q)',
                        langage: 'python',
                        code: `import itertools
import warnings
warnings.filterwarnings('ignore')

# Grille de paramètres
    p_values = range(0, 4)
    d_values = [0, 1]
    q_values = range(0, 4)

    best_aic = float('inf')
    best_order = None

    for p, d, q in itertools.product(p_values, d_values, q_values):
        try:
    model = ARIMA(train, order = (p, d, q))
    results = model.fit()
    if results.aic < best_aic:
        best_aic = results.aic
    best_order = (p, d, q)
    except:
    continue

    print(f"Meilleur ordre: {best_order}")
    print(f"AIC: {best_aic:.2f}")

# Modèle final
    final_model = ARIMA(train, order = best_order).fit()
    print(final_model.summary())`
                    }
                ]
            }
        ],
        
        dataset: {
            source: 'Capteurs de qualité d\'air Nairobi',
            taille: '2+ années de mesures horaires',
            colonnes: ['timestamp', 'pm2_5', 'pm10', 'temperature', 'humidity'],
            format: 'MongoDB'
        },
        
        outils: ['Python', 'pymongo', 'statsmodels', 'Pandas', 'Matplotlib'],
        
        prerequis: [
            'Projets 1-2 complétés',
            'Notions de bases de données',
            'Bases des séries temporelles'
        ]
    },

    // ==================================================================================
    // PROJET 4-8 : STRUCTURE SIMPLIFIÉE (même format)
    // ==================================================================================
    {
        id: 'earthquake-nepal',
        numero: 4,
        titre: 'Séisme au Népal',
        pays: '🇳🇵 Népal',
        duree: '8-10 heures',
        difficulte: 'Intermédiaire',
        couleur: 'orange',
        icone: '🏚️',
        resume: 'Classification des dégâts sismiques avec régression logistique et arbres de décision. Explorez les biais dans les données.',
        
        objectifs: [
            'Extraire des données depuis SQLite',
            'Construire des modèles de classification',
            'Analyser les biais discriminatoires',
            'Évaluer l\'équité des modèles'
        ],
        
        competences: {
            ingenierieDonnees: [
                { nom: 'SQLite et SQL', niveau: 'Intermédiaire', description: 'Requêtes SQL avec sqlite3', concepts: ['sqlite3.connect()', 'pd.read_sql()', 'JOIN', 'WHERE'] }
            ],
            machineLearning: [
                { nom: 'Régression logistique', niveau: 'Intermédiaire', description: 'Classification binaire et multiclasse', concepts: ['LogisticRegression', 'multiclass', 'predict_proba()'] },
                { nom: 'Arbres de décision', niveau: 'Intermédiaire', description: 'Modèle interprétable', concepts: ['DecisionTreeClassifier', 'max_depth', 'feature_importances_'] }
            ],
            ethique: [
                { nom: 'Détection de biais', niveau: 'Avancé', description: 'Identifier les discriminations', concepts: ['demographic parity', 'equalized odds', 'fairness metrics'] }
            ]
        },
        
        modules: [
            { id: 1, titre: 'Extraction SQLite', duree: '60 minutes', objectif: 'Connecter et extraire les données' },
            { id: 2, titre: 'Préparation des données', duree: '90 minutes', objectif: 'Encoder et équilibrer' },
            { id: 3, titre: 'Modèles de classification', duree: '120 minutes', objectif: 'Entraîner et comparer' },
            { id: 4, titre: 'Analyse des biais', duree: '60 minutes', objectif: 'Évaluer l\'équité' }
        ],
        
        dataset: { source: 'Nepal Earthquake Open Data', taille: '260 000+ bâtiments', format: 'SQLite' },
        outils: ['Python', 'Scikit-learn', 'SQLite', 'Pandas'],
        prerequis: ['Projets 1-3 complétés']
    },
    
    {
        id: 'bankruptcy-poland',
        numero: 5,
        titre: 'Faillite en Pologne',
        pays: '🇵🇱 Pologne',
        duree: '8-10 heures',
        difficulte: 'Avancé',
        couleur: 'red',
        icone: '📉',
        resume: 'Prédisez les faillites d\'entreprises avec Random Forest et Gradient Boosting. Gérez les données déséquilibrées.',
        
        objectifs: [
            'Maîtriser la ligne de commande Linux',
            'Gérer les classes déséquilibrées avec SMOTE',
            'Construire des modèles d\'ensemble',
            'Comprendre precision vs recall'
        ],
        
        competences: {
            ingenierieDonnees: [
                { nom: 'Linux CLI', niveau: 'Intermédiaire', description: 'Navigation et manipulation', concepts: ['cd', 'ls', 'cat', 'head', 'grep', 'pipe'] },
                { nom: 'Rééchantillonnage', niveau: 'Avancé', description: 'SMOTE et undersampling', concepts: ['SMOTE', 'RandomUnderSampler', 'imblearn'] }
            ],
            machineLearning: [
                { nom: 'Random Forest', niveau: 'Avancé', description: 'Ensemble de décision', concepts: ['RandomForestClassifier', 'n_estimators', 'feature_importances_'] },
                { nom: 'Gradient Boosting', niveau: 'Avancé', description: 'Boosting séquentiel', concepts: ['GradientBoostingClassifier', 'learning_rate', 'n_estimators'] }
            ],
            evaluation: [
                { nom: 'Precision/Recall', niveau: 'Avancé', description: 'Métriques pour classes déséquilibrées', concepts: ['precision_score', 'recall_score', 'f1_score', 'trade-off'] },
                { nom: 'Courbe ROC', niveau: 'Avancé', description: 'Évaluation globale', concepts: ['roc_curve', 'roc_auc_score', 'seuil de décision'] }
            ]
        },
        
        modules: [
            { id: 1, titre: 'Linux CLI', duree: '60 minutes', objectif: 'Naviguer en ligne de commande' },
            { id: 2, titre: 'Gestion du déséquilibre', duree: '90 minutes', objectif: 'Appliquer SMOTE' },
            { id: 3, titre: 'Modèles d\'ensemble', duree: '120 minutes', objectif: 'Entraîner et tuner' },
            { id: 4, titre: 'Métriques métier', duree: '60 minutes', objectif: 'Choisir le bon seuil' }
        ],
        
        dataset: { source: 'Polish Bankruptcy Dataset', taille: '10 000+ entreprises', format: 'CSV' },
        outils: ['Python', 'Scikit-learn', 'imbalanced-learn', 'Linux Bash'],
        prerequis: ['Projets 1-4 complétés']
    },
    
    {
        id: 'customer-segmentation-us',
        numero: 6,
        titre: 'Segmentation Client aux USA',
        pays: '🇺🇸 États-Unis',
        duree: '8-10 heures',
        difficulte: 'Avancé',
        couleur: 'purple',
        icone: '👥',
        resume: 'Segmentez les consommateurs américains avec K-Means et visualisez avec PCA. Créez un dashboard interactif.',
        
        objectifs: [
            'Construire un modèle K-Means',
            'Appliquer PCA pour la visualisation',
            'Créer un dashboard avec Plotly Dash',
            'Interpréter les segments clients'
        ],
        
        competences: {
            apprentissageNonSupervise: [
                { nom: 'K-Means', niveau: 'Avancé', description: 'Clustering par centroïdes', concepts: ['KMeans', 'n_clusters', 'inertia_', 'labels_'] },
                { nom: 'Méthode du coude', niveau: 'Intermédiaire', description: 'Choisir K optimal', concepts: ['elbow method', 'inertia', 'silhouette_score'] }
            ],
            reductionDimensionnalite: [
                { nom: 'PCA', niveau: 'Avancé', description: 'Analyse en Composantes Principales', concepts: ['PCA', 'n_components', 'explained_variance_ratio_'] }
            ],
            developpementWeb: [
                { nom: 'Plotly Dash', niveau: 'Avancé', description: 'Dashboards interactifs Python', concepts: ['Dash', 'dcc', 'html', 'callback', 'Input', 'Output'] }
            ]
        },
        
        modules: [
            { id: 1, titre: 'Préparation des données', duree: '60 minutes', objectif: 'Normaliser et explorer' },
            { id: 2, titre: 'Clustering K-Means', duree: '90 minutes', objectif: 'Segmenter les clients' },
            { id: 3, titre: 'PCA et Visualisation', duree: '90 minutes', objectif: 'Réduire et visualiser' },
            { id: 4, titre: 'Dashboard Plotly Dash', duree: '120 minutes', objectif: 'Créer l\'interface' }
        ],
        
        dataset: { source: 'US Consumer Survey', taille: '50 000+ consommateurs', format: 'CSV' },
        outils: ['Python', 'Scikit-learn', 'Plotly', 'Dash'],
        prerequis: ['Projets 1-5 complétés']
    },
    
    {
        id: 'ab-testing-wqu',
        numero: 7,
        titre: 'Test A/B WorldQuant',
        pays: '🌐 Global',
        duree: '8-10 heures',
        difficulte: 'Avancé',
        couleur: 'indigo',
        icone: '📧',
        resume: 'Menez un test Chi-carré pour évaluer l\'effet des emails sur les inscriptions. Créez une application three-tiered.',
        
        objectifs: [
            'Concevoir une expérience A/B',
            'Effectuer un test Chi-carré',
            'Construire des classes ETL Python',
            'Implémenter une architecture three-tiered'
        ],
        
        competences: {
            statistiques: [
                { nom: 'Test Chi-carré', niveau: 'Avancé', description: 'Test d\'indépendance', concepts: ['chi2_contingency', 'contingency table', 'p-value', 'alpha'] },
                { nom: 'Design d\'expérience', niveau: 'Intermédiaire', description: 'Groupes contrôle et test', concepts: ['randomization', 'sample size', 'power'] }
            ],
            geniieLogiciel: [
                { nom: 'Classes Python', niveau: 'Avancé', description: 'Programmation orientée objet', concepts: ['class', '__init__', 'methods', 'encapsulation'] },
                { nom: 'ETL Pipeline', niveau: 'Avancé', description: 'Extract Transform Load', concepts: ['Extractor', 'Transformer', 'Loader', 'orchestration'] },
                { nom: 'Architecture three-tiered', niveau: 'Avancé', description: 'Séparation des couches', concepts: ['data layer', 'business layer', 'presentation layer'] }
            ]
        },
        
        modules: [
            { id: 1, titre: 'Design de l\'expérience', duree: '60 minutes', objectif: 'Définir le test A/B' },
            { id: 2, titre: 'Classes ETL Python', duree: '120 minutes', objectif: 'Construire le pipeline' },
            { id: 3, titre: 'Analyse statistique', duree: '90 minutes', objectif: 'Test Chi-carré' },
            { id: 4, titre: 'Application Three-Tiered', duree: '90 minutes', objectif: 'Intégrer les couches' }
        ],
        
        dataset: { source: 'WQU Enrollment Experiment', taille: '10 000+ prospects', format: 'SQLite' },
        outils: ['Python', 'SciPy', 'SQLite', 'Flask/Dash'],
        prerequis: ['Projets 1-6 complétés']
    },
    
    {
        id: 'volatility-india',
        numero: 8,
        titre: 'Volatilité en Inde',
        pays: '🇮🇳 Inde',
        duree: '10-12 heures',
        difficulte: 'Expert',
        couleur: 'amber',
        icone: '📈',
        resume: 'Créez un modèle GARCH pour prédire la volatilité boursière et construisez votre propre API REST.',
        
        objectifs: [
            'Acquérir des données via API financière',
            'Construire un modèle GARCH',
            'Stocker les données dans SQLite',
            'Créer une API REST avec FastAPI'
        ],
        
        competences: {
            seriesTemporelles: [
                { nom: 'GARCH', niveau: 'Expert', description: 'Modélisation de volatilité', concepts: ['arch_model', 'GARCH(1,1)', 'omega', 'alpha', 'beta'] },
                { nom: 'Rendements financiers', niveau: 'Avancé', description: 'Log returns et volatilité', concepts: ['log returns', 'rolling volatility', 'annualization'] }
            ],
            ingenierieDonnees: [
                { nom: 'API Finance', niveau: 'Avancé', description: 'Acquisition de données', concepts: ['yfinance', 'requests', 'rate limiting'] },
                { nom: 'Stockage SQLite', niveau: 'Intermédiaire', description: 'Base de données locale', concepts: ['sqlite3', 'to_sql()', 'read_sql()'] }
            ],
            developpementAPI: [
                { nom: 'FastAPI', niveau: 'Avancé', description: 'Création d\'endpoints REST', concepts: ['FastAPI', 'Pydantic', 'endpoints', 'uvicorn'] },
                { nom: 'Documentation API', niveau: 'Intermédiaire', description: 'Swagger/OpenAPI', concepts: ['docs', 'schema', 'response_model'] }
            ]
        },
        
        modules: [
            { id: 1, titre: 'Acquisition via API', duree: '90 minutes', objectif: 'Télécharger les données' },
            { id: 2, titre: 'Analyse de volatilité', duree: '90 minutes', objectif: 'Calculer et visualiser' },
            { id: 3, titre: 'Modélisation GARCH', duree: '120 minutes', objectif: 'Entraîner et prévoir' },
            { id: 4, titre: 'API de prédiction', duree: '120 minutes', objectif: 'Déployer FastAPI' }
        ],
        
        dataset: { source: 'Yahoo Finance API (Nifty 50)', taille: '5+ années de données', format: 'API → SQLite' },
        outils: ['Python', 'arch', 'FastAPI', 'yfinance', 'SQLite'],
        prerequis: ['Tous les projets précédents complétés']
    }
];

// Fonction pour obtenir un projet par ID
export const getProjetById = (id) => {
    return dataScienceProjects.find(p => p.id === id);
};

// Statistiques globales
export const statsDataScience = {
    nombreProjets: 8,
    nombrePays: 8,
    duréeTotale: '60-80 heures',
    competencesCles: [
        'Python & Pandas',
        'Scikit-learn',
        'Séries temporelles',
        'Machine Learning',
        'SQL & NoSQL',
        'APIs & Dashboards'
    ],
    niveaux: {
        debutant: 1,
        intermediaire: 4,
        avance: 2,
        expert: 1
    }
};
