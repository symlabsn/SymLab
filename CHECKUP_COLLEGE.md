# Check-up SymLab - Cours du Collège

## Problèmes Identifiés

### 1. Affichage des Symboles Mathématiques
**Problème** : Certains symboles mathématiques (unités, symboles spéciaux) peuvent ne pas s'afficher correctement.

**Symboles à vérifier** :
- Symboles d'unités : Ω (Ohm), ² (carré), ³ (cube), ₂ (indice)
- Symboles mathématiques : √ (racine), × (multiplication), ÷ (division)
- Flèches : → (flèche droite), ⇒ (double flèche)
- Symboles chimiques : H₂O, CO₂, O₂

**Solution** :
- Utiliser les entités HTML pour les symboles spéciaux
- Utiliser LaTeX/MathJax pour les formules mathématiques complexes
- Vérifier l'encodage UTF-8 des fichiers

### 2. Démarcation Collège/Lycée
**Problème** : Pas de séparation visuelle claire entre les niveaux Collège et Lycée dans la sidebar.

**Solution proposée** :
```javascript
// Grouper les niveaux par cycle
const collegeLevels = ['6ème', '5ème', '4ème', '3ème'];
const lyceeLevels = ['Seconde', 'Première', 'Terminale'];

// Afficher avec des headers visuels
<div className="mb-6">
  <div className="flex items-center gap-2 mb-3 px-2">
    <div className="w-2 h-2 rounded-full bg-blue-500"></div>
    <span className="text-[10px] font-bold text-blue-400 uppercase">Collège</span>
  </div>
  {/* Boutons pour 6ème, 5ème, 4ème, 3ème */}
</div>

<div>
  <div className="flex items-center gap-2 mb-3 px-2">
    <div className="w-2 h-2 rounded-full bg-purple-500"></div>
    <span className="text-[10px] font-bold text-purple-400 uppercase">Lycée</span>
  </div>
  {/* Boutons pour Seconde, Première, Terminale */}
</div>
```

### 3. Vérification des Formules LaTeX
**Fichiers à vérifier** :
- `src/app/courses/data/math6e.js`
- `src/app/courses/data/math5e.js`
- `src/app/courses/data/math4e.js`
- `src/app/courses/data/math3e.js`
- `src/app/courses/data/pc4e.js`
- `src/app/courses/data/pc3e.js`
- `src/app/courses/data/svt6e.js`
- `src/app/courses/data/svt5e.js`
- `src/app/courses/data/svt4e.js`
- `src/app/courses/data/svt3e.js`

**Points à vérifier** :
1. Échappement correct des backslashes dans LaTeX : `\\` au lieu de `\`
2. Symboles chimiques avec indices : `H_2O` → `H₂O` ou `$H_2O$`
3. Unités avec exposants : `m^2` → `m²` ou `$m^2$`

## Actions Recommandées

### Priorité 1 : Correction des Symboles
1. Remplacer les symboles Unicode problématiques par des entités HTML
2. S'assurer que toutes les formules LaTeX utilisent le bon échappement

### Priorité 2 : Amélioration UI
1. Ajouter la démarcation visuelle Collège/Lycée
2. Ajouter des badges "Nouveau" sur les cours récemment ajoutés
3. Améliorer le responsive design pour mobile

### Priorité 3 : Tests
1. Tester l'affichage sur différents navigateurs
2. Vérifier le rendu MathJax/KaTeX
3. Valider l'accessibilité

## État Actuel

✅ **Complété** :
- 10 cours complets (6ème à 3ème)
- 134 chapitres détaillés
- Build réussi
- Déployé sur GitHub

⏳ **À faire** :
- Correction des symboles d'affichage
- Ajout de la démarcation visuelle
- Tests d'affichage complets
