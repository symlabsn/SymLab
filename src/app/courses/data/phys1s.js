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
            story: "Pour déplacer un objet, il faut de l'énergie. Mais l'efficacité dépend de la vitesse : c'est la puissance.",
            content: `
                <h3>1. Travail d'une force constante</h3>
                <p>Le travail $W$ d'une force $\\vec{F}$ constante sur un déplacement rectiligne $\\vec{AB}$ est le produit scalaire :</p>
                <p>$$ W_{AB}(\\vec{F}) = \\vec{F} \\cdot \\vec{AB} = F \\times AB \\times \\cos(\\alpha) $$</p>
                <ul>
                    <li>Si $0 \\le \\alpha < 90^\\circ$ : Travail moteur ($W > 0$).</li>
                    <li>Si $\\alpha = 90^\\circ$ : Travail nul ($W = 0$).</li>
                    <li>Si $90^\\circ < \\alpha \\le 180^\\circ$ : Travail résistant ($W < 0$).</li>
                </ul>

                <h3>2. Puissance</h3>
                <p>La puissance moyenne est le travail fourni par unité de temps :</p>
                <p>$$ P_m = \\frac{W}{\\Delta t} $$</p>
                <p>Puissance instantanée : $P(t) = \\vec{F} \\cdot \\vec{v}$.</p>
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
            story: "Un objet en mouvement possède une énergie liée à sa vitesse. C'est l'énergie du mouvement.",
            content: `
                <h3>1. Définition</h3>
                <p>Pour un solide de masse $m$ en translation à la vitesse $v$ :</p>
                <p>$$ E_c = \\frac{1}{2} m v^2 $$</p>
                <p>Pour un solide en rotation autour d'un axe fixe ($\ moment\ d'inertie\ J_{\\Delta}$, vitesse angulaire $\\omega$) :</p>
                <p>$$ E_c = \\frac{1}{2} J_{\\Delta} \\omega^2 $$</p>

                <h3>2. Théorème de l'Énergie Cinétique (TEC)</h3>
                <p>Dans un référentiel galiléen, la variation de l'énergie cinétique entre deux instants est égale à la somme des travaux des forces extérieures :</p>
                <p>$$ \\Delta E_c = E_{cB} - E_{cA} = \\sum W_{AB}(\\vec{F}_{ext}) $$</p>
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
            story: "L'énergie peut être stockée (potentielle) et transformée en mouvement. La conservation de l'énergie est un principe clé.",
            content: `
                <h3>1. Énergie Potentielle de Pesanteur ($E_{pp}$)</h3>
                <p>$$ E_{pp} = m g z $$</p>
                <p>Avec $z$ l'altitude par rapport à un niveau de référence ($E_{pp}=0$).</p>

                <h3>2. Énergie Mécanique ($E_m$)</h3>
                <p>C'est la somme de l'énergie cinétique et de l'énergie potentielle :</p>
                <p>$$ E_m = E_c + E_p $$</p>
                
                <h3>3. Conservation</h3>
                <p>Si le solide n'est soumis qu'à des forces conservatives (comme le poids) ou sans travail (réaction normale), alors $E_m$ se conserve.</p>
                <p>$$ \\Delta E_m = 0 \\iff E_{mA} = E_{mB} $$</p>
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
                <h3>1. Quantité de Chaleur ($Q$)</h3>
                <p>Pour faire varier la température d'un corps de masse $m$ de $\\Delta T$ :</p>
                <p>$$ Q = m c \\Delta T $$</p>
                <ul>
                    <li>$c$ : Capacité thermique massique (J/kg/°C).</li>
                    <li>$Q > 0$ si le corps reçoit de la chaleur.</li>
                </ul>

                <h3>2. Changement d'état</h3>
                <p>Pour changer l'état (fusion, vaporisation) d'une masse $m$ à température constante :</p>
                <p>$$ Q = m L $$</p>
                <p>$L$ : Chaleur latente de changement d'état.</p>
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
            story: "L'électricité statique n'est pas de la magie. C'est l'action à distance entre charges électriques.",
            content: `
                <h3>1. Loi de Coulomb</h3>
                <p>La force d'interaction entre deux charges ponctuelles $q_A$ et $q_B$ séparées de $d$ :</p>
                <p>$$ F = k \\frac{|q_A q_B|}{d^2} $$</p>
                <p>Avec $k = 9 \\times 10^9$ SI.</p>

                <h3>2. Champ Électrostatique $\\vec{E}$</h3>
                <p>Une charge $Q$ crée autour d'elle un champ $\\vec{E}$. Une charge test $q$ placée dans ce champ subit une force :</p>
                <p>$$ \\vec{F} = q \\vec{E} $$</p>
                <p>Le vecteur $\\vec{E}$ s'éloigne des charges positives et converge vers les charges négatives.</p>
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
            story: "Le mouvement des charges dans un champ électrique est à la base des accélérateurs de particules.",
            content: `
                <h3>1. Travail de la force électrique</h3>
                <p>Dans un champ uniforme $\\vec{E}$, le travail pour aller de A à B ne dépend que de la différence de potentiel $U_{AB}$ :</p>
                <p>$$ W_{AB}(\\vec{F}) = q \\vec{E} \\cdot \\vec{AB} = q (V_A - V_B) = q U_{AB} $$</p>

                <h3>2. Énergie Potentielle Électrostatique</h3>
                <p>$$ E_{pe} = q V $$</p>
                <p>L'énergie mécanique d'une particule chargée se conserve dans un champ électrostatique (force conservative).</p>
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
            story: "Générateurs et récepteurs échangent de l'énergie. Bilan de puissance.",
            content: `
                <h3>1. Effet Joule</h3>
                <p>Dissipation d'énergie thermique dans un résistor :</p>
                <p>$$ W_J = R I^2 \\Delta t $$</p>

                <h3>2. Générateur et Récepteur</h3>
                <ul>
                    <li><strong>Générateur :</strong> Fournit $W_T = U I \\Delta t$. Il a une f.é.m $E$ et résistance interne $r$. $U_{PN} = E - rI$.</li>
                    <li><strong>Récepteur (Moteur/Électrolyseur) :</strong> Reçoit $W_R$. Il a une f.c.é.m $E'$ et résistance $r'$. $U_{AB} = E' + r'I$.</li>
                </ul>
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
            story: "Stocker des charges pour les libérer brutalement : c'est le rôle du condensateur (flash d'appareil photo).",
            content: `
                <h3>1. Capacité</h3>
                <p>Un condensateur armatures A et B porte les charges $+q$ et $-q$.</p>
                <p>$$ q = C \\times U_{AB} $$</p>
                <p>$C$ est la capacité en Farad (F).</p>

                <h3>2. Énergie Emmagasinée</h3>
                <p>L'énergie stockée dans le champ électrique entre les armatures est :</p>
                <p>$$ E = \\frac{1}{2} C U^2 = \\frac{1}{2} \\frac{q^2}{C} $$</p>
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
            story: "L'A.O. est le couteau suisse de l'électronique analogique. Il peut additionner, intégrer ou dériver des signaux.",
            content: `
                <h3>1. L'A.O. Idéal (Régime Linéaire)</h3>
                <p>En régime linéaire (rétroaction négative), la tension d'entrée différentielle est nulle : $\\epsilon = V_+ - V_- = 0$.</p>
                <p>Courants d'entrée nuls : $i_+ = i_- = 0$.</p>

                <h3>2. Montages de base</h3>
                <ul>
                    <li><strong>Inverseur :</strong> $U_s = - \\frac{R_2}{R_1} U_e$.</li>
                    <li><strong>Suiveur :</strong> $U_s = U_e$ (Adaptateur d'impédance).</li>
                    <li><strong>Dérivateur :</strong> Sortie proportionnelle à la dérivée de l'entrée.</li>
                    <li><strong>Intégrateur :</strong> Sortie proportionnelle à l'intégrale de l'entrée.</li>
                </ul>
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
            story: "Le son, la lumière, les vagues, les séismes... Tout est onde.",
            content: `
                <h3>1. Onde Progressive</h3>
                <p>Propagation d'une perturbation sans transport de matière, mais avec transport d'énergie.</p>
                <p><strong>Célérité :</strong> Vitesse de propagation $v = d / \\Delta t$.</p>
                
                <h3>2. Ondes Périodiques</h3>
                <p>Périodicité temporelle $T$ et spatiale $\\lambda$ (longueur d'onde).</p>
                <p>$$ \\lambda = v T = \\frac{v}{N} $$</p>

                <h3>3. Interférences Mécaniques</h3>
                <p>Superposition de deux ondes synchrones. Création de franges d'amplitude maximale (constructives) et nulle (destructives).</p>
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
            story: "Les lunettes, les microscopes, les télescopes reposent tous sur les lentilles.",
            content: `
                <h3>1. Types de Lentilles</h3>
                <ul>
                    <li><strong>Convergentes :</strong> Bords minces. Foyer image réel.</li>
                    <li><strong>Divergentes :</strong> Bords épais. Foyer image virtuel.</li>
                </ul>

                <h3>2. Formule de Conjugaison (Descartes)</h3>
                <p>Pour un objet A sur l'axe optique et son image A' :</p>
                <p>$$ \\frac{1}{\\overline{OA'}} - \\frac{1}{\\overline{OA}} = \\frac{1}{\\overline{OF'}} = C $$</p>
                <ul>
                    <li>$\\overline{OA}$ : Position objet (souvent négatif).</li>
                    <li>$\\overline{OA'}$ : Position image.</li>
                    <li>$C$ : Vergence en dioptries ($\\delta$).</li>
                </ul>

                <h3>3. Grandissement $\\gamma$</h3>
                <p>$$ \\gamma = \\frac{\\overline{A'B'}}{\\overline{AB}} = \\frac{\\overline{OA'}}{\\overline{OA}} $$</p>
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
