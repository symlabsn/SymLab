// Script pour reconstruire le curriculum avec la structure correcte
const fs = require('fs');
const path = require('path');

// Lire le fichier actuel
const filePath = path.join(__dirname, 'src', 'app', 'programming', 'curriculum.js');
const content = fs.readFileSync(filePath, 'utf-8');

// Le fichier actuel a une structure incorrecte où tous les chapitres sont imbriqués
// Nous devons le reconstruire avec la structure correcte:
// pythonCurriculum = [
//     { chapitre 1 },
//     { chapitre 2 },
//     ...
// ]

// Pour l'instant, vérifions juste combien de chapitres il y a
const matches = content.match(/id:\s*'[^']+'/g);
console.log('IDs trouvés:', matches);

// Compter les niveaux d'imbrication à la fin
const endPart = content.slice(-500);
console.log('\nFin du fichier:');
console.log(endPart);
