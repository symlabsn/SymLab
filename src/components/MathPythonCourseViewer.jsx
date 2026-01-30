'use client';

import { useState } from 'react';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import { introToPythonCourse } from '../app/challenges/data/introToPythonCourse';
import { getChapterContent } from '../app/challenges/data/chapterContent';

// Styles globaux pour le rendu du contenu - Optimisés mobile
const contentStyles = `
    .course-content {
        font-size: 1rem;
        line-height: 1.8;
        color: #e5e7eb;
    }
    
    @media (min-width: 640px) {
        .course-content {
            font-size: 1.1rem;
            line-height: 1.9;
        }
    }
    
    .course-content h2 {
        font-size: 1.4rem;
        font-weight: 800;
        color: #ffffff;
        margin-top: 2rem;
        margin-bottom: 1rem;
        padding-bottom: 0.5rem;
        border-bottom: 3px solid rgba(139, 92, 246, 0.4);
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }
    
    @media (min-width: 640px) {
        .course-content h2 {
            font-size: 1.75rem;
            margin-top: 2.5rem;
            margin-bottom: 1.25rem;
        }
    }
    
    .course-content h2::before {
        content: '◆';
        color: #8b5cf6;
        font-size: 0.75rem;
    }
    
    .course-content h3 {
        font-size: 1.15rem;
        font-weight: 700;
        color: #a78bfa;
        margin-top: 1.5rem;
        margin-bottom: 0.75rem;
        padding-left: 0.75rem;
        border-left: 3px solid #8b5cf6;
    }
    
    @media (min-width: 640px) {
        .course-content h3 {
            font-size: 1.35rem;
            padding-left: 1rem;
            border-left-width: 4px;
        }
    }
    
    .course-content h4 {
        font-size: 1.05rem;
        font-weight: 600;
        color: #c4b5fd;
        margin-top: 1.25rem;
        margin-bottom: 0.5rem;
    }
    
    .course-content p {
        margin-bottom: 1rem;
        text-align: left;
    }
    
    @media (min-width: 640px) {
        .course-content p {
            margin-bottom: 1.25rem;
            text-align: justify;
        }
    }
    
    .course-content ul, .course-content ol {
        margin: 1rem 0;
        padding-left: 0;
    }
    
    .course-content ul {
        list-style: none;
    }
    
    .course-content ul li {
        position: relative;
        padding-left: 1.5rem;
        margin-bottom: 0.75rem;
    }
    
    .course-content ul li::before {
        content: '▸';
        position: absolute;
        left: 0;
        color: #8b5cf6;
        font-weight: bold;
    }
    
    .course-content ol {
        counter-reset: item;
        list-style: none;
    }
    
    .course-content ol li {
        counter-increment: item;
        position: relative;
        padding-left: 2rem;
        margin-bottom: 0.75rem;
    }
    
    .course-content ol li::before {
        content: counter(item);
        position: absolute;
        left: 0;
        width: 1.5rem;
        height: 1.5rem;
        background: linear-gradient(135deg, #8b5cf6, #6366f1);
        color: white;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 0.75rem;
        font-weight: 700;
    }
    
    .course-content code {
        background: rgba(139, 92, 246, 0.2);
        color: #f472b6;
        padding: 0.15rem 0.35rem;
        border-radius: 0.25rem;
        font-family: 'JetBrains Mono', 'Fira Code', monospace;
        font-size: 0.85em;
        border: 1px solid rgba(139, 92, 246, 0.3);
        word-break: break-word;
    }
    
    .course-content pre {
        background: linear-gradient(135deg, #1e1e2e, #2d2d3f);
        border: 1px solid rgba(139, 92, 246, 0.3);
        border-radius: 0.75rem;
        padding: 1rem;
        margin: 1.25rem 0;
        overflow-x: auto;
        position: relative;
        -webkit-overflow-scrolling: touch;
    }
    
    @media (min-width: 640px) {
        .course-content pre {
            border-radius: 1rem;
            padding: 1.5rem;
            margin: 1.75rem 0;
        }
    }
    
    .course-content pre::before {
        content: 'Python';
        position: absolute;
        top: 0;
        right: 0;
        background: linear-gradient(135deg, #8b5cf6, #6366f1);
        color: white;
        padding: 0.2rem 0.5rem;
        border-radius: 0 0.75rem 0 0.5rem;
        font-size: 0.65rem;
        font-weight: 600;
    }
    
    .course-content pre code {
        background: transparent;
        color: #a6e3a1;
        padding: 0;
        border: none;
        font-size: 0.8rem;
        line-height: 1.6;
    }
    
    @media (min-width: 640px) {
        .course-content pre code {
            font-size: 0.9rem;
            line-height: 1.7;
        }
    }
    
    .course-content table {
        width: 100%;
        border-collapse: separate;
        border-spacing: 0;
        margin: 1.5rem 0;
        border-radius: 0.75rem;
        overflow: hidden;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
        display: block;
        overflow-x: auto;
        -webkit-overflow-scrolling: touch;
    }
    
    .course-content th {
        background: linear-gradient(135deg, rgba(139, 92, 246, 0.3), rgba(99, 102, 241, 0.3));
        color: #ffffff;
        padding: 0.75rem 1rem;
        text-align: left;
        font-weight: 700;
        font-size: 0.85rem;
        text-transform: uppercase;
        letter-spacing: 0.05em;
        border-bottom: 2px solid rgba(139, 92, 246, 0.5);
        white-space: nowrap;
    }
    
    .course-content td {
        padding: 0.75rem 1rem;
        background: rgba(15, 17, 21, 0.6);
        border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        color: #d1d5db;
        font-size: 0.9rem;
    }
    
    .course-content tr:last-child td {
        border-bottom: none;
    }
    
    .course-content tr:hover td {
        background: rgba(139, 92, 246, 0.1);
    }
    
    .course-content blockquote {
        border-left: 4px solid #8b5cf6;
        background: linear-gradient(90deg, rgba(139, 92, 246, 0.1), transparent);
        padding: 1rem 1.25rem;
        margin: 1.5rem 0;
        border-radius: 0 0.75rem 0.75rem 0;
        font-style: italic;
        color: #c4b5fd;
    }
    
    .course-content strong {
        color: #ffffff;
        font-weight: 700;
    }
    
    .course-content a {
        color: #8b5cf6;
        text-decoration: none;
        border-bottom: 2px solid transparent;
        transition: all 0.2s;
    }
    
    .course-content a:hover {
        color: #a78bfa;
        border-bottom-color: #a78bfa;
    }
    
    .course-content hr {
        border: none;
        height: 2px;
        background: linear-gradient(90deg, transparent, rgba(139, 92, 246, 0.5), transparent);
        margin: 2rem 0;
    }
    
    /* Formules LaTeX - Responsive */
    .course-content .katex-display {
        display: block;
        padding: 1rem;
        margin: 1.5rem 0;
        background: linear-gradient(135deg, rgba(139, 92, 246, 0.08), rgba(99, 102, 241, 0.05));
        border: 1px solid rgba(139, 92, 246, 0.2);
        border-radius: 0.75rem;
        overflow-x: auto;
        text-align: center;
        -webkit-overflow-scrolling: touch;
    }
    
    @media (min-width: 640px) {
        .course-content .katex-display {
            padding: 2rem;
            margin: 2rem 0;
            border-radius: 1rem;
        }
    }
    
    .course-content .katex-display > .katex {
        color: #c4b5fd;
    }
    
    .course-content .katex {
        font-size: 1em;
        color: #a78bfa;
    }
    
    @media (min-width: 640px) {
        .course-content .katex {
            font-size: 1.15em;
        }
    }
    
    /* Exercice styles */
    .exercise-content h2, .exercise-content h3, .exercise-content h4 {
        color: #fb923c;
    }
    
    .exercise-content h2::before {
        color: #f97316;
    }
    
    .exercise-content h3 {
        border-left-color: #f97316;
    }
    
    .exercise-content ul li::before {
        color: #f97316;
    }
    
    .exercise-content ol li::before {
        background: linear-gradient(135deg, #f97316, #ea580c);
    }
    
    .exercise-content code {
        background: rgba(249, 115, 22, 0.2);
        border-color: rgba(249, 115, 22, 0.3);
    }
    
    .exercise-content .katex {
        color: #fdba74;
    }
`;

function ContentRenderer({ content, isExercise = false }) {
    if (!content) return null;

    return (
        <>
            <style jsx global>{contentStyles}</style>
            <div className={`course-content ${isExercise ? 'exercise-content' : ''}`}>
                <ReactMarkdown
                    remarkPlugins={[remarkMath]}
                    rehypePlugins={[rehypeKatex]}
                >
                    {content}
                </ReactMarkdown>
            </div>
        </>
    );
}

export default function MathPythonCourseViewer() {
    const [activeModuleIndex, setActiveModuleIndex] = useState(0);
    const [activeChapterIndex, setActiveChapterIndex] = useState(0);
    const [showSidebar, setShowSidebar] = useState(false); // Default to closed on mobile
    const [activeTab, setActiveTab] = useState('theorie');
    const [expandedModules, setExpandedModules] = useState({ 0: true }); // First module expanded by default

    const toggleModule = (index) => {
        setExpandedModules(prev => ({
            ...prev,
            [index]: !prev[index]
        }));
    };

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
        setShowSidebar(false); // Close sidebar on mobile after navigation
    };

    const prevChapter = () => {
        if (activeChapterIndex > 0) {
            setActiveChapterIndex(activeChapterIndex - 1);
        } else if (activeModuleIndex > 0) {
            setActiveModuleIndex(activeModuleIndex - 1);
            setActiveChapterIndex(introToPythonCourse[activeModuleIndex - 1].chapters.length - 1);
        }
        setActiveTab('theorie');
        setShowSidebar(false); // Close sidebar on mobile after navigation
    };

    const totalChapters = introToPythonCourse.reduce((acc, m) => acc + m.chapters.length, 0);
    let currentChapterNumber = 0;
    for (let i = 0; i < activeModuleIndex; i++) {
        currentChapterNumber += introToPythonCourse[i].chapters.length;
    }
    currentChapterNumber += activeChapterIndex + 1;
    const progressPercent = (currentChapterNumber / totalChapters) * 100;

    const handleChapterSelect = (mIndex, cIndex) => {
        setActiveModuleIndex(mIndex);
        setActiveChapterIndex(cIndex);
        setActiveTab('theorie');
        setExpandedModules(prev => ({ ...prev, [mIndex]: true })); // Expand selected module
        setShowSidebar(false); // Close sidebar on mobile
    };

    const renderContent = () => {
        if (!chapterData) {
            return (
                <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/50 border border-white/10 rounded-2xl p-8 sm:p-12 text-center">
                    <div className="text-5xl sm:text-7xl mb-6 sm:mb-8 opacity-40">🚧</div>
                    <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-white">{activeChapter?.title}</h2>
                    <p className="text-gray-400 mb-6 sm:mb-8 text-base sm:text-lg">Ce chapitre est en cours de rédaction.</p>
                    <div className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 bg-purple-500/20 text-purple-300 rounded-xl text-sm sm:text-base">
                        <span className="w-2.5 sm:w-3 h-2.5 sm:h-3 bg-purple-500 rounded-full animate-pulse"></span>
                        Bientôt disponible
                    </div>
                </div>
            );
        }

        return (
            <div className="space-y-6 sm:space-y-8">
                {/* Header */}
                <div className="bg-gradient-to-br from-purple-900/40 to-indigo-900/30 border border-purple-500/20 rounded-2xl sm:rounded-3xl p-6 sm:p-10 relative overflow-hidden">
                    <div className="absolute -top-16 sm:-top-20 -right-16 sm:-right-20 w-60 sm:w-80 h-60 sm:h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
                    <div className="absolute -bottom-16 sm:-bottom-20 -left-16 sm:-left-20 w-48 sm:w-60 h-48 sm:h-60 bg-indigo-500/10 rounded-full blur-3xl"></div>
                    <div className="relative z-10">
                        <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                            <span className="px-3 sm:px-4 py-1 sm:py-1.5 bg-purple-500/30 text-purple-200 rounded-full text-xs sm:text-sm font-mono backdrop-blur-sm">
                                Module {activeModuleIndex + 1}
                            </span>
                            <span className="px-3 sm:px-4 py-1 sm:py-1.5 bg-indigo-500/30 text-indigo-200 rounded-full text-xs sm:text-sm font-mono backdrop-blur-sm">
                                Chapitre {activeChapterIndex + 1}
                            </span>
                        </div>
                        <h1 className="text-2xl sm:text-4xl md:text-5xl font-black text-white leading-tight">
                            {chapterData.title}
                        </h1>
                    </div>
                </div>

                {/* Tabs - Mobile optimized */}
                <div className="flex gap-2 sm:gap-3 bg-gray-900/50 p-2 sm:p-3 rounded-xl sm:rounded-2xl border border-white/10 backdrop-blur-sm overflow-x-auto scrollbar-hide">
                    {[
                        { id: 'theorie', label: 'Théorie', icon: '📖', color: 'from-purple-600 to-indigo-600' },
                        { id: 'code', label: 'Code', icon: '🐍', color: 'from-green-600 to-emerald-600' },
                        { id: 'exercice', label: 'Exercice', icon: '✏️', color: 'from-orange-600 to-red-600' }
                    ].map(tab => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`flex-1 min-w-[80px] py-3 sm:py-4 px-3 sm:px-6 rounded-lg sm:rounded-xl text-sm font-semibold transition-all flex items-center justify-center gap-1.5 sm:gap-3 ${activeTab === tab.id
                                ? `bg-gradient-to-r ${tab.color} text-white shadow-xl shadow-purple-500/20`
                                : 'text-gray-400 hover:text-white hover:bg-white/5'
                                }`}
                        >
                            <span className="text-lg sm:text-xl">{tab.icon}</span>
                            <span className="hidden xs:inline sm:inline">{tab.label}</span>
                        </button>
                    ))}
                </div>

                {/* Content */}
                <div className="bg-gray-900/40 border border-white/10 rounded-2xl sm:rounded-3xl overflow-hidden backdrop-blur-sm">
                    {activeTab === 'theorie' && (
                        <div className="p-4 sm:p-8 md:p-12">
                            <ContentRenderer content={chapterData.theorie} />
                        </div>
                    )}

                    {activeTab === 'code' && (
                        <div>
                            <div className="flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-3 sm:py-4 bg-gray-800/80 border-b border-white/5">
                                <div className="flex gap-1.5 sm:gap-2">
                                    <div className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 rounded-full bg-red-500"></div>
                                    <div className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 rounded-full bg-yellow-500"></div>
                                    <div className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 rounded-full bg-green-500"></div>
                                </div>
                                <span className="ml-2 sm:ml-3 text-xs sm:text-sm text-gray-400 font-mono">exemple.py</span>
                                <div className="ml-auto flex items-center gap-1.5 sm:gap-2 px-2 sm:px-3 py-0.5 sm:py-1 bg-green-500/20 rounded-full">
                                    <span className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-green-400 animate-pulse"></span>
                                    <span className="text-[10px] sm:text-xs text-green-400 font-mono">Python 3.10</span>
                                </div>
                            </div>
                            <pre className="p-4 sm:p-8 overflow-x-auto text-sm sm:text-base font-mono bg-[#1a1b26] leading-relaxed">
                                <code className="text-green-300">{chapterData.code}</code>
                            </pre>
                            <div className="p-4 sm:p-6 bg-blue-900/30 border-t border-blue-500/20">
                                <p className="text-blue-200 flex items-center gap-2 sm:gap-3 text-sm sm:text-base">
                                    <span className="text-xl sm:text-2xl">💡</span>
                                    <span>Copiez ce code dans Jupyter ou Google Colab pour l&apos;exécuter !</span>
                                </p>
                            </div>
                        </div>
                    )}

                    {activeTab === 'exercice' && (
                        <div className="p-4 sm:p-8 md:p-12">
                            <div className="bg-gradient-to-br from-orange-900/40 to-red-900/30 border border-orange-500/20 rounded-xl sm:rounded-2xl p-4 sm:p-8 mb-6 sm:mb-8">
                                <h3 className="text-xl sm:text-2xl font-bold text-orange-300 mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3">
                                    <span className="text-2xl sm:text-3xl">🎯</span>
                                    À vous de jouer !
                                </h3>
                                <ContentRenderer content={chapterData.exercice} isExercise={true} />
                            </div>
                            <Link
                                href="/code"
                                className="inline-flex items-center gap-2 sm:gap-3 px-5 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold rounded-xl sm:rounded-2xl hover:shadow-xl hover:shadow-purple-500/30 transition-all text-sm sm:text-lg w-full sm:w-auto justify-center"
                            >
                                <span className="text-xl sm:text-2xl">🚀</span>
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
        <div className="flex bg-[#0a0a0f] text-white min-h-screen font-sans selection:bg-purple-500 selection:text-white">
            {/* Mobile Overlay */}
            {showSidebar && (
                <div
                    className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
                    onClick={() => setShowSidebar(false)}
                />
            )}

            {/* Sidebar - Responsive, positioned below navbar */}
            <div className={`fixed top-16 bottom-0 left-0 z-50 w-[85vw] max-w-[320px] bg-[#0f1015] border-r border-white/10 transform transition-transform duration-300 ${showSidebar ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 lg:w-80`}>
                <div className="h-full flex flex-col">
                    {/* Sidebar Header with close button on mobile */}
                    <div className="p-4 sm:p-6 border-b border-white/10">
                        <div className="flex items-center justify-between mb-3 sm:mb-4">
                            <Link href="/challenges" className="flex items-center gap-2 text-gray-400 hover:text-white text-sm transition-colors">
                                <span>←</span> Retour
                            </Link>
                            <button
                                onClick={() => setShowSidebar(false)}
                                className="lg:hidden p-2 hover:bg-white/10 rounded-lg transition-colors"
                            >
                                <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        <h2 className="font-bold text-lg sm:text-xl">
                            Maths & Python <span className="text-purple-400">Masterclass</span>
                        </h2>
                        <div className="mt-4 sm:mt-5">
                            <div className="flex justify-between text-xs sm:text-sm text-gray-500 mb-2">
                                <span>Progression</span>
                                <span className="font-mono">{currentChapterNumber}/{totalChapters}</span>
                            </div>
                            <div className="h-2 sm:h-2.5 bg-gray-800 rounded-full overflow-hidden">
                                <div className="h-full bg-gradient-to-r from-purple-500 to-indigo-500 transition-all duration-500" style={{ width: `${progressPercent}%` }}></div>
                            </div>
                        </div>
                    </div>

                    <div className="flex-1 overflow-y-auto p-3 sm:p-4 space-y-2 scrollbar-thin scrollbar-thumb-white/10 pb-24 lg:pb-4">
                        {introToPythonCourse.map((module, mIndex) => {
                            const isModuleActive = mIndex === activeModuleIndex;
                            const isExpanded = expandedModules[mIndex];
                            const completedChapters = module.chapters.filter(ch => getChapterContent(ch.id) !== null).length;

                            return (
                                <div key={module.id} className="rounded-xl overflow-hidden">
                                    {/* Module Header - Clickable */}
                                    <button
                                        onClick={() => toggleModule(mIndex)}
                                        className={`w-full flex items-center gap-3 p-3 sm:p-4 transition-all ${isModuleActive
                                            ? 'bg-purple-500/20 border-l-4 border-purple-500'
                                            : 'bg-white/5 hover:bg-white/10 border-l-4 border-transparent'
                                            }`}
                                    >
                                        {/* Expand/Collapse Arrow */}
                                        <svg
                                            className={`w-4 h-4 text-gray-400 transition-transform duration-300 flex-shrink-0 ${isExpanded ? 'rotate-90' : ''}`}
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>

                                        <div className="flex-1 text-left min-w-0">
                                            <span className={`text-xs font-mono uppercase ${isModuleActive ? 'text-purple-300' : 'text-gray-500'}`}>
                                                Module {mIndex + 1}
                                            </span>
                                            <p className={`font-medium text-sm truncate ${isModuleActive ? 'text-white' : 'text-gray-300'}`}>
                                                {module.title}
                                            </p>
                                        </div>

                                        {/* Chapter Count Badge */}
                                        <span className={`px-2 py-0.5 rounded-full text-[10px] font-mono flex-shrink-0 ${completedChapters === module.chapters.length
                                            ? 'bg-green-500/20 text-green-400'
                                            : 'bg-white/10 text-gray-400'
                                            }`}>
                                            {completedChapters}/{module.chapters.length}
                                        </span>
                                    </button>

                                    {/* Chapters List - Animated */}
                                    <div
                                        className={`overflow-hidden transition-all duration-300 ease-in-out ${isExpanded ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                                            }`}
                                    >
                                        <div className="space-y-1 p-2 bg-black/20">
                                            {module.chapters.map((chapter, cIndex) => {
                                                const isActive = mIndex === activeModuleIndex && cIndex === activeChapterIndex;
                                                const hasContent = getChapterContent(chapter.id) !== null;
                                                return (
                                                    <button
                                                        key={chapter.id}
                                                        onClick={() => handleChapterSelect(mIndex, cIndex)}
                                                        className={`w-full text-left px-3 py-3 rounded-lg text-sm transition-all flex items-center gap-2 active:scale-[0.98] ${isActive
                                                            ? 'bg-purple-500/30 text-purple-200 font-medium'
                                                            : 'text-gray-400 hover:bg-white/5 hover:text-white'
                                                            }`}
                                                    >
                                                        {hasContent
                                                            ? <span className="text-green-400 text-xs">✓</span>
                                                            : <span className="text-gray-600 text-xs">○</span>
                                                        }
                                                        <span className="truncate">{chapter.title}</span>
                                                        {isActive && (
                                                            <span className="ml-auto w-2 h-2 rounded-full bg-purple-400 animate-pulse"></span>
                                                        )}
                                                    </button>
                                                );
                                            })}
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* Main */}
            <div className="flex-1 lg:ml-80 min-h-screen flex flex-col pt-16">
                {/* Header - Positioned below navbar (top-16), responsive buttons */}
                <header className="sticky top-16 z-30 bg-[#0a0a0f]/95 backdrop-blur-xl border-b border-white/10 px-3 sm:px-6 py-3 sm:py-4">
                    {/* Mobile Layout: Two rows for better readability */}
                    <div className="lg:hidden space-y-2">
                        {/* Row 1: Menu + Module/Chapter info */}
                        <div className="flex items-center gap-2">
                            {/* Menu toggle */}
                            <button
                                onClick={() => setShowSidebar(!showSidebar)}
                                className="p-2.5 bg-purple-500/20 hover:bg-purple-500/30 rounded-xl transition-colors flex-shrink-0 border border-purple-500/30"
                            >
                                <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-purple-300">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            </button>

                            {/* Module & Chapter badges */}
                            <div className="flex items-center gap-2 flex-1 min-w-0">
                                <span className="px-2.5 py-1.5 bg-purple-500/20 text-purple-200 rounded-lg text-xs font-mono border border-purple-500/30 whitespace-nowrap">
                                    Module {activeModuleIndex + 1}
                                </span>
                                <span className="px-2.5 py-1.5 bg-indigo-500/20 text-indigo-200 rounded-lg text-xs font-mono border border-indigo-500/30 whitespace-nowrap">
                                    Ch. {activeChapterIndex + 1}
                                </span>
                            </div>
                        </div>

                        {/* Row 2: Chapter title + Navigation buttons */}
                        <div className="flex items-center gap-2">
                            <p className="text-white text-sm font-medium truncate flex-1">{activeChapter?.title}</p>

                            {/* Navigation buttons - More visible */}
                            <div className="flex items-center gap-2 flex-shrink-0">
                                <button
                                    onClick={prevChapter}
                                    disabled={activeModuleIndex === 0 && activeChapterIndex === 0}
                                    className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-white/10 hover:bg-white/15 disabled:opacity-30 transition-all border border-white/10 text-sm font-medium"
                                >
                                    <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                                    </svg>
                                    <span className="hidden xs:inline">Préc</span>
                                </button>
                                <button
                                    onClick={nextChapter}
                                    disabled={activeModuleIndex === introToPythonCourse.length - 1 && activeChapterIndex === activeModule.chapters.length - 1}
                                    className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:shadow-lg hover:shadow-purple-500/30 disabled:opacity-30 transition-all text-sm font-bold"
                                >
                                    <span className="hidden xs:inline">Suiv</span>
                                    <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Desktop Layout: Full display */}
                    <div className="hidden lg:flex items-center gap-4">
                        <div className="flex-1 min-w-0">
                            <span className="text-xs text-gray-500 font-mono">Module {activeModuleIndex + 1}/{introToPythonCourse.length}</span>
                            <p className="font-bold text-white text-lg truncate">{activeModule.title}</p>
                            <p className="text-sm text-purple-300 truncate mt-0.5">
                                Chapitre {activeChapterIndex + 1}: {activeChapter?.title}
                            </p>
                        </div>
                        {/* Desktop Navigation buttons */}
                        <div className="flex items-center gap-3 flex-shrink-0">
                            <button
                                onClick={prevChapter}
                                disabled={activeModuleIndex === 0 && activeChapterIndex === 0}
                                className="px-5 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 disabled:opacity-30 transition-all border border-white/10 font-medium text-sm"
                            >
                                ← Précédent
                            </button>
                            <button
                                onClick={nextChapter}
                                disabled={activeModuleIndex === introToPythonCourse.length - 1 && activeChapterIndex === activeModule.chapters.length - 1}
                                className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 font-bold hover:shadow-lg disabled:opacity-30 transition-all text-sm"
                            >
                                Suivant →
                            </button>
                        </div>
                    </div>
                </header>

                <main className="flex-1 p-4 sm:p-8 md:p-14 max-w-5xl mx-auto w-full pb-8 lg:pb-14">
                    {renderContent()}
                </main>
            </div>
        </div>
    );
}
