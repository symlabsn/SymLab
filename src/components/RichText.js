import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

export default function RichText({ children }) {
    if (!children) return null;

    return (
        <ReactMarkdown
            className="prose prose-invert prose-lg max-w-none font-sans"
            remarkPlugins={[remarkMath]}
            rehypePlugins={[rehypeKatex]}
            components={{
                h2: ({ node, ...props }) => <h2 className="text-3xl font-bold text-white mt-12 mb-6" {...props} />,
                h3: ({ node, ...props }) => <h3 className="text-2xl font-bold text-white mt-10 mb-6 pb-2 border-b border-white/10" {...props} />,
                h4: ({ node, ...props }) => <h4 className="text-xl font-bold text-[#00F5D4] mt-8 mb-4 border-l-4 border-[#00F5D4] pl-3" {...props} />,
                p: ({ node, ...props }) => <p className="text-gray-300 leading-relaxed my-4" {...props} />,
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
    );
}
