export const phys1sData = {
    id: 'phys-1s',
    title: 'Physique 1ère S',
    author: 'SymLab Team (Conforme Programme Sénégal)',
    description: 'Programme complet de Physique 1ère S : Énergie, Champs, Électronique et Optique.',
    chapters: [
        // ==========================================
        // PARTIE 1 : ÉNERGIE - CHAMPS
        // ==========================================
        {
            id: 'p1s-01',
            part: 'Énergie - Champs',
            title: 'P1. Travail et puissance',
            simulation: { id: 'p1s-travail', title: 'Moteur et Force : Le Défi de Puissance' },
            image: '/images/courses/p1s_travail_puissance.png',
            story: "Pour déplacer un objet, il faut de l'énergie. Mais l'efficacité dépend de la vitesse : c'est la puissance.",
            content: `
### 1. Travail d'une force constante
Le travail $W$ d'une force $\\vec{F}$ constante sur un déplacement rectiligne $\\vec{AB}$ est le produit scalaire :
$$ W_{AB}(\\vec{F}) = \\vec{F} \\cdot \\vec{AB} = F \\times AB \\times \\cos(\\alpha) $$

- Si $0 \\le \\alpha < 90^\\circ$ : Travail moteur ($W > 0$).
- Si $\\alpha = 90^\\circ$ : Travail nul ($W = 0$).
- Si $90^\\circ < \\alpha \\le 180^\\circ$ : Travail résistant ($W < 0$).

### 2. Puissance
La puissance moyenne est le travail fourni par unité de temps :
$$ P_m = \\frac{W}{\\Delta t} $$

Puissance instantanée : $P(t) = \\vec{F} \\cdot \\vec{v}$.
            `,
            summary: [
                "Unité du travail : Joule (J).",
                "Unité de la puissance : Watt (W).",
                "Le poids est une force conservative (son travail ne dépend pas du chemin)."
            ],
            exercises: [
                {
                    id: 'exo-p1s-01',
                    question: "Quel est le travail d'une force perpendiculaire au déplacement ?",
                    options: ["Positif", "Négatif", "Nul", "Infini"],
                    correctAnswer: 2,
                    explanation: "Si $\\alpha = 90^\\circ$, alors $\\cos(90^\\circ) = 0$, donc $W = 0$."
                }
            ]
        },
        {
            id: 'p1s-02',
            part: 'Énergie - Champs',
            title: 'P2. Énergie cinétique',
            simulation: { id: 'p1s-cinetique', title: 'Vitesse Extrême : L\'Énergie Cinétique' },
            image: '/images/courses/p1s_energie_cinetique.png',
            story: "Un objet en mouvement possède une énergie liée à sa vitesse. C'est l'énergie du mouvement.",
            content: `
### 1. Définition
Pour un solide de masse $m$ en translation à la vitesse $v$ :
$$ E_c = \\frac{1}{2} m v^2 $$

Pour un solide en rotation autour d'un axe fixe ($\ moment\ d'inertie\ J_{\\Delta}$, vitesse angulaire $\\omega$) :
$$ E_c = \\frac{1}{2} J_{\\Delta} \\omega^2 $$

### 2. Théorème de l'Énergie Cinétique (TEC)
Dans un référentiel galiléen, la variation de l'énergie cinétique entre deux instants est égale à la somme des travaux des forces extérieures :
$$ \\Delta E_c = E_{cB} - E_{cA} = \\sum W_{AB}(\\vec{F}_{ext}) $$
            `,
            summary: [
                "Si la vitesse double, l'énergie cinétique est multipliée par 4.",
                "Le TEC est fondamental pour relier vitesse, forces et distances."
            ],
            exercises: [
                {
                    id: 'exo-p1s-02',
                    question: "Une voiture de 1000 kg roule à 20 m/s. Son énergie cinétique est...",
                    options: ["20 kJ", "200 kJ", "400 kJ", "2000 J"],
                    correctAnswer: 1,
                    explanation: "$E_c = 0.5 \\times 1000 \\times 20^2 = 500 \\times 400 = 200\\,000$ J = 200 kJ."
                }
            ]
        },
        {
            id: 'p1s-03',
            part: 'Énergie - Champs',
            title: 'P3. Énergie potentielle. Énergie mécanique',
            simulation: { id: 'p1s-mecanique', title: 'Montagnes Russes : Conservation d\'Énergie' },
            image: '/images/courses/p1s_energie_potentielle.png',
            story: "L'énergie peut être stockée (potentielle) et transformée en mouvement. La conservation de l'énergie est un principe clé.",
            content: `
### 1. Énergie Potentielle de Pesanteur ($E_{pp}$)
$$ E_{pp} = m g z $$

Avec $z$ l'altitude par rapport à un niveau de référence ($E_{pp}=0$).

### 2. Énergie Mécanique ($E_m$)
C'est la somme de l'énergie cinétique et de l'énergie potentielle :
$$ E_m = E_c + E_p $$

### 3. Conservation
Si le solide n'est soumis qu'à des forces conservatives (comme le poids) ou sans travail (réaction normale), alors $E_m$ se conserve.
$$ \\Delta E_m = 0 \\iff E_{mA} = E_{mB} $$
            `,
            summary: [
                "Chute libre : $E_p$ se transforme en $E_c$.",
                "Frottements : $E_m$ diminue (dissipation en chaleur)."
            ],
            exercises: [
                {
                    id: 'exo-p1s-03',
                    question: "Si on lâche une pierre, au cours de la chute...",
                    options: ["Ep augmente", "Ec diminue", "Em reste constante (sans frottement)", "Em augmente"],
                    correctAnswer: 2,
                    explanation: "L'énergie potentielle diminue et se convertit intégralement en énergie cinétique, donc la somme $E_m$ reste constante."
                }
            ]
        },
        {
            id: 'p1s-04',
            part: 'Énergie - Champs',
            title: 'P4. Calorimétrie',
            story: "La chaleur est une forme d'énergie dégradée. Comment mesurer les échanges thermiques ?",
            content: `
### 1. Quantité de Chaleur ($Q$)
Pour faire varier la température d'un corps de masse $m$ de $\\Delta T$ :
$$ Q = m c \\Delta T $$

- $c$ : Capacité thermique massique (J/kg/°C).
- $Q > 0$ si le corps reçoit de la chaleur.

### 2. Changement d'état
Pour changer l'état (fusion, vaporisation) d'une masse $m$ à température constante :
$$ Q = m L $$

$L$ : Chaleur latente de changement d'état.
            `,
            summary: [
                "Principe des mélanges : $\\sum Q_{echangés} = 0$ (dans une enceinte adiabatique).",
                "L'eau a une forte capacité thermique ($c = 4185$ J/kg/K)."
            ],
            exercises: [
                {
                    id: 'exo-p1s-04',
                    question: "Quelle énergie faut-il pour fondre 1kg de glace à 0°C ? ($L_f = 330$ kJ/kg)",
                    options: ["330 J", "330 kJ", "4185 J", "Zero"],
                    correctAnswer: 1,
                    explanation: "$Q = m L_f = 1 \\times 330$ kJ = 330 kJ."
                }
            ]
        },
        {
            id: 'p1s-05',
            part: 'Énergie - Champs',
            title: 'P5. Force et champ électrostatiques',
            simulation: { id: 'p1s-electro', title: 'Le Champ de Force Invisible' },
            image: '/images/courses/p1s_champ_electrique.png',
            story: "L'électricité statique n'est pas de la magie. C'est l'action à distance entre charges électriques.",
            content: `
### 1. Loi de Coulomb
La force d'interaction entre deux charges ponctuelles $q_A$ et $q_B$ séparées de $d$ :
$$ F = k \\frac{|q_A q_B|}{d^2} $$

Avec $k = 9 \\times 10^9$ SI.

### 2. Champ Électrostatique $\\vec{E}$
Une charge $Q$ crée autour d'elle un champ $\\vec{E}$. Une charge test $q$ placée dans ce champ subit une force :
$$ \\vec{F} = q \\vec{E} $$

Le vecteur $\\vec{E}$ s'éloigne des charges positives et converge vers les charges négatives.
            `,
            summary: [
                "Charges de même signe se repoussent, signes opposés s'attirent.",
                "Unité de E : V/m ou N/C."
            ],
            exercises: [
                {
                    id: 'exo-p1s-05',
                    question: "Si $q$ est négative, quel est le sens de $\\vec{F}$ par rapport à $\\vec{E}$ ?",
                    options: ["Même sens", "Sens opposé", "Perpendiculaire", "Nul"],
                    correctAnswer: 1,
                    explanation: "Comme $\\vec{F} = q\\vec{E}$, si $q < 0$, le vecteur force est colinéaire mais de sens opposé au champ."
                }
            ]
        },
        {
            id: 'p1s-06',
            part: 'Énergie - Champs',
            title: 'P6. Travail et énergie électrostatique',
            simulation: { id: 'p1s-electro', title: '⚡ Champ Électrique' },
            image: '/images/courses/p1s_energie_electrostatique.png',
            story: "Le mouvement des charges dans un champ électrique est à la base des accélérateurs de particules.",
            content: `
### 1. Travail de la force électrique
Dans un champ uniforme $\\vec{E}$, le travail pour aller de A à B ne dépend que de la différence de potentiel $U_{AB}$ :
$$ W_{AB}(\\vec{F}) = q \\vec{E} \\cdot \\vec{AB} = q (V_A - V_B) = q U_{AB} $$

### 2. Énergie Potentielle Électrostatique
$$ E_{pe} = q V $$

L'énergie mécanique d'une particule chargée se conserve dans un champ électrostatique (force conservative).
            `,
            summary: [
                "$U_{AB} = V_A - V_B$ (Tension électrique).",
                "L'électron-volt (eV) est une unité d'énergie adaptée aux particules."
            ],
            exercises: [
                {
                    id: 'exo-p1s-06',
                    question: "Un électron accéléré par une tension de 100V gagne une énergie cinétique de...",
                    options: ["100 J", "100 eV", "1 eV", "Zero"],
                    correctAnswer: 1,
                    explanation: "$E_c = |q U| = 1e \\times 100V = 100$ eV."
                }
            ]
        },
        {
            id: 'p1s-07',
            part: 'Énergie - Champs',
            title: 'P7. Énergie dans un circuit électrique',
            simulation: { id: 'p1s-electronique', title: 'Circuit Lab : Maître de l\'Électronique' },
            image: '/images/courses/p1s_dipole_rc.png',
            story: "Générateurs et récepteurs échangent de l'énergie. Bilan de puissance.",
            content: `
### 1. Effet Joule
Dissipation d'énergie thermique dans un résistor :
$$ W_J = R I^2 \\Delta t $$

### 2. Générateur et Récepteur
- **Générateur :** Fournit $W_T = U I \\Delta t$. Il a une f.é.m $E$ et résistance interne $r$. $U_{PN} = E - rI$.
- **Récepteur (Moteur/Électrolyseur) :** Reçoit $W_R$. Il a une f.c.é.m $E'$ et résistance $r'$. $U_{AB} = E' + r'I$.
            `,
            summary: [
                "Bilan de puissance : $P_{fournie} = P_{utile} + P_{joule}$.",
                "Rendement $\\eta = P_{utile} / P_{totale}$."
            ],
            exercises: [
                {
                    id: 'exo-p1s-07',
                    question: "Quelle est la puissance dissipée par effet Joule pour R=10$\\Omega$ et I=2A ?",
                    options: ["20 W", "40 W", "100 W", "200 W"],
                    correctAnswer: 1,
                    explanation: "$P = R I^2 = 10 \\times 2^2 = 10 \\times 4 = 40$ W."
                }
            ]
        },
        {
            id: 'p1s-08',
            part: 'Énergie - Champs',
            title: 'P8. Condensateurs',
            simulation: { id: 'p1s-electronique', title: '⚡ Labo Électronique' },
            image: '/images/courses/p1s_condensateur_energie.png',
            story: "Stocker des charges pour les libérer brutalement : c'est le rôle du condensateur (flash d'appareil photo).",
            content: `
### 1. Capacité
Un condensateur armatures A et B porte les charges $+q$ et $-q$.
$$ q = C \\times U_{AB} $$

$C$ est la capacité en Farad (F).

### 2. Énergie Emmagasinée
L'énergie stockée dans le champ électrique entre les armatures est :
$$ E = \\frac{1}{2} C U^2 = \\frac{1}{2} \\frac{q^2}{C} $$
            `,
            summary: [
                "Association parallèle : $C_{eq} = C_1 + C_2$ (s'ajoute).",
                "Association série : $1/C_{eq} = 1/C_1 + 1/C_2$ (diminue)."
            ],
            exercises: [
                {
                    id: 'exo-p1s-08',
                    question: "Si on double la tension U aux bornes d'un condensateur, l'énergie stockée est...",
                    options: ["Doublée", "Multipliée par 4", "Divisée par 2", "Inchangée"],
                    correctAnswer: 1,
                    explanation: "$E$ est proportionnelle à $U^2$. Donc $2^2 = 4$."
                }
            ]
        },

        // ==========================================
        // PARTIE 2 : ÉLECTRONIQUE
        // ==========================================
        {
            id: 'p1s-09',
            part: 'Électronique',
            title: 'P9. Amplificateur Opérationnel',
            simulation: { id: 'p1s-electronique', title: '⚡ Labo Électronique' },
            image: '/images/courses/p1s_amplificateur_op.png',
            story: "L'A.O. est le couteau suisse de l'électronique analogique. Il peut additionner, intégrer ou dériver des signaux.",
            content: `
### 1. L'A.O. Idéal (Régime Linéaire)
En régime linéaire (rétroaction négative), la tension d'entrée différentielle est nulle : $\\epsilon = V_+ - V_- = 0$.
Courants d'entrée nuls : $i_+ = i_- = 0$.

### 2. Montages de base
- **Inverseur :** $U_s = - \\frac{R_2}{R_1} U_e$.
- **Suiveur :** $U_s = U_e$ (Adaptateur d'impédance).
- **Dérivateur :** Sortie proportionnelle à la dérivée de l'entrée.
- **Intégrateur :** Sortie proportionnelle à l'intégrale de l'entrée.
            `,
            summary: [
                "Dérivateur transforme un triangle en carré.",
                "Intégrateur transforme un carré en triangle."
            ],
            exercises: [
                {
                    id: 'exo-p1s-09',
                    question: "Dans un montage suiveur, quel est le gain en tension ?",
                    options: ["Infini", "Zéro", "Un", "-1"],
                    correctAnswer: 2,
                    explanation: "$U_s = U_e$, donc $G = U_s/U_e = 1$."
                }
            ]
        },

        // ==========================================
        // PARTIE 3 : VIBRATIONS & PROPAGATION
        // ==========================================
        {
            id: 'p1s-10',
            part: 'Phénomènes Vibratoires',
            title: 'P10. Propagation et Ondes',
            simulation: { id: 'p1s-ondes', title: "Océan d'Ondes : Propagation et Interférences" },
            image: '/images/courses/p1s_ondes_mecaniques.png',
            story: "Le son, la lumière, les vagues, les séismes... Tout est onde.",
            content: `
### 1. Onde Progressive
Propagation d'une perturbation sans transport de matière, mais avec transport d'énergie.
**Célérité :** Vitesse de propagation $v = d / \\Delta t$.

### 2. Ondes Périodiques
Périodicité temporelle $T$ et spatiale $\\lambda$ (longueur d'onde).
$$ \\lambda = v T = \\frac{v}{N} $$

### 3. Interférences Mécaniques
Superposition de deux ondes synchrones. Création de franges d'amplitude maximale (constructives) et nulle (destructives).
            `,
            summary: [
                "Relation fondamentale : $\\lambda = v/N$.",
                "Diffraction : L'onde contourne un obstacle de taille proche de $\\lambda$."
            ],
            exercises: [
                {
                    id: 'exo-p1s-10',
                    question: "Si la fréquence est 50Hz et la célérité 10m/s, quelle est la longueur d'onde ?",
                    options: ["0.2 m", "5 m", "500 m", "2 m"],
                    correctAnswer: 0,
                    explanation: "$\\lambda = v/N = 10 / 50 = 0.2$ m."
                }
            ]
        },

        // ==========================================
        // PARTIE 4 : OPTIQUE
        // ==========================================
        {
            id: 'p1s-11',
            part: 'Optique',
            title: 'P11. Lentilles minces',
            simulation: { id: 'p1s-optique', title: "L'Œil Magique : Optique Géométrique" },
            image: '/images/courses/p1s_lentilles_optique.png',
            story: "Les lunettes, les microscopes, les télescopes reposent tous sur les lentilles.",
            content: `
### 1. Types de Lentilles
- **Convergentes :** Bords minces. Foyer image réel.
- **Divergentes :** Bords épais. Foyer image virtuel.

### 2. Formule de Conjugaison (Descartes)
Pour un objet A sur l'axe optique et son image A' :
$$ \\frac{1}{\\overline{OA'}} - \\frac{1}{\\overline{OA}} = \\frac{1}{\\overline{OF'}} = C $$

- $\\overline{OA}$ : Position objet (souvent négatif).
- $\\overline{OA'}$ : Position image.
- $C$ : Vergence en dioptries ($\\delta$).

### 3. Grandissement $\\gamma$
$$ \\gamma = \\frac{\\overline{A'B'}}{\\overline{AB}} = \\frac{\\overline{OA'}}{\\overline{OA}} $$
            `,
            summary: [
                "Image réelle : inversée, peut être projettée sur un écran.",
                "Image virtuelle : droite, vue à travers la lentille (loupe)."
            ],
            exercises: [
                {
                    id: 'exo-p1s-11',
                    question: "Une lentille a une vergence de +5 $\\delta$. Sa distance focale est...",
                    options: ["5 cm", "20 cm", "0.5 m", "-20 cm"],
                    correctAnswer: 1,
                    explanation: "$f' = 1/C = 1/5 = 0.2$ m $= 20$ cm."
                }
            ]
        }
    ]
};
