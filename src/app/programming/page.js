'use client';

import { useState, useEffect, Suspense } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import pythonCurriculum from './curriculum';
import RichText from '@/components/RichText';

function ProgrammingContent() {
    const [selectedChapter, setSelectedChapter] = useState(null);
    const [selectedLesson, setSelectedLesson] = useState(null);
    const [copiedCode, setCopiedCode] = useState(null);
    const searchParams = useSearchParams();

    useEffect(() => {
        const chapterId = searchParams.get('chapter');
        if (chapterId) {
            setSelectedChapter(chapterId);
            setTimeout(() => {
                const element = document.getElementById(chapterId);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }, 500);
        }
    }, [searchParams]);

    const handleCopyCode = (code, lessonId) => {
        navigator.clipboard.writeText(code);
        setCopiedCode(lessonId);
        setTimeout(() => setCopiedCode(null), 2000);
    };

    return (
        <main className="min-h-screen py-20 px-4 bg-black">
            {/* Header magnifique */}
            <section className="max-w-6xl mx-auto mb-20">
                <div className="text-center mb-12">
                    {/* Badge */}
                    <div className="inline-block px-6 py-3 rounded-full bg-gradient-to-r from-[#00F5D4]/20 to-[#7C3AED]/20 border border-[#00F5D4]/30 mb-8 backdrop-blur-sm animate-pulse">
                        <span className="text-[#00F5D4] text-sm font-bold tracking-widest">PYTHON POUR LES SCIENCES</span>
                    </div>

                    {/* Titre principal */}
                    <h1 className="text-5xl md:text-7xl font-black mb-6">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00F5D4] via-white to-[#7C3AED]">
                            Maîtrisez Python
                        </span>
                    </h1>

                    {/* Sous-titre */}
                    <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
                        Un cours complet, <span className="text-[#00F5D4] font-bold">pour débutants</span>,
                        avec des <span className="text-[#7C3AED] font-bold">analogies</span> et
                        un <span className="text-[#FF9F1C] font-bold">focus majeur sur SymPy</span>
                    </p>

                    {/* Stats */}
                    <div className="flex flex-wrap justify-center gap-6 text-sm">
                        <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5">
                            <span className="text-2xl">🎓</span>
                            <span className="text-gray-400">Pour débutants</span>
                        </div>
                        <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5">
                            <span className="text-2xl">🔬</span>
                            <span className="text-gray-400">Focus scientifique</span>
                        </div>
                        <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5">
                            <span className="text-2xl">💡</span>
                            <span className="text-gray-400">Avec analogies</span>
                        </div>
                        <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5">
                            <span className="text-2xl">∑</span>
                            <span className="text-gray-400">SymPy complet</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Curriculum */}
            <section className="max-w-7xl mx-auto space-y-6">
                {pythonCurriculum.map((chapter, chapterIdx) => (
                    <div
                        key={chapter.id}
                        id={chapter.id}
                        className={`sci-card p-6 transition-all duration-300 ${chapter.isHighlight ? 'ring-2 ring-[#00F5D4]/50' : ''}`}
                        style={{
                            '--accent-color': chapter.color,
                            animationDelay: `${chapterIdx * 100}ms`
                        }}
                    >
                        {/* En-tête du chapitre */}
                        <div
                            className="flex items-center gap-4 cursor-pointer group"
                            onClick={() => setSelectedChapter(selectedChapter === chapter.id ? null : chapter.id)}
                        >
                            {/* Icône */}
                            <div className="text-5xl transform group-hover:scale-110 transition-transform">
                                {chapter.icon}
                            </div>

                            {/* Infos */}
                            <div className="flex-1">
                                <div className="flex items-center gap-3 mb-2">
                                    <h2 className="text-2xl md:text-3xl font-black text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all">
                                        {chapter.title}
                                    </h2>
                                    {chapter.isHighlight && (
                                        <span className="px-3 py-1 rounded-full bg-[#00F5D4]/20 text-[#00F5D4] text-xs font-bold">
                                            FOCUS MAJEUR
                                        </span>
                                    )}
                                </div>
                                <p className="text-gray-400 text-sm md:text-base mb-2">{chapter.description}</p>
                                {chapter.duration && (
                                    <div className="flex items-center gap-2 text-xs text-gray-500">
                                        <span>⏱️</span>
                                        <span>{chapter.duration}</span>
                                    </div>
                                )}
                            </div>

                            {/* Indicateur */}
                            <div className="text-3xl text-gray-500 group-hover:text-white transition-colors">
                                {selectedChapter === chapter.id ? '▼' : '▶'}
                            </div>
                        </div>

                        {/* Leçons */}
                        {selectedChapter === chapter.id && (
                            <div className="mt-8 space-y-4">
                                {chapter.lessons.map((lesson, idx) => {
                                    const lessonId = `${chapter.id}-${idx}`;
                                    const isSelected = selectedLesson === lessonId;

                                    return (
                                        <div
                                            key={idx}
                                            className="border-l-4 pl-6 py-4 rounded-r-lg transition-all duration-300 hover:bg-white/5 cursor-pointer"
                                            style={{
                                                borderColor: isSelected ? chapter.color : `${chapter.color}40`
                                            }}
                                            onClick={() => setSelectedLesson(isSelected ? null : lessonId)}
                                        >
                                            {/* En-tête de leçon */}
                                            <div className="flex items-start justify-between gap-4">
                                                <div className="flex-1">
                                                    <div className="flex items-center gap-3 mb-2">
                                                        <h3 className="text-xl md:text-2xl font-bold text-white">
                                                            {lesson.title}
                                                        </h3>
                                                        {lesson.duration && (
                                                            <span className="text-xs text-gray-500 px-2 py-1 rounded bg-white/5">
                                                                {lesson.duration}
                                                            </span>
                                                        )}
                                                    </div>
                                                    {lesson.analogy && (
                                                        <p className="text-gray-400 italic text-sm md:text-base">
                                                            {lesson.analogy}
                                                        </p>
                                                    )}
                                                </div>
                                                <span className="text-gray-500 text-xl flex-shrink-0">
                                                    {isSelected ? '−' : '+'}
                                                </span>
                                            </div>

                                            {/* Contenu de la leçon */}
                                            {isSelected && (
                                                <div className="mt-6 space-y-6">
                                                    {/* Contenu principal avec RichText */}
                                                    <div className="text-gray-300 leading-relaxed text-base md:text-lg">
                                                        <RichText>{lesson.content}</RichText>
                                                    </div>

                                                    {/* Points clés */}
                                                    {lesson.keyPoints && (
                                                        <div className="bg-gradient-to-r from-white/5 to-transparent rounded-lg p-6 border-l-4" style={{ borderColor: chapter.color }}>
                                                            <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                                                                <span>📌</span>
                                                                <span>Points clés à retenir</span>
                                                            </h4>
                                                            <ul className="space-y-2">
                                                                {lesson.keyPoints.map((point, i) => (
                                                                    <li key={i} className="text-gray-300 flex items-start gap-3">
                                                                        <span className="text-[#00F5D4] mt-1 flex-shrink-0">✓</span>
                                                                        <span>{point}</span>
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                    )}

                                                    {/* Bloc de code magnifique */}
                                                    <div className="bg-black/80 rounded-xl border border-white/10 overflow-hidden shadow-2xl">
                                                        {/* En-tête du code */}
                                                        <div className="flex items-center justify-between px-6 py-3 bg-gradient-to-r from-white/10 to-white/5 border-b border-white/10">
                                                            <div className="flex items-center gap-3">
                                                                <span className="text-xs font-mono text-gray-400">Python</span>
                                                                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                                                                <span className="text-xs text-gray-500">Prêt à exécuter</span>
                                                            </div>
                                                            <button
                                                                className={`text-xs px-3 py-1 rounded transition-all ${copiedCode === lessonId
                                                                    ? 'bg-green-500/20 text-green-400'
                                                                    : 'bg-[#00F5D4]/20 text-[#00F5D4] hover:bg-[#00F5D4]/30'
                                                                    }`}
                                                                onClick={(e) => {
                                                                    e.stopPropagation();
                                                                    handleCopyCode(lesson.code, lessonId);
                                                                }}
                                                            >
                                                                {copiedCode === lessonId ? '✓ Copié !' : '📋 Copier'}
                                                            </button>
                                                        </div>

                                                        {/* Code */}
                                                        <pre className="p-6 overflow-x-auto">
                                                            <code className="text-sm md:text-base text-gray-300 font-mono leading-relaxed">
                                                                {lesson.code}
                                                            </code>
                                                        </pre>
                                                    </div>

                                                    {/* Astuce */}
                                                    {lesson.tip && (
                                                        <div className="bg-gradient-to-r from-[#FF9F1C]/10 to-transparent rounded-lg p-4 border-l-4 border-[#FF9F1C]">
                                                            <p className="text-gray-300 text-sm md:text-base">
                                                                {lesson.tip}
                                                            </p>
                                                        </div>
                                                    )}
                                                </div>
                                            )}
                                        </div>
                                    );
                                })}
                            </div>
                        )}
                    </div>
                ))}
            </section>

            {/* CTA final */}
            <section className="max-w-4xl mx-auto mt-20">
                <div className="sci-card p-8 md:p-12 text-center" style={{ '--accent-color': '#00F5D4' }}>
                    <div className="text-5xl mb-4">🚀</div>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Prêt à coder ?
                    </h2>
                    <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
                        Ouvrez l&apos;éditeur Python interactif et testez tout ce que vous venez d&apos;apprendre !
                    </p>
                    <Link
                        href="/code"
                        className="inline-block px-10 py-4 rounded-xl font-bold text-lg text-black transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                        style={{ background: 'linear-gradient(135deg, #00F5D4, #7C3AED)' }}
                    >
                        Ouvrir l&apos;Éditeur Python →
                    </Link>
                </div>
            </section>
        </main>
    );
}

export default function ProgrammingPage() {
    return (
        <Suspense fallback={<div className="min-h-screen bg-black flex items-center justify-center text-[#00F5D4]">Chargement...</div>}>
            <ProgrammingContent />
        </Suspense>
    );
}
