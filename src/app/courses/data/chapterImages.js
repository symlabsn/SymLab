// Mapping des images illustratives pour les chapitres SVT
export const chapterImages = {
    // SVT 6ème - Images générées
    'svt-6e-01': '/images/courses/svt6/svt6_ch1_environment.png',
    'svt-6e-02': '/images/courses/svt6/svt6_ch2_vertebrates.png',
    'svt-6e-03': '/images/courses/svt6/svt6_ch3_foodchain.png',
    'svt-6e-04': '/images/courses/svt6/svt6_ch4_photosynthesis.png',
    'svt-6e-05': '/images/courses/svt6/svt6_ch5_agriculture.png',
    'svt-6e-06': '/images/courses/svt6/svt6_ch6_locomotion.png',
    'svt-6e-07': '/images/courses/svt6/svt6_ch7_cell.png',
    'svt-6e-08': '/images/courses/svt6/svt6_ch8_plantgrowth.png',
    'svt-6e-09': '/images/courses/svt6/svt6_ch9_malaria.png',
    'svt-6e-10': '/images/courses/svt6/svt6_ch10_hygiene.png',
    'svt-6e-11': '/images/courses/svt6/svt6_ch11_water.png',
    'svt-6e-12': '/images/courses/svt6/svt6_ch12_landscape.png',

    // SVT 5ème - Images générées
    'svt-5e-01': '/images/courses/svt5/svt5_ch1_living_environment.png',
    'svt-5e-02': '/images/courses/svt5/svt5_ch2_pollution.png',
    'svt-5e-03': '/images/courses/svt5/svt5_ch3_animal_diets.png',
    'svt-5e-04': '/images/courses/svt5/svt5_ch4_nutrition.png',
    'svt-5e-05': '/images/courses/svt5/svt5_ch5_respiration.png',
    // Chapitres 6-12 SVT 5ème - Images à générer (quota atteint)
    'svt-5e-06': null, // Reproduction animale
    'svt-5e-07': null, // Reproduction plantes à fleurs
    'svt-5e-08': null, // Reproduction plantes sans fleurs
    'svt-5e-09': null, // Sols diversité
    'svt-5e-10': null, // Sols genèse
    'svt-5e-11': null, // Roches sédimentaires origine
    'svt-5e-12': null, // Roches sédimentaires gestion
};

// Helper function to get chapter image
export function getChapterImage(chapterId) {
    return chapterImages[chapterId] || null;
}

// Descriptions des images pour chaque chapitre (pour génération future)
export const chapterImagePrompts = {
    'svt-5e-06': "Educational comparison of Oviparous vs Viviparous reproduction: Bird sitting on eggs, turtle laying eggs on beach vs pregnant cow with calf visible inside. Labels in French.",
    'svt-5e-07': "Detailed cross-section of a flower showing reproductive parts: Stamen with pollen, Pistil with ovary, bee transferring pollen. Botanical illustration.",
    'svt-5e-08': "Educational diagram of fern reproduction by spores: fern frond with sporangia, spores releasing, prothallus, lifecycle arrows.",
    'svt-5e-09': "Cross-section of soil layers: Litter, Humus, Mineral layer, Bedrock. Labels in French. Educational geology style.",
    'svt-5e-10': "Timeline of soil formation: bare rock, weathering, lichens, thin soil, thick fertile soil. Time labels.",
    'svt-5e-11': "Diagram of sedimentary rock formation: erosion, transport, deposit, compaction, diagenesis. Educational geology.",
    'svt-5e-12': "Senegalese geological resources map: Phosphates at Thiès, Limestone at Bargny, Sand on coast. Labels in French.",
};
