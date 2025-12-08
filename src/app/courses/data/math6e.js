export const math6eData = {
    id: 'math-6e',
    title: 'Mathématiques 6ème',
    chapters: [
        // ==========================================
        // PARTIE 1 : ACTIVITÉS NUMÉRIQUES
        // ==========================================
        {
            id: 'chap-num-1',
            part: 'Première Partie : Activités Numériques',
            title: '1. Nombres Décimaux Arithmétiques',
            story: "Il était une fois, un roi qui voulait compter les étoiles. Il commença par 1, 2, 3... mais certaines étoiles brillaient moins fort, comme des moitiés d'étoiles. Il demanda à son savant d'inventer des nombres plus précis. Le savant inventa la virgule, une petite barrière magique qui permet de compter les miettes de pain aussi précisément que les pains entiers.",
            content: `
### 1. Introduction : L'Univers des Nombres
Les nombres entiers (1, 2, 3...) sont parfaits pour compter des objets entiers. Mais pour la précision, nous avons besoin des **nombres décimaux**.

> **🌍 Analogie : Le Marché**  
> Les billets sont les nombres entiers (1000F, 2000F). Les pièces de monnaie sont les nombres décimaux (partie de l'unité).

### 2. La Virgule et les Rangs
Dans **12,345**, la virgule sépare deux mondes.

- 1 : Dizaines
- 2 : Unités
- **,** (Frontière)
- 3 : Dixièmes (1/10)
- 4 : Centièmes (1/100)
- 5 : Millièmes (1/1000)
            `,
            summary: [
                "Un nombre décimal a une partie entière et une partie décimale.",
                "La virgule sépare les unités des dixièmes.",
                "Zéro inutile : 12,5 = 12,50 (à la fin) et 012 = 12 (au début).",
                "Chaque rang est 10 fois plus petit que celui à sa gauche."
            ],
            exercises: [
                {
                    id: 'ex-1',
                    question: "Dans 123,456, quel est le chiffre des centièmes ?",
                    options: ["4", "5", "6", "3"],
                    correctAnswer: 1,
                    explanation: "Après la virgule : 4 (dixièmes), 5 (centièmes), 6 (millièmes)."
                },
                {
                    id: 'ex-2',
                    question: "Quelle est l'écriture décimale de 3 + 4/100 ?",
                    options: ["3,4", "3,04", "3,004", "34"],
                    correctAnswer: 1,
                    explanation: "3 unités et 4 centièmes s'écrit 3,04."
                },
                {
                    id: 'ex-3',
                    question: "Le nombre 58,0 peut s'écrire :",
                    options: ["5,8", "580", "58", "0,58"],
                    correctAnswer: 2,
                    explanation: "Le zéro après la virgule, s'il est tout seul ou à la fin, est 'inutile' pour la valeur."
                }
            ]
        },
        {
            id: 'chap-num-2',
            part: 'Première Partie : Activités Numériques',
            title: '2. Addition de Nombres Décimaux',
            story: "Imaginez des soldats de tailles différentes qui doivent défiler. Pour que le défilé soit beau, ils doivent s'aligner par les épaules. En mathématiques, l'épaule des nombres, c'est la virgule ! Si les virgules ne sont pas alignées, le calcul trébuche.",
            content: `
### 1. La Règle d'Or : L'Alignement
Pour additionner, on superpose les virgules verticalement.

> **🏗 Analogie : L'Immeuble**  
> Les unités habitent au rez-de-chaussée. Les dixièmes au 1er sous-sol. Les dizaines au 1er étage. On n'additionne pas un étage avec un sous-sol !
            `,
            summary: [
                "Alignez toujours les virgules verticalement.",
                "Ajoutez des zéros pour avoir le même nombre de chiffres après la virgule.",
                "N'oubliez pas les retenues.",
                "La virgule descend directement dans le résultat."
            ],
            exercises: [
                {
                    id: 'ex-add-1',
                    question: "12,5 + 3,75 =",
                    options: ["15,80", "16,25", "49,5", "15,25"],
                    correctAnswer: 1,
                    explanation: "12,50 + 3,75 = 16,25."
                },
                {
                    id: 'ex-add-2',
                    question: "8 + 2,4 =",
                    options: ["10", "10,4", "82,4", "8,24"],
                    correctAnswer: 1,
                    explanation: "8,0 + 2,4 = 10,4."
                },
                {
                    id: 'ex-add-3',
                    question: "Paul a 2,50€ et trouve 0,80€. Combien a-t-il ?",
                    options: ["2,130€", "3,30€", "3,00€", "2,80€"],
                    correctAnswer: 1,
                    explanation: "2,50 + 0,80 = 3,30€."
                }
            ]
        },
        {
            id: 'chap-num-3',
            part: 'Première Partie : Activités Numériques',
            title: '3. Soustraction de Nombres Décimaux',
            story: "Un jour, un marchand devait rendre la monnaie sur un billet de 1000 pour un achat de 350,5. Il réalisa qu'il ne pouvait pas enlever 5 centimes s'il n'avait rien dans sa caisse de centimes. Il dut 'casser' un billet (une unité) pour avoir des pièces. C'est le secret de la retenue !",
            content: `
### 1. Le Principe
Comme l'addition, on aligne les virgules. Mais attention : l'ordre compte !

> **🛒 Analogie : Rendre la Monnaie**  
> 10 - 2,5 n'est pas 8,5. C'est 10,0 - 2,5. Pensez argent : 10€ moins 2,50€ fait 7,50€.
            `,
            summary: [
                "Le grand nombre est toujours en haut.",
                "Ajoutez des zéros pour combler les trous (ex: 10 devient 10,0).",
                "Attention aux retenues qui traversent la virgule."
            ],
            exercises: [
                {
                    id: 'ex-sub-1',
                    question: "10 - 0,1 =",
                    options: ["9", "9,9", "0,9", "9,1"],
                    correctAnswer: 1,
                    explanation: "10,0 - 0,1 = 9,9."
                },
                {
                    id: 'ex-sub-2',
                    question: "15,5 - 5 =",
                    options: ["10,5", "10", "15", "5,5"],
                    correctAnswer: 0,
                    explanation: "15,5 - 5,0 = 10,5."
                },
                {
                    id: 'ex-sub-3',
                    question: "Quelle est la différence entre 1 et 0,01 ?",
                    options: ["0,09", "0,99", "0,9", "1,01"],
                    correctAnswer: 1,
                    explanation: "1,00 - 0,01 = 0,99."
                }
            ]
        },
        {
            id: 'chap-num-4',
            part: 'Première Partie : Activités Numériques',
            title: '4. Rangement des Décimaux',
            story: "Deux frères se disputaient pour savoir qui avait le plus gros morceau de gâteau. L'un avait 0,5 du gâteau, l'autre 0,45. Le deuxième disait '45 est plus grand que 5, donc j'ai gagné !'. Le sage leur expliqua que pour comparer, il faut regarder le poids réel : 0,50 est plus lourd que 0,45.",
            content: `
### 1. Comparaison
1. D'abord la partie entière.
2. Ensuite les dixièmes, puis les centièmes...

> **⚖️ Analogie : La Balance**  
> Attention au piège de la longueur ! 4,1234 est PLUS PETIT que 4,5.
> Car 1 dixième < 5 dixièmes.
            `,
            summary: [
                "Ne comparez pas le nombre de chiffres, mais la valeur des rangs.",
                "Comparez de gauche à droite.",
                "Ajoutez des zéros mentaux : 4,5(00) vs 4,123.",
                "Ordre croissant : du plus petit au plus grand."
            ],
            exercises: [
                {
                    id: 'ex-comp-1',
                    question: "Quel est le plus grand nombre ?",
                    options: ["3,2", "3,19", "3,199", "3,09"],
                    correctAnswer: 0,
                    explanation: "3,2 = 3,200. C'est plus grand que 3,199."
                },
                {
                    id: 'ex-comp-2',
                    question: "Ranger 0,8 ; 0,81 ; 0,08 dans l'ordre croissant",
                    options: ["0,08 < 0,8 < 0,81", "0,8 < 0,81 < 0,08", "0,08 < 0,81 < 0,8", "0,81 < 0,8 < 0,08"],
                    correctAnswer: 0,
                    explanation: "0,08 (le plus petit) < 0,80 < 0,81."
                }
            ]
        },
        {
            id: 'chap-num-5',
            part: 'Première Partie : Activités Numériques',
            title: '5. Multiplication',
            story: "Multiplier, c'est comme utiliser une loupe. Parfois la loupe grossit (x2), parfois elle rétrécit (x0,5). La virgule se déplace comme si elle dansait, sautant autant de pas qu'il y a de chiffres derrière elle.",
            content: `
### 1. La Méthode
On multiplie sans s'occuper des virgules. À la fin, on compte le total de chiffres après la virgule dans les facteurs et on le reporte au résultat.

> **🔍 Analogie : Le Zoom**  
> 2 chiffres après la virgule ici + 1 chiffre là = 3 chiffres après la virgule dans le résultat.
            `,
            summary: [
                "Ignorez les virgules pendant le calcul.",
                "Comptez les chiffres décimaux des deux nombres.",
                "Placez la virgule dans le résultat final.",
                "Multiplier par 0,1 revient à diviser par 10."
            ],
            exercises: [
                {
                    id: 'ex-mul-1',
                    question: "0,5 x 0,5 =",
                    options: ["0,25", "2,5", "0,5", "0,025"],
                    correctAnswer: 0,
                    explanation: "5x5=25. Deux chiffres après la virgule au total -> 0,25."
                },
                {
                    id: 'ex-mul-2',
                    question: "100 x 2,345 =",
                    options: ["23,45", "234,5", "2345", "0,2345"],
                    correctAnswer: 1,
                    explanation: "Multiplier par 100 décale la virgule de 2 rangs vers la droite."
                }
            ]
        },
        {
            id: 'chap-num-6',
            part: 'Première Partie : Activités Numériques',
            title: '6. Division Décimale',
            story: "Partager un gâteau en 3, c'est facile. Mais partager 12,5 litres d'eau en 4 bouteilles ? Il faut être précis. La division décimale permet de ne rien gaspiller, même pas une goutte (le reste est nul ou très petit).",
            content: `
### 1. Division d'un décimal
Quand on abaisse le premier chiffre après la virgule, on met une virgule au quotient.

> **💧 Analogie : Le Partage Équitable**  
> Pour partager 10€ en 4, on donne 2€ chacun, il reste 2€. On change ces 2€ en 200 centimes, et on donne 50 centimes. Total 2,50€.
            `,
            summary: [
                "Dès qu'on franchit la virgule au dividende, on la met au quotient.",
                "On peut ajouter des zéros au reste pour continuer la division.",
                "Diviser par 10 revient à décaler la virgule vers la gauche."
            ],
            exercises: [
                {
                    id: 'ex-div-1',
                    question: "5 ÷ 2 =",
                    options: ["2,5", "2,2", "2,1", "3"],
                    correctAnswer: 0,
                    explanation: "La moitié de 5 est 2,5."
                },
                {
                    id: 'ex-div-2',
                    question: "12,4 ÷ 4 =",
                    options: ["3,1", "3,01", "31", "0,31"],
                    correctAnswer: 0,
                    explanation: "12÷4=3. 4÷4=1. Donc 3,1."
                }
            ]
        },
        {
            id: 'chap-num-7',
            part: 'Première Partie : Activités Numériques',
            title: '7. Organisation des Calculs',
            story: "Dans la ville des Mathématiques, il y a un code de la route strict. Les Parenthèses sont des ambulances prioritaires. Les Multiplications sont des camions rapides. Les Additions sont des piétons prudents. Si on ne respecte pas les priorités, c'est l'accident !",
            content: `
### 1. PEMDAS
Ordre de priorité : Parenthèses > Exposants > Multiplications/Divisions > Additions/Soustractions.

> **🚦 Analogie : La Priorité à Droite**  
> 2 + 3 x 4. Le camion (x) passe avant le piéton (+).
> Donc 2 + 12 = 14.
            `,
            summary: [
                "Parenthèses d'abord !",
                "Ensuite les multiplications et divisions.",
                "Enfin les additions et soustractions (de gauche à droite).",
                "2 + 3 x 5 = 17, pas 25."
            ],
            exercises: [
                {
                    id: 'ex-org-1',
                    question: "10 - 2 x 3 =",
                    options: ["24", "4", "16", "8"],
                    correctAnswer: 1,
                    explanation: "Multiplication prioritaire : 2x3=6. Puis 10-6=4."
                },
                {
                    id: 'ex-org-2',
                    question: "(10 - 2) x 3 =",
                    options: ["24", "4", "16", "8"],
                    correctAnswer: 0,
                    explanation: "Parenthèses prioritaires : 10-2=8. Puis 8x3=24."
                }
            ]
        },
        {
            id: 'chap-num-8',
            part: 'Première Partie : Activités Numériques',
            title: '8. Proportionnalité',
            story: "Un architecte dessine une maison minuscule. Si la porte mesure 2cm sur le papier et 2m en réalité, alors la fenêtre de 1cm doit mesurer 1m. Tout grandit ou rétrécit de la même façon. C'est la magie de la proportionnalité.",
            content: `
### 1. Le Coefficient
On passe d'une ligne à l'autre en multipliant par le même nombre.

> **🗺 Analogie : L'Échelle**  
> Sur une carte, 1cm = 1km. Si je marche 5cm sur la carte, je marche 5km en vrai.
            `,
            summary: [
                "Tableau de proportionnalité = mêmes règles pour toutes les colonnes.",
                "Produit en croix pour trouver l'inconnu.",
                "Prix au kilo : si 1kg coûte 5€, 2kg coûtent 10€."
            ],
            exercises: [
                {
                    id: 'ex-prop-1',
                    question: "2 livres coûtent 10€. Combien coûtent 3 livres ?",
                    options: ["15€", "12€", "20€", "13€"],
                    correctAnswer: 0,
                    explanation: "1 livre = 5€. Donc 3 livres = 15€."
                }
            ]
        },
        {
            id: 'chap-num-9',
            part: 'Première Partie : Activités Numériques',
            title: '9. Nombres Décimaux Relatifs',
            story: "Il existe un monde miroir sous le sol. L'étage 0 sépare le ciel (positif) du sous-sol (négatif). Plus on descend, plus le chiffre grandit, mais plus on est 'bas' et 'froid'. -10 est beaucoup plus froid que -1 !",
            content: `
### 1. Positifs et Négatifs
Le signe (-) indique qu'on est en dessous de zéro.

> **🌡 Analogie : Le Thermomètre**  
> Il fait -5°. La température monte de 2°. Il fait -3°.
            `,
            summary: [
                "0 est à la fois positif et négatif.",
                "Plus un nombre négatif est 'grand' (loin de zéro), plus il est petit en valeur (-100 < -1).",
                "La distance à zéro s'appelle la valeur absolue."
            ],
            exercises: [
                {
                    id: 'ex-rel-1',
                    question: "Quel est le plus petit ?",
                    options: ["-1", "-1000", "0", "1"],
                    correctAnswer: 1,
                    explanation: "-1000 est très loin en dessous de zéro. C'est le plus petit."
                },
                {
                    id: 'ex-rel-2',
                    question: "-3 est situé entre :",
                    options: ["-2 et -4", "-4 et -2", "0 et -5", "-2 et 0"],
                    correctAnswer: 1,
                    explanation: "Sur la droite : ... -4, -3, -2, -1, 0."
                }
            ]
        },
        {
            id: 'chap-num-10',
            part: 'Première Partie : Activités Numériques',
            title: '10. Repérage',
            story: "Pour trouver un trésor sur une carte, il ne suffit pas de dire 'il est là'. Il faut donner sa latitude et sa longitude. C'est l'adresse mathématique exacte du point.",
            content: `
### 1. Coordonnées (x ; y)
Abscisse (horizontal) d'abord, Ordonnée (vertical) ensuite.

> **🏢 Analogie : L'Ascenseur**  
> Pour aller chez quelqu'un : je marche dans le hall (Abscisse) PUIS je prends l'ascenseur (Ordonnée).
> (3 ; 2) : J'avance de 3, je monte de 2.
            `,
            summary: [
                "Abscisse = Axe horizontal (x).",
                "Ordonnée = Axe vertical (y).",
                "Origine = (0 ; 0).",
                "Ordre alphabétique : Abscisse avant Ordonnée."
            ],
            exercises: [
                {
                    id: 'ex-rep-1',
                    question: "Le point A(2 ; 3) est :",
                    options: ["À 2 vers la droite, 3 vers le haut", "À 3 vers la droite, 2 vers le haut", "Sur l'axe des abscisses", "Sur l'axe des ordonnées"],
                    correctAnswer: 0,
                    explanation: "2 en abscisse (droite), 3 en ordonnée (haut)."
                }
            ]
        },

        // ==========================================
        // PARTIE 2 : ACTIVITÉS GÉOMÉTRIQUES
        // ==========================================
        {
            id: 'chap-geo-1',
            part: 'Deuxième Partie : Activités Géométriques',
            title: '11. Introduction à la Géométrie',
            image: '/courses/images/math6e/geo_basics.png',
            story: "Au commencement, il n'y avait rien. Puis apparut le Point, une poussière d'étoile. Deux points se donnèrent la main pour former un Segment. Puis ils s'élancèrent à l'infini pour devenir une Droite. La géométrie était née !",
            content: `
### 1. Les Fondations
- **Point (x)** : Une position précise.
- **Droite (AB)** : Infinie, passe par A et B.
- **Segment [AB]** : Fini, commence à A et finit à B.
- **Demi-droite [Ax)** : Commence à A, infinie vers x.

> **✨ Analogie : Le Laser**  
> Le stylo laser est l'origine. Le rayon qui part est une demi-droite. Le tableau où il s'arrête est un point.
            `,
            summary: [
                "La notation est cruciale : [] = segment (fermé), () = droite (ouverte).",
                "Par 2 points passe 1 seule droite.",
                "3 points alignés sont sur la même droite."
            ],
            exercises: [
                {
                    id: 'ex-geo-1',
                    question: "Quelle notation pour le segment d'extrémités A et B ?",
                    options: ["(AB)", "[AB)", "[AB]", "AB"],
                    correctAnswer: 2,
                    explanation: "Les crochets [ ] indiquent que ça s'arrête aux extrémités (segment)."
                },
                {
                    id: 'ex-geo-2',
                    question: "Une demi-droite a :",
                    options: ["Deux extrémités", "Aucune extrémité", "Une origine et pas de fin", "Une longueur mesurable"],
                    correctAnswer: 2,
                    explanation: "Elle commence quelque part (origine) mais ne finit jamais."
                }
            ]
        },
        {
            id: 'chap-geo-2',
            part: 'Deuxième Partie : Activités Géométriques',
            title: '12. Le Cercle',
            image: '/courses/images/math6e/geo_circles.png',
            story: "Le Cercle est la forme la plus démocratique : tous ses points sont à la même distance du chef (le Centre). Personne n'est jaloux, tout le monde est à égalité !",
            content: `
### 1. Définitions
Le compas est l'outil du cercle. L'écartement est le rayon.

- **Rayon** : Du centre au bord.
- **Diamètre** : Traverse le centre (2 x Rayon).
- **Corde** : Relie deux points sans passer forcément par le centre.
            `,
            summary: [
                "Tous les rayons d'un même cercle ont la même longueur.",
                "Le diamètre est la plus longue corde.",
                "Périmètre = Diamètre x Pi (3,14)."
            ],
            exercises: [
                {
                    id: 'ex-cercle-1',
                    question: "Si le diamètre est 10cm, le rayon est :",
                    options: ["20cm", "5cm", "10cm", "3,14cm"],
                    correctAnswer: 1,
                    explanation: "Rayon = Diamètre / 2 = 5cm."
                },
                {
                    id: 'ex-cercle-2',
                    question: "Une corde passant par le centre s'appelle :",
                    options: ["Un rayon", "Un arc", "Un diamètre", "Une tangente"],
                    correctAnswer: 2,
                    explanation: "C'est la définition du diamètre."
                }
            ]
        },
        {
            id: 'chap-geo-3',
            part: 'Deuxième Partie : Activités Géométriques',
            title: '13. Parallèles et Perpendiculaires',
            story: "Deux droites marchaient dans le désert. L'une dit 'Jamais nous ne nous rencontrerons', c'étaient des Parallèles. Plus loin, deux autres droites se heurtèrent violemment en formant une croix parfaite : c'étaient des Perpendiculaires.",
            content: `
### 1. Position Relative
- **Sécantes** : Se croisent.
- **Perpendiculaires (⊥)** : Se croisent à angle droit (90°).
- **Parallèles (//)** : Ne se croisent jamais (écartement constant).

> **🛤 Analogie : Ville et Train**  
> Perpendiculaires = Carrefour de feux rouges (+).
> Parallèles = Rails de train (=).
            `,
            summary: [
                "On utilise l'équerre pour les perpendiculaires.",
                "Si deux droites sont perpendiculaires à une troisième, elles sont parallèles entre elles."
            ],
            exercises: [
                {
                    id: 'ex-d-1',
                    question: "L'équerre sert à tracer des droites :",
                    options: ["Parallèles", "Sécantes", "Perpendiculaires", "Quelconques"],
                    correctAnswer: 2,
                    explanation: "L'angle droit de l'équerre permet de tracer des perpendiculaires."
                }
            ]
        },
        {
            id: 'chap-geo-4',
            part: 'Deuxième Partie : Activités Géométriques',
            title: '14. Symétrie Axiale',
            story: "Narcisse se regarde dans l'étang. Il voit son reflet exact, mais inversé. Sa main droite est à gauche dans le reflet. La surface de l'eau est l'axe de symétrie.",
            content: `
### 1. L'Effet Miroir
Deux figures sont symétriques par rapport à une droite si elles se superposent par pliage.

> **🦋 Analogie : Le Papillon**  
> Le corps du papillon est l'axe. L'aile gauche est le symétrique de l'aile droite.
            `,
            summary: [
                "La symétrie conserve les longueurs, les angles et les aires.",
                "L'axe de symétrie est la médiatrice du segment reliant un point et son image."
            ],
            exercises: [
                {
                    id: 'ex-sym-1',
                    question: "Le symétrique d'un cercle par rapport à une droite est :",
                    options: ["Un carré", "Une droite", "Un cercle de même rayon", "Un point"],
                    correctAnswer: 2,
                    explanation: "La symétrie conserve les formes et les dimensions."
                }
            ]
        },
        {
            id: 'chap-geo-5',
            part: 'Deuxième Partie : Activités Géométriques',
            title: '15. Les Angles',
            image: '/courses/images/math6e/geo_angles.png',
            story: "L'Angle est la mesure de l'ouverture d'une bouche. Une petite bouche pincée est un angle aigu. Une bouche grande ouverte pour crier est un angle obtus. Une bouche fermée est un angle nul.",
            content: `
### 1. Types d'Angles
- Aigu : < 90° (Pointu)
- Droit : = 90° (Coin carré)
- Obtus : > 90° (Large)
- Plat : = 180° (Ligne droite)

> **🕒 Analogie : L'Horloge**  
> 3h00 : Angle droit.  
> 6h00 : Angle plat.  
> 1h00 : Angle aigu.
            `,
            summary: [
                "On mesure les angles avec un rapporteur.",
                "L'unité est le degré (°).",
                "Un tour complet fait 360°."
            ],
            exercises: [
                {
                    id: 'ex-ang-1',
                    question: "Un angle de 91° est :",
                    options: ["Aigu", "Droit", "Obtus", "Plat"],
                    correctAnswer: 2,
                    explanation: "C'est plus grand que 90°, donc c'est obtus."
                }
            ]
        },
        {
            id: 'chap-geo-6',
            part: 'Deuxième Partie : Activités Géométriques',
            title: '16. Polygones',
            story: "La famille Polygone est nombreuse. M. Triangle a 3 côtés. Mme Quadrilatère en a 4. Leurs enfants s'appellent Rectangle, Losange et Carré. Carré est le chouchou, car il est parfait : tous ses côtés et angles sont égaux !",
            content: `
### 1. Triangles
- Isocèle : 2 côtés égaux.
- Équilatéral : 3 côtés égaux.
- Rectangle : 1 angle droit.

### 2. Quadrilatères
- Rectangle : 4 angles droits.
- Losange : 4 côtés égaux.
- Carré : Rectangle + Losange (Tout parfait).
            `,
            summary: [
                "Un polygone est une ligne brisée fermée.",
                "Le Carré est à la fois un rectangle et un losange."
            ],
            exercises: [
                {
                    id: 'ex-poly-1',
                    question: "Je suis un quadrilatère avec 4 côtés égaux mais pas d'angle droit. Qui suis-je ?",
                    options: ["Un Carré", "Un Rectangle", "Un Losange", "Un Trapèze"],
                    correctAnswer: 2,
                    explanation: "Côtés égaux = Losange. (Si j'avais des angles droits, je serais un Carré)."
                }
            ]
        },
        {
            id: 'chap-geo-7',
            part: 'Deuxième Partie : Activités Géométriques',
            title: '17. Aires et Périmètres',
            story: "Le paysan veut clôturer son champ (Périmètre) et semer du gazon (Aire). Il ne faut pas confondre le grillage avec l'herbe ! Un champ long et fin peut avoir beaucoup de grillage mais peu d'herbe.",
            content: `
### 1. Formules
- Périmètre Rectangle = (L + l) x 2
- Aire Rectangle = L x l
- Aire Carré = c x c
- Aire Triangle Rectangle = (a x b) / 2
            `,
            summary: [
                "Périmètre = Contour (m).",
                "Aire = Surface (m²).",
                "Attention aux unités : ne mélangez pas cm et m !"
            ],
            exercises: [
                {
                    id: 'ex-aire-1',
                    question: "Un carré de 6m de côté a une aire de :",
                    options: ["12m²", "24m²", "36m²", "6m²"],
                    correctAnswer: 2,
                    explanation: "6 x 6 = 36m²."
                }
            ]
        },
        {
            id: 'chap-geo-8',
            part: 'Deuxième Partie : Activités Géométriques',
            title: '18. Géométrie dans l\'Espace',
            image: '/courses/images/math6e/geo_solids.png',
            story: "Nous vivons dans un monde en 3D. Le Cube est un dé à jouer géant. Le Pavé est une brique. Le Cylindre est une boîte de conserve. Ils ont du volume, on peut les remplir d'eau !",
            content: `
### 1. Les Solides
- **Cube** : 6 faces carrées.
- **Pavé droit** : 6 faces rectangulaires.
- **Cylindre** : 2 disques et une face courbe.

### 2. Patron
C'est le solide mis à plat, prêt à être découpé et plié.
            `,
            summary: [
                "Un solide occupe un volume.",
                "Les faces du pavé sont des rectangles.",
                "Le patron permet de construire le solide."
            ],
            exercises: [
                {
                    id: 'ex-sol-1',
                    question: "Combien de sommets a un cube ?",
                    options: ["4", "6", "8", "12"],
                    correctAnswer: 2,
                    explanation: "4 en haut + 4 en bas = 8 sommets."
                }
            ]
        },
        {
            id: 'chap-geo-9',
            part: 'Deuxième Partie : Activités Géométriques',
            title: '19. Sphère et Globe',
            story: "La Terre n'est pas plate ! C'est une boule (presque) parfaite. Pour voyager, les marins ont tracé des lignes imaginaires sur la mer : l'Équateur (la ceinture) et les Méridiens (les quartiers d'orange).",
            content: `
### 1. Se repérer
Comme sur un plan, mais courbe.

- Latitude (Nord/Sud) // Équateur
- Longitude (Est/Ouest) // Greenwich
            `,
            summary: [
                "La Terre est une sphère.",
                "L'Équateur divise la Terre en deux hémisphères.",
                "Les pôles sont aux extrémités de l'axe de rotation."
            ],
            exercises: [
                {
                    id: 'ex-sph-1',
                    question: "Quelle ligne passe par les deux pôles ?",
                    options: ["L'Équateur", "Un Méridien", "Un Parallèle", "L'Horizon"],
                    correctAnswer: 1,
                    explanation: "Les méridiens relient le pôle Nord au pôle Sud."
                }
            ]
        }
    ]
};
