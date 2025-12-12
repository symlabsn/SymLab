'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import { introToPythonCourse } from '../app/challenges/data/introToPythonCourse';
import { getChapterContent } from '../app/challenges/data/chapterContent';

// Composant pour le rendu du contenu Markdown avec LaTeX
function ContentRenderer({ content, className = "" }) {
    if (!content) return null;

    return (
        <div className={`prose prose-invert prose-lg max-w-none ${className}`}>
            <style jsx global>{`
                .masterclass-content .katex-display {
                    display: flex;
                    justify-content: center;
                    padding: 1.5rem;
                    margin: 1.5rem 0;
                    background: rgba(139, 92, 246, 0.05);
                    border: 1px solid rgba(139, 92, 246, 0.2);
                    border-radius: 0.75rem;
                    overflow-x: auto;
                }
                .masterclass-content .katex-display > .katex {
                    color: #a78bfa;
                }
                .masterclass-content .katex {
                    font-size: 1.1em;
                    color: #c4b5fd;
                }
                .masterclass-content h2 {
                    color: #fff;
                    font-size: 1.5rem;
                    font-weight: 700;
                    margin-top: 2rem;
                    margin-bottom: 1rem;
                    padding-bottom: 0.5rem;
                    border-bottom: 2px solid rgba(139, 92, 246, 0.3);
                }
                .masterclass-content h3 {
                    color: #a78bfa;
                    font-size: 1.25rem;
                    font-weight: 600;
                    margin-top: 1.5rem;
                    margin-bottom: 0.75rem;
                }
                .masterclass-content h4 {
                    color: #c4b5fd;
                    font-size: 1.1rem;
                    font-weight: 600;
                    margin-top: 1rem;
                    margin-bottom: 0.5rem;
                }
                .masterclass-content p {
                    color: #d1d5db;
                    line-height: 1.8;
                    margin-bottom: 1rem;
                }
                .masterclass-content ul, .masterclass-content ol {
                    color: #d1d5db;
                    margin-left: 1.5rem;
                    margin-bottom: 1rem;
                }
                .masterclass-content li {
                    margin-bottom: 0.5rem;
                }
                .masterclass-content code {
                    background: rgba(139, 92, 246, 0.15);
                    color: #f9a8d4;
                    padding: 0.2rem 0.4rem;
                    border-radius: 0.25rem;
                    font-family: 'Fira Code', 'Monaco', monospace;
                    font-size: 0.9em;
                }
                .masterclass-content pre {
                    background: #1e1e2e;
                    border: 1px solid rgba(139, 92, 246, 0.2);
                    border-radius: 0.75rem;
                    padding: 1.25rem;
                    margin: 1rem 0;
                    overflow-x: auto;
                }
                .masterclass-content pre code {
                    background: transparent;
                    color: #a6e3a1;
                    padding: 0;
                    font-size: 0.875rem;
                }
                .masterclass-content table {
                    width: 100%;
                    border-collapse: collapse;
                    margin: 1.5rem 0;
                    background: rgba(15, 17, 21, 0.5);
                    border-radius: 0.5rem;
                    overflow: hidden;
                }
                .masterclass-content th {
                    background: rgba(139, 92, 246, 0.2);
                    color: #a78bfa;
                    padding: 0.75rem 1rem;
                    text-align: left;
                    font-weight: 600;
                    border-bottom: 1px solid rgba(139, 92, 246, 0.3);
                }
                .masterclass-content td {
                    padding: 0.75rem 1rem;
                    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
                    color: #d1d5db;
                }
                .masterclass-content tr:hover td {
                    background: rgba(139, 92, 246, 0.05);
                }
                .masterclass-content blockquote {
                    border-left: 4px solid #8b5cf6;
                    background: rgba(139, 92, 246, 0.1);
                    padding: 1rem 1.5rem;
                    margin: 1.5rem 0;
                    border-radius: 0 0.5rem 0.5rem 0;
                    color: #c4b5fd;
                }
                .masterclass-content strong {
                    color: #fff;
                    font-weight: 600;
                }
                .masterclass-content a {
                    color: #8b5cf6;
                    text-decoration: underline;
                }
                .masterclass-content a:hover {
                    color: #a78bfa;
                }
                .masterclass-content hr {
                    border: none;
                    border-top: 1px solid rgba(139, 92, 246, 0.2);
                    margin: 2rem 0;
                }
            `}</style>
            <div className="masterclass-content">
                <ReactMarkdown
                    remarkPlugins={[remarkMath]}
                    rehypePlugins={[rehypeKatex]}
                >
                    {content}
                </ReactMarkdown>
            </div>
        </div>
    );
}

export default function MathPythonCourseViewer() {
    const [activeModuleIndex, setActiveModuleIndex] = useState(0);
    const [activeChapterIndex, setActiveChapterIndex] = useState(0);
    const [showSidebar, setShowSidebar] = useState(true);
    const [activeTab, setActiveTab] = useState('theorie');

    const activeModule = introToPythonCourse[activeModuleIndex];
    const activeChapter = activeModule?.chapters?.[activeChapterIndex];
    const chapterData = activeChapter ? getChapterContent(activeChapter.id) : null;

    const nextChapter = () => {
        if (activeChapterIndex < activeModule.chapters.length - 1) {
            setActiveChapterIndex(activeChapterIndex + 1);
        } else if (activeModuleIndex < introToPythonCourse.length - 1) {
            setActiveModuleIndex(activeModuleIndex + 1);
            setActiveChapterIndex(0);
        }
        setActiveTab('theorie');
    };

    const prevChapter = () => {
        if (activeChapterIndex > 0) {
            setActiveChapterIndex(activeChapterIndex - 1);
        } else if (activeModuleIndex > 0) {
            setActiveModuleIndex(activeModuleIndex - 1);
            setActiveChapterIndex(introToPythonCourse[activeModuleIndex - 1].chapters.length - 1);
        }
        setActiveTab('theorie');
    };

    // Calculer la progression
    const totalChapters = introToPythonCourse.reduce((acc, m) => acc + m.chapters.length, 0);
    let currentChapterNumber = 0;
    for (let i = 0; i < activeModuleIndex; i++) {
        currentChapterNumber += introToPythonCourse[i].chapters.length;
    }
    currentChapterNumber += activeChapterIndex + 1;
    const progressPercent = (currentChapterNumber / totalChapters) * 100;

    const renderContent = () => {
        if (!chapterData) {
            return (
                <div className="bg-gradient-to-br from-gray-900 to-black border border-white/10 rounded-2xl p-8 text-center">
                    <div className="text-6xl mb-6 opacity-30">🚧</div>
                    <h2 className="text-2xl font-bold mb-4 text-white">{activeChapter?.title}</h2>
                    <p className="text-gray-400 mb-6">
                        Le contenu de ce chapitre est en cours de rédaction.
                    </p>
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/20 text-purple-300 rounded-lg text-sm">
                        <span className="animate-pulse">●</span>
                        Bientôt disponible
                    </div>
                </div>
            );
        }

        return (
            <div className="space-y-6">
                {/* Header du chapitre */}
                <div className="bg-gradient-to-br from-purple-900/30 to-blue-900/30 border border-purple-500/20 rounded-2xl p-8 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>
                    <div className="relative z-10">
                        <div className="flex items-center gap-3 mb-4">
                            <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs font-mono">
                                Module {activeModuleIndex + 1} / Chapitre {activeChapterIndex + 1}
                            </span>
                        </div>
                        <h1 className="text-3xl md:text-4xl font-black mb-4 text-white">
                            {chapterData.title}
                        </h1>
                    </div>
                </div>

                {/* Tabs */}
                <div className="flex gap-2 bg-black/50 p-2 rounded-xl border border-white/10">
                    {[
                        { id: 'theorie', label: 'Théorie', icon: '📖' },
                        { id: 'code', label: 'Code Python', icon: '🐍' },
                        { id: 'exercice', label: 'Exercice', icon: '✏️' }
                    ].map(tab => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`flex-1 py-3 px-4 rounded-lg text-sm font-medium transition-all flex items-center justify-center gap-2 ${activeTab === tab.id
                                    ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg'
                                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                                }`}
                        >
                            <span>{tab.icon}</span>
                            <span className="hidden sm:inline">{tab.label}</span>
                        </button>
                    ))}
                </div>

                {/* Contenu selon l'onglet */}
                <div className="bg-[#0F1115] border border-white/10 rounded-2xl overflow-hidden">
                    {activeTab === 'theorie' && (
                        <div className="p-6 md:p-8">
                            <ContentRenderer content={chapterData.theorie} />
                        </div>
                    )}

                    {activeTab === 'code' && (
                        <div>
                            <div className="flex items-center gap-2 px-4 py-3 bg-[#1E1E1E] border-b border-white/5">
                                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                <span className="ml-3 text-xs text-gray-400 font-mono">exemple.py</span>
                                <div className="ml-auto flex items-center gap-2">
                                    <span className="text-xs text-green-400 font-mono flex items-center gap-1">
                                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                                        Python 3.10
                                    </span>
                                </div>
                            </div>
                            <pre className="p-6 overflow-x-auto text-sm font-mono text-green-300 bg-[#1E1E1E] leading-relaxed">
                                <code>{chapterData.code}</code>
                            </pre>
                            <div className="p-4 bg-blue-900/20 border-t border-blue-500/20">
                                <p className="text-blue-300 text-sm flex items-center gap-2">
                                    <span>💡</span>
                                    <span>Copiez ce code dans Jupyter ou Google Colab pour l'exécuter !</span>
                                </p>
                            </div>
                        </div>
                    )}

                    {activeTab === 'exercice' && (
                        <div className="p-6 md:p-8">
                            <div className="bg-gradient-to-r from-orange-900/30 to-red-900/30 border border-orange-500/20 rounded-xl p-6 mb-6">
                                <h3 className="text-xl font-bold text-orange-300 mb-4 flex items-center gap-2">
                                    <span>🎯</span>
                                    À vous de jouer !
                                </h3>
                                <ContentRenderer content={chapterData.exercice} />
                            </div>
                            <Link
                                href="/code"
                                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold rounded-xl hover:opacity-90 transition-opacity"
                            >
                                <span>🚀</span>
                                Ouvrir le Notebook Python
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        );
    };

    if (!activeModule || !activeChapter) {
        return <div className="text-white p-10">Chargement...</div>;
    }

    return (
        <div className="flex bg-black text-white min-h-screen font-sans selection:bg-purple-500 selection:text-white">
            {/* Sidebar */}
            <div className={`fixed inset-y-0 left-0 z-50 w-80 bg-[#0F1115] border-r border-white/10 transform transition-transform duration-300 ease-in-out ${showSidebar ? 'translate-x-0' : '-translate-x-full'}`}>
                <div className="h-full flex flex-col">
                    {/* Header Sidebar */}
                    <div className="p-6 border-b border-white/10">
                        <Link href="/challenges" className="flex items-center gap-2 text-gray-400 hover:text-white mb-4 text-sm">
                            <span>←</span>
                            <span>Retour aux Challenges</span>
                        </Link>
                        <h2 className="font-bold text-xl tracking-tight">
                            Maths & Python <span className="text-purple-400">Masterclass</span>
                        </h2>
                        {/* Barre de progression */}
                        <div className="mt-4">
                            <div className="flex justify-between text-xs text-gray-500 mb-1">
                                <span>Progression</span>
                                <span>{currentChapterNumber}/{totalChapters}</span>
                            </div>
                            <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                                <div
                                    className="h-full bg-gradient-to-r from-purple-500 to-blue-500 transition-all duration-300"
                                    style={{ width: `${progressPercent}%` }}
                                ></div>
                            </div>
                        </div>
                    </div>

                    {/* Liste des modules */}
                    <div className="flex-1 overflow-y-auto p-4 space-y-4">
                        {introToPythonCourse.map((module, mIndex) => (
                            <div key={module.id}>
                                <h3 className="text-xs font-mono uppercase text-gray-500 mb-2 px-2 flex items-center gap-2">
                                    <span className={`w-2 h-2 rounded-full ${mIndex <= activeModuleIndex ? 'bg-purple-500' : 'bg-gray-700'}`}></span>
                                    {module.title}
                                </h3>
                                <div className="space-y-1">
                                    {module.chapters.map((chapter, cIndex) => {
                                        const isActive = mIndex === activeModuleIndex && cIndex === activeChapterIndex;
                                        const hasContent = getChapterContent(chapter.id) !== null;
                                        return (
                                            <button
                                                key={chapter.id}
                                                onClick={() => {
                                                    setActiveModuleIndex(mIndex);
                                                    setActiveChapterIndex(cIndex);
                                                    setActiveTab('theorie');
                                                }}
                                                className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-all duration-200 flex items-center justify-between group ${isActive
                                                        ? 'bg-purple-500/20 text-purple-300 font-medium border border-purple-500/30'
                                                        : 'text-gray-400 hover:bg-white/5 hover:text-white'
                                                    }`}
                                            >
                                                <span className="truncate flex items-center gap-2">
                                                    {hasContent ? (
                                                        <span className="text-green-400">●</span>
                                                    ) : (
                                                        <span className="text-gray-600">○</span>
                                                    )}
                                                    {chapter.title}
                                                </span>
                                            </button>
                                        );
                                    })}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className={`flex-1 transition-all duration-300 ${showSidebar ? 'ml-80' : 'ml-0'}`}>
                {/* Top Bar */}
                <header className="sticky top-0 z-40 bg-black/90 backdrop-blur-xl border-b border-white/10 h-16 flex items-center justify-between px-6">
                    <div className="flex items-center gap-4">
                        <button
                            onClick={() => setShowSidebar(!showSidebar)}
                            className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                        >
                            <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                        <div className="flex flex-col">
                            <span className="text-xs text-gray-500 font-mono">
                                Module {activeModuleIndex + 1}/{introToPythonCourse.length}
                            </span>
                            <span className="font-bold text-sm text-gray-300">{activeModule.title}</span>
                        </div>
                    </div>

                    <div className="flex items-center gap-3">
                        <button
                            onClick={prevChapter}
                            disabled={activeModuleIndex === 0 && activeChapterIndex === 0}
                            className="p-2 rounded-lg bg-white/5 hover:bg-white/10 disabled:opacity-30 disabled:cursor-not-allowed transition-all border border-white/10"
                        >
                            ← Précédent
                        </button>
                        <button
                            onClick={nextChapter}
                            disabled={activeModuleIndex === introToPythonCourse.length - 1 && activeChapterIndex === activeModule.chapters.length - 1}
                            className="px-4 py-2 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold hover:opacity-90 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                        >
                            Suivant →
                        </button>
                    </div>
                </header>

                {/* Content Area */}
                <main className="p-6 md:p-12 max-w-4xl mx-auto min-h-[calc(100vh-64px)]">
                    {renderContent()}
                </main>
            </div>
        </div>
    );
}
