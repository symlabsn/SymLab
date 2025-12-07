export const courses = [
    // ==================================================================================
    // 📚 COLLÈGE (6ème - 3ème)
    // ==================================================================================

    // --- 6ème ---
    {
        id: 'math-6e',
        level: '6ème',
        subject: 'Mathématiques',
        title: 'Programme de Mathématiques 6ème',
        description: 'Géométrie plane, Nombres décimaux, Mesures.',
        file: '/courses/ADEM_MATHS_6e.pdf',
        icon: '📐',
        color: 'blue'
    },
    {
        id: 'svt-6e',
        level: '6ème',
        subject: 'SVT',
        title: 'Programme de SVT 6ème',
        description: 'Découverte du vivant, Environnement.',
        file: '/courses/ADEM_SVT_6e.pdf',
        icon: '🌿',
        color: 'green'
    },

    // --- 5ème ---
    {
        id: 'math-5e',
        level: '5ème',
        subject: 'Mathématiques',
        title: 'Programme de Mathématiques 5ème',
        description: 'Symétrie centrale, Fractions, Proportionnalité.',
        file: '/courses/ADEM_MATHS_5e.pdf',
        icon: '📐',
        color: 'blue'
    },
    {
        id: 'svt-5e',
        level: '5ème',
        subject: 'SVT',
        title: 'Programme de SVT 5ème',
        description: 'Respiration, Géologie externe.',
        file: '/courses/ADEM_SVT_5e.pdf',
        icon: '🌿',
        color: 'green'
    },

    // --- 4ème ---
    {
        id: 'math-4e',
        level: '4ème',
        subject: 'Mathématiques',
        title: 'Programme de Mathématiques 4ème',
        description: 'Théorème de Pythagore, Puissances, Équations.',
        file: '/courses/ADEM_MATHS_4e.pdf',
        icon: '📐',
        color: 'blue'
    },
    {
        id: 'pc-4e',
        level: '4ème',
        subject: 'Physique-Chimie',
        title: 'Programme de PC 4ème',
        description: 'Lumière, Atomes et Molécules, Combustion.',
        file: '/courses/ADEM_PC_4e.pdf',
        icon: '⚡',
        color: 'purple'
    },
    {
        id: 'svt-4e',
        level: '4ème',
        subject: 'SVT',
        title: 'Programme de SVT 4ème',
        description: 'Reproduction, Activité interne du globe.',
        file: '/courses/ADEM_SVT_4e.pdf',
        icon: '🌿',
        color: 'green'
    },

    // --- 3ème ---
    {
        id: 'math-3e',
        level: '3ème',
        subject: 'Mathématiques',
        title: 'Programme de Mathématiques 3ème',
        description: 'Thalès, Trigonométrie, Fonctions affines.',
        file: '/courses/ADEM_MATHS_3e.pdf',
        icon: '📐',
        color: 'blue'
    },
    {
        id: 'pc-3e',
        level: '3ème',
        subject: 'Physique-Chimie',
        title: 'Programme de PC 3ème',
        description: 'Mécanique, Solutions acides/basiques, Métaux.',
        file: '/courses/ADEM_PC_3e.pdf',
        icon: '⚡',
        color: 'purple'
    },
    {
        id: 'svt-3e',
        level: '3ème',
        subject: 'SVT',
        title: 'Programme de SVT 3ème',
        description: 'Immunologie, Génétique, Système nerveux.',
        file: '/courses/ADEM_SVT_3e.pdf',
        icon: '🌿',
        color: 'green'
    },

    // ==================================================================================
    // 🎓 LYCÉE (Seconde - Terminale)
    // ==================================================================================

    // --- Seconde ---
    {
        id: 'math-2s',
        level: 'Seconde',
        subject: 'Mathématiques',
        title: 'Mathématiques 2nde S',
        description: 'Programme complet : Algèbre, Analyse, Géométrie vectorielle et analytique.',
        file: null,
        icon: '📐',
        color: 'blue'
    },
    {
        id: 'entrainement-2s',
        level: 'Seconde',
        subject: 'Physique-Chimie',
        title: 'Entraînement Intensif 2nde S',
        description: 'Banque d\'exercices rigoureux de A à Z avec corrections détaillées pour tous les chapitres.',
        file: null, // Interactive only
        icon: '🏋️',
        color: 'red'
    },
    {
        id: 'phys-2s',
        level: 'Seconde',
        subject: 'Physique-Chimie',
        title: 'Physique 2nde S',
        description: 'Cours complet et exercices interactifs (Mécanique, Électricité, Optique).',
        file: '/courses/Wahab Diop-PHYSIQUE WSS-lsll.pdf',
        icon: '⚛️',
        color: 'purple'
    },
    {
        id: 'chimie-2s',
        level: 'Seconde',
        subject: 'Physique-Chimie',
        title: 'Chimie 2nde S',
        description: 'Cours complet de Chimie : De l\'atome aux solutions aqueuses.',
        file: '/courses/Wahab Diop-CHIMIE WSS-lsll.pdf',
        icon: '🧪',
        color: 'emerald'
    },
    {
        id: 'svt-2s',
        level: 'Seconde',
        subject: 'SVT',
        title: 'SVT 2nde S',
        description: 'Écologie, Énergie, Géologie. Programme officiel du Sénégal.',
        file: null,
        icon: '🌿',
        color: 'green'
    },

    // --- Première ---
    {
        id: 'math-1s',
        level: 'Première',
        subject: 'Mathématiques',
        title: 'Mathématiques 1ère S',
        description: 'Programme complet : Analyse, Algèbre, Géométrie plane et espace.',
        file: null,
        icon: '📐',
        color: 'blue'
    },
    {
        id: 'entrainement-1s',
        level: 'Première',
        subject: 'Physique-Chimie',
        title: 'Entraînement PC 1ère S',
        description: 'Exercices corrigés et Problèmes de synthèse (Énergie, Redox, Organique).',
        file: null,
        icon: '🏋️',
        color: 'orange'
    },
    {
        id: 'phys-1s',
        level: 'Première',
        subject: 'Physique-Chimie',
        title: 'Physique 1ère S',
        description: 'Programme complet : Énergie, Champs, Électronique, Optique.',
        file: '/courses/Wahab Diop-PHYSIQUE WPS-lsll.pdf',
        icon: '⚛️',
        color: 'purple'
    },
    {
        id: 'chimie-1s',
        level: 'Première',
        subject: 'Physique-Chimie',
        title: 'Chimie 1ère S',
        description: 'Programme complet : Organique, Oxydoréduction, Électrolyse.',
        file: '/courses/Wahab Diop-CHIMIE WPS-lsll.pdf',
        icon: '🧪',
        color: 'emerald'
    },

    {
        id: 'svt-1s',
        level: 'Première',
        subject: 'SVT',
        title: 'SVT 1ère S',
        description: 'Programme complet : Biologie Cellulaire, Physiologie, Géologie.',
        file: null,
        icon: '🌿',
        color: 'green'
    },
    {
        id: 'svt-1l',
        level: 'Première',
        subject: 'SVT',
        title: 'SVT 1ère L',
        description: 'Programme L : Biologie, Nutrition, Géologie.',
        file: null,
        icon: '🍃', // Different icon/shade for L if possible, or same
        color: 'teal'
    },

    // --- Terminale ---
    {
        id: 'math-ts',
        level: 'Terminale',
        subject: 'Mathématiques',
        title: 'Mathématiques Tle S',
        description: 'Analyse, Algèbre, Probabilités. Programme complet conforme.',
        file: null,
        icon: '📐',
        color: 'blue'
    },
    {
        id: 'phys-ts',
        level: 'Terminale',
        subject: 'Physique-Chimie',
        title: 'Physique Terminale S',
        description: 'Cinématique, Électromagnétisme, Oscillations, Phénomènes corpusculaires.',
        file: null,
        icon: '⚛️',
        color: 'purple'
    },
    {
        id: 'chimie-ts',
        level: 'Terminale',
        subject: 'Physique-Chimie',
        title: 'Chimie Terminale S',
        description: 'Chimie organique, Cinétique, Acides et Bases (pH, dosages).',
        file: null,
        icon: '🧪',
        color: 'emerald'
    },
    {
        id: 'svt-ts',
        level: 'Terminale',
        subject: 'SVT',
        title: 'SVT Terminale S',
        description: 'Neurophysiologie, Immunologie, Génétique. Programme complet conforme.',
        file: null,
        icon: '🌿',
        color: 'green'
    },

    // ==================================================================================
    // 🚀 RESSOURCES PRO & DATA SCIENCE
    // ==================================================================================

    {
        id: 'ml-intro',
        level: 'Supérieur',
        subject: 'Informatique',
        title: 'Introduction au Machine Learning',
        description: 'Découvrez les algorithmes qui changent le monde : Régression, Réseaux de Neurones, Deep Learning.',
        file: null,
        icon: '🤖',
        color: 'indigo'
    },
    {
        id: 'math-ml',
        level: 'Supérieur',
        subject: 'Mathématiques',
        title: 'Mathématiques pour l\'IA',
        description: 'Les fondements mathématiques indispensables : Algèbre Linéaire, Gradients, Probabilités Bayesiennes.',
        file: null,
        icon: '♾️',
        color: 'cyan'
    },
    {
        id: 'vis-data',
        level: 'Supérieur',
        subject: 'Informatique',
        title: 'Visualisation de Données & Projets',
        description: 'Maîtrisez l\'art du Storytelling avec la Data. Matplotlib, Seaborn et Showcase de projets SymLab.',
        file: null,
        icon: '📊',
        color: 'pink'
    }
];
