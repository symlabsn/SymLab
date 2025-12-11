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

// Voix ElevenLabs recommandées (voix françaises et naturelles)
const ELEVENLABS_VOICES = [
    { id: 'XB0fDUnXU5powFXDhCwa', name: 'Charlotte', lang: 'Français - Femme naturelle', flag: '🇫🇷' },
    { id: 'pqHfZKP75CvOlQylNhV4', name: 'Bill', lang: 'Anglais - Homme narrateur', flag: '🇺🇸' },
    { id: '21m00Tcm4TlvDq8ikWAM', name: 'Rachel', lang: 'Anglais - Femme claire', flag: '🇺🇸' },
    { id: 'EXAVITQu4vr4xnSDxMaL', name: 'Bella', lang: 'Anglais - Femme expressive', flag: '🇺🇸' },
];

function ProgrammingContent() {
    const [selectedChapter, setSelectedChapter] = useState(null);
    const [selectedLesson, setSelectedLesson] = useState(null);
    const [copiedCode, setCopiedCode] = useState(null);
    const searchParams = useSearchParams();

    // Audio State
    const [isSpeaking, setIsSpeaking] = useState(false);
    const [isPaused, setIsPaused] = useState(false);
    const [currentReadingLesson, setCurrentReadingLesson] = useState(null);
    const [showAudioControls, setShowAudioControls] = useState(false);
    const [isLoadingAudio, setIsLoadingAudio] = useState(false);
    const audioRef = useRef(null);

    // TTS Mode: 'elevenlabs' ou 'browser'
    const [ttsMode, setTtsMode] = useState('browser');
    const [elevenLabsApiKey, setElevenLabsApiKey] = useState('');
    const [selectedElevenLabsVoice, setSelectedElevenLabsVoice] = useState(ELEVENLABS_VOICES[0]);

    // Browser TTS
    const [speechRate, setSpeechRate] = useState(1);
    const [speechVoice, setSpeechVoice] = useState(null);
    const [availableVoices, setAvailableVoices] = useState([]);
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

    // Charger clé API ElevenLabs depuis localStorage
    useEffect(() => {
        const savedKey = localStorage.getItem('elevenlabs_api_key');
        if (savedKey) {
            setElevenLabsApiKey(savedKey);
            setTtsMode('elevenlabs');
        }
    }, []);

    // Sauvegarder clé API
    const saveApiKey = (key) => {
        setElevenLabsApiKey(key);
        if (key) {
            localStorage.setItem('elevenlabs_api_key', key);
            setTtsMode('elevenlabs');
        } else {
            localStorage.removeItem('elevenlabs_api_key');
            setTtsMode('browser');
        }
    };

    // Charger voix navigateur (premium en priorité)
    useEffect(() => {
        const loadVoices = () => {
            const voices = window.speechSynthesis?.getVoices() || [];
            const premiumVoices = voices.filter(v =>
                v.name.includes('Google') || v.name.includes('Microsoft') ||
                v.name.includes('Natural') || v.name.includes('Neural')
            );
            const frenchVoices = voices.filter(v => v.lang.startsWith('fr'));
            const allVoices = [...new Set([...premiumVoices, ...frenchVoices, ...voices])];
            setAvailableVoices(allVoices);
            const bestFrench = allVoices.find(v =>
                v.lang.startsWith('fr') && (v.name.includes('Google') || v.name.includes('Microsoft'))
            ) || frenchVoices[0];
            if (bestFrench && !speechVoice) setSpeechVoice(bestFrench);
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

    // Nettoyer texte pour TTS
    const cleanTextForSpeech = (text) => {
        if (!text) return '';
        return text
            .replace(/```[\s\S]*?```/g, '. Voici un exemple de code. ')
            .replace(/`([^`]+)`/g, '$1')
            .replace(/\*\*([^*]+)\*\*/g, '$1')
            .replace(/\*([^*]+)\*/g, '$1')
            .replace(/#+ /g, '')
            .replace(/\n+/g, '. ')
            .replace(/[<>]/g, '')
            .replace(/&nbsp;/g, ' ')
            .replace(/&amp;/g, 'et')
            .replace(/\s+/g, ' ')
            .trim()
            .substring(0, 2500);
    };

    // ElevenLabs TTS
    const speakWithElevenLabs = async (text, lessonId) => {
        if (!elevenLabsApiKey) {
            alert('Veuillez configurer votre clé API ElevenLabs dans les paramètres audio.');
            return;
        }

        setIsLoadingAudio(true);
        setCurrentReadingLesson(lessonId);

        try {
            const response = await fetch(
                `https://api.elevenlabs.io/v1/text-to-speech/${selectedElevenLabsVoice.id}`,
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'xi-api-key': elevenLabsApiKey,
                    },
                    body: JSON.stringify({
                        text: text,
                        model_id: 'eleven_multilingual_v2',
                        voice_settings: {
                            stability: 0.5,
                            similarity_boost: 0.75,
                            style: 0.5,
                            use_speaker_boost: true
                        }
                    }),
                }
            );

            if (!response.ok) {
                throw new Error('Erreur API ElevenLabs');
            }

            const audioBlob = await response.blob();
            const audioUrl = URL.createObjectURL(audioBlob);

            if (audioRef.current) {
                audioRef.current.pause();
            }

            const audio = new Audio(audioUrl);
            audioRef.current = audio;

            audio.onplay = () => {
                setIsSpeaking(true);
                setIsLoadingAudio(false);
            };
            audio.onended = () => {
                setIsSpeaking(false);
                setCurrentReadingLesson(null);
                URL.revokeObjectURL(audioUrl);
            };
            audio.onerror = () => {
                setIsSpeaking(false);
                setIsLoadingAudio(false);
                setCurrentReadingLesson(null);
            };

            audio.play();
        } catch (error) {
            console.error('ElevenLabs error:', error);
            setIsLoadingAudio(false);
            setCurrentReadingLesson(null);
            alert('Erreur avec ElevenLabs. Vérifiez votre clé API ou utilisez le mode navigateur.');
        }
    };

    // Browser TTS
    const speakWithBrowser = (text, lessonId) => {
        if (!window.speechSynthesis) {
            alert('Votre navigateur ne supporte pas la synthèse vocale.');
            return;
        }
        window.speechSynthesis.cancel();

        speechRef.current = new SpeechSynthesisUtterance(text);
        speechRef.current.lang = 'fr-FR';
        speechRef.current.rate = speechRate;
        speechRef.current.pitch = 1;
        if (speechVoice) speechRef.current.voice = speechVoice;

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
            setCurrentReadingLesson(null);
        };

        window.speechSynthesis.speak(speechRef.current);
    };

    // Démarrer lecture
    const startSpeaking = (lesson, lessonId) => {
        const text = cleanTextForSpeech(lesson.content);
        if (!text) return;

        if (ttsMode === 'elevenlabs' && elevenLabsApiKey) {
            speakWithElevenLabs(text, lessonId);
        } else {
            speakWithBrowser(text, lessonId);
        }
    };

    // Pause/Resume
    const togglePause = () => {
        if (ttsMode === 'elevenlabs' && audioRef.current) {
            if (audioRef.current.paused) {
                audioRef.current.play();
                setIsPaused(false);
            } else {
                audioRef.current.pause();
                setIsPaused(true);
            }
        } else {
            if (window.speechSynthesis.paused) {
                window.speechSynthesis.resume();
                setIsPaused(false);
            } else {
                window.speechSynthesis.pause();
                setIsPaused(true);
            }
        }
    };

    // Stop
    const stopSpeaking = () => {
        if (ttsMode === 'elevenlabs' && audioRef.current) {
            audioRef.current.pause();
            audioRef.current.currentTime = 0;
        } else {
            window.speechSynthesis.cancel();
        }
        setIsSpeaking(false);
        setIsPaused(false);
        setCurrentReadingLesson(null);
    };

    return (
        <main className="min-h-screen py-20 px-4 bg-black">
            {/* Header */}
            <section className="max-w-6xl mx-auto mb-20">
                <div className="text-center mb-12">
                    <div className="inline-block px-6 py-3 rounded-full bg-gradient-to-r from-[#00F5D4]/20 to-[#7C3AED]/20 border border-[#00F5D4]/30 mb-8 backdrop-blur-sm">
                        <span className="text-[#00F5D4] text-sm font-bold tracking-widest animate-pulse">🎧 VOIX IA RÉALISTE DISPONIBLE</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-black mb-6">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00F5D4] via-white to-[#7C3AED]">
                            Maîtrisez Python
                        </span>
                    </h1>

                    <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
                        Un cours complet avec <span className="text-pink-400 font-bold">narration audio IA</span>,
                        des <span className="text-[#7C3AED] font-bold">analogies</span> et
                        un <span className="text-[#FF9F1C] font-bold">focus majeur sur SymPy</span>
                    </p>

                    <div className="flex flex-wrap justify-center gap-4 text-sm">
                        <div className="flex items-center gap-2 px-4 py-3 rounded-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10">
                            <span className="text-2xl">🎧</span>
                            <span className="text-gray-300 font-medium">Voix IA ElevenLabs</span>
                        </div>
                        <div className="flex items-center gap-2 px-4 py-3 rounded-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10">
                            <span className="text-2xl">🔬</span>
                            <span className="text-gray-300 font-medium">Focus scientifique</span>
                        </div>
                        <div className="flex items-center gap-2 px-4 py-3 rounded-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10">
                            <span className="text-2xl">∑</span>
                            <span className="text-gray-300 font-medium">SymPy complet</span>
                        </div>
                    </div>
                </div>

                {/* Bouton paramètres audio */}
                <div className="flex justify-center mb-8">
                    <button
                        onClick={() => setShowAudioControls(!showAudioControls)}
                        className={`flex items-center gap-2 px-6 py-3 rounded-xl font-bold transition-all ${showAudioControls ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white' : 'bg-white/10 text-gray-300 hover:bg-white/20'
                            }`}
                    >
                        <VolumeIcon />
                        <span>⚙️ Configuration Audio</span>
                    </button>
                </div>

                {/* Panel paramètres audio */}
                {showAudioControls && (
                    <div className="max-w-2xl mx-auto p-6 rounded-2xl bg-gradient-to-br from-[#0F1115] to-black border border-cyan-500/30 shadow-lg shadow-cyan-500/10 mb-8">
                        <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                            <span>🎙️</span> Configuration de la Voix
                        </h3>

                        {/* Choix du mode */}
                        <div className="mb-6">
                            <label className="text-sm text-gray-400 mb-3 block">Mode de synthèse vocale:</label>
                            <div className="grid grid-cols-2 gap-3">
                                <button
                                    onClick={() => setTtsMode('browser')}
                                    className={`p-4 rounded-xl border transition-all ${ttsMode === 'browser'
                                            ? 'border-cyan-500 bg-cyan-500/10 text-white'
                                            : 'border-white/10 bg-white/5 text-gray-400 hover:bg-white/10'
                                        }`}
                                >
                                    <div className="text-2xl mb-2">🌐</div>
                                    <div className="font-bold">Navigateur</div>
                                    <div className="text-xs text-gray-500">Gratuit, instantané</div>
                                </button>
                                <button
                                    onClick={() => setTtsMode('elevenlabs')}
                                    className={`p-4 rounded-xl border transition-all ${ttsMode === 'elevenlabs'
                                            ? 'border-purple-500 bg-purple-500/10 text-white'
                                            : 'border-white/10 bg-white/5 text-gray-400 hover:bg-white/10'
                                        }`}
                                >
                                    <div className="text-2xl mb-2">✨</div>
                                    <div className="font-bold">ElevenLabs IA</div>
                                    <div className="text-xs text-gray-500">Voix ultra-réaliste</div>
                                </button>
                            </div>
                        </div>

                        {/* Config ElevenLabs */}
                        {ttsMode === 'elevenlabs' && (
                            <div className="space-y-4 p-4 rounded-xl bg-purple-500/5 border border-purple-500/20">
                                <div>
                                    <label className="text-sm text-gray-400 mb-2 block">
                                        Clé API ElevenLabs <a href="https://elevenlabs.io" target="_blank" className="text-purple-400 hover:underline">(Obtenir gratuitement)</a>
                                    </label>
                                    <input
                                        type="password"
                                        value={elevenLabsApiKey}
                                        onChange={(e) => saveApiKey(e.target.value)}
                                        placeholder="sk_..."
                                        className="w-full px-4 py-3 rounded-lg bg-black/50 border border-white/20 text-white placeholder-gray-500 focus:border-purple-500 focus:outline-none"
                                    />
                                    <p className="text-xs text-gray-500 mt-2">10,000 caractères/mois gratuits. Votre clé est stockée localement.</p>
                                </div>
                                <div>
                                    <label className="text-sm text-gray-400 mb-2 block">Voix IA:</label>
                                    <div className="grid grid-cols-2 gap-2">
                                        {ELEVENLABS_VOICES.map(voice => (
                                            <button
                                                key={voice.id}
                                                onClick={() => setSelectedElevenLabsVoice(voice)}
                                                className={`p-3 rounded-lg text-left transition-all ${selectedElevenLabsVoice.id === voice.id
                                                        ? 'bg-purple-500/20 border-purple-500'
                                                        : 'bg-white/5 border-white/10 hover:bg-white/10'
                                                    } border`}
                                            >
                                                <div className="flex items-center gap-2">
                                                    <span>{voice.flag}</span>
                                                    <span className="font-bold text-white">{voice.name}</span>
                                                </div>
                                                <div className="text-xs text-gray-500">{voice.lang}</div>
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Config Browser */}
                        {ttsMode === 'browser' && (
                            <div className="space-y-4">
                                <div>
                                    <label className="text-sm text-gray-400 mb-2 block">
                                        Vitesse: <span className="text-cyan-400 font-bold">{speechRate}x</span>
                                    </label>
                                    <input
                                        type="range" min="0.5" max="2" step="0.1" value={speechRate}
                                        onChange={(e) => setSpeechRate(parseFloat(e.target.value))}
                                        className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-cyan-500"
                                    />
                                </div>
                                {availableVoices.length > 0 && (
                                    <div>
                                        <label className="text-sm text-gray-400 mb-2 block">Voix:</label>
                                        <select
                                            value={speechVoice?.name || ''}
                                            onChange={(e) => setSpeechVoice(availableVoices.find(v => v.name === e.target.value))}
                                            className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white text-sm focus:border-cyan-500"
                                        >
                                            {availableVoices.slice(0, 15).map(voice => (
                                                <option key={voice.name} value={voice.name}>
                                                    {voice.name} ({voice.lang})
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                )}
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
                    >
                        <div
                            className="flex items-center gap-4 cursor-pointer group"
                            onClick={() => setSelectedChapter(selectedChapter === chapter.id ? null : chapter.id)}
                        >
                            <div className="relative">
                                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                <div className="relative text-5xl transform group-hover:scale-110 transition-transform p-3 rounded-2xl bg-white/5">
                                    {chapter.icon}
                                </div>
                            </div>
                            <div className="flex-1">
                                <div className="flex items-center gap-3 mb-2 flex-wrap">
                                    <h2 className="text-2xl md:text-3xl font-black text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-400">
                                        {chapter.title}
                                    </h2>
                                    {chapter.isHighlight && (
                                        <span className="px-3 py-1 rounded-full bg-gradient-to-r from-[#00F5D4]/20 to-[#00F5D4]/10 text-[#00F5D4] text-xs font-bold border border-[#00F5D4]/30">
                                            ⭐ FOCUS MAJEUR
                                        </span>
                                    )}
                                </div>
                                <p className="text-gray-400 text-sm md:text-base">{chapter.description}</p>
                            </div>
                            <div className={`text-2xl text-gray-500 group-hover:text-cyan-400 transition-all transform ${selectedChapter === chapter.id ? 'rotate-90' : ''}`}>▶</div>
                        </div>

                        {selectedChapter === chapter.id && (
                            <div className="mt-8 space-y-4">
                                {chapter.lessons.map((lesson, idx) => {
                                    const lessonId = `${chapter.id}-${idx}`;
                                    const isSelected = selectedLesson === lessonId;
                                    const isCurrentlyReading = currentReadingLesson === lessonId;

                                    return (
                                        <div
                                            key={idx}
                                            className={`rounded-xl border transition-all overflow-hidden ${isSelected ? 'border-cyan-500/50 bg-gradient-to-br from-cyan-500/5 to-transparent' : 'border-white/10 hover:border-white/20 bg-white/5'
                                                } ${isCurrentlyReading ? 'ring-2 ring-purple-500' : ''}`}
                                        >
                                            <div className="p-4 cursor-pointer" onClick={() => setSelectedLesson(isSelected ? null : lessonId)}>
                                                <div className="flex items-start justify-between gap-4">
                                                    <div className="flex-1">
                                                        <div className="flex items-center gap-3 mb-2 flex-wrap">
                                                            <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center text-sm font-bold text-cyan-400">
                                                                {idx + 1}
                                                            </span>
                                                            <h3 className="text-xl md:text-2xl font-bold text-white">{lesson.title}</h3>
                                                            {isCurrentlyReading && (
                                                                <span className="px-2 py-1 rounded-full bg-purple-500/20 text-purple-400 text-xs font-bold animate-pulse flex items-center gap-1">
                                                                    {isLoadingAudio ? '⏳ Chargement...' : '🎧 En lecture...'}
                                                                </span>
                                                            )}
                                                        </div>
                                                        {lesson.analogy && (
                                                            <p className="text-gray-400 italic text-sm pl-11">💡 {lesson.analogy}</p>
                                                        )}
                                                    </div>
                                                    <span className={`text-gray-500 text-xl transition-transform ${isSelected ? 'rotate-180' : ''}`}>▼</span>
                                                </div>
                                            </div>

                                            {isSelected && (
                                                <div className="px-4 pb-6 space-y-6">
                                                    {/* Bouton Écouter */}
                                                    <div className="flex items-center gap-3 p-4 rounded-xl bg-gradient-to-r from-purple-500/10 to-cyan-500/10 border border-purple-500/20">
                                                        <span className="text-3xl">{ttsMode === 'elevenlabs' ? '✨' : '🎧'}</span>
                                                        <div className="flex-1">
                                                            <div className="text-sm font-bold text-white">
                                                                {ttsMode === 'elevenlabs' ? 'Écouter avec voix IA' : 'Écouter cette leçon'}
                                                            </div>
                                                            <div className="text-xs text-gray-400">
                                                                {ttsMode === 'elevenlabs' ? `Voix: ${selectedElevenLabsVoice.name}` : 'Synthèse vocale navigateur'}
                                                            </div>
                                                        </div>
                                                        <div className="flex items-center gap-2">
                                                            {isCurrentlyReading ? (
                                                                <>
                                                                    <button
                                                                        onClick={(e) => { e.stopPropagation(); togglePause(); }}
                                                                        className={`p-3 rounded-xl transition-all ${isPaused ? 'bg-yellow-500/20 text-yellow-400' : 'bg-blue-500/20 text-blue-400'}`}
                                                                    >
                                                                        {isPaused ? <PlayIcon /> : <PauseIcon />}
                                                                    </button>
                                                                    <button
                                                                        onClick={(e) => { e.stopPropagation(); stopSpeaking(); }}
                                                                        className="p-3 rounded-xl bg-red-500/20 text-red-400 hover:bg-red-500/30"
                                                                    >
                                                                        <StopIcon />
                                                                    </button>
                                                                </>
                                                            ) : (
                                                                <button
                                                                    onClick={(e) => { e.stopPropagation(); startSpeaking(lesson, lessonId); }}
                                                                    disabled={isLoadingAudio}
                                                                    className="flex items-center gap-2 px-5 py-2 rounded-xl bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-bold hover:shadow-lg hover:shadow-purple-500/25 transition-all disabled:opacity-50"
                                                                >
                                                                    <PlayIcon />
                                                                    <span>{isLoadingAudio ? 'Chargement...' : 'Écouter'}</span>
                                                                </button>
                                                            )}
                                                        </div>
                                                    </div>

                                                    {/* Contenu */}
                                                    <div className="text-gray-300 leading-relaxed text-base md:text-lg pl-4 border-l-2 border-cyan-500/30">
                                                        <RichText>{lesson.content}</RichText>
                                                    </div>

                                                    {lesson.keyPoints && (
                                                        <div className="bg-gradient-to-r from-emerald-500/10 to-transparent rounded-xl p-6 border border-emerald-500/20">
                                                            <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                                                                <span>📌</span> Points clés
                                                            </h4>
                                                            <ul className="space-y-3">
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
                                                    <div className="rounded-xl border border-cyan-500/30 overflow-hidden shadow-lg shadow-cyan-500/10">
                                                        <div className="flex items-center justify-between px-4 py-3 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border-b border-cyan-500/20">
                                                            <div className="flex items-center gap-3">
                                                                <div className="flex gap-1.5">
                                                                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                                                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                                                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                                                </div>
                                                                <span className="text-xs font-mono text-cyan-400">Python</span>
                                                            </div>
                                                            <button
                                                                className={`text-xs px-4 py-2 rounded-lg font-bold transition-all ${copiedCode === lessonId ? 'bg-green-500/20 text-green-400' : 'bg-cyan-500/20 text-cyan-400 hover:bg-cyan-500/30'
                                                                    }`}
                                                                onClick={(e) => { e.stopPropagation(); handleCopyCode(lesson.code, lessonId); }}
                                                            >
                                                                {copiedCode === lessonId ? '✓ Copié !' : '📋 Copier'}
                                                            </button>
                                                        </div>
                                                        <pre className="p-6 bg-[#0d1117] overflow-x-auto">
                                                            <code className="text-sm md:text-base text-gray-300 font-mono">{lesson.code}</code>
                                                        </pre>
                                                    </div>

                                                    {lesson.tip && (
                                                        <div className="bg-gradient-to-r from-amber-500/10 to-transparent rounded-xl p-4 border border-amber-500/20">
                                                            <p className="text-gray-300 text-sm flex items-start gap-2">
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

            {/* CTA */}
            <section className="max-w-4xl mx-auto mt-20">
                <div className="rounded-2xl border border-cyan-500/30 bg-gradient-to-br from-[#0F1115] to-black p-8 md:p-12 text-center shadow-lg shadow-cyan-500/10">
                    <div className="text-6xl mb-6">🚀</div>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Prêt à coder ?</h2>
                    <p className="text-gray-300 text-lg mb-8">Ouvrez l&apos;éditeur Python interactif !</p>
                    <Link
                        href="/code"
                        className="inline-block px-10 py-4 rounded-xl font-bold text-lg text-black bg-gradient-to-r from-cyan-400 to-blue-500 hover:scale-105 transition-all"
                    >
                        Ouvrir l&apos;Éditeur Python →
                    </Link>
                </div>
            </section>

            {/* Floating Player */}
            {isSpeaking && (
                <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
                    <div className="flex items-center gap-4 px-6 py-4 rounded-2xl bg-gradient-to-r from-[#0F1115] to-black border border-purple-500/30 shadow-2xl shadow-purple-500/20">
                        <div className="w-3 h-3 rounded-full bg-purple-500 animate-pulse"></div>
                        <span className="text-sm text-white font-medium">
                            {ttsMode === 'elevenlabs' ? `✨ ${selectedElevenLabsVoice.name}` : '🎧 Lecture en cours'}
                        </span>
                        <button onClick={togglePause} className={`p-2 rounded-lg ${isPaused ? 'bg-yellow-500/20 text-yellow-400' : 'bg-blue-500/20 text-blue-400'}`}>
                            {isPaused ? <PlayIcon /> : <PauseIcon />}
                        </button>
                        <button onClick={stopSpeaking} className="p-2 rounded-lg bg-red-500/20 text-red-400">
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
