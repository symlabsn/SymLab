// Configuration des images pour chaque simulation (par ID)
export const simulationImages = {
    // Biologie / SVT - Collège
    'cell-structure': '/images/cell_biology_visual_1765400155186.png',
    'photosynthesis': '/images/photosynthesis_process_1765402743855.png',
    'digestive-system': '/images/human_heart_3d_1765402123939.png',
    'blood-circulation': '/images/human_heart_3d_1765402123939.png',
    'nervous-system': '/images/neuron_synapse_3d_1765402707517.png',
    'nerve-impulse': '/images/neuron_synapse_3d_1765402707517.png',

    // Géologie
    'volcano-eruption': '/images/volcano_eruption_epic_1765402140573.png',
    'water-cycle': '/images/water_cycle_visual_1765402157306.png',
    'plate-tectonics': '/images/volcano_eruption_epic_1765402140573.png',

    // Physique / Chimie
    'atomic-structure': '/images/physics_atoms_visual_1765400173472.png',
    'ions-formation': '/images/physics_atoms_visual_1765400173472.png',
    'combustion-reaction': '/images/chemistry_reactions_visual_1765400190665.png',

    // ADN / Génétique
    'dna-structure': '/images/dna_helix_realistic_1765402108086.png',
    'chromosomes-division': '/images/dna_helix_realistic_1765402108086.png',
    'cell-division': '/images/dna_helix_realistic_1765402108086.png',

    // Astronomie
    'solar-system': '/images/solar_system_realistic_1765402725659.png',
};

// Fonction pour obtenir l'image d'une simulation
export const getSimulationImage = (simulationId) => {
    return simulationImages[simulationId] || null;
};

// Points d'intérêt interactifs pour chaque simulation
export const simulationHotspots = {
    'cell-structure': [
        { x: 50, y: 40, label: 'Noyau', info: 'Centre de contrôle contenant l\'ADN', color: '#00F5D4' },
        { x: 30, y: 55, label: 'Mitochondrie', info: 'Produit l\'énergie (ATP)', color: '#F59E0B' },
        { x: 70, y: 50, label: 'Membrane', info: 'Protège et contrôle les échanges', color: '#8B5CF6' },
        { x: 45, y: 70, label: 'Cytoplasme', info: 'Milieu gélatineux de la cellule', color: '#EC4899' },
    ],
    'photosynthesis': [
        { x: 30, y: 30, label: 'Lumière', info: 'Énergie solaire captée', color: '#FBBF24' },
        { x: 50, y: 50, label: 'Chloroplaste', info: 'Lieu de la photosynthèse', color: '#22C55E' },
        { x: 70, y: 40, label: 'CO₂', info: 'Dioxyde de carbone absorbé', color: '#6B7280' },
        { x: 50, y: 75, label: 'Glucose', info: 'Sucre produit', color: '#F97316' },
    ],
    'blood-circulation': [
        { x: 45, y: 30, label: 'Oreillette droite', info: 'Reçoit le sang désoxygéné', color: '#3B82F6' },
        { x: 55, y: 30, label: 'Oreillette gauche', info: 'Reçoit le sang des poumons', color: '#EF4444' },
        { x: 45, y: 60, label: 'Ventricule droit', info: 'Pompe vers les poumons', color: '#3B82F6' },
        { x: 55, y: 60, label: 'Ventricule gauche', info: 'Pompe vers le corps', color: '#EF4444' },
    ],
    'volcano-eruption': [
        { x: 50, y: 15, label: 'Cratère', info: 'Ouverture du volcan', color: '#F97316' },
        { x: 50, y: 40, label: 'Cheminée', info: 'Conduit du magma', color: '#DC2626' },
        { x: 50, y: 75, label: 'Chambre magmatique', info: 'Réservoir de roche fondue', color: '#FBBF24' },
        { x: 25, y: 85, label: 'Croûte terrestre', info: 'Couche externe de la Terre', color: '#78716C' },
    ],
    'water-cycle': [
        { x: 75, y: 25, label: 'Soleil', info: 'Source d\'énergie', color: '#FBBF24' },
        { x: 30, y: 70, label: 'Évaporation', info: 'L\'eau devient vapeur', color: '#0EA5E9' },
        { x: 50, y: 25, label: 'Condensation', info: 'Formation des nuages', color: '#94A3B8' },
        { x: 70, y: 50, label: 'Précipitation', info: 'Pluie ou neige', color: '#3B82F6' },
    ],
    'nervous-system': [
        { x: 20, y: 50, label: 'Dendrites', info: 'Reçoivent les signaux', color: '#A78BFA' },
        { x: 40, y: 50, label: 'Corps cellulaire', info: 'Contient le noyau', color: '#8B5CF6' },
        { x: 65, y: 50, label: 'Axone', info: 'Transmet l\'influx', color: '#00F5D4' },
        { x: 85, y: 50, label: 'Synapse', info: 'Connexion entre neurones', color: '#F59E0B' },
    ],
    'atomic-structure': [
        { x: 50, y: 50, label: 'Noyau', info: 'Protons + Neutrons', color: '#EF4444' },
        { x: 25, y: 30, label: 'Électron', info: 'Particule négative', color: '#3B82F6' },
        { x: 75, y: 70, label: 'Orbite', info: 'Trajectoire des électrons', color: '#00F5D4' },
    ],
    'dna-structure': [
        { x: 50, y: 25, label: 'Double hélice', info: 'Structure en spirale', color: '#8B5CF6' },
        { x: 35, y: 50, label: 'Adénine-Thymine', info: 'Paire de bases A-T', color: '#22C55E' },
        { x: 65, y: 50, label: 'Guanine-Cytosine', info: 'Paire de bases G-C', color: '#F59E0B' },
        { x: 50, y: 75, label: 'Squelette', info: 'Sucre-phosphate', color: '#00F5D4' },
    ],
};

// Actions interactives pour chaque hotspot
export const hotspotActions = {
    'zoom': { icon: '🔍', label: 'Zoomer' },
    'info': { icon: '💡', label: 'En savoir plus' },
    'animate': { icon: '▶️', label: 'Animer' },
};
