// Configuration des images pour chaque simulation du collège (par ID)
// Réutilisation intelligente des images existantes pour les simulations similaires

export const simulationImages = {
    // ===== 6ème =====
    'cell-structure': '/images/cell_biology_visual_1765400155186.png',
    'photosynthesis': '/images/photosynthesis_process_1765402743855.png',
    'states-of-matter': '/images/states_of_matter_3d_1765405480968.png',
    'simple-circuits': '/images/electric_circuit_3d_1765405396519.png',

    // ===== 5ème =====
    'digestive-system': '/images/digestive_system_3d_1765405347959.png',
    'blood-circulation': '/images/human_heart_3d_1765402123939.png',
    'water-cycle': '/images/water_cycle_visual_1765402157306.png',
    'light-reflection': '/images/physics_atoms_visual_1765400173472.png',

    // ===== 4ème =====
    'nervous-system': '/images/neuron_synapse_3d_1765402707517.png',
    'plate-tectonics': '/images/volcano_eruption_epic_1765402140573.png',
    'chemical-reactions': '/images/chemistry_reactions_visual_1765400190665.png',
    'forces-motion': '/images/physics_atoms_visual_1765400173472.png',

    // ===== 3ème (BFEM) =====
    'genetics-dna': '/images/dna_helix_realistic_1765402108086.png',
    'immune-system': '/images/cell_biology_visual_1765400155186.png',
    'atomic-structure': '/images/physics_atoms_visual_1765400173472.png',
    'energy-conservation': '/images/physics_atoms_visual_1765400173472.png',

    // ===== Autres simulations (mappées sur images similaires) =====
    'plant-growth': '/images/plant_structure_3d_1765405379962.png',
    'food-chain': '/images/ecosystem_food_chain_1765405441391.png',
    'respiration-human': '/images/respiratory_system_3d_1765405364413.png',
    'volcano-eruption': '/images/volcano_eruption_epic_1765402140573.png',
    'earth-movement': '/images/rock_cycle_3d_1765405425407.png',
    'electric-resistance': '/images/electric_circuit_3d_1765405396519.png',
    'combustion-reaction': '/images/chemistry_reactions_visual_1765400190665.png',
    'dna-structure': '/images/dna_helix_realistic_1765402108086.png',
    'chromosomes-division': '/images/dna_helix_realistic_1765402108086.png',
    'magnetism': '/images/magnetism_3d_1765405460873.png',

    // Simulations réutilisant images existantes
    'mixture-separation': '/images/chemistry_reactions_visual_1765400190665.png',
    'volume-mass': '/images/states_of_matter_3d_1765405480968.png',
    'water-purification': '/images/water_cycle_visual_1765402157306.png',
    'density-buoyancy': '/images/states_of_matter_3d_1765405480968.png',
    'solutions-solubility': '/images/chemistry_reactions_visual_1765400190665.png',
    'blood-groups': '/images/human_heart_3d_1765402123939.png',
    'human-reproduction': '/images/cell_biology_visual_1765400155186.png',
    'light-propagation': '/images/physics_atoms_visual_1765400173472.png',
    'atom-molecule-intro': '/images/physics_atoms_visual_1765400173472.png',
    'microbes-bacteria': '/images/cell_biology_visual_1765400155186.png',
    'ions-formation': '/images/physics_atoms_visual_1765400173472.png',
    'ph-scale': '/images/chemistry_reactions_visual_1765400190665.png',
    'weight-mass-relation': '/images/physics_atoms_visual_1765400173472.png',
    'simple-machines': '/images/physics_atoms_visual_1765400173472.png',
    'sound-propagation': '/images/physics_atoms_visual_1765400173472.png',
    'vertebrate-classification': '/images/ecosystem_food_chain_1765405441391.png',

    // Mathématiques (pas d'image spécifique)
    'geometric-shapes': null,
    'angles-measurement': null,
    'triangles-properties': null,
    'fraction-visualizer': null,
    'pythagoras-theorem': null,
    'linear-equations': null,
    'thales-theorem': null,
    'trig-circle': null,
};

// Fonction pour obtenir l'image d'une simulation
export const getSimulationImage = (simulationId) => {
    return simulationImages[simulationId] || null;
};

// Points d'intérêt interactifs pour chaque simulation
export const simulationHotspots = {
    // ===== CELLULE =====
    'cell-structure': [
        { x: 50, y: 40, label: 'Noyau', info: 'Centre de contrôle contenant l\'ADN', color: '#00F5D4' },
        { x: 30, y: 55, label: 'Mitochondrie', info: 'Produit l\'énergie (ATP)', color: '#F59E0B' },
        { x: 70, y: 50, label: 'Membrane', info: 'Protège et contrôle les échanges', color: '#8B5CF6' },
        { x: 45, y: 70, label: 'Cytoplasme', info: 'Milieu gélatineux de la cellule', color: '#EC4899' },
    ],

    // ===== PHOTOSYNTHÈSE =====
    'photosynthesis': [
        { x: 30, y: 25, label: 'Lumière solaire', info: 'Énergie captée par la chlorophylle', color: '#FBBF24' },
        { x: 50, y: 45, label: 'Chloroplaste', info: 'Organite où se fait la photosynthèse', color: '#22C55E' },
        { x: 70, y: 35, label: 'CO₂', info: 'Dioxyde de carbone absorbé', color: '#6B7280' },
        { x: 50, y: 70, label: 'Glucose', info: 'Sucre produit = énergie', color: '#F97316' },
        { x: 25, y: 60, label: 'O₂', info: 'Oxygène libéré', color: '#3B82F6' },
    ],

    // ===== ÉTATS DE LA MATIÈRE =====
    'states-of-matter': [
        { x: 20, y: 50, label: 'Solide', info: 'Molécules fixes, forme définie', color: '#3B82F6' },
        { x: 50, y: 50, label: 'Liquide', info: 'Molécules mobiles', color: '#22C55E' },
        { x: 80, y: 50, label: 'Gaz', info: 'Molécules très espacées', color: '#EF4444' },
        { x: 35, y: 75, label: 'Fusion', info: 'Solide → Liquide', color: '#F59E0B' },
        { x: 65, y: 75, label: 'Vaporisation', info: 'Liquide → Gaz', color: '#EC4899' },
    ],

    // ===== CIRCUITS ÉLECTRIQUES =====
    'simple-circuits': [
        { x: 20, y: 50, label: 'Pile', info: 'Fournit l\'énergie électrique', color: '#EF4444' },
        { x: 50, y: 30, label: 'Interrupteur', info: 'Ouvre ou ferme le circuit', color: '#6B7280' },
        { x: 80, y: 50, label: 'Ampoule', info: 'Transforme électricité en lumière', color: '#FBBF24' },
        { x: 50, y: 70, label: 'Fils', info: 'Transportent le courant', color: '#00F5D4' },
    ],

    // ===== SYSTÈME DIGESTIF =====
    'digestive-system': [
        { x: 50, y: 15, label: 'Bouche', info: 'Mastication et salive', color: '#EC4899' },
        { x: 50, y: 30, label: 'Œsophage', info: 'Transport vers l\'estomac', color: '#F59E0B' },
        { x: 45, y: 45, label: 'Estomac', info: 'Digestion acide', color: '#EF4444' },
        { x: 35, y: 55, label: 'Foie', info: 'Produit la bile', color: '#8B5CF6' },
        { x: 50, y: 65, label: 'Intestin grêle', info: 'Absorption nutriments', color: '#22C55E' },
        { x: 50, y: 80, label: 'Gros intestin', info: 'Absorption eau', color: '#3B82F6' },
    ],

    // ===== CIRCULATION SANGUINE =====
    'blood-circulation': [
        { x: 50, y: 35, label: 'Cœur', info: 'Pompe le sang', color: '#EF4444' },
        { x: 30, y: 50, label: 'Artères', info: 'Sang oxygéné (rouge)', color: '#DC2626' },
        { x: 70, y: 50, label: 'Veines', info: 'Sang désoxygéné (bleu)', color: '#3B82F6' },
        { x: 50, y: 20, label: 'Poumons', info: 'Échanges O₂/CO₂', color: '#EC4899' },
        { x: 50, y: 70, label: 'Capillaires', info: 'Échanges cellulaires', color: '#22C55E' },
    ],

    // ===== CYCLE DE L'EAU =====
    'water-cycle': [
        { x: 75, y: 20, label: 'Soleil', info: 'Chauffe l\'eau', color: '#FBBF24' },
        { x: 25, y: 65, label: 'Évaporation', info: 'Eau → Vapeur', color: '#0EA5E9' },
        { x: 50, y: 20, label: 'Condensation', info: 'Formation nuages', color: '#94A3B8' },
        { x: 70, y: 45, label: 'Précipitations', info: 'Pluie, neige', color: '#3B82F6' },
        { x: 40, y: 80, label: 'Ruissellement', info: 'Retour vers océans', color: '#06B6D4' },
    ],

    // ===== LUMIÈRE =====
    'light-reflection': [
        { x: 25, y: 40, label: 'Rayon incident', info: 'Lumière arrivant sur surface', color: '#FBBF24' },
        { x: 50, y: 50, label: 'Point d\'incidence', info: 'Contact avec miroir', color: '#EF4444' },
        { x: 75, y: 40, label: 'Rayon réfléchi', info: 'Lumière renvoyée', color: '#22C55E' },
        { x: 50, y: 70, label: 'Normale', info: 'Perpendiculaire à la surface', color: '#8B5CF6' },
    ],

    // ===== SYSTÈME NERVEUX =====
    'nervous-system': [
        { x: 15, y: 50, label: 'Dendrites', info: 'Reçoivent les signaux', color: '#A78BFA' },
        { x: 35, y: 50, label: 'Corps cellulaire', info: 'Contient le noyau', color: '#8B5CF6' },
        { x: 60, y: 50, label: 'Axone', info: 'Transmet l\'influx', color: '#00F5D4' },
        { x: 85, y: 50, label: 'Synapse', info: 'Connexion entre neurones', color: '#F59E0B' },
    ],

    // ===== TECTONIQUE DES PLAQUES =====
    'plate-tectonics': [
        { x: 50, y: 80, label: 'Noyau', info: 'Centre chaud de la Terre', color: '#FBBF24' },
        { x: 50, y: 60, label: 'Manteau', info: 'Convection du magma', color: '#F97316' },
        { x: 30, y: 40, label: 'Plaque A', info: 'Croûte en mouvement', color: '#8B5CF6' },
        { x: 70, y: 40, label: 'Plaque B', info: 'Croûte en mouvement', color: '#22C55E' },
        { x: 50, y: 25, label: 'Collision', info: 'Montagnes/Séismes', color: '#EF4444' },
    ],

    // ===== RÉACTIONS CHIMIQUES =====
    'chemical-reactions': [
        { x: 25, y: 50, label: 'Réactifs', info: 'Substances de départ', color: '#3B82F6' },
        { x: 50, y: 50, label: 'Réaction', info: 'Transformation', color: '#F59E0B' },
        { x: 75, y: 50, label: 'Produits', info: 'Nouvelles substances', color: '#22C55E' },
        { x: 50, y: 25, label: 'Énergie', info: 'Absorbée ou libérée', color: '#EF4444' },
    ],

    // ===== FORCES ET MOUVEMENT =====
    'forces-motion': [
        { x: 30, y: 50, label: 'Force appliquée', info: 'Pousse ou tire l\'objet', color: '#EF4444' },
        { x: 50, y: 35, label: 'Poids', info: 'Force de gravité', color: '#8B5CF6' },
        { x: 70, y: 50, label: 'Frottement', info: 'Résistance au mouvement', color: '#F59E0B' },
        { x: 50, y: 70, label: 'Réaction', info: 'Force du support', color: '#22C55E' },
    ],

    // ===== ADN / GÉNÉTIQUE =====
    'genetics-dna': [
        { x: 50, y: 25, label: 'Double hélice', info: 'Structure spirale', color: '#8B5CF6' },
        { x: 35, y: 45, label: 'A-T', info: 'Adénine-Thymine', color: '#22C55E' },
        { x: 65, y: 45, label: 'G-C', info: 'Guanine-Cytosine', color: '#EF4444' },
        { x: 50, y: 75, label: 'Gène', info: 'Code une protéine', color: '#00F5D4' },
    ],

    // ===== SYSTÈME IMMUNITAIRE =====
    'immune-system': [
        { x: 30, y: 40, label: 'Anticorps', info: 'Protéines de défense', color: '#22C55E' },
        { x: 50, y: 50, label: 'Globule blanc', info: 'Cellule immunitaire', color: '#3B82F6' },
        { x: 70, y: 40, label: 'Pathogène', info: 'Virus ou bactérie', color: '#EF4444' },
        { x: 50, y: 75, label: 'Phagocytose', info: 'Destruction du pathogène', color: '#F59E0B' },
    ],

    // ===== ATOME =====
    'atomic-structure': [
        { x: 50, y: 50, label: 'Noyau', info: 'Protons (+) et Neutrons', color: '#EF4444' },
        { x: 30, y: 30, label: 'Électron', info: 'Particule négative (-)', color: '#3B82F6' },
        { x: 70, y: 30, label: 'Orbite', info: 'Trajectoire électronique', color: '#00F5D4' },
        { x: 50, y: 75, label: 'Nuage', info: 'Zone de probabilité', color: '#8B5CF6' },
    ],

    // ===== VOLCAN =====
    'volcano-eruption': [
        { x: 50, y: 15, label: 'Cratère', info: 'Sortie de lave', color: '#F97316' },
        { x: 50, y: 35, label: 'Cheminée', info: 'Conduit du magma', color: '#EF4444' },
        { x: 30, y: 50, label: 'Coulée', info: 'Lave refroidie', color: '#DC2626' },
        { x: 50, y: 70, label: 'Chambre', info: 'Réservoir magma', color: '#FBBF24' },
    ],

    // ===== CHAÎNE ALIMENTAIRE =====
    'food-chain': [
        { x: 20, y: 25, label: 'Soleil', info: 'Source d\'énergie', color: '#FBBF24' },
        { x: 20, y: 50, label: 'Producteurs', info: 'Plantes', color: '#22C55E' },
        { x: 50, y: 50, label: 'Herbivores', info: 'Consommateurs I', color: '#3B82F6' },
        { x: 80, y: 50, label: 'Carnivores', info: 'Consommateurs II', color: '#EF4444' },
        { x: 50, y: 80, label: 'Décomposeurs', info: 'Recycleurs', color: '#8B5CF6' },
    ],

    // ===== RESPIRATION =====
    'respiration-human': [
        { x: 50, y: 20, label: 'Trachée', info: 'Conduit de l\'air', color: '#6B7280' },
        { x: 35, y: 45, label: 'Bronches', info: 'Ramifications', color: '#3B82F6' },
        { x: 65, y: 45, label: 'Poumon', info: 'Échanges gazeux', color: '#EC4899' },
        { x: 50, y: 65, label: 'Alvéoles', info: 'Sacs pour O₂/CO₂', color: '#00F5D4' },
        { x: 50, y: 85, label: 'Diaphragme', info: 'Muscle respiratoire', color: '#F59E0B' },
    ],

    // ===== PLANTE =====
    'plant-growth': [
        { x: 50, y: 15, label: 'Fleur', info: 'Reproduction', color: '#EC4899' },
        { x: 50, y: 35, label: 'Feuille', info: 'Photosynthèse', color: '#22C55E' },
        { x: 50, y: 55, label: 'Tige', info: 'Transport sève', color: '#8B5CF6' },
        { x: 50, y: 80, label: 'Racines', info: 'Absorption eau', color: '#F59E0B' },
    ],

    // ===== COMBUSTION =====
    'combustion-reaction': [
        { x: 25, y: 50, label: 'Combustible', info: 'Ce qui brûle', color: '#F97316' },
        { x: 50, y: 30, label: 'Comburant O₂', info: 'Oxygène nécessaire', color: '#3B82F6' },
        { x: 50, y: 70, label: 'Chaleur', info: 'Énergie d\'activation', color: '#EF4444' },
        { x: 75, y: 50, label: 'Flamme', info: 'Réaction visible', color: '#FBBF24' },
    ],

    // ===== MICROBES =====
    'microbes-bacteria': [
        { x: 30, y: 40, label: 'Membrane', info: 'Enveloppe protectrice', color: '#8B5CF6' },
        { x: 50, y: 50, label: 'Cytoplasme', info: 'Intérieur cellulaire', color: '#22C55E' },
        { x: 70, y: 40, label: 'ADN', info: 'Matériel génétique', color: '#EF4444' },
        { x: 50, y: 75, label: 'Flagelle', info: 'Permet le mouvement', color: '#F59E0B' },
    ],

    // ===== CHROMOSOMES =====
    'chromosomes-division': [
        { x: 50, y: 25, label: 'Chromosome', info: 'ADN condensé', color: '#8B5CF6' },
        { x: 30, y: 50, label: 'Chromatide', info: 'Bras du chromosome', color: '#22C55E' },
        { x: 70, y: 50, label: 'Centromère', info: 'Point d\'attache', color: '#EF4444' },
        { x: 50, y: 75, label: 'Mitose', info: 'Division cellulaire', color: '#00F5D4' },
    ],

    // ===== IONS =====
    'ions-formation': [
        { x: 30, y: 50, label: 'Atome neutre', info: 'Protons = Électrons', color: '#6B7280' },
        { x: 50, y: 35, label: 'Gain e⁻', info: 'Devient anion (-)', color: '#3B82F6' },
        { x: 50, y: 65, label: 'Perte e⁻', info: 'Devient cation (+)', color: '#EF4444' },
        { x: 70, y: 50, label: 'Ion', info: 'Atome chargé', color: '#22C55E' },
    ],

    // ===== MOUVEMENT TERRE =====
    'earth-movement': [
        { x: 30, y: 30, label: 'Roche ignée', info: 'Formée par refroidissement', color: '#EF4444' },
        { x: 70, y: 30, label: 'Roche sédimentaire', info: 'Formée par dépôts', color: '#F59E0B' },
        { x: 50, y: 70, label: 'Roche métamorphique', info: 'Transformée par pression', color: '#8B5CF6' },
        { x: 50, y: 50, label: 'Cycle', info: 'Transformation continue', color: '#22C55E' },
    ],

    // ===== RÉSISTANCE ÉLECTRIQUE =====
    'electric-resistance': [
        { x: 25, y: 50, label: 'Tension U', info: 'Force électrique (Volts)', color: '#EF4444' },
        { x: 50, y: 50, label: 'Résistance R', info: 'Frein au courant (Ohms)', color: '#F59E0B' },
        { x: 75, y: 50, label: 'Intensité I', info: 'Débit d\'électrons (Ampères)', color: '#3B82F6' },
        { x: 50, y: 75, label: 'U = R × I', info: 'Loi d\'Ohm', color: '#22C55E' },
    ],

    // ========================================
    // ===== LYCÉE - SECONDE =====
    // ========================================

    'meiosis-diversity': [
        { x: 30, y: 30, label: 'Méiose I', info: 'Réduction du nombre de chromosomes', color: '#8B5CF6' },
        { x: 70, y: 30, label: 'Méiose II', info: 'Division équationnelle', color: '#22C55E' },
        { x: 50, y: 50, label: 'Crossing-over', info: 'Échange de gènes', color: '#EF4444' },
        { x: 50, y: 75, label: 'Gamètes', info: 'Cellules haploïdes (n)', color: '#F59E0B' },
    ],

    'cell-division': [
        { x: 50, y: 20, label: 'Prophase', info: 'Condensation des chromosomes', color: '#8B5CF6' },
        { x: 25, y: 45, label: 'Métaphase', info: 'Alignement au centre', color: '#22C55E' },
        { x: 75, y: 45, label: 'Anaphase', info: 'Séparation des chromatides', color: '#EF4444' },
        { x: 50, y: 75, label: 'Télophase', info: 'Formation de 2 noyaux', color: '#F59E0B' },
    ],

    'rectilinear-motion': [
        { x: 20, y: 50, label: 'Position x₀', info: 'Position initiale', color: '#3B82F6' },
        { x: 50, y: 40, label: 'Vitesse v', info: 'dx/dt = constante', color: '#22C55E' },
        { x: 80, y: 50, label: 'Position x', info: 'x = x₀ + v×t', color: '#EF4444' },
        { x: 50, y: 70, label: 'Graphique', info: 'Droite x(t)', color: '#F59E0B' },
    ],

    'refraction-light': [
        { x: 25, y: 30, label: 'Rayon incident', info: 'Lumière arrivant', color: '#FBBF24' },
        { x: 50, y: 50, label: 'Interface', info: 'Changement de milieu', color: '#6B7280' },
        { x: 75, y: 70, label: 'Rayon réfracté', info: 'Lumière déviée', color: '#00F5D4' },
        { x: 50, y: 25, label: 'n₁ sin i₁ = n₂ sin i₂', info: 'Loi de Snell-Descartes', color: '#8B5CF6' },
    ],

    'periodic-table': [
        { x: 20, y: 30, label: 'Métaux alcalins', info: 'Colonne 1, très réactifs', color: '#EF4444' },
        { x: 50, y: 30, label: 'Métaux transition', info: 'Bloc d, nombreuses propriétés', color: '#F59E0B' },
        { x: 80, y: 30, label: 'Halogènes', info: 'Colonne 17, très électronégatifs', color: '#22C55E' },
        { x: 50, y: 70, label: 'Gaz nobles', info: 'Colonne 18, stables', color: '#3B82F6' },
    ],

    'mole-concept': [
        { x: 50, y: 25, label: 'N = 6.022×10²³', info: 'Nombre d\'Avogadro', color: '#8B5CF6' },
        { x: 30, y: 50, label: 'n = m/M', info: 'Quantité de matière', color: '#22C55E' },
        { x: 70, y: 50, label: 'Masse molaire M', info: 'g/mol', color: '#EF4444' },
        { x: 50, y: 75, label: '1 mole', info: 'Contient N entités', color: '#F59E0B' },
    ],

    // ========================================
    // ===== LYCÉE - PREMIÈRE =====
    // ========================================

    'gravitation-universal': [
        { x: 30, y: 50, label: 'Masse m₁', info: 'Premier corps', color: '#EF4444' },
        { x: 70, y: 50, label: 'Masse m₂', info: 'Deuxième corps', color: '#3B82F6' },
        { x: 50, y: 35, label: 'F = G×m₁×m₂/r²', info: 'Loi de Newton', color: '#22C55E' },
        { x: 50, y: 70, label: 'G', info: 'Constante gravitationnelle', color: '#F59E0B' },
    ],

    'kinetic-potential-energy': [
        { x: 30, y: 40, label: 'Ec = ½mv²', info: 'Énergie cinétique', color: '#EF4444' },
        { x: 70, y: 40, label: 'Ep = mgh', info: 'Énergie potentielle', color: '#3B82F6' },
        { x: 50, y: 65, label: 'Em = Ec + Ep', info: 'Énergie mécanique', color: '#22C55E' },
        { x: 50, y: 25, label: 'Conservation', info: 'Em = constante', color: '#8B5CF6' },
    ],

    'thermal-transfer': [
        { x: 20, y: 50, label: 'Conduction', info: 'Transfert dans les solides', color: '#EF4444' },
        { x: 50, y: 50, label: 'Convection', info: 'Transfert dans les fluides', color: '#F59E0B' },
        { x: 80, y: 50, label: 'Rayonnement', info: 'Transfert par ondes', color: '#FBBF24' },
        { x: 50, y: 75, label: 'Q = m×c×ΔT', info: 'Chaleur échangée', color: '#22C55E' },
    ],

    'redox-reactions': [
        { x: 25, y: 45, label: 'Oxydant', info: 'Gagne des électrons', color: '#EF4444' },
        { x: 75, y: 45, label: 'Réducteur', info: 'Perd des électrons', color: '#3B82F6' },
        { x: 50, y: 30, label: 'Transfert e⁻', info: 'Réaction redox', color: '#F59E0B' },
        { x: 50, y: 70, label: 'Couples ox/red', info: 'Mn+/M et M/Mn-', color: '#22C55E' },
    ],

    'dna-replication': [
        { x: 50, y: 20, label: 'ADN parent', info: 'Double brin original', color: '#8B5CF6' },
        { x: 30, y: 45, label: 'Hélicase', info: 'Ouvre la double hélice', color: '#EF4444' },
        { x: 70, y: 45, label: 'ADN polymérase', info: 'Synthétise le nouveau brin', color: '#22C55E' },
        { x: 50, y: 75, label: '2 ADN filles', info: 'Réplication semi-conservative', color: '#00F5D4' },
    ],

    'enzymes-properties': [
        { x: 30, y: 40, label: 'Substrat', info: 'Molécule transformée', color: '#3B82F6' },
        { x: 50, y: 40, label: 'Site actif', info: 'Zone de liaison', color: '#EF4444' },
        { x: 70, y: 40, label: 'Produit', info: 'Résultat de la réaction', color: '#22C55E' },
        { x: 50, y: 70, label: 'Spécificité', info: 'Clé-serrure', color: '#F59E0B' },
    ],

    // ========================================
    // ===== LYCÉE - TERMINALE =====
    // ========================================

    'wave-interference': [
        { x: 25, y: 50, label: 'Source 1', info: 'Onde cohérente', color: '#3B82F6' },
        { x: 75, y: 50, label: 'Source 2', info: 'Onde cohérente', color: '#EF4444' },
        { x: 50, y: 30, label: 'Constructive', info: 'Amplitudes s\'ajoutent', color: '#22C55E' },
        { x: 50, y: 70, label: 'Destructive', info: 'Amplitudes s\'annulent', color: '#F59E0B' },
    ],

    'electromagnetic-induction': [
        { x: 30, y: 40, label: 'Champ B', info: 'Champ magnétique variable', color: '#3B82F6' },
        { x: 70, y: 40, label: 'Bobine', info: 'Conducteur en boucle', color: '#F59E0B' },
        { x: 50, y: 65, label: 'f.e.m induite', info: 'e = -dΦ/dt', color: '#22C55E' },
        { x: 50, y: 25, label: 'Loi de Faraday', info: 'Lenz s\'oppose', color: '#8B5CF6' },
    ],

    'quantum-mechanics': [
        { x: 30, y: 40, label: 'E = hν', info: 'Énergie du photon', color: '#FBBF24' },
        { x: 70, y: 40, label: 'λ = h/p', info: 'Dualité onde-corpuscule', color: '#8B5CF6' },
        { x: 50, y: 65, label: 'Quantification', info: 'Niveaux discrets', color: '#00F5D4' },
        { x: 50, y: 25, label: 'h', info: 'Constante de Planck', color: '#22C55E' },
    ],

    'radioactivity': [
        { x: 25, y: 40, label: 'Alpha α', info: 'Émission He²⁺', color: '#EF4444' },
        { x: 50, y: 40, label: 'Bêta β', info: 'Émission e⁻ ou e⁺', color: '#3B82F6' },
        { x: 75, y: 40, label: 'Gamma γ', info: 'Rayonnement électromagnétique', color: '#22C55E' },
        { x: 50, y: 70, label: 'T½', info: 'Demi-vie radioactive', color: '#F59E0B' },
    ],

    'protein-synthesis': [
        { x: 30, y: 30, label: 'Transcription', info: 'ADN → ARNm', color: '#8B5CF6' },
        { x: 70, y: 30, label: 'Traduction', info: 'ARNm → Protéine', color: '#22C55E' },
        { x: 30, y: 65, label: 'ARNm', info: 'Copie du gène', color: '#3B82F6' },
        { x: 70, y: 65, label: 'Ribosome', info: 'Usine à protéines', color: '#EF4444' },
    ],

    'acid-base-titration': [
        { x: 25, y: 45, label: 'Acide', info: 'Donneur de H⁺', color: '#EF4444' },
        { x: 75, y: 45, label: 'Base', info: 'Accepteur de H⁺', color: '#3B82F6' },
        { x: 50, y: 30, label: 'Équivalence', info: 'nₐ = n_b', color: '#22C55E' },
        { x: 50, y: 70, label: 'pH', info: 'Mesure de l\'acidité', color: '#F59E0B' },
    ],

    'rlc-circuit': [
        { x: 20, y: 50, label: 'R (Résistance)', info: 'Dissipe l\'énergie', color: '#EF4444' },
        { x: 50, y: 50, label: 'L (Bobine)', info: 'Stocke énergie magnétique', color: '#3B82F6' },
        { x: 80, y: 50, label: 'C (Condensateur)', info: 'Stocke énergie électrique', color: '#22C55E' },
        { x: 50, y: 75, label: 'Résonance', info: 'f₀ = 1/(2π√LC)', color: '#F59E0B' },
    ],

    'photoelectric-effect': [
        { x: 30, y: 40, label: 'Photon hν', info: 'Lumière incidente', color: '#FBBF24' },
        { x: 50, y: 50, label: 'Métal', info: 'Surface émettrice', color: '#6B7280' },
        { x: 70, y: 40, label: 'Électron e⁻', info: 'Photoélectron éjecté', color: '#3B82F6' },
        { x: 50, y: 75, label: 'Ec = hν - W', info: 'Énergie cinétique max', color: '#22C55E' },
    ],

    'nuclear-fusion-fission': [
        { x: 25, y: 45, label: 'Fission', info: 'Gros noyau → petits noyaux', color: '#EF4444' },
        { x: 75, y: 45, label: 'Fusion', info: 'Petits noyaux → gros noyau', color: '#F59E0B' },
        { x: 50, y: 30, label: 'E = Δm×c²', info: 'Énergie libérée', color: '#22C55E' },
        { x: 50, y: 70, label: 'Défaut masse', info: 'Δm = Σm_i - m_f', color: '#8B5CF6' },
    ],

    'organic-chemistry': [
        { x: 25, y: 40, label: 'Alcane', info: 'Liaison simple C-C', color: '#6B7280' },
        { x: 50, y: 40, label: 'Alcène', info: 'Double liaison C=C', color: '#22C55E' },
        { x: 75, y: 40, label: 'Alcyne', info: 'Triple liaison C≡C', color: '#EF4444' },
        { x: 50, y: 70, label: 'Groupes fonctionnels', info: '-OH, -COOH, -NH₂...', color: '#F59E0B' },
    ],

    'molecular-geometry': [
        { x: 50, y: 25, label: 'VSEPR', info: 'Répulsion des paires e⁻', color: '#8B5CF6' },
        { x: 25, y: 55, label: 'Tétraédrique', info: '4 liaisons, 109.5°', color: '#22C55E' },
        { x: 75, y: 55, label: 'Plan trigonal', info: '3 liaisons, 120°', color: '#EF4444' },
        { x: 50, y: 80, label: 'Linéaire', info: '2 liaisons, 180°', color: '#3B82F6' },
    ],

    'pendulum-oscillations': [
        { x: 30, y: 30, label: 'Position initiale', info: 'Amplitude maximale', color: '#EF4444' },
        { x: 70, y: 30, label: 'Position équilibre', info: 'Vitesse maximale', color: '#22C55E' },
        { x: 50, y: 55, label: 'T = 2π√(L/g)', info: 'Période d\'oscillation', color: '#3B82F6' },
        { x: 50, y: 80, label: 'Mouvement harmonique', info: 'θ(t) = θ₀cos(ωt)', color: '#F59E0B' },
    ],

    'enzyme-kinetics': [
        { x: 25, y: 40, label: 'Vmax', info: 'Vitesse maximale', color: '#EF4444' },
        { x: 75, y: 40, label: 'Km', info: 'Constante de Michaelis', color: '#3B82F6' },
        { x: 50, y: 65, label: 'v = Vmax[S]/(Km+[S])', info: 'Équation de Michaelis-Menten', color: '#22C55E' },
        { x: 50, y: 25, label: 'Saturation', info: 'Tous sites occupés', color: '#F59E0B' },
    ],

    'synaptic-transmission': [
        { x: 20, y: 50, label: 'Neurone pré', info: 'Libère neurotransmetteurs', color: '#8B5CF6' },
        { x: 50, y: 40, label: 'Fente synaptique', info: 'Espace entre neurones', color: '#6B7280' },
        { x: 80, y: 50, label: 'Neurone post', info: 'Reçoit le signal', color: '#22C55E' },
        { x: 50, y: 70, label: 'Récepteurs', info: 'Protéines membranaires', color: '#F59E0B' },
    ],

    'muscle-contraction': [
        { x: 25, y: 40, label: 'Actine', info: 'Filament fin', color: '#EF4444' },
        { x: 75, y: 40, label: 'Myosine', info: 'Filament épais', color: '#3B82F6' },
        { x: 50, y: 60, label: 'Sarcomère', info: 'Unité contractile', color: '#22C55E' },
        { x: 50, y: 25, label: 'ATP + Ca²⁺', info: 'Énergie et signal', color: '#F59E0B' },
    ],

    'kepler-laws': [
        { x: 50, y: 30, label: 'Ellipse', info: '1ère loi: orbite elliptique', color: '#8B5CF6' },
        { x: 30, y: 55, label: 'Aires égales', info: '2ème loi: vitesse variable', color: '#22C55E' },
        { x: 70, y: 55, label: 'T²/a³ = k', info: '3ème loi: période orbitale', color: '#EF4444' },
        { x: 50, y: 80, label: 'Soleil au foyer', info: 'Centre d\'attraction', color: '#FBBF24' },
    ],

    'doppler-effect': [
        { x: 20, y: 50, label: 'Source mobile', info: 'Émetteur en mouvement', color: '#EF4444' },
        { x: 50, y: 35, label: 'Compression', info: 'Fréquence augmentée', color: '#3B82F6' },
        { x: 50, y: 65, label: 'Dilatation', info: 'Fréquence diminuée', color: '#22C55E' },
        { x: 80, y: 50, label: 'Observateur', info: 'Détecte le changement', color: '#F59E0B' },
    ],
};

// Ajout des images pour le lycée
Object.assign(simulationImages, {
    // Seconde
    'forces-inertia': '/images/simulations/seconde/forces_inertia.png',
    'gas-laws': '/images/simulations/seconde/gas_laws.png',
    'sound-waves': '/images/simulations/seconde/sound_waves.png',
    'atomic-structure-seconde': '/images/simulations/seconde/atomic_structure.png',
    'extraction-distillation': '/images/simulations/seconde/distillation_setup.png',
    'light-spectrum': '/images/simulations/seconde/light_spectrum.png',
    'chromatography': '/images/simulations/seconde/chromatography.png',
    'chemical-tests': '/images/simulations/seconde/chemical_tests.png',
    'sonar-echolocation': '/images/simulations/seconde/sonar_echolocation.png',
    'power-energy': '/images/simulations/seconde/power_energy.png',
    'meiosis-diversity': '/images/dna_helix_realistic_1765402108086.png',
    'cell-division': '/images/cell_biology_visual_1765400155186.png',
    'rectilinear-motion': '/images/simulations/seconde/rectilinear_motion.png',
    'refraction-light': '/images/simulations/seconde/refraction_light.png',
    'periodic-table': '/images/physics_atoms_visual_1765400173472.png',
    'mole-concept': '/images/simulations/seconde/mole_concept.png',
    'molar-concentration': '/images/simulations/seconde/molar_concentration.png',
    'gravitation-universal': '/images/simulations/seconde/universal_gravitation.png',
    'kinetic-potential-energy': '/images/physics_atoms_visual_1765400173472.png',
    'thermal-transfer': '/images/physics_atoms_visual_1765400173472.png',
    'redox-reactions': '/images/chemistry_reactions_visual_1765400190665.png',
    'dna-replication': '/images/dna_helix_realistic_1765402108086.png',
    'enzymes-properties': '/images/cell_biology_visual_1765400155186.png',
    'cell-respiration': '/images/respiratory_system_3d_1765405364413.png',
    'advanced-photosynthesis': '/images/photosynthesis_process_1765402743855.png',

    // Terminale
    'wave-interference': '/images/physics_atoms_visual_1765400173472.png',
    'electromagnetic-induction': '/images/electric_circuit_3d_1765405396519.png',
    'quantum-mechanics': '/images/physics_atoms_visual_1765400173472.png',
    'radioactivity': '/images/physics_atoms_visual_1765400173472.png',
    'protein-synthesis': '/images/dna_helix_realistic_1765402108086.png',
    'acid-base-titration': '/images/chemistry_reactions_visual_1765400190665.png',
    'rlc-circuit': '/images/electric_circuit_3d_1765405396519.png',
    'photoelectric-effect': '/images/physics_atoms_visual_1765400173472.png',
    'nuclear-fusion-fission': '/images/physics_atoms_visual_1765400173472.png',
    'organic-chemistry': '/images/chemistry_reactions_visual_1765400190665.png',
    'molecular-geometry': '/images/chemistry_reactions_visual_1765400190665.png',
    'pendulum-oscillations': '/images/physics_atoms_visual_1765400173472.png',
    'enzyme-kinetics': '/images/cell_biology_visual_1765400155186.png',
    'synaptic-transmission': '/images/neuron_synapse_3d_1765402707517.png',
    'muscle-contraction': '/images/cell_biology_visual_1765400155186.png',
    'kepler-laws': '/images/solar_system_realistic_1765402725659.png',
    'doppler-effect': '/images/physics_atoms_visual_1765400173472.png',

    // Autres lycée
    'diffraction-light': '/images/physics_atoms_visual_1765400173472.png',
    'electrolysis': '/images/chemistry_reactions_visual_1765400190665.png',
    'adaptive-immunity': '/images/cell_biology_visual_1765400155186.png',
    'satellite-motion': '/images/solar_system_realistic_1765402725659.png',
    'rc-circuit': '/images/electric_circuit_3d_1765405396519.png',
    'chemical-equilibrium': '/images/chemistry_reactions_visual_1765400190665.png',
    'evolution-selection': '/images/ecosystem_food_chain_1765405441391.png',
    'esterification-reaction': '/images/chemistry_reactions_visual_1765400190665.png',
    'saponification-soap': '/images/chemistry_reactions_visual_1765400190665.png',
    'chirality-stereochemistry': '/images/chemistry_reactions_visual_1765400190665.png',
    'hiv-immune-system': '/images/cell_biology_visual_1765400155186.png',
    'climate-feedback': '/images/water_cycle_visual_1765402157306.png',
    'enzymatic-kinetics': '/images/cell_biology_visual_1765400155186.png',

    // PC 4e - Simulations
    'scientific-method-sim': '/images/simulations/pc4e/scientific-method.png',
    'measurement-tools-sim': '/images/simulations/pc4e/measurement.png',
    'intro-electricity-sim': '/images/simulations/pc4e/electricity.png',
    'light-sources-sim': '/images/simulations/pc4e/light-sources.png',
    'atom-builder-sim': '/images/simulations/pc4e/atoms-molecules.png',
    'mole-concept-sim': '/images/simulations/pc4e/mole.png',
    'mixture-separation-sim': '/images/simulations/pc4e/mixture.png',
    'weight-mass-sim': '/images/simulations/pc4e/weight-mass.png',
    'density-explorer': '/images/simulations/pc4e/density.png',
    'light-propagation-pc4': '/images/simulations/pc4e/light-propagation.png',
    'refraction-simulator': '/images/simulations/pc4e/refraction.png',
    'mass-conservation': '/images/simulations/pc4e/mass-conservation.png',
});
