#!/usr/bin/env node

/**
 * Script pour vérifier et corriger les formules LaTeX dans les fichiers de cours
 * Problème : Double échappement des backslashes (\\times au lieu de \times)
 */

const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, 'src', 'app', 'courses', 'data');

// Fichiers à vérifier
const files = [
    'math6e.js',
    'math5e.js',
    'math4e.js',
    'math3e.js',
    'pc4e.js',
    'pc3e.js',
    'svt6e.js',
    'svt5e.js',
    'svt4e.js',
    'svt3e.js'
];

// Patterns à corriger (dans les template literals)
const corrections = [
    // Commandes LaTeX courantes
    { wrong: /\\\\\\/g, correct: '\\' },  // Triple backslash -> simple
    { wrong: /\\\\\\\\/g, correct: '\\' }, // Quadruple backslash -> simple
];

let totalIssues = 0;
let totalFixed = 0;

console.log('🔍 Vérification des formules LaTeX...\n');

files.forEach(filename => {
    const filepath = path.join(dataDir, filename);

    if (!fs.existsSync(filepath)) {
        console.log(`⚠️  ${filename} - Fichier non trouvé`);
        return;
    }

    let content = fs.readFileSync(filepath, 'utf8');
    let originalContent = content;
    let fileIssues = 0;

    // Appliquer les corrections
    corrections.forEach(({ wrong, correct }) => {
        const matches = content.match(wrong);
        if (matches) {
            fileIssues += matches.length;
            content = content.replace(wrong, correct);
        }
    });

    if (fileIssues > 0) {
        console.log(`✏️  ${filename} - ${fileIssues} problème(s) trouvé(s)`);
        // Sauvegarder le fichier corrigé
        fs.writeFileSync(filepath, content, 'utf8');
        totalFixed += fileIssues;
    } else {
        console.log(`✅ ${filename} - Aucun problème`);
    }

    totalIssues += fileIssues;
});

console.log(`\n📊 Résumé :`);
console.log(`   - Fichiers vérifiés : ${files.length}`);
console.log(`   - Problèmes trouvés : ${totalIssues}`);
console.log(`   - Corrections appliquées : ${totalFixed}`);

if (totalFixed > 0) {
    console.log(`\n✅ Corrections terminées ! Exécutez 'npm run build' pour vérifier.`);
} else {
    console.log(`\n✨ Tous les fichiers sont corrects !`);
}
