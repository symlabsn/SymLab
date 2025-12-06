# 🔍 Guide de Vérification et Correction des Formules LaTeX

## Problème Identifié

Les formules mathématiques ne s'affichent pas correctement car les backslashes sont mal échappés dans les template literals.

## ✅ Syntaxe Correcte (Template Literals avec backticks)

```javascript
content: `
    <p>$a^2 = a \times a$</p>
    <p>$\frac{a}{b}$</p>
    <p>$\sqrt{25} = 5$</p>
`
```

## ❌ Syntaxe Incorrecte (Double échappement)

```javascript
content: `
    <p>$a^2 = a \\times a$</p>      // ❌ Double backslash
    <p>$\\frac{a}{b}$</p>            // ❌ Double backslash
    <p>$\\sqrt{25} = 5$</p>          // ❌ Double backslash
`
```

## 📋 Commandes LaTeX à Vérifier

### Symboles Mathématiques
- `\times` → Multiplication (×)
- `\div` → Division (÷)
- `\pm` → Plus ou moins (±)
- `\cdot` → Point de multiplication (·)

### Fractions et Racines
- `\frac{a}{b}` → Fraction
- `\sqrt{x}` → Racine carrée
- `\sqrt[n]{x}` → Racine n-ième

### Symboles Grecs
- `\alpha`, `\beta`, `\gamma`, `\theta`
- `\pi`, `\omega`, `\Omega`

### Opérateurs
- `\sum` → Somme
- `\prod` → Produit
- `\int` → Intégrale
- `\lim` → Limite

### Ensembles
- `\mathbb{N}` → Naturels (ℕ)
- `\mathbb{Z}` → Entiers (ℤ)
- `\mathbb{Q}` → Rationnels (ℚ)
- `\mathbb{R}` → Réels (ℝ)

### Géométrie
- `\angle` → Angle
- `\triangle` → Triangle
- `\perp` → Perpendiculaire
- `\parallel` → Parallèle

## 🔧 Méthode de Correction Manuelle

### Étape 1 : Identifier les Problèmes
Chercher dans les fichiers :
```bash
grep -n "\\\\times" src/app/courses/data/*.js
grep -n "\\\\frac" src/app/courses/data/*.js
grep -n "\\\\sqrt" src/app/courses/data/*.js
```

### Étape 2 : Corriger
Remplacer `\\` par `\` dans les formules LaTeX **uniquement** dans les template literals.

### Étape 3 : Vérifier
```bash
npm run build
```

## 📝 Exemples de Corrections

### Math 6e - Nombres Décimaux
```javascript
// ❌ Avant
content: `<p>$\\frac{3}{4} = 0,75$</p>`

// ✅ Après
content: `<p>$\frac{3}{4} = 0,75$</p>`
```

### Math 5e - Puissances
```javascript
// ❌ Avant
content: `<p>$2^3 = 2 \\times 2 \\times 2 = 8$</p>`

// ✅ Après
content: `<p>$2^3 = 2 \times 2 \times 2 = 8$</p>`
```

### Math 4e - Pythagore
```javascript
// ❌ Avant
content: `<p>$a^2 + b^2 = c^2$</p>`  // Correct (pas de \times)

// ✅ Déjà correct
```

### PC - Formules Physiques
```javascript
// ❌ Avant
content: `<p>$P = m \\times g$</p>`

// ✅ Après
content: `<p>$P = m \times g$</p>`
```

## 🎯 Checklist par Fichier

### Math 6e
- [ ] Vérifier les fractions
- [ ] Vérifier les opérations
- [ ] Vérifier les formules de périmètre/aire

### Math 5e
- [x] ✅ Puissances corrigées
- [x] ✅ Fractions corrigées
- [x] ✅ Proportionnalité corrigée

### Math 4e
- [ ] Vérifier Pythagore
- [ ] Vérifier les puissances
- [ ] Vérifier les équations

### Math 3e
- [ ] Vérifier racines carrées
- [ ] Vérifier Thalès
- [ ] Vérifier trigonométrie

### PC 4e & 3e
- [ ] Vérifier formules physiques
- [ ] Vérifier formules chimiques

### SVT (tous niveaux)
- [ ] Généralement pas de LaTeX complexe
- [ ] Vérifier si formules chimiques

## 🚀 Commande Rapide

Pour corriger automatiquement :
```bash
node fix-latex.js
```

Puis tester :
```bash
npm run build
```

## 📊 État Actuel

- ✅ Math 5e : Corrigé
- ⏳ Math 6e : À vérifier
- ⏳ Math 4e : À vérifier
- ⏳ Math 3e : À vérifier
- ⏳ PC 4e : À vérifier
- ⏳ PC 3e : À vérifier
