'use client';

import { useState, useEffect, useRef, Suspense } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import pythonCurriculum from './curriculum';
import RichText from '@/components/RichText';

// Icônes
const PlayIcon = () => <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>;
const PauseIcon = () => <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" /></svg>;
const StopIcon = () => <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M6 6h12v12H6z" /></svg>;
const VolumeIcon = () => <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02z" /></svg>;

function ProgrammingContent() {
    const [selectedChapter, setSelectedChapter] = useState(null);
    const [selectedLesson, setSelectedLesson] = useState(null);
    const [copiedCode, setCopiedCode] = useState(null);
    const searchParams = useSearchParams();

    // Text-to-Speech State
    const [isSpeaking, setIsSpeaking] = useState(false);
    const [isPaused, setIsPaused] = useState(false);
    const [speechRate, setSpeechRate] = useState(1);
    const [speechVoice, setSpeechVoice] = useState(null);
    const [availableVoices, setAvailableVoices] = useState([]);
    const [currentReadingLesson, setCurrentReadingLesson] = useState(null);
    const [showAudioControls, setShowAudioControls] = useState(false);
    const speechRef = useRef(null);

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

    // Initialiser les voix disponibles
    useEffect(() => {
        const loadVoices = () => {
            const voices = window.speechSynthesis?.getVoices() || [];
            // Privilégier les voix françaises
            const frenchVoices = voices.filter(v => v.lang.startsWith('fr'));
            const allVoices = [...frenchVoices, ...voices.filter(v => !v.lang.startsWith('fr'))];
            setAvailableVoices(allVoices);
            if (frenchVoices.length > 0 && !speechVoice) {
                setSpeechVoice(frenchVoices[0]);
            }
        };

        loadVoices();
        window.speechSynthesis?.addEventListener('voiceschanged', loadVoices);
        return () => window.speechSynthesis?.removeEventListener('voiceschanged', loadVoices);
    }, [speechVoice]);

    const handleCopyCode = (code, lessonId) => {
        navigator.clipboard.writeText(code);
        setCopiedCode(lessonId);
        setTimeout(() => setCopiedCode(null), 2000);
    };

    // Nettoyer le texte pour la lecture audio
    const cleanTextForSpeech = (text) => {
        if (!text) return '';
        return text
            .replace(/```[\s\S]*?```/g, ', voici un exemple de code, ')
            .replace(/`([^`]+)`/g, '$1')
            .replace(/\*\*([^*]+)\*\*/g, '$1')
            .replace(/\*([^*]+)\*/g, '$1')
            .replace(/#+ /g, '')
            .replace(/\n+/g, '. ')
            .replace(/[<>]/g, '')
            .replace(/&nbsp;/g, ' ')
            .replace(/&amp;/g, 'et')
            .replace(/\s+/g, ' ')
            .trim();
    };

    // Démarrer la lecture audio
    const startSpeaking = (lesson, lessonId) => {
        if (!window.speechSynthesis) {
            alert('Votre navigateur ne supporte pas la synthèse vocale.');
            return;
        }

        // Arrêter toute lecture en cours
        window.speechSynthesis.cancel();

        const textToSpeak = cleanTextForSpeech(lesson.content);
        if (!textToSpeak) return;

        speechRef.current = new SpeechSynthesisUtterance(textToSpeak);
        speechRef.current.lang = 'fr-FR';
        speechRef.current.rate = speechRate;
        speechRef.current.pitch = 1;

        if (speechVoice) {
            speechRef.current.voice = speechVoice;
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

    // Mettre en pause / reprendre
    const togglePause = () => {
        if (window.speechSynthesis.paused) {
            window.speechSynthesis.resume();
            setIsPaused(false);
        } else {
            window.speechSynthesis.pause();
            setIsPaused(true);
        }
    };

    // Arrêter la lecture
    const stopSpeaking = () => {
        window.speechSynthesis.cancel();
        setIsSpeaking(false);
        setIsPaused(false);
        setCurrentReadingLesson(null);
    };

    return (
        <main className="min-h-screen py-20 px-4 bg-black">
            {/* Header magnifique */}
            <section className="max-w-6xl mx-auto mb-20">
                <div className="text-center mb-12">
                    {/* Badge */}
                    <div className="inline-block px-6 py-3 rounded-full bg-gradient-to-r from-[#00F5D4]/20 to-[#7C3AED]/20 border border-[#00F5D4]/30 mb-8 backdrop-blur-sm">
                        <span className="text-[#00F5D4] text-sm font-bold tracking-widest animate-pulse">🎧 AVEC LECTURE AUDIO</span>
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
                        avec des <span className="text-[#7C3AED] font-bold">analogies</span>,
                        un <span className="text-[#FF9F1C] font-bold">focus majeur sur SymPy</span>
                        et <span className="text-pink-400 font-bold">narration audio 🎧</span>
                    </p>

                    {/* Stats */}
                    <div className="flex flex-wrap justify-center gap-4 text-sm">
                        <div className="flex items-center gap-2 px-4 py-3 rounded-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 hover:border-[#00F5D4]/50 transition-all">
                            <span className="text-2xl">🎓</span>
                            <span className="text-gray-300 font-medium">Pour débutants</span>
                        </div>
                        <div className="flex items-center gap-2 px-4 py-3 rounded-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 hover:border-[#00F5D4]/50 transition-all">
                            <span className="text-2xl">🔬</span>
                            <span className="text-gray-300 font-medium">Focus scientifique</span>
                        </div>
                        <div className="flex items-center gap-2 px-4 py-3 rounded-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 hover:border-[#00F5D4]/50 transition-all">
                            <span className="text-2xl">🎧</span>
                            <span className="text-gray-300 font-medium">Lecture audio</span>
                        </div>
                        <div className="flex items-center gap-2 px-4 py-3 rounded-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 hover:border-[#00F5D4]/50 transition-all">
                            <span className="text-2xl">∑</span>
                            <span className="text-gray-300 font-medium">SymPy complet</span>
                        </div>
                    </div>
                </div>

                {/* Contrôles audio globaux */}
                <div className="flex justify-center mb-8">
                    <button
                        onClick={() => setShowAudioControls(!showAudioControls)}
                        className={`flex items-center gap-2 px-6 py-3 rounded-xl font-bold transition-all ${showAudioControls
                                ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white'
                                : 'bg-white/10 text-gray-300 hover:bg-white/20'
                            }`}
                    >
                        <VolumeIcon />
                        <span>Paramètres Audio</span>
                    </button>
                </div>

                {/* Panel des paramètres audio */}
                {showAudioControls && (
                    <div className="max-w-xl mx-auto p-6 rounded-2xl bg-gradient-to-br from-[#0F1115] to-black border border-cyan-500/30 shadow-lg shadow-cyan-500/10 mb-8">
                        <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                            <span>🎙️</span> Configuration de la Lecture Audio
                        </h3>

                        {/* Vitesse de lecture */}
                        <div className="mb-4">
                            <label className="text-sm text-gray-400 mb-2 block">
                                Vitesse de lecture: <span className="text-cyan-400 font-bold">{speechRate}x</span>
                            </label>
                            <input
                                type="range"
                                min="0.5"
                                max="2"
                                step="0.1"
                                value={speechRate}
                                onChange={(e) => setSpeechRate(parseFloat(e.target.value))}
                                className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-cyan-500"
                            />
                            <div className="flex justify-between text-xs text-gray-500 mt-1">
                                <span>0.5x (Lent)</span>
                                <span>1x (Normal)</span>
                                <span>2x (Rapide)</span>
                            </div>
                        </div>

                        {/* Sélection de la voix */}
                        {availableVoices.length > 0 && (
                            <div>
                                <label className="text-sm text-gray-400 mb-2 block">Voix:</label>
                                <select
                                    value={speechVoice?.name || ''}
                                    onChange={(e) => {
                                        const voice = availableVoices.find(v => v.name === e.target.value);
                                        setSpeechVoice(voice);
                                    }}
                                    className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white text-sm focus:border-cyan-500 focus:outline-none"
                                >
                                    {availableVoices.slice(0, 10).map((voice) => (
                                        <option key={voice.name} value={voice.name}>
                                            {voice.name} ({voice.lang})
                                        </option>
                                    ))}
                                </select>
                            </div>
                        )}
                    </div>
                )}
            </section>

            {/* Curriculum */}
            <section className="max-w-7xl mx-auto space-y-6">
                {pythonCurriculum.map((chapter, chapterIdx) => (
                    <div
                        key={chapter.id}
                        id={chapter.id}
                        className={`rounded-2xl border border-white/10 bg-gradient-to-br from-[#0F1115] to-black p-6 transition-all duration-300 hover:border-white/20 ${chapter.isHighlight ? 'ring-2 ring-[#00F5D4]/50' : ''}`}
                        style={{ animationDelay: `${chapterIdx * 100}ms` }}
                    >
                        {/* En-tête du chapitre */}
                        <div
                            className="flex items-center gap-4 cursor-pointer group"
                            onClick={() => setSelectedChapter(selectedChapter === chapter.id ? null : chapter.id)}
                        >
                            {/* Icône avec animation */}
                            <div className="relative">
                                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                <div className="relative text-5xl transform group-hover:scale-110 transition-transform p-3 rounded-2xl bg-white/5">
                                    {chapter.icon}
                                </div>
                            </div>

                            {/* Infos */}
                            <div className="flex-1">
                                <div className="flex items-center gap-3 mb-2 flex-wrap">
                                    <h2 className="text-2xl md:text-3xl font-black text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-400 transition-all">
                                        {chapter.title}
                                    </h2>
                                    {chapter.isHighlight && (
                                        <span className="px-3 py-1 rounded-full bg-gradient-to-r from-[#00F5D4]/20 to-[#00F5D4]/10 text-[#00F5D4] text-xs font-bold border border-[#00F5D4]/30">
                                            ⭐ FOCUS MAJEUR
                                        </span>
                                    )}
                                </div>
                                <p className="text-gray-400 text-sm md:text-base mb-2">{chapter.description}</p>
                                {chapter.duration && (
                                    <div className="flex items-center gap-4 text-xs text-gray-500">
                                        <span className="flex items-center gap-1">⏱️ {chapter.duration}</span>
                                        <span className="flex items-center gap-1">📚 {chapter.lessons.length} leçons</span>
                                    </div>
                                )}
                            </div>

                            {/* Indicateur */}
                            <div className={`text-2xl text-gray-500 group-hover:text-cyan-400 transition-all transform ${selectedChapter === chapter.id ? 'rotate-90' : ''}`}>
                                ▶
                            </div>
                        </div>

                        {/* Leçons */}
                        {selectedChapter === chapter.id && (
                            <div className="mt-8 space-y-4">
                                {chapter.lessons.map((lesson, idx) => {
                                    const lessonId = `${chapter.id}-${idx}`;
                                    const isSelected = selectedLesson === lessonId;
                                    const isCurrentlyReading = currentReadingLesson === lessonId;

                                    return (
                                        <div
                                            key={idx}
                                            className={`rounded-xl border transition-all duration-300 overflow-hidden ${isSelected
                                                    ? 'border-cyan-500/50 bg-gradient-to-br from-cyan-500/5 to-transparent'
                                                    : 'border-white/10 hover:border-white/20 bg-white/5'
                                                } ${isCurrentlyReading ? 'ring-2 ring-cyan-500 ring-opacity-50' : ''}`}
                                        >
                                            {/* En-tête de leçon */}
                                            <div
                                                className="p-4 cursor-pointer"
                                                onClick={() => setSelectedLesson(isSelected ? null : lessonId)}
                                            >
                                                <div className="flex items-start justify-between gap-4">
                                                    <div className="flex-1">
                                                        <div className="flex items-center gap-3 mb-2 flex-wrap">
                                                            <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center text-sm font-bold text-cyan-400">
                                                                {idx + 1}
                                                            </span>
                                                            <h3 className="text-xl md:text-2xl font-bold text-white">
                                                                {lesson.title}
                                                            </h3>
                                                            {lesson.duration && (
                                                                <span className="text-xs text-gray-500 px-2 py-1 rounded bg-white/5">
                                                                    {lesson.duration}
                                                                </span>
                                                            )}
                                                            {isCurrentlyReading && (
                                                                <span className="px-2 py-1 rounded-full bg-cyan-500/20 text-cyan-400 text-xs font-bold animate-pulse flex items-center gap-1">
                                                                    🎧 En lecture...
                                                                </span>
                                                            )}
                                                        </div>
                                                        {lesson.analogy && (
                                                            <p className="text-gray-400 italic text-sm md:text-base pl-11">
                                                                💡 {lesson.analogy}
                                                            </p>
                                                        )}
                                                    </div>
                                                    <span className={`text-gray-500 text-xl flex-shrink-0 transition-transform ${isSelected ? 'rotate-180' : ''}`}>
                                                        ▼
                                                    </span>
                                                </div>
                                            </div>

                                            {/* Contenu de la leçon */}
                                            {isSelected && (
                                                <div className="px-4 pb-6 space-y-6">
                                                    {/* Boutons de lecture audio */}
                                                    <div className="flex items-center gap-3 p-4 rounded-xl bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/20">
                                                        <span className="text-2xl">🎧</span>
                                                        <div className="flex-1">
                                                            <div className="text-sm font-bold text-white">Écouter cette leçon</div>
                                                            <div className="text-xs text-gray-400">Une voix française lit le contenu pour vous</div>
                                                        </div>
                                                        <div className="flex items-center gap-2">
                                                            {isCurrentlyReading ? (
                                                                <>
                                                                    <button
                                                                        onClick={(e) => { e.stopPropagation(); togglePause(); }}
                                                                        className={`p-3 rounded-xl transition-all ${isPaused
                                                                                ? 'bg-yellow-500/20 text-yellow-400 hover:bg-yellow-500/30'
                                                                                : 'bg-blue-500/20 text-blue-400 hover:bg-blue-500/30'
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
                                                                </>
                                                            ) : (
                                                                <button
                                                                    onClick={(e) => { e.stopPropagation(); startSpeaking(lesson, lessonId); }}
                                                                    className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold hover:shadow-lg hover:shadow-cyan-500/25 transition-all"
                                                                >
                                                                    <PlayIcon />
                                                                    <span>Écouter</span>
                                                                </button>
                                                            )}
                                                        </div>
                                                    </div>

                                                    {/* Contenu principal avec RichText */}
                                                    <div className="text-gray-300 leading-relaxed text-base md:text-lg pl-4 border-l-2 border-cyan-500/30">
                                                        <RichText>{lesson.content}</RichText>
                                                    </div>

                                                    {/* Points clés */}
                                                    {lesson.keyPoints && (
                                                        <div className="bg-gradient-to-r from-emerald-500/10 to-transparent rounded-xl p-6 border border-emerald-500/20">
                                                            <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                                                                <span>📌</span>
                                                                <span>Points clés à retenir</span>
                                                            </h4>
                                                            <ul className="space-y-3">
                                                                {lesson.keyPoints.map((point, i) => (
                                                                    <li key={i} className="text-gray-300 flex items-start gap-3">
                                                                        <span className="text-emerald-400 mt-1 flex-shrink-0">✓</span>
                                                                        <div className="flex-1">
                                                                            <RichText className="text-gray-300">{point}</RichText>
                                                                        </div>
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                    )}

                                                    {/* Bloc de code magnifique */}
                                                    <div className="rounded-xl border border-cyan-500/30 overflow-hidden shadow-lg shadow-cyan-500/10">
                                                        {/* En-tête du code */}
                                                        <div className="flex items-center justify-between px-4 py-3 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border-b border-cyan-500/20">
                                                            <div className="flex items-center gap-3">
                                                                <div className="flex gap-1.5">
                                                                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                                                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                                                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                                                </div>
                                                                <span className="text-xs font-mono text-cyan-400">Python</span>
                                                                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                                                                <span className="text-xs text-gray-500">Prêt à exécuter</span>
                                                            </div>
                                                            <button
                                                                className={`text-xs px-4 py-2 rounded-lg font-bold transition-all ${copiedCode === lessonId
                                                                    ? 'bg-green-500/20 text-green-400'
                                                                    : 'bg-cyan-500/20 text-cyan-400 hover:bg-cyan-500/30'
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
                                                        <pre className="p-6 bg-[#0d1117] overflow-x-auto">
                                                            <code className="text-sm md:text-base text-gray-300 font-mono leading-relaxed">
                                                                {lesson.code}
                                                            </code>
                                                        </pre>
                                                    </div>

                                                    {/* Astuce */}
                                                    {lesson.tip && (
                                                        <div className="bg-gradient-to-r from-amber-500/10 to-transparent rounded-xl p-4 border border-amber-500/20">
                                                            <p className="text-gray-300 text-sm md:text-base flex items-start gap-2">
                                                                <span className="text-amber-400 text-lg">💡</span>
                                                                <span>{lesson.tip}</span>
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
                <div className="rounded-2xl border border-cyan-500/30 bg-gradient-to-br from-[#0F1115] to-black p-8 md:p-12 text-center shadow-lg shadow-cyan-500/10">
                    <div className="text-6xl mb-6">🚀</div>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Prêt à coder ?
                    </h2>
                    <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
                        Ouvrez l&apos;éditeur Python interactif et testez tout ce que vous venez d&apos;apprendre !
                    </p>
                    <Link
                        href="/code"
                        className="inline-block px-10 py-4 rounded-xl font-bold text-lg text-black transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25 bg-gradient-to-r from-cyan-400 to-blue-500"
                    >
                        Ouvrir l&apos;Éditeur Python →
                    </Link>
                </div>
            </section>

            {/* Floating Audio Player (quand une lecture est en cours) */}
            {isSpeaking && (
                <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50">
                    <div className="flex items-center gap-4 px-6 py-4 rounded-2xl bg-gradient-to-r from-[#0F1115] to-black border border-cyan-500/30 shadow-2xl shadow-cyan-500/20">
                        <div className="flex items-center gap-2">
                            <div className="w-3 h-3 rounded-full bg-cyan-500 animate-pulse"></div>
                            <span className="text-sm text-white font-medium">Lecture en cours...</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <button
                                onClick={togglePause}
                                className={`p-2 rounded-lg transition-all ${isPaused ? 'bg-yellow-500/20 text-yellow-400' : 'bg-blue-500/20 text-blue-400'}`}
                            >
                                {isPaused ? <PlayIcon /> : <PauseIcon />}
                            </button>
                            <button
                                onClick={stopSpeaking}
                                className="p-2 rounded-lg bg-red-500/20 text-red-400 hover:bg-red-500/30 transition-all"
                            >
                                <StopIcon />
                            </button>
                        </div>
                    </div>
                </div>
            )}
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
