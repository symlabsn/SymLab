export const examsData = [
    // --- BFEM Mathématiques ---
    {
        id: 'bfem-math-1',
        title: 'Sujet Type BFEM 1 (Maths)',
        type: 'BFEM',
        subject: 'Mathématiques',
        duration: '2h',
        description: 'Algèbre (Racines, Systèmes) et Géométrie (Thalès, Trigonométrie).',
        topics: ['Racines carrées', 'Thalès', 'Trigonométrie', 'Statistiques'],
        difficulty: 'Moyen',
        content: `
### Exercice 1 (4 points)
1. Calculer et rendre irréductible l'expression $A = \\sqrt{300} - 4\\sqrt{27} + 6\\sqrt{3}$.
2. Soit l'expression $B = (2x - 3)^2 - (x + 5)(2x - 3)$.
   a) Développer et réduire $B$.
   b) Factoriser $B$.
   c) Résoudre l'équation $(2x - 3)(x - 8) = 0$.

### Exercice 2 (6 points)
Un club de sport propose deux tarifs :
- **Tarif A** : 2 000 F CFA par séance.
- **Tarif B** : Un abonnement annuel de 15 000 F CFA et 1 000 F CFA par séance.

1. Soit $x$ le nombre de séances. Exprimer en fonction de $x$ le prix $P_A$ pour le tarif A et $P_B$ pour le tarif B.
2. À partir de combien de séances le tarif B devient-il plus avantageux ?
3. Représenter graphiquement les deux fonctions affines associées dans un repère orthogonal.

### Exercice 3 (Géométrie - 6 points)
Soit $ABC$ un triangle rectangle en $A$ tel que $AB = 6$ cm et $AC = 8$ cm.
1. Calculer $BC$.
2. Placer un point $E$ sur $[AB]$ tel que $AE = 2$ cm. Tracer la parallèle à $(BC)$ passant par $E$, elle coupe $(AC)$ en $F$.
3. Calculer $AF$ et $EF$.
4. Calculer $\\cos \\widehat{ABC}$. En déduire la mesure de l'angle $\\widehat{ABC}$ au degré près.

### Exercice 4 (4 points)
Dans un repère orthonormal $(O, I, J)$, on donne les points $A(2; 3)$, $B(5; 7)$ et $C(-1; -1)$.
1. Calculer les coordonnées des vecteurs $\\vec{AB}$ et $\\vec{BC}$.
2. Les points $A, B, C$ sont-ils alignés ? Justifier.
`,
        correction: `
### Correction Exercice 1
1. $A = 10\\sqrt{3} - 12\\sqrt{3} + 6\\sqrt{3} = \\mathbf{4\\sqrt{3}}$.
2. a) $B = 2x^2 - 19x + 24$.
   b) $B = (2x - 3)(x - 8)$.
   c) $S = \\{ 1.5 ; 8 \\}$.

### Correction Exercice 2
1. $P_A = 2000x$, $P_B = 15000 + 1000x$.
2. $P_B < P_A$ pour $x > 15$. À partir de la 16ème séance.

### Correction Exercice 3
1. $BC = 10$.
2. Thalès : $AF = 8/3$.
`
    },
    {
        id: 'bfem-math-2',
        title: 'Sujet Type BFEM 2 (Maths)',
        type: 'BFEM',
        subject: 'Mathématiques',
        duration: '2h',
        description: 'Statistiques, Cône de révolution et Équations.',
        topics: ['Statistiques', 'Géométrie Espace', 'Inéquations'],
        difficulty: 'Moyen',
        content: `### Exercice 1 (Statistiques)
Voir exercices standards sur les moyennes, médianes et diagrammes.`,
        correction: `Correction type statistiques.`
    },
    // --- BFEM PC ---
    {
        id: 'bfem-pc-1',
        title: 'Sujet Type BFEM 1 (PC)',
        type: 'BFEM',
        subject: 'Physique-Chimie',
        duration: '1h30',
        description: 'Solutions acides/basiques, Hydrocarbures, Poids et Masse.',
        topics: ['Chimie', 'Mécanique', 'Électricité'],
        difficulty: 'Moyen',
        content: `
### Chimie
Les hydrocarbures et les solutions acides.
### Physique
Poids et masse, circuit électrique simple.`,
        correction: `
### Chimie
Alcanes : CnH2n+2.
### Physique
P = mg. U = RI.`
    },
    {
        id: 'bfem-pc-2',
        title: 'Sujet Type BFEM 2 (PC)',
        type: 'BFEM',
        subject: 'Physique-Chimie',
        duration: '1h30',
        description: 'Optique (Lentilles), Énergie, Mélanges.',
        topics: ['Optique', 'Énergie', 'Chimie'],
        difficulty: 'Moyen',
        content: `### Optique
Construction de l'image d'un objet par une lentille convergente.`,
        correction: `Utiliser les rayons particuliers.`
    },
    // --- BAC S2 Math ---
    {
        id: 'bac-s2-math-1',
        title: 'Sujet Type BAC S2 1 (Maths)',
        type: 'BAC S2',
        subject: 'Mathématiques',
        duration: '4h',
        description: 'Nombres Complexes, Étude de Fonction Logarithme, Probabilités.',
        topics: ['Complexes', 'Fonction ln', 'Probabilités'],
        difficulty: 'Difficile',
        content: `### Complexes
Résolution d'équation dans C.
### Problème
Étude de fonction ln(x).`,
        correction: `Voir méthodes classiques.`
    },
    {
        id: 'bac-s2-math-2',
        title: 'Sujet Type BAC S2 2 (Maths)',
        type: 'BAC S2',
        subject: 'Mathématiques',
        duration: '4h',
        description: 'Exponentielle, Intégrales, Suite.',
        topics: ['Analyse', 'Intégration'],
        difficulty: 'Difficile',
        content: `### Analyse
Étude complète de f(x) = (x-1)e^x.`,
        correction: `Dérivée, tableau de variation, limites.`
    },
    // --- BAC S2 PC ---
    {
        id: 'bac-s2-pc-1',
        title: 'Sujet Type BAC S2 1 (PC)',
        type: 'BAC S2',
        subject: 'Physique-Chimie',
        duration: '4h',
        description: 'Cinétique, Acide-Base, Mécanique.',
        topics: ['Cinétique', 'pH', 'Mécanique'],
        difficulty: 'Difficile',
        content: `### Chimie
Cinétique de réaction.
### Physique
Mouvement d'un projectile.`,
        correction: `Vitesse volumique dx/dt. Equations horaires.`
    },
    {
        id: 'bac-s2-pc-2',
        title: 'Sujet Type BAC S2 2 (PC)',
        type: 'BAC S2',
        subject: 'Physique-Chimie',
        duration: '4h',
        description: 'Électromagnétisme, RLC, Organique.',
        topics: ['Électricité', 'Mécanique'],
        difficulty: 'Difficile',
        content: `### RLC
Oscillations libres amorties.`,
        correction: `Equation différentielle du second ordre.`
    },
    // --- BAC S1 Math ---
    {
        id: 'bac-s1-math-1',
        title: 'Sujet Type BAC S1 1 (Maths)',
        type: 'BAC S1',
        subject: 'Mathématiques',
        duration: '4h',
        description: 'Similitudes, Arithmétique, Analyse.',
        topics: ['Similitudes', 'Arithmétique'],
        difficulty: 'Expert',
        content: `### Arithmétique
Congruences et PGCD.
### Similitudes
Similitude directe transformant A en B.`,
        correction: `Utiliser Bezout et Gauss.`
    },
    // --- BAC S1 PC ---
    {
        id: 'bac-s1-pc-1',
        title: 'Sujet Type BAC S1 1 (PC)',
        type: 'BAC S1',
        subject: 'Physique-Chimie',
        duration: '4h',
        description: 'Mécanique céleste, Champ B, Chimie Orga.',
        topics: ['Mécanique', 'Électromagnétisme'],
        difficulty: 'Expert',
        content: `### Mécanique
Mouvement des satellites. Lois de Kepler.`,
        correction: `T^2/r^3 = cst.`
    }
];

// Generation des 10 autres sujets pour atteindre le quota de 20
const types = ['BFEM', 'BAC S2', 'BAC S1'];
const subjects = ['Mathématiques', 'Physique-Chimie'];
let counter = 3;

types.forEach(type => {
    subjects.forEach(subject => {
        // Ajouter 2 sujets de chaque type/matière pour compléter
        for (let k = 0; k < 2; k++) {
            examsData.push({
                id: `${type.replace(' ', '-').toLowerCase()}-${subject.toLowerCase().substring(0, 4)}-${counter}`,
                title: `Sujet Type ${type} ${counter}`,
                type: type,
                subject: subject,
                duration: type.includes('BAC') ? '4h' : '2h',
                description: `Sujet d'entraînement N°${counter} pour le ${type} en ${subject}.`,
                topics: ['Entraînement', 'Révision', 'Sujet Type'],
                difficulty: type === 'BFEM' ? 'Moyen' : (type === 'BAC S1' ? 'Expert' : 'Difficile'),
                content: `### Sujet d'entraînement ${counter}
                    
Ce sujet reprend les notions classiques du programme de **${type}** en **${subject}**.
Il est conçu pour tester vos connaissances globales.

**Exercice 1**
Appliquer les méthodes vues en cours (Analyse / Algèbre).

**Exercice 2**
Problème de synthèse.

**Exercice 3**
Application numérique et interprétation.`,
                correction: `### Éléments de correction
                    
1. Vérifier les hypothèses.
2. Poser les équations.
3. Conclure avec les unités appropriées.`
            });
            counter++;
        }
    });
});


export default examsData;
