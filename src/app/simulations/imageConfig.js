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
};
