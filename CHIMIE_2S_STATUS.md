# État du Développement : Chimie Seconde S & Restructuration

**Statut Global : ✅ TERMINÉ**
**Date :** 6 Décembre 2025

Le programme complet de Chimie pour la classe de Seconde S a été développé et intégré, et une restructuration majeure de l'offre pédagogique a été effectuée.

## 1. Nouveau Cours : Chimie 2nde S (10 Chapitres)

Le fichier `src/app/courses/data/chimie2s.js` contient désormais les 10 chapitres demandés, avec une rigueur scientifique stricte.

### 🧪 CHIMIE GÉNÉRALE & STRUCTURE DE LA MATIÈRE
- [x] **C1. Mélanges et Corps pur** (Distillation, corps purs simples/composés).
- [x] **C2. Éléments, atomes, classification** (Isotopes, structure atome, tableau périodique).
- [x] **C3. Liaisons chimiques** (Covalente, Ionique, Lewis, Octet).

### ⚖️ CHIMIE QUANTITATIVE
- [x] **C4. Mole, grandeurs molaires** ($n=m/M$, Avogadro).
- [x] **C5. Réactions chimiques - Équation-bilan** (Lavoisier, équilibrage, bilan molaire).

### 💧 CHIMIE DES SOLUTIONS
- [x] **C6. Généralités sur les solutions aqueuses** (Solvant/Soluté, Concentrations $C$ et $C_m$, Dilution).
- [x] **C7. Solution aqueuse acide** (Ions $H_3O^+$, $HCl$).
- [x] **C8. Solution aqueuse basique** (Ions $OH^-$, $NaOH$).
- [x] **C9. Notion de pH – Indicateurs colorés** (Échelle pH, virage).
- [x] **C10. Caractérisation de quelques ions** (Tests au nitrate d'argent, soude, chlorure de baryum).

### ✨ Caractéristiques Techniques
- **Formatage HTML** : Utilisation stricte de la balise `<strong>` pour le gras (plus de markdown `**` visible).
- **Contenu** : Histoires introductives, Cours structuré, Résumés, Exercices corrigés.

## 2. Restructuration de "Physique - Chimie"

### 🔄 Renommage et Nettoyage
- Le cours "Physique (Wahab Diop) 2nde S" a été renommé **"Physique 2nde S"**.
- La mention "(Wahab Diop)" a été retirée du titre visible pour plus de professionnalisme.
- Le fichier `phys2s.js` a été nettoyé : toutes les occurrences de `**gras**` ont été converties en `<strong>gras</strong>`.

### 🏋️ Section "Entraînement Intensif"
- L'ancienne entrée "Physique Chimie 2nde S" (Première section) a été convertie en **"Entraînement Intensif 2nde S"**.
- C'est désormais une section dédiée aux exercices rigoureux ("Banque d'exercices rigoureux de A à Z").
- *Note technique* : Pour l'instant, elle pointe vers les données de physique en tant que placeholder, prête à être remplie par une banque d'exercices dédiée.

## Vérification
- Testé dans le navigateur via un sous-agent.
- Le cours de Chimie charge correctement le Chapitre 1.
- Le gras s'affiche correctement (plus d'astérisques).
- Les 3 cartes (Entraînement, Physique, Chimie) sont bien présentes dans le niveau Seconde.
