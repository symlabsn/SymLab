// Data Science Appliquée - 8 Projets avec Modules
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
        resume: 'Analysez 21 000 propriétés pour déterminer si les prix dépendent plus de la taille ou de la localisation.',
        objectifs: [
            'Importer et nettoyer des données CSV',
            'Construire des visualisations',
            'Calculer la corrélation de Pearson'
        ],
        modules: [
            { id: 1, titre: 'Acquisition des données', duree: '45 min', objectif: 'Charger le dataset' },
            { id: 2, titre: 'Nettoyage et préparation', duree: '60 min', objectif: 'Préparer les données' },
            { id: 3, titre: 'Visualisation exploratoire', duree: '90 min', objectif: 'Créer des graphiques' },
            { id: 4, titre: 'Analyse et conclusions', duree: '45 min', objectif: 'Répondre à la question' }
        ],
        outils: ['Python', 'Pandas', 'Matplotlib', 'Seaborn']
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
        resume: 'Construisez un modèle de régression linéaire pour prédire les prix des appartements.',
        objectifs: [
            'Construire un modèle de régression linéaire',
            'Créer un pipeline scikit-learn',
            'Réduire l\'overfitting avec Ridge'
        ],
        modules: [
            { id: 1, titre: 'Exploration des données', duree: '90 min', objectif: 'Comprendre les données' },
            { id: 2, titre: 'Pipeline de prétraitement', duree: '90 min', objectif: 'Créer le pipeline' },
            { id: 3, titre: 'Modélisation', duree: '90 min', objectif: 'Entraîner le modèle' },
            { id: 4, titre: 'Réduction overfitting', duree: '60 min', objectif: 'Régularisation' }
        ],
        outils: ['Python', 'Scikit-learn', 'Pandas']
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
        resume: 'Construisez un modèle ARMA pour prédire les niveaux de pollution PM2.5.',
        objectifs: [
            'Extraire des données MongoDB',
            'Tester la stationnarité',
            'Construire un modèle ARMA'
        ],
        modules: [
            { id: 1, titre: 'Connexion MongoDB', duree: '60 min', objectif: 'Extraire les données' },
            { id: 2, titre: 'Analyse temporelle', duree: '90 min', objectif: 'Comprendre les patterns' },
            { id: 3, titre: 'Modélisation ARMA', duree: '90 min', objectif: 'Construire le modèle' },
            { id: 4, titre: 'Optimisation', duree: '60 min', objectif: 'Grid Search sur (p, q)' }
        ],
        outils: ['Python', 'pymongo', 'statsmodels']
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
        resume: 'Classifiez les dégâts sismiques et analysez les biais dans les données.',
        objectifs: [
            'Extraire des données SQLite',
            'Construire des modèles de classification',
            'Détecter les biais discriminatoires'
        ],
        modules: [
            { id: 1, titre: 'Extraction SQLite', duree: '60 min', objectif: 'Requêtes SQL' },
            { id: 2, titre: 'Préparation données', duree: '90 min', objectif: 'Encoder et équilibrer' },
            { id: 3, titre: 'Classification', duree: '120 min', objectif: 'Logistic + Decision Tree' },
            { id: 4, titre: 'Analyse des biais', duree: '60 min', objectif: 'Métriques d\'équité' }
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
        objectifs: [
            'Maîtriser la CLI Linux',
            'Appliquer SMOTE',
            'Construire Random Forest et Gradient Boosting'
        ],
        modules: [
            { id: 1, titre: 'Linux CLI', duree: '60 min', objectif: 'Navigation terminal' },
            { id: 2, titre: 'Gestion déséquilibre', duree: '90 min', objectif: 'SMOTE et undersampling' },
            { id: 3, titre: 'Modèles d\'ensemble', duree: '120 min', objectif: 'RF et GB' },
            { id: 4, titre: 'Métriques métier', duree: '60 min', objectif: 'Precision/Recall' }
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
        resume: 'Segmentez les consommateurs avec K-Means et créez un dashboard interactif.',
        objectifs: [
            'Construire un modèle K-Means',
            'Appliquer PCA',
            'Créer un dashboard Plotly Dash'
        ],
        modules: [
            { id: 1, titre: 'Préparation données', duree: '60 min', objectif: 'Normalisation' },
            { id: 2, titre: 'Clustering K-Means', duree: '90 min', objectif: 'Méthode du coude' },
            { id: 3, titre: 'PCA et visualisation', duree: '90 min', objectif: 'Réduction dimensionnalité' },
            { id: 4, titre: 'Dashboard Plotly', duree: '120 min', objectif: 'Application interactive' }
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
        objectifs: [
            'Designer une expérience A/B',
            'Effectuer un test Chi-carré',
            'Construire des classes ETL'
        ],
        modules: [
            { id: 1, titre: 'Design d\'expérience', duree: '60 min', objectif: 'Hypothèses' },
            { id: 2, titre: 'Classes ETL Python', duree: '120 min', objectif: 'OOP et pipeline' },
            { id: 3, titre: 'Analyse statistique', duree: '90 min', objectif: 'Test Chi-carré' },
            { id: 4, titre: 'App Three-Tiered', duree: '90 min', objectif: 'Architecture' }
        ],
        outils: ['Python', 'SciPy', 'Flask', 'SQLite']
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
        objectifs: [
            'Acquérir des données via API',
            'Construire un modèle GARCH',
            'Créer une API REST'
        ],
        modules: [
            { id: 1, titre: 'Acquisition API', duree: '90 min', objectif: 'yfinance et stockage' },
            { id: 2, titre: 'Analyse volatilité', duree: '90 min', objectif: 'Log returns' },
            { id: 3, titre: 'Modèle GARCH', duree: '120 min', objectif: 'Prévision' },
            { id: 4, titre: 'API FastAPI', duree: '120 min', objectif: 'Endpoints REST' }
        ],
        outils: ['Python', 'arch', 'FastAPI', 'yfinance']
    }
];

export const getProjetById = (id) => dataScienceProjects.find(p => p.id === id);

export const statsDataScience = {
    nombreProjets: 8,
    nombrePays: 8,
    dureeTotale: '60-80 heures',
    niveaux: { debutant: 1, intermediaire: 4, avance: 2, expert: 1 }
};
