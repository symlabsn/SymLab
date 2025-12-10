// Configuration des images pour chaque simulation du collège (par ID)
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

    // Autres simulations
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
        { x: 70, y: 35, label: 'CO₂', info: 'Dioxyde de carbone absorbé par les stomates', color: '#6B7280' },
        { x: 50, y: 70, label: 'Glucose (C₆H₁₂O₆)', info: 'Sucre produit = énergie pour la plante', color: '#F97316' },
        { x: 25, y: 60, label: 'O₂', info: 'Oxygène libéré dans l\'atmosphère', color: '#3B82F6' },
    ],

    // ===== ÉTATS DE LA MATIÈRE =====
    'states-of-matter': [
        { x: 20, y: 50, label: 'Solide', info: 'Molécules fixes, forme définie', color: '#3B82F6' },
        { x: 50, y: 50, label: 'Liquide', info: 'Molécules mobiles, prend la forme du récipient', color: '#22C55E' },
        { x: 80, y: 50, label: 'Gaz', info: 'Molécules très espacées, occupe tout l\'espace', color: '#EF4444' },
        { x: 35, y: 75, label: 'Fusion', info: 'Solide → Liquide (absorption chaleur)', color: '#F59E0B' },
        { x: 65, y: 75, label: 'Vaporisation', info: 'Liquide → Gaz (ébullition)', color: '#EC4899' },
    ],

    // ===== CIRCUITS ÉLECTRIQUES =====
    'simple-circuits': [
        { x: 20, y: 50, label: 'Pile/Générateur', info: 'Fournit l\'énergie électrique', color: '#EF4444' },
        { x: 50, y: 30, label: 'Interrupteur', info: 'Ouvre ou ferme le circuit', color: '#6B7280' },
        { x: 80, y: 50, label: 'Ampoule', info: 'Transforme l\'électricité en lumière', color: '#FBBF24' },
        { x: 50, y: 70, label: 'Fils conducteurs', info: 'Transportent le courant électrique', color: '#00F5D4' },
    ],

    // ===== SYSTÈME DIGESTIF =====
    'digestive-system': [
        { x: 50, y: 15, label: 'Bouche', info: 'Mastication et salive (amylase)', color: '#EC4899' },
        { x: 50, y: 30, label: 'Œsophage', info: 'Transport vers l\'estomac', color: '#F59E0B' },
        { x: 45, y: 45, label: 'Estomac', info: 'Digestion acide des protéines', color: '#EF4444' },
        { x: 35, y: 55, label: 'Foie', info: 'Produit la bile pour digérer les graisses', color: '#8B5CF6' },
        { x: 50, y: 65, label: 'Intestin grêle', info: 'Absorption des nutriments', color: '#22C55E' },
        { x: 50, y: 80, label: 'Gros intestin', info: 'Absorption de l\'eau', color: '#3B82F6' },
    ],

    // ===== CIRCULATION SANGUINE =====
    'blood-circulation': [
        { x: 50, y: 35, label: 'Cœur', info: 'Pompe le sang dans tout le corps', color: '#EF4444' },
        { x: 30, y: 50, label: 'Artères', info: 'Transportent le sang oxygéné (rouge)', color: '#DC2626' },
        { x: 70, y: 50, label: 'Veines', info: 'Ramènent le sang désoxygéné (bleu)', color: '#3B82F6' },
        { x: 50, y: 20, label: 'Poumons', info: 'Échanges O₂/CO₂', color: '#EC4899' },
        { x: 50, y: 70, label: 'Capillaires', info: 'Échanges avec les cellules', color: '#22C55E' },
    ],

    // ===== CYCLE DE L'EAU =====
    'water-cycle': [
        { x: 75, y: 20, label: 'Soleil', info: 'Chauffe l\'eau et provoque l\'évaporation', color: '#FBBF24' },
        { x: 25, y: 65, label: 'Évaporation', info: 'L\'eau liquide devient vapeur', color: '#0EA5E9' },
        { x: 50, y: 20, label: 'Condensation', info: 'La vapeur forme les nuages', color: '#94A3B8' },
        { x: 70, y: 45, label: 'Précipitations', info: 'Pluie, neige, grêle', color: '#3B82F6' },
        { x: 40, y: 80, label: 'Ruissellement', info: 'L\'eau coule vers les rivières et océans', color: '#06B6D4' },
    ],

    // ===== SYSTÈME NERVEUX =====
    'nervous-system': [
        { x: 15, y: 50, label: 'Dendrites', info: 'Reçoivent les signaux des autres neurones', color: '#A78BFA' },
        { x: 35, y: 50, label: 'Corps cellulaire', info: 'Contient le noyau du neurone', color: '#8B5CF6' },
        { x: 60, y: 50, label: 'Axone', info: 'Transmet l\'influx nerveux', color: '#00F5D4' },
        { x: 85, y: 50, label: 'Synapse', info: 'Connexion chimique entre neurones', color: '#F59E0B' },
        { x: 60, y: 35, label: 'Gaine de myéline', info: 'Accélère la transmission', color: '#EC4899' },
    ],

    // ===== TECTONIQUE DES PLAQUES =====
    'plate-tectonics': [
        { x: 50, y: 80, label: 'Noyau terrestre', info: 'Centre chaud de la Terre', color: '#FBBF24' },
        { x: 50, y: 60, label: 'Manteau', info: 'Roche en fusion, convection', color: '#F97316' },
        { x: 30, y: 40, label: 'Plaque A', info: 'Croûte terrestre en mouvement', color: '#8B5CF6' },
        { x: 70, y: 40, label: 'Plaque B', info: 'Croûte terrestre en mouvement', color: '#22C55E' },
        { x: 50, y: 25, label: 'Zone de collision', info: 'Formation de montagnes ou tremblements', color: '#EF4444' },
    ],

    // ===== RÉACTIONS CHIMIQUES =====
    'chemical-reactions': [
        { x: 25, y: 50, label: 'Réactifs', info: 'Substances de départ', color: '#3B82F6' },
        { x: 50, y: 50, label: 'Réaction', info: 'Transformation des liaisons chimiques', color: '#F59E0B' },
        { x: 75, y: 50, label: 'Produits', info: 'Nouvelles substances formées', color: '#22C55E' },
        { x: 50, y: 25, label: 'Énergie', info: 'Absorbée ou libérée', color: '#EF4444' },
    ],

    // ===== ADN / GÉNÉTIQUE =====
    'genetics-dna': [
        { x: 50, y: 25, label: 'Double hélice', info: 'Structure en spirale de l\'ADN', color: '#8B5CF6' },
        { x: 35, y: 45, label: 'Adénine (A)', info: 'Se lie avec Thymine', color: '#22C55E' },
        { x: 65, y: 45, label: 'Thymine (T)', info: 'Se lie avec Adénine', color: '#EF4444' },
        { x: 35, y: 65, label: 'Guanine (G)', info: 'Se lie avec Cytosine', color: '#3B82F6' },
        { x: 65, y: 65, label: 'Cytosine (C)', info: 'Se lie avec Guanine', color: '#F59E0B' },
        { x: 50, y: 85, label: 'Gène', info: 'Séquence codant une protéine', color: '#00F5D4' },
    ],

    // ===== ATOME =====
    'atomic-structure': [
        { x: 50, y: 50, label: 'Noyau', info: 'Protons (+) et Neutrons', color: '#EF4444' },
        { x: 30, y: 30, label: 'Électron', info: 'Particule négative (-)', color: '#3B82F6' },
        { x: 70, y: 30, label: 'Orbite', info: 'Trajectoire de l\'électron', color: '#00F5D4' },
        { x: 50, y: 75, label: 'Nuage électronique', info: 'Zone de probabilité', color: '#8B5CF6' },
    ],

    // ===== VOLCAN =====
    'volcano-eruption': [
        { x: 50, y: 15, label: 'Cratère', info: 'Ouverture par où sort la lave', color: '#F97316' },
        { x: 50, y: 35, label: 'Cheminée', info: 'Conduit principal du magma', color: '#EF4444' },
        { x: 30, y: 50, label: 'Coulée de lave', info: 'Magma refroidi en surface', color: '#DC2626' },
        { x: 50, y: 70, label: 'Chambre magmatique', info: 'Réservoir de roche en fusion', color: '#FBBF24' },
        { x: 70, y: 55, label: 'Cendres', info: 'Particules projetées dans l\'air', color: '#6B7280' },
    ],

    // ===== CHAÎNE ALIMENTAIRE =====
    'food-chain': [
        { x: 20, y: 25, label: 'Soleil', info: 'Source d\'énergie primaire', color: '#FBBF24' },
        { x: 20, y: 50, label: 'Producteurs', info: 'Plantes (photosynthèse)', color: '#22C55E' },
        { x: 50, y: 50, label: 'Consommateurs I', info: 'Herbivores', color: '#3B82F6' },
        { x: 80, y: 50, label: 'Consommateurs II', info: 'Carnivores', color: '#EF4444' },
        { x: 50, y: 80, label: 'Décomposeurs', info: 'Bactéries, champignons', color: '#8B5CF6' },
    ],

    // ===== RESPIRATION =====
    'respiration-human': [
        { x: 50, y: 20, label: 'Trachée', info: 'Conduit de l\'air', color: '#6B7280' },
        { x: 35, y: 45, label: 'Bronches', info: 'Ramifications vers les poumons', color: '#3B82F6' },
        { x: 65, y: 45, label: 'Poumon droit', info: '3 lobes, échanges gazeux', color: '#EC4899' },
        { x: 50, y: 65, label: 'Alvéoles', info: 'Petits sacs pour O₂/CO₂', color: '#00F5D4' },
        { x: 50, y: 85, label: 'Diaphragme', info: 'Muscle de la respiration', color: '#F59E0B' },
    ],

    // ===== PLANTE =====
    'plant-growth': [
        { x: 50, y: 15, label: 'Fleur', info: 'Organe de reproduction', color: '#EC4899' },
        { x: 50, y: 35, label: 'Feuille', info: 'Photosynthèse et respiration', color: '#22C55E' },
        { x: 50, y: 55, label: 'Tige', info: 'Transport sève (xylème/phloème)', color: '#8B5CF6' },
        { x: 50, y: 80, label: 'Racines', info: 'Absorption eau et minéraux', color: '#F59E0B' },
    ],

    // ===== COMBUSTION =====
    'combustion-reaction': [
        { x: 25, y: 50, label: 'Combustible', info: 'Matière qui brûle (bois, gaz...)', color: '#F97316' },
        { x: 50, y: 30, label: 'Comburant (O₂)', info: 'Oxygène nécessaire', color: '#3B82F6' },
        { x: 50, y: 70, label: 'Chaleur', info: 'Énergie d\'activation', color: '#EF4444' },
        { x: 75, y: 50, label: 'Flamme', info: 'Réaction exothermique', color: '#FBBF24' },
    ],
};
