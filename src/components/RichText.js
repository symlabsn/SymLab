import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

export default function RichText({ children, className }) {
    if (!children) return null;

    // Classe par défaut si aucune n'est fournie
    const defaultClass = "prose prose-invert prose-lg max-w-none font-sans";
    const finalClass = className !== undefined ? className : defaultClass;

    return (
        <>
            <style jsx global>{`
                .katex-display {
                    display: flex;
                    justify-content: center;
                    padding: 1.5rem;
                    margin: 2rem 0;
                    background: rgba(0, 245, 212, 0.03);
                    border: 1px solid rgba(0, 245, 212, 0.1);
                    border-radius: 0.75rem;
                    overflow-x: auto;
                }
                .katex-display > .katex {
                    text-align: center;
                    color: #00F5D4;
                }
                .katex {
                    font-size: 1.1em;
                }
            `}</style>
            <div className={finalClass}>
                <ReactMarkdown
                    remarkPlugins={[remarkMath]}
                    rehypePlugins={[rehypeKatex]}
                    components={{
                        h2: ({ node, ...props }) => <h2 className="text-3xl font-bold text-white mt-12 mb-6" {...props} />,
                        h3: ({ node, ...props }) => <h3 className="text-2xl font-bold text-white mt-10 mb-6 pb-2 border-b border-white/10" {...props} />,
                        h4: ({ node, ...props }) => <h4 className="text-xl font-bold text-[#00F5D4] mt-8 mb-4 border-l-4 border-[#00F5D4] pl-3" {...props} />,
                        p: ({ node, ...props }) => <div className="text-gray-300 leading-relaxed my-4" {...props} />,
                        li: ({ node, ...props }) => <li className="text-gray-300" {...props} />,
                        strong: ({ node, ...props }) => <strong className="font-bold text-white" {...props} />,
                        code: ({ node, inline, className, children, ...props }) => {
                            return inline ? (
                                <code className="bg-white/10 text-yellow-300 px-1 rounded font-mono text-sm" {...props}>
                                    {children}
                                </code>
                            ) : (
                                <code className={className} {...props}>
                                    {children}
                                </code>
                            );
                        }
                    }}
                >
                    {children}
                </ReactMarkdown>
            </div>
        </>
    );

}
