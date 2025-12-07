
export const visualizationData = {
    id: 'vis-data',
    title: 'Visualisation & Projets',
    chapters: [
        {
            id: 'vis-01',
            part: 'Partie 1 : Principes',
            title: '1. L\'Art de la Data Viz',
            story: "Une image vaut mille mots. Mais une mauvaise visualisation peut mentir mille fois. La Data Viz est l'art de raconter des histoires avec des données (Storytelling).",
            content: `
                <h3>1. Choisir le bon graphique</h3>
                <ul>
                    <li><strong>Comparaison :</strong> Bar Chart, Column Chart.</li>
                    <li><strong>Evolution :</strong> Line Chart, Area Chart.</li>
                    <li><strong>Distribution :</strong> Histogram, Box Plot.</li>
                    <li><strong>Relation :</strong> Scatter Plot, Bubble Chart.</li>
                </ul>
                <h3>2. Principes de Tufte</h3>
                <p>Minimiser le "Data-Ink ratio". Enlever tout ce qui ne porte pas d'information (bruit graphique, 3D inutile, couleurs criardes).</p>
                <h3>3. Outils Python</h3>
                <p><code>Matplotlib</code> pour le contrôle total, <code>Seaborn</code> pour la beauté statistique, <code>Plotly</code> pour l'interactivité.</p>
            `,
            summary: [
                "Toujours titrer les axes.",
                "Attention aux échelles tronquées (qui ne commencent pas à 0) pour les Bar Charts.",
                "La couleur doit servir l'information, pas la décoration."
            ],
            exercises: [
                {
                    id: 'quiz-vis-1',
                    question: "Quel graphique utiliser pour voir la corrélation entre le poids et la taille ?",
                    options: ["Pie Chart", "Scatter Plot (Nuage de points)", "Histogramme", "Line Chart"],
                    correctAnswer: 1,
                    explanation: "Le Scatter Plot permet de voir comment une variable évolue en fonction de l'autre (X vs Y)."
                }
            ]
        },
        {
            id: 'vis-02',
            part: 'Partie 2 : Projets SymLab',
            title: '2. Showcase : Analyses de Données',
            story: "Voici des exemples concrets de visualisations réalisées dans les projets de SymLab. Analyse de résultats d'examens, simulation physique, etc.",
            content: `
                <h3>1. Analyse des Notes (Pandas + Seaborn)</h3>
                <pre><code class="language-python">
import seaborn as sns
sns.heatmap(df.corr(), annot=True, cmap='coolwarm')
                </code></pre>
                <p>Cette Heatmap permet de voir instantanément que les notes en Maths sont fortement corrélées à celles en Physique.</p>
                
                <h3>2. Trajectoires 3D (Matplotlib)</h3>
                <p>Simulation du système solaire ou de Lorenz Attractor. La 3D permet de comprendre la complexité du chaos.</p>
                
                <h3>3. Dashboard Interactif (Streamlit/Dash)</h3>
                <p>Transformer un notebook statique en application web où l'utilisateur peut jouer avec les paramètres.</p>
            `,
            summary: [
                "Un bon projet de Data Science finit toujours par un Dashboard ou un rapport visuel.",
                "L'interactivité engage l'utilisateur (zoom, filtre, hover)."
            ],
            exercises: [
                {
                    id: 'quiz-vis-2',
                    question: "Quelle bibliothèque est spécialisée dans les graphiques interactifs web ?",
                    options: ["Matplotlib", "Seaborn", "Plotly", "NumPy"],
                    correctAnswer: 2,
                    explanation: "Plotly génère du HTML/JS interactif, contrairement à Matplotlib qui génère des images statiques."
                }
            ]
        }
    ]
};
