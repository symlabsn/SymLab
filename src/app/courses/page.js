'use client';

import { useState } from 'react';
import Link from 'next/link';
import { courses } from './courseData';
import { BookOpen, Download, Eye, ChevronRight, GraduationCap, Atom, Calculator, Dna } from 'lucide-react';

export default function CoursesPage() {
    const [activeLevel, setActiveLevel] = useState('6ème');
    const [activeSubject, setActiveSubject] = useState('Tous');
    const [selectedCourse, setSelectedCourse] = useState(null);

    const levels = ['6ème', '5ème', '4ème', '3ème', 'Seconde', 'Première', 'Terminale'];
    const subjects = ['Tous', 'Mathématiques', 'Physique-Chimie', 'SVT'];

    const filteredCourses = courses.filter(course => {
        const matchLevel = course.level === activeLevel;
        const matchSubject = activeSubject === 'Tous' || course.subject === activeSubject;
        return matchLevel && matchSubject;
    });

    const getSubjectIcon = (subject) => {
        switch (subject) {
            case 'Mathématiques': return <Calculator size={20} />;
            case 'Physique-Chimie': return <Atom size={20} />;
            case 'SVT': return <Dna size={20} />;
            default: return <BookOpen size={20} />;
        }
    };

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
                {/* Sidebar - Levels */}
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

                {/* Main Content */}
                <div className="flex-1 md:ml-64 p-6 md:p-12">
                    {/* Header */}
                    <div className="mb-12">
                        <h1 className="text-4xl font-black mb-4 flex items-center gap-3">
                            <GraduationCap size={40} className="text-blue-500" />
                            Cours de {activeLevel}
                        </h1>
                        <p className="text-gray-400">
                            Accédez aux ressources pédagogiques conformes au programme du Sénégal.
                        </p>
                    </div>

                    {/* Subject Filters */}
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

                    {/* Course Grid */}
                    {filteredCourses.length > 0 ? (
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                                            onClick={() => setSelectedCourse(course)}
                                            className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-sm font-bold transition-colors"
                                        >
                                            <Eye size={16} />
                                            Aperçu
                                        </button>
                                        <a
                                            href={course.file}
                                            download
                                            className="flex items-center justify-center w-10 h-10 rounded-lg bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors border border-white/10"
                                        >
                                            <Download size={16} />
                                        </a>
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
                </div>
            </div>

            {/* PDF Viewer Modal */}
            {selectedCourse && (
                <div className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 md:p-8">
                    <div className="w-full h-full max-w-6xl bg-[#0F1115] rounded-2xl border border-white/10 flex flex-col shadow-2xl">
                        <div className="flex items-center justify-between p-4 border-b border-white/10">
                            <h3 className="font-bold flex items-center gap-2">
                                {selectedCourse.icon} {selectedCourse.title}
                            </h3>
                            <div className="flex gap-2">
                                <a
                                    href={selectedCourse.file}
                                    download
                                    className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-sm font-bold transition-colors flex items-center gap-2"
                                >
                                    <Download size={16} />
                                    Télécharger
                                </a>
                                <button
                                    onClick={() => setSelectedCourse(null)}
                                    className="w-9 h-9 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
                                >
                                    ✕
                                </button>
                            </div>
                        </div>
                        <div className="flex-1 bg-gray-900 relative">
                            <iframe
                                src={selectedCourse.file}
                                className="w-full h-full"
                                title={selectedCourse.title}
                            />
                        </div>
                    </div>
                </div>
            )}
        </main>
    );
}
