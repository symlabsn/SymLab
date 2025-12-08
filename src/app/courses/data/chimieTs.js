export const chimieTsData = {
    id: 'chimie-ts',
    title: 'Chimie Terminale S',
    chapters: [
        // ==========================================
        // PARTIE 1 : CHIMIE ORGANIQUE
        // ==========================================
        {
            id: 'orga-ts-01',
            part: 'Partie 1 : Chimie Organique',
            title: 'C1. Alcools',
            story: "L'éthanol n'est que le plus célèbre d'une grande famille. Primaires, secondaires, tertiaires... leur structure détermine leur réactivité, notamment l'oxydation ménagée qui peut transformer votre vin en vinaigre.",
            content: `
### 1. Nomenclature et Classes
Groupe caractéristique Hydroxyle **-OH**. Formule générale $R-OH$.

- **Primaire :** Le C porteur du OH est lié à au plus 1 autre C.
- **Secondaire :** Lié à 2 autres C.
- **Tertiaire :** Lié à 3 autres C.

### 2. Oxydation ménagée
Conservation du squelette carboné. Oxydants : $KMnO_4$ ou $K_2Cr_2O_7$ en milieu acide.

- Alcool I $\\rightarrow$ Aldéhyde $\\rightarrow$ Acide Carboxylique.
- Alcool II $\\rightarrow$ Cétone.
- Alcool III $\\rightarrow$ Pas de réaction (dans ces conditions).
            `,
            summary: [
                "Test à la 2,4-DNPH positif pour Aldéhydes et Cétones.",
                "Test à la liqueur de Fehling positif uniquement pour les Aldéhydes.",
                "Réaction de déshydratation intra ou intermoléculaire."
            ],
            exercises: [
                {
                    id: 'ex-alc-1',
                    question: "Que donne l'oxydation ménagée d'un alcool secondaire ?",
                    options: ["Un aldéhyde", "Une cétone", "Un acide carboxylique", "Un ester"],
                    correctAnswer: 1,
                    explanation: "L'oxydation s'arrête à la cétone car il n'y a plus d'hydrogène mobile sur le carbone fonctionnel."
                }
            ]
        },
        {
            id: 'orga-ts-02',
            part: 'Partie 1 : Chimie Organique',
            title: 'C2. Amines',
            story: "Dérivés de l'ammoniac, les amines sont responsables de l'odeur du poisson... mais aussi de la structure des protéines ! Elles sont basiques et nucléophiles.",
            content: `
### 1. Définition et Classes
Dérivés de $NH_3$ où des H sont remplacés par des groupes alkyles.

- **Primaire :** $R-NH_2$
- **Secondaire :** $R-NH-R'$
- **Tertiaire :** $R,R',R''-N$

### 2. Propriétés
**Caractère basique :** Le doublet libre de l'azote peut capter un proton $H^+$. $R-NH_2 + H_2O \\rightleftharpoons R-NH_3^+ + HO^-$.
**Caractère nucléophile :** Réaction avec les dérivés halogénés (Alkylation d'Hofmann).
            `,
            summary: [
                "Solution aqueuse d'amine colore le phénolphtaléine en rose (basique).",
                "Azote trigonal pyramidal (liaisons polarisées).",
                "Nomenclature : N-méthyl... pour les substituants sur l'azote."
            ],
            exercises: [
                {
                    id: 'ex-ami-1',
                    question: "Quelle est la particularité structurale de l'atome d'azote dans une amine ?",
                    options: ["Il a 4 liaisons", "Il possède un doublet non liant", "Il est chargé positivement", "Il est plan"],
                    correctAnswer: 1,
                    explanation: "Ce doublet non liant est responsable des propriétés basiques et nucléophiles."
                }
            ]
        },
        {
            id: 'orga-ts-03',
            part: 'Partie 1 : Chimie Organique',
            title: 'C3. Acides Carboxyliques et Dérivés',
            story: "Le centre de la chimie organique fonctionnelle. À partir de l'acide, on fabrique des esters (parfums), des amides (plastiques) et des anhydrides.",
            content: `
### 1. Acides Carboxyliques
Groupe -COOH. Acides faibles dans l'eau.

### 2. Estérification et Hydrolyse
Acide + Alcool $\\rightleftharpoons$ Ester + Eau.
Réaction **lente, limitée et athermique**. On l'accélère avec un catalyseur ($H_2SO_4$) et la température.

### 3. Autres dérivés
- **Chlorure d'acyle ($R-COCl$)** et **Anhydride d'acide** : Plus réactifs que l'acide.
- **Amides ($R-CO-NH_2$)** : Obtenus par action d'un chlorure d'acyle sur une amine.
            `,
            summary: [
                "Nom des esters : Alcanoate d'alkyle.",
                "Saponification : Ester + Base forte $\\rightarrow$ Savon + Alcool (Totale).",
                "Pour augmenter le rendement : excès d'un réactif ou élimination d'un produit."
            ],
            exercises: [
                {
                    id: 'ex-est-1',
                    question: "Comment rendre l'estérification totale ?",
                    options: ["Chauffer", "Ajouter un catalyseur", "Utiliser un chlorure d'acyle", "Ajouter de l'eau"],
                    correctAnswer: 2,
                    explanation: "Remplacer l'acide par un anhydride ou un chlorure d'acyle rend la réaction totale et rapide."
                }
            ]
        },
        {
            id: 'orga-ts-09',
            part: 'Partie 1 : Chimie Organique',
            title: 'C9. Acides α-aminés',
            story: "Les briques élémentaires de la vie. Avec une fonction acide d'un côté et amine de l'autre, ils peuvent s'enchaîner pour former des protéines. Et ils ont une 'main' (chiralité).",
            content: `
### 1. Structure et Stéréochimie
$R-CH(NH_2)-COOH$. Le carbone $\\alpha$ est asymétrique (sauf Glycine). Existence de deux énantiomères (L et D). Représentation de Fischer.

### 2. Propriétés Acido-basiques
Espèce **Zwitterion** (Amphion) : $R-CH(NH_3^+)-COO^-$. Ampholyte (acide et base).

### 3. La Liaison Peptidique
Réaction entre COOH d'un AA et NH2 d'un autre $\\rightarrow$ Amide (Peptide) + Eau.
            `,
            summary: [
                "Les acides aminés naturels sont de la série L.",
                "Point isoélectrique (pHi) : pH où la charge globale est nulle.",
                "Chiralité : Objet non superposable à son image dans un miroir."
            ],
            exercises: [
                {
                    id: 'ex-aa-1',
                    question: "Qu'est-ce qu'un atome de carbone asymétrique ?",
                    options: ["Lié à 2 atomes identiques", "Lié à 4 atomes/groupes différents", "Lié par une double liaison", "Un carbone terminal"],
                    correctAnswer: 1,
                    explanation: "C'est la condition pour qu'une molécule soit chirale (sauf symétrie interne)."
                }
            ]
        },
        {
            id: 'cin-ts-04',
            part: 'Partie 2 : Cinétique Chimique',
            title: 'C4. Cinétique Chimique',
            story: "Certaines réactions prennent des millions d'années, d'autres sont explosives. La cinétique étudie la vitesse des réactions et comment la contrôler.",
            content: `
### 1. Vitesse de réaction
$v = \\frac{1}{V}\\frac{dx}{dt}$ (V : volume, x : avancement). C'est la pente de la tangente à la courbe x(t).

### 2. Facteurs cinétiques
- Température : Accélère les chocs efficaces.
- Concentration des réactifs : Plus de molécules = plus de chocs.
- Catalyseur : Accélère sans être consommé.

### 3. Temps de demi-réaction $t_{1/2}$
Durée pour atteindre la moitié de l'avancement final.
            `,
            summary: [
                "La vitesse diminue au cours du temps (car les concentrations diminuent).",
                "Trempe : Refroidissement brutal pour stopper la réaction.",
                "Méthodes de suivi : titrage, spectrophotométrie, pressiométrie."
            ],
            exercises: [
                {
                    id: 'ex-cin-1',
                    question: "Comment évolue la vitesse d'une réaction au cours du temps ?",
                    options: ["Elle augmente", "Elle reste constante", "Elle diminue", "Elle s'annule puis repart"],
                    correctAnswer: 2,
                    explanation: "Car la concentration des réactifs (facteur cinétique) diminue."
                }
            ]
        },
        {
            id: 'sol-ts-05',
            part: 'Partie 3 : Acides et Bases',
            title: 'C5. Autoprotolyse de l’eau et pH',
            story: "L'eau n'est pas chimiquement morte. Elle s'ionise elle-même en permanence. C'est la base de l'échelle pH qui mesure l'acidité de tout le reste.",
            content: `
### 1. Autoprotolyse de l'eau
$2H_2O \\rightleftharpoons H_3O^+ + HO^-$.
Produit ionique : $Ke = [H_3O^+][HO^-] = 10^{-14}$ (à 25°C).

### 2. Le pH
$pH = -\\log[H_3O^+]$ $\\Leftrightarrow$ $[H_3O^+] = 10^{-pH}$.

### 3. Indicateurs colorés
Couples acide-base dont les formes acide et basique ont des couleurs différentes. Zone de virage autour du pKa.
            `,
            summary: [
                "Milieu neutre : pH = 7.",
                "Acide : pH < 7, Basique : pH > 7.",
                "Le pH augmente quand on dilue un acide."
            ],
            exercises: [
                {
                    id: 'ex-ph-1',
                    question: "Si $[H_3O^+] = 10^{-3}$ mol/L, quel est le pH ?",
                    options: ["3", "-3", "11", "7"],
                    correctAnswer: 0,
                    explanation: "$pH = -\\log(10^{-3}) = 3$."
                }
            ]
        },
        {
            id: 'sol-ts-06',
            part: 'Partie 3 : Acides et Bases',
            title: 'C6. Acides et Bases Forts',
            story: "Les 'brutes' de la chimie. Ils réagissent totalement avec l'eau. Pas d'équilibre, pas de retour en arrière. Attention, ça brûle.",
            content: `
### 1. Définitions
- **Acide fort (ex: HCl) :** Réaction totale avec l'eau. $pH = -\\log C$.
- **Base forte (ex: NaOH) :** Dissociation totale. $pH = 14 + \\log C$.

### 2. Réaction Acide Fort - Base Forte
$H_3O^+ + HO^- \\rightarrow 2H_2O$. Réaction quasi-totale, très exothermique.

### 3. Dosage
À l'équivalence (pH=7 à 25°C), les quantités de matière sont stœchiométriques : $C_a V_a = C_b V_b$.
            `,
            summary: [
                "Courbe de dosage pH-métrique présente un saut brusque de pH.",
                "L'indicateur coloré doit avoir sa zone de virage contenant le pH équivalent.",
                "Toujours verser l'acide dans l'eau, jamais l'inverse (projections)."
            ],
            exercises: [
                {
                    id: 'ex-fort-1',
                    question: "Quel est le pH d'une solution de soude (NaOH) à $10^{-2}$ mol/L ?",
                    options: ["2", "12", "7", "10"],
                    correctAnswer: 1,
                    explanation: "$pH = 14 + \\log(10^{-2}) = 14 - 2 = 12$."
                }
            ]
        },
        {
            id: 'sol-ts-07',
            part: 'Partie 3 : Acides et Bases',
            title: 'C7. Acides et Bases Faibles - Ka',
            story: "La subtilité de l'équilibre chimique. Ils ne se dissolvent qu'à moitié. Entre l'acide et sa base conjuguée, c'est une lutte permanente d'influence régie par une constante.",
            content: `
### 1. Équilibre chimique
Réaction partielle avec l'eau. Constante d'acidité $Ka = \\frac{[A^-][H_3O^+]}{[AH]}$.
$pKa = -\\log Ka$.

### 2. Relation d'Henderson-Hasselbalch
$pH = pKa + \\log(\\frac{[Base]}{[Acide]})$.

### 3. Classification
Plus le $pKa$ est petit, plus l'acide est fort (et sa base conjuguée faible).
            `,
            summary: [
                "Domaines de prédominance : Si pH < pKa, l'acide prédomine.",
                "L'eau est un ampholyte (couples H3O+/H2O et H2O/HO-).",
                "Le Ka ne dépend que de la température."
            ],
            exercises: [
                {
                    id: 'ex-ka-1',
                    question: "Si pH = pKa, que peut-on dire des concentrations ?",
                    options: ["[Acide] > [Base]", "[Acide] < [Base]", "[Acide] = [Base]", "Elles sont nulles"],
                    correctAnswer: 2,
                    explanation: "D'après la formule $pH = pKa + \\log([B]/[A])$, si le log est nul, le rapport vaut 1."
                }
            ]
        },
        {
            id: 'sol-ts-08',
            part: 'Partie 3 : Acides et Bases',
            title: 'C8. Réaction Faible/Forte et Tampon',
            story: "Comment faire réagir un acide faible ? En le forçant avec une base forte. Cela crée au passage des solutions tampons, cruciales pour la vie (sang).",
            content: `
### 1. Réaction Acide Faible + Base Forte
$AH + HO^- \\rightarrow A^- + H_2O$. Réaction quasi-totale ($K = 10^{14-pKa}$).
À l'équivalence, la solution est **basique** (présence de $A^-$).

### 2. Demi-équivalence et Effet Tampon
Quand on a versé la moitié du volume équivalent, $pH = pKa$.
Une solution tampon varie peu de pH par dilution ou ajout modéré d'acide/base.

### 3. Dosage
Point d'équivalence déterminé par la méthode des tangentes ou de la dérivée.
            `,
            summary: [
                "pH à l'équivalence > 7 pour dosage acide faible / base forte.",
                "pH à l'équivalence < 7 pour dosage base faible / acide fort.",
                "Préparer un tampon : mélanger acide/base conjuguée en quantités équimolaires."
            ],
            exercises: [
                {
                    id: 'ex-tamp-1',
                    question: "À la demi-équivalence d'un titrage d'acide faible, quelle relation est vraie ?",
                    options: ["pH = 7", "pH = pKa", "pH = pKe", "[Acide]=0"],
                    correctAnswer: 1,
                    explanation: "C'est une propriété caractéristique : [Acide restant] = [Base formée]."
                }
            ]
        }
    ]
};
