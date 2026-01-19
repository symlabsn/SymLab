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
                                image: "/simulations/cell-structure.png",
                                tags: ["biologie", "cellule", "microscope"]
                            },
                            {
                                id: "photosynthesis",
                                title: "La Photosynthèse",
                                description: "Visualisez le processus de photosynthèse dans une feuille",
                                difficulty: "facile",
                                duration: "20 min",
                                icon: "🌱",
                                image: "/simulations/photosynthesis.png",
                                tags: ["plantes", "énergie", "chlorophylle"]
                            },
                            {
                                id: "plant-growth",
                                title: "Croissance des Plantes",
                                description: "Observez les étapes de la germination et de la croissance",
                                difficulty: "facile",
                                duration: "15 min",
                                icon: "🌻",
                                image: "/simulations/plant-growth.png",
                                tags: ["plantes", "germination", "nature"]
                            },
                            {
                                id: "food-chain",
                                title: "Chaînes Alimentaires",
                                description: "Comprenez les relations entre producteurs et consommateurs",
                                difficulty: "facile",
                                duration: "20 min",
                                icon: "🦁",
                                image: "/simulations/food-chain.png",
                                tags: ["écologie", "animaux", "alimentation"]
                            },
                            {
                                id: "vertebrate-classification",
                                title: "Classification des Vertébrés",
                                description: "Apprenez à classer les animaux selon leurs caractéristiques",
                                difficulty: "facile",
                                duration: "25 min",
                                icon: "🐢",
                                image: "/simulations/vertebrate-classification.png",
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
                                image: "/simulations/svt4e/nervous-system.png",
                                tags: ["cerveau", "neurones", "réflexes"]
                            },
                            {
                                id: "plate-tectonics",
                                title: "Tectonique des Plaques",
                                description: "Observez les mouvements des plaques terrestres",
                                difficulty: "moyen",
                                duration: "25 min",
                                icon: "🌍",
                                image: "/simulations/svt4e/plate-tectonics.png",
                                tags: ["géologie", "séismes", "volcans"]
                            },
                            {
                                id: "blood-groups",
                                title: "Groupes Sanguins",
                                description: "Comprendre les groupes A, B, AB, O et le rhésus",
                                difficulty: "moyen",
                                duration: "20 min",
                                icon: "🩸",
                                image: "/simulations/svt4e/blood-groups.png",
                                tags: ["sang", "santé", "hérédité"]
                            },
                            {
                                id: "human-reproduction",
                                title: "Reproduction Humaine",
                                description: "De la fécondation au développement",
                                difficulty: "moyen",
                                duration: "30 min",
                                icon: "👶",
                                image: "/simulations/svt4e/human-reproduction.png",
                                tags: ["anatomie", "vie", "biologie"]
                            }
                        ]
                    },
                    physique: {
                        title: "Physique",
                        simulations: [
                            {
                                id: "forces-motion",
                                title: "Forces et Mouvement",
                                description: "Expérimentez avec la gravité et les forces",
                                difficulty: "moyen",
                                duration: "25 min",
                                icon: "🎯",
                                image: "/simulations/pc4e/forces-motion.png",
                                tags: ["mécanique", "forces", "Newton"]
                            },
                            {
                                id: "light-propagation",
                                title: "Propagation Lumière",
                                description: "Ombres, pénombre et éclipses",
                                difficulty: "moyen",
                                duration: "25 min",
                                icon: "☀️",
                                image: "/simulations/pc4e/light-propagation.png",
                                tags: ["optique", "espace", "lumière"]
                            },
                            {
                                id: "sound-propagation",
                                title: "Propagation du Son",
                                description: "Vitesse et nature du son",
                                difficulty: "moyen",
                                duration: "20 min",
                                icon: "🔊",
                                image: "/simulations/pc4e/sound-propagation.png",
                                tags: ["physique", "son", "ondes"]
                            },
                            {
                                id: "density-explorer",
                                title: "Masse Volumique et Densité",
                                description: "Comprenez pourquoi certains objets flottent et d'autres coulent",
                                difficulty: "moyen",
                                duration: "25 min",
                                icon: "⚗️",
                                image: "/simulations/pc4e/density-explorer.png",
                                tags: ["physique", "matière", "Archimède"]
                            },
                            {
                                id: "refraction-simulator",
                                title: "Réfraction de la Lumière",
                                description: "Visualisez comment la lumière change de direction entre milieux",
                                difficulty: "moyen",
                                duration: "25 min",
                                icon: "🔦",
                                image: "/simulations/pc4e/refraction-simulator.png",
                                tags: ["optique", "lumière", "Snell"]
                            },
                            {
                                id: "circuit-series-parallel",
                                title: "Circuits Série vs Parallèle",
                                description: "Comparez les deux types de montages électriques",
                                difficulty: "moyen",
                                duration: "30 min",
                                icon: "💡",
                                image: "/simulations/pc4e/circuit-series-parallel.png",
                                tags: ["électricité", "circuit", "courant"]
                            },
                            {
                                id: "light-propagation-pc4",
                                title: "Propagation Rectiligne",
                                description: "Démontrez que la lumière voyage en ligne droite",
                                difficulty: "moyen",
                                duration: "20 min",
                                icon: "☀️",
                                image: "/simulations/pc4e/light-propagation-pc4.png",
                                tags: ["optique", "ombre", "lumière"]
                            }
                        ]
                    },
                    chimie: {
                        title: "Chimie",
                        simulations: [
                            {
                                id: "chemical-reactions",
                                title: "Réactions Chimiques",
                                description: "Visualisez les réactions au niveau atomique",
                                difficulty: "moyen",
                                duration: "30 min",
                                icon: "⚗️",
                                image: "/simulations/pc4e/chemical-reactions.png",
                                tags: ["chimie", "atomes", "réactions"]
                            },
                            {
                                id: "combustion-reaction",
                                title: "Les Combustions",
                                description: "Le tétraèdre du feu et réactions",
                                difficulty: "moyen",
                                duration: "20 min",
                                icon: "🔥",
                                image: "/simulations/pc4e/combustion-reaction.png",
                                tags: ["chimie", "feu", "énergie"]
                            },
                            {
                                id: "atom-molecule-intro",
                                title: "Atomes et Molécules",
                                description: "Introduction à la structure de la matière",
                                difficulty: "moyen",
                                duration: "25 min",
                                icon: "⚛️",
                                image: "/simulations/pc4e/atom-molecule-intro.png",
                                tags: ["chimie", "matière", "particules"]
                            },
                            {
                                id: "mass-conservation",
                                title: "Conservation de la Masse",
                                description: "Découvrez la loi de Lavoisier lors des réactions chimiques",
                                difficulty: "moyen",
                                duration: "25 min",
                                icon: "⚖️",
                                image: "/simulations/pc4e/mass-conservation.png",
                                tags: ["chimie", "réaction", "Lavoisier"]
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
                                image: "/simulations/math4e/pythagoras-theorem.png",
                                tags: ["géométrie", "triangle", "calcul"]
                            },
                            {
                                id: "linear-equations",
                                title: "Équations Linéaires",
                                description: "Résolution graphique d'équations",
                                difficulty: "moyen",
                                duration: "30 min",
                                icon: "📈",
                                image: "/simulations/math4e/linear-equations.png",
                                tags: ["algèbre", "courbes", "fonctions"]
                            }
                        ]
                    },
                    coursPC4e: {
                        title: "📚 Cours PC 4ème - Programme Sénégal",
                        simulations: [
                            // ========== PHYSIQUE - Chapitres 1-8 ==========
                            {
                                id: "scientific-method-sim",
                                title: "Chap 1: La Démarche Scientifique",
                                description: "Observer, Hypothèse, Expérience, Conclusion - Mode Défi Quiz inclus !",
                                difficulty: "facile",
                                duration: "20 min",
                                icon: "🔬",
                                image: "/simulations/pc4e/chap1-science.png",
                                tags: ["méthode", "observation", "science"]
                            },
                            {
                                id: "measurement-tools-sim",
                                title: "Chap 2: Grandeurs et Mesures",
                                description: "Instruments de mesure et unités SI - Mode Défi Précision",
                                difficulty: "facile",
                                duration: "25 min",
                                icon: "📏",
                                image: "/simulations/pc4e/chap2-mesures.png",
                                tags: ["mesures", "unités", "instruments"]
                            },
                            {
                                id: "density-explorer",
                                title: "Chap 3: Masse Volumique et Densité",
                                description: "Flottaison et Archimède - Mode Défi Tri d'Objets",
                                difficulty: "moyen",
                                duration: "30 min",
                                icon: "⛵",
                                image: "/simulations/pc4e/chap3-densite.png",
                                tags: ["densité", "flottaison", "matière"]
                            },
                            {
                                id: "weight-mass-sim",
                                title: "Chap 4: Poids et Masse",
                                description: "Terre vs Lune, P = m × g - Mode Défi Calcul",
                                difficulty: "moyen",
                                duration: "25 min",
                                icon: "⚖️",
                                image: "/simulations/pc4e/chap4-poids-masse.png",
                                tags: ["poids", "masse", "gravité"]
                            },
                            {
                                id: "intro-electricity-sim",
                                title: "Chap 5: Introduction Électricité",
                                description: "Circuits, résistances, code couleur - Mode Défi Ingénieur",
                                difficulty: "moyen",
                                duration: "35 min",
                                icon: "⚡",
                                image: "/simulations/pc4e/chap5-electricite.png",
                                tags: ["électricité", "circuit", "résistance"]
                            },
                            {
                                id: "light-sources-sim",
                                title: "Chap 6: Sources de Lumière",
                                description: "Primaires vs Secondaires - Mode Quiz Interactif",
                                difficulty: "facile",
                                duration: "20 min",
                                icon: "💡",
                                image: "/simulations/pc4e/chap6-sources-lumiere.png",
                                tags: ["lumière", "sources", "optique"]
                            },
                            {
                                id: "light-propagation-pc4",
                                title: "Chap 7: Propagation Rectiligne",
                                description: "Ombres et rayons - Mode Défi Ombre Cible",
                                difficulty: "moyen",
                                duration: "25 min",
                                icon: "☀️",
                                image: "/simulations/pc4e/chap7-propagation.png",
                                tags: ["lumière", "ombre", "rayon"]
                            },
                            {
                                id: "refraction-simulator",
                                title: "Chap 8: Réfraction de la Lumière",
                                description: "Loi de Snell-Descartes - Mode Tir Laser",
                                difficulty: "moyen",
                                duration: "30 min",
                                icon: "🌈",
                                image: "/simulations/pc4e/chap8-refraction.png",
                                tags: ["réfraction", "Snell", "optique"]
                            },
                            // ========== CHIMIE - Chapitres 9-12 ==========
                            {
                                id: "mixture-separation-sim",
                                title: "Chap 9: Mélanges et Corps Purs",
                                description: "Filtration, Décantation, Distillation",
                                difficulty: "moyen",
                                duration: "25 min",
                                icon: "🧪",
                                image: "/simulations/pc4e/chap9-melanges.png",
                                tags: ["mélanges", "séparation", "chimie"]
                            },
                            {
                                id: "atom-builder-sim",
                                title: "Chap 10: Structure de la Matière",
                                description: "Atomes et molécules - Construisez vos molécules",
                                difficulty: "moyen",
                                duration: "30 min",
                                icon: "⚛️",
                                image: "/simulations/pc4e/chap10-atomes.png",
                                tags: ["atomes", "molécules", "matière"]
                            },
                            {
                                id: "mole-concept-sim",
                                title: "Chap 11: La Mole",
                                description: "Nombre d'Avogadro et masse molaire",
                                difficulty: "difficile",
                                duration: "35 min",
                                icon: "🔢",
                                image: "/simulations/pc4e/chap11-mole.png",
                                tags: ["mole", "Avogadro", "chimie"]
                            },
                            {
                                id: "mass-conservation",
                                title: "Chap 12: Réaction Chimique",
                                description: "Loi de Lavoisier - Conservation de la Masse",
                                difficulty: "moyen",
                                duration: "30 min",
                                icon: "⚖️",
                                image: "/simulations/pc4e/chap12-conservation.png",
                                tags: ["réaction", "Lavoisier", "chimie"]
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
                                image: "/simulations/svt3e/genetics-dna.png",
                                tags: ["ADN", "génétique", "hérédité"]
                            },
                            {
                                id: "immune-system",
                                title: "Système Immunitaire",
                                description: "Observez comment le corps se défend contre les infections",
                                difficulty: "difficile",
                                duration: "30 min",
                                icon: "🦠",
                                image: "/simulations/svt3e/immune-system.png",
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
                            // PHYSIQUE - 7 simulations
                            {
                                id: "lens-optics-3e",
                                title: "Lentilles Minces",
                                description: "Explorez lentilles convergentes et divergentes, foyer et images",
                                difficulty: "difficile",
                                duration: "30 min",
                                icon: "🔍",
                                image: "/simulations/pc3e/lens-optics-3e.png",
                                tags: ["optique", "lentilles", "image"]
                            },
                            {
                                id: "light-dispersion-3e",
                                title: "Dispersion de la Lumière",
                                description: "L'arc-en-ciel et le prisme : décomposition de la lumière blanche",
                                difficulty: "difficile",
                                duration: "25 min",
                                icon: "🌈",
                                image: "/simulations/pc3e/light-dispersion-3e.png",
                                tags: ["optique", "spectre", "couleurs"]
                            },
                            {
                                id: "forces-vectors-3e",
                                title: "Forces et Vecteurs",
                                description: "Représentation vectorielle des forces, poids et Newton",
                                difficulty: "difficile",
                                duration: "30 min",
                                icon: "🎯",
                                image: "/simulations/pc3e/forces-vectors-3e.png",
                                tags: ["mécanique", "forces", "vecteurs"]
                            },
                            {
                                id: "work-power-3e",
                                title: "Travail et Puissance",
                                description: "Calcul du travail W = F×d et puissance P = W/t",
                                difficulty: "difficile",
                                duration: "30 min",
                                icon: "⚡",
                                image: "/simulations/pc3e/work-power-3e.png",
                                tags: ["mécanique", "énergie", "joule"]
                            },
                            {
                                id: "electrostatics-3e",
                                title: "Électrisation par Frottement",
                                description: "Charges électriques, attraction et répulsion",
                                difficulty: "difficile",
                                duration: "25 min",
                                icon: "⚡",
                                image: "/simulations/pc3e/electrostatics-3e.png",
                                tags: ["électricité", "charges", "atomes"]
                            },
                            {
                                id: "resistance-ohm-3e",
                                title: "Résistance et Loi d'Ohm",
                                description: "U = R×I, résistances en série et parallèle",
                                difficulty: "difficile",
                                duration: "35 min",
                                icon: "🔋",
                                image: "/simulations/pc3e/resistance-ohm-3e.png",
                                tags: ["électricité", "ohm", "circuit"]
                            },
                            {
                                id: "energy-transformations-3e",
                                title: "Transformations d'Énergie",
                                description: "Conservation et rendement énergétique",
                                difficulty: "difficile",
                                duration: "30 min",
                                icon: "🔄",
                                image: "/simulations/pc3e/energy-transformations-3e.png",
                                tags: ["énergie", "rendement", "formes"]
                            },
                            // CHIMIE - 4 simulations
                            {
                                id: "aqueous-solutions-3e",
                                title: "Solutions Aqueuses",
                                description: "Solvant, soluté, concentration et saturation",
                                difficulty: "difficile",
                                duration: "25 min",
                                icon: "🧪",
                                image: "/simulations/pc3e/aqueous-solutions-3e.png",
                                tags: ["chimie", "solutions", "eau"]
                            },
                            {
                                id: "acids-bases-ph-3e",
                                title: "Acides, Bases et pH",
                                description: "Échelle pH, indicateurs colorés et neutralisation",
                                difficulty: "difficile",
                                duration: "30 min",
                                icon: "🧫",
                                image: "/simulations/pc3e/acids-bases-ph-3e.png",
                                tags: ["chimie", "pH", "acide"]
                            },
                            {
                                id: "metals-properties-3e",
                                title: "Propriétés des Métaux",
                                description: "Réactions avec l'oxygène, l'eau et les acides",
                                difficulty: "difficile",
                                duration: "30 min",
                                icon: "⚙️",
                                image: "/simulations/pc3e/metals-properties-3e.png",
                                tags: ["chimie", "métaux", "réactions"]
                            },
                            {
                                id: "hydrocarbons-3e",
                                title: "Hydrocarbures et Combustion",
                                description: "Pétrole, alcanes et réaction de combustion",
                                difficulty: "difficile",
                                duration: "30 min",
                                icon: "🛢️",
                                image: "/simulations/pc3e/hydrocarbons-3e.png",
                                tags: ["chimie", "organique", "pétrole"]
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
                                image: "/simulations/math3e/thales-theorem.png",
                                tags: ["géométrie", "proportion", "calcul"]
                            },
                            {
                                id: "trig-circle",
                                title: "Cercle Trigonométrique",
                                description: "Sinus, cosinus et tangente",
                                difficulty: "difficile",
                                duration: "35 min",
                                icon: "⭕",
                                image: "/simulations/math3e/trig-circle.png",
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
                        title: "Physique",
                        simulations: [
                            // P1 à P7 - Électricité
                            { id: "electrisation-2nde", title: "⚡ Électrisation", description: "Charges électriques et électrostatique", duration: "25 min", icon: "⚡", image: "/simulations/physique-2nde/electrisation.png", tags: ["électricité", "charges"] },
                            { id: "circuit-electrique-2nde", title: "🔌 Circuit Électrique", description: "Courant, conducteurs et isolants", duration: "30 min", icon: "🔌", image: "/simulations/physique-2nde/circuit-electrique.png", tags: ["circuit", "courant"] },
                            { id: "intensite-courant-2nde", title: "⚡ Intensité du Courant", description: "Ampères et loi des nœuds", duration: "25 min", icon: "⚡", image: "/simulations/physique-2nde/intensite.png", tags: ["intensité", "ampère"] },
                            { id: "tension-electrique-2nde", title: "🔋 Tension Électrique", description: "Volts et loi des mailles", duration: "30 min", icon: "🔋", image: "/simulations/physique-2nde/tension.png", tags: ["tension", "volt"] },
                            { id: "loi-ohm-2nde", title: "Ω Loi d'Ohm", description: "Résistance et caractéristiques", duration: "35 min", icon: "Ω", image: "/simulations/physique-2nde/loi-ohm.png", tags: ["résistance", "ohm"] },
                            { id: "generateur-2nde", title: "🔋 Générateurs", description: "Piles, f.e.m. et résistance interne", duration: "30 min", icon: "🔋", image: "/simulations/physique-2nde/generateur.png", tags: ["générateur", "pile"] },
                            { id: "aop-2nde", title: "📊 Amplificateur Opérationnel", description: "Intro aux composants électroniques", duration: "40 min", icon: "📊", image: "/simulations/physique-2nde/aop.png", tags: ["électronique", "AOP"] },
                            // P8 à P12 - Mécanique
                            { id: "mouvement-2nde", title: "🚗 Mouvement et Référentiel", description: "Description du mouvement", duration: "25 min", icon: "🚗", image: "/simulations/physique-2nde/mouvement.png", tags: ["cinématique", "vitesse"] },
                            { id: "forces-poids-2nde", title: "⚖️ Forces et Poids", description: "Force gravitationnelle et poids", duration: "30 min", icon: "⚖️", image: "/simulations/physique-2nde/forces-poids.png", tags: ["forces", "poids"] },
                            { id: "equilibre-solide-2nde", title: "⚖️ Équilibre d'un Solide", description: "Conditions d'équilibre statique", duration: "35 min", icon: "⚖️", image: "/simulations/physique-2nde/equilibre-solide.png", tags: ["équilibre", "statique"] },
                            { id: "equilibre-3forces-2nde", title: "📐 Équilibre sous 3 Forces", description: "Théorème des moments", duration: "35 min", icon: "📐", image: "/simulations/physique-2nde/equilibre-3forces.png", tags: ["équilibre", "forces"] },
                            { id: "moment-force-2nde", title: "🔄 Moment d'une Force", description: "Couple et rotation", duration: "30 min", icon: "🔄", image: "/simulations/physique-2nde/moment-force.png", tags: ["moment", "rotation"] },
                            // P13 à P15 - Optique
                            { id: "propagation-lumiere-2nde", title: "💡 Propagation de la Lumière", description: "Rayons lumineux et ombres", duration: "25 min", icon: "💡", image: "/simulations/physique-2nde/propagation-lumiere.png", tags: ["optique", "lumière"] },
                            { id: "reflexion-refraction-2nde", title: "🌈 Réflexion et Réfraction", description: "Lois de Snell-Descartes", duration: "30 min", icon: "🌈", image: "/simulations/physique-2nde/reflexion-refraction.png", tags: ["optique", "réfraction"] },
                            { id: "lentilles-2nde", title: "🔍 Lentilles Minces", description: "Images et formule de conjugaison", duration: "35 min", icon: "🔍", image: "/simulations/physique-2nde/lentilles.png", tags: ["optique", "lentilles"] }
                        ]
                    },
                    chimie: {
                        title: "Chimie",
                        simulations: [
                            // C1 à C10 - Chimie Seconde
                            { id: "separation-lab", title: "🧪 Mélanges et Corps Purs", description: "Techniques de séparation", duration: "30 min", icon: "🧪", image: "/simulations/chimie-2nde/separation.png", tags: ["mélanges", "séparation"] },
                            { id: "atomic-structure-seconde", title: "⚛️ Structure de l'Atome", description: "Éléments et classification", duration: "35 min", icon: "⚛️", image: "/simulations/chimie-2nde/atome.png", tags: ["atome", "classification"] },
                            { id: "lewis-structure-advanced", title: "🔗 Liaisons Chimiques", description: "Octet et structure de Lewis", duration: "40 min", icon: "🔗", image: "/simulations/chimie-2nde/liaisons.png", tags: ["liaisons", "Lewis"] },
                            { id: "mole-scale-advanced", title: "⚖️ La Mole", description: "Grandeurs molaires et Avogadro", duration: "35 min", icon: "⚖️", image: "/simulations/chimie-2nde/mole.png", tags: ["mole", "avogadro"] },
                            { id: "concentration-2nde", title: "🧪 Solutions et Concentration", description: "Préparation et dilution", duration: "30 min", icon: "🧪", image: "/simulations/chimie-2nde/concentration.png", tags: ["solution", "concentration"] },
                            { id: "dosage-2nde", title: "📊 Dosages par Étalonnage", description: "Spectrophotométrie et conductimétrie", duration: "35 min", icon: "📊", image: "/simulations/chimie-2nde/dosage.png", tags: ["dosage", "étalonnage"] },
                            { id: "reaction-chimique-2nde", title: "⚗️ Réaction Chimique", description: "Équation et avancement", duration: "30 min", icon: "⚗️", image: "/simulations/chimie-2nde/reaction.png", tags: ["réaction", "équation"] },
                            { id: "tableau-avancement-2nde", title: "📋 Tableau d'Avancement", description: "Bilan de matière et stœchiométrie", duration: "40 min", icon: "📋", image: "/simulations/chimie-2nde/avancement.png", tags: ["stœchiométrie", "bilan"] },
                            { id: "combustion-2nde", title: "🔥 Combustions", description: "Réactions avec le dioxygène", duration: "25 min", icon: "🔥", image: "/simulations/chimie-2nde/combustion.png", tags: ["combustion", "énergie"] },
                            { id: "synthese-chimique-2nde", title: "🧬 Synthèse Chimique", description: "Protocole et rendement", duration: "35 min", icon: "🧬", image: "/simulations/chimie-2nde/synthese.png", tags: ["synthèse", "rendement"] }
                        ]
                    },
                    svt: {
                        title: "SVT",
                        simulations: [
                            { id: "cell-respiration", title: "⚡ Respiration Cellulaire", description: "Production d'énergie", duration: "35 min", icon: "⚡", image: "/simulations/svt-2nde/respiration-cellulaire.png", tags: ["énergie", "cellule"] },
                            { id: "body-effort", title: "🏃 Organisme à l'Effort", description: "Adaptations physiologiques", duration: "25 min", icon: "🏃", image: "/simulations/svt-2nde/effort-physique.png", tags: ["cœur", "poumons"] },
                            { id: "cell-division", title: "🔬 Division Cellulaire", description: "Cycle cellulaire et mitose", duration: "30 min", icon: "🔬", image: "/simulations/svt-2nde/mitose.png", tags: ["cellule", "mitose"] },
                            { id: "ecosystem-dynamics", title: "🌳 Dynamique des Écosystèmes", description: "Interactions écologiques", duration: "40 min", icon: "🌳", image: "/simulations/svt-2nde/ecosysteme.png", tags: ["écologie"] },
                            { id: "homeostasis-regulation", title: "🍭 Régulation Glycémie", description: "Insuline et Glucagon", duration: "30 min", icon: "🍭", image: "/simulations/svt-2nde/glycemie.png", tags: ["hormones", "santé"] }
                        ]
                    }
                }
            },
            premiere: {
                title: "Première S",
                subjects: {
                    physique: {
                        title: "Physique",
                        simulations: [
                            // P1 à P11 - Physique 1ère S
                            { id: "p1s-travail-puissance", title: "⚡ Travail et Puissance", description: "Travail d'une force et puissance", duration: "35 min", icon: "⚡", image: "/simulations/physique-1ere/travail-puissance.png", tags: ["énergie", "travail"] },
                            { id: "p1s-energie-cinetique", title: "🏃 Énergie Cinétique", description: "Théorème de l'énergie cinétique", duration: "30 min", icon: "🏃", image: "/simulations/physique-1ere/energie-cinetique.png", tags: ["énergie", "mouvement"] },
                            { id: "p1s-energie-mecanique", title: "⚖️ Énergie Mécanique", description: "Conservation et dissipation", duration: "35 min", icon: "⚖️", image: "/simulations/physique-1ere/energie-mecanique.png", tags: ["conservation", "énergie"] },
                            { id: "p1s-calorimetrie", title: "🌡️ Calorimétrie", description: "Chaleur et changements d'état", duration: "30 min", icon: "🌡️", image: "/simulations/physique-1ere/calorimetrie.png", tags: ["chaleur", "température"] },
                            { id: "p1s-champ-electrique", title: "⚡ Champ Électrostatique", description: "Loi de Coulomb et champ E", duration: "40 min", icon: "⚡", image: "/simulations/physique-1ere/champ-electrique.png", tags: ["électrostatique", "champ"] },
                            { id: "p1s-energie-electrostatique", title: "🔋 Énergie Électrostatique", description: "Potentiel et énergie", duration: "35 min", icon: "🔋", image: "/simulations/physique-1ere/energie-electrostatique.png", tags: ["potentiel", "énergie"] },
                            { id: "p1s-transferts-energie", title: "⚡ Transferts d'Énergie", description: "Effet Joule et bilan", duration: "35 min", icon: "⚡", image: "/simulations/physique-1ere/transferts-energie.png", tags: ["joule", "puissance"] },
                            { id: "p1s-condensateur", title: "🔋 Le Condensateur", description: "Capacité et énergie stockée", duration: "40 min", icon: "🔋", image: "/simulations/physique-1ere/condensateur.png", tags: ["condensateur", "capacité"] },
                            { id: "p1s-aop", title: "📊 Amplificateur Opérationnel", description: "Montages inverseur et suiveur", duration: "45 min", icon: "📊", image: "/simulations/physique-1ere/aop.png", tags: ["électronique", "AOP"] },
                            { id: "p1s-ondes-mecaniques", title: "🌊 Ondes Mécaniques", description: "Propagation et célérité", duration: "35 min", icon: "🌊", image: "/simulations/physique-1ere/ondes-mecaniques.png", tags: ["ondes", "propagation"] },
                            { id: "p1s-optique", title: "🔍 Optique Géométrique", description: "Lentilles et instruments", duration: "40 min", icon: "🔍", image: "/simulations/physique-1ere/optique.png", tags: ["optique", "lentilles"] }
                        ]
                    },
                    chimie: {
                        title: "Chimie",
                        simulations: [
                            // C1 à C11 - Chimie 1ère S
                            { id: "c1s-chimie-organique", title: "🧬 Introduction Chimie Organique", description: "Familles et nomenclature", duration: "35 min", icon: "🧬", image: "/simulations/chimie-1ere/chimie-organique.png", tags: ["organique", "carbone"] },
                            { id: "c1s-alcanes", title: "⛽ Les Alcanes", description: "Combustion et nomenclature", duration: "30 min", icon: "⛽", image: "/simulations/chimie-1ere/alcanes.png", tags: ["alcanes", "hydrocarbures"] },
                            { id: "c1s-alcenes-alcynes", title: "🔗 Alcènes et Alcynes", description: "Insaturation et réactivité", duration: "35 min", icon: "🔗", image: "/simulations/chimie-1ere/alcenes-alcynes.png", tags: ["alcènes", "double liaison"] },
                            { id: "c1s-benzene", title: "⬡ Le Benzène", description: "Aromatiques et substitution", duration: "40 min", icon: "⬡", image: "/simulations/chimie-1ere/benzene.png", tags: ["benzène", "aromatique"] },
                            { id: "c1s-composes-oxygenes", title: "🧪 Composés Oxygénés", description: "Alcools, aldéhydes, cétones", duration: "45 min", icon: "🧪", image: "/simulations/chimie-1ere/composes-oxygenes.png", tags: ["alcools", "carbonyle"] },
                            { id: "c1s-couple-redox", title: "⚡ Couples Redox", description: "Oxydation et réduction", duration: "35 min", icon: "⚡", image: "/simulations/chimie-1ere/couple-redox.png", tags: ["redox", "oxydation"] },
                            { id: "c1s-classification-potentiels", title: "📊 Classification des Potentiels", description: "Échelle des E°", duration: "35 min", icon: "📊", image: "/simulations/chimie-1ere/classification-potentiels.png", tags: ["potentiel", "électrochimie"] },
                            { id: "c1s-reactions-redox", title: "⚗️ Réactions Redox", description: "Dosages par titrage", duration: "40 min", icon: "⚗️", image: "/simulations/chimie-1ere/reactions-redox.png", tags: ["dosage", "permanganate"] },
                            { id: "c1s-electrolyse", title: "🔋 Électrolyse", description: "Réactions forcées et faraday", duration: "40 min", icon: "🔋", image: "/simulations/chimie-1ere/electrolyse.png", tags: ["électrolyse", "anode"] },
                            { id: "c1s-voie-seche", title: "🔥 Réactions Voie Sèche", description: "Réduction des oxydes", duration: "30 min", icon: "🔥", image: "/simulations/chimie-1ere/voie-seche.png", tags: ["métallurgie", "réduction"] },
                            { id: "c1s-chimie-industrielle", title: "🏭 Chimie Industrielle", description: "Phosphates et plastiques", duration: "35 min", icon: "🏭", image: "/simulations/chimie-1ere/chimie-industrielle.png", tags: ["industrie", "polymères"] }
                        ]
                    },
                    svt: {
                        title: "SVT",
                        simulations: [
                            { id: "enzymatic-catalysis", title: "🔑 Catalyse Enzymatique", description: "Vitesse de réaction", duration: "40 min", icon: "🔑", image: "/simulations/svt-1ere/catalyse-enzymatique.png", tags: ["enzyme", "protéine"] },
                            { id: "tectonics-plates", title: "🌍 Tectonique des Plaques", description: "Dérive et séismes", duration: "35 min", icon: "🌍", image: "/simulations/svt-1ere/tectonique.png", tags: ["géologie", "terre"] },
                            { id: "greenhouse-effect", title: "🌡️ Effet de Serre", description: "Bilan radiatif", duration: "25 min", icon: "🌡️", image: "/simulations/svt-1ere/effet-de-serre.png", tags: ["climat", "réchauffement"] },
                            { id: "protein-synthesis", title: "🧬 Synthèse des Protéines", description: "ADN vers Protéine", duration: "40 min", icon: "🧬", image: "/simulations/svt-1ere/synthese-proteines.png", tags: ["génétique"] },
                            { id: "plant-growth", title: "🌻 Croissance Végétale", description: "Auxine et Phototropisme", duration: "30 min", icon: "🌻", image: "/simulations/svt-1ere/croissance-vegetale.png", tags: ["plante", "hormone"] },
                            { id: "enzyme-kinetics", title: "⏱️ Cinétique Enzymatique", description: "Vitesse et Saturation", duration: "40 min", icon: "⏱️", image: "/simulations/svt-1ere/cinetique-enzymatique.png", tags: ["enzyme", "vitesse"] }
                        ]
                    }
                }
            },
            terminale: {
                title: "Terminale S",
                subjects: {
                    physique: {
                        title: "Physique",
                        simulations: [
                            { id: "pts-cinematique", title: "📍 Cinématique du Point", description: "Vecteurs position, vitesse, accélération", duration: "35 min", icon: "📍", image: "/simulations/physique-ts/cinematique.png", tags: ["cinématique", "vecteurs", "mouvement"] },
                            { id: "pts-dynamique", title: "⚖️ Dynamique - Lois de Newton", description: "Forces, 2ème loi de Newton, équilibre", duration: "40 min", icon: "⚖️", image: "/simulations/physique-ts/dynamique.png", tags: ["forces", "newton", "mécanique"] },
                            { id: "pts-applications", title: "🎯 Mouvement Projectile", description: "Chute libre et trajectoire parabolique", duration: "35 min", icon: "🎯", image: "/simulations/physique-ts/projectile.png", tags: ["projectile", "gravité", "trajectoire"] },
                            { id: "pts-gravitation", title: "🛰️ Gravitation et Satellites", description: "Lois de Kepler, orbites et satellites", duration: "45 min", icon: "🛰️", image: "/simulations/physique-ts/gravitation.png", tags: ["gravitation", "kepler", "espace"] },
                            { id: "pts-champ-magnetique", title: "🧲 Champ Magnétique", description: "Solénoïde, lignes de champ, induction", duration: "40 min", icon: "🧲", image: "/simulations/physique-ts/champ-magnetique.png", tags: ["magnétisme", "bobine", "champ"] },
                            { id: "pts-lorentz", title: "⚡ Force de Lorentz", description: "Action du champ B sur une charge", duration: "40 min", icon: "⚡", image: "/simulations/physique-ts/lorentz.png", tags: ["lorentz", "charge", "électromagnétisme"] },
                            { id: "pts-laplace", title: "🔧 Loi de Laplace", description: "Force sur un conducteur parcouru par I", duration: "40 min", icon: "🔧", image: "/simulations/physique-ts/laplace.png", tags: ["laplace", "moteur", "force"] },
                            { id: "pts-induction", title: "🔁 Induction Électromagnétique", description: "Loi de Lentz, f.é.m. induite", duration: "45 min", icon: "🔁", image: "/simulations/physique-ts/induction.png", tags: ["induction", "lentz", "générateur"] },
                            { id: "pts-rc", title: "🔋 Dipôle RC", description: "Charge et décharge du condensateur", duration: "40 min", icon: "🔋", image: "/simulations/physique-ts/dipole-rc.png", tags: ["RC", "condensateur", "τ"] },
                            { id: "pts-oscillations-lc", title: "📡 Oscillations LC / RLC", description: "Oscillations libres et amorties", duration: "50 min", icon: "📡", image: "/simulations/physique-ts/oscillations-lc.png", tags: ["oscillations", "RLC", "résonance"] },
                            { id: "pts-oscillations-meca", title: "🕰️ Oscillations Mécaniques", description: "Pendule simple et ressort", duration: "35 min", icon: "🕰️", image: "/simulations/physique-ts/oscillations-mecaniques.png", tags: ["pendule", "ressort", "période"] },
                            { id: "pts-interferences", title: "🌊 Interférences Lumineuses", description: "Fentes de Young, franges", duration: "45 min", icon: "🌊", image: "/simulations/physique-ts/interferences.png", tags: ["interférences", "Young", "ondes"] },
                            { id: "pts-photoelectrique", title: "☀️ Effet Photoélectrique", description: "Photons, seuil et énergie", duration: "40 min", icon: "☀️", image: "/simulations/physique-ts/photoelectrique.png", tags: ["photoélectrique", "photon", "quantique"] },
                            { id: "pts-niveaux-energie", title: "⚛️ Niveaux d'Énergie", description: "Spectres d'émission et absorption", duration: "40 min", icon: "⚛️", image: "/simulations/physique-ts/niveaux-energie.png", tags: ["atome", "spectres", "Bohr"] },
                            { id: "pts-nucleaire", title: "☢️ Réactions Nucléaires", description: "Fission, fusion, radioactivité", duration: "50 min", icon: "☢️", image: "/simulations/physique-ts/nucleaire.png", tags: ["nucléaire", "fission", "fusion"] }
                        ]
                    },
                    chimie: {
                        title: "Chimie",
                        simulations: [
                            { id: "cts-alcools", title: "🧪 Alcools et Oxydation", description: "Classes d'alcools et oxydation ménagée", duration: "35 min", icon: "🧪", image: "/simulations/chimie-ts/alcools.png", tags: ["alcools", "oxydation", "KMnO4"] },
                            { id: "cts-amines", title: "🔬 Amines et Propriétés", description: "Structure, basicité et nucléophilie", duration: "30 min", icon: "🔬", image: "/simulations/chimie-ts/amines.png", tags: ["amines", "azote", "basique"] },
                            { id: "cts-acides-carbo", title: "⚗️ Estérification", description: "Acide + Alcool → Ester + Eau", duration: "40 min", icon: "⚗️", image: "/simulations/chimie-ts/esterification.png", tags: ["ester", "équilibre", "parfum"] },
                            { id: "cts-acides-amines", title: "🧬 Acides Aminés - Chiralité", description: "Structure, zwitterion et énantiomères", duration: "40 min", icon: "🧬", image: "/simulations/chimie-ts/acides-amines.png", tags: ["chiralité", "protéine", "L/D"] },
                            { id: "cts-cinetique", title: "⏱️ Cinétique Chimique", description: "Vitesse, facteurs cinétiques, t½", duration: "45 min", icon: "⏱️", image: "/simulations/chimie-ts/cinetique.png", tags: ["cinétique", "vitesse", "catalyseur"] },
                            { id: "cts-ph", title: "📊 pH et Autoprotolyse", description: "Ke, pH = -log[H₃O⁺], indicateurs", duration: "30 min", icon: "📊", image: "/simulations/chimie-ts/ph-eau.png", tags: ["pH", "eau", "acide"] },
                            { id: "cts-acides-forts", title: "💧 Acides et Bases Forts", description: "Réactions totales, dosages", duration: "35 min", icon: "💧", image: "/simulations/chimie-ts/acides-forts.png", tags: ["HCl", "NaOH", "dosage"] },
                            { id: "cts-acides-faibles", title: "⚖️ Acides Faibles et Ka", description: "Henderson-Hasselbalch, pKa", duration: "45 min", icon: "⚖️", image: "/simulations/chimie-ts/acides-faibles.png", tags: ["Ka", "équilibre", "tampon"] },
                            { id: "cts-tampon", title: "🛡️ Solutions Tampons", description: "Résistance aux variations de pH", duration: "40 min", icon: "🛡️", image: "/simulations/chimie-ts/tampon.png", tags: ["tampon", "sang", "buffer"] }
                        ]
                    },
                    svt: {
                        title: "SVT",
                        simulations: [
                            { id: "nerve-muscle-reflex", title: "Réflexe Myotatique", description: "Nerf et muscle", duration: "30 min", icon: "🦵", image: "/simulations/svt-ts/reflexe-myotatique.png", tags: ["nerf", "neurone"] },
                            { id: "meiosis-diversity", title: "Méiose et Diversité", description: "Brassage génétique", duration: "45 min", icon: "🎲", image: "/simulations/svt-ts/meiose.png", tags: ["génétique", "reproduction"] },
                            { id: "adaptive-immunity", title: "Immunité Adaptative", description: "Lymphocytes B et T", duration: "50 min", icon: "🛡️", image: "/simulations/svt-ts/immunite.png", tags: ["santé", "anticorps"] },
                            { id: "geothermics", title: "Géothermie", description: "Énergie interne", duration: "30 min", icon: "🌋", image: "/simulations/svt-ts/geothermie.png", tags: ["énergie", "terre"] },
                            { id: "muscle-contraction", title: "Contraction Musculaire", description: "ATP et Mouvement", duration: "40 min", icon: "💪", image: "/simulations/svt-ts/contraction-musculaire.png", tags: ["muscle", "énergie"] },
                            { id: "aids-virus", title: "VIH et Système Immunitaire", description: "Infection virale", duration: "35 min", icon: "🦠", image: "/simulations/svt-ts/vih.png", tags: ["santé", "virus"] },
                            { id: "climate-feedback", title: "Rétroactions Climatiques", description: "Système Terre", duration: "40 min", icon: "🌡️", image: "/simulations/svt-ts/climat.png", tags: ["climat", "écologie"] }
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
