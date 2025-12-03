import React from 'react';

export default function RichText({ children }) {
    // Fonction pour parser le formatage inline (gras, italique, code)
    const parseInline = (text) => {
        if (!text) return null;

        // On sépare le texte par les marqueurs de formatage
        // Regex pour capturer : **gras**, *italique*, `code`
        const parts = text.split(/(\*\*.*?\*\*|\*.*?\*|`.*?`)/g);

        return parts.map((part, index) => {
            // Gras : **texte**
            if (part.startsWith('**') && part.endsWith('**')) {
                return (
                    <strong key={index} className="font-bold text-white">
                        {part.slice(2, -2)}
                    </strong>
                );
            }
            // Italique : *texte*
            if (part.startsWith('*') && part.endsWith('*') && part.length > 2) {
                return (
                    <em key={index} className="italic text-gray-400">
                        {part.slice(1, -1)}
                    </em>
                );
            }
            // Code inline : `texte`
            if (part.startsWith('`') && part.endsWith('`')) {
                return (
                    <code key={index} className="bg-white/10 text-[#00F5D4] px-1.5 py-0.5 rounded font-mono text-sm border border-white/5">
                        {part.slice(1, -1)}
                    </code>
                );
            }
            // Texte normal
            return part;
        });
    };

    // Convertir le texte avec formatage en JSX
    const renderText = (text) => {
        if (!text) return null;

        // Diviser en paragraphes
        const paragraphs = text.split('\n\n');

        return paragraphs.map((para, idx) => {
            // Titres (lignes commençant par #)
            if (para.startsWith('###')) {
                return (
                    <h4 key={idx} className="text-xl font-bold text-white mt-8 mb-4 flex items-center gap-3">
                        <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-[#00F5D4]/10 text-[#00F5D4] text-lg">▸</span>
                        {parseInline(para.replace('###', '').trim())}
                    </h4>
                );
            }

            if (para.startsWith('##')) {
                return (
                    <h3 key={idx} className="text-2xl md:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 mt-10 mb-6">
                        {parseInline(para.replace('##', '').trim())}
                    </h3>
                );
            }

            // Listes (lignes commençant par -)
            if (para.includes('\n-') || para.startsWith('-')) {
                const items = para.split('\n').filter(line => line.trim().startsWith('-'));
                return (
                    <ul key={idx} className="space-y-3 my-6 ml-2">
                        {items.map((item, i) => (
                            <li key={i} className="text-gray-300 flex items-start gap-4 group">
                                <span className="text-[#00F5D4] mt-1.5 flex-shrink-0 transition-transform group-hover:scale-125 duration-300">•</span>
                                <span className="leading-relaxed">{parseInline(item.replace('-', '').trim())}</span>
                            </li>
                        ))}
                    </ul>
                );
            }

            // Listes numérotées
            if (para.match(/^\d+\./m) || para.match(/^\d+\./)) {
                const items = para.split('\n').filter(line => line.match(/^\d+\./));
                return (
                    <ol key={idx} className="space-y-4 my-6 ml-2">
                        {items.map((item, i) => {
                            const [num, ...rest] = item.split('.');
                            return (
                                <li key={i} className="text-gray-300 flex items-start gap-4">
                                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[#7C3AED]/20 text-[#7C3AED] font-bold text-xs flex-shrink-0 mt-0.5 border border-[#7C3AED]/30">
                                        {num}
                                    </span>
                                    <span className="leading-relaxed">{parseInline(rest.join('.').trim())}</span>
                                </li>
                            );
                        })}
                    </ol>
                );
            }

            // Équations LaTeX (simplifiées pour l'affichage texte)
            if (para.includes('$')) {
                // On pourrait ajouter un vrai parser LaTeX ici si besoin
                // Pour l'instant on le traite comme du texte normal avec parseInline
            }

            // Paragraphe normal
            return (
                <p key={idx} className="text-gray-300 leading-relaxed my-4 text-base md:text-lg">
                    {parseInline(para)}
                </p>
            );
        });
    };

    return (
        <div className="prose prose-invert max-w-none">
            {renderText(children)}
        </div>
    );
}
