'use client';

import { useEffect, useRef } from 'react';
import katex from 'katex';
import 'katex/dist/katex.min.css';

export default function MathDisplay({ children, inline = false }) {
    const containerRef = useRef(null);

    useEffect(() => {
        if (containerRef.current && children) {
            try {
                // Convertir les notations Python en LaTeX
                let latex = String(children)
                    // Puissances : ** -> ^
                    .replace(/\*\*(\d+)/g, '^{$1}')
                    .replace(/\*\*\(([^)]+)\)/g, '^{$1}')
                    // Multiplication : * -> \cdot (sauf dans **)
                    .replace(/(?<!\*)\*(?!\*)/g, '\\cdot ')
                    // Fractions : x/y -> \frac{x}{y}
                    .replace(/(\d+)\/(\d+)/g, '\\frac{$1}{$2}')
                    // Racines : sqrt -> \sqrt
                    .replace(/sqrt\(([^)]+)\)/g, '\\sqrt{$1}')
                    // Pi
                    .replace(/\bpi\b/g, '\\pi')
                    // Infini
                    .replace(/oo\b/g, '\\infty')
                    // Exp
                    .replace(/exp\(([^)]+)\)/g, 'e^{$1}')
                    // Fonctions trigonométriques
                    .replace(/sin\(/g, '\\sin(')
                    .replace(/cos\(/g, '\\cos(')
                    .replace(/tan\(/g, '\\tan(')
                    // Somme
                    .replace(/Sum/g, '\\sum')
                    // Intégrale
                    .replace(/Integral/g, '\\int')
                    // Limite
                    .replace(/Limit/g, '\\lim');

                katex.render(latex, containerRef.current, {
                    throwOnError: false,
                    displayMode: !inline,
                    output: 'html'
                });
            } catch (error) {
                // Si le rendu échoue, afficher le texte brut
                if (containerRef.current) {
                    containerRef.current.textContent = children;
                }
            }
        }
    }, [children, inline]);

    return (
        <span
            ref={containerRef}
            className={inline ? 'inline-math' : 'block-math my-2'}
        />
    );
}
