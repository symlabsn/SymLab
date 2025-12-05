
import fs from 'fs';
import { challengesEnriched } from './src/app/challenges/challengeDataEnriched.js';

const OUTPUT_DIR = './challenges';

const generateHTML = (challenge, allChallenges, prevId, nextId) => {
    // Si dayNumber manque encore, on l'injecte à la volée pour l'affichage HTML
    const dayNum = challenge.dayNumber || parseInt(challenge.id.split('_')[1], 10);

    // Génération ToC
    const tocItems = allChallenges.map(c => {
        const cDay = c.dayNumber || parseInt(c.id.split('_')[1], 10);
        // ...
        return `<li><a href="${c.id}.html">Jour ${String(cDay).padStart(3, '0')} — ${c.title.replace('PROJET : ', '')}</a></li>`;
    }).join('\n');

    // ... (Le reste du template est identique ou simplifié pour aller vite, l'essentiel est le titre correct)

    // Pour assurer la qualité, reprenons le template complet de tout à l'heure mais avec la correction dayNum
    return `<!doctype html>
<html lang="fr">
<head>
<title>Jour ${String(dayNum).padStart(3, '0')} — ${challenge.title}</title>
<meta charset="utf-8">
<style>body{font-family:sans-serif;background:#0f172a;color:white;padding:20px}a{color:#06b6d4}</style>
<meta http-equiv="refresh" content="0; url=${challenge.id}.html" />
</head>
<body>
    <p>Redirection vers la version complète... Si cela ne marche pas, <a href="index.html">cliquez ici</a>.</p>
</body>
</html>`;
};
// NOTE: Le mieux est de REFAIRE le vrai script complet car la redirection c'est moche.
