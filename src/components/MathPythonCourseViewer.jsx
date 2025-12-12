'use client';

import { useState, useRef, useEffect } from 'react';
import { introToPythonCourse } from '../app/challenges/data/introToPythonCourse';
import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';

export default function MathPythonCourseViewer() {
    const [activeModuleIndex, setActiveModuleIndex] = useState(0);
    const [activeChapterIndex, setActiveChapterIndex] = useState(0);
    const [showSidebar, setShowSidebar] = useState(true);

    const activeModule = introToPythonCourse[activeModuleIndex];
    const activeChapter = activeModule.chapters[activeChapterIndex];

    const nextChapter = () => {
        if (activeChapterIndex < activeModule.chapters.length - 1) {
            setActiveChapterIndex(activeChapterIndex + 1);
        } else if (activeModuleIndex < introToPythonCourse.length - 1) {
            setActiveModuleIndex(activeModuleIndex + 1);
            setActiveChapterIndex(0);
        }
    };

    const prevChapter = () => {
        if (activeChapterIndex > 0) {
            setActiveChapterIndex(activeChapterIndex - 1);
        } else if (activeModuleIndex > 0) {
            setActiveModuleIndex(activeModuleIndex - 1);
            setActiveChapterIndex(introToPythonCourse[activeModuleIndex - 1].chapters.length - 1);
        }
    };

    // Placeholder content generator based on chapter ID
    const getContent = (id) => {

        const codeExamples = {
            'basic_ops': `
# Addition
print(2 + 2)

# Multiplication
print(50 * 5)

# Division (float)
print(10 / 3) 
`,
            'variables': `
mass = 10  # kg
accel = 9.8 # m/s^2
force = mass * accel
print(f"Force = {force} Newtons")
`,
            'loops_powers': `
for i in range(10):
    print(f"2 to the power of {i} is {2**i}")
`
        };

        const defaultContent = (
            <div className="space-y-6 animate-fade-in">
                <div className="bg-gradient-to-br from-gray-900 to-black border border-white/10 rounded-2xl p-8 shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-[#00F5D4]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

                    <h1 className="text-4xl font-black mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                        {activeChapter.title}
                    </h1>

                    <p className="text-xl text-gray-300 leading-relaxed mb-8">
                        Bienvenue dans ce chapitre sur <strong>{activeChapter.title}</strong>.
                        Ici, nous allons explorer les concepts fondamentaux à l'aide de Python.
                    </p>

                    <div className="grid md:grid-cols-2 gap-8 items-start">
                        <div className="space-y-4">
                            <h3 className="text-[#00F5D4] font-mono text-sm uppercase tracking-wider">Concept Clé</h3>
                            <p className="text-gray-400">
                                Python est un outil puissant pour les mathématiques. Ce module vous permet de visualiser et de calculer des concepts complexes instantanément.
                            </p>
                            <div className="p-4 bg-blue-500/10 border-l-4 border-blue-500 rounded-r-lg">
                                <p className="text-blue-300 text-sm">
                                    <strong>Astuce :</strong> N'oubliez pas d'exécuter chaque cellule de code pour voir le résultat !
                                </p>
                            </div>
                        </div>

                        <div className="bg-[#1E1E1E] rounded-xl overflow-hidden shadow-lg border border-white/5">
                            <div className="flex items-center gap-2 px-4 py-2 bg-[#2D2D2D] border-b border-white/5">
                                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                <span className="ml-2 text-xs text-gray-400 font-mono">main.py</span>
                            </div>
                            <div className="text-sm p-4 overflow-x-auto font-mono text-gray-300">
                                <pre>{codeExamples[id] || `# Exemple de code pour ${activeChapter.title}\nimport numpy as np\nimport matplotlib.pyplot as plt\n\nx = np.linspace(0, 10, 100)\ny = x ** 2\nprint("Calcul terminé!")`}</pre>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Interactive / Visual Area Placeholder */}
                <div className="bg-black/50 border border-white/10 rounded-2xl p-6 min-h-[300px] flex items-center justify-center relative">
                    <div className="text-center">
                        <div className="text-6xl mb-4 opacity-20">📊</div>
                        <p className="text-gray-500">Zone de visualisation interactive</p>
                        <p className="text-xs text-gray-600 mt-2">(Graphiques, 3D, ou résultats s'afficheront ici)</p>
                    </div>
                </div>
            </div>
        );

        return defaultContent;
    };

    return (
        <div className="flex bg-black text-white min-h-screen font-sans selection:bg-[#00F5D4] selection:text-black">
            {/* Sidebar */}
            <div className={`fixed inset-y-0 left-0 z-50 w-80 bg-[#0F1115] border-r border-white/10 transform transition-transform duration-300 ease-in-out ${showSidebar ? 'translate-x-0' : '-translate-x-full'}`}>
                <div className="h-full flex flex-col">
                    <div className="p-6 border-b border-white/10 flex justify-between items-center">
                        <h2 className="font-bold text-xl tracking-tight">
                            SymLab <span className="text-[#00F5D4]">Masterclass</span>
                        </h2>
                        <button onClick={() => setShowSidebar(false)} className="md:hidden text-gray-400 hover:text-white">
                            ✕
                        </button>
                    </div>

                    <div className="flex-1 overflow-y-auto p-4 space-y-6 scrollbar-thin scrollbar-thumb-gray-800 scrollbar-track-transparent">
                        {introToPythonCourse.map((module, mIndex) => (
                            <div key={module.id} className="animate-fade-in-up" style={{ animationDelay: `${mIndex * 50}ms` }}>
                                <h3 className="text-xs font-mono uppercase text-gray-500 mb-3 px-2 flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#00F5D4]"></span>
                                    {module.title}
                                </h3>
                                <div className="space-y-1">
                                    {module.chapters.map((chapter, cIndex) => {
                                        const isActive = mIndex === activeModuleIndex && cIndex === activeChapterIndex;
                                        return (
                                            <button
                                                key={chapter.id}
                                                onClick={() => {
                                                    setActiveModuleIndex(mIndex);
                                                    setActiveChapterIndex(cIndex);
                                                }}
                                                className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-all duration-200 flex items-center justify-between group ${isActive
                                                        ? 'bg-[#00F5D4]/10 text-[#00F5D4] font-medium border border-[#00F5D4]/20'
                                                        : 'text-gray-400 hover:bg-white/5 hover:text-white'
                                                    }`}
                                            >
                                                <span className="truncate">{chapter.title}</span>
                                                {isActive && <span className="text-xs">●</span>}
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
                <header className="sticky top-0 z-40 bg-black/80 backdrop-blur-xl border-b border-white/10 h-16 flex items-center justify-between px-6">
                    <div className="flex items-center gap-4">
                        {!showSidebar && (
                            <button onClick={() => setShowSidebar(true)} className="p-2 hover:bg-white/10 rounded-lg transition-colors">
                                <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            </button>
                        )}
                        <div className="flex flex-col">
                            <span className="text-xs text-gray-500 font-mono">Module {activeModuleIndex + 1}/{introToPythonCourse.length}</span>
                            <span className="font-bold text-sm text-gray-300">{activeModule.title}</span>
                        </div>
                    </div>

                    <div className="flex items-center gap-2">
                        <div className="hidden md:flex items-center gap-2 px-3 py-1 bg-white/5 rounded-full border border-white/10 mr-4">
                            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                            <span className="text-xs text-green-400 font-mono">Python 3.10 Ready</span>
                        </div>
                        <button
                            onClick={prevChapter}
                            disabled={activeModuleIndex === 0 && activeChapterIndex === 0}
                            className="p-2 rounded-lg bg-white/5 hover:bg-white/10 disabled:opacity-30 disabled:cursor-not-allowed transition-all border border-white/10"
                        >
                            ←
                        </button>
                        <button
                            onClick={nextChapter}
                            disabled={activeModuleIndex === introToPythonCourse.length - 1 && activeChapterIndex === activeModule.chapters.length - 1}
                            className="p-2 rounded-lg bg-[#00F5D4] text-black font-bold hover:bg-[#00F5D4]/90 disabled:opacity-30 disabled:cursor-not-allowed transition-all shadow-[0_0_15px_rgba(0,245,212,0.3)]"
                        >
                            →
                        </button>
                    </div>
                </header>

                {/* Content Area */}
                <main className="p-6 md:p-12 max-w-5xl mx-auto min-h-[calc(100vh-64px)]">
                    {getContent(activeChapter.id)}
                </main>
            </div>
        </div>
    );
}
