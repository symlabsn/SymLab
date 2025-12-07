'use client';

import { useState } from 'react';
import Link from 'next/link';
import examsData from './examsData';

export default function ExamsPage() {
    const [filterType, setFilterType] = useState('ALL'); // ALL, BFEM, BAC
    const [filterSubject, setFilterSubject] = useState('ALL'); // ALL, Mathématiques, Physique-Chimie

    const filteredExams = examsData.filter(exam => {
        const typeMatch = filterType === 'ALL' || exam.type === filterType;
        const subjectMatch = filterSubject === 'ALL' || exam.subject === filterSubject;
        return typeMatch && subjectMatch;
    });

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
                    Accédez aux épreuves officielles du BFEM et du BAC Sénégal.
                    Entraînez-vous en conditions réelles.
                </p>
            </section>

            {/* Filters */}
            <section className="max-w-6xl mx-auto mb-12 flex flex-col md:flex-row justify-center gap-6">
                {/* Type Filter */}
                <div className="flex bg-white/5 p-1 rounded-xl">
                    {['ALL', 'BFEM', 'BAC'].map(type => (
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
                        className="sci-card p-6 flex flex-col group hover:-translate-y-2 transition-transform duration-300"
                        style={{ '--accent-color': exam.type === 'BAC' ? '#FCD34D' : '#00F5D4' }}
                    >
                        <div className="flex justify-between items-start mb-4">
                            <span className={`px-3 py-1 rounded text-xs font-bold ${exam.type === 'BAC' ? 'bg-yellow-500/20 text-yellow-400' : 'bg-[#00F5D4]/20 text-[#00F5D4]'
                                }`}>
                                {exam.type}
                            </span>
                            <span className="text-gray-500 font-mono text-sm">{exam.year}</span>
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
        </main>
    );
}
