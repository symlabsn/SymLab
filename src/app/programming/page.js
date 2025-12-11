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

function ProgrammingContent() {
    const [selectedChapter, setSelectedChapter] = useState(null);
    const [selectedLesson, setSelectedLesson] = useState(null);
    const [copiedCode, setCopiedCode] = useState(null);
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
            // Filtrer français de France uniquement (exclure fr-CA)
            const french = voices.filter(v =>
                (v.lang === 'fr-FR' || v.lang === 'fr_FR') && !v.lang.includes('CA')
            );
            setFrenchVoices(french);

            // Sélectionner Google français par défaut (dernier de la liste)
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
            // Supprimer tous les emojis
            .replace(/[\u{1F600}-\u{1F64F}]/gu, '')
            .replace(/[\u{1F300}-\u{1F5FF}]/gu, '')
            .replace(/[\u{1F680}-\u{1F6FF}]/gu, '')
            .replace(/[\u{1F900}-\u{1F9FF}]/gu, '')
            .replace(/[\u{1FA00}-\u{1FAFF}]/gu, '')
            .replace(/[\u{2600}-\u{26FF}]/gu, '')
            .replace(/[\u{2700}-\u{27BF}]/gu, '')
            .replace(/[\u{1F1E0}-\u{1F1FF}]/gu, '')
            // Supprimer les blocs de code mais indiquer leur présence
            .replace(/```python[\s\S]*?```/g, '. Voici un exemple de code Python. ')
            .replace(/```[\s\S]*?```/g, '. Voici un exemple de code. ')
            // Transformer le code inline en lecture naturelle
            .replace(/`([^`]+)`/g, '$1')
            // Supprimer le formatage Markdown
            .replace(/\*\*([^*]+)\*\*/g, '$1')
            .replace(/\*([^*]+)\*/g, '$1')
            .replace(/#{1,6}\s*/g, '')
            .replace(/\$/g, '')  // Supprimer $
            // Nombres - Lire correctement en français
            .replace(/(\d+),(\d+)/g, '$1 virgule $2')
            .replace(/(\d+)\.(\d+)/g, '$1 virgule $2')
            .replace(/%/g, ' pourcent ')
            // Améliorer la ponctuation pour une lecture naturelle
            .replace(/\n\n+/g, '. ')
            .replace(/\n/g, ', ')
            .replace(/:\s*-/g, ': ')
            .replace(/-\s+/g, '')
            // Supprimer caractères spéciaux
            .replace(/[<>]/g, '')
            .replace(/&nbsp;/g, ' ')
            .replace(/&amp;/g, ' et ')
            .replace(/→/g, ' vers ')
            .replace(/←/g, ' depuis ')
            .replace(/•/g, '')
            .replace(/✓/g, '')
            .replace(/✗/g, '')
            .replace(/[★☆]/g, '')
            // Nettoyer les espaces multiples
            .replace(/\s+/g, ' ')
            .replace(/\.\s*\./g, '.')
            .replace(/,\s*,/g, ',')
            .replace(/\.\s*,/g, '.')
            .trim();
    };

    // Démarrer la lecture
    const startSpeaking = (lesson, lessonId) => {
        if (!window.speechSynthesis) {
            alert('La synthèse vocale n\'est pas supportée par votre navigateur.');
            return;
        }

        // Arrêter toute lecture en cours
        window.speechSynthesis.cancel();

        const text = cleanTextForSpeech(lesson.content);
        if (!text) return;

        speechRef.current = new SpeechSynthesisUtterance(text);
        speechRef.current.lang = 'fr-FR';

        // Vitesse naturelle (0.9 = légèrement plus lent que normal pour une meilleure compréhension)
        speechRef.current.rate = 0.9;
        // Pitch normal
        speechRef.current.pitch = 1;
        // Volume normal
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

    // Pause/Resume
    const togglePause = () => {
        if (window.speechSynthesis.paused) {
            window.speechSynthesis.resume();
            setIsPaused(false);
        } else {
            window.speechSynthesis.pause();
            setIsPaused(true);
        }
    };

    // Stop
    const stopSpeaking = () => {
        window.speechSynthesis.cancel();
        setIsSpeaking(false);
        setIsPaused(false);
        setCurrentReadingLesson(null);
    };

    return (
        <main className="min-h-screen py-20 px-4 bg-black">
            {/* Header */}
            <section className="max-w-6xl mx-auto mb-16">
                <div className="text-center mb-12">
                    <div className="inline-block px-6 py-3 rounded-full bg-gradient-to-r from-[#00F5D4]/20 to-[#7C3AED]/20 border border-[#00F5D4]/30 mb-8">
                        <span className="text-[#00F5D4] text-sm font-bold tracking-widest">PYTHON POUR LES SCIENCES</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-black mb-6">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00F5D4] via-white to-[#7C3AED]">
                            Maîtrisez Python
                        </span>
                    </h1>

                    <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
                        Un cours complet avec <span className="text-[#00F5D4] font-bold">lecture audio en français</span>,
                        des <span className="text-[#7C3AED] font-bold">analogies</span> et
                        un <span className="text-[#FF9F1C] font-bold">focus sur SymPy</span>
                    </p>

                    {/* Sélecteur de voix simple */}
                    <div className="flex justify-center">
                        <button
                            onClick={() => setShowVoiceSelector(!showVoiceSelector)}
                            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 text-gray-300 hover:bg-white/20 transition-all text-sm"
                        >
                            <span>🎙️</span>
                            <span>Voix: {selectedVoice?.name?.split(' ')[0] || 'Française'}</span>
                            <span className="text-xs">▼</span>
                        </button>
                    </div>

                    {/* Liste des voix françaises */}
                    {showVoiceSelector && frenchVoices.length > 0 && (
                        <div className="mt-4 max-w-md mx-auto p-4 rounded-xl bg-[#0F1115] border border-white/10">
                            <p className="text-sm text-gray-400 mb-3">Voix françaises disponibles:</p>
                            <div className="space-y-2 max-h-48 overflow-y-auto">
                                {frenchVoices.map((voice, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => { setSelectedVoice(voice); setShowVoiceSelector(false); }}
                                        className={`w-full text-left px-3 py-2 rounded-lg transition-all text-sm ${selectedVoice?.name === voice.name
                                            ? 'bg-[#00F5D4]/20 text-[#00F5D4] border border-[#00F5D4]/30'
                                            : 'bg-white/5 text-gray-300 hover:bg-white/10'
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
            </section>

            {/* Curriculum */}
            <section className="max-w-7xl mx-auto space-y-6">
                {pythonCurriculum.map((chapter, chapterIdx) => (
                    <div
                        key={chapter.id}
                        id={chapter.id}
                        className={`rounded-2xl border border-white/10 bg-gradient-to-br from-[#0F1115] to-black p-6 transition-all duration-300 hover:border-white/20 ${chapter.isHighlight ? 'ring-2 ring-[#00F5D4]/50' : ''}`}
                    >
                        {/* Header chapitre */}
                        <div
                            className="flex items-center gap-4 cursor-pointer group"
                            onClick={() => setSelectedChapter(selectedChapter === chapter.id ? null : chapter.id)}
                        >
                            <div className="text-5xl transform group-hover:scale-110 transition-transform p-3 rounded-2xl bg-white/5">
                                {chapter.icon}
                            </div>
                            <div className="flex-1">
                                <div className="flex items-center gap-3 mb-2 flex-wrap">
                                    <h2 className="text-2xl md:text-3xl font-black text-white group-hover:text-[#00F5D4] transition-colors">
                                        {chapter.title}
                                    </h2>
                                    {chapter.isHighlight && (
                                        <span className="px-3 py-1 rounded-full bg-[#00F5D4]/20 text-[#00F5D4] text-xs font-bold">
                                            FOCUS MAJEUR
                                        </span>
                                    )}
                                </div>
                                <p className="text-gray-400 text-sm md:text-base">{chapter.description}</p>
                            </div>
                            <div className={`text-2xl text-gray-500 group-hover:text-[#00F5D4] transition-all transform ${selectedChapter === chapter.id ? 'rotate-90' : ''}`}>
                                ▶
                            </div>
                        </div>

                        {/* Leçons */}
                        {selectedChapter === chapter.id && (
                            <div className="mt-8 space-y-4">
                                {chapter.lessons.map((lesson, idx) => {
                                    const lessonId = `${chapter.id}-${idx}`;
                                    const isSelected = selectedLesson === lessonId;
                                    const isReading = currentReadingLesson === lessonId;

                                    return (
                                        <div
                                            key={idx}
                                            className={`rounded-xl border transition-all overflow-hidden ${isSelected ? 'border-[#00F5D4]/50 bg-[#00F5D4]/5' : 'border-white/10 hover:border-white/20 bg-white/5'
                                                } ${isReading ? 'ring-2 ring-[#00F5D4]' : ''}`}
                                        >
                                            {/* Header leçon */}
                                            <div className="p-4 cursor-pointer" onClick={() => setSelectedLesson(isSelected ? null : lessonId)}>
                                                <div className="flex items-start justify-between gap-4">
                                                    <div className="flex-1">
                                                        <div className="flex items-center gap-3 mb-2 flex-wrap">
                                                            <span className="w-8 h-8 rounded-lg bg-[#00F5D4]/20 flex items-center justify-center text-sm font-bold text-[#00F5D4]">
                                                                {idx + 1}
                                                            </span>
                                                            <h3 className="text-xl font-bold text-white">{lesson.title}</h3>
                                                            {isReading && (
                                                                <span className="px-2 py-1 rounded-full bg-[#00F5D4]/20 text-[#00F5D4] text-xs font-bold animate-pulse">
                                                                    Lecture en cours...
                                                                </span>
                                                            )}
                                                        </div>
                                                        {lesson.analogy && (
                                                            <p className="text-gray-400 italic text-sm pl-11">{lesson.analogy}</p>
                                                        )}
                                                    </div>
                                                    <span className={`text-gray-500 text-xl transition-transform ${isSelected ? 'rotate-180' : ''}`}>▼</span>
                                                </div>
                                            </div>

                                            {/* Contenu leçon */}
                                            {isSelected && (
                                                <div className="px-4 pb-6 space-y-6">
                                                    {/* Bouton lecture audio */}
                                                    <div className="flex items-center gap-3 p-3 rounded-lg bg-[#00F5D4]/10 border border-[#00F5D4]/20">
                                                        <span className="text-2xl">🎧</span>
                                                        <div className="flex-1">
                                                            <div className="text-sm font-medium text-white">Écouter cette leçon</div>
                                                            <div className="text-xs text-gray-400">Voix française naturelle</div>
                                                        </div>
                                                        {isReading ? (
                                                            <div className="flex items-center gap-2">
                                                                <button
                                                                    onClick={(e) => { e.stopPropagation(); togglePause(); }}
                                                                    className={`p-2 rounded-lg transition-all ${isPaused ? 'bg-yellow-500/20 text-yellow-400' : 'bg-blue-500/20 text-blue-400'}`}
                                                                >
                                                                    {isPaused ? <PlayIcon /> : <PauseIcon />}
                                                                </button>
                                                                <button
                                                                    onClick={(e) => { e.stopPropagation(); stopSpeaking(); }}
                                                                    className="p-2 rounded-lg bg-red-500/20 text-red-400"
                                                                >
                                                                    <StopIcon />
                                                                </button>
                                                            </div>
                                                        ) : (
                                                            <button
                                                                onClick={(e) => { e.stopPropagation(); startSpeaking(lesson, lessonId); }}
                                                                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#00F5D4] text-black font-bold hover:bg-[#00F5D4]/90 transition-all"
                                                            >
                                                                <PlayIcon />
                                                                <span>Écouter</span>
                                                            </button>
                                                        )}
                                                    </div>

                                                    {/* Contenu texte */}
                                                    <div className="text-gray-300 leading-relaxed text-base md:text-lg pl-4 border-l-2 border-[#00F5D4]/30">
                                                        <RichText>{lesson.content}</RichText>
                                                    </div>

                                                    {/* Points clés */}
                                                    {lesson.keyPoints && (
                                                        <div className="bg-emerald-500/10 rounded-xl p-6 border border-emerald-500/20">
                                                            <h4 className="text-lg font-bold text-white mb-4">Points clés à retenir</h4>
                                                            <ul className="space-y-2">
                                                                {lesson.keyPoints.map((point, i) => (
                                                                    <li key={i} className="text-gray-300 flex items-start gap-3">
                                                                        <span className="text-emerald-400 mt-1">✓</span>
                                                                        <RichText>{point}</RichText>
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                    )}

                                                    {/* Code */}
                                                    <div className="rounded-xl border border-[#00F5D4]/30 overflow-hidden">
                                                        <div className="flex items-center justify-between px-4 py-2 bg-[#00F5D4]/10 border-b border-[#00F5D4]/20">
                                                            <div className="flex items-center gap-3">
                                                                <div className="flex gap-1.5">
                                                                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                                                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                                                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                                                </div>
                                                                <span className="text-xs font-mono text-[#00F5D4]">Python</span>
                                                            </div>
                                                            <button
                                                                className={`text-xs px-3 py-1 rounded font-bold transition-all ${copiedCode === lessonId ? 'bg-green-500/20 text-green-400' : 'bg-[#00F5D4]/20 text-[#00F5D4] hover:bg-[#00F5D4]/30'
                                                                    }`}
                                                                onClick={(e) => { e.stopPropagation(); handleCopyCode(lesson.code, lessonId); }}
                                                            >
                                                                {copiedCode === lessonId ? '✓ Copié' : 'Copier'}
                                                            </button>
                                                        </div>
                                                        <pre className="p-4 bg-[#0d1117] overflow-x-auto">
                                                            <code className="text-sm text-gray-300 font-mono">{lesson.code}</code>
                                                        </pre>
                                                    </div>

                                                    {lesson.tip && (
                                                        <div className="bg-amber-500/10 rounded-lg p-4 border border-amber-500/20">
                                                            <p className="text-gray-300 text-sm">
                                                                <span className="text-amber-400 font-bold">Astuce:</span> {lesson.tip}
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

            {/* CTA */}
            <section className="max-w-4xl mx-auto mt-20">
                <div className="rounded-2xl border border-[#00F5D4]/30 bg-gradient-to-br from-[#0F1115] to-black p-8 md:p-12 text-center">
                    <div className="text-5xl mb-4">🚀</div>
                    <h2 className="text-3xl font-bold text-white mb-4">Prêt à coder ?</h2>
                    <p className="text-gray-300 mb-8">Ouvrez l&apos;éditeur Python interactif</p>
                    <Link
                        href="/code"
                        className="inline-block px-8 py-3 rounded-xl font-bold text-black bg-[#00F5D4] hover:bg-[#00F5D4]/90 transition-all"
                    >
                        Ouvrir l&apos;Éditeur Python
                    </Link>
                </div>
            </section>

            {/* Floating Player */}
            {isSpeaking && (
                <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
                    <div className="flex items-center gap-4 px-5 py-3 rounded-full bg-[#0F1115] border border-[#00F5D4]/30 shadow-lg">
                        <div className="w-2 h-2 rounded-full bg-[#00F5D4] animate-pulse"></div>
                        <span className="text-sm text-gray-300">Lecture en cours</span>
                        <button onClick={togglePause} className={`p-2 rounded-full ${isPaused ? 'bg-yellow-500/20 text-yellow-400' : 'bg-blue-500/20 text-blue-400'}`}>
                            {isPaused ? <PlayIcon /> : <PauseIcon />}
                        </button>
                        <button onClick={stopSpeaking} className="p-2 rounded-full bg-red-500/20 text-red-400">
                            <StopIcon />
                        </button>
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
