'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { courses } from './courseData';
import { math6eData } from './data/math6e';
import { math5eData } from './data/math5e';
import { math4eData } from './data/math4e';
import { math3eData } from './data/math3e';
import { pc4eData } from './data/pc4e';
import { pc3eData } from './data/pc3e';
import { svt6eData } from './data/svt6e';
import { svt5eData } from './data/svt5e';
import { svt4eData } from './data/svt4e';
import { svt3eData } from './data/svt3e';
import { phys2sData } from './data/phys2s';
import { phys1sData } from './data/phys1s';
import { chimie2sData } from './data/chimie2s';
import { chimie1sData } from './data/chimie1s';
import { entrainement2sData } from './data/entrainement2s';
import { entrainement1sData } from './data/entrainement1s';
import { math2sData } from './data/math2s';
import { math1sData } from './data/math1s';
import { svt2sData } from './data/svt2s';
import { svt1sData } from './data/svt1s';
import { svt1lData } from './data/svt1l';
import { mathTsData } from './data/mathTs';
import { svtTsData } from './data/svtTs';
import { physTsData } from './data/physTs';
import { chimieTsData } from './data/chimieTs';
import { machineLearningData } from './data/machineLearning';
import { mathForMLData } from './data/mathForML';
import { visualizationData } from './data/visualization';
import { dataScienceProjects } from './data/appliedDataScience';
import { BookOpen, Download, Eye, ChevronRight, GraduationCap, Atom, Calculator, Dna, CheckCircle, XCircle, Menu, ArrowLeft } from 'lucide-react';
import 'katex/dist/katex.min.css';
import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import rehypeRaw from 'rehype-raw';


import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

// Helper to strip indentation from template literals to avoid Markdown code block detection
const stripIndentation = (str) => {
    if (!str) return '';
    // Remove the first line if it's empty (common in template literals)
    const lines = str.split('\n');
    if (lines.length > 0 && lines[0].trim() === '') {
        lines.shift();
    }

    // Find minimum indentation of non-empty lines
    let minIndent = Infinity;
    lines.forEach(line => {
        if (line.trim().length > 0) {
            const indent = line.match(/^\s*/)[0].length;
            if (indent < minIndent) minIndent = indent;
        }
    });

    if (minIndent === Infinity) return str;

    // Remove that indentation from all lines
    return lines.map(line => {
        if (line.length >= minIndent) {
            return line.slice(minIndent);
        }
        return line;
    }).join('\n');
};

const levels = ['6ème', '5ème', '4ème', '3ème', 'Seconde', 'Première', 'Terminale', 'Supérieur'];
const subjects = ['Tous', 'Mathématiques', 'Physique-Chimie', 'SVT', 'Informatique', 'Data & IA', 'Data Science'];

// Map course IDs to their structured data if available
const structuredCourses = {
    'math-6e': math6eData,
    'math-5e': math5eData,
    'math-4e': math4eData,
    'math-3e': math3eData,
    'pc-4e': pc4eData,
    'pc-3e': pc3eData,
    'svt-6e': svt6eData,
    'svt-5e': svt5eData,
    'svt-4e': svt4eData,
    'svt-3e': svt3eData,
    'phys-2s': phys2sData,
    'phys-1s': phys1sData,
    'chimie-2s': chimie2sData,
    'chimie-1s': chimie1sData,
    'entrainement-2s': entrainement2sData,
    'entrainement-1s': entrainement1sData,
    'math-2s': math2sData,
    'math-1s': math1sData,
    'svt-2s': svt2sData,
    'svt-1s': svt1sData,
    'svt-1l': svt1lData,
    'math-ts': mathTsData,
    'svt-ts': svtTsData,
    'phys-ts': physTsData,
    'chimie-ts': chimieTsData,
    'ml-intro': machineLearningData,
    'math-ml': mathForMLData,
    'vis-data': visualizationData,
    // Data Science Projects - Map each project to its detailed data
    ...dataScienceProjects.reduce((acc, project) => {
        acc[project.id] = {
            chapters: project.modules.map(mod => ({
                id: `mod-${mod.id}`,
                title: mod.titre,
                part: `Module ${mod.id} - ${mod.duree}`,
                content: mod.content || `**Objectif:** ${mod.objectif}\n\n*Durée estimée: ${mod.duree}*`,
                summary: mod.summary || []
            }))
        };
        return acc;
    }, {})
};

function CoursesContent() {
    const [activeLevel, setActiveLevel] = useState('6ème');
    const [activeSubject, setActiveSubject] = useState('Tous');
    const [selectedCourse, setSelectedCourse] = useState(null);
    const searchParams = useSearchParams();

    // ... (rest of state)

    // Structured Course State
    const [activeChapter, setActiveChapter] = useState(null);
    const [showExercises, setShowExercises] = useState(false);
    const [quizAnswers, setQuizAnswers] = useState({});
    const [quizResults, setQuizResults] = useState({});

    // TTS State
    const [isSpeaking, setIsSpeaking] = useState(false);
    const [isPaused, setIsPaused] = useState(false);
    const [selectedVoice, setSelectedVoice] = useState(null);
    const [frenchVoices, setFrenchVoices] = useState([]);
    const speechRef = useRef(null);

    // Charger les voix françaises (fr-FR uniquement)
    useEffect(() => {
        const loadVoices = () => {
            const voices = window.speechSynthesis?.getVoices() || [];
            const french = voices.filter(v => v.lang === 'fr-FR' || v.lang === 'fr_FR');
            setFrenchVoices(french);
            if (french.length > 0 && !selectedVoice) {
                const googleFr = french.find(v => v.name.includes('Google')) || french[french.length - 1];
                setSelectedVoice(googleFr);
            }
        };
        loadVoices();
        window.speechSynthesis?.addEventListener('voiceschanged', loadVoices);
        return () => window.speechSynthesis?.removeEventListener('voiceschanged', loadVoices);
    }, [selectedVoice]);

    // Nettoyer le texte pour TTS
    const cleanTextForSpeech = (text) => {
        if (!text) return '';
        return text
            .replace(/[\u{1F600}-\u{1F64F}]/gu, '')
            .replace(/[\u{1F300}-\u{1F5FF}]/gu, '')
            .replace(/[\u{1F680}-\u{1F6FF}]/gu, '')
            .replace(/[\u{1F900}-\u{1F9FF}]/gu, '')
            .replace(/[\u{2600}-\u{27BF}]/gu, '')
            .replace(/```[\s\S]*?```/g, '. ')
            .replace(/`([^`]+)`/g, '$1')
            .replace(/\*\*([^*]+)\*\*/g, '$1')
            .replace(/\*([^*]+)\*/g, '$1')
            .replace(/#{1,6}\s*/g, '')
            .replace(/\\\(/g, '').replace(/\\\)/g, '')
            .replace(/\\\[/g, '').replace(/\\\]/g, '')
            .replace(/\\frac\{([^}]+)\}\{([^}]+)\}/g, '$1 sur $2')
            .replace(/\\sqrt\{([^}]+)\}/g, 'racine de $1')
            .replace(/\\times/g, 'fois')
            .replace(/\\div/g, 'divisé par')
            .replace(/\\[a-zA-Z]+/g, '')
            .replace(/\{|\}/g, '')
            .replace(/\n+/g, '. ')
            .replace(/[<>]/g, '')
            .replace(/&nbsp;/g, ' ')
            .replace(/\s+/g, ' ')
            .trim();
    };

    // Démarrer la lecture
    const startSpeaking = (text) => {
        if (!window.speechSynthesis) return;
        window.speechSynthesis.cancel();
        const cleanText = cleanTextForSpeech(text);
        if (!cleanText) return;

        speechRef.current = new SpeechSynthesisUtterance(cleanText);
        speechRef.current.lang = 'fr-FR';
        speechRef.current.rate = 0.9;
        speechRef.current.pitch = 1;
        if (selectedVoice) speechRef.current.voice = selectedVoice;

        speechRef.current.onstart = () => { setIsSpeaking(true); setIsPaused(false); };
        speechRef.current.onend = () => { setIsSpeaking(false); setIsPaused(false); };
        speechRef.current.onerror = () => { setIsSpeaking(false); setIsPaused(false); };

        window.speechSynthesis.speak(speechRef.current);
    };

    const togglePause = () => {
        if (window.speechSynthesis.paused) {
            window.speechSynthesis.resume();
            setIsPaused(false);
        } else {
            window.speechSynthesis.pause();
            setIsPaused(true);
        }
    };

    const stopSpeaking = () => {
        window.speechSynthesis.cancel();
        setIsSpeaking(false);
        setIsPaused(false);
    };

    const filteredCourses = courses.filter(course => {
        const matchLevel = course.level === activeLevel;
        const matchSubject = activeSubject === 'Tous' || course.subject === activeSubject;
        return matchLevel && matchSubject;
    });

    const handleCourseSelect = (course) => {
        setSelectedCourse(course);
        // If structured data exists, select first chapter by default
        if (structuredCourses[course.id]) {
            setActiveChapter(structuredCourses[course.id].chapters[0]);
            setShowExercises(false);
            setQuizAnswers({});
            setQuizResults({});
        } else {
            setActiveChapter(null);
        }
    };

    const handleQuizSubmit = (chapterId, exerciseId, optionIndex) => {
        setQuizAnswers(prev => ({
            ...prev,
            [`${chapterId}-${exerciseId}`]: optionIndex
        }));

        const chapter = structuredCourses[selectedCourse.id].chapters.find(c => c.id === chapterId);
        const exercise = chapter.exercises.find(e => e.id === exerciseId);
        const isCorrect = exercise.correctAnswer === optionIndex;

        setQuizResults(prev => ({
            ...prev,
            [`${chapterId}-${exerciseId}`]: isCorrect
        }));
    };

    // Handle deep linking via search params
    useEffect(() => {
        const courseId = searchParams.get('course');
        if (courseId) {
            const course = courses.find(c => c.id === courseId);
            if (course && course.id !== selectedCourse?.id) {
                // Determine layout based on course type
                if (structuredCourses[course.id]) {
                    // eslint-disable-next-line
                    setActiveChapter(structuredCourses[course.id].chapters[0]);
                    setShowExercises(false);
                    setQuizAnswers({});
                    setQuizResults({});
                } else {
                    setActiveChapter(null);
                }
                setSelectedCourse(course);
                setActiveLevel(course.level);
                setActiveSubject(course.subject);
            }
        }
    }, [searchParams, selectedCourse]);

    // ReactMarkdown avec rehype-katex gère maintenant le rendu LaTeX automatiquement


    return (
        <main className="min-h-screen bg-black text-white font-sans selection:bg-[#00F5D4] selection:text-black flex flex-col">
            {/* Navbar */}
            <nav className="fixed top-0 w-full z-50 border-b border-white/10 bg-black/80 backdrop-blur-xl">
                <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-2 group">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center font-bold text-white group-hover:scale-110 transition-transform">
                            <BookOpen size={18} />
                        </div>
                        <span className="font-bold text-xl tracking-tight">SymLab <span className="text-blue-500">Cours</span></span>
                    </Link>
                    <div className="flex gap-6 text-sm font-medium text-gray-400">
                        <Link href="/engineering" className="hover:text-white transition-colors">Ingénierie</Link>
                        <Link href="/simulations" className="hover:text-white transition-colors">Simulations</Link>
                        <Link href="/code" className="hover:text-white transition-colors">Notebook</Link>
                    </div>
                </div>
            </nav>

            <div className="flex flex-1 pt-16">
                {/* Sidebar - Levels (Hidden if structured course is open) */}
                {!selectedCourse && (
                    <div className="w-64 border-r border-white/10 bg-[#0F1115] hidden md:flex flex-col fixed h-[calc(100vh-4rem)] overflow-y-auto">
                        <div className="p-6">
                            <h2 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-4">Niveaux Scolaires</h2>
                            <div className="space-y-1">
                                {levels.map((level) => (
                                    <button
                                        key={level}
                                        onClick={() => setActiveLevel(level)}
                                        className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-all ${activeLevel === level
                                            ? 'bg-blue-600/10 text-blue-400 border border-blue-600/20'
                                            : 'text-gray-400 hover:bg-white/5 hover:text-white'
                                            }`}
                                    >
                                        {level}
                                        {activeLevel === level && <ChevronRight size={16} />}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                )}

                {/* Main Content */}
                <div className={`flex-1 ${!selectedCourse ? 'md:ml-64' : ''} p-4 md:p-12`}>

                    {!selectedCourse ? (
                        // COURSE LIST VIEW
                        <>
                            {/* Mobile Level Selector */}
                            <div className="md:hidden mb-6">
                                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
                                    Niveau Scolaire
                                </label>
                                <select
                                    value={activeLevel}
                                    onChange={(e) => setActiveLevel(e.target.value)}
                                    className="w-full px-4 py-3 rounded-xl bg-[#0F1115] border border-white/10 text-white font-medium focus:border-blue-500 focus:outline-none"
                                >
                                    <optgroup label="📚 Collège">
                                        <option value="6ème">6ème</option>
                                        <option value="5ème">5ème</option>
                                        <option value="4ème">4ème</option>
                                        <option value="3ème">3ème</option>
                                    </optgroup>
                                    <optgroup label="🎓 Lycée">
                                        <option value="Seconde">Seconde</option>
                                        <option value="Première">Première</option>
                                        <option value="Terminale">Terminale</option>
                                    </optgroup>
                                    <optgroup label="🚀 Supérieur">
                                        <option value="Supérieur">Supérieur & Pro</option>
                                    </optgroup>
                                </select>
                            </div>

                            <div className="mb-8 md:mb-12">
                                <h1 className="text-2xl md:text-4xl font-black mb-4 flex items-center gap-3">
                                    <GraduationCap size={40} className="text-blue-500" />
                                    Cours de {activeLevel}
                                </h1>
                                <p className="text-sm md:text-base text-gray-400">
                                    Accédez aux ressources pédagogiques conformes au programme du Sénégal.
                                </p>
                            </div>


                            <div className="flex gap-2 mb-8 overflow-x-auto pb-2">
                                {subjects.map(subject => (
                                    <button
                                        key={subject}
                                        onClick={() => setActiveSubject(subject)}
                                        className={`px-4 py-2 rounded-full text-sm font-bold whitespace-nowrap transition-all ${activeSubject === subject
                                            ? 'bg-white text-black'
                                            : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'
                                            }`}
                                    >
                                        {subject}
                                    </button>
                                ))}
                            </div>


                            {filteredCourses.length > 0 ? (
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                                    {filteredCourses.map((course) => (
                                        <div
                                            key={course.id}
                                            className="group bg-[#0F1115] rounded-2xl border border-white/10 p-6 hover:border-blue-500/50 transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/10"
                                        >
                                            <div className="flex items-start justify-between mb-4">
                                                <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl bg-${course.color}-500/10 text-${course.color}-500`}>
                                                    {course.icon}
                                                </div>
                                                <span className="px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider bg-white/5 text-gray-400 border border-white/5">
                                                    {course.subject}
                                                </span>
                                            </div>

                                            <h3 className="text-lg font-bold mb-2 group-hover:text-blue-400 transition-colors">
                                                {course.title}
                                            </h3>
                                            <p className="text-sm text-gray-500 mb-6 line-clamp-2">
                                                {course.description}
                                            </p>

                                            <div className="flex gap-3">
                                                <button
                                                    onClick={() => handleCourseSelect(course)}
                                                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-sm font-bold transition-colors"
                                                >
                                                    <Eye size={16} />
                                                    {structuredCourses[course.id] ? 'Commencer' : 'Aperçu'}
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <div className="text-center py-20 bg-[#0F1115] rounded-3xl border border-white/5 border-dashed">
                                    <div className="w-16 h-16 mx-auto rounded-full bg-white/5 flex items-center justify-center mb-4 text-gray-600">
                                        <BookOpen size={32} />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-400 mb-2">Aucun cours disponible</h3>
                                    <p className="text-gray-600">
                                        Les ressources pour {activeSubject} en {activeLevel} seront bientôt ajoutées.
                                    </p>
                                </div>
                            )}
                        </>
                    ) : (
                        // STRUCTURED COURSE VIEW OR PDF VIEWER
                        <div className="h-[calc(100vh-8rem)] flex flex-col">
                            {/* Header dynamique */}
                            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 mb-6">
                                <button
                                    onClick={() => setSelectedCourse(null)}
                                    className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-white transition-colors"
                                >
                                    <ArrowLeft size={20} />
                                </button>
                                <div className="flex-1">
                                    <h2 className="text-xl sm:text-2xl font-bold flex items-center gap-2">
                                        {selectedCourse.icon && <span className="text-2xl">{selectedCourse.icon}</span>}
                                        {selectedCourse.title}
                                    </h2>
                                    {selectedCourse.isProject && (
                                        <div className="flex flex-wrap items-center gap-2 mt-2">
                                            <span className="px-2 py-1 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-400 text-xs font-bold border border-cyan-500/30">
                                                📊 Data Science Appliquée
                                            </span>
                                            <span className="px-2 py-1 rounded-full bg-white/5 text-gray-400 text-xs">
                                                Projet #{selectedCourse.projectNumber}
                                            </span>
                                        </div>
                                    )}
                                </div>
                            </div>

                            {structuredCourses[selectedCourse.id] ? (
                                // STRUCTURED VIEW (Chapters + Exercises)
                                <div className="flex-1 flex flex-col lg:flex-row gap-4 lg:gap-6 overflow-hidden">
                                    {/* Chapters Sidebar - Hidden on mobile, shown on large screens */}
                                    <div className="hidden lg:flex lg:flex-col w-80 bg-[#0F1115] rounded-2xl border border-white/10 overflow-hidden max-h-[calc(100vh-12rem)]">
                                        <div className="p-4 border-b border-white/10 bg-white/5 flex-shrink-0">
                                            <h3 className="font-bold text-sm uppercase tracking-wider text-gray-400">Chapitres</h3>
                                        </div>
                                        <div className="flex-1 overflow-y-auto p-2 space-y-1 scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent hover:scrollbar-thumb-white/30">
                                            {structuredCourses[selectedCourse.id].chapters.map((chapter, index, arr) => {
                                                const prevChapter = arr[index - 1];
                                                const showDivider = !prevChapter || prevChapter.part !== chapter.part;

                                                return (
                                                    <div key={chapter.id}>
                                                        {showDivider && chapter.part && (
                                                            <div className="px-3 py-2 mt-4 mb-2 text-xs font-bold text-blue-400 uppercase tracking-widest bg-blue-500/5 rounded border border-blue-500/10 backdrop-blur-sm sticky top-0 z-10 mx-1">
                                                                {chapter.part}
                                                            </div>
                                                        )}
                                                        <button
                                                            onClick={() => {
                                                                setActiveChapter(chapter);
                                                                setShowExercises(false);
                                                            }}
                                                            className={`w-full text-left p-3 rounded-lg text-sm transition-all border ${activeChapter?.id === chapter.id
                                                                ? 'bg-blue-600 text-white font-bold border-blue-500 shadow-lg shadow-blue-900/20'
                                                                : 'text-gray-400 border-transparent hover:bg-white/5 hover:text-white hover:border-white/5'
                                                                }`}
                                                        >
                                                            <div className="flex items-center gap-3">
                                                                <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0 ${activeChapter?.id === chapter.id ? 'bg-white/20' : 'bg-white/5'}`}>
                                                                    {index + 1}
                                                                </span>
                                                                {chapter.title.replace(/^\d+\.\s*/, '')}
                                                            </div>
                                                        </button>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </div>

                                    {/* Content Area */}
                                    <div className="flex-1 bg-[#0F1115] rounded-2xl border border-white/10 flex flex-col overflow-hidden relative">
                                        {/* Mobile Chapter Selector */}
                                        <div className="lg:hidden p-4 border-b border-white/10 bg-black/20">
                                            <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
                                                Chapitre
                                            </label>
                                            <select
                                                value={activeChapter?.id || ''}
                                                onChange={(e) => {
                                                    const chapter = structuredCourses[selectedCourse.id].chapters.find(c => c.id === e.target.value);
                                                    setActiveChapter(chapter);
                                                    setShowExercises(false);
                                                }}
                                                className="w-full px-3 py-2 rounded-lg bg-[#0F1115] border border-white/10 text-white text-sm focus:border-blue-500 focus:outline-none"
                                            >
                                                {structuredCourses[selectedCourse.id].chapters.map((chapter, index) => (
                                                    <option key={chapter.id} value={chapter.id}>
                                                        {index + 1}. {chapter.title.replace(/^\d+\.\s*/, '')}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>

                                        {/* Tabs - Masqués pour Data Science Projects */}
                                        {!selectedCourse.isProject && (
                                            <div className="flex border-b border-white/10 bg-black/20">
                                                {selectedCourse.id.includes('entrainement') ? (
                                                    <div className="flex-1 py-4 text-sm font-bold uppercase tracking-wider text-blue-400 border-t-2 border-blue-500 bg-[#0F1115] text-center">
                                                        ✏️ Exercices
                                                    </div>
                                                ) : (
                                                    <>
                                                        <button
                                                            onClick={() => setShowExercises(false)}
                                                            className={`flex-1 py-4 text-sm font-bold uppercase tracking-wider transition-colors ${!showExercises ? 'bg-[#0F1115] text-blue-400 border-t-2 border-blue-500' : 'text-gray-500 hover:text-white bg-black/20'
                                                                }`}
                                                        >
                                                            📖 Leçon
                                                        </button>
                                                        <button
                                                            onClick={() => setShowExercises(true)}
                                                            className={`flex-1 py-4 text-sm font-bold uppercase tracking-wider transition-colors ${showExercises ? 'bg-[#0F1115] text-blue-400 border-t-2 border-blue-500' : 'text-gray-500 hover:text-white bg-black/20'
                                                                }`}
                                                        >
                                                            ✏️ Exercices
                                                        </button>
                                                    </>
                                                )}
                                            </div>
                                        )}

                                        {/* Scrollable Content */}
                                        <div className="flex-1 overflow-y-auto p-4 md:p-8 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
                                            {!showExercises || selectedCourse.id.includes('entrainement') ? (
                                                <div className="max-w-4xl mx-auto">
                                                    {/* Header Image if available */}
                                                    {activeChapter?.image && (
                                                        <div className="relative w-full mb-8 rounded-xl overflow-hidden border border-white/10 shadow-lg bg-black/40">
                                                            <img
                                                                src={activeChapter.image}
                                                                alt={activeChapter.title}
                                                                className="w-full h-48 object-cover"
                                                            />
                                                            <div className="absolute inset-0 bg-gradient-to-t from-[#0F1115] via-transparent to-transparent pointer-events-none"></div>
                                                            <div className="absolute bottom-0 left-0 p-4 pointer-events-none">
                                                                <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-bold uppercase tracking-wider border border-blue-500/20 backdrop-blur-sm inline-block">
                                                                    {activeChapter.part?.split(':')[0] || 'Chapitre'}
                                                                </span>
                                                            </div>
                                                        </div>
                                                    )}

                                                    <h2 className="text-2xl md:text-4xl font-black mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-white leading-tight">
                                                        {activeChapter?.title}
                                                    </h2>

                                                    {/* Bouton Écouter */}
                                                    {activeChapter?.content && (
                                                        <div className="flex items-center gap-3 mb-6 p-3 rounded-xl bg-[#00F5D4]/10 border border-[#00F5D4]/20">
                                                            <span className="text-xl">🎧</span>
                                                            <div className="flex-1">
                                                                <div className="text-sm font-medium text-white">Écouter ce chapitre</div>
                                                                <div className="text-xs text-gray-400">Voix française naturelle</div>
                                                            </div>
                                                            {isSpeaking ? (
                                                                <div className="flex items-center gap-2">
                                                                    <button
                                                                        onClick={togglePause}
                                                                        className={`p-2 rounded-lg transition-all ${isPaused ? 'bg-yellow-500/20 text-yellow-400' : 'bg-blue-500/20 text-blue-400'}`}
                                                                    >
                                                                        {isPaused ? '▶️' : '⏸️'}
                                                                    </button>
                                                                    <button
                                                                        onClick={stopSpeaking}
                                                                        className="p-2 rounded-lg bg-red-500/20 text-red-400"
                                                                    >
                                                                        ⏹️
                                                                    </button>
                                                                </div>
                                                            ) : (
                                                                <button
                                                                    onClick={() => startSpeaking(activeChapter.content)}
                                                                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#00F5D4] text-black font-bold hover:bg-[#00F5D4]/90 transition-all"
                                                                >
                                                                    ▶️ Écouter
                                                                </button>
                                                            )}
                                                        </div>
                                                    )}
                                                    {activeChapter?.story && (
                                                        <div className="mb-8 md:mb-10 p-4 md:p-6 rounded-2xl bg-gradient-to-br from-indigo-900/20 to-purple-900/20 border border-indigo-500/20 relative overflow-hidden group hover:border-indigo-500/40 transition-all">
                                                            <div className="absolute top-0 right-0 p-6 text-8xl opacity-5 group-hover:opacity-10 transition-opacity select-none">📖</div>
                                                            <h3 className="text-lg font-bold text-indigo-300 mb-3 flex items-center gap-2">
                                                                <span className="text-xl">✨</span> La Petite Histoire
                                                            </h3>
                                                            <p className="text-gray-300 italic leading-relaxed text-base md:text-lg font-serif">
                                                                &quot;{activeChapter.story}&quot;
                                                            </p>
                                                        </div>
                                                    )}

                                                    {/* Main Content */}
                                                    <div className="prose prose-invert prose-sm md:prose-lg max-w-none  
                                                        prose-headings:text-gray-100 prose-headings:font-bold prose-headings:tracking-tight
                                                        prose-p:text-gray-300 prose-p:leading-relaxed
                                                        prose-strong:text-white prose-strong:font-black
                                                        prose-ul:text-gray-300 prose-li:marker:text-blue-500
                                                        prose-code:text-[#00F5D4] prose-code:bg-white/10 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:font-mono prose-code:text-sm
                                                        prose-pre:bg-gradient-to-br prose-pre:from-[#1a1f2e] prose-pre:to-[#0d1117] prose-pre:border prose-pre:border-cyan-500/20 prose-pre:rounded-xl prose-pre:shadow-lg prose-pre:shadow-cyan-500/5
                                                        prose-img:rounded-xl prose-img:border prose-img:border-white/10 prose-img:mx-auto prose-img:block prose-img:shadow-lg
                                                        prose-table:border-collapse prose-th:bg-white/5 prose-th:border prose-th:border-white/10 prose-th:px-4 prose-th:py-2
                                                        prose-td:border prose-td:border-white/10 prose-td:px-4 prose-td:py-2">

                                                        {/* Module Info Banner for Data Science Projects */}
                                                        {selectedCourse.isProject && activeChapter?.part && (
                                                            <div className="not-prose mb-8 p-4 rounded-xl bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 border border-cyan-500/20">
                                                                <div className="flex items-center gap-3">
                                                                    <span className="text-3xl">📚</span>
                                                                    <div>
                                                                        <div className="text-cyan-400 font-bold text-sm uppercase tracking-wider">{activeChapter.part}</div>
                                                                        <div className="text-gray-400 text-sm">Objectif : Maîtriser les concepts clés de ce module</div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        )}

                                                        <ReactMarkdown
                                                            remarkPlugins={[remarkMath]}
                                                            rehypePlugins={[rehypeRaw, rehypeKatex]}
                                                            components={{
                                                                pre: ({ children }) => (
                                                                    <div className="not-prose my-6 rounded-xl overflow-hidden border border-cyan-500/30 shadow-lg shadow-cyan-500/10">
                                                                        <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border-b border-cyan-500/20">
                                                                            <div className="flex gap-1.5">
                                                                                <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                                                                                <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                                                                                <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                                                                            </div>
                                                                            <span className="text-cyan-400 text-xs font-mono ml-2">Python</span>
                                                                            <span className="ml-auto text-gray-500 text-xs">💡 Code exécutable</span>
                                                                        </div>
                                                                        <pre className="!bg-[#0d1117] !m-0 !rounded-none !border-0 p-4 overflow-x-auto text-sm">
                                                                            {children}
                                                                        </pre>
                                                                    </div>
                                                                ),
                                                                code: ({ className, children, ...props }) => {
                                                                    const isInline = !className;
                                                                    if (isInline) {
                                                                        return <code className="text-[#00F5D4] bg-white/10 px-1.5 py-0.5 rounded font-mono text-sm" {...props}>{children}</code>;
                                                                    }
                                                                    return <code className="font-mono text-sm text-gray-200" {...props}>{children}</code>;
                                                                }
                                                            }}
                                                        >
                                                            {stripIndentation(activeChapter?.content || '')}
                                                        </ReactMarkdown>
                                                    </div>

                                                    {/* Key Points / Summary */}
                                                    {activeChapter?.summary && (
                                                        <div className="mt-12 p-6 rounded-2xl bg-emerald-900/10 border border-emerald-500/20">
                                                            <h3 className="text-lg font-bold text-emerald-400 mb-4 flex items-center gap-2">
                                                                <span className="text-xl">💡</span> Ce qu&apos;il faut retenir
                                                            </h3>
                                                            <ul className="space-y-3">
                                                                {activeChapter.summary.map((point, idx) => (
                                                                    <li key={idx} className="flex items-start gap-3 text-gray-300 text-base">
                                                                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2.5 shrink-0"></div>
                                                                        <div className="flex-1">
                                                                            <ReactMarkdown
                                                                                remarkPlugins={[remarkMath]}
                                                                                rehypePlugins={[rehypeRaw, rehypeKatex]}
                                                                            >
                                                                                {point}
                                                                            </ReactMarkdown>
                                                                        </div>
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                    )}
                                                    {/* In Training Mode, Show Exercises Below Content */}
                                                    {selectedCourse.id.includes('entrainement') && (
                                                        <div className="mt-16 pt-10 border-t border-white/10 space-y-8">
                                                            <h2 className="text-2xl font-bold mb-6">Questions</h2>
                                                            {activeChapter?.exercises.map((ex, idx) => (
                                                                <div key={ex.id} className="bg-black/30 rounded-xl p-4 md:p-6 border border-white/10">
                                                                    <div className="flex items-start gap-4 mb-4">
                                                                        <span className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center font-bold text-sm shrink-0">
                                                                            {idx + 1}
                                                                        </span>
                                                                        <h3 className="text-lg font-medium pt-1">{ex.question}</h3>
                                                                    </div>

                                                                    <div className="space-y-3 pl-0 md:pl-12">
                                                                        {ex.options.map((option, optIdx) => {
                                                                            const isSelected = quizAnswers[`${activeChapter.id}-${ex.id}`] === optIdx;
                                                                            const isCorrect = quizResults[`${activeChapter.id}-${ex.id}`];

                                                                            let btnClass = "w-full text-left p-4 rounded-lg border transition-all ";
                                                                            if (isSelected) {
                                                                                if (isCorrect) btnClass += "bg-green-500/20 border-green-500 text-green-400";
                                                                                else btnClass += "bg-red-500/20 border-red-500 text-red-400";
                                                                            } else {
                                                                                btnClass += "bg-white/5 border-white/10 hover:bg-white/10";
                                                                            }

                                                                            return (
                                                                                <button
                                                                                    key={optIdx}
                                                                                    onClick={() => handleQuizSubmit(activeChapter.id, ex.id, optIdx)}
                                                                                    disabled={quizAnswers[`${activeChapter.id}-${ex.id}`] !== undefined}
                                                                                    className={btnClass}
                                                                                >
                                                                                    <div className="flex items-center justify-between">
                                                                                        <span>{option}</span>
                                                                                        {isSelected && (
                                                                                            isCorrect ? <CheckCircle size={20} /> : <XCircle size={20} />
                                                                                        )}
                                                                                    </div>
                                                                                </button>
                                                                            );
                                                                        })}
                                                                    </div>

                                                                    {quizAnswers[`${activeChapter.id}-${ex.id}`] !== undefined && (
                                                                        <div className={`mt-4 ml-0 md:ml-12 p-4 rounded-lg text-sm ${quizResults[`${activeChapter.id}-${ex.id}`] ? 'bg-green-900/20 text-green-300' : 'bg-red-900/20 text-red-300'}`}>
                                                                            <strong>Explication :</strong> {ex.explanation}
                                                                        </div>
                                                                    )}
                                                                </div>
                                                            ))}
                                                        </div>
                                                    )}
                                                </div>
                                            ) : (
                                                <div className="max-w-3xl mx-auto space-y-8">
                                                    <h2 className="text-2xl font-bold mb-6">Exercices d&apos;application</h2>
                                                    {activeChapter?.exercises.map((ex, idx) => (
                                                        <div key={ex.id} className="bg-black/30 rounded-xl p-4 md:p-6 border border-white/10">
                                                            <div className="flex items-start gap-4 mb-4">
                                                                <span className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center font-bold text-sm shrink-0">
                                                                    {idx + 1}
                                                                </span>
                                                                <h3 className="text-lg font-medium pt-1">{ex.question}</h3>
                                                            </div>

                                                            <div className="space-y-3 pl-0 md:pl-12">
                                                                {ex.options.map((option, optIdx) => {
                                                                    const isSelected = quizAnswers[`${activeChapter.id}-${ex.id}`] === optIdx;
                                                                    const isCorrect = quizResults[`${activeChapter.id}-${ex.id}`];

                                                                    let btnClass = "w-full text-left p-4 rounded-lg border transition-all ";
                                                                    if (isSelected) {
                                                                        if (isCorrect) btnClass += "bg-green-500/20 border-green-500 text-green-400";
                                                                        else btnClass += "bg-red-500/20 border-red-500 text-red-400";
                                                                    } else {
                                                                        btnClass += "bg-white/5 border-white/10 hover:bg-white/10";
                                                                    }

                                                                    return (
                                                                        <button
                                                                            key={optIdx}
                                                                            onClick={() => handleQuizSubmit(activeChapter.id, ex.id, optIdx)}
                                                                            disabled={quizAnswers[`${activeChapter.id}-${ex.id}`] !== undefined}
                                                                            className={btnClass}
                                                                        >
                                                                            <div className="flex items-center justify-between">
                                                                                <span>{option}</span>
                                                                                {isSelected && (
                                                                                    isCorrect ? <CheckCircle size={20} /> : <XCircle size={20} />
                                                                                )}
                                                                            </div>
                                                                        </button>
                                                                    );
                                                                })}
                                                            </div>

                                                            {quizAnswers[`${activeChapter.id}-${ex.id}`] !== undefined && (
                                                                <div className={`mt-4 ml-0 md:ml-12 p-4 rounded-lg text-sm ${quizResults[`${activeChapter.id}-${ex.id}`] ? 'bg-green-900/20 text-green-300' : 'bg-red-900/20 text-red-300'}`}>
                                                                    <strong>Explication :</strong> {ex.explanation}
                                                                </div>
                                                            )}
                                                        </div>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                // FALLBACK PDF VIEWER
                                <div className="flex-1 bg-[#0F1115] rounded-2xl border border-white/10 overflow-hidden">
                                    <iframe
                                        src={selectedCourse.file}
                                        className="w-full h-full"
                                        title={selectedCourse.title}
                                    />
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>

            {/* Floating Audio Player */}
            {isSpeaking && (
                <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
                    <div className="flex items-center gap-4 px-5 py-3 rounded-full bg-[#0F1115] border border-[#00F5D4]/30 shadow-lg">
                        <div className="w-2 h-2 rounded-full bg-[#00F5D4] animate-pulse"></div>
                        <span className="text-sm text-gray-300">Lecture en cours</span>
                        <button onClick={togglePause} className={`p-2 rounded-full ${isPaused ? 'bg-yellow-500/20 text-yellow-400' : 'bg-blue-500/20 text-blue-400'}`}>
                            {isPaused ? '▶️' : '⏸️'}
                        </button>
                        <button onClick={stopSpeaking} className="p-2 rounded-full bg-red-500/20 text-red-400">
                            ⏹️
                        </button>
                    </div>
                </div>
            )}
        </main>
    );
}

export default function CoursesPage() {
    return (
        <Suspense fallback={<div className="min-h-screen bg-black flex items-center justify-center text-[#00F5D4]">Chargement...</div>}>
            <CoursesContent />
        </Suspense>
    );
}


