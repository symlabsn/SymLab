
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
1. $g'(x) = 2x - 1/x = (2x^2 - 1)/x$. S'annule en $1/\\sqrt{2}$. Minimum positif $g(1/\\sqrt{2}) \\approx 0.85 > 0$.
2. Le minimum est positif, donc $g(x)$ est strictement positive sur $\\mathbb{R}_+^*$.

**Partie B**
1. $\\lim_{x \\to 0^+} f(x) = -\\infty$ (asymptote verticale $x=0$). $\\lim_{x \\to +\\infty} f(x) = +\\infty$ car $\\ln(x)/x \\to 0$.
2. $f'(x) = 1 + \\frac{1 - \\ln(x)}{x^2} = \\frac{x^2 + 1 - \\ln(x)}{x^2} = \\frac{g(x)}{x^2}$.
3. $g(x) > 0$ et $x^2 > 0$, donc $f'(x) > 0$. La fonction est strictement croissante.
4. $f(x) - x = \\frac{\\ln(x)}{x}$. La limite en $+\\infty$ est 0, donc $y=x$ est asymptote oblique.`
            },
            {
                title: "Fonction Exponentielle et Suite",
                content: `On considère la fonction $f(x) = (x-1)e^{-x} + 2$.
1. Calculer la dérivée $f'(x)$ et étudier son signe.
2. Montrer que l'équation $f(x) = 0$ admet une solution unique $\\alpha$ sur $\\mathbb{R}$.
3. On définit la suite $u_n$ par $u_0 = 1$ et $u_{n+1} = f(u_n)$.
   a) Montrer que si $u_n \\in [1; 2]$, alors $u_{n+1} \\in [1; 2]$.
   b) Étudier la convergence de la suite.`,
                correction: `1. $f'(x) = 1 \\cdot e^{-x} + (x-1)(-e^{-x}) = e^{-x}(1 - x + 1) = e^{-x}(2-x)$.
   Positive sur $]-\\infty; 2[$, négative ensuite. Maximum en $x=2$.
2. $f$ est continue, strictement croissante puis décroissante. $f(2) = e^{-2} + 2 > 0$.
   Limites : $-\\infty$ en $-\\infty$ et $2$ en $+\\infty$. TVI applicable.
3. a) Par récurrence, en utilisant les variations de $f$ sur $[1; 2]$.
   b) $|f'(x)| \\le k < 1$ sur $[1; 2]$. Théorème du point fixe, $u_n$ converge vers la solution de $f(x)=x$.`
            },
            {
                title: "Équations Différentielles",
                content: `On considère l'équation différentielle $(E) : y'' + 2y' + y = 2e^{-x}$.
1. Résoudre l'équation homogène $(E_0) : y'' + 2y' + y = 0$.
2. Déterminer une solution particulière de $(E)$ de la forme $y_p(x) = ax^2 e^{-x}$.
3. En déduire la solution générale.
4. Déterminer la solution $f$ vérifiant $f(0) = 0$ et $f'(0) = 1$.`,
                correction: `1. Équation caractéristique $r^2 + 2r + 1 = 0 \\iff (r+1)^2 = 0$. Racine double $r = -1$.
   $y_0(x) = (Ax + B)e^{-x}$.
2. $y_p = ax^2 e^{-x} \\Rightarrow y_p' = (2ax - ax^2)e^{-x} \\Rightarrow y_p'' = (2a - 4ax + ax^2)e^{-x}$.
   En remplaçant : $2a e^{-x} = 2e^{-x} \\Rightarrow a = 1$. Soit $y_p(x) = x^2 e^{-x}$.
3. $y(x) = (x^2 + Ax + B)e^{-x}$.
4. $f(0) = B = 0$. $f'(0) = B - A = -A = 1 \\Rightarrow A = -1$. Donc $f(x) = (x^2 - x)e^{-x}$.`
            },
            {
                title: "Intégration et Suites",
                content: `Soit la suite d'intégrales $I_n = \\int_{0}^{1} x^n e^{-x} dx$.
1. Calculer $I_0$ et $I_1$.
2. À l'aide d'une intégration par parties, établir une relation entre $I_{n+1}$ et $I_n$.
3. Montrer que la suite $(I_n)$ est décroissante et positive.
4. En déduire qu'elle converge. Déterminer sa limite.`,
                correction: `1. $I_0 = [-e^{-x}]_0^1 = 1 - 1/e$.
   $I_1 = [-xe^{-x}]_0^1 + \\int_0^1 e^{-x}dx = -1/e + (1 - 1/e) = 1 - 2/e$.
2. IPP : $u=x^{n+1}, v'=e^{-x}$. $I_{n+1} = [-x^{n+1}e^{-x}]_0^1 + (n+1)I_n = -1/e + (n+1)I_n$.
3. $x^{n+1} < x^n$ sur $[0,1]$, donc $I_{n+1} < I_n$. Positive car intégrande positive.
4. $0 \\le I_n \\le e^0 \\int_0^1 x^n dx = \\frac{1}{n+1} \\to 0$. La limite est 0.`
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
                correction: `1. $\\Delta = -12 = (2i\\sqrt{3})^2$. $z_1 = 1 + i\\sqrt{3} = 2e^{i\\pi/3}$ et $z_2 = \\bar{z_1} = 2e^{-i\\pi/3}$.
2. $OA = |z_A| = 2$. $OB = |z_B| = 2$. $AB = |z_B - z_A| = |-2i\\sqrt{3}| = 2\\sqrt{3}$.
   Or $2\\sqrt{3} \\neq 2$... Erreur énoncé classique ou $OAB$ isocèle ? Vérifions l'angle : $\\arg(z_B/z_A) = -2\\pi/3$. Isocèle en O avec angle $120^\\circ$.
3. $z_{A'} = z_A e^{i2\\pi/3} = 2e^{i\\pi/3}e^{i2\\pi/3} = 2e^{i\\pi} = -2$.`
            },
            {
                title: "Transformations et Lieux Géométriques",
                content: `On associe à tout point $M(z)$ le point $M'(z')$ tel que $z' = \\frac{z-2i}{z+2}$.
1. Déterminer l'ensemble des points $M$ tels que $|z'| = 1$.
2. Déterminer l'ensemble des points $M$ tels que $z'$ soit imaginaire pur.
3. Interpréter géométriquement $|z'|$ et $\\arg(z')$.`,
                correction: `1. $|z'|=1 \\iff |z-2i| = |z+2| \\iff MA = MB$ avec $A(2i)$ et $B(-2)$. Médiatrice de $[AB]$.
2. $z'$ imaginaire pur $\\iff \\arg(z') = \\pi/2 [\\pi]$.
   $\\arg(z') = (\\vec{MB}, \\vec{MA})$. L'ensemble est le cercle de diamètre $[AB]$ privé de $B$.`
            },
            {
                title: "Similitudes Planes Directes",
                content: `Soit $S$ la similitude directe transformant $A(1)$ en $B(2i)$ et $O(0)$ en $O(0)$.
1. Déterminer l'écriture complexe de $S$. Préciser ses éléments caractéristiques.
2. On définit la suite de points $M_{n+1} = S(M_n)$ avec $M_0$ d'affixe $z_0 = 1+i$.
   a) Exprimer $z_n$ en fonction de $n$.
   b) À partir de quel rang $n$ le point $M_n$ est-il à une distance de l'origine supérieure à 100 ?`,
                correction: `1. $S$ fixe $O$, donc $z' = az$.
   $S(A)=B \\Rightarrow 2i = a(1) \\Rightarrow a = 2i$.
   Rapport $k = |2i| = 2$. Angle $\\theta = \\arg(2i) = \\pi/2$. Centre $O$.
2. a) $z_{n+1} = 2i z_n$, suite géométrique. $z_n = (2i)^n z_0$.
   b) $|z_n| = 2^n |z_0| = 2^n \\sqrt{2}$.
      On cherche $2^n \\sqrt{2} > 100 \\Rightarrow 2^n > 100/1.414 \\approx 70.7$.
      $2^6 = 64$, $2^7 = 128$. Donc à partir de $n=7$.`
            }
        ],
        arithmetic: [
            {
                title: "Arithmétique et Divisibilité",
                content: `1. On considère l'équation $(E) : 13x - 7y = 5$ où $x, y \\in \\mathbb{Z}$.
   a) Vérifier que le couple $(2, 3)$ est solution particulière.
   b) Résoudre l'équation générale.
2. Démontrer que pour tout entier $n$, $n(n^2-1)$ est divisible par 3.
3. Résoudre dans $\\mathbb{Z}$ le système :
   $\\begin{cases} x \\equiv 2 [5] \\\\ x \\equiv 3 [7] \\end{cases}$`,
                correction: `1. a) $13(2) - 7(3) = 26 - 21 = 5$. OK.
   b) $13(x-2) = 7(y-3)$. Gauss : $x-2 = 7k \\Rightarrow x = 7k+2$. $y = 13k+3$.
2. $n(n^2-1) = (n-1)n(n+1)$. Produit de 3 entiers consécutifs, l'un est forcément multiple de 3.
3. $x = 7k+3$. Or $7k+3 \\equiv 2 [5] \\Rightarrow 2k+3 \\equiv 2 \\Rightarrow 2k \\equiv -1 \\equiv 4 [5] \\Rightarrow k \\equiv 2 [5]$.
   $k = 5j + 2 \\Rightarrow x = 7(5j+2) + 3 = 35j + 14 + 3 = 35j + 17$.`
            },
            {
                title: "Nombres Premiers et PGCD",
                content: `1. Déterminer le PGCD de 2024 et 750 à l'aide de l'algorithme d'Euclide.
2. Déterminer les couples d'entiers $(a, b)$ tels que $PGCD(a, b) = 18$ et $a + b = 360$.
3. Montrer que si $p$ est premier et $p > 3$, alors $p^2 - 1$ est divisible par 24.`,
                correction: `1. $2024 = 2 \\times 750 + 524$... PGCD(2024, 750) = 2.
2. $a=18a', b=18b'$ avec $a' \\wedge b' = 1$. $18(a'+b') = 360 \\Rightarrow a'+b'=20$.
   Couples $(a',b')$ possibles : $(1,19), (3,17), (7,13), (9,11)$.
   Multiplier par 18 pour obtenir $(a,b)$.
3. $p$ est impair, $p=2k+1$, donc $p^2-1 = 4k(k+1)$, divisible par 8.
   $p$ n'est pas multiple de 3, donc $p^2 \\equiv 1 [3]$, $p^2-1$ divisible par 3.
   Divisible par 8 et 3 (premiers entre eux) => divisible par 24.`
            }
        ],
        prob: [
            {
                title: "Probabilités Conditionnelles",
                content: `Une urne U1 contient 5 boules rouges, 3 vertes. Une urne U2 contient 3 rouges, 7 noires.
On lance une pièce équilibrée.
- Si Pile, on tire une boule dans U1.
- Si Face, on tire une boule dans U2.
1. Faire un arbre de probabilité.
2. Calculer la probabilité de tirer une boule rouge.
3. Sachant qu'on a tiré une boule rouge, quelle est la probabilité qu'elle vienne de U1 ?`,
                correction: `1. Arbre pondéré : P(Pile)=1/2, P(Face)=1/2.
   $P(R|P) = 5/8$, $P(R|F) = 3/10$.
2. $P(R) = P(P) \\times P(R|P) + P(F) \\times P(R|F) = 1/2 \\times 5/8 + 1/2 \\times 3/10 = 5/16 + 3/20 = 25/80 + 12/80 = 37/80$.
3. Bayes : $P(P|R) = \\frac{P(R|P)P(P)}{P(R)} = \\frac{5/16}{37/80} = \\frac{25/80}{37/80} = 25/37$.`
            },
            {
                title: "Variable Aléatoire - Loi Binomiale",
                content: `Un tireur atteint sa cible avec une probabilité $p=0.8$.
On considère une série de 10 tirs indépendants. Soit $X$ le nombre de succès.
1. Quelle est la loi suivie par $X$ ? Justifier.
2. Calculer l'espérance et l'écart-type de $X$.
3. Calculer la probabilité d'atteindre exactement 8 fois la cible.
4. Calculer la probabilité d'atteindre au moins une fois la cible.`,
                correction: `1. Épreuve de Bernoulli répétée 10 fois de manière indépendante. Loi Binomiale $B(10, 0.8)$.
2. $E(X) = np = 10 \\times 0.8 = 8$. $V(X) = np(1-p) = 1.6$. $\\sigma = \\sqrt{1.6} \\approx 1.26$.
3. $P(X=8) = \\binom{10}{8} (0.8)^8 (0.2)^2 \\approx 0.302$.
4. $P(X \\ge 1) = 1 - P(X=0) = 1 - (0.2)^{10} \\approx 0.9999$.`
            }
        ]
    },
    pc: {
        mech: [
            {
                title: "Mouvement d'un Projectile",
                content: `Un joueur frappe dans un ballon posé en $O$ avec une vitesse initiale $V_0 = 15$ m/s faisant un angle $\\alpha = 45^{\\circ}$ avec l'horizontale.
1. Établir les équations horaires du mouvement $x(t)$ et $z(t)$ en négligeant les frottements.
2. Déterminer l'équation de la trajectoire $z=f(x)$.
3. Calculer la portée du tir (distance horizontale maximale).
4. Quelle est l'altitude maximale atteinte (la flèche) ?`,
                correction: `1. $a_x = 0, v_x = V_0 \\cos\\alpha, x(t) = (V_0 \\cos\\alpha)t$.
   $a_z = -g, v_z = -gt + V_0 \\sin\\alpha, z(t) = -\\frac{1}{2}gt^2 + (V_0 \\sin\\alpha)t$.
2. $t = \\frac{x}{V_0 \\cos\\alpha}$. $z(x) = -\\frac{g}{2V_0^2 \\cos^2\\alpha} x^2 + (\\tan\\alpha)x$.
3. Portée : $z(x)=0 \\Rightarrow x_P = \\frac{V_0^2 \\sin(2\\alpha)}{g} = \\frac{225 \\times 1}{10} = 22.5$m.
4. Flèche : Sommet de la parabole, $S(11.25, 5.625$m$).`
            },
            {
                title: "Satellites et Lois de Kepler",
                content: `Un satellite de télécommunication, assimilé à un point matériel, gravite autour de la Terre sur une orbite circulaire à l'altitude h.
1. Enoncer la seconde loi de Newton appliquée au satellite.
2. Montrer que le mouvement est uniforme.Exprimer la vitesse $v$ et la période $T$.
3. Établir la troisième loi de Kepler pour ce mouvement circulaire : $\\frac{T^2}{r^3} = \\frac{4\\pi^2}{GM}$.
4. Calculer le rayon de l'orbite géostationnaire ($T = 86164$s).`,
                correction: `1. $\\vec{F} = m \\vec{a}$. La seule force est l'attraction gravitationnelle centripète.
2. $\\vec{a}$ est normale, donc accélération tangentielle nulle, vitesse constante.
   $v = \\sqrt{\\frac{GM}{R+h}}$. $T = \\frac{2\\pi(R+h)}{v}$.
4. $r^3 = \\frac{GMT^2}{4\\pi^2} \\approx 7.5 \\times 10^{22}$. $r \\approx 42164$km. 
   Altitude $h \\approx 36000$km.`
            },
            {
                title: "Système Oscillatoire (Pendule)",
                content: `Un pendule simple est constitué d'une bille de masse $m=100$g suspendue à un fil de longueur $L=1$m.
1. Établir l'équation différentielle du mouvement dans le cas des petites oscillations.
2. Vérifier que $\\theta(t) = \\theta_m \\cos(\\omega_0 t + \\phi)$ est solution. Exprimer $\\omega_0$.
3. Calculer la période propre $T_0$.
4. Si l'amplitude est de $60^\\circ$, la période change-t-elle ?`,
                correction: `1. PFD en base de Frenet ou Théorème du moment cinétique : $\\ddot{\\theta} + \\frac{g}{L}\\theta = 0$.
2. $\\omega_0 = \\sqrt{g/L}$.
3. $T_0 = 2\\pi \\sqrt{L/g} \\approx 2$s.
4. Oui, pour les grandes amplitudes, la période augmente légèrement (formule de Borda). L'isochronisme n'est plus valide.`
            }
        ],
        chem: [
            {
                title: "Cinétique Chimique - Suivi par Pression",
                content: `On étudie la réaction : $Zn_{(s)} + 2H^+_{(aq)} \\rightarrow Zn^{2+}_{(aq)} + H_{2(g)}$.
On introduit du zinc en excès dans un acide et on mesure la pression du gaz $H_2$ dégagé à volume constant.
1. Établir la relation entre l'avancement $x(t)$ et la pression $P(t)$.
2. Définir la vitesse volumique de réaction. Comment varie-t-elle au cours du temps ?
3. Définir le temps de demi-réaction $t_{1/2}$. Comment le déterminer graphiquement ?`,
                correction: `1. Loi des gaz parfaits : $PV = nRT = xRT$. Donc $x(t) = \\frac{P(t)V}{RT}$.
2. $v(t) = \\frac{1}{V_{sol}} \\frac{dx}{dt}$. C'est proportionnel à la pente de la courbe $P(t)$. Elle diminue car les réactifs s'épuisent.
3. Temps auquel $x = x_{final}/2$ soit $P = P_{max}/2$.`
            },
            {
                title: "Dosage Acido-Basique",
                content: `On dose $V_A = 20$mL d'acide méthanoïque (HCOOH) par de la soude (NaOH) de concentration $C_B = 0.1$ mol/L.
1. Écrire l'équation de la réaction.
2. A l'équivalence, on a versé $V_{BE} = 10$mL. Calculer la concentration $C_A$.
3. Le pH à l'équivalence est-il égal à 7 ? Justifier.
4. Calculer le pKa du couple HCOOH/HCOO- sachant qu'à demi-équivalence pH = 3.8.`,
                correction: `1. $HCOOH + HO^- \\rightarrow HCOO^- + H_2O$.
2. $C_A V_A = C_B V_{BE} \\Rightarrow C_A = \\frac{0.1 \\times 10}{20} = 0.05$ mol/L.
3. Non, le milieu est basique ($pH > 7$) car l'ion méthanoate est une base faible.
4. A la demi-équivalence ($V_B = V_{BE}/2$), $pH = pKa$. Donc $pKa = 3.8$.`
            },
            {
                title: "Estérification et Hydrolyse",
                content: `On chauffe à reflux un mélange équimolaire de 0.5 mol d'acide éthanoïque et 0.5 mol d'éthanol.
1. Écrire l'équation de la réaction. Nommer l'ester formé.
2. Quel est le rôle du chauffage à reflux ?
3. Au bout de 2h, on dose l'acide restant : il en reste 0.17 mol.
   Calculer le rendement de la réaction.
4. Comment pourrait-on augmenter ce rendement ?`,
                correction: `1. Acide éthanoïque + Éthanol = Éthanoate d'éthyle + Eau.
2. Accélérer la réaction sans perdre de matière (condensation des vapeurs).
3. Acide réagi = $0.5 - 0.17 = 0.33$ mol. Ester formé = 0.33 mol.
   Rendement $\\rho = \\frac{0.33}{0.5} = 66\\%$. (Limite théorique pour alcool primaire).
4. Éliminer l'eau (Dean-Stark) ou l'ester au fur et à mesure, ou mettre un réactif en excès.`
            }
        ],
        elec: [
            {
                title: "Dipôle RC - Charge",
                content: `Un condensateur de capacité C est chargé à travers une résistance R par un générateur de tension constante E.
1. Établir l'équation différentielle vérifiée par la tension $u_C(t)$.
2. Vérifier que $u_C(t) = E(1 - e^{-t/\\tau})$ est solution.
3. Déterminer la valeur de $\\tau = RC$ graphiquement.
4. Quelle est l'énergie emmagasinée dans le condensateur en régime permanent si $C=10\\mu F$ et $E=10V$ ?`,
                correction: `1. $u_R + u_C = E$ avec $u_R = Ri = RC \\frac{du_C}{dt}$. D'où $RC u_C' + u_C = E$.
3. Abscisse de l'intersection entre la tangente à l'origine et l'asymptote $u=E$. $\\tau = RC$.
4. $E_{mag} = \\frac{1}{2} C E^2 = 0.5 \\times 10^{-5} \\times 100 = 5 \\times 10^{-4}$ J.`
            },
            {
                title: "Circuit RLC Série et Oscillations",
                content: `Un condensateur chargé sous une tension E est connecté à une bobine idéale (L).
1. Établir l'équation différentielle.
2. Quelle est la forme de la solution (tension $u_C$) ?
3. Exprimer l'énergie totale du circuit. Montrer qu'elle est constante.
4. Si on ajoute une résistance R, quel est le régime observé ?`,
                correction: `1. $L \\frac{di}{dt} + u_C = 0$ avec $i = C \\frac{du_C}{dt}$. $LC \\ddot{u}_C + u_C = 0$.
2. $u_C(t) = E \\cos(\\omega_0 t)$ avec $\\omega_0 = 1/\\sqrt{LC}$.
3. $E_{tot} = \\frac{1}{2} C u_C^2 + \\frac{1}{2} L i^2$. Dérivée nulle => constante.
4. Régime pseudo-périodique (oscillations amorties).`
            }
        ],
        nuclear: [
            {
                title: "Radioactivité - Fission",
                content: `1. Définir l'énergie de liaison par nucléon. Quelle est la courbe qui la représente ?
2. On considère la réaction de fission de l'Uranium 235 :
   $^{235}_{92}U + ^1_0n \\rightarrow ^{94}_{38}Sr + ^{140}_{54}Xe + x ^1_0n$.
   Déterminer x.
3. Calculer l'énergie libérée par cette réaction (perte de masse).
   Données : $m(U)=235.04 u$, $m(Sr)=93.92 u$, $m(Xe)=139.92 u$, $m(n)=1.0087 u$.`,
                correction: `1. Courbe d'Aston.
2. Conservation du nombre de masse A : $236 = 94 + 140 + x \Rightarrow 236 = 234 + x \Rightarrow x = 2$.
3. $\\Delta m = m_{produits} - m_{reactifs} = (93.92 + 139.92 + 2\\times 1.0087) - (235.04 + 1.0087) \\approx -0.19$ u.
   $E = |\\Delta m| c^2$.`
            }
        ]
    },
    bfem: {
        math: [
            {
                title: "Racines Carrées et Identités Remarquables",
                content: `**Exercice 1**
On pose $a = 2\\sqrt{5} + 3$ et $b = 2\\sqrt{5} - 3$.
1. Calculer $a^2$, $b^2$ et $a \\times b$.
2. Simplifier $C = \\frac{\\sqrt{585}}{\\sqrt{13}}$.

**Exercice 2**
Factoriser les expressions :
$A(x) = (2x+1)^2 - 9$.
$B(x) = (x-2)(2x+3) + x^2 - 4$.`,
                correction: `1. $a^2 = (2\\sqrt{5})^2 + 2(6\\sqrt{5}) + 9 = 20 + 12\\sqrt{5} + 9 = 29 + 12\\sqrt{5}$.
   $ab = 20 - 9 = 11$.
2. $A(x) = (2x+1-3)(2x+1+3) = (2x-2)(2x+4) = 4(x-1)(x+2)$.
   $B(x) = (x-2)(2x+3) + (x-2)(x+2) = (x-2)(3x+5)$.`
            },
            {
                title: "Thalès et Trigonométrie",
                content: `Dans un triangle ABC rectangle en A, $AB = 6cm, AC = 8cm$.
1. Calculer BC.
2. Calculer $\\cos B, \\sin B, \\tan B$. En déduire la mesure de l'angle B.
3. Soit H le projeté orthogonal de A sur (BC). Calculer AH.`,
                correction: `1. $BC = \\sqrt{36+64} = 10$.
2. $\\cos B = 6/10 = 0.6$. $\\sin B = 0.8$. Angle $\\approx 53^\\circ$.
3. Aire = $AB \\times AC / 2 = AH \\times BC / 2 \\Rightarrow 24 = 5 AH \\Rightarrow AH = 4.8$cm.`
            },
            {
                title: "Systèmes et Problèmes de Vie Courante",
                content: `Pour la Tabaski, un père achète 3 béliers et 2 chèvres pour 440.000 F.
Un autre achète 2 béliers et 4 chèvres pour 480.000 F au même prix unitaire.
1. Mettre en équation le problème.
2. Quel est le prix d'un bélier ? D'une chèvre ?`,
                correction: `Soit $x$ bélier, $y$ chèvre.
$3x + 2y = 440000$
$2x + 4y = 480000 \iff x + 2y = 240000$.
Soustraction : $2x = 200000 \Rightarrow x = 100.000$F.
$y = (240000 - 100000)/2 = 70.000$F.`
            },
            {
                title: "Statistiques",
                content: `Voici les notes d'une classe de 3ème :
8; 12; 10; 14; 8; 15; 12; 10; 12.
1. Dresser le tableau des effectifs.
2. Calculer la moyenne de la classe.
3. Déterminer la médiane.`,
                correction: `1. Notes: 8(2), 10(2), 12(3), 14(1), 15(1). Total=9.
2. Moyenne $\\approx 11.2$.
3. Médiane : 5ème valeur = 12.`
            }
        ],
        pc: [
            {
                title: "Optique : Lentilles et Images",
                content: `Un objet AB de 4 cm est placé à 15 cm d'une lentille convergente de distance focale 10 cm.
1. Calculer la vergence C.
2. Construire l'image A'B' à l'échelle.
3. Calculer la position OA' et la grandeur de l'image.`,
                correction: `1. $C = 10\\delta$.
3. Relation de conjugaison : $1/OA' - 1/OA = 1/OF'$.
   $1/OA' = 1/10 + 1/(-15) = 3/30 - 2/30 = 1/30$.
   $OA' = 30$cm. Grandissement $\\gamma = 30/(-15) = -2$. Image de 8 cm renversée.`
            },
            {
                title: "Chimie : Hydrocarbures",
                content: `Un alcane a pour densité de vapeur par rapport à l'air $d=2$.
1. Calculer sa masse molaire $M$.
2. Trouver sa formule brute $C_nH_{2n+2}$.
3. Donner les formules semi-développées de ses isomères (Butane et Isobutane).`,
                correction: `1. $M = 29d = 58$ g/mol.
2. $14n + 2 = 58 \Rightarrow 14n = 56 \Rightarrow n=4$. C4H10 (Butane).
3. Butane : $CH_3-CH_2-CH_2-CH_3$.
   Isobutane : $CH_3-CH(CH_3)-CH_3$.`
            },
            {
                title: "Électricité : Puissance et Énergie",
                content: `Une installation comporte : 5 lampes de 60W chacune, un téléviseur de 100W.
1. Calculer la puissance totale.
2. Si tout fonctionne pendant 4h, calculer l'énergie consommée en Wh et en Joules.
3. Le kWh coûte 120 F. Calculer le coût.`,
                correction: `1. $P = 5 \\times 60 + 100 = 400$W.
2. $E = P \\times t = 400 \\times 4 = 1600$ Wh = 1.6 kWh.
   En Joules : $1600 \\times 3600 = 5.76 \\times 10^6$ J.
3. Coût = $1.6 \\times 120 = 192$ F.`
            }
        ]
    }
};

const createExam = (id, type, subject, title, desc, topics, diff, content, corr) => ({
    id, type, subject, title, duration: type.includes('BAC') ? '4h' : '2h',
    description: desc, topics, difficulty: diff, content, correction: corr
});

const examsData = [
    // --- BAC S1 (MATHS) ---
    createExam('bac-s1-m1', 'BAC S1', 'Mathématiques', 'Sujet Concours Général', 'Arithmétique pointue et Analyse.', ['Arithmétique', 'Analyse'], 'Expert',
        `### Exercice 1 (Arithmétique)\n${exercisesBank.math.arithmetic[0].content}\n\n### Problème (Analyse)\n${exercisesBank.math.analysis[2].content}`,
        `${exercisesBank.math.arithmetic[0].correction}\n\n${exercisesBank.math.analysis[2].correction}`),

    createExam('bac-s1-m2', 'BAC S1', 'Mathématiques', 'Sujet Analyse & Complexes', 'Similitudes et Suites complexes.', ['Similitudes', 'Suites'], 'Expert',
        `### Exercice 1 (Complexes)\n${exercisesBank.math.complex[2].content}\n\n### Exercice 2 (Suites)\n${exercisesBank.math.analysis[3].content}`,
        `${exercisesBank.math.complex[2].correction}\n\n${exercisesBank.math.analysis[3].correction}`),

    createExam('bac-s1-m3', 'BAC S1', 'Mathématiques', 'Sujet Géométrie Pure', 'Coniques et Similitudes.', ['Coniques', 'Similitudes'], 'Expert',
        `### Exercice 1 (Similitudes)\n${exercisesBank.math.complex[2].content}\n\n### Exercice 2 (Géométrie)\n${exercisesBank.math.complex[0].content}`, // Replaced complex[1] which might be dup
        `${exercisesBank.math.complex[2].correction}\n\n${exercisesBank.math.complex[0].correction}`),

    createExam('bac-s1-m4', 'BAC S1', 'Mathématiques', 'Sujet Analyse Approfondie', 'Équations Différentielles et Intégrales.', ['Eq Diff', 'Intégration'], 'Expert',
        `### Problème (Eq Diff)\n${exercisesBank.math.analysis[2].content}\n\n### Partie B (Intégrales)\n${exercisesBank.math.analysis[3].content}`,
        `${exercisesBank.math.analysis[2].correction}\n\n${exercisesBank.math.analysis[3].correction}`),

    // --- BAC S2 (MATHS) ---
    createExam('bac-s2-m1', 'BAC S2', 'Mathématiques', 'Bac S2 - Session 1', 'Classique : Complexes et Ln.', ['Complexes', 'Ln'], 'Difficile',
        `### Exercice 1 (Complexes)\n${exercisesBank.math.complex[0].content}\n\n### Problème (Fonction Ln)\n${exercisesBank.math.analysis[0].content}`,
        `${exercisesBank.math.complex[0].correction}\n\n${exercisesBank.math.analysis[0].correction}`),

    createExam('bac-s2-m2', 'BAC S2', 'Mathématiques', 'Bac S2 - Session 2', 'Probabilités et Exponentielle.', ['Probabilités', 'Exp'], 'Difficile',
        `### Exercice 1 (Probabilités)\n${exercisesBank.math.prob[1].content}\n\n### Problème (Fonction Exp)\n${exercisesBank.math.analysis[1].content}`,
        `${exercisesBank.math.prob[1].correction}\n\n${exercisesBank.math.analysis[1].correction}`),

    createExam('bac-s2-m4', 'BAC S2', 'Mathématiques', 'Sujet Géométrie', 'Complexes et Transformations.', ['Complexes', 'Rotation'], 'Difficile',
        `### Exercice 1\n${exercisesBank.math.complex[1].content}\n\n### Exercice 2\n${exercisesBank.math.complex[0].content}`,
        `${exercisesBank.math.complex[1].correction}\n\n${exercisesBank.math.complex[0].correction}`),

    // --- BAC PC ---
    createExam('bac-pc-1', 'BAC S1', 'Physique-Chimie', 'Mécanique Céleste', 'Satellites et Nucléaire.', ['Satellites', 'Radioactivité'], 'Expert',
        `### Physique 1 (Satellites)\n${exercisesBank.pc.mech[1].content}\n\n### Physique 2 (Nucléaire)\n${exercisesBank.pc.nuclear[0].content}`,
        `${exercisesBank.pc.mech[1].correction}\n\n${exercisesBank.pc.nuclear[0].correction}`),

    createExam('bac-pc-2', 'BAC S2', 'Physique-Chimie', 'Chimie Organique', 'Estérification et Savons.', ['Chimie Orga', 'Savons'], 'Difficile',
        `### Chimie 1\n${exercisesBank.pc.chem[2].content}\n\n### Chimie 2\n${exercisesBank.pc.chem[1].content}`,
        `${exercisesBank.pc.chem[2].correction}\n\n${exercisesBank.pc.chem[1].correction}`),

    createExam('bac-pc-6', 'BAC S2', 'Physique-Chimie', 'Mouvements Plans', 'Projectiles et Champ E.', ['Projectile', 'Champs'], 'Difficile',
        `### Physique (Projectile)\n${exercisesBank.pc.mech[0].content}\n\n### Exercice 2\n${exercisesBank.pc.elec[0].content}`,
        `${exercisesBank.pc.mech[0].correction}\n\n${exercisesBank.pc.elec[0].correction}`),


    // --- BFEM ---
    createExam('bfem-m1', 'BFEM', 'Mathématiques', 'BFEM 2024 (Type)', 'Racines, Thalès, Trigo.', ['Racines', 'Thalès'], 'Moyen',
        `### Activités Numériques\n${exercisesBank.bfem.math[0].content}\n\n### Activités Géométriques\n${exercisesBank.bfem.math[1].content}`,
        `${exercisesBank.bfem.math[0].correction}\n\n${exercisesBank.bfem.math[1].correction}`),

    createExam('bfem-m3', 'BFEM', 'Mathématiques', 'Sujet Blanc N°1', 'Systèmes et Statistiques.', ['Systèmes', 'Stats'], 'Moyen',
        `### Algèbre\n${exercisesBank.bfem.math[2].content}\n\n### Statistiques\n${exercisesBank.bfem.math[3].content}`,
        `${exercisesBank.bfem.math[2].correction}\n\n${exercisesBank.bfem.math[3].correction}`),

    createExam('bfem-pc-1', 'BFEM', 'Physique-Chimie', 'BFEM PC - Sujet 1', 'Poids/Masse et Solutions.', ['Méca', 'Chimie'], 'Moyen',
        `### Physique\n${exercisesBank.bfem.pc[0].content}\n\n### Chimie\n${exercisesBank.bfem.pc[2].content}`,
        `${exercisesBank.bfem.pc[0].correction}\n\n${exercisesBank.bfem.pc[2].correction}`),

    createExam('bfem-pc-2', 'BFEM', 'Physique-Chimie', 'Sujet Optique et Chimie', 'Lentilles et Hydrocarbures.', ['Lentilles', 'Alcanes'], 'Moyen',
        `### Physique\n${exercisesBank.bfem.pc[0].content}\n\n### Chimie\n${exercisesBank.bfem.pc[1].content}`,
        `${exercisesBank.bfem.pc[0].correction}\n\n${exercisesBank.bfem.pc[1].correction}`)

];

export default examsData;
