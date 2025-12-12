// MODULE 10 : ART DE LA TRIGONOMETRIE (Focus Sympy)
export const module10SympyContent = {
    astroid: {
        title: "Courbe radiale Astroïde",
        theorie: `
## Astroïde avec Sympy

Équations paramétriques symboliques :
\`\`\`python
x = a * cos(t)**3
y = a * sin(t)**3
\`\`\`

Sympy peut dériver et simplifier !
        `,
        code: `import sympy as sp
from sympy import cos, sin, symbols, simplify, Rational, sqrt, Abs

t, a = symbols('t a', real=True, positive=True)

print("=== Astroïde avec Sympy ===")

# Équations paramétriques
x = a * cos(t)**3
y = a * sin(t)**3
print(f"x(t) = {x}")
print(f"y(t) = {y}")

# Élimination du paramètre : x^(2/3) + y^(2/3) = a^(2/3)
print("\\n=== Équation implicite ===")
# Vérification symbolique
lhs = (Abs(x)**Rational(2,3) + Abs(y)**Rational(2,3))
print(f"|x|^(2/3) + |y|^(2/3) = a^(2/3)")

# Longueur d'arc (dérivées)
dx = sp.diff(x, t)
dy = sp.diff(y, t)
print(f"\\n=== Dérivées ===")
print(f"dx/dt = {simplify(dx)}")
print(f"dy/dt = {simplify(dy)}")

# Élément d'arc
ds = sqrt(dx**2 + dy**2)
print(f"ds/dt = {simplify(ds)}")`,
        exercice: `Calculez la longueur totale de l'astroïde avec $a = 1$.`
    },

    rose: {
        title: "Courbes en rose",
        theorie: `
## Roses avec Sympy

Équation polaire : $r = \\cos(n\\theta)$

Sympy peut convertir polaire ↔ cartésien :
\`\`\`python
x = r * cos(theta)
y = r * sin(theta)
\`\`\`
        `,
        code: `import sympy as sp
from sympy import cos, sin, symbols, expand, trigsimp, simplify

theta, n = symbols('theta n', real=True)

print("=== Courbes en rose ===")

# Rose générale
r = cos(n * theta)
x = r * cos(theta)
y = r * sin(theta)

print(f"r = cos(nθ)")
print(f"x = r·cos(θ) = {x}")
print(f"y = r·sin(θ) = {y}")

# Cas n = 2 (rose à 4 pétales)
print("\\n=== Rose n = 2 ===")
r2 = cos(2 * theta)
x2 = r2 * cos(theta)
y2 = r2 * sin(theta)
print(f"r = cos(2θ)")
print(f"x = {trigsimp(expand(x2, trig=True))}")
print(f"y = {trigsimp(expand(y2, trig=True))}")

# Nombre de pétales
print("\\n=== Nombre de pétales ===")
for n_val in range(1, 7):
    petales = n_val if n_val % 2 == 1 else 2 * n_val
    print(f"n = {n_val} → {petales} pétales")`,
        exercice: `Montrez que $r = \\sin(3\\theta)$ a 3 pétales.`
    },

    squircle: {
        title: "Le Squircle",
        theorie: `
## Superellipse avec Sympy

$$|x|^n + |y|^n = r^n$$

Sympy peut traiter les valeurs absolues et puissances.
        `,
        code: `import sympy as sp
from sympy import symbols, Abs, Rational, solve, sqrt, simplify

x, y, r, n = symbols('x y r n', real=True, positive=True)

print("=== Superellipse (Squircle) ===")

# Équation générale
eq = Abs(x)**n + Abs(y)**n - r**n
print(f"Équation : |x|^n + |y|^n = r^n")

# Cas particuliers
print("\\n=== Cas particuliers ===")
print("n = 1 : Losange (|x| + |y| = r)")
print("n = 2 : Cercle (x² + y² = r²)")
print("n = 4 : Squircle")
print("n → ∞ : Carré")

# Aire du squircle (n = 4)
print("\\n=== Aire du squircle ===")
# A = 4 * ∫₀^r (r⁴ - x⁴)^(1/4) dx
from sympy import integrate, gamma
# Formule exacte avec fonction Gamma
A = r**2 * (gamma(1 + Rational(1, 4)))**2 / gamma(1 + Rational(1, 2))
print(f"Aire = r² × Γ(5/4)² / Γ(3/2)")
print(f"     ≈ {float(A.subs(r, 1)):.4f} × r²")`,
        exercice: `Comparez l'aire du squircle (n=4) à celle du cercle et du carré.`
    },

    log_spiral: {
        title: "Spirale logarithmique",
        theorie: `
## Spirale avec Sympy

$r = a e^{b\\theta}$

Sympy peut calculer :
- Longueur d'arc
- Courbure
- Aire
        `,
        code: `import sympy as sp
from sympy import exp, symbols, diff, sqrt, simplify, atan, integrate, pi, oo

theta, a, b = symbols('theta a b', real=True, positive=True)

print("=== Spirale logarithmique ===")

# Équation polaire
r = a * exp(b * theta)
print(f"r(θ) = {r}")

# Conversion en cartésien
x = r * sp.cos(theta)
y = r * sp.sin(theta)
print(f"x(θ) = {x}")
print(f"y(θ) = {y}")

# Dérivées
dr = diff(r, theta)
print(f"\\ndr/dθ = {dr}")

# Angle constant avec le rayon
angle = sp.atan(r / dr)
print(f"Angle tangente-rayon = arctan(r/(dr/dθ)) = {simplify(angle)}")
print(f"= arctan(1/b) = constante !")

# Longueur d'arc
ds = sqrt(r**2 + dr**2)
print(f"\\nds = √(r² + (dr/dθ)²) = {simplify(ds)}")

# Auto-similarité
print("\\n=== Auto-similarité ===")
k = symbols('k', positive=True)
r_scaled = r.subs(theta, theta + sp.log(k)/b)
print(f"r(θ + ln(k)/b) = {simplify(r_scaled)}")
print("= k × r(θ) : même forme à toute échelle !")`,
        exercice: `Calculez l'aire balayée entre $\\theta = 0$ et $\\theta = 2\\pi$.`
    },

    logistic: {
        title: "Application logistique",
        theorie: `
## Suite logistique avec Sympy

$x_{n+1} = rx_n(1 - x_n)$

Sympy peut trouver les points fixes symboliquement.
        `,
        code: `import sympy as sp
from sympy import symbols, solve, simplify, Eq, diff

x, r = symbols('x r', real=True)

print("=== Application logistique ===")

# Fonction
f = r * x * (1 - x)
print(f"f(x) = {f}")

# Points fixes : f(x) = x
print("\\n=== Points fixes ===")
pts_fixes = solve(f - x, x)
print(f"f(x) = x → x = {pts_fixes}")

# Stabilité : |f'(x*)| < 1
fp = diff(f, x)
print(f"\\nf'(x) = {fp}")

for pt in pts_fixes:
    derivee = fp.subs(x, pt)
    print(f"f'({pt}) = {simplify(derivee)}")

# Points fixes stables
print("\\n=== Stabilité ===")
print("x* = 0 : stable si |r| < 1")
print("x* = (r-1)/r : stable si |r - 2| < 1, donc 1 < r < 3")

# Cycle 2 : f(f(x)) = x
print("\\n=== Cycle 2 ===")
f2 = f.subs(x, f)
cycle2 = solve(f2 - x, x)
print(f"Points du cycle 2 : {cycle2[:2]} (simplifiés)...")`,
        exercice: `Trouvez la valeur de $r$ où apparaît le premier dédoublement (bifurcation).`
    }
};
