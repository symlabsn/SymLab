export const math6eData = {
    id: 'math-6e',
    title: 'Mathématiques 6ème',
    chapters: [
        {
            id: 'chap-1',
            title: 'Chapitre 1 : Activités Géométriques - Droites et Segments',
            content: `
                <h3>1. Le Point</h3>
                <p>Le point est l'élément de base de la géométrie. On le représente par une croix et on le nomme par une lettre majuscule (A, B, C...).</p>
                
                <h3>2. La Droite</h3>
                <p>Une droite est un ensemble infini de points alignés. Par deux points distincts A et B, il passe une et une seule droite notée (AB).</p>
                <div class="note">Notation : (D) ou (AB)</div>

                <h3>3. La Demi-droite</h3>
                <p>Une demi-droite est une portion de droite limitée d'un seul côté par un point appelé origine.</p>
                <div class="note">Notation : [AB) est la demi-droite d'origine A passant par B.</div>

                <h3>4. Le Segment</h3>
                <p>Un segment est une portion de droite limitée par deux points appelés extrémités.</p>
                <div class="note">Notation : [AB] est le segment d'extrémités A et B. La longueur du segment se note AB.</div>
            `,
            exercises: [
                {
                    id: 'ex-1',
                    question: "Combien de droites passent par deux points distincts A et B ?",
                    options: ["Aucune", "Une seule", "Deux", "Une infinité"],
                    correctAnswer: 1,
                    explanation: "Par deux points distincts, il ne passe qu'une seule droite unique."
                },
                {
                    id: 'ex-2',
                    question: "Quelle est la notation correcte pour le segment d'extrémités A et B ?",
                    options: ["(AB)", "[AB)", "[AB]", "AB"],
                    correctAnswer: 2,
                    explanation: "[AB] désigne le segment (avec crochets), tandis que (AB) désigne la droite."
                },
                {
                    id: 'ex-3',
                    question: "Si M appartient au segment [AB], alors :",
                    options: ["AM + MB = AB", "AM = MB", "A, M et B ne sont pas alignés"],
                    correctAnswer: 0,
                    explanation: "Si M est sur le segment [AB], la distance totale AB est la somme des distances AM et MB."
                }
            ]
        },
        {
            id: 'chap-2',
            title: 'Chapitre 2 : Activités Numériques - Nombres Entiers Naturels',
            content: `
                <h3>1. Les Chiffres et les Nombres</h3>
                <p>Les chiffres sont les symboles : 0, 1, 2, 3, 4, 5, 6, 7, 8, 9. Ils servent à écrire des nombres.</p>
                
                <h3>2. L'Ensemble N</h3>
                <p>L'ensemble des nombres entiers naturels est noté <strong>N</strong> = {0, 1, 2, 3, ...}.</p>

                <h3>3. Comparaison</h3>
                <p>Pour comparer deux nombres entiers, on regarde d'abord leur nombre de chiffres. Celui qui a le plus de chiffres est le plus grand.</p>
                <p>S'ils ont le même nombre de chiffres, on compare les chiffres de gauche à droite.</p>
            `,
            exercises: [
                {
                    id: 'ex-1',
                    question: "Quel est le plus petit entier naturel ?",
                    options: ["1", "0", "-1", "Il n'existe pas"],
                    correctAnswer: 1,
                    explanation: "L'ensemble N commence par 0."
                },
                {
                    id: 'ex-2',
                    question: "Quel est le successeur de 999 ?",
                    options: ["1000", "998", "1001", "9990"],
                    correctAnswer: 0,
                    explanation: "Le successeur est le nombre qui vient juste après : 999 + 1 = 1000."
                }
            ]
        },
        {
            id: 'chap-3',
            title: 'Chapitre 3 : Activités Géométriques - Le Cercle',
            content: `
                <h3>1. Définition</h3>
                <p>Un cercle de centre O et de rayon R est l'ensemble des points situés à la distance R du point O.</p>
                
                <h3>2. Vocabulaire</h3>
                <ul>
                    <li><strong>Rayon :</strong> Segment reliant le centre à un point du cercle.</li>
                    <li><strong>Corde :</strong> Segment reliant deux points du cercle.</li>
                    <li><strong>Diamètre :</strong> Corde passant par le centre (longueur = 2 × Rayon).</li>
                    <li><strong>Arc :</strong> Portion de cercle comprise entre deux points.</li>
                </ul>
            `,
            exercises: [
                {
                    id: 'ex-1',
                    question: "Si le rayon d'un cercle est 4 cm, quel est son diamètre ?",
                    options: ["2 cm", "4 cm", "8 cm", "16 cm"],
                    correctAnswer: 2,
                    explanation: "Le diamètre est le double du rayon : 4 × 2 = 8 cm."
                },
                {
                    id: 'ex-2',
                    question: "Quelle est la plus longue corde d'un cercle ?",
                    options: ["Le rayon", "Le diamètre", "L'arc", "La tangente"],
                    correctAnswer: 1,
                    explanation: "Le diamètre est la corde la plus longue possible dans un cercle."
                }
            ]
        },
        {
            id: 'chap-4',
            title: 'Chapitre 4 : Activités Numériques - Opérations',
            content: `
                <h3>1. L'Addition</h3>
                <p>Les nombres que l'on additionne sont les <strong>termes</strong>. Le résultat est la <strong>somme</strong>.</p>
                
                <h3>2. La Soustraction</h3>
                <p>Le résultat d'une soustraction est la <strong>différence</strong>. Attention, l'ordre compte !</p>

                <h3>3. La Multiplication</h3>
                <p>Les nombres que l'on multiplie sont les <strong>facteurs</strong>. Le résultat est le <strong>produit</strong>.</p>
                
                <h3>4. La Division Euclidienne</h3>
                <p>Dividende = (Diviseur × Quotient) + Reste, avec Reste < Diviseur.</p>
            `,
            exercises: [
                {
                    id: 'ex-1',
                    question: "Dans l'opération 12 + 5 = 17, comment appelle-t-on 17 ?",
                    options: ["Le terme", "Le facteur", "La somme", "Le produit"],
                    correctAnswer: 2,
                    explanation: "Le résultat d'une addition est une somme."
                },
                {
                    id: 'ex-2',
                    question: "Si je divise 20 par 3, quel est le reste ?",
                    options: ["1", "2", "3", "6"],
                    correctAnswer: 1,
                    explanation: "20 = (3 × 6) + 2. Le reste est 2."
                }
            ]
        },
        {
            id: 'chap-5',
            title: 'Chapitre 5 : Activités Géométriques - Les Angles',
            content: `
                <h3>1. Définition</h3>
                <p>Un angle est une portion de plan délimitée par deux demi-droites de même origine.</p>
                
                <h3>2. Types d'angles</h3>
                <ul>
                    <li><strong>Angle nul :</strong> 0°</li>
                    <li><strong>Angle aigu :</strong> Entre 0° et 90°</li>
                    <li><strong>Angle droit :</strong> 90°</li>
                    <li><strong>Angle obtus :</strong> Entre 90° et 180°</li>
                    <li><strong>Angle plat :</strong> 180°</li>
                </ul>
            `,
            exercises: [
                {
                    id: 'ex-1',
                    question: "Un angle de 45° est un angle :",
                    options: ["Aigu", "Droit", "Obtus", "Plat"],
                    correctAnswer: 0,
                    explanation: "45° est inférieur à 90°, c'est donc un angle aigu."
                },
                {
                    id: 'ex-2',
                    question: "Quel instrument utilise-t-on pour mesurer un angle ?",
                    options: ["La règle", "Le compas", "Le rapporteur", "L'équerre"],
                    correctAnswer: 2,
                    explanation: "Le rapporteur est l'instrument de mesure des angles en degrés."
                }
            ]
        }
    ]
};
