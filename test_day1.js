// Test script pour vérifier les données du jour 1
const { challenges } = require('./src/app/challenges/challengeData.js');
const { challengesEnriched } = require('./src/app/challenges/challengeDataEnriched.js');

const dayId = 'day_001';

const challenge = challenges.find(c => c.id === dayId);
const enriched = challengesEnriched.find(c => c.id === dayId);

console.log('=== DIAGNOSTIC JOUR 1 ===\n');

console.log('1. Challenge de base trouvé:', !!challenge);
if (challenge) {
    console.log('   - ID:', challenge.id);
    console.log('   - Titre:', challenge.title);
    console.log('   - Code présent:', !!challenge.code);
    console.log('   - Code longueur:', challenge.code?.length || 0);
    console.log('   - Output:', challenge.output);
    console.log('   - Exercices:', challenge.exercises?.length || 0);
}

console.log('\n2. Données enrichies trouvées:', !!enriched);
if (enriched) {
    console.log('   - ID:', enriched.id);
    console.log('   - Titre:', enriched.title);
    console.log('   - Analogie présente:', !!enriched.africanAnalogy);
    console.log('   - Analogie longueur:', enriched.africanAnalogy?.length || 0);
    console.log('   - Théorie présente:', !!enriched.theory);
    if (enriched.theory) {
        console.log('   - Théorie titre:', enriched.theory.title);
        console.log('   - Scientifiques:', enriched.theory.scientists?.length || 0);
    }
    console.log('   - XP:', enriched.xpReward);
    console.log('   - Badge:', enriched.badge);
}

console.log('\n3. Affichage prévu:');
const displayChallenge = challenge || {
    id: dayId,
    title: enriched?.title ? `Jour ${dayId.split('_')[1]} — ${enriched.title}` : `Jour ${dayId.split('_')[1]}`,
    code: "# Code non disponible pour le moment",
    output: "Non disponible",
    exercises: []
};

console.log('   - Titre affiché:', displayChallenge.title);
console.log('   - Code affiché:', displayChallenge.code.substring(0, 50) + '...');

console.log('\n=== FIN DIAGNOSTIC ===');
