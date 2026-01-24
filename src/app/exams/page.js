'use client';

import { useState, useEffect } from 'react';
import examsData from './examsData';
import RichText from '@/components/RichText';

export default function ExamsPage() {
    const [filterType, setFilterType] = useState('ALL'); // ALL, BFEM, BAC, BAC S1, BAC S2
    const [filterSubject, setFilterSubject] = useState('ALL'); // ALL, Mathématiques, Physique-Chimie
    const [selectedExam, setSelectedExam] = useState(null); // For the modal
    const [showCorrection, setShowCorrection] = useState(false); // Toggle between Subject and Correction

    // Effects for body scroll lock
    const [isExamOpen, setIsExamOpen] = useState(false);

    useEffect(() => {
        if (isExamOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isExamOpen]);

    const filteredExams = examsData.filter(exam => {
        const typeMatch = filterType === 'ALL' || exam.type === filterType || (filterType === 'BAC' && exam.type.startsWith('BAC'));
        const subjectMatch = filterSubject === 'ALL' || exam.subject === filterSubject;
        return typeMatch && subjectMatch;
    });

    const openExam = (exam) => {
        setSelectedExam(exam);
        setShowCorrection(false);
        setIsExamOpen(true);
    };

    const closeExam = () => {
        setSelectedExam(null);
        setShowCorrection(false);
        setIsExamOpen(false);
    };

    return (
        <main className="min-h-screen bg-black text-white selection:bg-[#2DD4BF] selection:text-black">
            {/* --- Hero Section with Background Glow --- */}
            <div className="relative pt-32 pb-20 px-4 overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[#2DD4BF]/10 blur-[120px] rounded-full pointer-events-none" />

                <section className="relative max-w-7xl mx-auto text-center z-10">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8 hover:bg-white/10 transition-colors cursor-default">
                        <span className="w-2 h-2 rounded-full bg-[#2DD4BF] animate-pulse" />
                        <span className="text-gray-300 text-sm font-medium tracking-wide">BANQUE D&apos;ÉPREUVES OFFICIELLES</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-black mb-8 tracking-tight">
                        Préparez votre<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#2DD4BF] to-[#818CF8] animate-gradient-x">
                            Réussite aux Examens
                        </span>
                    </h1>

                    <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
                        Accédez gratuitement aux sujets corrigés du BFEM et du BAC (S1, S2).
                        Une ressource indispensable pour s&apos;entraîner en conditions réelles.
                    </p>
                </section>
            </div>

            {/* --- Filters Section --- */}
            <section className="sticky top-20 z-30 bg-black/80 backdrop-blur-xl border-y border-white/5 py-4 mb-12">
                <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
                    {/* Type Filter */}
                    <div className="flex bg-white/5 p-1.5 rounded-2xl gap-1">
                        {['ALL', 'BFEM', 'BAC S1', 'BAC S2'].map(type => (
                            <button
                                key={type}
                                onClick={() => setFilterType(type)}
                                className={`px-5 py-2 rounded-xl text-sm font-bold transition-all duration-300 ${filterType === type
                                    ? 'bg-[#2DD4BF] text-black shadow-lg shadow-[#2DD4BF]/20 scale-105'
                                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                                    }`}
                            >
                                {type === 'ALL' ? 'Tout' : type}
                            </button>
                        ))}
                    </div>

                    {/* Subject Filter */}
                    <div className="flex bg-white/5 p-1.5 rounded-2xl gap-1 overflow-x-auto max-w-full">
                        {['ALL', 'Mathématiques', 'Physique-Chimie'].map(subject => (
                            <button
                                key={subject}
                                onClick={() => setFilterSubject(subject)}
                                className={`px-5 py-2 rounded-xl text-sm font-bold transition-all duration-300 whitespace-nowrap ${filterSubject === subject
                                    ? 'bg-[#818CF8] text-white shadow-lg shadow-[#818CF8]/20 scale-105'
                                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                                    }`}
                            >
                                {subject === 'ALL' ? 'Toutes les matières' : subject}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- Content Grid --- */}
            <div className="max-w-7xl mx-auto px-4 pb-20">
                {filteredExams.length === 0 ? (
                    <div className="text-center py-20">
                        <p className="text-2xl text-gray-500 font-bold">Aucun sujet trouvé pour ces critères.</p>
                        <button
                            onClick={() => { setFilterType('ALL'); setFilterSubject('ALL') }}
                            className="mt-4 text-[#2DD4BF] hover:underline"
                        >
                            Réinitialiser les filtres
                        </button>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredExams.map((exam) => (
                            <div
                                key={exam.id}
                                onClick={() => openExam(exam)}
                                className="group relative bg-[#0A0A0A] rounded-3xl border border-white/5 overflow-hidden hover:border-[#2DD4BF]/30 transition-all duration-500 hover:shadow-2xl hover:shadow-[#2DD4BF]/5 hover:-translate-y-2 cursor-pointer"
                            >
                                {/* Card Header with Color Splash */}
                                <div className={`h-2 w-full ${exam.type.includes('BAC') ? 'bg-gradient-to-r from-yellow-400 to-orange-500' : 'bg-gradient-to-r from-[#2DD4BF] to-teal-500'}`} />

                                <div className="p-8">
                                    <div className="flex justify-between items-start mb-6">
                                        <div className="flex gap-2">
                                            <span className={`px-3 py-1 rounded-lg text-xs font-bold tracking-wider ${exam.type.includes('BAC')
                                                ? 'bg-yellow-500/10 text-yellow-400 border border-yellow-500/20'
                                                : 'bg-[#2DD4BF]/10 text-[#2DD4BF] border border-[#2DD4BF]/20'
                                                }`}>
                                                {exam.type}
                                            </span>
                                            <span className="px-3 py-1 rounded-lg bg-white/5 text-gray-400 text-xs font-bold border border-white/10">
                                                {exam.subject.substring(0, 4).toUpperCase()}.
                                            </span>
                                        </div>
                                        <div className="flex items-center gap-1 text-xs font-bold text-gray-500">
                                            <span className="w-2 h-2 rounded-full bg-gray-700" />
                                            {exam.duration}
                                        </div>
                                    </div>

                                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[#2DD4BF] transition-colors leading-tight">
                                        {exam.title}
                                    </h3>

                                    <p className="text-gray-400 text-sm leading-relaxed mb-6 line-clamp-2">
                                        {exam.description}
                                    </p>

                                    {/* Topics Pills */}
                                    <div className="flex flex-wrap gap-2 mt-auto">
                                        {exam.topics.slice(0, 3).map((topic, i) => (
                                            <span key={i} className="px-2.5 py-1 rounded-md bg-white/5 text-xs text-gray-300 border border-white/5 group-hover:border-white/20 transition-colors">
                                                {topic}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Hover Action */}
                                <div className="absolute bottom-0 left-0 w-full h-1 bg-[#2DD4BF] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                            </div>
                        ))}
                    </div>
                )}
            </div>

            {/* --- Premium Modal --- */}
            {selectedExam && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8">
                    {/* Backdrop */}
                    <div
                        className="absolute inset-0 bg-black/90 backdrop-blur-md transition-opacity duration-300"
                        onClick={closeExam}
                    />

                    {/* Modal Content */}
                    <div
                        className="relative w-full max-w-5xl h-[85vh] bg-[#121212] rounded-[32px] border border-white/10 shadow-2xl flex flex-col overflow-hidden animate-in zoom-in-95 duration-300"
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between px-8 py-6 border-b border-white/5 bg-[#1A1A1A]">
                            <div className="flex items-center gap-4">
                                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center font-black text-xl shadow-lg ${selectedExam.type.includes('BAC')
                                    ? 'bg-gradient-to-br from-yellow-400 to-orange-600 text-white'
                                    : 'bg-gradient-to-br from-[#2DD4BF] to-teal-600 text-black'
                                    }`}>
                                    {selectedExam.type.charAt(0)}
                                </div>
                                <div>
                                    <h2 className="text-xl font-bold text-white">{selectedExam.title}</h2>
                                    <p className="text-sm text-gray-400 font-medium">{selectedExam.subject} • {selectedExam.duration}</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                {/* Toggle Switch */}
                                <div className="hidden md:flex bg-black p-1 rounded-xl border border-white/10">
                                    <button
                                        onClick={() => setShowCorrection(false)}
                                        className={`px-6 py-2 rounded-lg text-sm font-bold transition-all ${!showCorrection ? 'bg-white text-black shadow-md' : 'text-gray-400 hover:text-white'
                                            }`}
                                    >
                                        Sujet
                                    </button>
                                    <button
                                        onClick={() => setShowCorrection(true)}
                                        className={`px-6 py-2 rounded-lg text-sm font-bold transition-all ${showCorrection ? 'bg-[#2DD4BF] text-black shadow-md' : 'text-gray-400 hover:text-white'
                                            }`}
                                    >
                                        Correction
                                    </button>
                                </div>

                                <button
                                    onClick={closeExam}
                                    className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
                                >
                                    ✕
                                </button>
                            </div>
                        </div>

                        {/* Mobile Toggle (Visible only on small screens) */}
                        <div className="md:hidden flex border-b border-white/5 bg-black">
                            <button
                                onClick={() => setShowCorrection(false)}
                                className={`flex-1 py-4 text-sm font-bold border-b-2 transition-all ${!showCorrection ? 'text-white border-white' : 'text-gray-500 border-transparent'
                                    }`}
                            >
                                SUJET
                            </button>
                            <button
                                onClick={() => setShowCorrection(true)}
                                className={`flex-1 py-4 text-sm font-bold border-b-2 transition-all ${showCorrection ? 'text-[#2DD4BF] border-[#2DD4BF]' : 'text-gray-500 border-transparent'
                                    }`}
                            >
                                CORRECTION
                            </button>
                        </div>

                        {/* Scrollable Content */}
                        <div className="flex-1 overflow-y-auto bg-[#0A0A0A] custom-scrollbar">
                            <div className="max-w-4xl mx-auto p-8 md:p-12">
                                {showCorrection ? (
                                    <div className="animate-in slide-in-from-right-4 fade-in duration-300">
                                        <div className="mb-8 p-6 rounded-2xl bg-gradient-to-br from-[#2DD4BF]/10 to-transparent border border-[#2DD4BF]/20 flex gap-4 items-start">
                                            <span className="text-2xl">💡</span>
                                            <div>
                                                <h3 className="text-[#2DD4BF] font-bold text-lg mb-1">Corrigé Détaillé</h3>
                                                <p className="text-sm text-gray-400 leading-relaxed">
                                                    Voici les éléments de réponse. Assurez-vous d&apos;avoir bien cherché par vous-même avant de consulter la solution !
                                                </p>
                                            </div>
                                        </div>
                                        <div className="prose prose-invert prose-lg max-w-none">
                                            <RichText>{selectedExam.correction}</RichText>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="animate-in slide-in-from-left-4 fade-in duration-300">
                                        <div className="prose prose-invert prose-lg max-w-none">
                                            <RichText>{selectedExam.content}</RichText>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Footer for actions like Print (fake) */}
                        <div className="p-4 border-t border-white/5 bg-[#121212] flex justify-between items-center text-xs text-gray-500 px-8">
                            <span>SymLab Official • {selectedExam.id}</span>
                            <div className="flex gap-4">
                                <button className="hover:text-white transition-colors flex gap-2 items-center">
                                    <span>🖨️</span> Imprimer
                                </button>
                                <button className="hover:text-white transition-colors flex gap-2 items-center">
                                    <span>⬇️</span> PDF
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            )}
        </main>
    );
}
