export const entrainement1sData = {
    id: 'entrainement-1s',
    title: 'Entraînement Intensif PC 1ère S',
    author: 'SymLab Team',
    description: 'Exercices corrigés et problèmes de synthèse pour la Physique et la Chimie.',
    chapters: [
        // ==========================================
        // PHYSIQUE
        // ==========================================
        {
            id: 'entr-p1s-01',
            part: 'Physique : Énergie',
            title: 'Exo 1 : Théorème de l\'Énergie Cinétique',
            story: "Un skieur dévale une piste. Calculer sa vitesse sans frottements, puis avec frottements.",
            content: `
### Énoncé
Un skieur de masse $m = 80\\ kg$ part sans vitesse initiale du sommet A d'une piste inclinée d'un angle $\\alpha = 30^\\circ$ par rapport à l'horizontale. La longueur de la piste est $AB = 100\\ m$.

On donne $g = 10\\ N/kg$.

#### Partie A : Sans frottements
Calculer la vitesse $v_B$ au point B en utilisant le Théorème de l'Energie Cinétique (TEC).

#### Partie B : Avec frottements
En réalité, le skieur arrive en B avec une vitesse $v'_B = 25\\ m/s$. Calculer l'intensité $f$ de la force de frottement supposée constante et opposée au mouvement.
            `,
            summary: ["TEC : $\\Delta E_c = \\sum W(\\vec{F})$.", "Travail du poids : $W(\\vec{P}) = mgh$."],
            exercises: [
                {
                    id: 'qz-p1s-01',
                    question: "Quelle est l'expression de la hauteur $h$ entre A et B ?",
                    options: ["$AB \\cos \\alpha$", "$AB \\sin \\alpha$", "$AB \\tan \\alpha$", "$AB$"],
                    correctAnswer: 1,
                    explanation: "Dans le triangle rectangle, $h$ est le côté opposé à l'angle $\\alpha$."
                },
                {
                    id: 'qz-p1s-02',
                    question: "Calcul numérique de $v_B$ sans frottement ($g=10, h=50m$)",
                    options: ["$10 m/s$", "$31.6 m/s$", "$100 m/s$", "$22.4 m/s$"],
                    correctAnswer: 1,
                    explanation: "$v = \\sqrt{2gh} = \\sqrt{2 \\times 10 \\times 50} = \\sqrt{1000} \\approx 31.6\\ m/s$."
                }
            ]
        },
        {
            id: 'entr-p1s-02',
            part: 'Physique : Électrostatique',
            title: 'Exo 2 : Particule dans un champ E',
            story: "L'accélérateur de particules linéaire. Contrôler la trajectoire des électrons.",
            content: `
### Énoncé
Un électron (masse $m$, charge $q = -e$) pénètre avec une vitesse négligeable par le trou d'une plaque A portée au potentiel $V_A$. Il est accéléré vers une plaque B portée au potentiel $V_B$.

Données : $V_A - V_B = -500\\ V$. Distance $d = 10\\ cm$.

#### Questions
1. Déterminer le sens et la norme du champ électrostatique $\\vec{E}$ supposé uniforme entre les plaques.
2. Calculer l'énergie cinétique de l'électron en B (en eV et en Joules).
            `,
            summary: ["$E = \\frac{U_{AB}}{d}$. Champ dirigé vers les potentiels décroissants.", "$1 eV = 1.6 \\times 10^{-19} J$."],
            exercises: [
                {
                    id: 'qz-p1s-03',
                    question: "Pour accélérer un électron, il faut une tension $U_{AB} = V_A - V_B$...",
                    options: ["Positive", "Négative", "Nulle", "Alternative"],
                    correctAnswer: 1,
                    explanation: "L'électron (négatif) est attiré par le potentiel le plus élevé (B). Donc $V_B > V_A$, soit $U_{AB} < 0$."
                }
            ]
        },
        {
            id: 'entr-p1s-03',
            part: 'Physique : Optique',
            title: 'Exo 3 : Lentille Convergente',
            story: "Former une image nette sur un écran. Le principe du vidéoprojecteur.",
            content: `
### Énoncé
On dispose d'une lentille convergente de vergence $C = 5\\ \\delta$ (dioptries).

On place un objet AB de 2 cm de hauteur à 30 cm devant la lentille ($\\overline{OA} = -30\\ cm$).

#### Questions
1. Calculer la distance focale $f'$.
2. Déterminer par le calcul la position de l'image $\\overline{OA'}$.
3. Calculer le grandissement $\\gamma$ et la taille de l'image.
            `,
            summary: ["Formule de conjugaison : $\\frac{1}{\\overline{OA'}} - \\frac{1}{\\overline{OA}} = C = \\frac{1}{f'}$."],
            exercises: [
                {
                    id: 'qz-p1s-04',
                    question: "Quelle est la distance focale d'une lentille de 5 dioptries ?",
                    options: ["5 cm", "10 cm", "20 cm", "50 cm"],
                    correctAnswer: 2,
                    explanation: "$f' = 1/C = 1/5 = 0.2\\ m = 20\\ cm$."
                }
            ]
        },

        // ==========================================
        // CHIMIE
        // ==========================================
        {
            id: 'entr-c1s-01',
            part: 'Chimie : Organique',
            title: 'Exo 4 : Analyse d\'un Hydrocarbure',
            story: "Retrouver la formule brute à partir de la combustion.",
            content: `
### Énoncé
La combustion complète de $V = 10\\ mL$ d'un hydrocarbure gazeux $A$ nécessite $V_{O2} = 50\\ mL$ de dioxygène. On obtient $V_{CO2} = 30\\ mL$ de dioxyde de carbone.

Tous les volumes sont mesurés dans les mêmes conditions.

#### Questions
1. Écrire l'équation générale de combustion de $C_x H_y$.
2. Déterminer $x$ et $y$ en utilisant la loi d'Avogadro-Ampère (les volumes sont proportionnels aux coefficients molaires).
3. Donner le nom de A.
            `,
            summary: ["$C_x H_y + (x + y/4) O_2 \\to x CO_2 + y/2 H_2O$."],
            exercises: [
                {
                    id: 'qz-c1s-01',
                    question: "D'après les volumes, que vaut x ?",
                    options: ["1", "3", "5", "10"],
                    correctAnswer: 1,
                    explanation: "$V_{CO2} / V_A = 30/10 = 3$. Or $n_{CO2}/n_A = x$. Donc $x=3$."
                },
                {
                    id: 'qz-c1s-02',
                    question: "Quel est l'hydrocarbure $C_3 H_y$ qui consomme 5 volumes d'O2 ?",
                    options: ["Propane $C_3H_8$", "Propène $C_3H_6$", "Propyne $C_3H_4$", "Butane"],
                    correctAnswer: 0,
                    explanation: "Coefficient $O_2 = x + y/4 = 5$. Avec $x=3$, $3 + y/4 = 5 \\implies y/4 = 2 \\implies y=8$. C'est le Propane."
                }
            ]
        },
        {
            id: 'entr-c1s-02',
            part: 'Chimie : Redox',
            title: 'Exo 5 : Manganimétrie',
            story: "Doser le fer dans une solution pour vérifier sa pureté.",
            content: `
### Énoncé
On dose $V_1 = 20\\ mL$ d'une solution de sulfate de fer(II) ($Fe^{2+}$) par une solution de permanganate de potassium ($K^+, MnO_4^-$) de concentration $C_2 = 0.02\\ mol/L$ en milieu acide.

L'équivalence est obtenue pour un volume versé $V_{2E} = 15\\ mL$.

Couples : $MnO_4^- / Mn^{2+}$ et $Fe^{3+} / Fe^{2+}$.

#### Questions
1. Écrire les demi-équations redox et l'équation bilan.
2. Déterminer la relation à l'équivalence.
3. Calculer la concentration $C_1$ des ions ferreux.
            `,
            summary: ["$MnO_4^- + 5Fe^{2+} + 8H^+ \\to Mn^{2+} + 5Fe^{3+} + 4H_2O$."],
            exercises: [
                {
                    id: 'qz-c1s-03',
                    question: "Quelle est la relation à l'équivalence ?",
                    options: ["$C_1 V_1 = C_2 V_{2E}$", "$C_1 V_1 = 5 C_2 V_{2E}$", "$5 C_1 V_1 = C_2 V_{2E}$", "$C_1 / V_1 = C_2 / V_2$"],
                    correctAnswer: 1,
                    explanation: "Il faut 5 $Fe^{2+}$ pour 1 $MnO_4^-$. Donc $n(Fe^{2+}) = 5 n(MnO_4^-)$."
                }
            ]
        }
    ]
};
