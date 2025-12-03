export default function RichText({ children }) {
    // Convertir le texte avec formatage en JSX
    const renderText = (text) => {
        if (!text) return null;

        // Diviser en paragraphes
        const paragraphs = text.split('\n\n');

        return paragraphs.map((para, idx) => {
            // Titres (lignes commençant par #)
            if (para.startsWith('###')) {
                return (
                    <h4 key={idx} className="text-xl font-bold text-white mt-6 mb-3 flex items-center gap-2">
                        <span className="text-[#00F5D4]">▸</span>
                        {para.replace('###', '').trim()}
                    </h4>
                );
            }

            if (para.startsWith('##')) {
                return (
                    <h3 key={idx} className="text-2xl font-bold text-white mt-8 mb-4">
                        {para.replace('##', '').trim()}
                    </h3>
                );
            }

            // Listes (lignes commençant par -)
            if (para.includes('\n-')) {
                const items = para.split('\n').filter(line => line.trim().startsWith('-'));
                return (
                    <ul key={idx} className="space-y-2 my-4 ml-4">
                        {items.map((item, i) => (
                            <li key={i} className="text-gray-300 flex items-start gap-3">
                                <span className="text-[#00F5D4] mt-1 flex-shrink-0">•</span>
                                <span>{item.replace('-', '').trim()}</span>
                            </li>
                        ))}
                    </ul>
                );
            }

            // Listes numérotées
            if (para.match(/^\d+\./m)) {
                const items = para.split('\n').filter(line => line.match(/^\d+\./));
                return (
                    <ol key={idx} className="space-y-3 my-4 ml-4">
                        {items.map((item, i) => {
                            const [num, ...rest] = item.split('.');
                            return (
                                <li key={i} className="text-gray-300 flex items-start gap-3">
                                    <span className="text-[#7C3AED] font-bold flex-shrink-0">{num}.</span>
                                    <span>{rest.join('.').trim()}</span>
                                </li>
                            );
                        })}
                    </ol>
                );
            }

            // Paragraphe normal
            return (
                <p key={idx} className="text-gray-300 leading-relaxed my-4">
                    {para}
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
