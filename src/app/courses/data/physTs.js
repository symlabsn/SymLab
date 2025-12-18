export const physTsData = {
    id: 'phys-ts',
    title: 'Physique Terminale S',
    chapters: [
        // ==========================================
        // PARTIE 1 : CINEMATIQUE - DYNAMIQUE
        // ==========================================
        {
            id: 'meca-ts-01',
            part: 'Partie 1 : Cinématique - Dynamique',
            title: 'P1. Cinématique du Point',
            simulation: { id: 'pts-cinematique', title: 'Cinématique du Point' },
            image: '/images/simulations/physique-ts/cinematique.png',
            story: "Avant de savoir pourquoi les choses bougent (Dynamique), il faut savoir décrire comment elles bougent (Cinématique). Position, vitesse, accélération... tout est lié par le temps.",
            content: `
### 1. Vecteurs Position, Vitesse et Accélération
**Position :** $\\vec{OM} = x\\vec{i} + y\\vec{j} + z\\vec{k}$.
**Vitesse :** Dérivée de la position par rapport au temps. $\\vec{v} = \\frac{d\\vec{OM}}{dt}$.
**Accélération :** Dérivée de la vitesse. $\\vec{a} = \\frac{d\\vec{v}}{dt}$.

### 2. Mouvements Particuliers
- **M.R.U. (Rectiligne Uniforme)** : $\\vec{a} = \\vec{0}$, $\\vec{v} = \\text{cste}$. Equation : $x(t) = vt + x_0$.
- **M.R.U.V. (Rectiligne Uniformément Varié)** : $\\vec{a} = \\text{cste}$. Equation : $x(t) = \\frac{1}{2}at^2 + v_0t + x_0$.
- **Mouvement Circulaire Uniforme** : Accélération normale centripète $a_n = \\frac{v^2}{R}$.
            `,
            summary: [
                "a est la dérivée de v, v est la dérivée de x.",
                "Pour retrouver la position depuis l'accélération, on intègre deux fois.",
                "Dans un mouvement uniforme, la vitesse est constante."
            ],
            exercises: [
                {
                    id: 'ex-cine-1',
                    question: "Si l'accélération est nulle, quel est le mouvement ?",
                    options: ["Immobile", "Rectiligne Uniforme", "Accéléré", "Circulaire"],
                    correctAnswer: 1,
                    explanation: "Si $\\vec{a} = \\vec{0}$, alors $\\vec{v}$ est constant (direction et norme), donc le mouvement est rectiligne uniforme (ou repos)."
                }
            ]
        },
        {
            id: 'meca-ts-02',
            part: 'Partie 1 : Cinématique - Dynamique',
            title: 'P2. Bases de la Dynamique',
            simulation: { id: 'pts-dynamique', title: 'Bases de la Dynamique' },
            image: '/images/simulations/physique-ts/dynamique.png',
            story: "Newton a changé notre vision du monde avec trois lois simples. Elles expliquent pourquoi la pomme tombe et pourquoi la Lune ne tombe pas (ou plutôt, tombe en permanence).",
            content: `
### 1. Les Lois de Newton
1. **Principe d'Inertie :** Si $\\sum \\vec{F}_{ext} = \\vec{0}$, le centre d'inertie est au repos ou en MRU.
2. **Principe Fondamental de la Dynamique (PFD) :** Dans un référentiel galiléen, $\\sum \\vec{F}_{ext} = m\\vec{a}$.
3. **Principe des Actions Réciproques :** $\\vec{F}_{A/B} = -\\vec{F}_{B/A}$.

### 2. Théorème du Centre d'Inertie (TCI)
Le mouvement du centre d'inertie G d'un système est déterminé par la somme des forces extérieures appliquées.
            `,
            summary: [
                "Toujours définir le système et le référentiel avant d'appliquer le PFD.",
                "La masse traduit l'inertie du corps (résistance au changement de mouvement).",
                "Le poids $\\vec{P} = m\\vec{g}$ est une force extérieure."
            ],
            exercises: [
                {
                    id: 'ex-dyn-1',
                    question: "Quelle est l'unité de la force dans le système international ?",
                    options: ["Joule", "Watt", "Newton", "Pascal"],
                    correctAnswer: 2,
                    explanation: "C'est le Newton (N). 1 N = 1 kg.m.s⁻²."
                }
            ]
        },
        {
            id: 'meca-ts-03',
            part: 'Partie 1 : Cinématique - Dynamique',
            title: 'P3. Applications des bases de la dynamique',
            simulation: { id: 'pts-applications', title: 'Mouvement Projectile' },
            image: '/images/simulations/physique-ts/projectile.png',
            story: "Appliquons Newton ! Que ce soit pour tirer un boulet de canon (mouvement projectile) ou faire glisser une brique, tout est prévisible.",
            content: `
### 1. Mouvement dans un champ de pesanteur uniforme
Projectile lancé avec une vitesse $\\vec{v}_0$.

- Accélération : $\\vec{a} = \\vec{g}$ (verticale vers le bas).
- Trajectoire : Parabole (sauf si tir vertical).
- Portée : distance horizontale maximale. Flèche : hauteur maximale.

### 2. Mouvement sur un plan incliné
Bilan des forces : Poids $\\vec{P}$, Réaction $\\vec{R}$ (normale + frottements éventuels). Projection des forces sur les axes pour trouver l'accélération.

### 3. Théorème de l'Énergie Cinétique (TEC)
$\\Delta E_c = \\sum W(\\vec{F})$. Variation d'énergie cinétique = Somme des travaux des forces.
            `,
            summary: [
                "La masse n'influe pas sur la trajectoire de chute libre (dans le vide).",
                "Au sommet de la trajectoire, la vitesse verticale est nulle.",
                "Le travail d'une force perpendiculaire au mouvement est nul."
            ],
            exercises: [
                {
                    id: 'ex-app-1',
                    question: "Dans un tir parabolique, comment est l'accélération au sommet ?",
                    options: ["Nulle", "Egale à g", "Horizontale", "Maximale"],
                    correctAnswer: 1,
                    explanation: "L'accélération est toujours égale à $\\vec{g}$ tout au long du mouvement (chute libre)."
                }
            ]
        },
        {
            id: 'meca-ts-04',
            part: 'Partie 1 : Cinématique - Dynamique',
            title: 'P4. Gravitation Universelle',
            simulation: { id: 'pts-gravitation', title: 'Gravitation Universelle' },
            image: '/images/simulations/physique-ts/gravitation.png',
            story: "Pourquoi les planètes tournent-elles rond ? La gravitation est la colle de l'univers. C'est la même force qui vous plaque au sol et qui tient la Lune en laisse.",
            content: `
### 1. Loi de Newton
La force d'attraction entre deux masses $m_A$ et $m_B$ distantes de $d$ :
$\\vec{F}_{A/B} = -G \\frac{m_A m_B}{d^2} \\vec{u}_{AB}$

### 2. Mouvement des Satellites et Planètes
Dans le cas d'une orbite circulaire, le mouvement est uniforme.
Vitesse orbitale : $v = \\sqrt{\\frac{GM}{r}}$.

### 3. Lois de Kepler
- 1. Trajectoires elliptiques (Planètes autour du Soleil).
- 2. Loi des Aires (Vitesse aréolaire constante).
- 3. $\\frac{T^2}{r^3} = \\text{constante}$.
            `,
            summary: [
                "La force gravitationnelle diminue avec le carré de la distance.",
                "Un satellite géostationnaire paraît immobile depuis la Terre (Période = 24h).",
                "L'état d'impesanteur est en fait une chute libre perpétuelle."
            ],
            exercises: [
                {
                    id: 'ex-grav-1',
                    question: "Si la distance entre deux planètes double, la force d'attraction est divisée par...",
                    options: ["2", "4", "8", "Resté constante"],
                    correctAnswer: 1,
                    explanation: "La force est inversement proportionnelle au carré de la distance ($1/d^2$). Si $d$ double, $d^2$ quadruple."
                }
            ]
        },

        // ==========================================
        // PARTIE 2 : ÉLECTROMAGNÉTISME
        // ==========================================
        {
            id: 'em-ts-05',
            part: 'Partie 2 : Électromagnétisme',
            title: 'P5. Champs Magnétiques',
            simulation: { id: 'pts-champ-magnetique', title: 'Champs Magnétiques' },
            image: '/images/simulations/physique-ts/champ-magnetique.png',
            story: "L'aimant, la boussole, le moteur électrique. Tout cela repose sur un phénomène invisible : le champ magnétique. Il est créé par des charges en mouvement.",
            content: `
### 1. Le Champ Magnétique $\\vec{B}$
Défini en tout point. Visualisé par des lignes de champ (sortent du Nord, entrent au Sud). Unité : Tesla (T).

### 2. Champs créés par des courants
- **Fil rectiligne infini :** Lignes de champ circulaires.
- **Solénoïde (Bobine longue) :** Champ uniforme à l'intérieur. $B = \\mu_0 n I$ (avec $n$ nombre de spires par mètre).

### 3. Superposition
Le champ total est la somme vectorielle des champs créés par chaque source.
            `,
            summary: [
                "Une charge immobile ne crée pas de champ magnétique.",
                "Règle de la main droite pour trouver le sens du champ.",
                "La Terre possède son propre champ magnétique protecteur."
            ],
            exercises: [
                {
                    id: 'ex-champ-1',
                    question: "Où le champ magnétique d'un solénoïde est-il uniforme ?",
                    options: ["À l'extérieur", "Aux extrémités", "À l'intérieur", "Nulle part"],
                    correctAnswer: 2,
                    explanation: "À l'intérieur d'un solénoïde long, les lignes de champ sont droites et parallèles."
                }
            ]
        },
        {
            id: 'em-ts-06',
            part: 'Partie 2 : Électromagnétisme',
            title: 'P6. Particule chargée dans un champ B',
            simulation: { id: 'pts-lorentz', title: 'Force de Lorentz' },
            image: '/images/simulations/physique-ts/lorentz.png',
            story: "Quand un électron rencontre un champ magnétique, il ne peut pas aller tout droit. Il est dévié par une force mystérieuse qui ne travaille jamais : la force de Lorentz.",
            content: `
### 1. Force de Lorentz
Force subie par une particule de charge $q$ et vitesse $\\vec{v}$ dans un champ $\\vec{B}$ :
$\\vec{F} = q \\vec{v} \\wedge \\vec{B}$ (Produit vectoriel)

### 2. Caractéristiques
- Direction : Perpendiculaire au plan $(\\vec{v}, \\vec{B})$.
- Sens : Règle des trois doigts de la main droite (Attention au signe de $q$ !).
- Intensité : $F = |q|vB \\sin(\\alpha)$.

### 3. Mouvement
Dans un champ uniforme, le mouvement est **circulaire uniforme**. Le rayon $R = \\frac{mv}{|q|B}$.
            `,
            summary: [
                "La force magnétique ne modifie pas la vitesse (énergie cinétique constante).",
                "Application : Cyclotron, Spectrographe de masse.",
                "F ne travaille pas car $\\vec{F} \\perp \\vec{v}$."
            ],
            exercises: [
                {
                    id: 'ex-lor-1',
                    question: "Quelle est la trajectoire d'un électron entrant perpendiculairement dans un champ B uniforme ?",
                    options: ["Une droite", "Une parabole", "Un cercle", "Une ellipse"],
                    correctAnswer: 2,
                    explanation: "La force étant toujours perpendiculaire à la vitesse et constante en norme, la trajectoire est un cercle."
                }
            ]
        },
        {
            id: 'em-ts-07',
            part: 'Partie 2 : Électromagnétisme',
            title: 'P7. Loi de Laplace',
            simulation: { id: 'pts-laplace', title: 'Loi de Laplace' },
            image: '/images/simulations/physique-ts/laplace.png',
            story: "Si une particule chargée est déviée, alors un courant (qui est un flux de particules) l'est aussi. C'est le principe du haut-parleur et du moteur électrique.",
            content: `
### 1. Force de Laplace
Force subie par un conducteur parcouru par un courant $I$ placé dans un champ $\\vec{B}$.
Pour une portion de fil rectiligne $\\vec{l}$ : $\\vec{F} = I \\vec{l} \\wedge \\vec{B}$.

### 2. Applications
- **Haut-parleur :** Conversion signal électrique $\\to$ mouvement mécanique.
- **Moteur à courant continu :** Rotation d'une spire soumise à un couple de forces de Laplace.
- **Rails de Laplace :** Tige mobile sur deux rails dans un champ B.
            `,
            summary: [
                "L'intensité dépend de l'angle entre le fil et le champ.",
                "Règle de la main droite s'applique aussi ($I$ remplace $v$).",
                "C'est la manifestation macroscopique de la force de Lorentz."
            ],
            exercises: [
                {
                    id: 'ex-lap-1',
                    question: "De quoi dépend le sens de la force de Laplace ?",
                    options: ["Du sens du courant uniquement", "Du sens du champ B uniquement", "Des deux (I et B)", "De la longueur du fil"],
                    correctAnswer: 2,
                    explanation: "Le sens est donné par le produit vectoriel, changeant si I ou B change de sens."
                }
            ]
        },
        {
            id: 'em-ts-08',
            part: 'Partie 2 : Électromagnétisme',
            title: 'P8. Induction Magnétique - Dipôle RL',
            simulation: { id: 'pts-induction', title: 'Induction - Dipôle RL' },
            image: '/images/simulations/physique-ts/induction-rl.png',
            story: "On peut créer de l'électricité avec un aimant ! Si le champ magnétique varie, un courant apparaît. C'est l'induction. La bobine, elle, n'aime pas le changement.",
            content: `
### 1. Loi de Lenz-Faraday
Une variation de flux magnétique $\\Phi$ crée une Force Électromotrice (f.é.m) induite :
$e = -\\frac{d\\Phi}{dt}$. Le sens du courant induit s'oppose à la cause qui lui a donné naissance.

### 2. Auto-induction
Une bobine parcourue par un courant variable se comporte comme un générateur (ou récepteur) qui s'oppose à la variation de $i$. $e = -L \\frac{di}{dt}$.

### 3. Dipôle RL
Association Résistance-Bobine. Équation différentielle lors de l'établissement du courant :
$E = Ri + L\\frac{di}{dt}$.
Constante de temps $\\tau = \\frac{L}{R}$.
            `,
            summary: [
                "La bobine lisse le courant (assure la continuité de i).",
                "L'énergie stockée dans une bobine est $E_L = \\frac{1}{2}Li^2$.",
                "À t=0, une bobine se comporte comme un interrupteur ouvert."
            ],
            exercises: [
                {
                    id: 'ex-ind-1',
                    question: "Quel composant s'oppose aux variations brutales de courant ?",
                    options: ["Le condensateur", "La résistance", "La bobine", "Le générateur"],
                    correctAnswer: 2,
                    explanation: "Par son phénomène d'auto-induction, la bobine empêche les discontinuités de courant."
                }
            ]
        },
        {
            id: 'em-ts-09',
            part: 'Partie 2 : Électromagnétisme',
            title: 'P9. Étude du dipôle RC',
            simulation: { id: 'pts-rc', title: 'Dipôle RC' },
            image: '/images/simulations/physique-ts/circuit-rc.png',
            story: "Le condensateur est un réservoir à charges. Il se remplit et se vide. Associé à une résistance, cela prend du temps... un temps très précis.",
            content: `
### 1. Le Condensateur
Deux armatures séparées par un isolant. Charge $q = C \\times u_C$. (C en Farads).

### 2. Charge d'un condensateur
Équation différentielle : $E = RC \\frac{du_C}{dt} + u_C$.
Solution : $u_C(t) = E(1 - e^{-t/\\tau})$ avec $\\tau = RC$.

### 3. Décharge
$u_C(t) = u_C(0) e^{-t/\\tau}$.

### 4. Énergie
$E_C = \\frac{1}{2} C u_C^2$.
            `,
            summary: [
                "Le condensateur assure la continuité de la tension $u_C$.",
                "$\\tau$ est le temps pour atteindre 63% de la charge finale.",
                "Utile pour les temporisations et le lissage de tension."
            ],
            exercises: [
                {
                    id: 'ex-rc-1',
                    question: "Quelle est l'unité de la constante de temps RC ?",
                    options: ["Ampère", "Volt", "Seconde", "Hertz"],
                    correctAnswer: 2,
                    explanation: "RC est homogène à un temps (en secondes)."
                }
            ]
        },

        // ==========================================
        // PARTIE 3 : OSCILLATIONS - OPTIQUE
        // ==========================================
        {
            id: 'osc-ts-10',
            part: 'Partie 3 : Oscillations - Optique',
            title: 'P10. Oscillations électriques (LC et RLC)',
            simulation: { id: 'pts-oscillations-lc', title: 'Oscillations LC/RLC' },
            image: '/images/simulations/physique-ts/oscillations-rlc.png',
            story: "Que se passe-t-il si on branche un condensateur chargé sur une bobine ? L'énergie joue au ping-pong entre les deux. C'est un oscillateur.",
            content: `
### 1. Oscillations Libres (Circuit LC)
Échange perpétuel entre énergie électrique (C) et magnétique (L). Période propre $T_0 = 2\\pi\\sqrt{LC}$.

### 2. Amortissement (Circuit RLC)
La résistance dissipe de l'énergie (Effet Joule). Les oscillations diminuent (régime pseudo-périodique) ou disparaissent (régime apériodique).

### 3. Oscillations Forcées
Un générateur impose sa fréquence. Phénomène de **Résonance** quand la fréquence excitatrice est proche de la fréquence propre. (Ex: Circuit de syntonisation radio).
            `,
            summary: [
                "Sans résistance, les oscillations seraient éternelles.",
                "À la résonance d'intensité, Z est minimale (Z=R) et I est max.",
                "Analogie avec la balançoire (résonance mécanique)."
            ],
            exercises: [
                {
                    id: 'ex-rlc-1',
                    question: "Dans un circuit RLC libre, que devient l'énergie totale ?",
                    options: ["Elle se conserve", "Elle augmente", "Elle diminue", "Elle oscille"],
                    correctAnswer: 2,
                    explanation: "Elle diminue progressivement à cause de la dissipation d'énergie par effet Joule dans la résistance."
                }
            ]
        },
        {
            id: 'osc-ts-11',
            part: 'Partie 3 : Oscillations - Optique',
            title: 'P11. Oscillations Mécaniques Libres',
            simulation: { id: 'pts-oscillations-meca', title: 'Oscillations Mécaniques' },
            image: '/images/simulations/physique-ts/oscillations-meca.png',
            story: "Le pendule et le ressort sont les grands frères mécaniques du circuit LC. Mêmes équations, mêmes mouvements de va-et-vient.",
            content: `
### 1. Pendule Élastique (Ressort)
Masse $m$ attachée à un ressort de raideur $k$.
Force de rappel $F = -kx$. Période $T_0 = 2\\pi\\sqrt{\\frac{m}{k}}$.

### 2. Pendule Pesant Simple
Masse $m$ au bout d'un fil de longueur $l$.
Pour de petites oscillations, $T_0 = 2\\pi\\sqrt{\\frac{l}{g}}$.

### 3. Énergie Mécanique
Conservation de $E_m = E_c + E_p$ en l'absence de frottements.
- Ressort : $E_p = \\frac{1}{2}kx^2$.
- Pendule : $E_p = mgh$.
            `,
            summary: [
                "La période du pendule simple ne dépend pas de la masse !",
                "Équations différentielles du type $x'' + \\omega_0^2 x = 0$.",
                "Isochronisme des petites oscillations."
            ],
            exercises: [
                {
                    id: 'ex-méca-1',
                    question: "Si on remplace la masse d'un pendule simple par une plus lourde, la période...",
                    options: ["Augmente", "Diminue", "Reste la même", "S'annule"],
                    correctAnswer: 2,
                    explanation: "La période dépend uniquement de la longueur du fil et de la gravité ($2\\pi\\sqrt{l/g}$)."
                }
            ]
        },
        {
            id: 'opt-ts-12',
            part: 'Partie 3 : Oscillations - Optique',
            title: 'P12. Interférences Lumineuses',
            simulation: { id: 'pts-interferences', title: 'Interférences Lumineuses' },
            image: '/images/simulations/physique-ts/interferences.png',
            story: "La lumière est une onde. Quand deux vagues de lumière se croisent, elles peuvent s'additionner (lumière max) ou s'annuler (noir). C'est la preuve ondulatoire.",
            content: `
### 1. Conditions d'interférence
Sources **cohérentes** (même fréquence, déphasage constant). Obtenu avec les fentes d'Young (division du front d'onde).

### 2. Franges Brillantes et Ombres
Différence de marche $\\delta$.

- Constructive (Brillant) : $\\delta = k\\lambda$.
- Destructive (Sombre) : $\\delta = (k+0.5)\\lambda$.

### 3. L'Interfrange $i$
Distance entre deux franges brillantes consécutives sur l'écran.
$i = \\frac{\\lambda D}{a}$ (D=distance écran, a=écart fentes).
            `,
            summary: [
                "La lumière blanche donne des franges irisées.",
                "L'interfrange est proportionnel à la longueur d'onde (le rouge est plus étalé que le bleu).",
                "Diffraction : étalement de la lumière par une ouverture fine."
            ],
            exercises: [
                {
                    id: 'ex-int-1',
                    question: "Si on écarte les fentes d'Young (a augmente), l'interfrange...",
                    options: ["Augmente", "Diminue", "Reste constant", "Disparaît"],
                    correctAnswer: 1,
                    explanation: "L'interfrange est inversement proportionnel à $a$ ($i = \\frac{\\lambda D}{a}$)."
                }
            ]
        },

        // ==========================================
        // PARTIE 4 : PHÉNOMÈNES CORPUSCULAIRES
        // ==========================================
        {
            id: 'corp-ts-13',
            part: 'Partie 4 : Phénomènes Corpusculaires',
            title: 'P13. Effet Photoélectrique',
            simulation: { id: 'pts-photoelectrique', title: 'Effet Photoélectrique' },
            image: '/images/simulations/physique-ts/photoelectrique.png',
            story: "Einstein a eu son Nobel pour ça ! La lumière n'est pas qu'une onde, c'est aussi un bombardement de petits grains d'énergie : les photons. Ils peuvent arracher des électrons au métal.",
            content: `
### 1. L'Effet Photoélectrique
Emission d'électrons par un métal éclairé par de la lumière UV/Visible. Ne se produit que si la fréquence $\\nu$ est supérieure à une fréquence seuil $\\nu_0$.

### 2. Interprétation Corpusculaire
L'onde ne suffit pas à expliquer le seuil. Einstein propose : Lumière = Photons d'énergie $E = h\\nu$.

### 3. Bilan énergétique
$h\\nu = W_0 + E_{c,max}$

- $h\\nu$ : Énergie du photon incident.
- $W_0$ : Travail d'extraction (énergie pour sortir l'électron).
- $E_c$ : Énergie cinétique du reste.
            `,
            summary: [
                "Dualité onde-corpuscule.",
                "L'intensité de la lumière augmente le nombre d'électrons, pas leur vitesse.",
                "h = Constante de Planck."
            ],
            exercises: [
                {
                    id: 'ex-phot-1',
                    question: "L'énergie d'un photon dépend de...",
                    options: ["Son intensité", "Sa vitesse", "Sa fréquence", "Sa masse"],
                    correctAnswer: 2,
                    explanation: "$E = h\\nu$. Plus la fréquence est grande (ex: UV, X), plus le photon est énergétique."
                }
            ]
        },
        {
            id: 'corp-ts-14',
            part: 'Partie 4 : Phénomènes Corpusculaires',
            title: 'P14. Niveaux d\'énergie de l\'atome',
            simulation: { id: 'pts-niveaux-energie', title: 'Niveaux d\'Énergie' },
            image: '/images/simulations/physique-ts/niveaux-energie.png',
            story: "L'atome n'est pas un système solaire miniature chaotique. Les électrons habitent à des étages très précis. Pour changer d'étage, ils doivent payer ou gagner l'énergie exacte.",
            content: `
### 1. Quantification de l'énergie
Les électrons ne peuvent occuper que certains niveaux d'énergie discrets ($E_1, E_2, ...$).

### 2. Émission et Absorption
- **Absorption :** L'atome gagne un photon et monte d'un niveau. $h\\nu = E_{aut} - E_{bas}$.
- **Émission :** L'atome retombe et émet un photon. $h\\nu = E_{haut} - E_{bas}$.

### 3. Spectres de raies
Signature unique de chaque élément chimique. Série de Balmer (Visible pour l'Hydrogène).
            `,
            summary: [
                "Niveau fondamental vs États excités.",
                "Ionisation : L'électron est arraché (E > 0).",
                "Laser : Émission stimulée."
            ],
            exercises: [
                {
                    id: 'ex-atom-1',
                    question: "Que se passe-t-il si un photon a une énergie différente de la différence entre deux niveaux ?",
                    options: ["Il est absorbé", "Il est ignoré (traversé)", "Il casse l'atome", "Il est réfléchi"],
                    correctAnswer: 1,
                    explanation: "L'atome ne peut absorber qu'exactement la bonne quantité d'énergie (quantification). Sinon, le photon passe."
                }
            ]
        },
        {
            id: 'corp-ts-15',
            part: 'Partie 4 : Phénomènes Corpusculaires',
            title: 'P15. Réactions Nucléaires',
            simulation: { id: 'pts-nucleaire', title: 'Réactions Nucléaires' },
            image: '/images/simulations/physique-ts/nucleaire.png',
            story: "Plongeons au cœur du noyau. Ici, la matière se transforme en énergie (E=mc²). Fission, fusion, radioactivité... c'est la source d'énergie des étoiles et des centrales.",
            content: `
### 1. Le Noyau
Nucléons (Protons + Neutrons). Notation $_Z^A X$. Isotopes (même Z, A différent).

### 2. Radioactivité
Instabilité naturelle du noyau.

- Alpha ($\\_2^4He$), Bêta- ($e^-$), Bêta+ ($e^+$), Gamma (Photon).
- Loi de décroissance : $N(t) = N_0 e^{-\\lambda t}$. Demi-vie $t_{1/2}$.

### 3. Fission et Fusion
- **Fission :** Noyau lourd cassé en deux (Centrales nucléaires, Bombe A).
- **Fusion :** Noyaux légers assemblés (Soleil, Bombe H). Libère beaucoup plus d'énergie.

### 4. Défaut de masse
$\\Delta E = \\Delta m \\times c^2$. La masse perdue devient énergie.
            `,
            summary: [
                "Conservation du nombre de charge Z et de masse A (Lois de Soddy).",
                "Fusion nécessite des températures extrêmes (Tokamak).",
                "La radioactivité est aléatoire, spontanée et inéluctable."
            ],
            exercises: [
                {
                    id: 'ex-nuc-1',
                    question: "Dans une réaction alpha, qu'est-ce qui est émis ?",
                    options: ["Un électron", "Un noyau d'Hélium", "Un neutron", "Un photon"],
                    correctAnswer: 1,
                    explanation: "Une particule alpha est un noyau d'Hélium 4 (2 protons, 2 neutrons)."
                }
            ]
        }
    ]
};
