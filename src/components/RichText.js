import React, { useEffect, useState, useRef } from 'react';

export default function RichText({ children }) {
    const [katexReady, setKatexReady] = useState(false);
    const containerRef = useRef(null);

    // Wait for KaTeX to be available in the window
    useEffect(() => {
        if (typeof window !== 'undefined' && window.katex) {
            setKatexReady(true);
        } else {
            const interval = setInterval(() => {
                if (window.katex) {
                    setKatexReady(true);
                    clearInterval(interval);
                }
            }, 100);
            return () => clearInterval(interval);
        }
    }, []);

    // Re-render math when Ready
    useEffect(() => {
        if (katexReady && containerRef.current && window.katex) {
            // Find all math spans and render
            const mathElements = containerRef.current.querySelectorAll('[data-tex]');
            mathElements.forEach(elem => {
                const tex = elem.getAttribute('data-tex');
                const isDisplay = elem.getAttribute('data-display') === 'true';
                try {
                    window.katex.render(tex, elem, {
                        displayMode: isDisplay,
                        throwOnError: false,
                        macros: {
                            "\\R": "\\mathbb{R}",
                            "\\N": "\\mathbb{N}"
                        }
                    });
                } catch (e) {
                    elem.innerText = tex;
                    console.error("KaTeX error:", e);
                }
            });
        }
    }, [katexReady, children]);

    const parseInline = (text) => {
        if (!text) return null;
        // Split by math delimiters $...$ or $$...$$ first to protect latex
        // Then parse markdown bold/italic inside non-math parts (rare overlap but cleaner)
        // OR simply split by all tokens.
        // Let's do a simple split that respects order.

        // Regex for tokens: $$math$$, $math$, **bold**, *italic*, `code`
        const regex = /(\$\$[\s\S]*?\$\$|\$[\s\S]*?\$|\*\*.*?\*\*|\*.*?\*|`[^`]+`)/g;
        const parts = text.split(regex);

        return parts.map((part, index) => {
            if (part.startsWith('$$') && part.endsWith('$$')) {
                const tex = part.slice(2, -2);
                return (
                    <span key={index} className="block my-4 text-center overflow-x-auto" data-tex={tex} data-display="true">
                        {/* Placeholder until hydration */}
                        {tex}
                    </span>
                );
            }
            if (part.startsWith('$') && part.endsWith('$')) {
                const tex = part.slice(1, -1);
                return (
                    <span key={index} className="px-1 text-[#00F5D4]" data-tex={tex} data-display="false">
                        {tex}
                    </span>
                );
            }
            if (part.startsWith('**') && part.endsWith('**')) {
                return <strong key={index} className="font-bold text-white">{part.slice(2, -2)}</strong>;
            }
            if (part.startsWith('*') && part.endsWith('*')) {
                return <em key={index} className="italic text-gray-400">{part.slice(1, -1)}</em>;
            }
            if (part.startsWith('`') && part.endsWith('`')) {
                return (
                    <code key={index} className="bg-white/10 text-yellow-300 px-1 rounded font-mono text-sm">
                        {part.slice(1, -1)}
                    </code>
                );
            }
            return part;
        });
    };

    const renderBlock = (block, idx) => {
        // Headers
        if (block.startsWith('### ')) {
            return (
                <h4 key={idx} className="text-xl font-bold text-[#00F5D4] mt-8 mb-4 border-l-4 border-[#00F5D4] pl-3">
                    {parseInline(block.replace('### ', ''))}
                </h4>
            );
        }
        if (block.startsWith('## ')) {
            return (
                <h3 key={idx} className="text-2xl font-bold text-white mt-10 mb-6 pb-2 border-b border-white/10">
                    {parseInline(block.replace('## ', ''))}
                </h3>
            );
        }

        // List Item (Bullet)
        if (block.startsWith('- ')) {
            return (
                <div key={idx} className="flex gap-3 my-2 ml-4">
                    <span className="text-[#00F5D4]">•</span>
                    <span className="text-gray-300">{parseInline(block.slice(2))}</span>
                </div>
            );
        }

        // List Item (Numbered) '1. '
        const numMatch = block.match(/^(\d+)\.\s+(.*)/);
        if (numMatch) {
            return (
                <div key={idx} className="flex gap-3 my-2 ml-4">
                    <span className="font-bold text-[#7C3AED] min-w-[1.5rem]">{numMatch[1]}.</span>
                    <span className="text-gray-300">{parseInline(numMatch[2])}</span>
                </div>
            );
        }

        // Regular Paragraph - preserve line breaks by treating as separate block if it's just text
        // But here we receive line-by-line from the splitter below?
        // Actually best to render generic text with <p> or <div> but handle empty lines as spacers.
        if (block.trim() === '') return <div key={idx} className="h-4" />;

        return (
            <p key={idx} className="text-gray-300 leading-relaxed my-2">
                {parseInline(block)}
            </p>
        );
    };

    // Pre-process children into lines/blocks
    const processContent = (input) => {
        if (!input) return [];
        // Split by newline to handle line-by-line formatting (lists etc)
        // But we want to keep some paragraph structure?
        // Simple approach: Split by \n, render each line as a block.
        // This fixes the "swallowed text" issue.
        return input.split('\n');
    };

    return (
        <div className="prose prose-invert max-w-none font-sans" ref={containerRef}>
            {processContent(children).map((line, i) => renderBlock(line, i))}
        </div>
    );
}
