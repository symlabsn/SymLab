export const entrainement2sData = {
    id: 'entrainement-2s',
    title: 'Entraînement Intensif 2nde S',
    author: 'SymLab Team (Conforme Programme Sénéégal)',
    description: 'Banque d\'exercices rigoureux de A à Z avec corrections détaillées pour la Physique et la Chimie.',
    chapters: [
        // ==========================================
        // PHYSIQUE - SÉRIE 1 à 7 (Électricité)
        // ==========================================
        {
            id: 'exo-phys-01',
            part: 'Physique : Électricité',
            title: 'Exercices P1 : Phénomènes d\'électrisation',
            story: "Maîtrisez les calculs de charges et la loi de Coulomb. Ces exercices sont classiques des devoirs.",
            content: `
### Exercice 1 : Interaction électrostatique (Classique)
Deux boules conductrices ponctuelles A et B, portant les charges $q_A = 2 \\cdot 10^{-8} C$ et $q_B = -6 \\cdot 10^{-8} C$, sont placées dans le vide à une distance $d = 10 cm$.

1. Calculer l'intensité de la force électrostatique qui s'exerce entre elles. ($k = 9 \\cdot 10^9 SI$)
2. S'agit-il d'une force attractive ou répulsive ? Justifier.
3. On met les deux boules en contact, puis on les sépare à nouveau à la distance $d$. 
   <br>a) Quelle est la nouvelle charge $q'$ de chaque boule ?
   <br>b) Calculer la nouvelle force $F'$.

<details class="correction-box">
<summary>Voir la Correction Détaillée</summary>
<div class="correction-content">

#### 1. Calcul de la force F
D'après la loi de Coulomb : $F = k \\frac{|q_A \\cdot q_B|}{d^2}$

Attention aux unités : $d = 10 cm = 0,1 m$.

$$F = 9\\cdot 10^9 \\times \\frac{|2\\cdot 10^{-8} \\times (-6\\cdot 10^{-8})|}{(0,1)^2}$$

$$F = 9\\cdot 10^9 \\times \\frac{12\\cdot 10^{-16}}{10^{-2}} = 108 \\cdot 10^{-5} N = 1,08 \\cdot 10^{-3} N$$

#### 2. Nature de la force
Les charges sont de signes contraires ($q_A > 0$ et $q_B < 0$). La force est donc **ATTRACTIVE**.

#### 3. Mise en contact
a) Lors du contact, il y a transfert d'électrons jusqu'à l'équilibre. La charge totale se conserve et se répartit équitablement (boules identiques).

$$q' = \\frac{q_A + q_B}{2} = \\frac{2\\cdot 10^{-8} - 6\\cdot 10^{-8}}{2} = -2\\cdot 10^{-8} C$$

b) Nouvelle force F' :

$$F' = k \\frac{|q'|^2}{d^2} = 9\\cdot 10^9 \\times \\frac{(2\\cdot 10^{-8})^2}{(0,1)^2}$$

$$F' = 9\\cdot 10^9 \\times \\frac{4\\cdot 10^{-16}}{10^{-2}} = 36 \\cdot 10^{-5} N = 3,6 \\cdot 10^{-4} N$$

Comme les charges sont maintenant identiques (négatives), la force devient **RÉPULSIVE**.

</div>
</details>

---

### Exercice 2 : Pendule Électrostatique
Une petite boule de masse $m=0,1g$ portant une charge $q$ est suspendue à un fil isolant. On approche une tige chargée positivement. Le fil s'écarte de la verticale d'un angle $\\alpha = 10^\\circ$ vers la tige.

1. Quel est le signe de la charge $q$ ?
2. Faire le bilan des forces s'exerçant sur la boule à l'équilibre.
3. Déterminer l'intensité de la force électrique $F_e$ subie par la boule. ($g=10 N/kg$)

<details class="correction-box">
<summary>Voir la Correction Détaillée</summary>
<div class="correction-content">

#### 1. Signe de la charge
La boule est attirée par la tige positive. Les charges de signes contraires s'attirent. Donc **$q$ est négative**.

#### 2. Bilan des forces
- Le Poids $\\vec{P}$ (vertical vers le bas).
- La Tension du fil $\\vec{T}$ (selon le fil).
- La Force électrique $\\vec{F_e}$ (horizontale, vers la tige).

#### 3. Calcul de Fe
À l'équilibre : $\\vec{P} + \\vec{T} + \\vec{F_e} = \\vec{0}$.

Par projection ou triangle des forces, on a : $\\tan(\\alpha) = \\frac{F_e}{P}$.

Soit $F_e = P \\times \\tan(\\alpha) = m \\cdot g \\cdot \\tan(\\alpha)$.

Application numérique :

$m = 0,1 g = 10^{-4} kg$

$$F_e = 10^{-4} \\times 10 \\times \\tan(10^\\circ) \\approx 10^{-3} \\times 0,176 = 1,76 \\cdot 10^{-4} N$$

</div>
</details>
            `,
            summary: [
                "**Loi de Coulomb** : $F = k \\frac{|q_A q_B|}{d^2}$.",
                "**Force attractive** : Charges de signes contraires ($+-$).",
                "**Force répulsive** : Charges de même signe ($++$ ou $--$).",
                "**Equilibre** : La somme vectorielle des forces est nulle (Triangle des forces)."
            ],
            exercises: [] // Intentionally empty as the content IS the exercises
        },
        {
            id: 'exo-phys-03',
            part: 'Physique : Électricité',
            title: 'Exercices P3-P4 : Intensité et Tension',
            story: "Applications concrètes des lois des nœuds et des mailles. Indispensable pour réussir tout problème de circuit.",
            content: `
### Exercice 1 : Loi des Nœuds
On considère un nœud A où arrivent les courants $I_1=2A$ et $I_2=3A$, et d'où partent les courants $I_3$, $I_4=1A$ et $I_5=2A$.

1. Énoncer la loi des nœuds.
2. Calculer l'intensité $I_3$.

<details class="correction-box">
<summary>Correction</summary>
<div class="correction-content">

**1. Loi :** La somme des intensités des courants arrivant à un nœud est égale à la somme des intensités des courants qui en partent.

**2. Calcul :**

Arrivée : $I_1 + I_2 = 2 + 3 = 5A$.

Départ : $I_3 + I_4 + I_5 = I_3 + 1 + 2 = I_3 + 3A$.

Égalité : $5 = I_3 + 3 \\Rightarrow I_3 = 2A$.

</div>
</details>
            `,
            summary: [
                "**Loi des Nœuds** : Somme I entrants = Somme I sortants.",
                "**Loi des Mailles** : La somme algébrique des tensions dans une maille est nulle.",
                "**Série** : Même intensité.",
                "**Dérivation** : Même tension."
            ],
            exercises: []
        },
        {
            id: 'exo-chim-04',
            part: 'Chimie : Quantitative',
            title: 'Exercices C4 : La Mole (Calculs)',
            story: "Savoir jongler entre masse, volume et quantité de matière est LA compétence clé en chimie.",
            content: `
### Exercice 1 : Le sucre
Le sucre de table est du saccharose de formule $C_{12}H_{22}O_{11}$.

1. Calculer sa masse molaire moléculaire $M$. (Données : C=12, H=1, O=16 g/mol)
2. Quelle est la quantité de matière (en mol) dans un morceau de sucre de 6 g ?
3. Combien de molécules de saccharose cela représente-t-il ? ($N_A = 6,02 \\cdot 10^{23}$)

<details class="correction-box">
<summary>Correction Détaillée</summary>
<div class="correction-content">

#### 1. Masse Molaire
$$M = 12 \\times M(C) + 22 \\times M(H) + 11 \\times M(O)$$

$$M = 12(12) + 22(1) + 11(16) = 144 + 22 + 176 = 342 \\text{ g/mol}$$

#### 2. Quantité de matière
$$n = \\frac{m}{M} = \\frac{6}{342} \\approx 0,0175 \\text{ mol}$$

#### 3. Nombre de molécules
$$N = n \\times N_A = 0,0175 \\times 6,02 \\cdot 10^{23} \\approx 1,05 \\cdot 10^{22} \\text{ molécules}$$

</div>
</details>

---

### Exercice 2 : Volume d'un gaz
Un flacon contient 0,5 L de dioxygène ($O_2$) à 0°C et 1 atm.

1. Quelle est la quantité de matière de gaz ? ($V_m = 22,4 L/mol$)
2. Quelle est la masse de ce gaz ?

<details class="correction-box">
<summary>Correction</summary>
<div class="correction-content">

#### 1. Nombre de moles
$$n = \\frac{V}{V_m} = \\frac{0,5}{22,4} \\approx 0,022 \\text{ mol}$$

#### 2. Masse
$M(O_2) = 2 \\times 16 = 32 \\text{ g/mol}$.

$$m = n \\times M = 0,022 \\times 32 \\approx 0,71 \\text{ g}$$

</div>
</details>
            `,
            summary: [
                "**Quantité de matière n** : En mol.",
                "**Masse molaire M** : En g/mol (Tableau Périodique).",
                "**Solide/Liquide** : $n = m / M$.",
                "**Gaz** : $n = V / V_m$."
            ],
            exercises: []
        },
        {
            id: 'exo-phys-10',
            part: 'Physique : Mécanique',
            title: 'Exercices P10 : Poids et Masse',
            story: "Ne confondez plus P et m. Exercices sur la relation P=mg et l'équilibre.",
            content: `
### Exercice 1 : Sur la Lune
Un objet pèse $98 N$ sur Terre ($g_T = 9,8 N/kg$).

1. Quelle est sa masse ?
2. Quel serait son poids sur la Lune où $g_L = 1,6 N/kg$ ?
3. Quelle serait sa masse sur la Lune ?

<details class="correction-box">
<summary>Correction</summary>
<div class="correction-content">

**1. Masse :** $m = P_T / g_T = 98 / 9,8 = 10 \\text{ kg}$.

**2. Poids Lune :** $P_L = m \\times g_L = 10 \\times 1,6 = 16 \\text{ N}$.

**3. Masse Lune :** La masse ne change pas. Elle reste de **10 kg**.

</div>
</details>
            `,
            summary: [
                "**Poids (P)** : Force d'attraction gravitationnelle (en N).",
                "**Masse (m)** : Quantité de matière (en kg). Invariable.",
                "**Relation** : $P = m \\times g$.",
                "**g** : Intensité de pesanteur (dépend du lieu, ex: Terre vs Lune)."
            ],
            exercises: []
        }
    ]
};
