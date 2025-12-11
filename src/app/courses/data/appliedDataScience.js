// Cours Applied Data Science - 8 Projets Complets avec Compétences Détaillées
// Basé sur le curriculum WorldQuant University Applied Data Science Lab

export const appliedDataScienceProjects = [
    // ==================================================================================
    // PROJECT 1: HOUSING IN MEXICO
    // ==================================================================================
    {
        id: 'housing-mexico',
        number: 1,
        title: 'Housing in Mexico',
        titleFr: 'Immobilier au Mexique',
        country: '🇲🇽',
        flag: 'Mexico',
        duration: '4-6 heures',
        difficulty: 'Débutant',
        color: 'emerald',
        icon: '🏠',
        image: '/images/projects/housing-mexico.jpg',
        description: 'Analysez 21 000 propriétés pour déterminer si les prix immobiliers sont plus influencés par la taille ou la localisation.',
        descriptionEn: 'Analyze 21,000 properties to determine if real estate prices are influenced more by property size or location.',

        // Objectifs d'apprentissage
        objectives: [
            'Importer et nettoyer des données à partir de fichiers CSV',
            'Construire des visualisations de données expressives',
            'Examiner la relation entre deux variables',
            'Calculer et interpréter la corrélation'
        ],

        // Compétences techniques détaillées
        skills: {
            dataEngineering: [
                { name: 'Import CSV', level: 'Fondamental', description: 'Utiliser pandas.read_csv() avec gestion des encodages' },
                { name: 'Nettoyage de données', level: 'Fondamental', description: 'Gérer les valeurs manquantes, doublons et outliers' },
                { name: 'Sélection de colonnes', level: 'Fondamental', description: 'Filtrer et sélectionner les features pertinentes' }
            ],
            dataAnalysis: [
                { name: 'Statistiques descriptives', level: 'Fondamental', description: 'Calculer mean, median, std avec pandas' },
                { name: 'Corrélation', level: 'Intermédiaire', description: 'Coefficient de Pearson et interprétation' },
                { name: 'Analyse bi-variée', level: 'Intermédiaire', description: 'Relation entre prix, taille et localisation' }
            ],
            visualization: [
                { name: 'Histogrammes', level: 'Fondamental', description: 'Distribution des prix avec matplotlib' },
                { name: 'Scatter plots', level: 'Fondamental', description: 'Nuages de points prix vs taille' },
                { name: 'Box plots', level: 'Intermédiaire', description: 'Comparaison par région géographique' },
                { name: 'Heatmaps', level: 'Intermédiaire', description: 'Matrices de corrélation avec seaborn' }
            ],
            tools: ['Python', 'Pandas', 'Matplotlib', 'Seaborn', 'Jupyter Notebook']
        },

        // Modules du cours
        modules: [
            {
                id: 1,
                title: 'Acquisition des données',
                duration: '45 min',
                content: [
                    'Télécharger et charger le dataset immobilier',
                    'Explorer la structure des données avec .info() et .describe()',
                    'Identifier les types de variables (numériques vs catégorielles)'
                ]
            },
            {
                id: 2,
                title: 'Nettoyage et préparation',
                duration: '60 min',
                content: [
                    'Traiter les valeurs manquantes (dropna vs fillna)',
                    'Supprimer les doublons',
                    'Convertir les types de données',
                    'Créer des features dérivées (prix/m²)'
                ]
            },
            {
                id: 3,
                title: 'Visualisation exploratoire',
                duration: '90 min',
                content: [
                    'Créer des histogrammes de distribution',
                    'Construire des scatter plots interactifs',
                    'Analyser les box plots par région',
                    'Générer des heatmaps de corrélation'
                ]
            },
            {
                id: 4,
                title: 'Analyse et conclusions',
                duration: '45 min',
                content: [
                    'Calculer les coefficients de corrélation',
                    'Interpréter les résultats statistiques',
                    'Répondre à la question : Taille vs Localisation ?',
                    'Rédiger un rapport de synthèse'
                ]
            }
        ],

        // Dataset info
        dataset: {
            source: 'Properati Mexico Real Estate',
            size: '21,000 propriétés',
            features: ['price', 'surface_total', 'surface_covered', 'lat', 'lon', 'state', 'municipality'],
            format: 'CSV'
        },

        // Code samples
        codeSnippets: [
            {
                title: 'Chargement des données',
                language: 'python',
                code: `import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns

# Charger le dataset
df = pd.read_csv('mexico_real_estate.csv')

# Aperçu des données
print(df.shape)
df.head()`
            },
            {
                title: 'Calcul de corrélation',
                language: 'python',
                code: `# Corrélation entre prix et surface
correlation = df['price'].corr(df['surface_total'])
print(f"Corrélation prix/surface: {correlation:.3f}")

# Matrice de corrélation complète
corr_matrix = df[['price', 'surface_total', 'lat', 'lon']].corr()
sns.heatmap(corr_matrix, annot=True, cmap='coolwarm')`
            }
        ]
    },

    // ==================================================================================
    // PROJECT 2: APARTMENT SALES IN BUENOS AIRES
    // ==================================================================================
    {
        id: 'apartments-buenos-aires',
        number: 2,
        title: 'Apartment Sales in Buenos Aires',
        titleFr: 'Ventes d\'Appartements à Buenos Aires',
        country: '🇦🇷',
        flag: 'Argentina',
        duration: '6-8 heures',
        difficulty: 'Intermédiaire',
        color: 'blue',
        icon: '🏢',
        description: 'Construisez un modèle de régression linéaire pour prédire les prix des appartements en Argentine.',
        descriptionEn: 'Build a linear regression model to predict apartment prices in Argentina.',

        objectives: [
            'Construire un modèle de régression linéaire',
            'Créer un pipeline de données pour imputer les valeurs manquantes',
            'Encoder les variables catégorielles',
            'Améliorer les performances en réduisant l\'overfitting'
        ],

        skills: {
            dataEngineering: [
                { name: 'Pipelines scikit-learn', level: 'Intermédiaire', description: 'Construire des Pipeline et ColumnTransformer' },
                { name: 'Imputation', level: 'Intermédiaire', description: 'SimpleImputer pour valeurs manquantes' },
                { name: 'Encodage catégoriel', level: 'Intermédiaire', description: 'OneHotEncoder, LabelEncoder' }
            ],
            machineLearning: [
                { name: 'Régression linéaire', level: 'Fondamental', description: 'LinearRegression de scikit-learn' },
                { name: 'Train/Test Split', level: 'Fondamental', description: 'Séparation des données' },
                { name: 'Cross-validation', level: 'Intermédiaire', description: 'Validation croisée K-fold' },
                { name: 'Régularisation', level: 'Intermédiaire', description: 'Ridge et Lasso pour réduire overfitting' }
            ],
            evaluation: [
                { name: 'MSE/RMSE', level: 'Fondamental', description: 'Mean Squared Error' },
                { name: 'R² Score', level: 'Fondamental', description: 'Coefficient de détermination' },
                { name: 'Residual Analysis', level: 'Intermédiaire', description: 'Analyse des résidus' }
            ],
            tools: ['Python', 'Scikit-learn', 'Pandas', 'NumPy', 'Matplotlib']
        },

        modules: [
            {
                id: 1,
                title: 'Exploration des données',
                duration: '60 min',
                content: [
                    'Charger le dataset Buenos Aires',
                    'Analyser les distributions de prix',
                    'Identifier les features prédictives'
                ]
            },
            {
                id: 2,
                title: 'Pipeline de prétraitement',
                duration: '90 min',
                content: [
                    'Créer un Pipeline scikit-learn',
                    'Implémenter SimpleImputer',
                    'Appliquer OneHotEncoder aux catégories',
                    'Combiner avec ColumnTransformer'
                ]
            },
            {
                id: 3,
                title: 'Modélisation',
                duration: '90 min',
                content: [
                    'Entraîner LinearRegression',
                    'Évaluer avec train_test_split',
                    'Interpréter les coefficients',
                    'Visualiser les prédictions vs réalité'
                ]
            },
            {
                id: 4,
                title: 'Amélioration du modèle',
                duration: '60 min',
                content: [
                    'Détecter l\'overfitting',
                    'Appliquer Ridge Regression',
                    'Comparer les performances',
                    'Choisir le meilleur modèle'
                ]
            }
        ],

        dataset: {
            source: 'Properati Argentina',
            size: '15,000+ appartements',
            features: ['price_usd', 'surface_total', 'rooms', 'bathrooms', 'neighborhood', 'property_type'],
            format: 'CSV'
        },

        codeSnippets: [
            {
                title: 'Pipeline de prétraitement',
                language: 'python',
                code: `from sklearn.pipeline import Pipeline
from sklearn.compose import ColumnTransformer
from sklearn.impute import SimpleImputer
from sklearn.preprocessing import OneHotEncoder

# Définir les transformations
numeric_transformer = Pipeline([
    ('imputer', SimpleImputer(strategy='median'))
])

categorical_transformer = Pipeline([
    ('imputer', SimpleImputer(strategy='constant', fill_value='missing')),
    ('onehot', OneHotEncoder(handle_unknown='ignore'))
])

preprocessor = ColumnTransformer([
    ('num', numeric_transformer, ['surface_total', 'rooms']),
    ('cat', categorical_transformer, ['neighborhood'])
])`
            }
        ]
    },

    // ==================================================================================
    // PROJECT 3: AIR QUALITY IN NAIROBI
    // ==================================================================================
    {
        id: 'air-quality-nairobi',
        number: 3,
        title: 'Air Quality in Nairobi',
        titleFr: 'Qualité de l\'Air à Nairobi',
        country: '🇰🇪',
        flag: 'Kenya',
        duration: '6-8 heures',
        difficulty: 'Intermédiaire',
        color: 'green',
        icon: '🌍',
        description: 'Construisez un modèle ARMA pour prédire les niveaux de particules fines au Kenya.',
        descriptionEn: 'Build an ARMA time-series model to predict particulate matter levels in Kenya.',

        objectives: [
            'Construire un modèle de série temporelle ARMA',
            'Extraire des données depuis MongoDB avec pymongo',
            'Améliorer les performances par hyperparameter tuning',
            'Analyser et prévoir la pollution atmosphérique'
        ],

        skills: {
            dataEngineering: [
                { name: 'MongoDB', level: 'Intermédiaire', description: 'Connexion et requêtes avec pymongo' },
                { name: 'Séries temporelles', level: 'Intermédiaire', description: 'Indexation datetime et resampling' },
                { name: 'Feature engineering temporel', level: 'Intermédiaire', description: 'Lag features, rolling means' }
            ],
            timeSeries: [
                { name: 'Stationnarité', level: 'Intermédiaire', description: 'Test ADF, différenciation' },
                { name: 'ACF/PACF', level: 'Intermédiaire', description: 'Autocorrelation analysis' },
                { name: 'ARMA/ARIMA', level: 'Avancé', description: 'Modélisation AutoRegressive Moving Average' },
                { name: 'Prévision', level: 'Intermédiaire', description: 'Forecast et intervalles de confiance' }
            ],
            optimization: [
                { name: 'Grid Search', level: 'Intermédiaire', description: 'Recherche des meilleurs paramètres p, q' },
                { name: 'AIC/BIC', level: 'Intermédiaire', description: 'Critères de sélection de modèle' }
            ],
            tools: ['Python', 'statsmodels', 'pymongo', 'MongoDB', 'Pandas', 'Matplotlib']
        },

        modules: [
            {
                id: 1,
                title: 'Connexion MongoDB',
                duration: '45 min',
                content: [
                    'Configurer pymongo',
                    'Se connecter à la base de données',
                    'Extraire les mesures de pollution',
                    'Convertir en DataFrame pandas'
                ]
            },
            {
                id: 2,
                title: 'Analyse des séries temporelles',
                duration: '90 min',
                content: [
                    'Visualiser les tendances PM2.5',
                    'Tester la stationnarité (ADF test)',
                    'Appliquer la différenciation si nécessaire',
                    'Analyser ACF et PACF'
                ]
            },
            {
                id: 3,
                title: 'Modélisation ARMA',
                duration: '90 min',
                content: [
                    'Choisir les ordres p et q',
                    'Entraîner le modèle ARMA',
                    'Évaluer les résidus',
                    'Générer des prévisions'
                ]
            },
            {
                id: 4,
                title: 'Optimisation',
                duration: '45 min',
                content: [
                    'Implémenter Grid Search sur (p, q)',
                    'Comparer AIC/BIC',
                    'Sélectionner le modèle optimal',
                    'Visualiser les prévisions finales'
                ]
            }
        ],

        dataset: {
            source: 'Nairobi Air Quality Sensors',
            size: 'Mesures horaires sur 2+ ans',
            features: ['timestamp', 'pm2_5', 'pm10', 'temperature', 'humidity'],
            format: 'MongoDB'
        },

        codeSnippets: [
            {
                title: 'Extraction MongoDB',
                language: 'python',
                code: `from pymongo import MongoClient
import pandas as pd

# Connexion à MongoDB
client = MongoClient("mongodb://localhost:27017/")
db = client["air_quality"]
collection = db["nairobi"]

# Extraction des données
cursor = collection.find({}, {"timestamp": 1, "pm2_5": 1})
df = pd.DataFrame(list(cursor))
df['timestamp'] = pd.to_datetime(df['timestamp'])
df.set_index('timestamp', inplace=True)`
            },
            {
                title: 'Modèle ARMA',
                language: 'python',
                code: `from statsmodels.tsa.arima.model import ARIMA

# Entraîner le modèle ARMA(2,1)
model = ARIMA(df['pm2_5'], order=(2, 0, 1))
results = model.fit()

# Prévisions sur 24 heures
forecast = results.forecast(steps=24)
print(forecast)`
            }
        ]
    },

    // ==================================================================================
    // PROJECT 4: EARTHQUAKE DAMAGE IN NEPAL
    // ==================================================================================
    {
        id: 'earthquake-nepal',
        number: 4,
        title: 'Earthquake Damage in Nepal',
        titleFr: 'Dégâts Sismiques au Népal',
        country: '🇳🇵',
        flag: 'Nepal',
        duration: '8-10 heures',
        difficulty: 'Intermédiaire',
        color: 'orange',
        icon: '🏚️',
        description: 'Construisez des modèles de régression logistique et arbres de décision pour prédire les dégâts des séismes.',
        descriptionEn: 'Build logistic regression and decision tree models to predict earthquake damage to buildings.',

        objectives: [
            'Construire des modèles de classification (Logistic Regression, Decision Tree)',
            'Extraire des données depuis SQLite',
            'Révéler les biais dans les données pouvant mener à la discrimination',
            'Évaluer l\'équité des modèles'
        ],

        skills: {
            dataEngineering: [
                { name: 'SQLite', level: 'Intermédiaire', description: 'Requêtes SQL avec sqlite3 et pandas' },
                { name: 'JOINs SQL', level: 'Intermédiaire', description: 'Fusionner plusieurs tables' },
                { name: 'Feature selection', level: 'Intermédiaire', description: 'Choisir les variables pertinentes' }
            ],
            machineLearning: [
                { name: 'Régression logistique', level: 'Intermédiaire', description: 'Classification binaire et multiclasse' },
                { name: 'Decision Trees', level: 'Intermédiaire', description: 'Arbres de décision CART' },
                { name: 'Feature importance', level: 'Intermédiaire', description: 'Identifier les variables clés' }
            ],
            ethics: [
                { name: 'Détection de biais', level: 'Avancé', description: 'Identifier les discriminations dans les données' },
                { name: 'Fairness metrics', level: 'Avancé', description: 'Demographic parity, Equalized odds' },
                { name: 'Impact assessment', level: 'Avancé', description: 'Évaluer les conséquences des prédictions' }
            ],
            tools: ['Python', 'Scikit-learn', 'SQLite', 'Pandas', 'Matplotlib']
        },

        modules: [
            {
                id: 1,
                title: 'Extraction SQLite',
                duration: '60 min',
                content: [
                    'Connecter à la base SQLite',
                    'Explorer le schéma des tables',
                    'Écrire des requêtes SQL avec JOINs',
                    'Charger les données dans pandas'
                ]
            },
            {
                id: 2,
                title: 'Préparation des données',
                duration: '90 min',
                content: [
                    'Encoder la cible (damage_grade)',
                    'Traiter les variables géographiques',
                    'Créer des features engineered',
                    'Équilibrer les classes si nécessaire'
                ]
            },
            {
                id: 3,
                title: 'Modèles de classification',
                duration: '120 min',
                content: [
                    'Entraîner Logistic Regression',
                    'Entraîner Decision Tree',
                    'Comparer les performances',
                    'Analyser feature importance'
                ]
            },
            {
                id: 4,
                title: 'Analyse des biais',
                duration: '60 min',
                content: [
                    'Identifier les biais géographiques',
                    'Calculer les métriques de fairness',
                    'Discuter les implications éthiques',
                    'Proposer des corrections'
                ]
            }
        ],

        dataset: {
            source: 'Nepal Earthquake Open Data Portal',
            size: '260,000+ bâtiments',
            features: ['building_id', 'damage_grade', 'geo_level', 'age', 'area', 'foundation_type', 'roof_type'],
            format: 'SQLite'
        },

        codeSnippets: [
            {
                title: 'Extraction SQLite',
                language: 'python',
                code: `import sqlite3
import pandas as pd

# Connexion à SQLite
conn = sqlite3.connect('nepal_earthquake.db')

# Requête avec JOIN
query = """
SELECT b.*, d.damage_grade
FROM buildings b
JOIN damage d ON b.building_id = d.building_id
WHERE d.damage_grade IS NOT NULL
"""
df = pd.read_sql(query, conn)
conn.close()`
            }
        ]
    },

    // ==================================================================================
    // PROJECT 5: BANKRUPTCY IN POLAND
    // ==================================================================================
    {
        id: 'bankruptcy-poland',
        number: 5,
        title: 'Bankruptcy in Poland',
        titleFr: 'Faillite d\'Entreprises en Pologne',
        country: '🇵🇱',
        flag: 'Poland',
        duration: '8-10 heures',
        difficulty: 'Avancé',
        color: 'red',
        icon: '📉',
        description: 'Construisez des modèles Random Forest et Gradient Boosting pour prédire les faillites d\'entreprises.',
        descriptionEn: 'Build random forest and gradient boosting models to predict whether a company will go bankrupt.',

        objectives: [
            'Construire des modèles Random Forest et Gradient Boosting',
            'Naviguer en ligne de commande Linux',
            'Gérer les données déséquilibrées par resampling',
            'Comprendre l\'impact de precision et recall'
        ],

        skills: {
            dataEngineering: [
                { name: 'Linux CLI', level: 'Intermédiaire', description: 'Navigation, manipulation de fichiers' },
                { name: 'Gestion du déséquilibre', level: 'Avancé', description: 'SMOTE, undersampling, class_weight' },
                { name: 'Feature scaling', level: 'Intermédiaire', description: 'StandardScaler, MinMaxScaler' }
            ],
            machineLearning: [
                { name: 'Random Forest', level: 'Avancé', description: 'Ensemble d\'arbres de décision' },
                { name: 'Gradient Boosting', level: 'Avancé', description: 'XGBoost, LightGBM concepts' },
                { name: 'Hyperparameter tuning', level: 'Avancé', description: 'GridSearchCV, RandomizedSearchCV' }
            ],
            evaluation: [
                { name: 'Precision/Recall', level: 'Avancé', description: 'Trade-off et implications business' },
                { name: 'F1-Score', level: 'Intermédiaire', description: 'Moyenne harmonique' },
                { name: 'ROC-AUC', level: 'Avancé', description: 'Courbe ROC et aire sous la courbe' },
                { name: 'Confusion Matrix', level: 'Intermédiaire', description: 'Analyse détaillée des erreurs' }
            ],
            tools: ['Python', 'Scikit-learn', 'imbalanced-learn', 'Linux Bash', 'XGBoost']
        },

        modules: [
            {
                id: 1,
                title: 'Linux CLI Basics',
                duration: '60 min',
                content: [
                    'Naviguer avec cd, ls, pwd',
                    'Manipuler les fichiers (cp, mv, rm)',
                    'Lire les fichiers (cat, head, tail)',
                    'Comprendre les permissions'
                ]
            },
            {
                id: 2,
                title: 'Gestion du déséquilibre',
                duration: '90 min',
                content: [
                    'Analyser le ratio bankruptcy/non-bankruptcy',
                    'Implémenter SMOTE',
                    'Utiliser class_weight dans les modèles',
                    'Comparer undersampling vs oversampling'
                ]
            },
            {
                id: 3,
                title: 'Modèles d\'ensemble',
                duration: '120 min',
                content: [
                    'Entraîner Random Forest Classifier',
                    'Entraîner Gradient Boosting Classifier',
                    'Tuner les hyperparamètres',
                    'Comparer les performances'
                ]
            },
            {
                id: 4,
                title: 'Métriques métier',
                duration: '60 min',
                content: [
                    'Calculer precision, recall, F1',
                    'Tracer la courbe ROC',
                    'Interpréter pour le contexte financier',
                    'Choisir le seuil optimal'
                ]
            }
        ],

        dataset: {
            source: 'Polish Bankruptcy Dataset',
            size: '10,000+ entreprises',
            features: ['64 ratios financiers', 'bankruptcy (0/1)'],
            format: 'CSV'
        },

        codeSnippets: [
            {
                title: 'SMOTE pour déséquilibre',
                language: 'python',
                code: `from imblearn.over_sampling import SMOTE
from sklearn.model_selection import train_test_split

# Séparer features et target
X = df.drop('bankruptcy', axis=1)
y = df['bankruptcy']

# Appliquer SMOTE
smote = SMOTE(random_state=42)
X_resampled, y_resampled = smote.fit_resample(X, y)

print(f"Avant: {y.value_counts()}")
print(f"Après: {pd.Series(y_resampled).value_counts()}")`
            }
        ]
    },

    // ==================================================================================
    // PROJECT 6: CUSTOMER SEGMENTATION IN THE US
    // ==================================================================================
    {
        id: 'customer-segmentation-us',
        number: 6,
        title: 'Customer Segmentation in the US',
        titleFr: 'Segmentation Client aux États-Unis',
        country: '🇺🇸',
        flag: 'USA',
        duration: '8-10 heures',
        difficulty: 'Avancé',
        color: 'purple',
        icon: '👥',
        description: 'Construisez un modèle K-Means pour segmenter les consommateurs américains en groupes.',
        descriptionEn: 'Build a k-means model to cluster US consumers into groups.',

        objectives: [
            'Construire un modèle K-Means de clustering',
            'Utiliser PCA pour la réduction de dimensionnalité et visualisation',
            'Créer un dashboard interactif avec Plotly Dash',
            'Interpréter les segments clients'
        ],

        skills: {
            unsupervisedLearning: [
                { name: 'K-Means', level: 'Avancé', description: 'Algorithme de clustering' },
                { name: 'Elbow Method', level: 'Intermédiaire', description: 'Déterminer le nombre optimal de clusters' },
                { name: 'Silhouette Score', level: 'Avancé', description: 'Évaluer la qualité des clusters' }
            ],
            dimensionalityReduction: [
                { name: 'PCA', level: 'Avancé', description: 'Analyse en Composantes Principales' },
                { name: 'Variance expliquée', level: 'Avancé', description: 'Choisir le nombre de composantes' },
                { name: 'Visualisation 2D/3D', level: 'Intermédiaire', description: 'Projeter les données' }
            ],
            webDevelopment: [
                { name: 'Plotly Dash', level: 'Avancé', description: 'Framework de dashboards Python' },
                { name: 'Callbacks', level: 'Avancé', description: 'Interactivité réactive' },
                { name: 'Layout design', level: 'Intermédiaire', description: 'Structure de l\'application' }
            ],
            tools: ['Python', 'Scikit-learn', 'Plotly', 'Dash', 'Pandas']
        },

        modules: [
            {
                id: 1,
                title: 'Préparation des données',
                duration: '60 min',
                content: [
                    'Charger les données consommateurs',
                    'Normaliser les variables',
                    'Sélectionner les features pertinentes'
                ]
            },
            {
                id: 2,
                title: 'Clustering K-Means',
                duration: '90 min',
                content: [
                    'Implémenter K-Means',
                    'Utiliser la méthode du coude',
                    'Calculer le silhouette score',
                    'Assigner les labels aux clients'
                ]
            },
            {
                id: 3,
                title: 'PCA et Visualisation',
                duration: '90 min',
                content: [
                    'Appliquer PCA',
                    'Analyser la variance expliquée',
                    'Visualiser les clusters en 2D',
                    'Interpréter les composantes principales'
                ]
            },
            {
                id: 4,
                title: 'Dashboard Plotly Dash',
                duration: '120 min',
                content: [
                    'Créer la structure de l\'app Dash',
                    'Ajouter des graphiques interactifs',
                    'Implémenter des callbacks',
                    'Déployer le dashboard'
                ]
            }
        ],

        dataset: {
            source: 'US Consumer Survey',
            size: '50,000+ consommateurs',
            features: ['demographics', 'spending_habits', 'preferences', 'income'],
            format: 'CSV'
        },

        codeSnippets: [
            {
                title: 'K-Means et Elbow',
                language: 'python',
                code: `from sklearn.cluster import KMeans
from sklearn.metrics import silhouette_score

# Méthode du coude
inertias = []
K_range = range(2, 11)
for k in K_range:
    kmeans = KMeans(n_clusters=k, random_state=42)
    kmeans.fit(X_scaled)
    inertias.append(kmeans.inertia_)

# Modèle final
kmeans = KMeans(n_clusters=5, random_state=42)
clusters = kmeans.fit_predict(X_scaled)`
            },
            {
                title: 'Dashboard Dash',
                language: 'python',
                code: `import dash
from dash import dcc, html
import plotly.express as px

app = dash.Dash(__name__)

app.layout = html.Div([
    html.H1('Customer Segmentation Dashboard'),
    dcc.Graph(
        id='cluster-plot',
        figure=px.scatter(df, x='PC1', y='PC2', 
                         color='cluster', 
                         title='Customer Clusters')
    )
])

if __name__ == '__main__':
    app.run_server(debug=True)`
            }
        ]
    },

    // ==================================================================================
    // PROJECT 7: A/B TESTING AT WORLDQUANT UNIVERSITY
    // ==================================================================================
    {
        id: 'ab-testing-wqu',
        number: 7,
        title: 'A/B Testing at WorldQuant University',
        titleFr: 'Test A/B à WorldQuant University',
        country: '🌐',
        flag: 'Global',
        duration: '8-10 heures',
        difficulty: 'Avancé',
        color: 'indigo',
        icon: '📧',
        description: 'Menez un test Chi-carré pour déterminer si l\'envoi d\'emails augmente les inscriptions.',
        descriptionEn: 'Conduct a chi-square test to determine if sending an email can increase program enrollment at WQU.',

        objectives: [
            'Mener un test statistique Chi-carré',
            'Construire des classes Python personnalisées pour ETL',
            'Créer une application interactive avec design three-tiered',
            'Interpréter les résultats statistiques'
        ],

        skills: {
            statistics: [
                { name: 'Test Chi-carré', level: 'Avancé', description: 'Test d\'indépendance statistique' },
                { name: 'Hypothèses H0/H1', level: 'Intermédiaire', description: 'Formulation et test' },
                { name: 'P-value', level: 'Intermédiaire', description: 'Interprétation et seuil de significativité' }
            ],
            softwareEngineering: [
                { name: 'Classes Python', level: 'Avancé', description: 'OOP, \\__init__, méthodes' },
                { name: 'ETL Pipeline', level: 'Avancé', description: 'Extract, Transform, Load' },
                { name: 'Design patterns', level: 'Avancé', description: 'Three-tiered architecture' }
            ],
            webDevelopment: [
                { name: 'Data layer', level: 'Avancé', description: 'Accès aux données' },
                { name: 'Business layer', level: 'Avancé', description: 'Logique métier' },
                { name: 'Presentation layer', level: 'Avancé', description: 'Interface utilisateur' }
            ],
            tools: ['Python', 'SciPy', 'OOP', 'Flask/Dash', 'SQLite']
        },

        modules: [
            {
                id: 1,
                title: 'Design de l\'expérience',
                duration: '60 min',
                content: [
                    'Définir les groupes contrôle et test',
                    'Formuler les hypothèses',
                    'Calculer la taille d\'échantillon requise'
                ]
            },
            {
                id: 2,
                title: 'Classes ETL Python',
                duration: '120 min',
                content: [
                    'Créer une classe Extractor',
                    'Créer une classe Transformer',
                    'Créer une classe Loader',
                    'Orchestrer le pipeline'
                ]
            },
            {
                id: 3,
                title: 'Analyse statistique',
                duration: '90 min',
                content: [
                    'Construire la table de contingence',
                    'Effectuer le test Chi-carré',
                    'Interpréter la p-value',
                    'Conclure sur l\'efficacité de l\'email'
                ]
            },
            {
                id: 4,
                title: 'Application Three-Tiered',
                duration: '90 min',
                content: [
                    'Implémenter la couche données',
                    'Implémenter la couche métier',
                    'Créer l\'interface de présentation',
                    'Intégrer les trois couches'
                ]
            }
        ],

        dataset: {
            source: 'WQU Enrollment Experiment',
            size: '10,000+ prospects',
            features: ['user_id', 'email_sent', 'enrolled', 'timestamp'],
            format: 'SQLite'
        },

        codeSnippets: [
            {
                title: 'Test Chi-carré',
                language: 'python',
                code: `from scipy.stats import chi2_contingency
import pandas as pd

# Table de contingence
contingency = pd.crosstab(df['email_sent'], df['enrolled'])

# Test Chi-carré
chi2, p_value, dof, expected = chi2_contingency(contingency)

print(f"Chi² statistic: {chi2:.4f}")
print(f"P-value: {p_value:.4f}")
print(f"Significatif (α=0.05): {p_value < 0.05}")`
            },
            {
                title: 'Classe ETL',
                language: 'python',
                code: `class DataExtractor:
    def __init__(self, db_path):
        self.db_path = db_path
    
    def extract(self, query):
        import sqlite3
        conn = sqlite3.connect(self.db_path)
        df = pd.read_sql(query, conn)
        conn.close()
        return df

class DataTransformer:
    def transform(self, df):
        # Nettoyage et transformation
        df['enrolled'] = df['enrolled'].astype(int)
        return df`
            }
        ]
    },

    // ==================================================================================
    // PROJECT 8: VOLATILITY FORECASTING IN INDIA
    // ==================================================================================
    {
        id: 'volatility-india',
        number: 8,
        title: 'Volatility Forecasting in India',
        titleFr: 'Prévision de Volatilité en Inde',
        country: '🇮🇳',
        flag: 'India',
        duration: '10-12 heures',
        difficulty: 'Expert',
        color: 'amber',
        icon: '📈',
        description: 'Créez un modèle GARCH pour prédire la volatilité des actifs et construisez votre propre API.',
        descriptionEn: 'Create a GARCH time series model to predict asset volatility.',

        objectives: [
            'Créer un modèle de série temporelle GARCH',
            'Acquérir des données via API',
            'Nettoyer et stocker dans SQLite',
            'Construire une API pour servir les prédictions'
        ],

        skills: {
            timeSeries: [
                { name: 'GARCH', level: 'Expert', description: 'Generalized Autoregressive Conditional Heteroskedasticity' },
                { name: 'Volatilité', level: 'Avancé', description: 'Mesure et prévision de la volatilité' },
                { name: 'Returns', level: 'Intermédiaire', description: 'Calcul des rendements log' }
            ],
            dataEngineering: [
                { name: 'API consumption', level: 'Avancé', description: 'Requests, authentification, pagination' },
                { name: 'SQLite storage', level: 'Intermédiaire', description: 'Stockage et requêtes' },
                { name: 'Data pipeline', level: 'Avancé', description: 'Automatisation de l\'ingestion' }
            ],
            apiDevelopment: [
                { name: 'FastAPI/Flask', level: 'Avancé', description: 'Création d\'endpoints REST' },
                { name: 'JSON serialization', level: 'Intermédiaire', description: 'Format de réponse' },
                { name: 'Documentation', level: 'Intermédiaire', description: 'OpenAPI/Swagger' }
            ],
            tools: ['Python', 'arch', 'FastAPI', 'SQLite', 'yfinance', 'Requests']
        },

        modules: [
            {
                id: 1,
                title: 'Acquisition via API',
                duration: '90 min',
                content: [
                    'Utiliser yfinance pour les données boursières',
                    'Gérer les limites de rate',
                    'Nettoyer les données temporelles',
                    'Stocker dans SQLite'
                ]
            },
            {
                id: 2,
                title: 'Analyse de volatilité',
                duration: '90 min',
                content: [
                    'Calculer les rendements logarithmiques',
                    'Visualiser la volatilité historique',
                    'Tester les effets ARCH',
                    'Analyser le clustering de volatilité'
                ]
            },
            {
                id: 3,
                title: 'Modélisation GARCH',
                duration: '120 min',
                content: [
                    'Entraîner un modèle GARCH(1,1)',
                    'Interpréter les paramètres α et β',
                    'Générer des prévisions de volatilité',
                    'Évaluer la qualité du modèle'
                ]
            },
            {
                id: 4,
                title: 'API de prédiction',
                duration: '120 min',
                content: [
                    'Créer une API FastAPI',
                    'Implémenter endpoint /predict',
                    'Sérialiser les prédictions en JSON',
                    'Documenter avec Swagger',
                    'Déployer l\'API'
                ]
            }
        ],

        dataset: {
            source: 'Yahoo Finance API (Nifty 50)',
            size: '5+ années de données journalières',
            features: ['date', 'open', 'high', 'low', 'close', 'volume'],
            format: 'API → SQLite'
        },

        codeSnippets: [
            {
                title: 'Modèle GARCH',
                language: 'python',
                code: `from arch import arch_model
import yfinance as yf
import numpy as np

# Télécharger les données
data = yf.download('^NSEI', start='2018-01-01')
returns = 100 * np.log(data['Close'] / data['Close'].shift(1)).dropna()

# Modèle GARCH(1,1)
model = arch_model(returns, vol='Garch', p=1, q=1)
results = model.fit(disp='off')

# Prévision de volatilité
forecast = results.forecast(horizon=5)
print(forecast.variance.iloc[-1])`
            },
            {
                title: 'API FastAPI',
                language: 'python',
                code: `from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI(title="Volatility Forecast API")

class ForecastResponse(BaseModel):
    ticker: str
    horizon: int
    volatility: list

@app.get("/predict/{ticker}")
def predict_volatility(ticker: str, horizon: int = 5):
    # Charger modèle et prédire
    volatility = get_garch_forecast(ticker, horizon)
    return ForecastResponse(
        ticker=ticker,
        horizon=horizon,
        volatility=volatility
    )`
            }
        ]
    }
];

// Fonction pour obtenir un projet par ID
export const getProjectById = (id) => {
    return appliedDataScienceProjects.find(p => p.id === id);
};

// Fonction pour obtenir les projets par difficulté
export const getProjectsByDifficulty = (difficulty) => {
    return appliedDataScienceProjects.filter(p => p.difficulty === difficulty);
};

// Statistiques globales
export const projectsStats = {
    total: appliedDataScienceProjects.length,
    countries: [...new Set(appliedDataScienceProjects.map(p => p.flag))].length,
    totalHours: '60-80 heures',
    skills: ['Python', 'Pandas', 'Scikit-learn', 'SQL', 'APIs', 'Dashboards', 'Time Series', 'Machine Learning']
};
