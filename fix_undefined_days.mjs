
import fs from 'fs';
import { challengesEnriched, progressionSystem, badges } from './src/app/challenges/challengeDataEnriched.js';

// Correction : Ajouter dayNumber manquant pour 81-100
const correctedChallenges = challengesEnriched.map(c => {
    // Si dayNumber est manquant, on le déduit de l'ID (ex: 'day_081' -> 81)
    if (c.dayNumber === undefined) {
        const extractedNumber = parseInt(c.id.split('_')[1], 10);
        return {
            ...c,
            dayNumber: extractedNumber
        };
    }
    return c;
});

// Réécriture du fichier complet
const fileContent = `// Données enrichies pour les challenges avec théorie, histoire, gamification et analogies africaines
export const challengesEnriched = ${JSON.stringify(correctedChallenges, null, 4)};

// Système de progression (déverrouillage désactivé)
export const progressionSystem = {
    getTotalXP: (completedDays) => {
        return completedDays.reduce((total, dayId) => {
            const challenge = challengesEnriched.find(c => c && c.id === dayId);
            return total + (challenge?.xpReward || 0);
        }, 0);
    },

    getLevel: (xp) => {
        if (xp < 500) return { level: 1, title: 'Novice' };
        if (xp < 1500) return { level: 2, title: 'Apprenti' };
        if (xp < 3000) return { level: 3, title: 'Pratiquant' };
        if (xp < 5000) return { level: 4, title: 'Expert' };
        if (xp < 8000) return { level: 5, title: 'Maître' };
        return { level: 6, title: 'Légende SymPy' };
    },

    isUnlocked: (dayNumber, completedDays) => {
        // Tous les jours sont déverrouillés pour le moment
        return true;
    }
};

// Badges et récompenses
export const badges = ${JSON.stringify(badges, null, 4)};
`;

fs.writeFileSync('src/app/challenges/challengeDataEnriched.js', fileContent);
console.log('challengeDataEnriched.js corrigé (dayNumber ajoutés) !');

// --- Synchronisation immédiate de challengeData.js (version légère) ---

const challengesLight = correctedChallenges.map(c => ({
    id: c.id,
    title: `Jour ${String(c.dayNumber).padStart(3, '0')} — ${c.title.replace(/^PROJET : /, '')}`,
    code: c.code,
    output: c.output,
    exercises: c.exercises
}));

const lightFileContent = `export const challenges = ${JSON.stringify(challengesLight, null, 4)};`;
fs.writeFileSync('src/app/challenges/challengeData.js', lightFileContent);
console.log('challengeData.js resynchronisé !');
