'use client';

import { useState, useEffect, useRef, Suspense } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import pythonCurriculum from './curriculum';
import RichText from '@/components/RichText';

// Icônes SVG premium
const PlayIcon = () => (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M8 5v14l11-7z" />
    </svg>
);

const PauseIcon = () => (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
    </svg>
);

const StopIcon = () => (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M6 6h12v12H6z" />
    </svg>
);

const CodeIcon = () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
    </svg>
);

const BookIcon = () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
    </svg>
);

const VolumeUpIcon = () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
    </svg>
);

// Feature Cards Data
const features = [
    {
        icon: "🐍",
        title: "Python Moderne",
        description: "Syntaxe claire et puissante pour les sciences",
        gradient: "from-[#00F5D4] to-[#00D9A8]"
    },
    {
        icon: "📐",
        title: "SymPy Focus",
        description: "Calcul symbolique pour les mathématiques",
        gradient: "from-[#7C3AED] to-[#6D28D9]"
    },
    {
        icon: "🎧",
        title: "Audio Intégré",
        description: "Lecture vocale française de chaque leçon",
        gradient: "from-[#FF9F1C] to-[#F59E0B]"
    },
    {
        icon: "🧪",
        title: "Sciences Appliquées",
        description: "Physique, chimie, biologie en code",
        gradient: "from-[#EC4899] to-[#BE185D]"
    }
];

function ProgrammingContent() {
    const [selectedChapter, setSelectedChapter] = useState(null);
    const [selectedLesson, setSelectedLesson] = useState(null);
    const [copiedCode, setCopiedCode] = useState(null);
    const [activeFilter, setActiveFilter] = useState('Tous');
    const searchParams = useSearchParams();

    // TTS State
    const [isSpeaking, setIsSpeaking] = useState(false);
    const [isPaused, setIsPaused] = useState(false);
    const [currentReadingLesson, setCurrentReadingLesson] = useState(null);

    // Voix françaises uniquement
    const [frenchVoices, setFrenchVoices] = useState([]);
    const [selectedVoice, setSelectedVoice] = useState(null);
    const [showVoiceSelector, setShowVoiceSelector] = useState(false);
    const speechRef = useRef(null);

    useEffect(() => {
        const chapterId = searchParams.get('chapter');
        if (chapterId) {
            setSelectedChapter(chapterId);
            setTimeout(() => {
                const element = document.getElementById(chapterId);
                if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }, 500);
        }
    }, [searchParams]);

    // Charger uniquement les voix françaises (pas Canada)
    useEffect(() => {
        const loadVoices = () => {
            const voices = window.speechSynthesis?.getVoices() || [];
            const french = voices.filter(v =>
                (v.lang === 'fr-FR' || v.lang === 'fr_FR') && !v.lang.includes('CA')
            );
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

    const handleCopyCode = (code, lessonId) => {
        navigator.clipboard.writeText(code);
        setCopiedCode(lessonId);
        setTimeout(() => setCopiedCode(null), 2000);
    };

    // Nettoyer le texte pour une lecture naturelle
    const cleanTextForSpeech = (text) => {
        if (!text) return '';
        return text
            .replace(/[\u{1F600}-\u{1F64F}]/gu, '')
            .replace(/[\u{1F300}-\u{1F5FF}]/gu, '')
            .replace(/[\u{1F680}-\u{1F6FF}]/gu, '')
            .replace(/[\u{1F900}-\u{1F9FF}]/gu, '')
            .replace(/[\u{1FA00}-\u{1FAFF}]/gu, '')
            .replace(/[\u{2600}-\u{26FF}]/gu, '')
            .replace(/[\u{2700}-\u{27BF}]/gu, '')
            .replace(/[\u{1F1E0}-\u{1F1FF}]/gu, '')
            .replace(/```python[\s\S]*?```/g, '. Voici un exemple de code Python. ')
            .replace(/```[\s\S]*?```/g, '. Voici un exemple de code. ')
            .replace(/`([^`]+)`/g, '$1')
            .replace(/\*\*([^*]+)\*\*/g, '$1')
            .replace(/\*([^*]+)\*/g, '$1')
            .replace(/#{1,6}\s*/g, '')
            .replace(/\$/g, '')
            .replace(/(\d+),(\d+)/g, '$1 virgule $2')
            .replace(/(\d+)\.(\d+)/g, '$1 virgule $2')
            .replace(/%/g, ' pourcent ')
            .replace(/\n\n+/g, '. ')
            .replace(/\n/g, ', ')
            .replace(/:\s*-/g, ': ')
            .replace(/-\s+/g, '')
            .replace(/[<>]/g, '')
            .replace(/&nbsp;/g, ' ')
            .replace(/&amp;/g, ' et ')
            .replace(/→/g, ' vers ')
            .replace(/←/g, ' depuis ')
            .replace(/•/g, '')
            .replace(/✓/g, '')
            .replace(/✗/g, '')
            .replace(/[★☆]/g, '')
            .replace(/\s+/g, ' ')
            .replace(/\.\s*\./g, '.')
            .replace(/,\s*,/g, ',')
            .replace(/\.\s*,/g, '.')
            .trim();
    };

    const startSpeaking = (lesson, lessonId) => {
        if (!window.speechSynthesis) {
            alert("La synthèse vocale n'est pas supportée par votre navigateur.");
            return;
        }

        window.speechSynthesis.cancel();

        const text = cleanTextForSpeech(lesson.content);
        if (!text) return;

        speechRef.current = new SpeechSynthesisUtterance(text);
        speechRef.current.lang = 'fr-FR';
        speechRef.current.rate = 0.9;
        speechRef.current.pitch = 1;
        speechRef.current.volume = 1;

        if (selectedVoice) {
            speechRef.current.voice = selectedVoice;
        }

        speechRef.current.onstart = () => {
            setIsSpeaking(true);
            setIsPaused(false);
            setCurrentReadingLesson(lessonId);
        };

        speechRef.current.onend = () => {
            setIsSpeaking(false);
            setIsPaused(false);
            setCurrentReadingLesson(null);
        };

        speechRef.current.onerror = () => {
            setIsSpeaking(false);
            setIsPaused(false);
            setCurrentReadingLesson(null);
        };

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
        setCurrentReadingLesson(null);
    };

    // Filtre les chapitres
    const filteredCurriculum = activeFilter === 'Tous'
        ? pythonCurriculum
        : pythonCurriculum.filter(ch => ch.isHighlight);

    // Stats
    const totalLessons = pythonCurriculum.reduce((acc, ch) => acc + ch.lessons.length, 0);
    const totalChapters = pythonCurriculum.length;

    return (
        <main className="min-h-screen bg-[#020617] text-white overflow-hidden">
            {/* Animated Background */}
            <div className="fixed inset-0 pointer-events-none overflow-hidden">
                <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[#00F5D4] rounded-full blur-[180px] opacity-10 animate-pulse" style={{ animationDuration: '8s' }} />
                <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#7C3AED] rounded-full blur-[150px] opacity-10 animate-pulse" style={{ animationDuration: '10s', animationDelay: '2s' }} />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#FF9F1C] rounded-full blur-[200px] opacity-5 animate-pulse" style={{ animationDuration: '12s', animationDelay: '4s' }} />
            </div>

            {/* Navbar */}
            <nav className="fixed top-0 w-full z-50 border-b border-white/10 bg-black/60 backdrop-blur-xl">
                <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-3 group">
                        <div className="relative w-10 h-10 rounded-xl overflow-hidden ring-2 ring-[#00F5D4]/30 group-hover:ring-[#00F5D4]/60 transition-all">
                            <Image
                                src="/images/programming/python_logo.png"
                                alt="Python Science Lab"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <span className="font-bold text-xl tracking-tight">
                            SymLab <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00F5D4] to-[#7C3AED]">Python</span>
                        </span>
                    </Link>
                    <div className="flex items-center gap-6">
                        <Link href="/code" className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-gray-300 hover:bg-white/10 hover:text-white transition-all text-sm font-medium">
                            <CodeIcon />
                            <span className="hidden md:inline">Notebook</span>
                        </Link>
                        <Link href="/engineering" className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-[#00F5D4] to-[#00D9A8] text-black font-bold text-sm hover:shadow-lg hover:shadow-[#00F5D4]/20 transition-all">
                            <BookIcon />
                            <span className="hidden md:inline">Projets</span>
                        </Link>
                    </div>
                </div>
            </nav>

            {/* Hero Section Premium */}
            <section className="relative pt-32 pb-16 px-4 overflow-hidden">
                {/* Hero Image Background */}
                <div className="absolute inset-0 opacity-30">
                    <Image
                        src="/images/programming/hero_banner.png"
                        alt="Hero Background"
                        fill
                        className="object-cover object-center"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#020617] via-transparent to-[#020617]" />
                </div>

                <div className="max-w-6xl mx-auto relative z-10">
                    {/* Badge animé */}
                    <div className="flex justify-center mb-8">
                        <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#00F5D4]/10 via-[#7C3AED]/10 to-[#FF9F1C]/10 border border-[#00F5D4]/30 backdrop-blur-sm">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00F5D4] opacity-75" />
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00F5D4]" />
                            </span>
                            <span className="text-sm font-bold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-[#00F5D4] via-[#7C3AED] to-[#FF9F1C]">
                                PYTHON POUR LES SCIENCES
                            </span>
                            <span className="px-2 py-0.5 rounded-full bg-[#FF9F1C]/20 text-[#FF9F1C] text-xs font-bold">
                                {totalChapters} Modules
                            </span>
                        </div>
                    </div>

                    {/* Logo et titre */}
                    <div className="text-center mb-10">
                        <div className="relative inline-block mb-6">
                            <div className="absolute inset-0 bg-gradient-to-r from-[#00F5D4] to-[#7C3AED] blur-3xl opacity-30" />
                            <div className="relative w-32 h-32 mx-auto rounded-2xl overflow-hidden ring-4 ring-white/10 shadow-2xl shadow-[#00F5D4]/20">
                                <Image
                                    src="/images/programming/python_logo.png"
                                    alt="Python Science Lab Logo"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>

                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-none">
                            <span className="block text-white">Maîtrisez</span>
                            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#00F5D4] via-[#7C3AED] to-[#FF9F1C] animate-gradient-x">
                                Python & SymPy
                            </span>
                        </h1>

                        <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-10">
                            Un cours complet avec <span className="text-[#00F5D4] font-semibold">lecture audio</span>,
                            des <span className="text-[#7C3AED] font-semibold">analogies visuelles</span> et
                            un <span className="text-[#FF9F1C] font-semibold">focus sur le calcul symbolique</span>
                        </p>

                        {/* Stats Cards */}
                        <div className="flex flex-wrap justify-center gap-4 mb-10">
                            <div className="px-6 py-3 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                                <div className="text-3xl font-black text-[#00F5D4]">{totalChapters}</div>
                                <div className="text-xs text-gray-400 uppercase tracking-wider">Modules</div>
                            </div>
                            <div className="px-6 py-3 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                                <div className="text-3xl font-black text-[#7C3AED]">{totalLessons}</div>
                                <div className="text-xs text-gray-400 uppercase tracking-wider">Leçons</div>
                            </div>
                            <div className="px-6 py-3 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                                <div className="text-3xl font-black text-[#FF9F1C]">∞</div>
                                <div className="text-xs text-gray-400 uppercase tracking-wider">Exercices</div>
                            </div>
                        </div>

                        {/* Voice Selector */}
                        <div className="flex justify-center">
                            <button
                                onClick={() => setShowVoiceSelector(!showVoiceSelector)}
                                className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-gradient-to-r from-white/5 to-white/10 border border-white/10 text-gray-300 hover:border-[#00F5D4]/30 hover:text-white transition-all group"
                            >
                                <VolumeUpIcon />
                                <span>Voix: <span className="text-[#00F5D4] font-medium">{selectedVoice?.name?.split(' ')[0] || 'Française'}</span></span>
                                <span className={`text-xs transition-transform ${showVoiceSelector ? 'rotate-180' : ''}`}>▼</span>
                            </button>
                        </div>

                        {/* Voice Dropdown */}
                        {showVoiceSelector && frenchVoices.length > 0 && (
                            <div className="mt-4 max-w-md mx-auto p-4 rounded-2xl bg-[#0F1115] border border-white/10 backdrop-blur-xl shadow-2xl">
                                <p className="text-sm text-gray-400 mb-3 flex items-center gap-2">
                                    <VolumeUpIcon />
                                    Voix françaises disponibles
                                </p>
                                <div className="space-y-2 max-h-48 overflow-y-auto scrollbar-hide">
                                    {frenchVoices.map((voice, idx) => (
                                        <button
                                            key={idx}
                                            onClick={() => { setSelectedVoice(voice); setShowVoiceSelector(false); }}
                                            className={`w-full text-left px-4 py-3 rounded-xl transition-all text-sm ${selectedVoice?.name === voice.name
                                                ? 'bg-gradient-to-r from-[#00F5D4]/20 to-[#7C3AED]/20 text-[#00F5D4] border border-[#00F5D4]/30'
                                                : 'bg-white/5 text-gray-300 hover:bg-white/10 border border-transparent'
                                                }`}
                                        >
                                            <div className="font-medium">{voice.name}</div>
                                            <div className="text-xs text-gray-500">{voice.lang}</div>
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </section>

            {/* Feature Cards */}
            <section className="max-w-6xl mx-auto px-4 py-12 relative z-10">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {features.map((feature, idx) => (
                        <div
                            key={idx}
                            className="group relative p-6 rounded-2xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-1"
                        >
                            <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform shadow-lg`}>
                                {feature.icon}
                            </div>
                            <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                            <p className="text-sm text-gray-400">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Filter Tabs */}
            <section className="max-w-7xl mx-auto px-4 py-8 relative z-10">
                <div className="flex justify-center gap-3">
                    {['Tous', 'Focus Majeurs'].map((filter) => (
                        <button
                            key={filter}
                            onClick={() => setActiveFilter(filter)}
                            className={`px-6 py-3 rounded-xl font-bold text-sm transition-all duration-300 ${activeFilter === filter
                                ? 'bg-gradient-to-r from-[#00F5D4] to-[#00D9A8] text-black shadow-lg shadow-[#00F5D4]/20'
                                : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-white/10'
                                }`}
                        >
                            {filter}
                        </button>
                    ))}
                </div>
            </section>

            {/* Curriculum Grid */}
            <section className="max-w-7xl mx-auto px-4 pb-32 space-y-6 relative z-10">
                {filteredCurriculum.map((chapter, chapterIdx) => (
                    <div
                        key={chapter.id}
                        id={chapter.id}
                        className={`group relative rounded-3xl border transition-all duration-500 overflow-hidden ${selectedChapter === chapter.id
                            ? 'border-[#00F5D4]/50 bg-gradient-to-br from-[#00F5D4]/5 via-transparent to-[#7C3AED]/5'
                            : 'border-white/10 bg-gradient-to-br from-[#0F1115] to-[#020617] hover:border-white/20'
                            } ${chapter.isHighlight ? 'ring-2 ring-[#FF9F1C]/30' : ''}`}
                    >
                        {/* Shimmer effect on hover */}
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                            <div className="absolute top-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-white/5 to-transparent group-hover:left-full transition-all duration-1000" />
                        </div>

                        {/* Chapter Header */}
                        <div
                            className="relative p-6 md:p-8 cursor-pointer"
                            onClick={() => setSelectedChapter(selectedChapter === chapter.id ? null : chapter.id)}
                        >
                            <div className="flex items-center gap-5">
                                {/* Icon Container */}
                                <div className={`relative flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-2xl flex items-center justify-center text-4xl md:text-5xl transition-all duration-300 ${selectedChapter === chapter.id
                                    ? 'bg-gradient-to-br from-[#00F5D4]/20 to-[#7C3AED]/20 scale-110'
                                    : 'bg-white/5 group-hover:bg-white/10 group-hover:scale-105'
                                    }`}>
                                    {chapter.icon}
                                    <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-[#020617] border-2 border-[#00F5D4] flex items-center justify-center text-xs font-bold text-[#00F5D4]">
                                        {chapter.lessons.length}
                                    </div>
                                </div>

                                {/* Chapter Info */}
                                <div className="flex-1 min-w-0">
                                    <div className="flex items-center gap-3 mb-2 flex-wrap">
                                        <h2 className={`text-xl md:text-2xl lg:text-3xl font-black transition-colors ${selectedChapter === chapter.id ? 'text-[#00F5D4]' : 'text-white group-hover:text-[#00F5D4]'
                                            }`}>
                                            {chapter.title}
                                        </h2>
                                        {chapter.isHighlight && (
                                            <span className="px-3 py-1 rounded-full bg-gradient-to-r from-[#FF9F1C]/20 to-[#F59E0B]/20 text-[#FF9F1C] text-xs font-bold border border-[#FF9F1C]/30 animate-pulse">
                                                ⭐ FOCUS MAJEUR
                                            </span>
                                        )}
                                    </div>
                                    <p className="text-gray-400 text-sm md:text-base line-clamp-2">{chapter.description}</p>
                                </div>

                                {/* Expand Arrow */}
                                <div className={`flex-shrink-0 w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center transition-all duration-300 ${selectedChapter === chapter.id ? 'rotate-90 bg-[#00F5D4]/20 text-[#00F5D4]' : 'text-gray-500 group-hover:text-white'
                                    }`}>
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </div>
                            </div>
                        </div>

                        {/* Lessons Accordion */}
                        {selectedChapter === chapter.id && (
                            <div className="border-t border-white/10 p-4 md:p-6 space-y-4 animate-in slide-in-from-top duration-300">
                                {chapter.lessons.map((lesson, idx) => {
                                    const lessonId = `${chapter.id}-${idx}`;
                                    const isSelected = selectedLesson === lessonId;
                                    const isReading = currentReadingLesson === lessonId;

                                    return (
                                        <div
                                            key={idx}
                                            className={`rounded-2xl border overflow-hidden transition-all duration-300 ${isSelected
                                                ? 'border-[#00F5D4]/40 bg-gradient-to-br from-[#00F5D4]/10 via-transparent to-[#7C3AED]/5 shadow-lg shadow-[#00F5D4]/10'
                                                : 'border-white/10 hover:border-white/20 bg-white/5 hover:bg-white/8'
                                                } ${isReading ? 'ring-2 ring-[#00F5D4] animate-pulse' : ''}`}
                                        >
                                            {/* Lesson Header */}
                                            <div
                                                className="p-4 md:p-5 cursor-pointer"
                                                onClick={() => setSelectedLesson(isSelected ? null : lessonId)}
                                            >
                                                <div className="flex items-start justify-between gap-4">
                                                    <div className="flex items-start gap-4 flex-1">
                                                        <span className={`flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center text-sm font-bold transition-all ${isSelected
                                                            ? 'bg-gradient-to-br from-[#00F5D4] to-[#00D9A8] text-black'
                                                            : 'bg-white/10 text-[#00F5D4]'
                                                            }`}>
                                                            {idx + 1}
                                                        </span>
                                                        <div className="flex-1 min-w-0">
                                                            <div className="flex items-center gap-3 flex-wrap">
                                                                <h3 className="text-lg md:text-xl font-bold text-white">{lesson.title}</h3>
                                                                {isReading && (
                                                                    <span className="flex items-center gap-2 px-3 py-1 rounded-full bg-[#00F5D4]/20 text-[#00F5D4] text-xs font-bold">
                                                                        <span className="w-2 h-2 rounded-full bg-[#00F5D4] animate-ping" />
                                                                        Lecture en cours
                                                                    </span>
                                                                )}
                                                            </div>
                                                            {lesson.analogy && (
                                                                <p className="text-gray-400 text-sm italic mt-1">💡 {lesson.analogy}</p>
                                                            )}
                                                        </div>
                                                    </div>
                                                    <span className={`flex-shrink-0 text-gray-500 text-xl transition-transform duration-300 ${isSelected ? 'rotate-180' : ''}`}>
                                                        ▼
                                                    </span>
                                                </div>
                                            </div>

                                            {/* Lesson Content */}
                                            {isSelected && (
                                                <div className="px-4 md:px-5 pb-6 space-y-6 animate-in fade-in duration-300">
                                                    {/* Audio Player */}
                                                    <div className="flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-[#00F5D4]/10 to-[#7C3AED]/10 border border-[#00F5D4]/20">
                                                        <div className="w-12 h-12 rounded-xl bg-[#00F5D4]/20 flex items-center justify-center text-2xl">
                                                            🎧
                                                        </div>
                                                        <div className="flex-1">
                                                            <div className="font-semibold text-white">Écouter cette leçon</div>
                                                            <div className="text-xs text-gray-400">Voix française naturelle • Lecture automatique</div>
                                                        </div>
                                                        {isReading ? (
                                                            <div className="flex items-center gap-2">
                                                                <button
                                                                    onClick={(e) => { e.stopPropagation(); togglePause(); }}
                                                                    className={`p-3 rounded-xl transition-all ${isPaused
                                                                        ? 'bg-[#FF9F1C]/20 text-[#FF9F1C] hover:bg-[#FF9F1C]/30'
                                                                        : 'bg-[#7C3AED]/20 text-[#7C3AED] hover:bg-[#7C3AED]/30'
                                                                        }`}
                                                                >
                                                                    {isPaused ? <PlayIcon /> : <PauseIcon />}
                                                                </button>
                                                                <button
                                                                    onClick={(e) => { e.stopPropagation(); stopSpeaking(); }}
                                                                    className="p-3 rounded-xl bg-red-500/20 text-red-400 hover:bg-red-500/30 transition-all"
                                                                >
                                                                    <StopIcon />
                                                                </button>
                                                            </div>
                                                        ) : (
                                                            <button
                                                                onClick={(e) => { e.stopPropagation(); startSpeaking(lesson, lessonId); }}
                                                                className="flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-[#00F5D4] to-[#00D9A8] text-black font-bold hover:shadow-lg hover:shadow-[#00F5D4]/30 transition-all transform hover:scale-105"
                                                            >
                                                                <PlayIcon />
                                                                <span>Écouter</span>
                                                            </button>
                                                        )}
                                                    </div>

                                                    {/* Content Text */}
                                                    <div className="relative pl-5 border-l-2 border-gradient-to-b from-[#00F5D4] to-[#7C3AED] border-[#00F5D4]/30">
                                                        <div className="text-gray-300 leading-relaxed text-base md:text-lg prose prose-invert max-w-none">
                                                            <RichText>{lesson.content}</RichText>
                                                        </div>
                                                    </div>

                                                    {/* Key Points */}
                                                    {lesson.keyPoints && (
                                                        <div className="p-5 rounded-2xl bg-gradient-to-br from-emerald-500/10 via-transparent to-emerald-600/5 border border-emerald-500/20">
                                                            <h4 className="flex items-center gap-2 text-lg font-bold text-white mb-4">
                                                                <span className="w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400">✓</span>
                                                                Points clés à retenir
                                                            </h4>
                                                            <ul className="space-y-3">
                                                                {lesson.keyPoints.map((point, i) => (
                                                                    <li key={i} className="flex items-start gap-3 text-gray-300">
                                                                        <span className="text-emerald-400 mt-1">•</span>
                                                                        <RichText>{point}</RichText>
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                    )}

                                                    {/* Code Block */}
                                                    <div className="rounded-2xl border border-[#00F5D4]/30 overflow-hidden shadow-xl shadow-black/20">
                                                        <div className="flex items-center justify-between px-4 py-3 bg-gradient-to-r from-[#0F1115] to-[#1a1f2e] border-b border-white/10">
                                                            <div className="flex items-center gap-3">
                                                                <div className="flex gap-1.5">
                                                                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                                                                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                                                                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                                                                </div>
                                                                <span className="text-xs font-mono text-[#00F5D4] flex items-center gap-2">
                                                                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                                                                        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 22c-5.514 0-10-4.486-10-10S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10zm3.166-14.766c.182.183.182.479 0 .662l-3.503 3.498 3.503 3.498c.182.183.182.479 0 .662-.182.183-.479.183-.662 0L11.006 12l3.498-3.504c.183-.183.48-.183.662 0z" />
                                                                    </svg>
                                                                    Python
                                                                </span>
                                                            </div>
                                                            <button
                                                                className={`flex items-center gap-2 text-xs px-4 py-2 rounded-lg font-bold transition-all ${copiedCode === lessonId
                                                                    ? 'bg-emerald-500/20 text-emerald-400'
                                                                    : 'bg-[#00F5D4]/10 text-[#00F5D4] hover:bg-[#00F5D4]/20'
                                                                    }`}
                                                                onClick={(e) => { e.stopPropagation(); handleCopyCode(lesson.code, lessonId); }}
                                                            >
                                                                {copiedCode === lessonId ? (
                                                                    <>
                                                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                                        </svg>
                                                                        Copié !
                                                                    </>
                                                                ) : (
                                                                    <>
                                                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                                                        </svg>
                                                                        Copier
                                                                    </>
                                                                )}
                                                            </button>
                                                        </div>
                                                        <pre className="p-5 bg-[#0d1117] overflow-x-auto">
                                                            <code className="text-sm text-gray-300 font-mono leading-relaxed">{lesson.code}</code>
                                                        </pre>
                                                    </div>

                                                    {/* Tip */}
                                                    {lesson.tip && (
                                                        <div className="flex items-start gap-4 p-4 rounded-xl bg-gradient-to-r from-amber-500/10 to-orange-500/10 border border-amber-500/20">
                                                            <span className="text-2xl">💡</span>
                                                            <div>
                                                                <div className="font-bold text-amber-400 mb-1">Astuce Pro</div>
                                                                <p className="text-gray-300 text-sm">{lesson.tip}</p>
                                                            </div>
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

            {/* CTA Section */}
            <section className="relative z-10 max-w-4xl mx-auto px-4 pb-32">
                <div className="relative rounded-3xl border border-[#00F5D4]/30 bg-gradient-to-br from-[#0F1115] via-[#020617] to-[#0F1115] p-8 md:p-12 text-center overflow-hidden">
                    {/* Background decoration */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-[#00F5D4] rounded-full blur-[100px] opacity-10" />
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#7C3AED] rounded-full blur-[100px] opacity-10" />

                    <div className="relative z-10">
                        <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-[#00F5D4]/20 to-[#7C3AED]/20 flex items-center justify-center text-5xl border border-white/10">
                            🚀
                        </div>
                        <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
                            Prêt à coder ?
                        </h2>
                        <p className="text-gray-400 text-lg mb-8 max-w-md mx-auto">
                            Ouvrez le notebook Python interactif et commencez à expérimenter avec SymPy
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="/code"
                                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-bold text-black bg-gradient-to-r from-[#00F5D4] to-[#00D9A8] hover:shadow-2xl hover:shadow-[#00F5D4]/30 transition-all transform hover:scale-105"
                            >
                                <CodeIcon />
                                Ouvrir le Notebook
                            </Link>
                            <Link
                                href="/engineering"
                                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-bold text-white bg-white/10 border border-white/20 hover:bg-white/20 transition-all"
                            >
                                <BookIcon />
                                Voir les Projets
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Floating Audio Player */}
            {isSpeaking && (
                <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
                    <div className="flex items-center gap-4 px-6 py-4 rounded-2xl bg-[#0F1115]/95 backdrop-blur-xl border border-[#00F5D4]/30 shadow-2xl shadow-black/50">
                        <div className="relative">
                            <div className="w-3 h-3 rounded-full bg-[#00F5D4]" />
                            <div className="absolute inset-0 w-3 h-3 rounded-full bg-[#00F5D4] animate-ping" />
                        </div>
                        <span className="text-sm text-gray-300 font-medium">Lecture audio en cours</span>
                        <div className="flex items-center gap-2">
                            <button
                                onClick={togglePause}
                                className={`p-2.5 rounded-xl transition-all ${isPaused
                                    ? 'bg-[#FF9F1C]/20 text-[#FF9F1C] hover:bg-[#FF9F1C]/30'
                                    : 'bg-[#7C3AED]/20 text-[#7C3AED] hover:bg-[#7C3AED]/30'
                                    }`}
                            >
                                {isPaused ? <PlayIcon /> : <PauseIcon />}
                            </button>
                            <button
                                onClick={stopSpeaking}
                                className="p-2.5 rounded-xl bg-red-500/20 text-red-400 hover:bg-red-500/30 transition-all"
                            >
                                <StopIcon />
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* CSS for gradient animation */}
            <style jsx global>{`
                @keyframes gradient-x {
                    0%, 100% {
                        background-size: 200% 200%;
                        background-position: left center;
                    }
                    50% {
                        background-size: 200% 200%;
                        background-position: right center;
                    }
                }
                .animate-gradient-x {
                    animation: gradient-x 8s ease infinite;
                }
            `}</style>
        </main>
    );
}

export default function ProgrammingPage() {
    return (
        <Suspense fallback={
            <div className="min-h-screen bg-[#020617] flex items-center justify-center">
                <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-[#00F5D4]/20 to-[#7C3AED]/20 flex items-center justify-center animate-pulse">
                        <span className="text-3xl">🐍</span>
                    </div>
                    <div className="text-[#00F5D4] font-bold">Chargement...</div>
                </div>
            </div>
        }>
            <ProgrammingContent />
        </Suspense>
    );
}
