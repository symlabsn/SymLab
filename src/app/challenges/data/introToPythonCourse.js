export const introToPythonCourse = [
    {
        id: "intro_install",
        title: "Introduction and Installations",
        chapters: [
            { id: "jupyter", title: "Using Python through Jupyter (Anaconda)" },
            { id: "colab", title: "Using Python via Google Colab" },
            { id: "help", title: "Getting help in Python" }
        ]
    },
    {
        id: "arithmetic",
        title: "Arithmetic",
        chapters: [
            { id: "basic_ops", title: "Addition, subtraction, multiplication, division" },
            { id: "variables", title: "Using variables" },
            { id: "printing", title: "Printing equations in Jupyter" },
            { id: "comments", title: "Writing comments" },
            { id: "exponents", title: "Exponents (powers)" },
            { id: "loops_powers", title: "Using for-loops for powers" },
            { id: "order_ops", title: "Order of operations" },
            { id: "inequalities", title: "Testing inequalities & Boolean types" },
            { id: "if_logic", title: "If-statements and logical operators" },
            { id: "abs_val", title: "Absolute value" },
            { id: "modulus", title: "Remainder after division (modulus)" },
            { id: "interactive_1", title: "Create interactive math functions, Part 1" },
            { id: "interactive_2", title: "Create interactive math functions, Part 2" },
            { id: "interactive_3", title: "Create interactive math functions, Part 3" },
            { id: "bug_hunt", title: "Arithmetic Bug Hunt!" }
        ]
    },
    // ... Truncated for brevity, normally I'd put all content here but I'm careful about length and encoding risks.
    // I will put the rest of the structure in subsequent edits if needed, but let's try the full structure.
    {
        id: "sympy_intro",
        title: "Introduction to Sympy",
        chapters: [
            { id: "sympy_1", title: "Intro to Sympy, Part 1" },
            { id: "latex_intro", title: "Intro to LaTeX" },
            { id: "sympy_2", title: "Intro to Sympy, Part 2" },
            { id: "f_strings", title: "Printing with f-strings" },
            { id: "exponents_law", title: "Example: Law of Exponents with Sympy" },
            { id: "sympy_latex_bug", title: "Sympy/Latex Bug Hunt!" },
            { id: "latex_beauty", title: "Introduction to LaTeX (Beautiful Equations)" }
        ]
    },
    {
        id: "python_types",
        title: "Python Data Types",
        chapters: [
            { id: "nums_strings", title: "Numbers and Strings" },
            { id: "lists_numpy", title: "Lists and Numpy Arrays" }
        ]
    },
    {
        id: "algebra_1",
        title: "Algebra 1",
        chapters: [
            { id: "solve_x", title: "Solving for x" },
            { id: "solve_x_ex", title: "Solving for x: Exercises" },
            { id: "expanding", title: "Expanding terms" },
            { id: "matrices_numpy", title: "Creating and accessing matrices with numpy" },
            { id: "mult_table", title: "Exercise: Multiplication Table" },
            { id: "properties", title: "Associative, Commutative, Distributive properties" },
            { id: "lists_more", title: "Creating and working with Python lists" },
            { id: "slicing", title: "More on 'slicing' in Python" },
            { id: "gcd", title: "Greatest Common Denominator (GCD)" },
            { id: "gcd_ex", title: "GCD: Exercises" },
            { id: "dictionaries", title: "Introduction to Python Dictionaries" },
            { id: "prime_factor", title: "Prime Factorization" },
            { id: "inequalities_solve", title: "Solving Inequalities" },
            { id: "poly_add", title: "Adding Polynomials" },
            { id: "poly_mult", title: "Multiplying Polynomials" },
            { id: "poly_div", title: "Dividing by Polynomials" },
            { id: "factoring", title: "Factoring Polynomials" },
            { id: "alg1_bug", title: "Algebra 1 Bug Hunt!" }
        ]
    },
    {
        id: "graphing",
        title: "Graphing",
        chapters: [
            { id: "coords", title: "Plotting coordinates on a plane" },
            { id: "coords_ex", title: "Plotting coordinates: Exercise" },
            { id: "lines_1", title: "Graphing lines Part 1: Start/End notation" },
            { id: "lines_2", title: "Graphing lines Part 2: Slope-intercept form" },
            { id: "rational", title: "Graphing rational functions" },
            { id: "sympy_plot", title: "Plotting with Sympy" },
            { id: "sympy_plot_ex", title: "Plotting with Sympy: Exercises" },
            { id: "accountability", title: "Self-accountability in online learning" },
            { id: "matrix_images", title: "Making images from matrices" },
            { id: "matrix_img_ex", title: "Images from matrices: Exercise" },
            { id: "polygons", title: "Drawing patches with polygons" },
            { id: "export_img", title: "Exporting graphics as pictures" },
            { id: "graph_bug", title: "Graphing Bug Hunt!" }
        ]
    },
    {
        id: "algebra_2",
        title: "Algebra 2",
        chapters: [
            { id: "sum_prod", title: "Summation and products" },
            { id: "discrete_diff", title: "Differences (Discrete derivative)" },
            { id: "roots_poly", title: "Roots of polynomials" },
            { id: "roots_ex", title: "Roots of polynomials: Exercise" },
            { id: "quadratic", title: "The Quadratic Equation" },
            { id: "complex_add", title: "Complex Numbers: Addition & Subtraction" },
            { id: "complex_mult", title: "Complex Numbers: Conjugate & Multiplication" },
            { id: "complex_div", title: "Complex Numbers: Division" },
            { id: "complex_graph", title: "Graphing Complex Numbers" },
            { id: "quad_complex", title: "Revisiting Quadratic Eq with Complex Numbers" },
            { id: "unit_circle", title: "The Unit Circle" },
            { id: "nat_exp_log", title: "Natural Exponent and Logarithm" },
            { id: "gaussian_pt", title: "Find a specific point on a Gaussian" },
            { id: "gaussian_fam", title: "Exercise: A family of Gaussians" },
            { id: "roots_unity", title: "Graphing complex roots of unity" },
            { id: "log_lin_space", title: "Log-spaced and Linearly-spaced numbers" },
            { id: "log_props", title: "Logarithm properties: Mult & Div" },
            { id: "sequences", title: "Arithmetic and Geometric sequences" },
            { id: "orders_mag", title: "Orders of Magnitude & Scientific Notation" },
            { id: "min_max", title: "Maxima and Minima of functions" },
            { id: "even_odd", title: "Even and Odd functions" },
            { id: "alg2_bug", title: "Algebra 2 Bug Hunt!" }
        ]
    },
    {
        id: "conic_sections",
        title: "Graphing Conic Sections",
        chapters: [
            { id: "parabolas", title: "Graphing Parabolas" },
            { id: "contours", title: "Creating contours from meshes" },
            { id: "circles", title: "Graphing Circles" },
            { id: "ellipses", title: "Graphing Ellipses" },
            { id: "hyperbolas", title: "Graphing Hyperbolas" },
            { id: "conic_bug", title: "Conic Bug Hunt!" }
        ]
    },
    {
        id: "trigonometry",
        title: "Trigonometry",
        chapters: [
            { id: "random_nums", title: "Introduction to Random Numbers" },
            { id: "random_ex", title: "Intro to Random Numbers: Exercise" },
            { id: "phase_angles", title: "Exercise: Plotting random phase angles" },
            { id: "rad_deg", title: "Converting between Radians and Degrees" },
            { id: "rad_deg_ex", title: "Converting angles: Exercise" },
            { id: "pythagoras", title: "The Pythagorean Theorem" },
            { id: "res_trig", title: "Graphing resolution for Sin, Cos, Tan" },
            { id: "res_ex", title: "Graphing and resolution: Exercise" },
            { id: "euler", title: "Euler's Formula" },
            { id: "euler_ex", title: "Euler's Formula: Exercise" },
            { id: "euler_explode", title: "Exercise: Random Exploding Euler" },
            { id: "snakes", title: "Exercise: Random Snakes with Cosine and Sine" },
            { id: "trig_bug", title: "Trigonometry Bug Hunt!" }
        ]
    },
    {
        id: "art_trig",
        title: "Art of Trigonometry",
        chapters: [
            { id: "astroid", title: "Astroid Radial Curve" },
            { id: "rose", title: "Rose Curves" },
            { id: "squircle", title: "Squircle" },
            { id: "log_spiral", title: "Logarithmic Spiral" },
            { id: "logistic", title: "Logistic Map" }
        ]
    },
    {
        id: "calculus",
        title: "Calculus",
        chapters: [
            { id: "proofs_intuition", title: "Mathematical proofs vs Intuition" },
            { id: "limits", title: "Computing Limits of a function" },
            { id: "limits_ex", title: "Computing Limits: Exercise" },
            { id: "piecewise", title: "Piecewise functions" },
            { id: "deriv_poly", title: "Derivatives of Polynomials" },
            { id: "deriv_poly_ex", title: "Derivatives of Polynomials: Exercise" },
            { id: "deriv_trig", title: "Derivatives of Trig functions" },
            { id: "deriv_trig_ex", title: "Derivatives of Trig functions: Exercise" },
            { id: "tangent_line", title: "Graphing a function tangent line" },
            { id: "tangent_ex", title: "Graphing tangent lines: Exercise" },
            { id: "crit_points", title: "Finding critical points" },
            { id: "crit_ex", title: "Finding critical points: Exercise" },
            { id: "partial_deriv", title: "Partial Derivatives" },
            { id: "integrals", title: "Indefinite and Definite Integrals" },
            { id: "fund_theorem", title: "Exercise: Fundamental Theorem of Calculus" },
            { id: "area_curves", title: "Area between two curves" },
            { id: "area_ex", title: "Area between two curves: Exercise" },
            { id: "calc_bug", title: "Calculus Bug Hunt!" }
        ]
    },
    {
        id: "linear_algebra",
        title: "Linear Algebra",
        chapters: [
            { id: "vectors", title: "Row and Column Vectors" },
            { id: "vector_ops", title: "Adding and Scalar-multiplying Vectors" },
            { id: "dot_product", title: "The Dot Product" },
            { id: "correlation", title: "Dot Product App: Correlation Coefficient" },
            { id: "outer_product", title: "The Outer Product" },
            { id: "matrix_mult", title: "Matrix Multiplication" },
            { id: "transposing", title: "Transposing Vectors and Matrices" },
            { id: "special_matrices", title: "Various Special Matrices" },
            { id: "matrix_inv", title: "Matrix Inverse" },
            { id: "pseudo_inv", title: "Matrix Pseudoinverse: Exercise" },
            { id: "systems_eq", title: "Solving a System of Equations" },
            { id: "visual_mult", title: "Visualizing Matrix-Vector Multiplication" },
            { id: "eigen", title: "Eigenvalues and Eigenvectors" },
            { id: "eigen_decomp", title: "Eigendecomposition: Exercise" },
            { id: "svd", title: "Singular Value Decomposition (SVD)" },
            { id: "svd_einstein", title: "SVD of Einstein: Exercise" },
            { id: "lin_alg_bug", title: "Linear Algebra Bug Hunt!" }
        ]
    },
    {
        id: "probabilities",
        title: "Probabilities and Histograms",
        chapters: [
            { id: "histograms", title: "Histograms and Probability Densities" },
            { id: "prob_ex", title: "Probability Exercise: Math functions" },
            { id: "coin_toss", title: "Virtual Coin Tosses" },
            { id: "loaded_dice", title: "Exercise: Virtual Weighted Dice" },
            { id: "distributions", title: "Building Distributions from Random Numbers" },
            { id: "normalize_gauss", title: "Exercise: Normalize any distribution to Gaussian" },
            { id: "clt", title: "The Central Limit Theorem (CLT)" },
            { id: "clt_ex", title: "Exercise: The Central Limit Theorem" },
            { id: "joint_prob", title: "Joint Probability Distributions" },
            { id: "prob_bug", title: "Probability Bug Hunt!" }
        ]
    },
    {
        id: "number_theory",
        title: "Number Theory",
        chapters: [
            { id: "perfect_nums", title: "Counting Perfect Numbers" },
            { id: "pythag_triplets", title: "Euclid's Pythagorean Triplets" },
            { id: "fermat", title: "Fermat's Theorem" },
            { id: "sequences_plot", title: "Plotting Number Sequences" },
            { id: "convergent", title: "Exercise: Con/Divergent Sequences" },
            { id: "heron", title: "Heron's Method of Square Roots" },
            { id: "heron_mosquito", title: "Exercise: Heron's Mosquito Spaceship" },
            { id: "smooth_nums", title: "Smooth Numbers" },
            { id: "smooth_ex", title: "Exercise: Smooth Numbers" },
            { id: "num_theory_bug", title: "Number Theory Bug Hunt!" }
        ]
    }
];

// Helper to get total chapters
export const getTotalChapters = () => {
    return introToPythonCourse.reduce((acc, module) => acc + module.chapters.length, 0);
};
