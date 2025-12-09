
export const newProjects = [
    {
        title: 'Projet 4 : Simulation du Système Solaire',
        duration: '2h30',
        analogy: '🪐 La danse des planètes autour du Soleil',
        content: `**Objectif** : Simuler les orbites des planètes en utilisant les lois de Kepler et Newton.

**Physique** 🌌
La force gravitationnelle entre deux corps est :
$F = G \\frac{m_1 m_2}{r^2}$

Nous utiliserons l'intégration numérique pour prédire la position des planètes à chaque instant.`,
        keyPoints: [
            'Utilisation de la loi de la gravitation universelle',
            'Intégration numérique avec la méthode de Verlet (plus stable que Euler)',
            'Visualisation 2D ou 3D des orbites',
            'Vérification de la 3ème loi de Kepler ($T^2 \\propto a^3$)'
        ],
        code: `import numpy as np
import matplotlib.pyplot as plt

# Constantes (unités astronomiques simplifiées)
G = 4 * np.pi**2  # Si distance en UA et temps en années
M_soleil = 1.0

def force_gravite(r):
    x, y = r
    dist = np.sqrt(x**2 + y**2)
    F_mag = G * M_soleil / dist**2
    return -F_mag * (x/dist), -F_mag * (y/dist)

# Simulation Terre (départ à 1 UA, vitesse v = 2*pi UA/an)
r = np.array([1.0, 0.0]) # Position (x, y)
v = np.array([0.0, 2*np.pi]) # Vitesse
dt = 0.001
steps = 1000

positions = []
for _ in range(steps):
    positions.append(r.copy())
    acc = np.array(force_gravite(r))
    v += acc * dt
    r += v * dt

# Affichage
positions = np.array(positions)
plt.plot(positions[:,0], positions[:,1])
plt.plot(0, 0, 'yo', markersize=10, label='Soleil') # Soleil au centre
plt.axis('equal')
plt.title("Orbite Terrestre")
plt.show()`,
        tip: '💡 Astuce : La méthode d\'Euler simple perd de l\'énergie à long terme. Pour les orbites, la méthode "Velocity Verlet" est bien meilleure !'
    },
    {
        title: 'Projet 5 : Circuit RLC et Résonance',
        duration: '2h',
        analogy: '⚡ Le balancier électrique',
        content: `**Objectif** : Analyser la réponse d'un circuit RLC série et visualiser le phénomène de résonance.

L'équation différentielle du circuit :
$L \\frac{d^2q}{dt^2} + R \\frac{dq}{dt} + \\frac{1}{C}q = E(t)$

C'est l'équivalent électrique d'un système masse-ressort amorti !`,
        keyPoints: [
            'Résolution d\'équation différentielle du 2nd ordre',
            'Étude des régimes : pseudo-périodique, critique, apériodique',
            'Calcul de la fréquence de résonance $f_0 = \\frac{1}{2\\pi\\sqrt{LC}}$',
            'Tracé de la bande passante'
        ],
        code: `import numpy as np
import matplotlib.pyplot as plt
from scipy.integrate import odeint

# Paramètres
R = 10    # Ohms
L = 0.1   # Henry
C = 1e-4  # Farad
E0 = 10   # Volts (amplitude générateur)
omega = 1.0 # Pulsation forcée

def circuit_RLC(y, t, R, L, C, E0, omega):
    q, i = y # charge, intensité
    didt = (E0 * np.sin(omega*t) - R*i - q/C) / L
    dqdt = i
    return [dqdt, didt]

t = np.linspace(0, 0.5, 500)
y0 = [0, 0] # q(0)=0, i(0)=0

sol = odeint(circuit_RLC, y0, t, args=(R, L, C, E0, 314)) # 50Hz -> w=314
i_sol = sol[:, 1]

plt.plot(t, i_sol)
plt.title("Courant dans le circuit RLC")
plt.xlabel("Temps (s)")
plt.ylabel("Intensité (A)")
plt.grid()
plt.show()`,
        tip: '💡 Astuce : Changez la valeur de R pour voir comment l\'amortissement affecte les oscillations!'
    },
    {
        title: 'Projet 6 : Optimisation de Portefeuille (Finance)',
        duration: '3h',
        analogy: '💰 Ne pas mettre tous ses œufs dans le même panier',
        content: `**Objectif** : Trouver la meilleure répartition d'investissement entre plusieurs actions pour maximiser le rendement et minimiser le risque.

Nous utiliserons la **Frontière Efficiente de Markowitz**.`,
        keyPoints: [
            'Récupération de données financières réelles (Yahoo Finance)',
            'Calcul de la matrice de covariance (Risque)',
            'Simulation Monte Carlo pour tester des milliers de portefeuilles',
            'Ratio de Sharpe pour évaluer la performance'
        ],
        code: `import numpy as np
import matplotlib.pyplot as plt

# Rendements simulés de 3 actifs (A, B, C)
np.random.seed(42)
returns = np.random.randn(3, 1000) * 0.01 + 0.0005 # Rendements journaliers

simulations = 1000
resultats = np.zeros((3, simulations)) # Rendement, Volatilité, Ratio Sharpe

for i in range(simulations):
    weights = np.random.random(3)
    weights /= np.sum(weights) # Somme = 100%
    
    port_ret = np.sum(weights * np.mean(returns, axis=1)) * 252 # Annuel
    port_vol = np.sqrt(np.dot(weights.T, np.dot(np.cov(returns), weights))) * np.sqrt(252)
    
    resultats[0,i] = port_ret
    resultats[1,i] = port_vol
    resultats[2,i] = port_ret / port_vol # Ratio Sharpe (sans taux sans risque)

plt.scatter(resultats[1,:], resultats[0,:], c=resultats[2,:], cmap='viridis')
plt.colorbar(label='Ratio de Sharpe')
plt.xlabel('Volatilité (Risque)')
plt.ylabel('Rendement Espéré')
plt.title('Frontière Efficiente')
plt.show()`,
        tip: '💡 Astuce : Le portefeuille avec le meilleur Ratio de Sharpe est souvent considéré comme le meilleur compromis risque/rendement.'
    },
    {
        title: 'Projet 7 : Détection de Contours (Traitement d\'Image) ',
        duration: '2h',
        analogy: '👁️ Comment un robot "voit" les formes',
        content: `**Objectif** : Coder un filtre de détection de contours (comme Sobel) à partir de zéro avec NumPy, sans utiliser OpenCV directement pour l'algo.

Une image est juste une matrice de nombres (pixels). Les variations brutales de nombres indiquent un bord.`,
        keyPoints: [
            'Image = Matrice NumPy',
            'Convolution 2D',
            'Filtres de Sobel (Gradient X et Y)',
            'Calcul de la magnitude du gradient'
        ],
        code: `import numpy as np
import matplotlib.pyplot as plt
from scipy.signal import convolve2d

# Création d'une image simple (Carré blanc sur fond noir)
image = np.zeros((100, 100))
image[30:70, 30:70] = 1.0

# Filtres de Sobel
Gx = np.array([[-1, 0, 1], [-2, 0, 2], [-1, 0, 1]])
Gy = np.array([[-1, -2, -1], [0, 0, 0], [1, 2, 1]])

# Convolution
contour_x = convolve2d(image, Gx, mode='same')
contour_y = convolve2d(image, Gy, mode='same')

# Magnitude du gradient (Contours finaux)
contours = np.sqrt(contour_x**2 + contour_y**2)

plt.imshow(contours, cmap='gray')
plt.title("Détection de contours")
plt.show()`,
        tip: '💡 Astuce : La convolution est l\'opération de base des réseaux de neurones convolutionnels(CNN) utilisés en IA pour la vision.'
    },
    {
        title: 'Projet 8 : Calcul de Pi par Monte Carlo',
        duration: '1h30',
        analogy: '🎯 Lancer des fléchettes pour faire des maths',
        content: `**Objectif** : Estimer la valeur de $\\pi$ en utilisant le hasard.

Imaginez un carré de côté 2 (Aire = 4). Dedans, un cercle de rayon 1 (Aire = $\\pi$).
Si on lance des points au hasard :
$\\frac{\\text{Points dans le cercle}}{\\text{Points total}} \\approx \\frac{\\text{Aire Cercle}}{\\text{Aire Carré}} = \\frac{\\pi}{4}$`,
        keyPoints: [
            'Génération de nombres aléatoires uniformes',
            'Géométrie simple (distance à l\'origine)',
            'Loi des grands nombres (la précision augmente avec n)',
            'Visualisation des impacts'
        ],
        code: `import numpy as np
import matplotlib.pyplot as plt

n = 10000
x = np.random.uniform(-1, 1, n)
y = np.random.uniform(-1, 1, n)

distances = np.sqrt(x**2 + y**2)
dans_cercle = distances <= 1

pi_estime = 4 * np.sum(dans_cercle) / n

print(f"Pi estimé : {pi_estime}")
print(f"Erreur : {abs(np.pi - pi_estime):.5f}")

# Visualisation (les 1000 premiers points)
plt.figure(figsize=(6,6))
plt.scatter(x[dans_cercle][:1000], y[dans_cercle][:1000], c='blue', s=1)
plt.scatter(x[~dans_cercle][:1000], y[~dans_cercle][:1000], c='red', s=1)
plt.show()`,
        tip: '💡 Astuce : C\'est une méthode lente pour calculer Pi, mais la méthode Monte Carlo est géniale pour calculer des intégrales complexes en physique!'
    },
    {
        title: 'Projet 9 : Modèle Proie-Prédateur (Lotka-Volterra)',
        duration: '2h',
        analogy: '🐇🦊 Lapins vs Renards : l\'équilibre de la nature',
        content: `**Objectif** : Simuler l'évolution des populations de proies et de prédateurs.

**Équations** :
$dx/dt = \\alpha x - \\beta xy$ (Proies : naissent, mangées)
$dy/dt = \\delta xy - \\gamma y$ (Prédateurs : mangent, meurent)`,
        keyPoints: [
            'Système d\'équations différentielles couplées',
            'Oscillations périodiques',
            'Points d\'équilibre',
            'Portrait de phase'
        ],
        code: `import numpy as np
from scipy.integrate import odeint
import matplotlib.pyplot as plt

def lotka_volterra(y, t, alpha, beta, delta, gamma):
    prey, predator = y
    dprey = alpha * prey - beta * prey * predator
    dpred = delta * prey * predator - gamma * predator
    return [dprey, dpred]

params = (1.1, 0.4, 0.1, 0.4)
y0 = [10, 5] # 10 lapins, 5 renards
t = np.linspace(0, 50, 1000)

res = odeint(lotka_volterra, y0, t, args=params)

plt.plot(t, res[:,0], label='Proies 🐇')
plt.plot(t, res[:,1], label='Prédateurs 🦊')
plt.legend()
plt.title("Dynamique des populations")
plt.show()`,
        tip: '💡 Astuce : Tracez Prédateurs en fonction de Proies (plt.plot(res[:,0], res[:,1])) pour voir les cycles limites elliptiques !'
    },
    {
        title: 'Projet 10 : Chiffrement RSA (Cryptographie)',
        duration: '2h30',
        analogy: '🔐 La clé publique et la clé privée',
        content: `**Objectif** : Implémenter une version simplifiée de l'algorithme RSA qui sécurise Internet.

Repose sur l'arithmétique modulaire et la difficulté de factoriser de grands nombres premiers.`,
        keyPoints: [
            'Nombres premiers',
            'PGCD et Algorithme d\'Euclide étendu',
            'Exponentiation modulaire $c = m^e \\pmod n$',
            'Théorème d\'Euler'
        ],
        code: `def pgcd(a, b):
    while b:
        a, b = b, a % b
    return a

# 1. Génération de clés (simplifié, utiliser de grands nombres en vrai)
p = 61
q = 53
n = p * q # 3233 (Modulus)
phi = (p-1) * (q-1) # 3120

e = 17 # Exposant public (doit être premier avec phi)
# Calcul de d (Exposant privé) tel que (d*e) % phi == 1
d = pow(e, -1, phi) # En Python 3.8+, pow gère l'inverse modulaire

print(f"Clé Publique (e, n): ({e}, {n})")
print(f"Clé Privée (d, n): ({d}, {n})")

# 2. Chiffrement
message = 123 # Message numérique
chiffre = pow(message, e, n)
print(f"Message chiffré : {chiffre}")

# 3. Déchiffrement
dechiffre = pow(chiffre, d, n)
print(f"Message déchiffré : {dechiffre}")`,
        tip: '💡 Astuce : La sécurité de RSA repose sur le fait qu\'il est très facile de multiplier PxQ, mais très difficile de retrouver P et Q à partir de N si N est géant.'
    },
    {
        title: 'Projet 11 : Séries de Fourier (Traitement du Signal)',
        duration: '2h',
        analogy: '🎶 Décomposer un accord en notes individuelles',
        content: `**Objectif** : Reconstruire n'importe quel signal périodique (comme un signal carré) en additionnant des sinusoïdes.

Tout signal périodique est une somme de sinus et cosinus !`,
        keyPoints: [
            'Décomposition harmonique',
            'Calcul des coefficients de Fourier',
            'Phénomène de Gibbs',
            'Synthèse de signal'
        ],
        code: `import numpy as np
import matplotlib.pyplot as plt

# Fonction carrée (période 2*pi)
t = np.linspace(0, 4*np.pi, 1000)
carre = np.sign(np.sin(t))

# Reconstruction Fourier (Somme des harmoniques impaires)
reconstruction = np.zeros_like(t)
k_max = 10 # Nombre d'harmoniques

for k in range(1, k_max*2, 2): # 1, 3, 5, ...
    bn = 4 / (k * np.pi) # Coefficient pour onde carrée
    reconstruction += bn * np.sin(k * t)

plt.plot(t, carre, 'k--', alpha=0.5, label='Signal Carré')
plt.plot(t, reconstruction, 'r', label=f'Fourier (k={k_max})')
plt.title("Synthèse de Fourier")
plt.legend()
plt.show()`,
        tip: '💡 Astuce : Plus vous ajoutez d\'harmoniques, plus le signal ressemble au carré parfait.Observez les petites oscillations aux coins(Phénomène de Gibbs).'
    },
    {
        title: 'Projet 12 : Équation de la Chaleur 1D',
        duration: '3h',
        analogy: '🔥 Comment la chaleur se propage dans une barre de fer',
        content: `**Objectif** : Résoudre l'équation aux dérivées partielles (EDP) de la chaleur par la méthode des différences finies.

$\\frac{\\partial u}{\\partial t} = \\alpha \\frac{\\partial^2 u}{\\partial x^2}$`,
        keyPoints: [
            'Discrétisation spatiale et temporelle',
            'Schéma explicite (Attention à la stabilité !)',
            'Conditions aux limites',
            'Visualisation dynamique (Heatmap)'
        ],
        code: `import numpy as np
import matplotlib.pyplot as plt

# Paramètres
L = 1.0 # Longueur barre
Nx = 50 # Points espace
dx = L / (Nx - 1)
alpha = 0.01 # Diffusivité thermique
dt = 0.0001 # Pas de temps
Nt = 1000 # Pas de temps total

# Stabilité (Critère CFL)
print(f"CFL: {alpha * dt / dx**2:.4f} (Doit être < 0.5)")

u = np.zeros(Nx)
# Condition initiale : Barre chaude au milieu
u[20:30] = 100.0 

# Boucle temporelle
for n in range(Nt):
    u_new = u.copy()
    for i in range(1, Nx-1):
        u_new[i] = u[i] + alpha * dt / dx**2 * (u[i+1] - 2*u[i] + u[i-1])
    u = u_new

plt.plot(np.linspace(0, L, Nx), u)
plt.title(f"Température après {Nt} itérations")
plt.xlabel("Position")
plt.ylabel("Température")
plt.show()`,
        tip: '💡 Astuce : Si votre simulation "explose" avec des valeurs infinies, réduisez le pas de temps `dt`. C\'est un problème de stabilité numérique.'
    },
    {
        title: 'Projet 13 : L\\'Ensemble de Mandelbrot(Fractales)',
    duration: '2h',
        analogy: '🌸 L\\'infini mathématique dans une image',
    content: `**Objectif** : Générer et visualiser la plus célèbre des fractales.

Pour chaque point $c$ du plan complexe, on itère $z_{n+1} = z_n^2 + c$ (avec $z_0=0$).
Si la suite reste bornée, le point est dans l'ensemble.`,
    keyPoints: [
        'Nombres complexes',
        'Suites divergentes',
        'Calcul vectoriel (Broadcasting) avec NumPy',
        'Affichage d\\'image haute résolution'
    ],
    code: `import numpy as np
import matplotlib.pyplot as plt

def mandelbrot(h, w, max_iter=20):
    y, x = np.ogrid[-1.4:1.4:h*1j, -2:0.8:w*1j]
    c = x + y*1j
    z = c
    divtime = max_iter + np.zeros(z.shape, dtype=int)

    for i in range(max_iter):
        z = z**2 + c
        diverge = z*np.conj(z) > 4
        div_now = diverge & (divtime == max_iter)
        divtime[div_now] = i
        z[diverge] = 2

    return divtime

plt.figure(figsize=(10,10))
plt.imshow(mandelbrot(500, 500), cmap='magma')
plt.axis('off')
plt.show()`,
    tip: '💡 Astuce : NumPy est des centaines de fois plus rapide qu\'une boucle for pixel par pixel pour ce genre de calcul!'
},
{
    title: 'Projet 14 : Effet Magnus (La Physique du Ballon Brossé)',
        duration: '2h30',
            analogy: '🍌 Le "Banana Shot" de Roberto Carlos',
                content: `**Objectif** : Simuler la trajectoire d'un ballon en rotation (spin).

La force de Magnus dévie le ballon perpendiculairement à sa vitesse et son axe de rotation.
$F_M = S (\\omega \\times v)$`,
                    keyPoints: [
                        'Produit vectoriel en 3D',
                        'Forces aérodynamiques avancées',
                        'Simulation 3D',
                        'Impact du spin sur la trajectoire'
                    ],
                        code: `import numpy as np
import matplotlib.pyplot as plt
from scipy.integrate import odeint

# Paramètres
m = 0.43 # kg
r = 0.11 # m
A = np.pi * r**2
rho = 1.2
Cd = 0.3 # Traînée
Cl = 0.3 # Portance (Magnus)

# État initial : x, y, z, vx, vy, vz
y0 = [0, 0, 0, 30, 0, 0] # Tir puissant vers X
omega = np.array([0, 0, 50]) # Rotation autour de Z (Top spin)

def tir_brosse(state, t):
    x, y, z, vx, vy, vz = state
    v = np.array([vx, vy, vz])
    v_norm = np.linalg.norm(v)
    
    # Forces
    F_drag = -0.5 * rho * A * Cd * v_norm * v
    F_magnus = 0.5 * rho * A * Cl * np.cross(omega, v) # Produit vectoriel
    F_grav = np.array([0, -9.81 * m, 0])
    
    a = (F_drag + F_magnus + F_grav) / m
    
    return [vx, vy, vz, a[0], a[1], a[2]]

t = np.linspace(0, 3, 100)
sol = odeint(tir_brosse, y0, t)

# Vue de dessus (X vs Z) pour voir la déviation latérale !
plt.plot(sol[:,0], sol[:,2])
plt.title("Vue de dessus (Déviation latérale due au spin)")
plt.xlabel("Distance (X)")
plt.ylabel("Déviation (Z)")
plt.grid()
plt.show()`,
                            tip: '💡 Astuce : C\'est cet effet qui fait "tourner" les balles de tennis(lift) ou les ballons de foot(coups francs brossés).'
},
{
    title: 'Projet 15 : Classification des Iris (Intro Machine Learning)',
        duration: '2h',
            analogy: '🌸 Apprendre à l\'ordinateur à reconnaître des fleurs',
                content: `**Objectif** : Créer un modèle simple capable de reconnaître l'espèce d'une fleur Iris à partir de la taille de ses pétales.

Nous utiliserons l'algorithme **K-Nearest Neighbors (KNN)**, intuitif et puissant.`,
                    keyPoints: [
                        'Dataset célèbre "Iris"',
                        'Visualisation des données (Scatter plot)',
                        'Algorithme KNN (Voisins les plus proches)',
                        'Matrice de confusion'
                    ],
                        code: `import matplotlib.pyplot as plt
from sklearn import datasets
from sklearn.neighbors import KNeighborsClassifier
from sklearn.model_selection import train_test_split

# 1. Charger les données
iris = datasets.load_iris()
X = iris.data[:, :2]  # On garde que 2 caractéristiques pour visualiser (Longueur/Largeur Sépale)
y = iris.target

# 2. Entraîner le modèle
knn = KNeighborsClassifier(n_neighbors=5)
knn.fit(X, y)

# 3. Prédiction d'une nouvelle fleur
nouvelle_fleur = [[5.0, 3.5]]
prediction = knn.predict(nouvelle_fleur)
nom_espece = iris.target_names[prediction[0]]

print(f"La nouvelle fleur est probablement un : {nom_espece}")

# 4. Visualisation
plt.scatter(X[:, 0], X[:, 1], c=y, cmap='viridis', edgecolor='k')
plt.scatter(nouvelle_fleur[0][0], nouvelle_fleur[0][1], c='red', s=100, marker='x', label='Nouvelle fleur')
plt.xlabel('Longueur Sépale')
plt.ylabel('Largeur Sépale')
plt.legend()
plt.title("Classification des Iris")
plt.show()`,
                            tip: '💡 Astuce : Scikit-Learn (sklearn) est la bibliothèque standard pour le Machine Learning classique en Python.'
}
];
