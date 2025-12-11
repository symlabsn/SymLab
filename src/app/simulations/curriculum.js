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
                            },
                            {
                                id: "simple-machines",
                                title: "Machines Simples",
                                description: "Leviers et poulies",
                                difficulty: "facile",
                                duration: "20 min",
                                icon: "🏗️",
                                tags: ["physique", "force", "levier"]
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
                            },
                            {
                                id: "sound-propagation",
                                title: "Propagation du Son",
                                description: "Vitesse et nature du son",
                                difficulty: "moyen",
                                duration: "20 min",
                                icon: "🔊",
                                tags: ["physique", "son", "ondes"]
                            },
                            {
                                id: "density-explorer",
                                title: "Masse Volumique et Densité",
                                description: "Comprenez pourquoi certains objets flottent et d'autres coulent",
                                difficulty: "moyen",
                                duration: "25 min",
                                icon: "⚗️",
                                tags: ["physique", "matière", "Archimède"]
                            },
                            {
                                id: "refraction-simulator",
                                title: "Réfraction de la Lumière",
                                description: "Visualisez comment la lumière change de direction entre milieux",
                                difficulty: "moyen",
                                duration: "25 min",
                                icon: "🔦",
                                tags: ["optique", "lumière", "Snell"]
                            },
                            {
                                id: "circuit-series-parallel",
                                title: "Circuits Série vs Parallèle",
                                description: "Comparez les deux types de montages électriques",
                                difficulty: "moyen",
                                duration: "30 min",
                                icon: "💡",
                                tags: ["électricité", "circuit", "courant"]
                            },
                            {
                                id: "mass-conservation",
                                title: "Conservation de la Masse",
                                description: "Découvrez la loi de Lavoisier lors des réactions chimiques",
                                difficulty: "moyen",
                                duration: "25 min",
                                icon: "⚖️",
                                tags: ["chimie", "réaction", "Lavoisier"]
                            },
                            {
                                id: "light-propagation-pc4",
                                title: "Propagation Rectiligne",
                                description: "Démontrez que la lumière voyage en ligne droite",
                                difficulty: "moyen",
                                duration: "20 min",
                                icon: "☀️",
                                tags: ["optique", "ombre", "lumière"]
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
                            { id: "rectilinear-motion", title: "Mouvement Rectiligne", description: "Vitesse, distance et temps", difficulty: "facile", duration: "20 min", icon: "🚗", tags: ["cinématique", "vitesse"] },
                            { id: "refraction-light", title: "Réfraction de la Lumière", description: "Lois de Snell-Descartes", difficulty: "moyen", duration: "25 min", icon: "🌈", tags: ["optique", "lumière"] },
                            { id: "light-spectrum", title: "Spectre Lumineux", description: "Dispersion par un prisme", difficulty: "facile", duration: "15 min", icon: "🎨", tags: ["lumière", "couleurs"] },
                            { id: "gravitation-universal", title: "Gravitation Universelle", description: "Attraction entre les masses", difficulty: "moyen", duration: "30 min", icon: "🪐", tags: ["force", "newton"] },
                            { id: "periodic-table", title: "Tableau Périodique", description: "Familles et classification", difficulty: "moyen", duration: "40 min", icon: "📊", tags: ["atomes", "chimie"] },
                            { id: "molar-mass", title: "La Mole", description: "Quantité de matière", difficulty: "difficile", duration: "45 min", icon: "⚖️", tags: ["mole", "avogadro"] },
                            { id: "magnetic-field-earth", title: "Champ Magnétique Terrestre", description: "Boussole et pôles", difficulty: "facile", duration: "20 min", icon: "🧭", tags: ["magnétisme", "terre"] },
                            { id: "vision-eye", title: "L'Œil et la Vision", description: "Formation des images", difficulty: "moyen", duration: "30 min", icon: "👁️", tags: ["optique", "lentilles"] }
                        ]
                    },
                    svt: {
                        title: "SVT",
                        simulations: [
                            { id: "cell-respiration", title: "Respiration Cellulaire", description: "Production d'énergie", difficulty: "moyen", duration: "35 min", icon: "⚡", tags: ["énergie", "cellule"] },
                            { id: "body-effort", title: "Organisme à l'Effort", description: "Adaptations physiologiques", difficulty: "facile", duration: "25 min", icon: "🏃", tags: ["cœur", "poumons"] },
                            { id: "cell-division", title: "Division Cellulaire (Mitose)", description: "Cycle cellulaire", difficulty: "moyen", duration: "30 min", icon: "🔬", tags: ["cellule", "mitose"] },
                            { id: "ecosystem-dynamics", title: "Dynamique des Écosystèmes", description: "Interactions", difficulty: "moyen", duration: "40 min", icon: "🌳", tags: ["écologie"] },
                            { id: "homeostasis-regulation", title: "Régulation Glycémie", description: "Insuline et Glucagon", difficulty: "moyen", duration: "30 min", icon: "🍭", tags: ["hormones", "santé"] }
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
                            { id: "electromagnetic-induction", title: "Induction Électromagnétique", description: "Champs et courants", difficulty: "difficile", duration: "40 min", icon: "🧲", tags: ["aimant", "bobine"] },
                            { id: "molar-concentration", title: "Concentration Molaire", description: "Solutions et dilutions", difficulty: "moyen", duration: "30 min", icon: "🧪", tags: ["chimie", "dosage"] },
                            { id: "quality-control-titration", title: "Contrôle Qualité", description: "Titrage colorimétrique", difficulty: "moyen", duration: "40 min", icon: "🌡️", tags: ["dosage", "chimie"] },
                            { id: "molecular-geometry", title: "Géométrie Moléculaire", description: "Modèle VSEPR", difficulty: "difficile", duration: "45 min", icon: "🔷", tags: ["atomes", "espace"] },
                            { id: "electrolysis", title: "Électrolyse", description: "Réactions forcées", difficulty: "difficile", duration: "40 min", icon: "🔋", tags: ["redox", "pile"] },
                            { id: "beer-lambert-law", title: "Loi de Beer-Lambert", description: "Dosage spectrophotométrique", difficulty: "moyen", duration: "30 min", icon: "🌈", tags: ["chimie", "lumière"] }
                        ]
                    },
                    svt: {
                        title: "SVT",
                        simulations: [
                            { id: "enzymatic-catalysis", title: "Catalyse Enzymatique", description: "Vitesse de réaction", difficulty: "difficile", duration: "40 min", icon: "🔑", tags: ["enzyme", "protéine"] },
                            { id: "tectonics-plates", title: "Tectonique des Plaques", description: "Dérive et séismes", difficulty: "moyen", duration: "35 min", icon: "🌍", tags: ["géologie", "terre"] },
                            { id: "greenhouse-effect", title: "Effet de Serre", description: "Bilan radiatif", difficulty: "moyen", duration: "25 min", icon: "🌡️", tags: ["climat", "réchauffement"] },
                            { id: "protein-synthesis", title: "Synthèse des Protéines", description: "ADN vers Protéine", difficulty: "difficile", duration: "40 min", icon: "🧬", tags: ["génétique"] },
                            { id: "plant-growth", title: "Croissance Végétale", description: "Auxine et Phototropisme", difficulty: "moyen", duration: "30 min", icon: "🌻", tags: ["plante", "hormone"] },
                            { id: "enzyme-kinetics", title: "Cinétique Enzymatique", description: "Vitesse et Saturation", difficulty: "difficile", duration: "40 min", icon: "⏱️", tags: ["enzyme", "vitesse"] }
                        ]
                    }
                }
            },
            terminale: {
                title: "Terminale S",
                subjects: {
                    physique: {
                        title: "Physique-Chimie",
                        simulations: [
                            { id: "satellite-motion", title: "Mouvement des Satellites", description: "Lois de Kepler", difficulty: "difficile", duration: "45 min", icon: "🛰️", tags: ["gravitation", "espace"] },
                            { id: "rc-circuit", title: "Circuit RC", description: "Condensateur", difficulty: "difficile", duration: "50 min", icon: "⚡", tags: ["électricité", "tps"] },
                            { id: "wave-interference", title: "Interférences d'Ondes", description: "Fentes de Young", difficulty: "très difficile", duration: "50 min", icon: "🌊", tags: ["ondes", "lumière"] },
                            { id: "diffraction-light", title: "Diffraction", description: "Nature ondulatoire", difficulty: "difficile", duration: "30 min", icon: "🌈", tags: ["lumière", "ondes"] },
                            { id: "chemical-equilibrium", title: "Équilibre Chimique", description: "Quotient de réaction", difficulty: "difficile", duration: "45 min", icon: "⚖️", tags: ["chimie", "équilibre"] },
                            { id: "acid-base-titration", title: "Dosage pH-métrique", description: "Suivi pH", difficulty: "difficile", duration: "45 min", icon: "⚗️", tags: ["chimie", "pH"] },
                            { id: "doppler-effect", title: "Effet Doppler", description: "Mouvement et fréquence", difficulty: "moyen", duration: "30 min", icon: "🚑", tags: ["ondes", "son"] },
                            { id: "kepler-laws", title: "Lois de Kepler", description: "Orbite des planètes", difficulty: "difficile", duration: "40 min", icon: "🪐", tags: ["gravitation", "espace"] },
                            { id: "pendulum-oscillation", title: "Oscillateurs", description: "Pendule simple", difficulty: "moyen", duration: "30 min", icon: "🕰️", tags: ["mécanique", "temps"] },
                            { id: "rlc-circuit", title: "Circuit RLC", description: "Oscillations électriques", difficulty: "très difficile", duration: "50 min", icon: "⚡", tags: ["électricité", "radio"] },
                            { id: "photoelectric-effect", title: "Effet Photoélectrique", description: "Photons et électrons", difficulty: "très difficile", duration: "40 min", icon: "☀️", tags: ["quantique", "lumière"] },
                            { id: "fusion-fission", title: "Nucléaire : Fusion/Fission", description: "Énergie de l'atome", difficulty: "très difficile", duration: "45 min", icon: "☢️", tags: ["nucléaire", "énergie"] },
                            { id: "esterification", title: "Estérification", description: "Synthèse d'arômes", difficulty: "moyen", duration: "40 min", icon: "🍓", tags: ["chimie", "organique"] },
                            { id: "soap-saponification", title: "Saponification", description: "Fabrication du savon", difficulty: "moyen", duration: "35 min", icon: "🧼", tags: ["chimie", "organique"] },
                            { id: "chirality-molecules", title: "Chiralité", description: "Isomérie spatiale", difficulty: "difficile", duration: "30 min", icon: "✋", tags: ["chimie", "espace"] },
                            { id: "radioactive-dating", title: "Datation Carbone 14", description: "Loi de décroissance", difficulty: "moyen", duration: "30 min", icon: "🦴", tags: ["nucléaire", "temps"] },
                            { id: "laser-principle", title: "Le Laser", description: "Émission stimulée", difficulty: "difficile", duration: "40 min", icon: "🔴", tags: ["optique", "quantique"] }
                        ]
                    },
                    svt: {
                        title: "SVT",
                        simulations: [
                            { id: "nerve-muscle-reflex", title: "Réflexe Myotatique", description: "Nerf et muscle", difficulty: "moyen", duration: "30 min", icon: "🦵", tags: ["nerf", "neurone"] },
                            { id: "meiosis-diversity", title: "Méiose et Diversité", description: "Brassage génétique", difficulty: "difficile", duration: "45 min", icon: "🎲", tags: ["génétique", "reproduction"] },
                            { id: "adaptive-immunity", title: "Immunité Adaptative", description: "Lymphocytes B et T", difficulty: "difficile", duration: "50 min", icon: "🛡️", tags: ["santé", "anticorps"] },
                            { id: "geothermics", title: "Géothermie", description: "Énergie interne", difficulty: "moyen", duration: "30 min", icon: "🌋", tags: ["énergie", "terre"] },
                            { id: "muscle-contraction", title: "Contraction Musculaire", description: "ATP et Mouvement", difficulty: "difficile", duration: "40 min", icon: "💪", tags: ["muscle", "énergie"] },
                            { id: "aids-virus", title: "VIH et Système Immunitaire", description: "Infection virale", difficulty: "moyen", duration: "35 min", icon: "🦠", tags: ["santé", "virus"] },
                            { id: "climate-feedback", title: "Rétroactions Climatiques", description: "Système Terre", difficulty: "difficile", duration: "40 min", icon: "🌡️", tags: ["climat", "écologie"] }
                        ]
                    }
                }
            }
        }
    },

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
