export const introToPythonCourse = [
    // ============================================================
    // MODULE 1 : INTRODUCTION ET INSTALLATION
    // ============================================================
    {
        id: "intro_install",
        title: "Introduction et Installation",
        chapters: [
            { id: "jupyter", title: "Utiliser Python avec Jupyter (Anaconda)" },
            { id: "colab", title: "Utiliser Python via Google Colab" },
            { id: "help", title: "Obtenir de l'aide en Python" }
        ]
    },
    // ============================================================
    // MODULE 2 : ARITHMETIQUE
    // ============================================================
    {
        id: "arithmetic",
        title: "Arithmetique",
        chapters: [
            { id: "basic_ops", title: "Addition, soustraction, multiplication, division" },
            { id: "variables", title: "Utiliser des variables" },
            { id: "printing", title: "Afficher des equations dans Jupyter" },
            { id: "comments", title: "Ecrire des commentaires" },
            { id: "exponents", title: "Exposants (puissances)" },
            { id: "loops_powers", title: "Boucles for pour calculer des puissances" },
            { id: "order_ops", title: "Ordre des operations" },
            { id: "inequalities", title: "Tester des inegalites et type Booleen" },
            { id: "if_logic", title: "Instructions if et operateurs logiques" },
            { id: "abs_val", title: "Valeur absolue" },
            { id: "modulus", title: "Reste de la division (modulo)" },
            { id: "interactive_1", title: "Fonctions mathematiques interactives, Partie 1" },
            { id: "interactive_2", title: "Fonctions mathematiques interactives, Partie 2" },
            { id: "interactive_3", title: "Fonctions mathematiques interactives, Partie 3" },
            { id: "bug_hunt", title: "Chasse aux bugs Arithmetique !" }
        ]
    },
    // ============================================================
    // MODULE 3 : INTRODUCTION A SYMPY
    // ============================================================
    {
        id: "sympy_intro",
        title: "Introduction a Sympy",
        chapters: [
            { id: "sympy_1", title: "Introduction a Sympy, Partie 1" },
            { id: "latex_intro", title: "Introduction a LaTeX" },
            { id: "sympy_2", title: "Introduction a Sympy, Partie 2" },
            { id: "f_strings", title: "Affichage avec les f-strings" },
            { id: "exponents_law", title: "Exemple : Loi des exposants avec Sympy" },
            { id: "sympy_latex_bug", title: "Chasse aux bugs Sympy/LaTeX !" },
            { id: "latex_beauty", title: "LaTeX pour de belles equations" }
        ]
    },
    // ============================================================
    // MODULE 4 : TYPES DE DONNEES PYTHON
    // ============================================================
    {
        id: "python_types",
        title: "Types de donnees Python",
        chapters: [
            { id: "nums_strings", title: "Nombres et chaines de caracteres" },
            { id: "lists_numpy", title: "Listes et tableaux NumPy" },
            { id: "lists_numpy_enriched", title: "Maitriser NumPy : Tableaux et operations" }
        ]
    },
    // ============================================================
    // MODULE 5 : ALGEBRE 1
    // ============================================================
    {
        id: "algebra_1",
        title: "Algebre 1",
        chapters: [
            { id: "solve_x", title: "Resoudre une equation en x" },
            { id: "solve_x_ex", title: "Resoudre en x : Exercices" },
            { id: "expanding", title: "Developper des expressions" },
            { id: "matrices_numpy", title: "Creer et manipuler des matrices avec NumPy" },
            { id: "mult_table", title: "Exercice : Table de multiplication" },
            { id: "properties", title: "Proprietes associative, commutative, distributive" },
            { id: "lists_more", title: "Travailler avec les listes Python" },
            { id: "slicing", title: "Le slicing en Python" },
            { id: "gcd", title: "Plus Grand Commun Diviseur (PGCD)" },
            { id: "gcd_ex", title: "PGCD : Exercices" },
            { id: "dictionaries", title: "Introduction aux dictionnaires Python" },
            { id: "prime_factor", title: "Decomposition en facteurs premiers" },
            { id: "inequalities_solve", title: "Resoudre des inequations" },
            { id: "poly_add", title: "Ajouter des polynomes" },
            { id: "poly_mult", title: "Multiplier des polynomes" },
            { id: "poly_div", title: "Diviser des polynomes" },
            { id: "factoring", title: "Factoriser des polynomes" },
            { id: "alg1_bug", title: "Chasse aux bugs Algebre 1 !" }
        ]
    },
    // ============================================================
    // MODULE 6 : GRAPHIQUES
    // ============================================================
    {
        id: "graphing",
        title: "Graphiques",
        chapters: [
            { id: "coords", title: "Tracer des points dans un repere" },
            { id: "coords_ex", title: "Tracer des coordonnees : Exercice" },
            { id: "matplotlib_basics", title: "Matplotlib : Visualisation de donnees" },
            { id: "multiple_plots", title: "Sous-graphiques et layouts avances" },
            { id: "lines_1", title: "Tracer des droites Partie 1 : Notation debut/fin" },
            { id: "lines_2", title: "Tracer des droites Partie 2 : Forme y = mx + p" },
            { id: "rational", title: "Tracer des fonctions rationnelles" },
            { id: "sympy_plot", title: "Tracer avec Sympy" },
            { id: "sympy_plot_ex", title: "Tracer avec Sympy : Exercices" },
            { id: "accountability", title: "Auto-discipline en apprentissage en ligne" },
            { id: "matrix_images", title: "Creer des images a partir de matrices" },
            { id: "matrix_img_ex", title: "Images matricielles : Exercice" },
            { id: "polygons", title: "Dessiner des polygones" },
            { id: "export_img", title: "Exporter des graphiques en images" },
            { id: "graph_bug", title: "Chasse aux bugs Graphiques !" }
        ]
    },
    // ============================================================
    // MODULE 7 : ALGEBRE 2
    // ============================================================
    {
        id: "algebra_2",
        title: "Algebre 2",
        chapters: [
            { id: "sum_prod", title: "Sommes et produits" },
            { id: "discrete_diff", title: "Differences (derivee discrete)" },
            { id: "roots_poly", title: "Racines de polynomes" },
            { id: "roots_ex", title: "Racines de polynomes : Exercice" },
            { id: "quadratic", title: "L'equation du second degre" },
            { id: "complex_add", title: "Nombres complexes : Addition et soustraction" },
            { id: "complex_mult", title: "Nombres complexes : Conjugue et multiplication" },
            { id: "complex_div", title: "Nombres complexes : Division" },
            { id: "complex_graph", title: "Representer les nombres complexes" },
            { id: "quad_complex", title: "Equation du 2nd degre avec nombres complexes" },
            { id: "unit_circle", title: "Le cercle trigonometrique" },
            { id: "nat_exp_log", title: "Exponentielle et logarithme neperien" },
            { id: "gaussian_pt", title: "Trouver un point sur une Gaussienne" },
            { id: "gaussian_fam", title: "Exercice : Une famille de Gaussiennes" },
            { id: "roots_unity", title: "Racines n-iemes de l'unite" },
            { id: "log_lin_space", title: "Espaces logarithmique et lineaire" },
            { id: "log_props", title: "Proprietes du logarithme" },
            { id: "sequences", title: "Suites arithmetiques et geometriques" },
            { id: "orders_mag", title: "Ordres de grandeur et notation scientifique" },
            { id: "min_max", title: "Extrema de fonctions" },
            { id: "even_odd", title: "Fonctions paires et impaires" },
            { id: "complex_visualization", title: "Visualiser les nombres complexes" },
            { id: "gaussian_curves", title: "Famille de courbes Gaussiennes" },
            { id: "alg2_bug", title: "Chasse aux bugs Algebre 2 !" }
        ]
    },
    // ============================================================
    // MODULE 8 : SECTIONS CONIQUES
    // ============================================================
    {
        id: "conic_sections",
        title: "Sections coniques",
        chapters: [
            { id: "parabolas", title: "Tracer des paraboles" },
            { id: "contours", title: "Creer des contours a partir de maillages" },
            { id: "circles", title: "Tracer des cercles" },
            { id: "ellipses", title: "Tracer des ellipses" },
            { id: "hyperbolas", title: "Tracer des hyperboles" },
            { id: "conics_visualization", title: "Sections coniques animees" },
            { id: "conic_bug", title: "Chasse aux bugs Coniques !" }
        ]
    },
    // ============================================================
    // MODULE 9 : TRIGONOMETRIE
    // ============================================================
    {
        id: "trigonometry",
        title: "Trigonometrie",
        chapters: [
            { id: "random_nums", title: "Introduction aux nombres aleatoires" },
            { id: "random_ex", title: "Nombres aleatoires : Exercice" },
            { id: "phase_angles", title: "Exercice : Tracer des phases aleatoires" },
            { id: "rad_deg", title: "Conversion radians et degres" },
            { id: "rad_deg_ex", title: "Conversion d'angles : Exercice" },
            { id: "pythagoras", title: "Le theoreme de Pythagore" },
            { id: "res_trig", title: "Resolution graphique pour sin, cos, tan" },
            { id: "res_ex", title: "Resolution graphique : Exercice" },
            { id: "euler", title: "La formule d'Euler" },
            { id: "euler_ex", title: "Formule d'Euler : Exercice" },
            { id: "euler_explode", title: "Exercice : Euler aleatoire explosif" },
            { id: "snakes", title: "Exercice : Serpents avec cos et sin" },
            { id: "trig_visualization", title: "Visualiser la trigonometrie avec NumPy/Matplotlib" },
            { id: "waves_interference", title: "Ondes et interferences" },
            { id: "trig_bug", title: "Chasse aux bugs Trigonometrie !" }
        ]
    },
    // ============================================================
    // MODULE 10 : ART DE LA TRIGONOMETRIE
    // ============================================================
    {
        id: "art_trig",
        title: "Art de la Trigonometrie",
        chapters: [
            { id: "astroid", title: "Courbe radiale Astroide" },
            { id: "rose", title: "Courbes en rose" },
            { id: "squircle", title: "Le Squircle" },
            { id: "log_spiral", title: "Spirale logarithmique" },
            { id: "logistic", title: "Application logistique" },
            { id: "trig_art", title: "Art mathematique avec NumPy" },
            { id: "fractals", title: "Fractales avec NumPy" }
        ]
    },
    // ============================================================
    // MODULE 11 : CALCUL INFINITESIMAL
    // ============================================================
    {
        id: "calculus",
        title: "Calcul infinitesimal",
        chapters: [
            { id: "proofs_intuition", title: "Preuves mathematiques vs Intuition" },
            { id: "limits", title: "Calculer des limites" },
            { id: "limits_ex", title: "Limites : Exercice" },
            { id: "piecewise", title: "Fonctions par morceaux" },
            { id: "deriv_poly", title: "Derivees de polynomes" },
            { id: "deriv_poly_ex", title: "Derivees de polynomes : Exercice" },
            { id: "deriv_trig", title: "Derivees de fonctions trigonometriques" },
            { id: "deriv_trig_ex", title: "Derivees trigo : Exercice" },
            { id: "tangent_line", title: "Tracer une tangente a une courbe" },
            { id: "tangent_ex", title: "Tangentes : Exercice" },
            { id: "crit_points", title: "Trouver les points critiques" },
            { id: "crit_ex", title: "Points critiques : Exercice" },
            { id: "partial_deriv", title: "Derivees partielles" },
            { id: "integrals", title: "Integrales definies et indefinies" },
            { id: "fund_theorem", title: "Exercice : Theoreme fondamental de l'analyse" },
            { id: "area_curves", title: "Aire entre deux courbes" },
            { id: "area_ex", title: "Aire entre courbes : Exercice" },
            { id: "derivative_visualization", title: "Visualiser les derivees" },
            { id: "integral_visualization", title: "Visualiser les integrales" },
            { id: "physics_applications", title: "Applications physiques avec NumPy" },
            { id: "calc_bug", title: "Chasse aux bugs Calcul !" }
        ]
    },
    // ============================================================
    // MODULE 12 : ALGEBRE LINEAIRE
    // ============================================================
    {
        id: "linear_algebra",
        title: "Algebre lineaire",
        chapters: [
            { id: "vectors", title: "Vecteurs lignes et colonnes" },
            { id: "vector_ops", title: "Addition et multiplication scalaire" },
            { id: "dot_product", title: "Le produit scalaire" },
            { id: "correlation", title: "Application : Coefficient de correlation" },
            { id: "outer_product", title: "Le produit exterieur" },
            { id: "matrix_mult", title: "Multiplication matricielle" },
            { id: "transposing", title: "Transposition de vecteurs et matrices" },
            { id: "special_matrices", title: "Matrices speciales" },
            { id: "matrix_inv", title: "Inverse d'une matrice" },
            { id: "pseudo_inv", title: "Pseudo-inverse : Exercice" },
            { id: "systems_eq", title: "Resoudre un systeme d'equations" },
            { id: "visual_mult", title: "Visualiser la multiplication matrice-vecteur" },
            { id: "eigen", title: "Valeurs propres et vecteurs propres" },
            { id: "eigen_decomp", title: "Diagonalisation : Exercice" },
            { id: "svd", title: "Decomposition en valeurs singulieres (SVD)" },
            { id: "svd_einstein", title: "SVD d'Einstein : Exercice" },
            { id: "linalg_numpy", title: "Algebre lineaire avec NumPy" },
            { id: "matrix_visualization", title: "Visualiser les matrices" },
            { id: "lin_alg_bug", title: "Chasse aux bugs Algebre lineaire !" }
        ]
    },
    // ============================================================
    // MODULE 13 : PROBABILITES ET HISTOGRAMMES
    // ============================================================
    {
        id: "probabilities",
        title: "Probabilites et histogrammes",
        chapters: [
            { id: "histograms", title: "Histogrammes et densites de probabilite" },
            { id: "prob_ex", title: "Probabilites : Exercice avec fonctions" },
            { id: "coin_toss", title: "Lancer de piece virtuel" },
            { id: "loaded_dice", title: "Exercice : Des pipes virtuels" },
            { id: "distributions", title: "Construire des distributions aleatoires" },
            { id: "normalize_gauss", title: "Exercice : Normaliser vers une Gaussienne" },
            { id: "clt", title: "Le theoreme central limite" },
            { id: "clt_ex", title: "Theoreme central limite : Exercice" },
            { id: "joint_prob", title: "Distributions de probabilite conjointes" },
            { id: "stats_visualization", title: "Visualiser les distributions statistiques" },
            { id: "monte_carlo", title: "Simulation Monte Carlo" },
            { id: "prob_bug", title: "Chasse aux bugs Probabilites !" }
        ]
    },
    // ============================================================
    // MODULE 14 : THEORIE DES NOMBRES
    // ============================================================
    {
        id: "number_theory",
        title: "Theorie des nombres",
        chapters: [
            { id: "perfect_nums", title: "Compter les nombres parfaits" },
            { id: "pythag_triplets", title: "Triplets pythagoriciens d'Euclide" },
            { id: "fermat", title: "Le theoreme de Fermat" },
            { id: "sequences_plot", title: "Tracer des suites numeriques" },
            { id: "convergent", title: "Exercice : Suites convergentes/divergentes" },
            { id: "heron", title: "Methode de Heron pour les racines carrees" },
            { id: "heron_mosquito", title: "Exercice : Le vaisseau moustique de Heron" },
            { id: "smooth_nums", title: "Nombres friables (smooth numbers)" },
            { id: "smooth_ex", title: "Nombres friables : Exercice" },
            { id: "prime_visualization", title: "Visualiser les nombres premiers" },
            { id: "num_theory_bug", title: "Chasse aux bugs Theorie des nombres !" }
        ]
    }
];

// Helper to get total chapters
export const getTotalChapters = () => {
    return introToPythonCourse.reduce((acc, module) => acc + module.chapters.length, 0);
};
