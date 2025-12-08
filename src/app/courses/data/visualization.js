export const visualizationData = {
    chapters: [
        {
            id: 'vis-intro',
            title: '1. L\'Art de la Visualisation',
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop",
            part: 'Module 1 : Fondamentaux',
            story: "Une image vaut mille mots. En 1854, John Snow a stoppé une épidémie de choléra à Londres non pas avec un médicament, mais avec une carte. En visualisant les cas sur un plan de la ville, il a identifié la pompe à eau contaminée. C'est le pouvoir de la visualisation : rendre l'invisible visible.",
            content: `
### Pourquoi visualiser ?
Le cerveau humain traite les images 60 000 fois plus vite que le texte. Une bonne visualisation permet de :
- **Identifier des tendances** invisibles dans un tableau Excel.
- **Communiquer une idée** complexe instantanément.
- **Prendre des décisions** basées sur des faits.

### Les 3 Piliers d'une bonne Dataviz
1.  **Clarté** : Supprimer le "bruit" (lignes inutiles, 3D inutile, couleurs criardes).
2.  **Précision** : Les échelles doivent être honnêtes (ne pas tronquer l'axe Y pour exagérer une différence).
3.  **Esthétique** : Un beau graphique engage le lecteur et renforce la crédibilité.

$$ \\text{Information} + \\text{Forme} = \\text{Savoir} $$
            `,
            summary: [
                'La visualisation est un outil de raisonnement, pas juste de décoration.',
                'Le choix du graphique dépend de la question posée (Comparaison ? Distribution ? Évolution ?).',
                'La simplicité est la sophistication suprême.'
            ],
            exercises: [
                {
                    id: 'vis-ex-1',
                    question: "Quel graphique est le plus adapté pour montrer l'évolution d'une variable dans le temps ?",
                    options: ['Diagramme circulaire (Camembert)', 'Graphique en ligne (Line Chart)', 'Nuage de points (Scatter Plot)'],
                    correctAnswer: 1,
                    explanation: "Le Line Chart est standard pour les séries temporelles car il montre la continuité et la direction du changement."
                },
                {
                    id: 'vis-ex-2',
                    question: "Qu'appelle-t-on le 'Data-Ink Ratio' (concept d'Edward Tufte) ?",
                    options: ['Le coût de l\'encre pour imprimer', 'La proportion d\'encre servant à afficher les données vs l\'encre totale', 'Le nombre de couleurs utilisées'],
                    correctAnswer: 1,
                    explanation: "Il faut maximiser l'encre qui représente l'information (les données) et minimiser celle qui sert à la décoration (grilles lourdes, cadres, etc.)."
                }
            ]
        },
        {
            id: 'vis-comparison',
            title: '2. Comparaisons : Bar Charts & Histograms',
            image: "https://images.unsplash.com/photo-1543286386-713df548e9cc?q=80&w=2670&auto=format&fit=crop",
            part: 'Module 1 : Fondamentaux',
            story: "Imaginez devoir comparer le PIB de 10 pays. Une liste de chiffres est illisible. Un Bar Chart permet de voir instantanément qui est le premier, le dernier, et l'écart entre eux. C'est l'outil de comparaison par excellence.",
            content: `
### Bar Chart (Diagramme en Barres)
**Usage** : Comparer des quantités entre différentes catégories (discrètes).
- **Vertical** : Quand les noms de catégories sont courts.
- **Horizontal** : Quand les noms sont longs (meilleure lisibilité).

**Exemple concret** : Nombre d'utilisateurs par réseau social.

\`\`\`python
import matplotlib.pyplot as plt
categories = ['TikTok', 'Instagram', 'Facebook']
valeurs = [1.2, 1.5, 2.9] # Milliards

plt.bar(categories, valeurs, color=['black', '#E1306C', '#4267B2'])
plt.title("Utilisateurs Actifs Mensuels")
plt.show()
\`\`\`

### Histogramme
**Usage** : Comprendre la **distribution** d'une variable continue.
- À quoi ressemble la répartition des notes d'une classe ? (Beaucoup de moyens, peu de très bons ?)

**Exemple concret** : Répartition des âges des passagers du Titanic.
On voit souvent une **cloche** (Distribution Normale ou Gaussienne), ou des distributions asymétriques.

**Erreur classique** : Confondre Bar Chart (catégories) et Histogramme (variable continue découpée en "bins" ou intervalles).
            `,
            summary: [
                'Utilisez des Bar Charts pour comparer des catégories distinctes.',
                'Utilisez des Histogrammes pour voir la forme des données (distribution).',
                'Toujours trier les barres par taille pour faciliter la lecture (sauf si l\'ordre naturel importe).'
            ],
            exercises: [
                {
                    id: 'vis-ex-3',
                    question: "Quelle est la différence fondamentale entre Bar Chart et Histogramme ?",
                    options: ['Les couleurs utilisées', 'L\'espace entre les barres', 'Le type de variable (Catégorielle vs Numérique continue)'],
                    correctAnswer: 2,
                    explanation: "Les Bar Charts comparent des éléments distincts (pommes, poires), les Histogrammes montrent la fréquence d'une variable continue (âge, taille) découpée en intervalles."
                }
            ]
        },
        {
            id: 'vis-correlation',
            title: '3. Corrélations : Scatter Plots & Heatmaps',
            image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2668&auto=format&fit=crop",
            part: 'Module 2 : Relations Statistiques',
            story: "Existe-t-il un lien entre le temps passé à étudier et la note à l'examen ? Pour le savoir, on ne regarde pas les moyennes, on regarde chaque individu. Le Scatter Plot (Nuage de points) est le détecteur de vérité.",
            content: `
### Scatter Plot (Nuage de Points)
**Usage** : Voir la relation entre **deux variables numériques**.
- Chaque point est une observation (un élève, un pays, une fleur).
- **Axe X** : Cause potentielle (ex: Temps de révision).
- **Axe Y** : Effet potentiel (ex: Note).

On cherche des **motifs** :
- Ligne montante ↗️ : Corrélation positive.
- Ligne descendante ↘️ : Corrélation négative.
- Nuage informe ☁️ : Pas de corrélation.

### Heatmap (Carte de Chaleur)
**Usage** : Visualiser une matrice de valeurs, souvent des **corrélations** entre plein de variables à la fois.
Les couleurs chaudes (rouge) indiquent une forte intensité, les froides (bleu) une faible.

**Cas Concret : Matrice de Corrélation**
Avant de faire du Machine Learning, on fait une Heatmap pour voir quelles variables sont liées.
            `,
            summary: [
                'Le Scatter Plot révèle les relations (linéaires ou non) entre deux variables.',
                'Attention : Corrélation n\'est pas Causalité ! (Ce n\'est pas parce qu\'il pleut que j\'ai pris mon parapluie, c\'est l\'inverse ? Non, c\'est une cause commune).',
                'La Heatmap est excellente pour avoir une vue d\'ensemble (Big Picture).'
            ],
            exercises: [
                {
                    id: 'vis-ex-4',
                    question: "Sur un Scatter Plot, si les points forment une ligne droite qui descend, le coefficient de corrélation est proche de :",
                    options: ['+1', '0', '-1'],
                    correctAnswer: 2,
                    explanation: "Une pente descendante indique une corrélation négative parfaite (-1) : quand X augmente, Y diminue."
                }
            ]
        },
        {
            id: 'vis-storytelling',
            title: '4. Data Storytelling : Cas Concrets',
            image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=2676&auto=format&fit=crop",
            part: 'Module 3 : Projets Complets',
            story: "Un graphique sans titre ni contexte est muet. Le Data Storytelling, c'est l'art de guider l'œil du lecteur vers ce qui est important. C'est la différence entre 'montrer des données' et 'raconter une histoire'.",
            content: `
### Cas Concret #1 : Le Réchauffement Climatique 🌍
**Objectif** : Montrer l'urgence.
**Mauvais** : Un tableau de températures par année.
**Bon** : Un Line Chart simple.
**Excellent (Storytelling)** :
1.  Utiliser un graphique en ligne.
2.  Colorer la ligne en dégradé (Bleu -> Rouge) selon la température.
3.  Ajouter une **annotation** textuelle sur l'année la plus chaude : *"2023 : Année record"*.
4.  Simplifier les axes (enlever les bordures inutiles).

\`\`\`python
# Concept
plt.plot(annees, temperatures, color='red')
plt.text(2023, 14.8, "Record Historique ->", ha='right')
plt.title("La planète brûle : +1.5°C en 100 ans", loc='left', fontsize=16)
\`\`\`

### Cas Concret #2 : Le Paradoxe des Ventes
Imaginez que les ventes mondiales augmentent, mais chutent en Afrique.
- Un Bar Chart global montre une hausse (vrai mais trompeur).
- Un **Grouped Bar Chart** par continent révèle le problème africain.
- **Leçon** : Toujours se demander "Qu'est-ce qui est caché par la moyenne ?"

### Pourquoi cette visualisation ?
| Type de Message | Visualisation Recommandée |
|-----------------|---------------------------|
| Évolution | Line Chart |
| Comparaison | Bar Chart |
| Relation | Scatter Plot |
| Distribution | Histogramme / Box Plot |
| Part d'un tout | Stacked Bar (Éviter les Camemberts !) |
            `,
            summary: [
                'Le titre doit donner la conclusion ("Les ventes chutent" vs "Graphique des ventes").',
                'Les annotations sont puissantes pour expliquer les pics et les creux.',
                'Évitez la 3D et les camemberts (Pie Charts) qui sont difficiles à lire pour le cerveau.'
            ],
            exercises: [
                {
                    id: 'vis-ex-5',
                    question: "Pourquoi est-il conseillé d'éviter les diagrammes circulaires (Pie Charts) ?",
                    options: ['Ils sont trop colorés', 'Le cerveau compare mal les angles et les surfaces', 'Ils ne sont pas disponibles en Python'],
                    correctAnswer: 1,
                    explanation: "Le cerveau humain a beaucoup de mal à comparer des angles ou des aires. Il est bien meilleur pour comparer des longueurs (Bar Charts)."
                }
            ]
        },
        {
            id: 'vis-matplotlib',
            title: '5. Matplotlib & Seaborn : Les Outils du Pro',
            image: "https://images.unsplash.com/photo-1509228468518-180dd4864904?q=80&w=2670&auto=format&fit=crop",
            part: 'Module 4 : Outils Pratiques',
            story: "Matplotlib est la bibliothèque de visualisation la plus utilisée en Python. Seaborn est sa version 'stylée'. Ensemble, ils permettent de créer des graphiques publication-ready en quelques lignes.",
            content: `
### Matplotlib : La Base
C'est la bibliothèque historique (2003). Très flexible mais parfois verbeuse.

\`\`\`python
import matplotlib.pyplot as plt
import numpy as np

# Données
x = np.linspace(0, 10, 100)
y = np.sin(x)

# Graphique
plt.figure(figsize=(10, 6))
plt.plot(x, y, linewidth=2, color='#00F5D4', label='sin(x)')
plt.title('Fonction Sinusoïdale', fontsize=16, fontweight='bold')
plt.xlabel('x')
plt.ylabel('y')
plt.grid(alpha=0.3)
plt.legend()
plt.show()
\`\`\`

### Seaborn : L'Élégance
Construit sur Matplotlib, Seaborn offre des thèmes modernes et des graphiques statistiques avancés.

\`\`\`python
import seaborn as sns
sns.set_theme(style="darkgrid")

# Box Plot avec Seaborn (en une ligne !)
tips = sns.load_dataset("tips")
sns.boxplot(x="day", y="total_bill", data=tips)
\`\`\`

### Personnalisation Avancée
- **Couleurs** : Utilisez des palettes cohérentes (viridis, coolwarm).
- **Fonts** : Changez la police pour un look professionnel.
- **Subplots** : Créez plusieurs graphiques côte à côte pour comparer.
            `,
            summary: [
                'Matplotlib = Contrôle total. Seaborn = Beauté rapide.',
                'Toujours sauvegarder en haute résolution (plt.savefig("graph.png", dpi=300)).',
                'Les palettes de couleurs doivent être accessibles (éviter rouge/vert pour les daltoniens).'
            ],
            exercises: [
                {
                    id: 'vis-ex-6',
                    question: "Quelle bibliothèque Python est construite au-dessus de Matplotlib pour offrir des graphiques plus esthétiques par défaut ?",
                    options: ['NumPy', 'Seaborn', 'Pandas'],
                    correctAnswer: 1,
                    explanation: "Seaborn est une surcouche de Matplotlib qui applique automatiquement des thèmes modernes et propose des fonctions de haut niveau."
                }
            ]
        },
        {
            id: 'vis-boxplot',
            title: '6. Box Plots : Comprendre la Dispersion',
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
            part: 'Module 4 : Outils Pratiques',
            story: "Imaginez que vous comparez les salaires de 3 entreprises. La moyenne ne suffit pas : une entreprise peut avoir une moyenne élevée mais avec d'énormes inégalités. Le Box Plot révèle toute l'histoire.",
            content: `
### Anatomie d'un Box Plot
C'est une boîte à moustaches qui résume 5 statistiques :
1.  **Minimum** : La moustache du bas.
2.  **Q1 (1er Quartile)** : 25% des données sont en dessous.
3.  **Médiane (Q2)** : La ligne au milieu de la boîte (50%).
4.  **Q3 (3ème Quartile)** : 75% des données sont en dessous.
5.  **Maximum** : La moustache du haut.

Les points au-delà des moustaches sont des **outliers** (valeurs aberrantes).

### Pourquoi c'est puissant ?
- On voit la **dispersion** (largeur de la boîte).
- On voit la **symétrie** (médiane centrée ou non).
- On détecte les **anomalies** (points isolés).

### Exemple Concret : Salaires par Département
\`\`\`python
import seaborn as sns
import matplotlib.pyplot as plt

data = {
    'Département': ['IT']*50 + ['RH']*50 + ['Ventes']*50,
    'Salaire': [60000 + np.random.randn()*10000 for _ in range(150)]
}

sns.boxplot(x='Département', y='Salaire', data=data)
plt.title('Distribution des Salaires par Département')
plt.show()
\`\`\`
            `,
            summary: [
                'Le Box Plot montre la distribution complète, pas juste la moyenne.',
                'La médiane est plus robuste que la moyenne face aux outliers.',
                'Comparer plusieurs Box Plots côte à côte révèle les différences entre groupes.'
            ],
            exercises: [
                {
                    id: 'vis-ex-7',
                    question: "Si la médiane d'un Box Plot est très proche du Q1 (bas de la boîte), cela signifie que :",
                    options: ['Les données sont symétriques', 'Les données sont concentrées vers les valeurs basses', 'Il y a beaucoup d\'outliers'],
                    correctAnswer: 1,
                    explanation: "Une médiane proche de Q1 indique une distribution asymétrique (skewed) avec une queue vers les valeurs hautes."
                }
            ]
        },
        {
            id: 'vis-project',
            title: '7. Projet Complet : Analyse COVID-19',
            image: "https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?q=80&w=2532&auto=format&fit=crop",
            part: 'Module 5 : Projet Final',
            story: "Mettons tout en pratique. Nous allons analyser les données de la pandémie COVID-19 pour comprendre l'évolution, comparer les pays, et raconter une histoire avec les données.",
            content: `
### Objectif du Projet
Créer un dashboard visuel complet qui répond à 3 questions :
1.  Comment le nombre de cas a-t-il évolué dans le temps ?
2.  Quels pays ont été les plus touchés ?
3.  Y a-t-il une corrélation entre la densité de population et le taux de mortalité ?

### Étape 1 : Chargement des Données
\`\`\`python
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns

# Charger les données (exemple fictif)
df = pd.read_csv('covid_data.csv')
# Colonnes : Date, Pays, Cas, Décès, Population
\`\`\`

### Étape 2 : Évolution Temporelle (Line Chart)
\`\`\`python
# Filtrer un pays
france = df[df['Pays'] == 'France']

plt.figure(figsize=(12, 6))
plt.plot(france['Date'], france['Cas'], linewidth=2, color='#FF6B6B')
plt.fill_between(france['Date'], france['Cas'], alpha=0.3, color='#FF6B6B')
plt.title('Évolution des Cas COVID-19 en France', fontsize=16)
plt.xlabel('Date')
plt.ylabel('Nombre de Cas')
plt.xticks(rotation=45)
plt.tight_layout()
plt.show()
\`\`\`

### Étape 3 : Comparaison Pays (Bar Chart)
\`\`\`python
# Top 10 pays par nombre total de cas
top10 = df.groupby('Pays')['Cas'].sum().nlargest(10)

plt.figure(figsize=(10, 6))
top10.plot(kind='barh', color='#7C3AED')
plt.title('Top 10 Pays - Cas Totaux')
plt.xlabel('Nombre de Cas')
plt.show()
\`\`\`

### Étape 4 : Corrélation (Scatter Plot)
\`\`\`python
# Densité vs Mortalité
df['Taux_Mortalité'] = (df['Décès'] / df['Cas']) * 100
df['Densité'] = df['Population'] / df['Superficie']

plt.figure(figsize=(10, 6))
sns.scatterplot(x='Densité', y='Taux_Mortalité', data=df, hue='Continent', s=100)
plt.title('Densité de Population vs Taux de Mortalité')
plt.xlabel('Densité (hab/km²)')
plt.ylabel('Taux de Mortalité (%)')
plt.show()
\`\`\`

### Leçons Apprises
- **Line Chart** : Montre la dynamique (vagues successives).
- **Bar Chart** : Compare les totaux.
- **Scatter Plot** : Révèle (ou non) une corrélation.
- **Annotations** : Marquer les pics importants (confinements, vaccins).
            `,
            summary: [
                'Un bon projet combine plusieurs types de visualisations pour raconter une histoire complète.',
                'Toujours nettoyer les données avant de visualiser (valeurs manquantes, doublons).',
                'Le contexte est roi : expliquer ce que montre le graphique, ne pas laisser le lecteur deviner.'
            ],
            exercises: [
                {
                    id: 'vis-ex-8',
                    question: "Dans le projet COVID-19, pourquoi utilise-t-on un Scatter Plot pour la densité vs mortalité ?",
                    options: ['Pour montrer l\'évolution dans le temps', 'Pour comparer des catégories', 'Pour chercher une relation entre deux variables numériques'],
                    correctAnswer: 2,
                    explanation: "Le Scatter Plot est l'outil idéal pour explorer les relations entre deux variables continues et détecter des corrélations."
                }
            ]
        }
    ]
};

