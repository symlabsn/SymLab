// Data Science Appliquée - 8 Projets Complets
export const dataScienceProjects = [
    {
        id: 'housing-mexico',
        numero: 1,
        titre: 'Immobilier au Mexique',
        pays: 'Mexique',
        duree: '4-6 heures',
        difficulte: 'Débutant',
        couleur: 'emerald',
        icone: '🏠',
        resume: 'Analysez 21 000 propriétés immobilières mexicaines pour déterminer si les prix sont plus influencés par la taille ou par la localisation géographique.',
        objectifs: [
            'Importer et nettoyer des données depuis un fichier CSV',
            'Construire des visualisations de données percutantes',
            'Examiner la relation entre deux variables quantitatives',
            'Calculer et interpréter le coefficient de corrélation de Pearson'
        ],
        modules: [
            {
                id: 1,
                titre: 'Acquisition et exploration des données',
                duree: '45 min',
                objectif: 'Charger le dataset et comprendre sa structure',
                content: "# Acquisition et Exploration des Données\n\n## Introduction\n\nLe marché immobilier mexicain est l'un des plus dynamiques d'Amérique Latine. Notre dataset contient **21 000 propriétés** avec leurs caractéristiques principales :\n- Prix en USD\n- Surface totale et couverte (m²)\n- Coordonnées géographiques (latitude, longitude)\n- État et municipalité\n\n**Question clé** : Le prix dépend-il plus de la **TAILLE** ou de la **LOCALISATION** ?\n\n## Chargement du Dataset\n\n```python\nimport pandas as pd\nimport matplotlib.pyplot as plt\nimport seaborn as sns\nimport numpy as np\n\n# Configuration du style\nplt.style.use('seaborn-v0_8-whitegrid')\nsns.set_palette('husl')\n\n# Chargement des données\ndf = pd.read_csv('mexico_real_estate.csv')\n\n# Aperçu initial\nprint(df.shape)\nprint(df.columns.tolist())\ndf.head()\n```\n\n## Exploration de la Structure\n\n```python\n# Types de données et valeurs manquantes\nprint(df.info())\n\n# Statistiques descriptives\nprint(df.describe())\n\n# Valeurs manquantes par colonne\nprint(df.isna().sum().sort_values(ascending=False))\n```\n\n## Comprendre les Variables\n\n| Variable | Type | Description |\n|----------|------|-------------|\n| price | float | Prix en USD |\n| surface_total | float | Surface totale en m² |\n| surface_covered | float | Surface couverte en m² |\n| lat | float | Latitude |\n| lon | float | Longitude |\n| state | string | État mexicain |\n| municipality | string | Municipalité |",
                summary: [
                    'pd.read_csv() charge les données CSV en DataFrame',
                    'df.info() révèle les types et valeurs manquantes',
                    'df.describe() donne les statistiques descriptives',
                    'Toujours explorer avant d\'analyser'
                ]
            },
            {
                id: 2,
                titre: 'Nettoyage et préparation',
                duree: '60 min',
                objectif: 'Préparer les données pour l\'analyse',
                content: "# Nettoyage et Préparation des Données\n\n## Stratégies de Nettoyage\n\nLe nettoyage des données est **crucial** pour obtenir des résultats fiables.\n\n### Problèmes courants à traiter :\n1. **Valeurs manquantes (NaN)** - supprimer ou imputer ?\n2. **Doublons** - propriétés listées plusieurs fois\n3. **Outliers** - prix irréalistes (erreurs de saisie)\n4. **Types incorrects** - colonnes numériques stockées comme texte\n\n> **Règle d'or** : Documenter chaque transformation !\n\n## Traitement des Valeurs Manquantes\n\n```python\n# Visualiser les valeurs manquantes\nimport missingno as msno\nmsno.matrix(df)\nplt.title('Matrice des valeurs manquantes')\nplt.show()\n\n# Option 1: Supprimer les lignes avec valeurs manquantes\ndf_clean = df.dropna(subset=['price', 'surface_total'])\n\n# Option 2: Imputer avec la médiane\ndf['surface_total'].fillna(df['surface_total'].median(), inplace=True)\n```\n\n## Détection des Outliers (Méthode IQR)\n\n```python\n# Méthode IQR pour détecter les outliers\nQ1 = df['price'].quantile(0.25)\nQ3 = df['price'].quantile(0.75)\nIQR = Q3 - Q1\n\n# Bornes\nlower_bound = Q1 - 1.5 * IQR\nupper_bound = Q3 + 1.5 * IQR\n\n# Filtrer les outliers\ndf_no_outliers = df[(df['price'] >= lower_bound) & (df['price'] <= upper_bound)]\n```\n\n## Création de Features Dérivées\n\n```python\n# Prix au mètre carré\ndf['price_per_m2'] = df['price'] / df['surface_total']\n\n# Ratio surface couverte / surface totale\ndf['coverage_ratio'] = df['surface_covered'] / df['surface_total']\n```",
                summary: [
                    'dropna() supprime les lignes avec NaN',
                    'fillna() impute les valeurs manquantes',
                    'La méthode IQR détecte les outliers',
                    'Créer des features dérivées enrichit l\'analyse'
                ]
            },
            {
                id: 3,
                titre: 'Visualisation exploratoire',
                duree: '90 min',
                objectif: 'Créer des graphiques pour comprendre les données',
                content: "# Visualisation Exploratoire (EDA)\n\n## Distribution des Prix\n\n```python\nfig, axes = plt.subplots(1, 2, figsize=(14, 5))\n\n# Histogramme\naxes[0].hist(df['price'], bins=50, color='steelblue', edgecolor='white', alpha=0.7)\naxes[0].set_xlabel('Prix (USD)')\naxes[0].set_ylabel('Fréquence')\naxes[0].set_title('Distribution des prix immobiliers')\naxes[0].axvline(df['price'].median(), color='red', linestyle='--', label='Médiane')\naxes[0].legend()\n\n# Distribution log\naxes[1].hist(np.log10(df['price']), bins=50, color='coral', edgecolor='white', alpha=0.7)\naxes[1].set_xlabel('log10(Prix)')\naxes[1].set_title('Distribution logarithmique')\n\nplt.tight_layout()\nplt.show()\n```\n\n## Relation Prix vs Surface (Scatter Plot)\n\n```python\nplt.figure(figsize=(10, 6))\n\nsns.regplot(\n    data=df, \n    x='surface_total', \n    y='price',\n    scatter_kws={'alpha': 0.3, 's': 10},\n    line_kws={'color': 'red'}\n)\n\nplt.xlabel('Surface totale (m²)')\nplt.ylabel('Prix (USD)')\nplt.title('Relation entre la surface et le prix')\nplt.show()\n```\n\n## Box Plot par Région\n\n```python\ntop_states = df['state'].value_counts().head(10).index\n\nplt.figure(figsize=(12, 6))\nsns.boxplot(data=df[df['state'].isin(top_states)], x='state', y='price', palette='viridis')\nplt.xticks(rotation=45, ha='right')\nplt.xlabel('État')\nplt.ylabel('Prix (USD)')\nplt.title('Distribution des prix par État (Top 10)')\nplt.tight_layout()\nplt.show()\n```\n\n## Matrice de Corrélation (Heatmap)\n\n```python\nnumeric_cols = ['price', 'surface_total', 'surface_covered', 'lat', 'lon']\ncorr_matrix = df[numeric_cols].corr()\n\nplt.figure(figsize=(8, 6))\nsns.heatmap(corr_matrix, annot=True, cmap='RdYlBu_r', center=0, fmt='.2f', square=True)\nplt.title('Matrice de corrélation')\nplt.show()\n```",
                summary: [
                    'L\'histogramme montre la distribution des prix',
                    'Le scatter plot révèle la relation prix-surface',
                    'Le box plot compare les distributions par groupe',
                    'La heatmap visualise toutes les corrélations'
                ]
            },
            {
                id: 4,
                titre: 'Analyse et conclusions',
                duree: '45 min',
                objectif: 'Répondre à la question initiale avec des preuves',
                content: "# Analyse et Conclusions\n\n## Analyse de Corrélation Finale\n\n```python\n# Corrélations avec le prix\ncorrelations = df[['price', 'surface_total', 'lat', 'lon']].corr()['price']\ncorrelations = correlations.drop('price').abs().sort_values(ascending=False)\n\nprint('Corrélations avec le prix (valeur absolue):')\nprint(correlations)\n```\n\n## Interprétation des Résultats\n\n| Facteur | Corrélation | Interprétation |\n|---------|-------------|----------------|\n| Surface | ~0.65 | **Forte** corrélation positive |\n| Latitude | ~0.12 | Faible corrélation |\n| Longitude | ~0.08 | Très faible corrélation |\n\n## Conclusion\n\n**La TAILLE (surface) a une corrélation plus forte avec le prix que la localisation (lat/lon).**\n\n- La surface explique ~42% de la variance des prix\n- La localisation explique < 2% de la variance\n\n## Visualisation de la Conclusion\n\n```python\nfig, ax = plt.subplots(figsize=(8, 5))\n\nfactors = ['Surface', 'Latitude', 'Longitude']\ncorrelations = [0.65, 0.12, 0.08]\ncolors = ['#2ecc71', '#f39c12', '#e74c3c']\n\nax.barh(factors, correlations, color=colors)\nax.set_xlabel('Corrélation avec le prix')\nax.set_title('Facteurs influençant le prix immobilier')\nax.axvline(0.5, color='gray', linestyle='--', alpha=0.5)\n\nplt.tight_layout()\nplt.show()\n```",
                summary: [
                    'La corrélation de Pearson mesure la relation linéaire',
                    'r > 0.5 indique une corrélation forte',
                    'La surface est le facteur principal du prix',
                    'La localisation a un impact limité dans ce dataset'
                ]
            }
        ],
        outils: ['Python 3.x', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Jupyter Notebook']
    },
    {
        id: 'apartments-buenos-aires',
        numero: 2,
        titre: 'Appartements à Buenos Aires',
        pays: 'Argentine',
        duree: '6-8 heures',
        difficulte: 'Intermédiaire',
        couleur: 'blue',
        icone: '🏢',
        resume: 'Construisez un modèle de régression linéaire pour prédire les prix des appartements en Argentine.',
        objectifs: [
            'Construire un modèle de régression linéaire',
            'Créer un pipeline de prétraitement',
            'Réduire l\'overfitting avec la régularisation'
        ],
        modules: [
            {
                id: 1,
                titre: 'Exploration et préparation',
                duree: '90 min',
                objectif: 'Comprendre les données',
                content: "# Exploration et Préparation\n\n## Chargement des Données\n\n```python\nimport pandas as pd\nimport numpy as np\nfrom sklearn.model_selection import train_test_split\nfrom sklearn.linear_model import LinearRegression, Ridge, Lasso\nfrom sklearn.metrics import mean_squared_error, r2_score\n\ndf = pd.read_csv('buenos_aires_apartments.csv')\nprint(df.info())\nprint(df.describe())\n```\n\n## Identification des Variables\n\n```python\ncategorical_cols = df.select_dtypes(include=['object']).columns.tolist()\nnumerical_cols = df.select_dtypes(include=['number']).columns.tolist()\n\nprint('Catégorielles:', categorical_cols)\nprint('Numériques:', numerical_cols)\n```",
                summary: [
                    'Identifier les variables catégorielles vs numériques',
                    'Les catégorielles nécessitent un encodage',
                    'Les numériques peuvent nécessiter une normalisation'
                ]
            },
            {
                id: 2,
                titre: 'Construction du Pipeline',
                duree: '90 min',
                objectif: 'Créer un pipeline de prétraitement',
                content: "# Construction du Pipeline\n\n## Pourquoi utiliser des Pipelines ?\n\nLes pipelines scikit-learn offrent plusieurs avantages :\n1. **Reproductibilité** : Mêmes transformations appliquées uniformément\n2. **Prévention des fuites** : Pas de data leakage entre train et test\n3. **Déploiement** : Un seul objet à sauvegarder\n\n## Pipeline Complet\n\n```python\nfrom sklearn.pipeline import Pipeline\nfrom sklearn.compose import ColumnTransformer\nfrom sklearn.impute import SimpleImputer\nfrom sklearn.preprocessing import OneHotEncoder, StandardScaler\n\n# Colonnes\nnumerical_features = ['surface_total', 'rooms', 'bathrooms']\ncategorical_features = ['neighborhood', 'property_type']\n\n# Transformateur numérique\nnumerical_transformer = Pipeline(steps=[\n    ('imputer', SimpleImputer(strategy='median')),\n    ('scaler', StandardScaler())\n])\n\n# Transformateur catégoriel\ncategorical_transformer = Pipeline(steps=[\n    ('imputer', SimpleImputer(strategy='constant', fill_value='missing')),\n    ('onehot', OneHotEncoder(handle_unknown='ignore', sparse_output=False))\n])\n\n# Combiner\npreprocessor = ColumnTransformer(transformers=[\n    ('num', numerical_transformer, numerical_features),\n    ('cat', categorical_transformer, categorical_features)\n])\n\n# Pipeline complet\nmodel_pipeline = Pipeline(steps=[\n    ('preprocessor', preprocessor),\n    ('regressor', LinearRegression())\n])\n```",
                summary: [
                    'Pipeline enchaîne les transformations',
                    'ColumnTransformer applique différents traitements par type',
                    'SimpleImputer gère les valeurs manquantes',
                    'OneHotEncoder transforme les catégories'
                ]
            },
            {
                id: 3,
                titre: 'Entraînement et évaluation',
                duree: '90 min',
                objectif: 'Entraîner le modèle',
                content: "# Entraînement et Évaluation\n\n## Séparation Train/Test\n\n```python\nX = df.drop('price_usd', axis=1)\ny = df['price_usd']\n\nX_train, X_test, y_train, y_test = train_test_split(\n    X, y, test_size=0.2, random_state=42\n)\n```\n\n## Entraînement\n\n```python\nmodel_pipeline.fit(X_train, y_train)\n\ny_train_pred = model_pipeline.predict(X_train)\ny_test_pred = model_pipeline.predict(X_test)\n\nprint('=== Performances ===')\nprint('Train R²:', r2_score(y_train, y_train_pred))\nprint('Test R²:', r2_score(y_test, y_test_pred))\n```",
                summary: [
                    'train_test_split sépare les données',
                    'R² mesure la variance expliquée',
                    'RMSE est l\'erreur moyenne en unités originales',
                    'Train R² >> Test R² = overfitting'
                ]
            },
            {
                id: 4,
                titre: 'Réduction de l\'overfitting',
                duree: '60 min',
                objectif: 'Régularisation Ridge et Lasso',
                content: "# Réduction de l'Overfitting\n\n## Régularisation\n\n- **Ridge (L2)** : Pénalise les grands coefficients → les réduit\n- **Lasso (L1)** : Certains coefficients deviennent 0 (feature selection)\n\n## Comparaison des Modèles\n\n```python\nfrom sklearn.model_selection import cross_val_score\n\nmodels = {\n    'LinearRegression': LinearRegression(),\n    'Ridge (alpha=1)': Ridge(alpha=1),\n    'Ridge (alpha=10)': Ridge(alpha=10),\n    'Lasso (alpha=1)': Lasso(alpha=1),\n}\n\nresults = []\nfor name, model in models.items():\n    pipeline = Pipeline([\n        ('preprocessor', preprocessor),\n        ('regressor', model)\n    ])\n    scores = cross_val_score(pipeline, X_train, y_train, cv=5, scoring='r2')\n    results.append({\n        'Modele': name,\n        'R2_moyen': scores.mean(),\n        'Ecart_type': scores.std()\n    })\n\npd.DataFrame(results).sort_values('R2_moyen', ascending=False)\n```",
                summary: [
                    'Ridge réduit les coefficients sans les annuler',
                    'Lasso peut annuler des coefficients (sélection)',
                    'cross_val_score évalue sur plusieurs splits',
                    'Choisir alpha par validation croisée'
                ]
            }
        ],
        outils: ['Python', 'Scikit-learn', 'Pandas', 'NumPy']
    },
    {
        id: 'air-quality-nairobi',
        numero: 3,
        titre: 'Qualité de l\'Air à Nairobi',
        pays: 'Kenya',
        duree: '6-8 heures',
        difficulte: 'Intermédiaire',
        couleur: 'green',
        icone: '🌍',
        resume: 'Construisez un modèle ARMA de séries temporelles pour prédire les niveaux de pollution PM2.5.',
        objectifs: [
            'Extraire des données depuis MongoDB',
            'Tester la stationnarité',
            'Construire un modèle ARMA/ARIMA'
        ],
        modules: [
            {
                id: 1,
                titre: 'Extraction MongoDB',
                duree: '60 min',
                objectif: 'Connecter et extraire les données',
                content: "# Extraction MongoDB\n\n## Connexion avec pymongo\n\n```python\nfrom pymongo import MongoClient\nimport pandas as pd\n\nclient = MongoClient('mongodb://localhost:27017/')\ndb = client['air_quality']\ncollection = db['nairobi_sensors']\n\ncursor = collection.find(\n    {'city': 'Nairobi'},\n    {'_id': 0, 'timestamp': 1, 'pm2_5': 1, 'pm10': 1}\n)\n\ndf = pd.DataFrame(list(cursor))\ndf['timestamp'] = pd.to_datetime(df['timestamp'])\ndf.set_index('timestamp', inplace=True)\ndf.sort_index(inplace=True)\n```",
                summary: [
                    'MongoClient connecte à MongoDB',
                    'find() extrait avec projection',
                    'set_index() crée un DatetimeIndex'
                ]
            },
            {
                id: 2,
                titre: 'Analyse des séries temporelles',
                duree: '90 min',
                objectif: 'Tester la stationnarité',
                content: "# Analyse des Séries Temporelles\n\n## Test de Stationnarité (ADF)\n\n```python\nfrom statsmodels.tsa.stattools import adfuller\n\ndef test_stationarity(series, name='Series'):\n    result = adfuller(series.dropna())\n    print('=== Test ADF:', name, '===')\n    print('Statistique ADF:', result[0])\n    print('P-value:', result[1])\n    print('Stationnaire:', 'OUI' if result[1] < 0.05 else 'NON')\n    return result[1] < 0.05\n\nis_stationary = test_stationarity(df['pm2_5'], 'PM2.5')\n\nif not is_stationary:\n    df['pm2_5_diff'] = df['pm2_5'].diff()\n    test_stationarity(df['pm2_5_diff'].dropna(), 'PM2.5 différenciée')\n```",
                summary: [
                    'adfuller teste la stationnarité',
                    'p-value < 0.05 = série stationnaire',
                    'diff() différencie la série'
                ]
            },
            {
                id: 3,
                titre: 'Modélisation ARMA',
                duree: '90 min',
                objectif: 'Construire le modèle',
                content: "# Modélisation ARMA\n\n## Modèle ARIMA\n\n```python\nfrom statsmodels.tsa.arima.model import ARIMA\nfrom sklearn.metrics import mean_absolute_error\n\ntrain_size = int(len(df) * 0.8)\ntrain, test = df['pm2_5'][:train_size], df['pm2_5'][train_size:]\n\nmodel = ARIMA(train, order=(2, 1, 1))\nresults = model.fit()\nprint(results.summary())\n\nforecast = results.forecast(steps=len(test))\nmae = mean_absolute_error(test, forecast)\nprint('MAE:', mae)\n```",
                summary: [
                    'ARIMA(p, d, q) : p=AR, d=diff, q=MA',
                    'fit() entraîne le modèle',
                    'forecast() prédit le futur'
                ]
            },
            {
                id: 4,
                titre: 'Optimisation des hyperparamètres',
                duree: '60 min',
                objectif: 'Grid Search sur (p, d, q)',
                content: "# Optimisation\n\n## Grid Search\n\n```python\nimport itertools\nimport warnings\nwarnings.filterwarnings('ignore')\n\np_values = range(0, 4)\nd_values = [0, 1]\nq_values = range(0, 4)\n\nbest_aic = float('inf')\nbest_order = None\n\nfor p, d, q in itertools.product(p_values, d_values, q_values):\n    try:\n        model = ARIMA(train, order=(p, d, q))\n        results = model.fit()\n        if results.aic < best_aic:\n            best_aic = results.aic\n            best_order = (p, d, q)\n    except:\n        continue\n\nprint('Meilleur ordre:', best_order)\nprint('AIC:', best_aic)\n```",
                summary: [
                    'AIC mesure la qualité du modèle',
                    'Plus AIC est bas, meilleur est le modèle',
                    'Grid Search teste toutes les combinaisons'
                ]
            }
        ],
        outils: ['Python', 'pymongo', 'statsmodels', 'Pandas']
    },
    {
        id: 'earthquake-nepal',
        numero: 4,
        titre: 'Séisme au Népal',
        pays: 'Népal',
        duree: '8-10 heures',
        difficulte: 'Intermédiaire',
        couleur: 'orange',
        icone: '🏚️',
        resume: 'Classifiez les dégâts sismiques avec régression logistique et arbres de décision. Explorez les biais.',
        objectifs: [
            'Extraire des données SQLite',
            'Construire des modèles de classification',
            'Détecter les biais discriminatoires'
        ],
        modules: [
            { id: 1, titre: 'Extraction SQLite', duree: '60 min', objectif: 'Requêtes SQL', content: "# Extraction SQLite\n\n```python\nimport sqlite3\nimport pandas as pd\n\nconn = sqlite3.connect('nepal_earthquake.db')\nquery = '''\nSELECT b.*, d.damage_grade\nFROM buildings b\nJOIN damage d ON b.building_id = d.building_id\n'''\ndf = pd.read_sql(query, conn)\nconn.close()\n```", summary: ['sqlite3.connect() ouvre la base', 'pd.read_sql() exécute les requêtes', 'JOIN fusionne les tables'] },
            { id: 2, titre: 'Préparation des données', duree: '90 min', objectif: 'Encoder et équilibrer', content: "# Préparation\n\n```python\nfrom sklearn.preprocessing import LabelEncoder\n\nle = LabelEncoder()\ndf['damage_encoded'] = le.fit_transform(df['damage_grade'])\n```", summary: ['LabelEncoder transforme les classes', 'Vérifier l\'équilibre des classes'] },
            { id: 3, titre: 'Classification', duree: '120 min', objectif: 'Logistic + Decision Tree', content: "# Classification\n\n```python\nfrom sklearn.linear_model import LogisticRegression\nfrom sklearn.tree import DecisionTreeClassifier\n\nlr = LogisticRegression(max_iter=1000)\ndt = DecisionTreeClassifier(max_depth=10)\n\nlr.fit(X_train, y_train)\ndt.fit(X_train, y_train)\n```", summary: ['LogisticRegression pour classification', 'DecisionTree pour interprétabilité', 'max_depth contrôle la complexité'] },
            { id: 4, titre: 'Analyse des biais', duree: '60 min', objectif: 'Métriques d\'équité', content: "# Analyse des Biais\n\nAnalyser les performances par groupe démographique pour détecter les discriminations.\n\n## Vérification par groupe\n\n```python\nfor group in df['region'].unique():\n    mask = df['region'] == group\n    accuracy = (y_pred[mask] == y_test[mask]).mean()\n    print(f'{group}: {accuracy:.2%}')\n```", summary: ['Vérifier les performances par groupe', 'Demographic parity = équité'] }
        ],
        outils: ['Python', 'Scikit-learn', 'SQLite']
    },
    {
        id: 'bankruptcy-poland',
        numero: 5,
        titre: 'Faillite en Pologne',
        pays: 'Pologne',
        duree: '8-10 heures',
        difficulte: 'Avancé',
        couleur: 'red',
        icone: '📉',
        resume: 'Prédisez les faillites avec Random Forest et gérez le déséquilibre des classes.',
        objectifs: ['Maîtriser la CLI Linux', 'Appliquer SMOTE', 'Construire Random Forest et Gradient Boosting'],
        modules: [
            { id: 1, titre: 'Linux CLI', duree: '60 min', objectif: 'Navigation terminal', content: "# Linux CLI\n\n```bash\ncd /data\nls -la\nhead -n 10 bankruptcy.csv\ncat file.txt | grep 'pattern'\nwc -l bankruptcy.csv\n```", summary: ['cd navigue', 'ls liste', 'head affiche les premières lignes'] },
            { id: 2, titre: 'Gestion du déséquilibre', duree: '90 min', objectif: 'SMOTE', content: "# SMOTE\n\n```python\nfrom imblearn.over_sampling import SMOTE\n\nsmote = SMOTE(random_state=42)\nX_resampled, y_resampled = smote.fit_resample(X, y)\n\nprint('Avant SMOTE:', y.value_counts())\nprint('Après SMOTE:', pd.Series(y_resampled).value_counts())\n```", summary: ['SMOTE crée des samples synthétiques', 'Équilibre les classes'] },
            { id: 3, titre: 'Modèles d\'ensemble', duree: '120 min', objectif: 'RF et GB', content: "# Random Forest\n\n```python\nfrom sklearn.ensemble import RandomForestClassifier, GradientBoostingClassifier\n\nrf = RandomForestClassifier(n_estimators=100, random_state=42)\ngb = GradientBoostingClassifier(n_estimators=100, random_state=42)\n\nrf.fit(X_train, y_train)\ngb.fit(X_train, y_train)\n\n# Feature importance\nimportances = pd.Series(rf.feature_importances_, index=X.columns)\nimportances.sort_values(ascending=False).head(10).plot(kind='barh')\n```", summary: ['RandomForest = ensemble d\'arbres', 'GradientBoosting = boosting séquentiel'] },
            { id: 4, titre: 'Métriques métier', duree: '60 min', objectif: 'Precision/Recall', content: "# Métriques\n\n```python\nfrom sklearn.metrics import precision_score, recall_score, f1_score, classification_report\n\ny_pred = rf.predict(X_test)\n\nprint('Precision:', precision_score(y_test, y_pred))\nprint('Recall:', recall_score(y_test, y_pred))\nprint('F1:', f1_score(y_test, y_pred))\nprint(classification_report(y_test, y_pred))\n```", summary: ['Precision = vrais positifs / prédits positifs', 'Recall = vrais positifs / réels positifs'] }
        ],
        outils: ['Python', 'Scikit-learn', 'imbalanced-learn', 'Linux']
    },
    {
        id: 'customer-segmentation-us',
        numero: 6,
        titre: 'Segmentation Client aux USA',
        pays: 'États-Unis',
        duree: '8-10 heures',
        difficulte: 'Avancé',
        couleur: 'purple',
        icone: '👥',
        resume: 'Segmentez les consommateurs avec K-Means et créez un dashboard Plotly Dash.',
        objectifs: ['Construire K-Means', 'Appliquer PCA', 'Créer un dashboard'],
        modules: [
            { id: 1, titre: 'Préparation données', duree: '60 min', objectif: 'Normalisation', content: "# Normalisation\n\n```python\nfrom sklearn.preprocessing import StandardScaler\n\nscaler = StandardScaler()\nX_scaled = scaler.fit_transform(X)\n\nprint('Moyenne:', X_scaled.mean(axis=0))\nprint('Std:', X_scaled.std(axis=0))\n```", summary: ['StandardScaler normalise (moyenne=0, std=1)'] },
            { id: 2, titre: 'Clustering K-Means', duree: '90 min', objectif: 'Méthode du coude', content: "# K-Means\n\n```python\nfrom sklearn.cluster import KMeans\n\ninertias = []\nfor k in range(2, 11):\n    kmeans = KMeans(n_clusters=k, random_state=42, n_init=10)\n    kmeans.fit(X_scaled)\n    inertias.append(kmeans.inertia_)\n\nplt.plot(range(2, 11), inertias, 'bo-')\nplt.xlabel('Nombre de clusters')\nplt.ylabel('Inertie')\nplt.title('Méthode du coude')\nplt.show()\n```", summary: ['Inertia = somme des distances', 'Méthode du coude pour choisir K'] },
            { id: 3, titre: 'PCA et visualisation', duree: '90 min', objectif: 'Réduction', content: "# PCA\n\n```python\nfrom sklearn.decomposition import PCA\n\npca = PCA(n_components=2)\nX_pca = pca.fit_transform(X_scaled)\n\nprint('Variance expliquée:', pca.explained_variance_ratio_)\nprint('Total:', sum(pca.explained_variance_ratio_))\n\nplt.scatter(X_pca[:, 0], X_pca[:, 1], c=kmeans.labels_, cmap='viridis')\nplt.xlabel('PC1')\nplt.ylabel('PC2')\nplt.title('Clusters visualisés en 2D')\n```", summary: ['PCA réduit la dimensionnalité', 'explained_variance_ratio_ montre l\'info conservée'] },
            { id: 4, titre: 'Dashboard Plotly', duree: '120 min', objectif: 'Application', content: "# Dash\n\n```python\nimport dash\nfrom dash import dcc, html\nimport plotly.express as px\n\napp = dash.Dash(__name__)\n\nfig = px.scatter(x=X_pca[:, 0], y=X_pca[:, 1], color=kmeans.labels_)\n\napp.layout = html.Div([\n    html.H1('Customer Segmentation Dashboard'),\n    dcc.Graph(id='cluster-plot', figure=fig)\n])\n\nif __name__ == '__main__':\n    app.run_server(debug=True)\n```", summary: ['Dash crée des apps web interactives', 'dcc.Graph affiche des graphiques Plotly'] }
        ],
        outils: ['Python', 'Scikit-learn', 'Plotly', 'Dash']
    },
    {
        id: 'ab-testing-wqu',
        numero: 7,
        titre: 'Test A/B WorldQuant',
        pays: 'Global',
        duree: '8-10 heures',
        difficulte: 'Avancé',
        couleur: 'indigo',
        icone: '📧',
        resume: 'Menez un test Chi-carré et créez une application three-tiered.',
        objectifs: ['Designer une expérience A/B', 'Test Chi-carré', 'Classes ETL'],
        modules: [
            { id: 1, titre: 'Design d\'expérience', duree: '60 min', objectif: 'Hypothèses', content: "# A/B Testing\n\n## Hypothèses\n\n- **H₀** (hypothèse nulle) : L'email n'a pas d'effet sur les inscriptions\n- **H₁** (hypothèse alternative) : L'email augmente les inscriptions\n\n## Design\n\n```python\nimport numpy as np\n\n# Taille d'échantillon requise\neffect_size = 0.05  # 5% d'augmentation attendue\nalpha = 0.05\npower = 0.8\n\n# Calcul avec statsmodels\nfrom statsmodels.stats.power import TTestIndPower\nanalysis = TTestIndPower()\nsample_size = analysis.solve_power(effect_size=effect_size, alpha=alpha, power=power)\n```", summary: ['H₀ = hypothèse nulle', 'H₁ = hypothèse alternative'] },
            { id: 2, titre: 'Classes ETL Python', duree: '120 min', objectif: 'OOP', content: "# ETL\n\n```python\nclass DataExtractor:\n    def __init__(self, path):\n        self.path = path\n    \n    def extract(self):\n        return pd.read_csv(self.path)\n\nclass DataTransformer:\n    def transform(self, df):\n        df['enrolled'] = df['enrolled'].astype(int)\n        return df\n\nclass DataLoader:\n    def __init__(self, conn):\n        self.conn = conn\n    \n    def load(self, df, table_name):\n        df.to_sql(table_name, self.conn, if_exists='replace')\n```", summary: ['ETL = Extract Transform Load', 'Les classes encapsulent la logique'] },
            { id: 3, titre: 'Analyse statistique', duree: '90 min', objectif: 'Chi-carré', content: "# Chi-carré\n\n```python\nfrom scipy.stats import chi2_contingency\n\n# Table de contingence\ncontingency = pd.crosstab(df['email_sent'], df['enrolled'])\nprint(contingency)\n\n# Test Chi-carré\nchi2, p_value, dof, expected = chi2_contingency(contingency)\n\nprint('Chi²:', chi2)\nprint('P-value:', p_value)\nprint('Significatif:', 'OUI' if p_value < 0.05 else 'NON')\n```", summary: ['chi2_contingency teste l\'indépendance', 'p-value < 0.05 = effet significatif'] },
            { id: 4, titre: 'App Three-Tiered', duree: '90 min', objectif: 'Architecture', content: "# Architecture Three-Tiered\n\n## Structure\n\n1. **Data Layer** : Accès aux données (SQLite, API)\n2. **Business Layer** : Logique métier (ETL, analyse)\n3. **Presentation Layer** : Interface utilisateur (Flask, Dash)\n\n```python\n# Business Layer\nclass ABTestAnalyzer:\n    def __init__(self, data_layer):\n        self.data = data_layer\n    \n    def run_test(self):\n        df = self.data.get_experiment_data()\n        chi2, p_value, _, _ = chi2_contingency(\n            pd.crosstab(df['group'], df['converted'])\n        )\n        return {'chi2': chi2, 'p_value': p_value}\n```", summary: ['Séparation des responsabilités', 'Facilite la maintenance'] }
        ],
        outils: ['Python', 'SciPy', 'Flask']
    },
    {
        id: 'volatility-india',
        numero: 8,
        titre: 'Volatilité en Inde',
        pays: 'Inde',
        duree: '10-12 heures',
        difficulte: 'Expert',
        couleur: 'amber',
        icone: '📈',
        resume: 'Créez un modèle GARCH et votre propre API REST avec FastAPI.',
        objectifs: ['Acquérir des données via API', 'Modèle GARCH', 'API REST'],
        modules: [
            { id: 1, titre: 'Acquisition API', duree: '90 min', objectif: 'yfinance', content: "# yfinance\n\n```python\nimport yfinance as yf\nimport numpy as np\n\n# Télécharger les données Nifty 50\ndata = yf.download('^NSEI', start='2018-01-01', end='2023-12-31')\n\n# Calculer les log returns\ndata['log_returns'] = 100 * np.log(data['Close'] / data['Close'].shift(1))\nreturns = data['log_returns'].dropna()\n\nprint('Statistiques des rendements:')\nprint(returns.describe())\n```", summary: ['yf.download() télécharge les données', 'Log returns = rendements logarithmiques'] },
            { id: 2, titre: 'Analyse volatilité', duree: '90 min', objectif: 'Log returns', content: "# Volatilité\n\nLa volatilité mesure l'amplitude des variations de prix. Elle est souvent plus élevée en période de crise.\n\n```python\n# Volatilité rolling\ndata['volatility_30d'] = returns.rolling(window=30).std() * np.sqrt(252)\n\nplt.figure(figsize=(14, 6))\nplt.subplot(1, 2, 1)\nplt.plot(data['Close'])\nplt.title('Prix de clôture')\n\nplt.subplot(1, 2, 2)\nplt.plot(data['volatility_30d'])\nplt.title('Volatilité annualisée (30 jours)')\nplt.tight_layout()\n```", summary: ['Volatilité = écart-type des rendements', 'GARCH modélise la volatilité variable'] },
            { id: 3, titre: 'Modèle GARCH', duree: '120 min', objectif: 'Prévision', content: "# GARCH\n\n```python\nfrom arch import arch_model\n\n# Modèle GARCH(1,1)\nmodel = arch_model(returns, vol='Garch', p=1, q=1)\nresults = model.fit(disp='off')\n\nprint(results.summary())\n\n# Prévision sur 5 jours\nforecast = results.forecast(horizon=5)\nprint('Volatilité prévue (5 jours):')\nprint(np.sqrt(forecast.variance.iloc[-1]))\n```", summary: ['GARCH(1,1) est le modèle standard', 'forecast() prédit la volatilité future'] },
            { id: 4, titre: 'API FastAPI', duree: '120 min', objectif: 'Endpoints REST', content: "# FastAPI\n\n```python\nfrom fastapi import FastAPI\nfrom pydantic import BaseModel\nimport uvicorn\n\napp = FastAPI(title='Volatility API')\n\nclass VolatilityResponse(BaseModel):\n    ticker: str\n    forecast: list\n\n@app.get('/predict/{ticker}')\ndef predict_volatility(ticker: str, horizon: int = 5):\n    # Ici: récupérer données, entraîner GARCH, prévoir\n    return VolatilityResponse(\n        ticker=ticker,\n        forecast=[0.15, 0.16, 0.14, 0.15, 0.17]\n    )\n\nif __name__ == '__main__':\n    uvicorn.run(app, host='0.0.0.0', port=8000)\n```", summary: ['FastAPI crée des APIs modernes', '@app.get définit un endpoint', 'pydantic valide les données'] }
        ],
        outils: ['Python', 'arch', 'FastAPI', 'yfinance']
    }
];

export const getProjetById = (id) => dataScienceProjects.find(p => p.id === id);
export const statsDataScience = { nombreProjets: 8, dureeTotale: '60-80 heures' };
