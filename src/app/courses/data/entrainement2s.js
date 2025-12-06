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
                <h3>Exercice 1 : Interaction électrostatique (Classique)</h3>
                <p>Deux boules conductrices ponctuelles A et B, portant les charges $q_A = 2 \\cdot 10^{-8} C$ et $q_B = -6 \\cdot 10^{-8} C$, sont placées dans le vide à une distance $d = 10 cm$.</p>
                <ol>
                    <li>Calculer l'intensité de la force électrostatique qui s'exerce entre elles. ($k = 9 \\cdot 10^9 SI$)</li>
                    <li>S'agit-il d'une force attractive ou répulsive ? Justifier.</li>
                    <li>On met les deux boules en contact, puis on les sépare à nouveau à la distance $d$. 
                        <br>a) Quelle est la nouvelle charge $q'$ de chaque boule ?
                        <br>b) Calculer la nouvelle force $F'$.</li>
                </ol>

                <details class="correction-box">
                    <summary>Voir la Correction Détaillée</summary>
                    <div class="correction-content">
                        <h4>1. Calcul de la force F</h4>
                        <p>D'après la loi de Coulomb : $F = k \\frac{|q_A \\cdot q_B|}{d^2}$</p>
                        <p>Attention aux unités : $d = 10 cm = 0,1 m$.</p>
                        <p>$$F = 9\\cdot 10^9 \\times \\frac{|2\\cdot 10^{-8} \\times (-6\\cdot 10^{-8})|}{(0,1)^2}$$</p>
                        <p>$$F = 9\\cdot 10^9 \\times \\frac{12\\cdot 10^{-16}}{10^{-2}} = 108 \\cdot 10^{-5} N = 1,08 \\cdot 10^{-3} N$$</p>
                        
                        <h4>2. Nature de la force</h4>
                        <p>Les charges sont de signes contraires ($q_A > 0$ et $q_B < 0$). La force est donc <strong>ATTRACTIVE</strong>.</p>
                        
                        <h4>3. Mise en contact</h4>
                        <p>a) Lors du contact, il y a transfert d'électrons jusqu'à l'équilibre. La charge totale se conserve et se répartit équitablement (boules identiques).</p>
                        <p>$$q' = \\frac{q_A + q_B}{2} = \\frac{2\\cdot 10^{-8} - 6\\cdot 10^{-8}}{2} = -2\\cdot 10^{-8} C$$</p>
                        
                        <p>b) Nouvelle force F' :</p>
                        <p>$$F' = k \\frac{|q'|^2}{d^2} = 9\\cdot 10^9 \\times \\frac{(2\\cdot 10^{-8})^2}{(0,1)^2}$$</p>
                        <p>$$F' = 9\\cdot 10^9 \\times \\frac{4\\cdot 10^{-16}}{10^{-2}} = 36 \\cdot 10^{-5} N = 3,6 \\cdot 10^{-4} N$$</p>
                        <p>Comme les charges sont maintenant identiques (négatives), la force devient <strong>RÉPULSIVE</strong>.</p>
                    </div>
                </details>

                <hr class="my-8 border-gray-700">

                <h3>Exercice 2 : Pendule Électrostatique</h3>
                <p>Une petite boule de masse $m=0,1g$ portant une charge $q$ est suspendue à un fil isolant. On approche une tige chargée positivement. Le fil s'écarte de la verticale d'un angle $\\alpha = 10^\\circ$ vers la tige.</p>
                <ol>
                    <li>Quel est le signe de la charge $q$ ?</li>
                    <li>Faire le bilan des forces s'exerçant sur la boule à l'équilibre.</li>
                    <li>Déterminer l'intensité de la force électrique $F_e$ subie par la boule. ($g=10 N/kg$)</li>
                </ol>

                <details class="correction-box">
                    <summary>Voir la Correction Détaillée</summary>
                    <div class="correction-content">
                        <h4>1. Signe de la charge</h4>
                        <p>La boule est attirée par la tige positive. Les charges de signes contraires s'attirent. Donc <strong>$q$ est négative</strong>.</p>

                        <h4>2. Bilan des forces</h4>
                        <ul>
                            <li>Le Poids $\\vec{P}$ (vertical vers le bas).</li>
                            <li>La Tension du fil $\\vec{T}$ (selon le fil).</li>
                            <li>La Force électrique $\\vec{F_e}$ (horizontale, vers la tige).</li>
                        </ul>

                        <h4>3. Calcul de Fe</h4>
                        <p>À l'équilibre : $\\vec{P} + \\vec{T} + \\vec{F_e} = \\vec{0}$.</p>
                        <p>Par projection ou triangle des forces, on a : $\\tan(\\alpha) = \\frac{F_e}{P}$.</p>
                        <p>Soit $F_e = P \\times \\tan(\\alpha) = m \\cdot g \\cdot \\tan(\\alpha)$.</p>
                        <p>Application numérique :</p>
                        <p>$m = 0,1 g = 10^{-4} kg$</p>
                        <p>$$F_e = 10^{-4} \\times 10 \\times \\tan(10^\\circ) \\approx 10^{-3} \\times 0,176 = 1,76 \\cdot 10^{-4} N$$</p>
                    </div>
                </details>
            `,
            summary: [
                "<strong>Loi de Coulomb</strong> : $F = k \\frac{|q_A q_B|}{d^2}$.",
                "<strong>Force attractive</strong> : Charges de signes contraires ($+-$).",
                "<strong>Force répulsive</strong> : Charges de même signe ($++$ ou $--$).",
                "<strong>Equilibre</strong> : La somme vectorielle des forces est nulle (Triangle des forces)."
            ],
            exercises: [] // Intentionally empty as the content IS the exercises
        },
        {
            id: 'exo-phys-03',
            part: 'Physique : Électricité',
            title: 'Exercices P3-P4 : Intensité et Tension',
            story: "Applications concrètes des lois des nœuds et des mailles. Indispensable pour réussir tout problème de circuit.",
            content: `
                <h3>Exercice 1 : Loi des Nœuds</h3>
                <p>On considère un nœud A où arrivent les courants $I_1=2A$ et $I_2=3A$, et d'où partent les courants $I_3$, $I_4=1A$ et $I_5=2A$.</p>
                <ol>
                    <li>Énoncer la loi des nœuds.</li>
                    <li>Calculer l'intensité $I_3$.</li>
                </ol>

                <details class="correction-box">
                    <summary>Correction</summary>
                    <div class="correction-content">
                        <p><strong>1. Loi :</strong> La somme des intensités des courants arrivant à un nœud est égale à la somme des intensités des courants qui en partent.</p>
                        <p><strong>2. Calcul :</strong></p>
                        <p>Arrivée : $I_1 + I_2 = 2 + 3 = 5A$.</p>
                        <p>Départ : $I_3 + I_4 + I_5 = I_3 + 1 + 2 = I_3 + 3A$.</p>
                        <p>Égalité : $5 = I_3 + 3 \\Rightarrow I_3 = 2A$.</p>
                    </div>
                </details>
            `,
            summary: [
                "<strong>Loi des Nœuds</strong> : Somme I entrants = Somme I sortants.",
                "<strong>Loi des Mailles</strong> : La somme algébrique des tensions dans une maille est nulle.",
                "<strong>Série</strong> : Même intensité.",
                "<strong>Dérivation</strong> : Même tension."
            ],
            exercises: []
        },

        // ==========================================
        // CHIMIE - SÉRIE 1 à 4 (Générale)
        // ==========================================
        {
            id: 'exo-chim-04',
            part: 'Chimie : Quantitative',
            title: 'Exercices C4 : La Mole (Calculs)',
            story: "Savoir jongler entre masse, volume et quantité de matière est LA compétence clé en chimie.",
            content: `
                <h3>Exercice 1 : Le sucre</h3>
                <p>Le sucre de table est du saccharose de formule $C_{12}H_{22}O_{11}$.</p>
                <ol>
                    <li>Calculer sa masse molaire moléculaire $M$. (Données : C=12, H=1, O=16 g/mol)</li>
                    <li>Quelle est la quantité de matière (en mol) dans un morceau de sucre de 6 g ?</li>
                    <li>Combien de molécules de saccharose cela représente-t-il ? ($N_A = 6,02 \\cdot 10^{23}$)</li>
                </ol>

                <details class="correction-box">
                    <summary>Correction Détaillée</summary>
                    <div class="correction-content">
                        <h4>1. Masse Molaire</h4>
                        <p>$$M = 12 \\times M(C) + 22 \\times M(H) + 11 \\times M(O)$$</p>
                        <p>$$M = 12(12) + 22(1) + 11(16) = 144 + 22 + 176 = 342 \\text{ g/mol}$$</p>

                        <h4>2. Quantité de matière</h4>
                        <p>$$n = \\frac{m}{M} = \\frac{6}{342} \\approx 0,0175 \\text{ mol}$$</p>

                        <h4>3. Nombre de molécules</h4>
                        <p>$$N = n \\times N_A = 0,0175 \\times 6,02 \\cdot 10^{23} \\approx 1,05 \\cdot 10^{22} \\text{ molécules}$$</p>
                    </div>
                </details>

                <hr class="my-8 border-gray-700">

                <h3>Exercice 2 : Volume d'un gaz</h3>
                <p>Un flacon contient 0,5 L de dioxygène ($O_2$) à 0°C et 1 atm.</p>
                <ol>
                    <li>Quelle est la quantité de matière de gaz ? ($V_m = 22,4 L/mol$)</li>
                    <li>Quelle est la masse de ce gaz ?</li>
                </ol>

                <details class="correction-box">
                    <summary>Correction</summary>
                    <div class="correction-content">
                        <h4>1. Nombre de moles</h4>
                        <p>$$n = \\frac{V}{V_m} = \\frac{0,5}{22,4} \\approx 0,022 \\text{ mol}$$</p>

                        <h4>2. Masse</h4>
                        <p>$M(O_2) = 2 \\times 16 = 32 \\text{ g/mol}$.</p>
                        <p>$$m = n \\times M = 0,022 \\times 32 \\approx 0,71 \\text{ g}$$</p>
                    </div>
                </details>
            `,
            summary: [
                "<strong>Quantité de matière n</strong> : En mol.",
                "<strong>Masse molaire M</strong> : En g/mol (Tableau Périodique).",
                "<strong>Solide/Liquide</strong> : $n = m / M$.",
                "<strong>Gaz</strong> : $n = V / V_m$."
            ],
            exercises: []
        },

        // ==========================================
        // PHYSIQUE - MÉCANIQUE
        // ==========================================
        {
            id: 'exo-phys-10',
            part: 'Physique : Mécanique',
            title: 'Exercices P10 : Poids et Masse',
            story: "Ne confondez plus P et m. Exercices sur la relation P=mg et l'équilibre.",
            content: `
                <h3>Exercice 1 : Sur la Lune</h3>
                <p>Un objet pèse $98 N$ sur Terre ($g_T = 9,8 N/kg$).</p>
                <ol>
                    <li>Quelle est sa masse ?</li>
                    <li>Quel serait son poids sur la Lune où $g_L = 1,6 N/kg$ ?</li>
                    <li>Quelle serait sa masse sur la Lune ?</li>
                </ol>

                <details class="correction-box">
                    <summary>Correction</summary>
                    <div class="correction-content">
                        <p><strong>1. Masse :</strong> $m = P_T / g_T = 98 / 9,8 = 10 \\text{ kg}$.</p>
                        <p><strong>2. Poids Lune :</strong> $P_L = m \\times g_L = 10 \\times 1,6 = 16 \\text{ N}$.</p>
                        <p><strong>3. Masse Lune :</strong> La masse ne change pas. Elle reste de <strong>10 kg</strong>.</p>
                    </div>
                </details>
            `,
            summary: [
                "<strong>Poids (P)</strong> : Force d'attraction gravitationnelle (en N).",
                "<strong>Masse (m)</strong> : Quantité de matière (en kg). Invariable.",
                "<strong>Relation</strong> : $P = m \\times g$.",
                "<strong>g</strong> : Intensité de pesanteur (dépend du lieu, ex: Terre vs Lune)."
            ],
            exercises: []
        }
    ]
};
