'use client';

import { useState } from 'react';
import Link from 'next/link';
import examsData from './examsData';
// Assuming RichText handles markdown rendering well
import RichText from '@/components/RichText';

export default function ExamsPage() {
    const [filterType, setFilterType] = useState('ALL'); // ALL, BFEM, BAC, BAC S1, BAC S2
    const [filterSubject, setFilterSubject] = useState('ALL'); // ALL, Mathématiques, Physique-Chimie
    const [selectedExam, setSelectedExam] = useState(null); // For the modal
    const [showCorrection, setShowCorrection] = useState(false); // Toggle between Subject and Correction

    const filteredExams = examsData.filter(exam => {
        // Handle specific types like BAC S1/S2 being included in generic 'BAC' filter if needed, 
        // OR strict filtering. User asked for specific types (BFEM, BAC S1, BAC S2).
        // Let's allow strict filtering but grouping S1/S2 under "BAC" if desired? 
        // For now, simple match.
        const typeMatch = filterType === 'ALL' || exam.type === filterType || (filterType === 'BAC' && exam.type.startsWith('BAC'));
        const subjectMatch = filterSubject === 'ALL' || exam.subject === filterSubject;
        return typeMatch && subjectMatch;
    });

    const openExam = (exam) => {
        setSelectedExam(exam);
        setShowCorrection(false);
    };

    const closeExam = () => {
        setSelectedExam(null);
        setShowCorrection(false);
    };

    return (
        <main className="min-h-screen py-20 px-4 bg-black">
            {/* Header */}
            <section className="max-w-6xl mx-auto mb-16 text-center">
                <div className="inline-block px-4 py-1 rounded-full bg-[#00F5D4]/10 border border-[#00F5D4]/20 mb-6">
                    <span className="text-[#00F5D4] text-sm font-bold tracking-widest">ESPACE RÉVISIONS</span>
                </div>
                <h1 className="text-4xl md:text-6xl font-black mb-6">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00F5D4] via-white to-[#7C3AED]">
                        Banque d&apos;Examens
                    </span>
                </h1>
                <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                    Accédez aux épreuves types du Sénégal (BFEM, BAC S1, BAC S2).
                    Sujets complets et corrections détaillées.
                </p>
            </section>

            {/* Filters */}
            <section className="max-w-6xl mx-auto mb-12 flex flex-col md:flex-row justify-center gap-6">
                {/* Type Filter */}
                <div className="flex flex-wrap justify-center bg-white/5 p-1 rounded-xl gap-2">
                    {['ALL', 'BFEM', 'BAC S1', 'BAC S2'].map(type => (
                        <button
                            key={type}
                            onClick={() => setFilterType(type)}
                            className={`px-6 py-2 rounded-lg text-sm font-bold transition-all ${filterType === type
                                ? 'bg-[#00F5D4] text-black shadow-lg shadow-[#00F5D4]/20'
                                : 'text-gray-400 hover:text-white'
                                }`}
                        >
                            {type === 'ALL' ? 'Tout' : type}
                        </button>
                    ))}
                </div>

                {/* Subject Filter */}
                <div className="flex bg-white/5 p-1 rounded-xl overflow-x-auto">
                    {['ALL', 'Mathématiques', 'Physique-Chimie'].map(subject => (
                        <button
                            key={subject}
                            onClick={() => setFilterSubject(subject)}
                            className={`px-6 py-2 rounded-lg text-sm font-bold transition-all whitespace-nowrap ${filterSubject === subject
                                ? 'bg-[#7C3AED] text-white shadow-lg shadow-[#7C3AED]/20'
                                : 'text-gray-400 hover:text-white'
                                }`}
                        >
                            {subject === 'ALL' ? 'Toutes Matières' : subject}
                        </button>
                    ))}
                </div>
            </section>

            {/* Exams Grid */}
            <section className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredExams.map((exam) => (
                    <div
                        key={exam.id}
                        className="sci-card p-6 flex flex-col group hover:-translate-y-2 transition-transform duration-300 cursor-pointer"
                        style={{ '--accent-color': exam.type.includes('BAC') ? '#FCD34D' : '#00F5D4' }}
                        onClick={() => openExam(exam)}
                    >
                        <div className="flex justify-between items-start mb-4">
                            <span className={`px-3 py-1 rounded text-xs font-bold ${exam.type.includes('BAC') ? 'bg-yellow-500/20 text-yellow-400' : 'bg-[#00F5D4]/20 text-[#00F5D4]'
                                }`}>
                                {exam.type}
                            </span>
                            {/* Year removed as requested */}
                            <span className="bg-white/10 px-2 py-1 rounded text-xs text-gray-400">{exam.difficulty}</span>
                        </div>

                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#00F5D4] transition-colors">
                            {exam.title}
                        </h3>

                        <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                            {exam.description}
                        </p>

                        <div className="flex flex-wrap gap-2 mb-6">
                            {exam.topics.slice(0, 3).map((topic, i) => (
                                <span key={i} className="px-2 py-1 rounded bg-white/5 text-xs text-gray-300 border border-white/10">
                                    {topic}
                                </span>
                            ))}
                            {exam.topics.length > 3 && (
                                <span className="px-2 py-1 rounded bg-white/5 text-xs text-gray-300 border border-white/10">
                                    +{exam.topics.length - 3}
                                </span>
                            )}
                        </div>

                        <div className="mt-auto pt-4 border-t border-white/10 flex justify-between items-center">
                            <div className="flex flex-col">
                                <span className="text-xs text-gray-500">Durée</span>
                                <span className="text-sm font-bold text-white">{exam.duration}</span>
                            </div>
                            <button className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white text-sm font-bold transition-colors">
                                Voir le sujet
                            </button>
                        </div>
                    </div>
                ))}
            </section>

            {/* Modal for Exam Detail */}
            {selectedExam && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
                    <div
                        className="bg-[#0f0f13] border border-white/10 rounded-2xl w-full max-w-4xl max-h-[90vh] flex flex-col shadow-2xl animate-in zoom-in-95 duration-200"
                        style={{ boxShadow: `0 0 50px ${selectedExam.type.includes('BAC') ? '#FCD34D20' : '#00F5D420'}` }}
                    >
                        {/* Modal Header */}
                        <div className="p-6 border-b border-white/10 flex justify-between items-start bg-white/5 rounded-t-2xl">
                            <div>
                                <div className="flex items-center gap-3 mb-2">
                                    <span className={`px-3 py-1 rounded text-xs font-bold ${selectedExam.type.includes('BAC') ? 'bg-yellow-500/20 text-yellow-400' : 'bg-[#00F5D4]/20 text-[#00F5D4]'
                                        }`}>
                                        {selectedExam.type}
                                    </span>
                                    <span className="text-gray-400 text-sm">| {selectedExam.subject}</span>
                                </div>
                                <h2 className="text-2xl font-bold text-white">{selectedExam.title}</h2>
                            </div>
                            <button
                                onClick={closeExam}
                                className="p-2 rounded-full hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
                            >
                                ✕
                            </button>
                        </div>

                        {/* Toggle Correction */}
                        <div className="flex p-4 gap-4 border-b border-white/10 bg-black/20">
                            <button
                                onClick={() => setShowCorrection(false)}
                                className={`flex-1 py-3 rounded-xl font-bold transition-all ${!showCorrection
                                    ? 'bg-white text-black'
                                    : 'bg-white/5 text-gray-400 hover:bg-white/10'
                                    }`}
                            >
                                📄 Sujet
                            </button>
                            <button
                                onClick={() => setShowCorrection(true)}
                                className={`flex-1 py-3 rounded-xl font-bold transition-all ${showCorrection
                                    ? 'bg-[#00F5D4] text-black'
                                    : 'bg-white/5 text-gray-400 hover:bg-white/10'
                                    }`}
                            >
                                ✅ Correction
                            </button>
                        </div>

                        {/* Content Area */}
                        <div className="flex-1 overflow-y-auto p-6 md:p-10 custom-scrollbar text-gray-200">
                            {showCorrection ? (
                                <div className="prose prose-invert max-w-none">
                                    <div className="bg-[#00F5D4]/5 border-l-4 border-[#00F5D4] p-4 mb-6">
                                        <h3 className="text-[#00F5D4] font-bold m-0">Correction Détaillée</h3>
                                        <p className="text-sm text-gray-400 mt-1 m-0">
                                            Prenez le temps de chercher avant de regarder la solution !
                                        </p>
                                    </div>
                                    <RichText>{selectedExam.correction}</RichText>
                                </div>
                            ) : (
                                <div className="prose prose-invert max-w-none">
                                    <RichText>{selectedExam.content}</RichText>
                                </div>
                            )}
                        </div>

                        {/* Footer Actions */}
                        <div className="p-4 border-t border-white/10 flex justify-end gap-4 bg-white/5 rounded-b-2xl">
                            <button
                                onClick={closeExam}
                                className="px-6 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white font-bold transition-colors"
                            >
                                Fermer
                            </button>
                        </div>
                    </div>
                </div>
            )
            }
        </main >
    );
}
