
import fs from 'fs';
import { challengesEnriched } from './src/app/challenges/challengeDataEnriched.js';

// Créer la version légère à partir de la version enrichie
const challengesLight = challengesEnriched.map(c => ({
    id: c.id,
    title: `Jour ${String(c.dayNumber).padStart(3, '0')} — ${c.title.replace(/^PROJET : /, '')}`, // Formatage uniforme
    code: c.code,
    output: c.output,
    exercises: c.exercises
}));

const fileContent = `export const challenges = ${JSON.stringify(challengesLight, null, 4)};`;

fs.writeFileSync('src/app/challenges/challengeData.js', fileContent);
console.log('challengeData.js synchronisé avec succès !');
