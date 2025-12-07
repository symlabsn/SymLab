
// Banque d'exercices pour composer des sujets riches et variés sans répétition excessive
const exercisesBank = {
    math: {
        analysis: [
            {
                title: "Étude de Fonction Logarithme",
                content: `**Partie A**
Soit la fonction $g$ définie sur $]0; +\\infty[$ par $g(x) = x^2 + 1 - \\ln(x)$.
1. Étudier les variations de $g$ (calculer $g'(x)$ et son signe).
2. En déduire que $g(x) > 0$ pour tout $x > 0$.

**Partie B**
On considère $f(x) = x + \\frac{\\ln(x)}{x}$.
1. Déterminer les limites en $0^+$ et en $+\\infty$. Interpréter graphiquement.
2. Montrer que $f'(x) = \\frac{g(x)}{x^2}$.
3. Dresser le tableau de variations complet de $f$.
4. Montrer que la droite $(\\Delta): y = x$ est asymptote oblique. Étudier la position relative de $C_f$ et $(\\Delta)$.`,
                correction: `**Partie A**
1. $g'(x) = 2x - 1/x = (2x^2 - 1)/x$. S'annule en $1/\\sqrt{2}$. Minimum positif.
2. $g(x)$ admet un minimum strictement positif, donc $g(x) > 0$.

**Partie B**
1. En $0^+$ : $-\\infty$ (A.V.). En $+\\infty$ : $+\\infty$.
2. Dérivée $f'(x) = \\frac{x^2 - (1 - \\ln x)}{x^2}$.`
            },
            {
                title: "Fonction Exponentielle et Suite",
                content: `On considère la fonction $f(x) = (x-1)e^{-x} + 2$.
1. Calculer la dérivée $f'(x)$ et étudier son signe.
2. Montrer que l'équation $f(x) = 0$ admet une solution unique $\\alpha$ sur $\\mathbb{R}$.
3. On définit la suite $u_n$ par $u_0 = 1$ et $u_{n+1} = f(u_n)$.
   a) Montrer que si $u_n \\in [1; 2]$, alors $u_{n+1} \\in [1; 2]$.
   b) Étudier la convergence de la suite.`,
                correction: `1. $f'(x) = e^{-x} - (x-1)e^{-x} = e^{-x}(2-x)$.
2. TVI sur l'intervalle approprié.
3. Utiliser le théorème du point fixe (croissance de f sur l'intervalle...).`
            },
            {
                title: "Équations Différentielles",
                content: `On considère l'équation différentielle $(E) : y'' + 2y' + y = 2e^{-x}$.
1. Résoudre l'équation homogène $(E_0) : y'' + 2y' + y = 0$.
2. Déterminer une solution particulière de $(E)$ de la forme $y_p(x) = ax^2 e^{-x}$.
3. En déduire la solution générale.
4. Déterminer la solution $f$ vérifiant $f(0) = 0$ et $f'(0) = 1$.`,
                correction: `1. Équation caractéristique $r^2 + 2r + 1 = 0 \Rightarrow (r+1)^2 = 0$. Racine double -1.
   $y_0(x) = (Ax + B)e^{-x}$.
2. On trouve $a=1$. $y_p(x) = x^2 e^{-x}$.
3. $y(x) = (x^2 + Ax + B)e^{-x}$.`
            },
            {
                title: "Intégration et Suites",
                content: `Soit la suite d'intégrales $I_n = \\int_{0}^{1} x^n e^{-x} dx$.
1. Calculer $I_0$ et $I_1$.
2. À l'aide d'une intégration par parties, établir une relation entre $I_{n+1}$ et $I_n$.
3. Montrer que la suite $(I_n)$ est décroissante et positive.
4. En déduire qu'elle converge. Déterminer sa limite.`,
                correction: `1. $I_0 = 1 - 1/e$.
2. $I_{n+1} = (n+1)I_n - 1/e$.
4. Limite nulle (majoration par $1/(n+1)$).`
            }
        ],
        complex: [
            {
                title: "Nombres Complexes et Géométrie",
                content: `Le plan est rapporté à un repère orthonormal direct $(O, \\vec{u}, \\vec{v})$.
1. Résoudre dans $\\mathbb{C}$ l'équation $z^2 - 2z + 4 = 0$. Écrire les solutions sous forme exponentielle.
2. Soient les points $A(1 + i\\sqrt{3})$ et $B(1 - i\\sqrt{3})$.
   a) Placer les points.
   b) Montrer que le triangle $OAB$ est équilatéral.
3. Soit $R$ la rotation de centre $O$ et d'angle $\\frac{2\\pi}{3}$. Déterminer l'image de $A$ par $R$.`,
                correction: `1. $\\Delta = -12$. $z_1 = 2e^{i\\pi/3}$.
2. $|z_A| = 2$, $|z_B| = 2$, $|z_A - z_B| = 2\\sqrt{3}$. Triangle équilatéral.
3. $z_{A'} = z_A e^{i\\frac{2\\pi}{3}}...$`
            },
            {
                title: "Transformations et Lieux Géométriques",
                content: `On associe à tout point $M(z)$ le point $M'(z')$ tel que $z' = \\frac{z-2i}{z+2}$.
1. Déterminer l'ensemble des points $M$ tels que $|z'| = 1$.
2. Déterminer l'ensemble des points $M$ tels que $z'$ soit imaginaire pur.
3. Interpréter géométriquement $|z'|$ et $\\arg(z')$.`,
                correction: `1. $|z-2i| = |z+2| \Rightarrow$ Médiatrice de $[A(2i), B(-2)]$.
2. $\\arg(z') = \\pi/2 [\pi] \Rightarrow$ Cercle de diamètre $[AB]$ privé de B.`
            },
            {
                title: "Similitudes Planes (S1)",
                content: `Soit $S$ la similitude directe transformant $A(1)$ en $B(2i)$ et $O$ en $O$.
1. Déterminer l'écriture complexe de $S$. Préciser ses éléments caractéristiques.
2. On définit la suite de points $M_{n+1} = S(M_n)$ avec $M_0$ d'affixe $1+i$.
   a) Exprimer $z_n$ en fonction de $n$.
   b) À partir de quel rang $n$ le point $M_n$ est-il dans le disque de rayon 100 ?`,
                correction: `1. $z' = az$. $0=0, 2i = a(1) \Rightarrow a=2i$. Rapport 2, Angle $\\pi/2$, Centre O.
2. $z_n = (2i)^n z_0$. $|z_n| = 2^n \sqrt{2}$.`
            }
        ],
        arithmetic: [
            {
                title: "Arithmétique et Divisibilité",
                content: `1. On considère l'équation $(E) : 13x - 7y = 5$ où $x, y \\in \\mathbb{Z}$.
// ... contenu existant
2. Démontrer que pour tout entier $n$, $n(n^2-1)$ est divisible par 3.
3. Résoudre dans $\\mathbb{Z}$ le système :
   $x \equiv 2 [5]$
   $x \equiv 3 [7]$`,
                correction: `2. $n(n-1)(n+1)$ produit de 3 entiers consécutifs.
3. $x = 35k + 17$.`
            },
            {
                title: "Nombres Premiers et PGCD",
                content: `1. Déterminer le PGCD de 2024 et 750.
2. Déterminer les couples d'entiers $(a, b)$ tels que $PGCD(a, b) = 18$ et $a + b = 360$.
3. Montrer que si $p$ est premier et $p > 3$, alors $p^2 - 1$ est divisible par 24.`,
                correction: `1. Algorithme d'Euclide.
2. Poser $a = 18a', b = 18b'$. $a' + b' = 20$. Couples premiers entre eux.`
            }
        ],
        prob: [
            {
                title: "Probabilités Conditionnelles",
                content: `Une urne contient 10 boules : 5 rouges, 3 vertes, 2 noires.
// ... existing
3. On lance une pièce. Si Pile, on tire dans l'urne 1. Si Face, on tire dans l'urne 2 (contenant 3R, 7N).
   Calculer la probabilité de tirer une boule rouge.`,
                correction: `Formule des probabilités totales. $P(R) = P(R|P)P(P) + P(R|F)P(F)$.`
            },
            {
                title: "Variable Aléatoire",
                content: `Un jeu consiste à lancer deux dés. Si la somme fait 7, on gagne 500F. Si 11, on gagne 1000F. Sinon on perd 200F.
1. Déterminer la loi de probabilité de la variable aléatoire $X$ (gain algébrique).
2. Calculer l'espérance mathématique. Le jeu est-il équitable ?
3. On répète le jeu 10 fois. Quelle est la probabilité de gagner au moins une fois ?`,
                correction: `1. $P(X=500) = 6/36$, $P(X=1000) = 2/36$, etc.
2. $E(X) < 0$, jeu défavorable.`
            }
        ]
    },
    pc: {
        mech: [
            {
                title: "Mouvement d'un Projectile",
                content: `Un joueur frappe dans un ballon... // existing
4. On prend en compte une force de frottement $f = -kv$. Établir la nouvelle équation différentielle.`,
                correction: `...`
            },
            {
                title: "Satellites et Lois de Kepler",
                content: `On considère un satellite $S$ de masse $m$ en orbite circulaire autour de la Terre (rayon $R$, masse $M$) à l'altitude $h$.
1. Représenter la force gravitationnelle.
2. Montrer que le mouvement est uniforme.
3. Exprimer la vitesse $v$ et la période $T$.
4. Vérifier la 3ème loi de Kepler : $T^2 / r^3 = cste$.
5. Qu'est-ce qu'un satellite géostationnaire ? Calculer son altitude.`,
                correction: `2. Accélération normale pure.
3. $v = \\sqrt{GM/r}$. $T = 2\\pi r / v$.
5. $T = 24h$. $h \\approx 36000$km.`
            },
            {
                title: "Système Oscillatoire",
                content: `Un pendule simple de longueur $l=1$m.
1. Établir l'équation différentielle pour les petites oscillations.
2. Solution $ \\theta(t) = \\theta_m \\cos(\\omega_0 t + \\phi)$.
3. Calculer la période.
4. On écarte le pendule de $60^{\\circ}$. Peut-on utiliser l'approximation ? Utiliser l'énergie mécanique pour trouver la vitesse au passage par la verticale.`,
                correction: `1. $\\ddot{\\theta} + \\frac{g}{l}\\theta = 0$.
4. Non. $\\Delta E_m = 0 \\Rightarrow 1/2 m v^2 = mgl(1-\\cos\\theta_m)$.`
            }
        ],
        chem: [
            {
                title: "Dosage Acido-Basique",
                content: `// existing...`
            },
            {
                title: "Cinétique Chimique",
                content: `L'eau oxygénée se décompose selon : $2H_2O_2 \\rightarrow 2H_2O + O_2$.
On suit la réaction par dosage des prélèvements au KMnO4.
1. Pourquoi tremper les prélèvements dans de l'eau glacée ?
2. Définir la vitesse volumique de disparition.
3. Comment évolue cette vitesse ? Pourquoi ?
4. Définir le temps de demi-réaction et le déterminer graphiquement.`,
                correction: `1. Trempe = blocage cinétique.
3. Diminue car concentration réactifs diminue.
4. Temps pour consommer la moitié du réactif limitant.`
            },
            {
                title: "Savons et Esters",
                content: `1. Écrire l'équation de la réaction entre la trioléine (triglycéride) et la soude. Comment s'appelle cette réaction ?
2. Quelles sont les propriétés du savon obtenu ? (Hydrophile/Lipophile).
3. On fait réagir l'acide butanoïque avec l'éthanol. Nommer le produit et sentir son odeur.`,
                correction: `1. Saponification. Totale et lente à chaud.
2. Amphiphile, mode d'action micellaire.
3. Butanoate d'éthyle (ananas).`
            }
        ],
        elec: [
            {
                title: "Dipôle RL",
                content: `On associe une bobine $(L, r)$ et une résistance $R$.
1. Établir l'équation différentielle de l'établissement du courant.
2. Solution en $i(t) = A + B e^{-t/\\tau}$. Identifier $A, B, \\tau$.
3. Quelle est l'énergie stockée dans la bobine à $t \\to \\infty$ ?
4. Phénomène de rupture de courant : pourquoi faut-il une diode de roue libre ?`,
                correction: `1. $E = (R+r)i + L di/dt$.
2. $\\tau = L/(R+r)$.
3. $E_L = 1/2 L I_0^2$.
4. Éviter surtension $u_L = -L di/dt$.`
            },
            {
                title: "Circuit RLC Série",
                content: `On décharge un condensateur $C$ dans une bobine $(L, r)$.
1. Établir l'équation différentielle.
2. Si $r=0$, quelle est la nature des oscillations ? Période propre ?
3. Si $r \\neq 0$, quel est le régime ?
4. Comment entretenir les oscillations ? (Résistance négative).`,
                correction: `2. Sinusoïdales, $T_0 = 2\\pi\\sqrt{LC}$.
3. Pseudo-périodique (amorti).`
            }
        ],
        nuclear: [
            {
                title: "Radioactivité et Datation",
                content: `Le Carbone 14 est radioactif $\\beta^-$.
1. Écrire l'équation de désintégration ($^{14}C \\rightarrow ^{14}N + ...$).
2. Loi de décroissance $N(t) = N_0 e^{-\\lambda t}$. Définir $\\lambda$ et $t_{1/2}$.
3. Datation : Un échantillon de bois a une activité représentant 12% de l'activité actuelle. Quel est son âge ? ($t_{1/2} = 5730$ ans).
4. Calculer le défaut de masse et l'énergie libérée lors de la désintégration.`,
                correction: `1. Emission d'un électron + antineutrino.
3. $A = A_0 e^{-\\lambda t} \\Rightarrow t = \\frac{-1}{\\lambda} \\ln(0.12) \\approx 17500$ ans.`
            }
        ]
    },
    bfem: {
        math: [
            {
                title: "Racines et Équations",
                content: `**Exercice 1**
Simplifier $A = \\sqrt{300} - 4\\sqrt{27} + 6\\sqrt{3}$.
Résoudre $|2x - 1| = 5$.

**Exercice 2**
Soit $f(x) = (2x-3)^2 - (2x-3)(x+5)$.
1. Développer.
2. Factoriser.
3. Résoudre $f(x) = 0$.`,
                correction: `1. $10\\sqrt{3} - 12\\sqrt{3} + 6\\sqrt{3} = 4\\sqrt{3}$.
2. $2x-3 = 0$ ou $(2x-3) - (x+5) = x-8=0 \\Rightarrow x = 3/2$ ou $x=8$.`
            },
            {
                title: "Géométrie et Repérage",
                content: `Dans un repère $(O, I, J)$.
Placer $A(2, 3)$, $B(-2, 1)$, $C(0, -3)$.
1. Calculer les distances $AB$, $AC$, $BC$.
2. Montrer que le triangle $ABC$ est rectangle.
3. Trouver les coordonnées du centre du cercle circonscrit.`,
                correction: `Utiliser la réciproque de Pythagore.`
            },
            {
                title: "Thalès et Pyramide",
                content: `Une pyramide régulière SABCD a pour base un carré de 6cm. Hauteur SO = 9cm.
1. Calculer le volume.
2. On coupe par un plan parallèle à la base à 3cm du sommet.
3. Quel est le volume de la petite pyramide ? (Coefficient de réduction).`,
                correction: `1. $V = 1/3 \\times 36 \\times 9 = 108$ cm3.
3. $k = 3/9 = 1/3$. $V' = k^3 V = 1/27 V = 4$ cm3.`
            },
            {
                title: "Systèmes d'équations",
                content: `**Problème**
Dans un élevage, il y a des poules et des lapins. On compte 40 têtes et 100 pattes.
1. Poser le système d'équations.
2. Déterminer le nombre de poules et de lapins.`,
                correction: `x + y = 40; 2x + 4y = 100 => x=30, y=10.`
            }
        ],
        pc: [
            {
                title: "Mécanique : Poids et Masse",
                content: `Sur la Lune, la gravité est 6 fois moindre que sur Terre.
Un astronaute a une masse de 80kg.
1. Quel est son poids sur Terre ? ($g=10$N/kg).
2. Quelle est sa masse sur la Lune ?
3. Quel est son poids sur la Lune ?`,
                correction: `2. Masse invariable : 80kg.
3. $P_L = P_T / 6 = 800/6 \\approx 133$N.`
            },
            {
                title: "Optique : Lentilles Minces",
                content: `On dispose d'une lentille de distance focale 10cm.
1. Quelle est sa vergence ?
2. On place un objet à 20cm de la lentille.
   Par construction et par calcul, trouver la position et la taille de l'image.`,
                correction: `1. $C = 1/0.1 = 10 \\delta$.
2. Image réelle, renversée, même taille (2f).`
            },
            {
                title: "Chimie : Solutions",
                content: `On dissout 4g de soude NaOH dans 500mL d'eau.
(M(Na)=23, O=16, H=1).
1. Calculer la masse molaire de NaOH.
2. Calculer la concentration molaire de la solution.
3. On prélève 10mL. Quelle est la quantité de matière ?`,
                correction: `1. M=40g/mol.
2. $C = n/V = (4/40)/0.5 = 0.2$ mol/L.`
            }
        ]
    }
};

// --- GÉNÉRATION D'EXAMENS (Objectif : ~50 sujets) ---

const createExam = (id, type, subject, title, desc, topics, diff, content, corr) => ({
    id, type, subject, title, duration: type.includes('BAC') ? '4h' : '2h',
    description: desc, topics, difficulty: diff, content, correction: corr
});

const examsData = [
    // --- BAC S1 (MATHS) : 8 Sujets ---
    createExam('bac-s1-m1', 'BAC S1', 'Mathématiques', 'Sujet Concours Général', 'Arithmétique pointue et Analyse.', ['Arithmétique', 'Analyse'], 'Expert',
        `### Exercice 1\n\${exercisesBank.math.arithmetic[0].content}\n\n### Problème\n\${exercisesBank.math.analysis[2].content}`,
        `\${exercisesBank.math.arithmetic[0].correction}\n\n\${exercisesBank.math.analysis[2].correction}`),

    createExam('bac-s1-m2', 'BAC S1', 'Mathématiques', 'Sujet Analyse & Complexes', 'Similitudes et Suites complexes.', ['Similitudes', 'Suites'], 'Expert',
        `### Exercice 1\n\${exercisesBank.math.complex[2].content}\n\n### Exercice 2\n\${exercisesBank.math.analysis[3].content}`,
        `Voir corrigés types Similitudes et Intégrales.`),

    createExam('bac-s1-m3', 'BAC S1', 'Mathématiques', 'Sujet Géométrie Pure', 'Coniques et Similitudes.', ['Coniques', 'Similitudes'], 'Expert',
        `### Exercice 1\n\${exercisesBank.math.complex[1].content}\n\n### Problème\n\${exercisesBank.math.complex[2].content}`, '...'),

    createExam('bac-s1-m4', 'BAC S1', 'Mathématiques', 'Sujet Analyse Approfondie', 'Équations Différentielles et Intégrales.', ['Eq Diff', 'Intégration'], 'Expert',
        `### Problème\n\${exercisesBank.math.analysis[2].content}\n\n### Partie B\n\${exercisesBank.math.analysis[3].content}`, '...'),

    createExam('bac-s1-m5', 'BAC S1', 'Mathématiques', 'Session Normale Récents', 'Mélange Arithmétique et Analyse.', ['Arithmétique', 'Logarithme'], 'Expert',
        `### Exercice 1\n\${exercisesBank.math.arithmetic[1].content}\n\n### Problème\n\${exercisesBank.math.analysis[0].content}`, '...'),

    createExam('bac-s1-m6', 'BAC S1', 'Mathématiques', 'Sujet Type S1', 'Nombres premiers et Similitudes.', ['Premiers', 'Complexes'], 'Expert',
        `### Exercice 1\n\${exercisesBank.math.arithmetic[1].content}\n\n### Exercice 2\n\${exercisesBank.math.complex[2].content}`, '...'),

    createExam('bac-s1-m7', 'BAC S1', 'Mathématiques', 'Synthèse Analyse/Algèbre', 'Suites et Divisibilité.', ['Suites', 'Arithmétique'], 'Expert',
        `### Exercice 1\n\${exercisesBank.math.analysis[1].content}\n\n### Exercice 2\n\${exercisesBank.math.arithmetic[0].content}`, '...'),

    createExam('bac-s1-m8', 'BAC S1', 'Mathématiques', 'Défi Mathématique', 'Problème ouvert sur les fonctions.', ['Fonctions', 'Limites'], 'Expert',
        `### Problème\n\${exercisesBank.math.analysis[0].content}\n\n Étude poussée avec paramètre $m$.`, '...'),


    // --- BAC S2 (MATHS) : 8 Sujets ---
    createExam('bac-s2-m1', 'BAC S2', 'Mathématiques', 'Bac S2 - Session 1', 'Classique : Complexes et Ln.', ['Complexes', 'Ln'], 'Difficile',
        `### Exercice 1\n\${exercisesBank.math.complex[0].content}\n\n### Problème\n\${exercisesBank.math.analysis[0].content}`, 'C.f. banque.'),

    createExam('bac-s2-m2', 'BAC S2', 'Mathématiques', 'Bac S2 - Session 2', 'Probabilités et Exponentielle.', ['Probabilités', 'Exp'], 'Difficile',
        `### Exercice 1\n\${exercisesBank.math.prob[1].content}\n\n### Problème\n\${exercisesBank.math.analysis[1].content}`, '...'),

    createExam('bac-s2-m3', 'BAC S2', 'Mathématiques', 'Sujet Probabilités', 'Probabilités conditionnelles et Suites.', ['Proba', 'Suites'], 'Difficile',
        `### Exercice 1\n\${exercisesBank.math.prob[0].content}\n\n### Exercice 2\n\${exercisesBank.math.analysis[3].content}`, '...'),

    createExam('bac-s2-m4', 'BAC S2', 'Mathématiques', 'Sujet Géométrie', 'Complexes et Transformations.', ['Complexes', 'Rotation'], 'Difficile',
        `### Exercice 1\n\${exercisesBank.math.complex[1].content}\n\n### Exercice 2\n\${exercisesBank.math.complex[0].content}`, '...'),

    createExam('bac-s2-m5', 'BAC S2', 'Mathématiques', 'Sujet Analyse Type', 'Étude complète de fonction.', ['Analyse', 'Dérivées'], 'Difficile',
        `### Problème\n\${exercisesBank.math.analysis[0].content}\n\nAjouter calcul d'aire.`, '...'),

    createExam('bac-s2-m6', 'BAC S2', 'Mathématiques', 'Sujet Équations Diff', 'Eq Diff et Nombres Complexes.', ['Eq Diff', 'Complexes'], 'Difficile',
        `### Exercice 1\n\${exercisesBank.math.analysis[2].content}\n\n### Exercice 2\n\${exercisesBank.math.complex[0].content}`, '...'),

    createExam('bac-s2-m7', 'BAC S2', 'Mathématiques', 'Sujet Suites Numériques', 'Convergence et Intégrales.', ['Suites', 'Intégrales'], 'Difficile',
        `### Exercice 1\n\${exercisesBank.math.analysis[3].content}\n\n### Exercice 2\n\${exercisesBank.math.analysis[1].content.split('**Partie B**')[0]}`, '...'),

    createExam('bac-s2-m8', 'BAC S2', 'Mathématiques', 'Sujet Mixte', 'Probabilités et Analyse.', ['Proba', 'Ln'], 'Difficile',
        `### Exercice 1\n\${exercisesBank.math.prob[1].content}\n\n### Problème\n\${exercisesBank.math.analysis[0].content}`, '...'),


    // --- BAC S1/S2 (PHYSIQUE-CHIMIE) : 10 Sujets ---
    createExam('bac-pc-1', 'BAC S1', 'Physique-Chimie', 'Mécanique Céleste', 'Satellites et Nucléaire.', ['Satellites', 'Radioactivité'], 'Expert',
        `### Physique 1\n\${exercisesBank.pc.mech[1].content}\n\n### Physique 2\n\${exercisesBank.pc.nuclear[0].content}`, '...'),

    createExam('bac-pc-2', 'BAC S2', 'Physique-Chimie', 'Chimie Organique', 'Estérification et Savons.', ['Chimie Orga', 'Savons'], 'Difficile',
        `### Chimie 1\n\${exercisesBank.pc.chem[1].content}\n\n### Chimie 2\n\${exercisesBank.pc.chem[2].content}`, '...'),

    createExam('bac-pc-3', 'BAC S2', 'Physique-Chimie', 'Oscillateurs', 'Pendule et RLC.', ['Pendule', 'RLC'], 'Difficile',
        `### Physique 1\n\${exercisesBank.pc.mech[2].content}\n\n### Physique 2\n\${exercisesBank.pc.elec[1].content}`, '...'),

    createExam('bac-pc-4', 'BAC S1', 'Physique-Chimie', 'Électromagnétisme', 'RL et RLC.', ['Induction', 'RLC'], 'Expert',
        `### Physique 1\n\${exercisesBank.pc.elec[0].content}\n\n### Physique 2\n\${exercisesBank.pc.elec[1].content}`, '...'),

    createExam('bac-pc-5', 'BAC S2', 'Physique-Chimie', 'Cinétique et pH', 'Vitesse réaction et dosage.', ['Cinétique', 'Acides-Base'], 'Difficile',
        `### Chimie 1\n\${exercisesBank.pc.chem[1].content}\n\n### Chimie 2\n\${exercisesBank.pc.chem[0].content}`, '...'),

    createExam('bac-pc-6', 'BAC S2', 'Physique-Chimie', 'Mouvements Plans', 'Projectiles et Champ E.', ['Projectile', 'Champs'], 'Difficile',
        `### Physique\n\${exercisesBank.pc.mech[0].content}`, '...'),

    createExam('bac-pc-7', 'BAC S1', 'Physique-Chimie', 'Nucléaire et Énergie', 'Défaut de masse et Fission.', ['Nucléaire', 'Énergie'], 'Expert',
        `### Physique Nucléaire\n\${exercisesBank.pc.nuclear[0].content}\n\nCalculer l'énergie libérée par 1g d'Uranium.`, '...'),

    createExam('bac-pc-8', 'BAC S2', 'Physique-Chimie', 'Sujet Complet 2023', 'RLC, Satellites et Alcools.', ['RLC', 'Méca', 'Orga'], 'Difficile',
        `### Physique\n\${exercisesBank.pc.mech[1].content}\n\n### Chimie\n\${exercisesBank.pc.chem[1].content}`, '...'),

    createExam('bac-pc-9', 'BAC S2', 'Physique-Chimie', 'Sujet Type Chimie', 'Dosages et Cinétique.', ['Dosage', 'Vitesse'], 'Difficile',
        `### Chimie 1\n\${exercisesBank.pc.chem[0].content}\n\n### Chimie 2\n\${exercisesBank.pc.chem[1].content}`, '...'),

    createExam('bac-pc-10', 'BAC S1', 'Physique-Chimie', 'Sujet Type Physique', 'Mécanique du solide et Élec.', ['Rotation', 'RL'], 'Expert',
        `### Mécanique\n\${exercisesBank.pc.mech[2].content}\n\n### Électricité\n\${exercisesBank.pc.elec[0].content}`, '...'),


    // --- BFEM (MATHS) : 8 Sujets ---
    createExam('bfem-m1', 'BFEM', 'Mathématiques', 'BFEM 2024 (Type)', 'Racines, Thalès, Trigo.', ['Racines', 'Thalès'], 'Moyen',
        `### Activités Numériques\n\${exercisesBank.bfem.math[0].content}\n\n### Activités Géométriques\n\${exercisesBank.bfem.math[1].content}`, '...'),

    createExam('bfem-m2', 'BFEM', 'Mathématiques', 'BFEM 2023 (Type)', 'Statistiques et Repérage.', ['Stats', 'Vecteurs'], 'Moyen',
        `### Activités Numériques\n\${exercisesBank.bfem.math[3].content}\n\n### Activités Géométriques\n\${exercisesBank.bfem.math[1].content}`, '...'),

    createExam('bfem-m3', 'BFEM', 'Mathématiques', 'Sujet Blanc N°1', 'Systèmes et Cône.', ['Systèmes', 'Espace'], 'Moyen',
        `### Algèbre\n\${exercisesBank.bfem.math[3].content}\n\n### Géométrie\n\${exercisesBank.bfem.math[2].content}`, '...'),

    createExam('bfem-m4', 'BFEM', 'Mathématiques', 'Sujet Blanc N°2', 'Factorisation et Pythagore.', ['Factorisation', 'Pythagore'], 'Moyen',
        `### Exercice 1\n\${exercisesBank.bfem.math[0].content}\n\n### Exercice 2\n\${exercisesBank.bfem.math[1].content}`, '...'),

    createExam('bfem-m5', 'BFEM', 'Mathématiques', 'Géométrie dans l\'Espace', 'Pyramides et Cônes.', ['Solid', 'Thalès'], 'Moyen',
        `### Géométrie\n\${exercisesBank.bfem.math[2].content}`, '...'),

    createExam('bfem-m6', 'BFEM', 'Mathématiques', 'Algèbre Intensive', 'Inéquations et Racines.', ['Inéquations', 'Calcul'], 'Moyen',
        `### Algèbre\n\${exercisesBank.bfem.math[0].content}`, '...'),

    createExam('bfem-m7', 'BFEM', 'Mathématiques', 'Sujet Synthèse 1', 'Tout le programme Algèbre.', ['Synthèse', 'Algèbre'], 'Moyen',
        `### Exercice 1\n\${exercisesBank.bfem.math[0].content}\n\n### Exercice 2\n\${exercisesBank.bfem.math[2].content}`, '...'),

    createExam('bfem-m8', 'BFEM', 'Mathématiques', 'Sujet Synthèse 2', 'Tout le programme Géométrie.', ['Synthèse', 'Géométrie'], 'Moyen',
        `### Problème\n\${exercisesBank.bfem.math[1].content}\n\n### Exercice\n\${exercisesBank.bfem.math[2].content}`, '...'),


    // --- BFEM (PC) : 8 Sujets ---
    createExam('bfem-pc-1', 'BFEM', 'Physique-Chimie', 'BFEM PC - Sujet 1', 'Poids/Masse et Solutions.', ['Méca', 'Chimie'], 'Moyen',
        `### Physique\n\${exercisesBank.bfem.pc[0].content}\n\n### Chimie\n\${exercisesBank.bfem.pc[2].content}`, '...'),

    createExam('bfem-pc-2', 'BFEM', 'Physique-Chimie', 'BFEM PC - Sujet 2', 'Optique et Hydrocarbures.', ['Lentilles', 'Alcanes'], 'Moyen',
        `### Physique\n\${exercisesBank.bfem.pc[1].content}\n\n### Chimie\nCH4, C2H6...`, '...'),

    createExam('bfem-pc-3', 'BFEM', 'Physique-Chimie', 'BFEM PC - Sujet 3', 'Électricité et Force.', ['Loi Ohm', 'Forces'], 'Moyen',
        `\${exercisesBank.bfem.pc[0].content.replace('Lentille', 'Résistance')}`, '...'),

    createExam('bfem-pc-4', 'BFEM', 'Physique-Chimie', 'BFEM PC - Sujet 4', 'Acides/Bases et Poids.', ['pH', 'Poids'], 'Moyen',
        `### Chimie\n\${exercisesBank.bfem.pc[2].content}\n\n### Physique\n\${exercisesBank.bfem.pc[0].content}`, '...'),

    createExam('bfem-pc-5', 'BFEM', 'Physique-Chimie', 'Sujet Electricité', 'Loi d\'ohm et Puissance.', ['Élec', 'Puissance'], 'Moyen',
        `Un fer à repasser (220V, 1000W). Calculer I et R.`, '...'),

    createExam('bfem-pc-6', 'BFEM', 'Physique-Chimie', 'Sujet Optique', 'Construction d\'images.', ['Lentilles', 'Images'], 'Moyen',
        `Refaire l'exercice avec une lentille de 5 dioptries.`, '...'),

    createExam('bfem-pc-7', 'BFEM', 'Physique-Chimie', 'Sujet Chimie Pure', 'Atomes et Molécules.', ['Atomes', 'Solutions'], 'Moyen',
        `Structure de l'atome (Z, A). Tableau périodique simplifié.`, '...'),

    createExam('bfem-pc-8', 'BFEM', 'Physique-Chimie', 'Sujet Mécanique', 'Équilibre d\'un solide.', ['Forces', 'Poids'], 'Moyen',
        `Solide soumis à 2 forces. Conditions d'équilibre.`, '...')

];

export default examsData;
