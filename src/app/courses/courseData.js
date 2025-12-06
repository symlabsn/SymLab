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
        id: 'pc-1s',
        level: 'Première',
        subject: 'Physique-Chimie',
        title: 'Physique Chimie 1ère S',
        description: 'Fascicule complet IA PG-CDC.',
        file: '/courses/Fascicule  PC 1ère S IA PG-CDC Février 2020 (V.pdf',
        icon: '⚡',
        color: 'purple'
    },
    {
        id: 'pc-wahab-1s',
        level: 'Première',
        subject: 'Physique-Chimie',
        title: 'Physique (Wahab Diop) 1ère S',
        description: 'Cours et exercices corrigés.',
        file: '/courses/Wahab Diop-PHYSIQUE WPS-lsll.pdf',
        icon: '⚛️',
        color: 'purple'
    },
    {
        id: 'chimie-wahab-1s',
        level: 'Première',
        subject: 'Physique-Chimie',
        title: 'Chimie (Wahab Diop) 1ère S',
        description: 'Cours et exercices corrigés.',
        file: '/courses/Wahab Diop-CHIMIE WPS-lsll.pdf',
        icon: '🧪',
        color: 'purple'
    },

    // --- Terminale ---
    {
        id: 'pc-ts',
        level: 'Terminale',
        subject: 'Physique-Chimie',
        title: 'Physique Chimie Tle S',
        description: 'Fascicule complet IA PG-CDC.',
        file: '/courses/Fascicule PC Tle S IA PG-CDC Février 2020 (VF).pdf',
        icon: '⚡',
        color: 'purple'
    },
    {
        id: 'pc-wahab-ts',
        level: 'Terminale',
        subject: 'Physique-Chimie',
        title: 'Physique (Wahab Diop) Tle S',
        description: 'Cours et exercices corrigés.',
        file: '/courses/Wahab Diop-PHYSIQUE WTS-lsll.pdf',
        icon: '⚛️',
        color: 'purple'
    },
    {
        id: 'chimie-wahab-ts',
        level: 'Terminale',
        subject: 'Physique-Chimie',
        title: 'Chimie (Wahab Diop) Tle S',
        description: 'Cours et exercices corrigés.',
        file: '/courses/Wahab Diop-CHIMIE WTS-lsll.pdf',
        icon: '🧪',
        color: 'purple'
    }
];
