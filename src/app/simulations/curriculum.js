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
                            },
                            {
                                id: "plant-growth",
                                title: "Croissance des Plantes",
                                description: "Observez les étapes de la germination et de la croissance",
                                difficulty: "facile",
                                duration: "15 min",
                                icon: "🌻",
                                tags: ["plantes", "germination", "nature"]
                            },
                            {
                                id: "food-chain",
                                title: "Chaînes Alimentaires",
                                description: "Comprenez les relations entre producteurs et consommateurs",
                                difficulty: "facile",
                                duration: "20 min",
                                icon: "🦁",
                                tags: ["écologie", "animaux", "alimentation"]
                            },
                            {
                                id: "vertebrate-classification",
                                title: "Classification des Vertébrés",
                                description: "Apprenez à classer les animaux selon leurs caractéristiques",
                                difficulty: "facile",
                                duration: "25 min",
                                icon: "🐢",
                                tags: ["animaux", "classification", "zoologie"]
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
                            },
                            {
                                id: "mixture-separation",
                                title: "Séparation des Mélanges",
                                description: "Expérimentez la filtration, décantation et évaporation",
                                difficulty: "facile",
                                duration: "20 min",
                                icon: "🧪",
                                tags: ["chimie", "mélanges", "expérience"]
                            },
                            {
                                id: "volume-mass",
                                title: "Masse et Volume",
                                description: "Apprenez à mesurer et différencier masse et volume",
                                difficulty: "facile",
                                duration: "15 min",
                                icon: "⚖️",
                                tags: ["mesures", "physique", "balance"]
                            },
                            {
                                id: "water-purification",
                                title: "Purification de l'Eau",
                                description: "Les étapes pour rendre l'eau potable",
                                difficulty: "facile",
                                duration: "25 min",
                                icon: "💧",
                                tags: ["eau", "environnement", "santé"]
                            }
                        ]
                    },
                    math: {
                        title: "Mathématiques",
                        simulations: [
                            {
                                id: "geometric-shapes",
                                title: "Formes Géométriques",
                                description: "Explorez les propriétés des figures planes et solides",
                                difficulty: "facile",
                                duration: "15 min",
                                icon: "🔺",
                                tags: ["géométrie", "formes", "espace"]
                            },
                            {
                                id: "angles-measurement",
                                title: "Mesure des Angles",
                                description: "Utilisez un rapporteur virtuel pour mesurer des angles",
                                difficulty: "facile",
                                duration: "15 min",
                                icon: "📐",
                                tags: ["géométrie", "angles", "mesure"]
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
                            },
                            {
                                id: "respiration-human",
                                title: "Respiration Humaine",
                                description: "Mécanismes des poumons et échanges gazeux",
                                difficulty: "moyen",
                                duration: "20 min",
                                icon: "🌬️",
                                tags: ["corps", "poumons", "respiration"]
                            },
                            {
                                id: "volcano-eruption",
                                title: "Éruptions Volcaniques",
                                description: "Comprendre le fonctionnement des volcans",
                                difficulty: "moyen",
                                duration: "25 min",
                                icon: "🌋",
                                tags: ["géologie", "volcans", "terre"]
                            },
                            {
                                id: "earth-movement",
                                title: "Mouvements de la Terre",
                                description: "Rotation, révolution et saisons",
                                difficulty: "moyen",
                                duration: "20 min",
                                icon: "🌍",
                                tags: ["astronomie", "terre", "saisons"]
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
                            },
                            {
                                id: "density-buoyancy",
                                title: "Densité et Flottabilité",
                                description: "Pourquoi certains objets flottent et d'autres coulent",
                                difficulty: "moyen",
                                duration: "20 min",
                                icon: "⛵",
                                tags: ["physique", "eau", "Archimède"]
                            },
                            {
                                id: "electric-resistance",
                                title: "Résistance Électrique",
                                description: "L'effet des résistances dans un circuit",
                                difficulty: "moyen",
                                duration: "25 min",
                                icon: "🔋",
                                tags: ["électricité", "ohm", "circuit"]
                            },
                            {
                                id: "solutions-solubility",
                                title: "Solutions et Solubilité",
                                description: "Dissolution, saturation et concentration",
                                difficulty: "moyen",
                                duration: "20 min",
                                icon: "🧪",
                                tags: ["chimie", "mélanges", "eau"]
                            }
                        ]
                    },
                    math: {
                        title: "Mathématiques",
                        simulations: [
                            {
                                id: "triangles-properties",
                                title: "Propriétés des Triangles",
                                description: "Explorez les hauteurs, médianes et médiatrices",
                                difficulty: "moyen",
                                duration: "25 min",
                                icon: "📐",
                                tags: ["géométrie", "triangles", "lignes"]
                            },
                            {
                                id: "fraction-visualizer",
                                title: "Visualiseur de Fractions",
                                description: "Comprendre les fractions graphiquement",
                                difficulty: "moyen",
                                duration: "20 min",
                                icon: "🍰",
                                tags: ["nombres", "fractions", "calcul"]
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
                            },
                            {
                                id: "blood-groups",
                                title: "Groupes Sanguins",
                                description: "Comprendre les groupes A, B, AB, O et le rhésus",
                                difficulty: "moyen",
                                duration: "20 min",
                                icon: "🩸",
                                tags: ["sang", "santé", "hérédité"]
                            },
                            {
                                id: "human-reproduction",
                                title: "Reproduction Humaine",
                                description: "De la fécondation au développement",
                                difficulty: "moyen",
                                duration: "30 min",
                                icon: "👶",
                                tags: ["anatomie", "vie", "biologie"]
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
                            },
                            {
                                id: "light-propagation",
                                title: "Propagation Lumière",
                                description: "Ombres, pénombre et éclipses",
                                difficulty: "moyen",
                                duration: "25 min",
                                icon: "☀️",
                                tags: ["optique", "espace", "lumière"]
                            },
                            {
                                id: "combustion-reaction",
                                title: "Les Combustions",
                                description: "Le tétraèdre du feu et réactions",
                                difficulty: "moyen",
                                duration: "20 min",
                                icon: "🔥",
                                tags: ["chimie", "feu", "énergie"]
                            },
                            {
                                id: "atom-molecule-intro",
                                title: "Atomes et Molécules",
                                description: "Introduction à la structure de la matière",
                                difficulty: "moyen",
                                duration: "25 min",
                                icon: "⚛️",
                                tags: ["chimie", "matière", "particules"]
                            }
                        ]
                    },
                    math: {
                        title: "Mathématiques",
                        simulations: [
                            {
                                id: "pythagoras-theorem",
                                title: "Théorème de Pythagore",
                                description: "Visualisation géométrique du théorème",
                                difficulty: "moyen",
                                duration: "25 min",
                                icon: "📐",
                                tags: ["géométrie", "triangle", "calcul"]
                            },
                            {
                                id: "linear-equations",
                                title: "Équations Linéaires",
                                description: "Résolution graphique d'équations",
                                difficulty: "moyen",
                                duration: "30 min",
                                icon: "📈",
                                tags: ["algèbre", "courbes", "fonctions"]
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
                            },
                            {
                                id: "microbes-bacteria",
                                title: "Microbes et Bactéries",
                                description: "Diversité du monde microbien",
                                difficulty: "difficile",
                                duration: "25 min",
                                icon: "🧫",
                                tags: ["biologie", "santé", "microscope"]
                            },
                            {
                                id: "chromosomes-division",
                                title: "Chromosomes",
                                description: "Caryotypes et division cellulaire",
                                difficulty: "difficile",
                                duration: "30 min",
                                icon: "✖️",
                                tags: ["génétique", "cellule", "noyau"]
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
                            },
                            {
                                id: "ions-formation",
                                title: "Formation des Ions",
                                description: "Cations, anions et solutions ioniques",
                                difficulty: "difficile",
                                duration: "30 min",
                                icon: "🔋",
                                tags: ["chimie", "électricité", "matière"]
                            },
                            {
                                id: "ph-scale",
                                title: "Échelle de pH",
                                description: "Acides, bases et indicateurs colorés",
                                difficulty: "difficile",
                                duration: "25 min",
                                icon: "🧪",
                                tags: ["chimie", "acidité", "mesure"]
                            },
                            {
                                id: "weight-mass-relation",
                                title: "Poids et Masse",
                                description: "Relation P = m x g et gravité",
                                difficulty: "difficile",
                                duration: "25 min",
                                icon: "⚖️",
                                tags: ["physique", "newton", "espace"]
                            }
                        ]
                    },
                    math: {
                        title: "Mathématiques",
                        simulations: [
                            {
                                id: "thales-theorem",
                                title: "Théorème de Thalès",
                                description: "Proportionnalité dans les triangles",
                                difficulty: "difficile",
                                duration: "30 min",
                                icon: "📐",
                                tags: ["géométrie", "proportion", "calcul"]
                            },
                            {
                                id: "trig-circle",
                                title: "Cercle Trigonométrique",
                                description: "Sinus, cosinus et tangente",
                                difficulty: "difficile",
                                duration: "35 min",
                                icon: "⭕",
                                tags: ["trigonométrie", "angles", "cercle"]
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
                                description: "Visualisez la transcription et la traduction de l'ADN",
                                difficulty: "difficile",
                                duration: "40 min",
                                icon: "🧬",
                                tags: ["ADN", "ARN", "protéines"]
                            },
                            {
                                id: "advanced-photosynthesis",
                                title: "Photosynthèse Avancée",
                                description: "Explorez en détail les réactions lumineuses et le cycle de Calvin",
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
                                id: "synaptic-transmission",
                                title: "Transmission Synaptique",
                                description: "Visualisez la communication entre neurones",
                                difficulty: "très difficile",
                                duration: "40 min",
                                icon: "🧠",
                                tags: ["neurones", "synapse", "neurotransmetteurs"]
                            },
                            {
                                id: "evolution-selection",
                                title: "Évolution et Sélection Naturelle",
                                description: "Simulez l'évolution des populations par sélection naturelle",
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
