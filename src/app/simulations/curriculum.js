// Curriculum des simulations basé sur le système éducatif sénégalais
// Organisé par niveau : Collège (6ème-3ème), Lycée (2nde-Tle), Université

export const simulationsCurriculum = {
    college: {
        title: "Collège (6ème - 3ème)",
        subtitle: "BFEM - Brevet de Fin d'Études Moyennes",
        icon: "🎓",
        color: "#00F5D4",
        levels: {
            sixieme: {
                title: "6ème",
                subjects: {
                    svt: {
                        title: "Sciences de la Vie et de la Terre",
                        simulations: [
                            {
                                id: "cell-structure",
                                title: "Structure de la Cellule",
                                description: "Explorez l'intérieur d'une cellule végétale et animale en 3D",
                                difficulty: "facile",
                                duration: "15 min",
                                icon: "🔬",
                                tags: ["biologie", "cellule", "microscope"]
                            },
                            {
                                id: "photosynthesis",
                                title: "La Photosynthèse",
                                description: "Visualisez le processus de photosynthèse dans une feuille",
                                difficulty: "facile",
                                duration: "20 min",
                                icon: "🌱",
                                tags: ["plantes", "énergie", "chlorophylle"]
                            }
                        ]
                    },
                    physique: {
                        title: "Physique-Chimie",
                        simulations: [
                            {
                                id: "states-of-matter",
                                title: "États de la Matière",
                                description: "Observez les transitions solide-liquide-gaz au niveau moléculaire",
                                difficulty: "facile",
                                duration: "15 min",
                                icon: "💧",
                                tags: ["matière", "température", "molécules"]
                            },
                            {
                                id: "simple-circuits",
                                title: "Circuits Électriques Simples",
                                description: "Construisez et testez des circuits avec piles et ampoules",
                                difficulty: "facile",
                                duration: "20 min",
                                icon: "💡",
                                tags: ["électricité", "circuit", "courant"]
                            }
                        ]
                    }
                }
            },
            cinquieme: {
                title: "5ème",
                subjects: {
                    svt: {
                        title: "Sciences de la Vie et de la Terre",
                        simulations: [
                            {
                                id: "digestive-system",
                                title: "Système Digestif",
                                description: "Suivez le parcours des aliments dans le corps humain",
                                difficulty: "moyen",
                                duration: "25 min",
                                icon: "🫁",
                                tags: ["anatomie", "digestion", "nutrition"]
                            },
                            {
                                id: "blood-circulation",
                                title: "Circulation Sanguine",
                                description: "Explorez le cœur et le système circulatoire en 3D",
                                difficulty: "moyen",
                                duration: "30 min",
                                icon: "❤️",
                                tags: ["cœur", "sang", "vaisseaux"]
                            }
                        ]
                    },
                    physique: {
                        title: "Physique-Chimie",
                        simulations: [
                            {
                                id: "water-cycle",
                                title: "Cycle de l'Eau",
                                description: "Visualisez l'évaporation, condensation et précipitation",
                                difficulty: "moyen",
                                duration: "20 min",
                                icon: "🌊",
                                tags: ["eau", "climat", "météo"]
                            },
                            {
                                id: "light-reflection",
                                title: "Réflexion de la Lumière",
                                description: "Expérimentez avec miroirs et rayons lumineux",
                                difficulty: "moyen",
                                duration: "25 min",
                                icon: "🔦",
                                tags: ["optique", "lumière", "miroir"]
                            }
                        ]
                    }
                }
            },
            quatrieme: {
                title: "4ème",
                subjects: {
                    svt: {
                        title: "Sciences de la Vie et de la Terre",
                        simulations: [
                            {
                                id: "nervous-system",
                                title: "Système Nerveux",
                                description: "Découvrez comment les neurones transmettent l'information",
                                difficulty: "moyen",
                                duration: "30 min",
                                icon: "🧠",
                                tags: ["cerveau", "neurones", "réflexes"]
                            },
                            {
                                id: "plate-tectonics",
                                title: "Tectonique des Plaques",
                                description: "Observez les mouvements des plaques terrestres",
                                difficulty: "moyen",
                                duration: "25 min",
                                icon: "🌍",
                                tags: ["géologie", "séismes", "volcans"]
                            }
                        ]
                    },
                    physique: {
                        title: "Physique-Chimie",
                        simulations: [
                            {
                                id: "chemical-reactions",
                                title: "Réactions Chimiques",
                                description: "Visualisez les réactions au niveau atomique",
                                difficulty: "moyen",
                                duration: "30 min",
                                icon: "⚗️",
                                tags: ["chimie", "atomes", "réactions"]
                            },
                            {
                                id: "forces-motion",
                                title: "Forces et Mouvement",
                                description: "Expérimentez avec la gravité et les forces",
                                difficulty: "moyen",
                                duration: "25 min",
                                icon: "🎯",
                                tags: ["mécanique", "forces", "Newton"]
                            }
                        ]
                    }
                }
            },
            troisieme: {
                title: "3ème (BFEM)",
                subjects: {
                    svt: {
                        title: "Sciences de la Vie et de la Terre",
                        simulations: [
                            {
                                id: "genetics-dna",
                                title: "ADN et Génétique",
                                description: "Explorez la structure de l'ADN et l'hérédité",
                                difficulty: "difficile",
                                duration: "35 min",
                                icon: "🧬",
                                tags: ["ADN", "génétique", "hérédité"]
                            },
                            {
                                id: "immune-system",
                                title: "Système Immunitaire",
                                description: "Observez comment le corps se défend contre les infections",
                                difficulty: "difficile",
                                duration: "30 min",
                                icon: "🦠",
                                tags: ["immunité", "anticorps", "vaccins"]
                            }
                        ]
                    },
                    physique: {
                        title: "Physique-Chimie",
                        simulations: [
                            {
                                id: "atomic-structure",
                                title: "Structure de l'Atome",
                                description: "Plongez dans le monde subatomique",
                                difficulty: "difficile",
                                duration: "30 min",
                                icon: "⚛️",
                                tags: ["atome", "électrons", "noyau"]
                            },
                            {
                                id: "energy-conservation",
                                title: "Conservation de l'Énergie",
                                description: "Explorez les transformations d'énergie",
                                difficulty: "difficile",
                                duration: "35 min",
                                icon: "⚡",
                                tags: ["énergie", "conservation", "thermodynamique"]
                            }
                        ]
                    }
                }
            }
        }
    },
    lycee: {
        title: "Lycée (2nde - Terminale)",
        subtitle: "Baccalauréat - Séries S, L, L'",
        icon: "🎯",
        color: "#7C3AED",
        levels: {
            seconde: {
                title: "Seconde",
                subjects: {
                    physique: {
                        title: "Physique-Chimie",
                        simulations: [
                            {
                                id: "wave-interference",
                                title: "Interférences d'Ondes",
                                description: "Visualisez les phénomènes d'interférence lumineuse",
                                difficulty: "moyen",
                                duration: "30 min",
                                icon: "🌊",
                                tags: ["ondes", "lumière", "interférence"]
                            },
                            {
                                id: "molecular-geometry",
                                title: "Géométrie Moléculaire",
                                description: "Construisez et visualisez des molécules en 3D",
                                difficulty: "moyen",
                                duration: "35 min",
                                icon: "🔷",
                                tags: ["molécules", "liaisons", "géométrie"]
                            }
                        ]
                    },
                    svt: {
                        title: "SVT",
                        simulations: [
                            {
                                id: "cell-division",
                                title: "Division Cellulaire (Mitose)",
                                description: "Observez les étapes de la mitose en temps réel",
                                difficulty: "moyen",
                                duration: "30 min",
                                icon: "🔬",
                                tags: ["cellule", "mitose", "chromosomes"]
                            },
                            {
                                id: "ecosystem-dynamics",
                                title: "Dynamique des Écosystèmes",
                                description: "Simulez les interactions dans un écosystème",
                                difficulty: "moyen",
                                duration: "40 min",
                                icon: "🌳",
                                tags: ["écologie", "chaîne alimentaire", "biodiversité"]
                            }
                        ]
                    }
                }
            },
            premiere: {
                title: "Première S",
                subjects: {
                    physique: {
                        title: "Physique-Chimie",
                        simulations: [
                            {
                                id: "electromagnetic-induction",
                                title: "Induction Électromagnétique",
                                description: "Expérimentez avec les champs magnétiques et le courant",
                                difficulty: "difficile",
                                duration: "40 min",
                                icon: "🧲",
                                tags: ["électromagnétisme", "induction", "Faraday"]
                            },
                            {
                                id: "acid-base-titration",
                                title: "Dosage Acide-Base",
                                description: "Réalisez un titrage virtuel avec indicateurs colorés",
                                difficulty: "difficile",
                                duration: "35 min",
                                icon: "🧪",
                                tags: ["chimie", "pH", "titrage"]
                            }
                        ]
                    },
                    svt: {
                        title: "SVT",
                        simulations: [
                            {
                                id: "protein-synthesis",
                                title: "Synthèse des Protéines",
                                description: "Suivez le processus de transcription et traduction",
                                difficulty: "difficile",
                                duration: "40 min",
                                icon: "🧬",
                                tags: ["ADN", "ARN", "protéines"]
                            },
                            {
                                id: "photosynthesis-advanced",
                                title: "Photosynthèse Avancée",
                                description: "Explorez les réactions lumineuses et sombres",
                                difficulty: "difficile",
                                duration: "45 min",
                                icon: "🌿",
                                tags: ["photosynthèse", "chloroplaste", "ATP"]
                            }
                        ]
                    }
                }
            },
            terminale: {
                title: "Terminale S (BAC)",
                subjects: {
                    physique: {
                        title: "Physique-Chimie",
                        simulations: [
                            {
                                id: "quantum-mechanics",
                                title: "Mécanique Quantique",
                                description: "Visualisez les orbitales atomiques et la dualité onde-corpuscule",
                                difficulty: "très difficile",
                                duration: "50 min",
                                icon: "⚛️",
                                tags: ["quantique", "orbitales", "Schrödinger"]
                            },
                            {
                                id: "radioactivity",
                                title: "Radioactivité et Décroissance",
                                description: "Simulez la désintégration radioactive",
                                difficulty: "très difficile",
                                duration: "45 min",
                                icon: "☢️",
                                tags: ["nucléaire", "radioactivité", "demi-vie"]
                            },
                            {
                                id: "special-relativity",
                                title: "Relativité Restreinte",
                                description: "Explorez la dilatation du temps et la contraction des longueurs",
                                difficulty: "très difficile",
                                duration: "55 min",
                                icon: "🚀",
                                tags: ["Einstein", "relativité", "espace-temps"]
                            }
                        ]
                    },
                    svt: {
                        title: "SVT",
                        simulations: [
                            {
                                id: "neurotransmission",
                                title: "Transmission Synaptique",
                                description: "Observez la communication entre neurones",
                                difficulty: "très difficile",
                                duration: "40 min",
                                icon: "🧠",
                                tags: ["neurones", "synapse", "neurotransmetteurs"]
                            },
                            {
                                id: "evolution-selection",
                                title: "Évolution et Sélection Naturelle",
                                description: "Simulez l'évolution d'une population",
                                difficulty: "très difficile",
                                duration: "50 min",
                                icon: "🦎",
                                tags: ["évolution", "Darwin", "sélection"]
                            }
                        ]
                    }
                }
            }
        }
    },
    universite: {
        title: "Université",
        subtitle: "Licence & Master - Sciences",
        icon: "🔬",
        color: "#F59E0B",
        levels: {
            licence: {
                title: "Licence (L1-L3)",
                subjects: {
                    physique: {
                        title: "Physique",
                        simulations: [
                            {
                                id: "quantum-field-theory",
                                title: "Théorie Quantique des Champs",
                                description: "Visualisez les interactions particules-champs",
                                difficulty: "expert",
                                duration: "60 min",
                                icon: "⚛️",
                                tags: ["quantique", "champs", "particules"]
                            },
                            {
                                id: "fluid-dynamics",
                                title: "Dynamique des Fluides",
                                description: "Simulez l'écoulement de fluides complexes",
                                difficulty: "expert",
                                duration: "55 min",
                                icon: "🌊",
                                tags: ["fluides", "Navier-Stokes", "turbulence"]
                            },
                            {
                                id: "solid-state-physics",
                                title: "Physique du Solide",
                                description: "Explorez les structures cristallines et bandes d'énergie",
                                difficulty: "expert",
                                duration: "60 min",
                                icon: "💎",
                                tags: ["cristaux", "semi-conducteurs", "bandes"]
                            }
                        ]
                    },
                    chimie: {
                        title: "Chimie",
                        simulations: [
                            {
                                id: "molecular-orbital-theory",
                                title: "Théorie des Orbitales Moléculaires",
                                description: "Visualisez les orbitales moléculaires et liaisons",
                                difficulty: "expert",
                                duration: "55 min",
                                icon: "🔷",
                                tags: ["orbitales", "liaisons", "MO"]
                            },
                            {
                                id: "reaction-mechanisms",
                                title: "Mécanismes Réactionnels",
                                description: "Analysez les étapes des réactions organiques",
                                difficulty: "expert",
                                duration: "60 min",
                                icon: "⚗️",
                                tags: ["mécanismes", "organique", "cinétique"]
                            }
                        ]
                    },
                    biologie: {
                        title: "Biologie",
                        simulations: [
                            {
                                id: "enzyme-kinetics",
                                title: "Cinétique Enzymatique",
                                description: "Étudiez les mécanismes d'action des enzymes",
                                difficulty: "expert",
                                duration: "50 min",
                                icon: "🧬",
                                tags: ["enzymes", "catalyse", "Michaelis-Menten"]
                            },
                            {
                                id: "gene-regulation",
                                title: "Régulation Génique",
                                description: "Explorez les mécanismes de régulation de l'expression génique",
                                difficulty: "expert",
                                duration: "55 min",
                                icon: "🔬",
                                tags: ["gènes", "transcription", "régulation"]
                            }
                        ]
                    }
                }
            },
            master: {
                title: "Master (M1-M2)",
                subjects: {
                    physique: {
                        title: "Physique Avancée",
                        simulations: [
                            {
                                id: "string-theory",
                                title: "Théorie des Cordes",
                                description: "Visualisez les dimensions supplémentaires et vibrations",
                                difficulty: "expert",
                                duration: "70 min",
                                icon: "🎻",
                                tags: ["cordes", "dimensions", "supersymétrie"]
                            },
                            {
                                id: "black-holes",
                                title: "Trous Noirs et Relativité Générale",
                                description: "Explorez la courbure de l'espace-temps",
                                difficulty: "expert",
                                duration: "65 min",
                                icon: "🌌",
                                tags: ["trous noirs", "relativité", "espace-temps"]
                            }
                        ]
                    },
                    chimie: {
                        title: "Chimie Avancée",
                        simulations: [
                            {
                                id: "computational-chemistry",
                                title: "Chimie Computationnelle",
                                description: "Calculez les propriétés moléculaires par DFT",
                                difficulty: "expert",
                                duration: "60 min",
                                icon: "💻",
                                tags: ["DFT", "calculs", "ab initio"]
                            },
                            {
                                id: "nanomaterials",
                                title: "Nanomatériaux",
                                description: "Explorez les propriétés des nanostructures",
                                difficulty: "expert",
                                duration: "55 min",
                                icon: "🔬",
                                tags: ["nano", "matériaux", "graphène"]
                            }
                        ]
                    }
                }
            }
        }
    }
};

// Métadonnées pour les filtres et recherche
export const simulationMetadata = {
    difficulties: [
        { id: "facile", label: "Facile", color: "#10B981" },
        { id: "moyen", label: "Moyen", color: "#F59E0B" },
        { id: "difficile", label: "Difficile", color: "#EF4444" },
        { id: "très difficile", label: "Très Difficile", color: "#7C3AED" },
        { id: "expert", label: "Expert", color: "#EC4899" }
    ],
    subjects: [
        { id: "physique", label: "Physique", icon: "⚛️", color: "#3B82F6" },
        { id: "chimie", label: "Chimie", icon: "⚗️", color: "#8B5CF6" },
        { id: "svt", label: "SVT", icon: "🌱", color: "#10B981" },
        { id: "biologie", label: "Biologie", icon: "🧬", color: "#EC4899" }
    ]
};
