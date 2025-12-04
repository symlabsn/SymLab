#!/usr/bin/env python3
"""
Script pour améliorer les notations mathématiques dans projectData.js
Remplace les notations ASCII par des symboles Unicode élégants
"""

import re

# Dictionnaire de remplacement pour les notations mathématiques
math_replacements = {
    # Opérateurs
    r'\*': '×',
    r' / ': ' ÷ ',
    r'!=': '≠',
    r'<=': '≤',
    r'>=': '≥',
    r'~=': '≈',
    r'->': '→',
    
    # Symboles grecs et mathématiques
    r'alpha': 'α',
    r'beta': 'β',
    r'gamma': 'γ',
    r'delta': 'δ',
    r'Delta': 'Δ',
    r'epsilon': 'ε',
    r'theta': 'θ',
    r'lambda': 'λ',
    r'mu': 'μ',
    r'pi': 'π',
    r'rho': 'ρ',
    r'sigma': 'σ',
    r'Sigma': 'Σ',
    r'tau': 'τ',
    r'phi': 'φ',
    r'Phi': 'Φ',
    r'omega': 'ω',
    r'Omega': 'Ω',
    
    # Exposants communs
    r'\^2': '²',
    r'\^3': '³',
    r'\^n': 'ⁿ',
    r'\^e': 'ᵉ',
    
    # Indices
    r'_0': '₀',
    r'_1': '₁',
    r'_2': '₂',
    r'_n': 'ₙ',
    
    # Symboles mathématiques
    r'sqrt': '√',
    r'integral': '∫',
    r'sum': 'Σ',
    r'product': 'Π',
    r'infinity': '∞',
    r'partial': '∂',
    r'nabla': '∇',
    
    # Ensembles
    r' in ': ' ∈ ',
    r' not in ': ' ∉ ',
    r'subset': '⊂',
    r'union': '∪',
    r'intersection': '∩',
    
    # Logique
    r' and ': ' ∧ ',
    r' or ': ' ∨ ',
    r' not ': ' ¬',
    r'forall': '∀',
    r'exists': '∃',
}

def improve_math_notation(text):
    """Améliore la notation mathématique dans une chaîne"""
    improved = text
    
    # Appliquer les remplacements (attention à l'ordre !)
    # On ne remplace que dans les champs 'explanation' et 'objective'
    
    return improved

def process_file(input_path, output_path):
    """Traite le fichier projectData.js"""
    with open(input_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Améliorer les notations spécifiques
    improvements = [
        # RSA
        (r'C = M\^e mod n', 'C ≡ Mᵉ (mod n)'),
        (r'phi = \(p-1\)\*\(q-1\)', 'φ(n) = (p−1)(q−1)'),
        
        # Fibonacci
        (r'F\(n\+1\)/F\(n\)', 'F_{n+1}/F_n'),
        (r'\(1\+sqrt\(5\)\)/2', '(1+√5)/2'),
        
        # Fourier
        (r'an et bn', 'aₙ et bₙ'),
        
        # Probabilités
        (r'P\(', '℗('),
        
        # Physique
        (r'T = 2\*pi\*sqrt\(L/g\)', 'T = 2π√(L/g)'),
        (r'gamma = 1 / sqrt\(1 - v\^2/c\^2\)', 'γ = 1/√(1 − v²/c²)'),
        (r'eta = 1 - Tc/Th', 'η = 1 − Tc/Th'),
        
        # Chimie
        (r'pH = pKa \+ log', 'pH = pKa + log₁₀'),
        (r'dN/dt', 'dN/dt'),
        
        # Génie Civil
        (r'EI \* y\'\'', 'EI·y″'),
        (r'Delta_P', 'ΔP'),
    ]
    
    for old, new in improvements:
        content = re.sub(old, new, content)
    
    with open(output_path, 'w', encoding='utf-8') as f:
        f.write(content)
    
    print(f"✅ Fichier amélioré : {output_path}")

if __name__ == '__main__':
    input_file = 'c:/Users/Jules Sambou/Desktop/SymLab/src/app/engineering/projectData.js'
    output_file = input_file  # Écrase le fichier original
    process_file(input_file, output_file)
