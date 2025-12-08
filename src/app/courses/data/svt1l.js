export const svt1lData = {
    id: 'svt-1l',
    title: 'SVT 1ère L',
    author: 'SymLab Team (Conforme Programme Sénégal)',
    description: 'Programme de SVT 1ère L : Biologie, Nutrition et Géologie.',
    chapters: [
        {
            id: 'svt-1l-01',
            part: 'Biologie',
            title: '1. Organisation de la cellule',
            story: "La brique élémentaire du vivant.",
            content: `
### 1. Structure
Noyau, Cytoplasme, Membrane. Distinction Animale/Végétale.

### 2. Unicellulaires
Bactéries et Protozoaires.
            `,
            summary: ["La cellule est l'unité de structure du vivant."],
            exercises: [{ id: 'exo-svt1l-01', question: "Le noyau contient...", options: ["L'ADN", "De l'eau seule", "Rien", "Des déchets"], correctAnswer: 0, explanation: "C'est le centre de contrôle génétique." }]
        },
        {
            id: 'svt-1l-02',
            part: 'Biologie',
            title: '2. Bactéries et Virus',
            story: "Le monde invisible.",
            content: `
### 1. Bactéries
Micro-organismes procaryotes utiles (yogourt) ou pathogènes (choléra).

### 2. Virus
Parasites intracellulaires obligatoires (Grippe, SIDA).
            `,
            summary: ["Hygiène et vaccination."],
            exercises: [{ id: 'exo-svt1l-02', question: "Les virus sont-ils des cellules ?", options: ["Oui", "Non", "Parfois", "Je ne sais pas"], correctAnswer: 1, explanation: "Ils n'ont pas de métabolisme autonome." }]
        },
        {
            id: 'svt-1l-03',
            part: 'Biologie',
            title: '3. Les échanges cellulaires',
            story: "Comment la cellule se nourrit.",
            content: `
### 1. Echanges d'eau (Osmose)
L'eau suit le sel.

### 2. Echanges de solutés
Diffusion du plus concentré vers le moins concentré.
            `,
            summary: ["La membrane régule les entrées/sorties."],
            exercises: [{ id: 'exo-svt1l-03', question: "L'osmose concerne les mouvements...", options: ["D'eau", "De sel", "De sucre", "De protéines"], correctAnswer: 0, explanation: "À travers une membrane semi-perméable." }]
        },
        {
            id: 'svt-1l-04',
            part: 'Biologie',
            title: '4. Synthèse des protéines',
            story: "Le code de la vie.",
            content: `
### 1. Du Gène à la Protéine
L'information génétique (ADN) est copiée (Transcription) puis lue (Traduction) pour fabriquer des protéines.
            `,
            summary: ["ADN $\\to$ ARN $\\to$ Protéine."],
            exercises: [{ id: 'exo-svt1l-04', question: "Où se trouve l'ADN ?", options: ["Dans le noyau", "Dans le cytoplasme", "Hors de la cellule", "Dans la membrane"], correctAnswer: 0, explanation: "Chez les eucaryotes." }]
        },
        {
            id: 'svt-1l-05',
            part: 'Biologie',
            title: '5. Mitose et Chromosomes',
            story: "La multiplication cellulaire.",
            content: `
### 1. Mitose
Division conforme. Une cellule donne deux identiques.

### 2. Chromosomes
Visibles pendant la division. Support des caractères héréditaires.
            `,
            summary: ["Caryotype humain = 46 chromosomes."],
            exercises: [{ id: 'exo-svt1l-05', question: "Combien de chromosomes chez l'homme ?", options: ["23", "46", "92", "2"], correctAnswer: 1, explanation: "23 paires." }]
        },
        {
            id: 'svt-1l-06',
            part: 'Nutrition',
            title: '6. Des aliments aux nutriments',
            story: "Manger pour vivre.",
            content: `
### 1. Les Aliments
Glucides, Lipides, Protides, Eau, Vitamines.

### 2. Digestion
Simplification moléculaire par les enzymes digestives (salive, suc gastrique...).
            `,
            summary: ["Nutriment = Molécule simple assimilable."],
            exercises: [{ id: 'exo-svt1l-06', question: "La digestion transforme les aliments en...", options: ["Déchets uniquement", "Nutriments", "Energie directement", "Muscles"], correctAnswer: 1, explanation: "Glucose, acides aminés, acides gras." }]
        },
        {
            id: 'svt-1l-07',
            part: 'Nutrition',
            title: "7. L'absorption intestinale",
            story: "Le passage dans le sang.",
            content: `
### 1. La villosité intestinale
Surface d'échange immense dans l'intestin grêle.

### 2. Voies d'absorption
Voie sanguine (Sucres, acides aminés) et voie lymphatique (Graisses).
            `,
            summary: ["L'intestin grêle est le lieu principal de l'absorption."],
            exercises: [{ id: 'exo-svt1l-07', question: "Les graisses passent préférentiellement par...", options: ["Le sang", "La lymphe", "Les nerfs", "Les os"], correctAnswer: 1, explanation: "Via les vaisseaux chylifères." }]
        },
        {
            id: 'svt-1l-08',
            part: 'Géologie',
            title: '8. Introduction à la Géologie',
            story: "La science de la Terre.",
            content: `
### 1. Roches
Sédimentaires (Calcaire), Magmatiques (Basalte), Métamorphiques.

### 2. Phénomènes
Érosion, sédimentation, volcanisme.
            `,
            summary: ["Le cycle des roches."],
            exercises: [{ id: 'exo-svt1l-08', question: "Le volcanisme est un phénomène...", options: ["Interne", "Externe", "Atmosphérique", "Biologique"], correctAnswer: 0, explanation: "Expression de la chaleur interne." }]
        },
        {
            id: 'svt-1l-09',
            part: 'Géologie',
            title: '9. Ressources géologiques du Sénégal',
            story: "Nos richesses.",
            content: `
### 1. Potentialités
Phosphates, Fer, Or, Ciment (Calcaire), Sel.

### 2. Importance économique
Exploitation industrielle (ICS, Dangote, Sabodala).
            `,
            summary: ["Gestion durable nécessaire."],
            exercises: [{ id: 'exo-svt1l-09', question: "Le sel est exploité...", options: ["Au Lac Rose", "À Kédougou", "À Tambacounda", "Dans la forêt"], correctAnswer: 0, explanation: "Et dans les marais salants du Sine Saloum." }]
        }
    ]
};
