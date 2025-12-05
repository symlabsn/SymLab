export const math6eData = {
    id: 'math-6e',
    title: 'Mathématiques 6ème',
    chapters: [
        // ==========================================
        // PARTIE 1 : ACTIVITÉS NUMÉRIQUES
        // ==========================================
        {
            id: 'chap-num-1',
            title: '1. Nombres Décimaux Arithmétiques',
            content: `
                <h3>1. Introduction : L'Univers des Nombres</h3>
                <p>Imaginez que les nombres sont comme des distances. Les nombres entiers (1, 2, 3...) sont des pas de géants. Mais parfois, on a besoin de faire de plus petits pas, des pas de fourmis. C'est là que les nombres décimaux entrent en jeu !</p>
                <div class="analogy">
                    <strong>🌍 Analogie : Le Marché et la Monnaie</strong><br>
                    Pensez à l'argent. Vous avez des billets de 1000F (Nombres entiers). Mais pour acheter un bonbon, vous avez besoin de pièces plus petites. Les décimaux sont comme la petite monnaie qui permet d'être précis au centime près.
                </div>

                <h3>2. La Virgule : La Frontière Magique</h3>
                <p>Un nombre décimal est composé de deux mondes séparés par une virgule :</p>
                <ul>
                    <li><strong>La Partie Entière</strong> (à gauche) : Le monde des grands objets (Unités, Dizaines, Centaines...)</li>
                    <li><strong>La Partie Décimale</strong> (à droite) : Le monde des fragments (Dixièmes, Centièmes, Millièmes...)</li>
                </ul>

                <h3>3. Écriture et Lecture</h3>
                <p>Prenons le nombre <strong>12,345</strong>.</p>
                <ul>
                    <li>12 est la partie entière.</li>
                    <li>0,345 est la partie décimale.</li>
                </ul>
                <p>On peut l'écrire sous forme de fraction décimale : 12345 / 1000.</p>
            `,
            exercises: [
                {
                    id: 'ex-1',
                    question: "Dans le nombre 45,67, que représente le chiffre 6 ?",
                    options: ["Les unités", "Les dizaines", "Les dixièmes", "Les centièmes"],
                    correctAnswer: 2,
                    explanation: "Le premier chiffre après la virgule représente les dixièmes."
                },
                {
                    id: 'ex-2',
                    question: "Quelle est l'écriture fractionnaire de 0,5 ?",
                    options: ["5/10", "1/5", "5/100", "50/1"],
                    correctAnswer: 0,
                    explanation: "0,5 c'est 5 dixièmes, donc 5/10."
                }
            ]
        },
        {
            id: 'chap-num-2',
            title: '2. Addition de Deux Nombres Décimaux Arithmétiques',
            content: `
                <h3>1. Le Secret de l'Alignement</h3>
                <p>Pour additionner des nombres décimaux, la règle d'or est simple : <strong>Alignez les virgules !</strong></p>
                <div class="analogy">
                    <strong>🎖 Analogie : Le Défilé Militaire</strong><br>
                    Imaginez une armée. Les soldats doivent être parfaitement alignés : les unités sous les unités, les dixièmes sous les dixièmes. La virgule est le drapeau que tout le monde doit suivre. Si vous décalez les virgules, c'est le chaos !
                </div>

                <h3>2. La Technique</h3>
                <ol>
                    <li>Écrivez les nombres l'un sous l'autre en alignant les virgules verticalement.</li>
                    <li>Vous pouvez ajouter des zéros "inutiles" à droite pour avoir le même nombre de chiffres après la virgule.</li>
                    <li>Calculez comme une addition normale.</li>
                    <li>N'oubliez pas de descendre la virgule dans le résultat !</li>
                </ol>
            `,
            exercises: [
                {
                    id: 'ex-add-1',
                    question: "Combien font 12,5 + 3,75 ?",
                    options: ["15,80", "16,25", "49,5", "15,25"],
                    correctAnswer: 1,
                    explanation: "On pose : 12,50 + 3,75. 0+5=5, 5+7=12 (je retiens 1), 2+3+1=6, 1+0=1. Résultat : 16,25."
                }
            ]
        },
        {
            id: 'chap-num-3',
            title: '3. Soustraction de Deux Nombres Décimaux Arithmétiques',
            content: `
                <h3>1. Combler le vide</h3>
                <p>La soustraction fonctionne comme l'addition. L'alignement est crucial.</p>
                <div class="analogy">
                    <strong>🛒 Analogie : Le Rendu de Monnaie</strong><br>
                    Si vous payez un article de 2,50€ avec un billet de 10€, la caissière calcule la différence. Elle doit savoir exactement combien de centimes et combien d'euros rendre. Elle ne mélange pas les euros et les centimes !
                </div>

                <h3>2. Attention aux Retenues !</h3>
                <p>Quand on soustrait, si le chiffre du haut est plus petit, on doit "casser" une unité du rang supérieur. N'oubliez jamais d'ajouter des zéros pour faciliter le calcul : 10 - 2,5 se pose 10,0 - 2,5.</p>
            `,
            exercises: [
                {
                    id: 'ex-sub-1',
                    question: "Calculez 10 - 3,5",
                    options: ["7,5", "6,5", "13,5", "6,0"],
                    correctAnswer: 1,
                    explanation: "On pose 10,0 - 3,5. 10 - 5 = 5. On descend la virgule. 10 - 4 = 6. Résultat : 6,5."
                }
            ]
        },
        {
            id: 'chap-num-4',
            title: '4. Rangement des Nombres Décimaux Arithmétiques',
            content: `
                <h3>1. Qui est le plus grand ?</h3>
                <p>Pour comparer deux nombres décimaux :</p>
                <ol>
                    <li>D'abord, comparez les parties entières. (12,5 > 9,9 car 12 > 9)</li>
                    <li>Si les parties entières sont égales, comparez les parties décimales chiffre par chiffre, de gauche à droite.</li>
                </ol>

                <div class="analogy">
                    <strong>⚖️ Analogie : La Pesée</strong><br>
                    Imaginez une balance. On regarde d'abord les gros poids (partie entière). S'ils sont pareils, on regarde ensuite les petits poids (dixièmes), puis les plumes (centièmes). Attention ! 12,19 n'est PAS plus grand que 12,5 juste parce que 19 > 5. En réalité, 12,5 c'est 12,50 ! Et 50 > 19.
                </div>
            `,
            exercises: [
                {
                    id: 'ex-rang-1',
                    question: "Quel nombre est le plus grand : 4,5 ou 4,12 ?",
                    options: ["4,12", "4,5", "Ils sont égaux", "On ne peut pas savoir"],
                    correctAnswer: 1,
                    explanation: "Comparez chiffre par chiffre : 4 = 4. Ensuite les dixièmes : 5 > 1. Donc 4,5 > 4,12."
                }
            ]
        },
        {
            id: 'chap-num-5',
            title: '5. Multiplication de Nombres Décimaux Arithmétiques',
            content: `
                <h3>1. Ignorer la virgule... pour un instant</h3>
                <p>Pour multiplier, oubliez les virgules au début ! Faites le calcul comme si c'étaient des nombres entiers.</p>
                
                <h3>2. Le retour de la virgule</h3>
                <p>Une fois le calcul fini, comptez combien il y a de chiffres après la virgule AU TOTAL dans les deux nombres de départ. Placez la virgule dans le résultat pour avoir ce même nombre de chiffres.</p>

                <div class="analogy">
                    <strong>🔍 Analogie : La Loupe</strong><br>
                    Multiplier, c'est comme zoomer. Si vous avez un zoom x10 sur l'un et x100 sur l'autre, votre image finale sera zoomée x1000. La virgule se déplace en fonction de tous les zooms cumulés.
                </div>
            `,
            exercises: [
                {
                    id: 'ex-mul-1',
                    question: "2,5 x 0,4 = ?",
                    options: ["10", "1", "0,1", "100"],
                    correctAnswer: 1,
                    explanation: "25 x 4 = 100. Il y a deux chiffres après la virgule au total (5 et 4). On décale la virgule de 2 rangs gauche : 1,00 soit 1."
                }
            ]
        },
        {
            id: 'chap-num-6',
            title: '6. Division des Nombres Décimaux Arithmétiques',
            content: `
                <h3>1. Division d'un décimal par un entier</h3>
                <p>On pose la division normalement. Quand on abaisse le premier chiffre décimal (les dixièmes), on place aussitôt une virgule au quotient.</p>

                <h3>2. Division par 10, 100, 1000</h3>
                <div class="analogy">
                    <strong>📉 Analogie : Le Rétrécissement</strong><br>
                    Diviser par 10, c'est rendre le nombre 10 fois plus petit. La virgule "saute" d'un rang vers la gauche.
                    <br>Exemple : 45,6 ÷ 10 = 4,56.
                </div>
            `,
            exercises: [
                {
                    id: 'ex-div-1',
                    question: "15,5 ÷ 5 = ?",
                    options: ["3,5", "3,1", "3,05", "31"],
                    correctAnswer: 1,
                    explanation: "15 ÷ 5 = 3. On met la virgule. 5 ÷ 5 = 1. Résultat : 3,1."
                }
            ]
        },
        {
            id: 'chap-num-7',
            title: '7. Organisation d\'un Calcul',
            content: `
                <h3>1. Les Priorités Opératoires (PEMDAS)</h3>
                <p>Dans un calcul complexe, c'est la loi de la jungle, mais il y a des règles strictes !</p>
                <ol>
                    <li><strong>P</strong>arenthèses : Les VIP, on s'occupe d'eux en premier.</li>
                    <li><strong>E</strong>xposants (puissances).</li>
                    <li><strong>M</strong>ultiplications et <strong>D</strong>ivisions (de gauche à droite).</li>
                    <li><strong>A</strong>dditions et <strong>S</strong>oustractions (de gauche à droite).</li>
                </ol>

                <div class="analogy">
                    <strong>🚦 Analogie : Le Code de la Route</strong><br>
                    Les parenthèses sont comme les ambulances avec sirène : priorité absolue ! Les multiplications sont comme les camions, prioritaires sur les voitures (additions). Si vous ne respectez pas les priorités, c'est l'accident de calcul !
                </div>
            `,
            exercises: [
                {
                    id: 'ex-org-1',
                    question: "Calculez : 2 + 3 x 4",
                    options: ["20", "14", "10", "24"],
                    correctAnswer: 1,
                    explanation: "La multiplication est prioritaire. 3 x 4 = 12. Puis 2 + 12 = 14."
                }
            ]
        },
        {
            id: 'chap-num-8',
            title: '8. Proportionnalité',
            content: `
                <h3>1. C'est quoi être proportionnel ?</h3>
                <p>Deux grandeurs sont proportionnelles si on peut passer de l'une à l'autre en multipliant toujours par le même nombre (le coefficient de proportionnalité).</p>

                <div class="analogy">
                    <strong>🥘 Analogie : La Recette de Cuisine</strong><br>
                    Si une recette de thiéboudienne pour 4 personnes demande 2kg de riz, pour 8 personnes (le double), il faudra 4kg de riz (le double). C'est proportionnel ! Si vous mettez 10kg de riz, ce n'est plus la même recette !
                </div>

                <h3>2. Le Tableau de Proportionnalité</h3>
                <p>C'est un outil magique pour résoudre les problèmes. On utilise souvent la "règle de trois" ou le "produit en croix".</p>
            `,
            exercises: [
                {
                    id: 'ex-prop-1',
                    question: "Si 3 stylos coûtent 1500F, combien coûtent 5 stylos ?",
                    options: ["2000F", "2500F", "3000F", "5000F"],
                    correctAnswer: 1,
                    explanation: "1 stylo coûte 1500 ÷ 3 = 500F. Donc 5 stylos coûtent 5 x 500 = 2500F."
                }
            ]
        },
        {
            id: 'chap-num-9',
            title: '9. Nombres Décimaux Relatifs',
            content: `
                <h3>1. Au-delà du Zéro</h3>
                <p>Jusqu'ici, 0 était le plus petit nombre. Mais il existe un monde "en dessous" de zéro ! Ce sont les nombres négatifs.</p>
                <ul>
                    <li>Nombres positifs : +1, +2, +12,5 (Le signe + est souvent invisible)</li>
                    <li>Nombres négatifs : -1, -5, -20 (Le signe - est obligatoire)</li>
                </ul>

                <div class="analogy">
                    <strong>🌡 Analogie : Le Thermomètre et l'Ascenseur</strong><br>
                    Imaginez un immeuble avec des sous-sols. Le rez-de-chaussée est le 0. Le 3ème étage est +3. Le 2ème sous-sol est -2.
                    <br>Ou la température : quand il gèle, il fait -5°C. C'est plus froid que 0°C !
                </div>
            `,
            exercises: [
                {
                    id: 'ex-rel-1',
                    question: "Quel nombre est le plus petit : -5 ou -2 ?",
                    options: ["-5", "-2", "Ils sont égaux", "0"],
                    correctAnswer: 0,
                    explanation: "Dans les nombres négatifs, celui qui a la plus grande distance à zéro est le plus petit (le plus froid). -5 est plus bas que -2."
                }
            ]
        },
        {
            id: 'chap-num-10',
            title: '10. Repérage sur la Droite et le Plan',
            content: `
                <h3>1. La Droite Graduée</h3>
                <p>Chaque nombre relatif a une adresse unique sur une droite graduée. L'origine est 0.</p>
                
                <h3>2. Le Repère Orthogonal (Le Plan)</h3>
                <p>Pour se repérer sur une surface (2D), on a besoin de deux nombres :</p>
                <ul>
                    <li>L'abscisse (axe horizontal x)</li>
                    <li>L'ordonnée (axe vertical y)</li>
                </ul>
                <p>On note les coordonnées : (x ; y)</p>

                <div class="analogy">
                    <strong>📍 Analogie : Le GPS et le Cinéma</strong><br>
                    Pour trouver votre place au cinéma, vous avez besoin du numéro de la rangée (x) et du numéro du siège (y). Avec un seul numéro, vous êtes perdu !
                    <br>Dans Dakar, c'est comme donner l'intersection de deux rues pour localiser un magasin.
                </div>
            `,
            exercises: [
                {
                    id: 'ex-rep-1',
                    question: "Dans les coordonnées (3 ; -2), que représente -2 ?",
                    options: ["L'abscisse", "L'ordonnée", "L'origine", "La distance"],
                    correctAnswer: 1,
                    explanation: "Les coordonnées sont toujours dans l'ordre (Abscisse ; Ordonnée). Donc 3 est l'abscisse, -2 est l'ordonnée."
                }
            ]
        },

        // ==========================================
        // PARTIE 2 : ACTIVITÉS GÉOMÉTRIQUES
        // ==========================================
        {
            id: 'chap-geo-1',
            title: '11. Introduction à la Géométrie',
            content: `
                <h3>1. Les Briques de l'Univers</h3>
                <p>La géométrie, c'est l'art de mesurer la Terre. Tout commence par des éléments simples :</p>
                <ul>
                    <li><strong>Le Point :</strong> Une position exacte, sans taille. Comme une étoile lointaine dans le ciel. Notation : A, B.</li>
                    <li><strong>La Droite :</strong> Une ligne infinie qui n'a ni début ni fin. Notation : (d) ou (AB).</li>
                    <li><strong>Le Segment :</strong> Un morceau de droite délimité par deux points. Notation : [AB].</li>
                    <li><strong>La Demi-droite :</strong> Une droite qui a un début mais pas de fin. Notation : [AB).</li>
                </ul>

                <div class="analogy">
                    <strong>🏗 Analogie : Le Fil et les Perles</strong><br>
                    Imaginez un collier de perles infiniment long.
                    <br>• Une perle est un <strong>point</strong>.
                    <br>• Le fil qui traverse tout est la <strong>droite</strong>.
                    <br>• Si vous coupez le fil entre deux perles, vous avez un <strong>segment</strong>.
                    <br>• Le rayon laser d'un pointeur part du stylo (origine) et va à l'infini : c'est une <strong>demi-droite</strong>.
                </div>
            `,
            exercises: [
                {
                    id: 'ex-geo-1',
                    question: "Quelle notation désigne une droite passant par A et B ?",
                    options: ["[AB]", "(AB)", "[AB)", "AB"],
                    correctAnswer: 1,
                    explanation: "Les parenthèses indicate une droite (infinie). Les crochets indiquent un segment (fini)."
                },
                {
                    id: 'ex-geo-2',
                    question: "Combien de droites passent par deux points distincts ?",
                    options: ["Aucune", "Une seule", "Deux", "Une infinité"],
                    correctAnswer: 1,
                    explanation: "C'est une règle d'or : par deux points, il ne passe qu'une seule et unique droite."
                }
            ]
        },
        {
            id: 'chap-geo-2',
            title: '12. Le Cercle',
            content: `
                <h3>1. La Ronde Parfaite</h3>
                <p>Un cercle est l'ensemble de tous les points situés à la même distance d'un point central appelé le <strong>centre</strong>. Cette distance est le <strong>rayon</strong>.</p>
                
                <h3>2. Vocabulaire Essentiel</h3>
                <ul>
                    <li><strong>Centre (O) :</strong> Le point au milieu.</li>
                    <li><strong>Rayon (R) :</strong> La distance du centre au bord.</li>
                    <li><strong>Diamètre (D) :</strong> La largeur maximale du cercle (D = 2 x R).</li>
                    <li><strong>Corde :</strong> Un segment reliant deux points du cercle. Le diamètre est la plus longue corde.</li>
                </ul>

                <div class="analogy">
                    <strong>🐐 Analogie : La Chèvre au Piquet</strong><br>
                    Imaginez une chèvre attachée à un piquet par une corde tendue. Si elle tourne tout autour du piquet en gardant la corde tendue, elle dessine un <strong>cercle</strong> au sol.
                    <br>• Le piquet est le <strong>centre</strong>.
                    <br>• La longueur de la corde est le <strong>rayon</strong>.
                </div>
            `,
            exercises: [
                {
                    id: 'ex-cercle-1',
                    question: "Si le rayon d'un cercle est de 5 cm, quel est son diamètre ?",
                    options: ["2,5 cm", "5 cm", "10 cm", "25 cm"],
                    correctAnswer: 2,
                    explanation: "Le diamètre est toujours le double du rayon. 5 x 2 = 10 cm."
                },
                {
                    id: 'ex-cercle-2',
                    question: "Comment appelle-t-on le périmètre d'un cercle ?",
                    options: ["L'aire", "La circonférence", "Le diamètre", "L'arc"],
                    correctAnswer: 1,
                    explanation: "La longueur du contour du cercle s'appelle la circonférence."
                }
            ]
        },
        {
            id: 'chap-geo-3',
            title: '13. Droites Perpendiculaires et Droites Parallèles',
            content: `
                <h3>1. Droites Perpendiculaires (⊥)</h3>
                <p>Deux droites sont perpendiculaires si elles se coupent en formant un <strong>angle droit (90°)</strong>. On utilise une <strong>équerre</strong> pour vérifier.</p>
                
                <h3>2. Droites Parallèles (//)</h3>
                <p>Deux droites sont parallèles si elles ne se coupent <strong>jamais</strong>, même si on les prolonge à l'infini. Elles gardent toujours le même écartement.</p>

                <div class="analogy">
                    <strong>🛤 Analogie : La Ville et le Train</strong><br>
                    • <strong>Parallèles :</strong> Les rails d'un train. Ils ne doivent jamais se toucher, sinon le train déraille !
                    <br>• <strong>Perpendiculaires :</strong> Un carrefour en ville avec des feux rouges. Les routes se croisent parfaitement en "croix" (+).
                </div>
            `,
            exercises: [
                {
                    id: 'ex-dp-1',
                    question: "Quel instrument utilise-t-on pour tracer des perpendiculaires ?",
                    options: ["Le compas", "La règle seule", "L'équerre", "Le rapporteur"],
                    correctAnswer: 2,
                    explanation: "L'équerre possède un angle droit spécialement conçu pour tracer des perpendiculaires."
                },
                {
                    id: 'ex-dp-2',
                    question: "Si (d1) est parallèle à (d2) et (d2) est parallèle à (d3), alors :",
                    options: ["(d1) est perpendiculaire à (d3)", "(d1) est parallèle à (d3)", "Elles sont sécantes", "On ne peut pas savoir"],
                    correctAnswer: 1,
                    explanation: "Les amis de mes amis sont mes amis... version géométrie ! Si des rails suivent d'autres rails, ils vont tous dans la même direction."
                }
            ]
        },
        {
            id: 'chap-geo-4',
            title: '14. Symétrie Orthogonale par rapport à une Droite',
            content: `
                <h3>1. L'Effet Miroir</h3>
                <p>Deux figures sont symétriques par rapport à une droite (l'axe) si elles se superposent parfaitement quand on plie la feuille le long de cette droite.</p>
                
                <h3>2. Propriétés Magiques</h3>
                <p>La symétrie conserve tout !</p>
                <ul>
                    <li>Les longueurs (segments)</li>
                    <li>Les mesures d'angles</li>
                    <li>Les formes</li>
                    <li>Les aires</li>
                </ul>
                <p>La seule chose qui change, c'est le sens (gauche devient droite), comme dans un miroir.</p>

                <div class="analogy">
                    <strong>🦋 Analogie : Le Papillon et l'Encre</strong><br>
                    Mettez une tache d'encre sur une feuille, pliez-la en deux. En rouvrant, vous avez deux taches identiques face à face. La pliure est l'<strong>axe de symétrie</strong>. C'est aussi comme se regarder dans un miroir ou les ailes d'un papillon.
                </div>
            `,
            exercises: [
                {
                    id: 'ex-sym-1',
                    question: "Le symétrique d'un segment de 5 cm est un segment de :",
                    options: ["2,5 cm", "5 cm", "10 cm", "Cela dépend de l'axe"],
                    correctAnswer: 1,
                    explanation: "La symétrie conserve les longueurs. L'image a exactement la même taille que l'original."
                }
            ]
        },
        {
            id: 'chap-geo-5',
            title: '15. Angles',
            content: `
                <h3>1. L'Ouverture</h3>
                <p>Un angle est formé par deux demi-droites de même origine. C'est l'écartement entre les deux.</p>
                
                <h3>2. Les Familles d'Angles</h3>
                <ul>
                    <li><strong>Aigu :</strong> Plus petit qu'un angle droit (< 90°). Pointu, piquant.</li>
                    <li><strong>Droit :</strong> Exactement 90° (coin d'une feuille).</li>
                    <li><strong>Obtus :</strong> Plus grand qu'un angle droit (> 90°).</li>
                    <li><strong>Plat :</strong> Complètement ouvert (180°), forme une ligne droite.</li>
                </ul>

                <div class="analogy">
                    <strong>🚪 Analogie : La Porte</strong><br>
                    • Porte fermée = Angle nul (0°).
                    <br>• Porte un peu ouverte = Angle aigu.
                    <br>• Porte ouverte en grand (contre le mur) = Angle plat (180°).
                    <br>• Coin du mur = Angle droit (90°).
                </div>
            `,
            exercises: [
                {
                    id: 'ex-angle-1',
                    question: "Un angle de 45° est un angle :",
                    options: ["Obtus", "Droit", "Aigu", "Plat"],
                    correctAnswer: 2,
                    explanation: "45 est plus petit que 90, donc c'est un angle aigu (pointu)."
                },
                {
                    id: 'ex-angle-2',
                    question: "La bissectrice d'un angle de 60° le partage en deux angles de :",
                    options: ["20° chacun", "30° chacun", "40° chacun", "60° chacun"],
                    correctAnswer: 1,
                    explanation: "La bissectrice coupe l'angle en deux parts égales. 60 ÷ 2 = 30°."
                }
            ]
        },
        {
            id: 'chap-geo-6',
            title: '16. Polygones',
            content: `
                <h3>1. Les Figures à Plusieurs Côtés</h3>
                <p>Un polygone est une figure fermée tracée à la règle.</p>
                <ul>
                    <li>3 côtés : <strong>Triangle</strong></li>
                    <li>4 côtés : <strong>Quadrilatère</strong></li>
                    <li>5 côtés : <strong>Pentagone</strong></li>
                    <li>6 côtés : <strong>Hexagone</strong></li>
                </ul>

                <h3>2. Les Triangles Spéciaux</h3>
                <ul>
                    <li><strong>Isocèle :</strong> 2 côtés égaux (le chapeau pointu).</li>
                    <li><strong>Équilatéral :</strong> 3 côtés égaux (parfait).</li>
                    <li><strong>Rectangle :</strong> Possède un angle droit.</li>
                </ul>

                <h3>3. Les Quadrilatères Spéciaux</h3>
                <ul>
                    <li><strong>Rectangle :</strong> 4 angles droits.</li>
                    <li><strong>Losange :</strong> 4 côtés égaux.</li>
                    <li><strong>Carré :</strong> 4 angles droits ET 4 côtés égaux (le roi des quadrilatères).</li>
                </ul>
            `,
            exercises: [
                {
                    id: 'ex-poly-1',
                    question: "Quel quadrilatère a ses 4 côtés de même longueur ?",
                    options: ["Le Rectangle", "Le Losange", "Le Trapèze", "Le Parallélogramme"],
                    correctAnswer: 1,
                    explanation: "Le losange se définit par ses 4 côtés égaux (comme le carré, mais le losange est la définition plus générale). Note: le carré est aussi un losange particulier."
                },
                {
                    id: 'ex-poly-2',
                    question: "Un triangle équilatéral a :",
                    options: ["2 côtés égaux", "3 côtés égaux", "1 angle droit", "Aucun côté égal"],
                    correctAnswer: 1,
                    explanation: "Équi-latéral veut dire 'côtés égaux'. Les 3 sont identiques."
                }
            ]
        },
        {
            id: 'chap-geo-7',
            title: '17. Aires',
            content: `
                <h3>1. Surface vs Périmètre</h3>
                <p>Le <strong>périmètre</strong> est la longueur du contour (la clôture).<br>L'<strong>aire</strong> est la mesure de la surface intérieure (le gazon).</p>

                <h3>2. Formules Magiques</h3>
                <ul>
                    <li><strong>Carré :</strong> Côté x Côté (c x c)</li>
                    <li><strong>Rectangle :</strong> Longueur x largeur (L x l)</li>
                    <li><strong>Triangle Rectangle :</strong> (Petit côté x Grand côté) ÷ 2</li>
                    <li><strong>Disque (Cercle) :</strong> Rayon x Rayon x Pi (R x R x 3,14)</li>
                </ul>

                <div class="analogy">
                    <strong>🎨 Analogie : Peinture et Clôture</strong><br>
                    • Calculer le <strong>périmètre</strong> de votre chambre, c'est mesurer la longueur des plinthes.
                    <br>• Calculer l'<strong>aire</strong>, c'est savoir combien de carreaux ou de moquette il faut acheter pour couvrir le sol.
                </div>
            `,
            exercises: [
                {
                    id: 'ex-aire-1',
                    question: "Quelle est l'aire d'un carré de 5 cm de côté ?",
                    options: ["20 cm²", "25 cm²", "10 cm²", "5 cm²"],
                    correctAnswer: 1,
                    explanation: "Aire = c x c = 5 x 5 = 25 cm². Attention, l'unité est le centimètre carré !"
                },
                {
                    id: 'ex-aire-2',
                    question: "Un rectangle fait 4m de long et 3m de large. Son aire est :",
                    options: ["7 m²", "12 m²", "14 m²", "24 m²"],
                    correctAnswer: 1,
                    explanation: "Aire = Longueur x largeur = 4 x 3 = 12 m²."
                }
            ]
        },
        {
            id: 'chap-geo-8',
            title: '18. Géométrie dans l\'Espace',
            content: `
                <h3>1. Le Monde en 3D</h3>
                <p>Dans l'espace, les figures ont du volume. On peut les remplir.</p>
                <ul>
                    <li><strong>Cube :</strong> 6 faces carrées identiques (comme un dé).</li>
                    <li><strong>Parallélépipède (Pavé) :</strong> 6 faces rectangulaires (comme une boîte de chaussures ou une brique).</li>
                    <li><strong>Cylindre :</strong> Comme une boîte de conserve.</li>
                    <li><strong>Sphère :</strong> Comme un ballon de football.</li>
                </ul>

                <h3>2. Patrons</h3>
                <p>Un patron est le dessin à plat qui permet de construire le solide en le pliant. Imaginez déplier une boîte en carton.</p>
            `,
            exercises: [
                {
                    id: 'ex-space-1',
                    question: "Combien de faces possède un cube ?",
                    options: ["4", "6", "8", "12"],
                    correctAnswer: 1,
                    explanation: "Un cube a 6 faces : dessus, dessous, devant, derrière, gauche, droite. Comme un dé à jouer !"
                },
                {
                    id: 'ex-space-2',
                    question: "Quel objet a la forme d'un cylindre ?",
                    options: ["Une orange", "Une boîte de conserve", "Une pyramide", "Un livre"],
                    correctAnswer: 1,
                    explanation: "Une boîte de conserve a deux bases rondes et un corps droit : c'est un cylindre."
                }
            ]
        },
        {
            id: 'chap-geo-9',
            title: '19. Repérage sur la Sphère',
            content: `
                <h3>1. La Terre est Ronde</h3>
                <p>Pour se repérer sur une sphère (comme la Terre), on a besoin de deux coordonnées spéciales :</p>
                
                <h3>2. Les Lignes Imaginaires</h3>
                <ul>
                    <li><strong>L'Équateur :</strong> La ceinture de la Terre (sépare Nord et Sud).</li>
                    <li><strong>La Latitude :</strong> Distance au Nord ou au Sud de l'Équateur (parallèles).</li>
                    <li><strong>La Longitude :</strong> Distance à l'Est ou à l'Ouest du méridien de Greenwich.</li>
                </ul>

                <div class="analogy">
                    <strong>🌐 Analogie : Le Quadrillage du Monde</strong><br>
                    Imaginez une orange que l'on coupe en rondelles (latitude) et en quartiers (longitude). Pour dire où se trouve un pépin, on donne le numéro de la rondelle et celui du quartier. Dakar se trouve à 14° Nord (Latitude) et 17° Ouest (Longitude).
                </div>
            `,
            exercises: [
                {
                    id: 'ex-sphere-1',
                    question: "Quelle ligne imaginaire divise la Terre en deux hémisphères Nord et Sud ?",
                    options: ["Le Méridien de Greenwich", "L'Équateur", "Le Tropique du Cancer", "Le Pôle Nord"],
                    correctAnswer: 1,
                    explanation: "L'Équateur est le cercle le plus large qui fait le tour de la Terre à mi-chemin des pôles."
                },
                {
                    id: 'ex-sphere-2',
                    question: "La latitude se mesure en :",
                    options: ["Mètres", "Kilomètres", "Degrés", "Heures"],
                    correctAnswer: 2,
                    explanation: "Sur une sphère, on mesure des angles, donc des degrés (ex: 14° Nord)."
                }
            ]
        }
    ]
};
