'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { AnalyticsDashboard } from '@/components/Analytics';

export default function AboutPage() {
    const [isVideoPlaying, setIsVideoPlaying] = useState(false);
    const videoRef = useRef(null);
    const [activeSlide, setActiveSlide] = useState(0);
    const [isAutoPlay, setIsAutoPlay] = useState(false);
    const [activeTab, setActiveTab] = useState('profile');
    const slideRef = useRef(null);

    // Slides du Pitch Deck
    const pitchSlides = [
        {
            id: 'problem',
            title: 'Le Problème',
            subtitle: 'Une crise silencieuse',
            icon: '⚠️',
            gradient: 'from-red-600 via-orange-500 to-amber-500',
            bgImage: '🌍',
            stats: [
                { value: '50%', label: 'Échec aux examens scientifiques', color: '#EF4444' },
                { value: '85%', label: 'Écoles sans laboratoire', color: '#F59E0B' },
                { value: '16%', label: 'Élèves en séries scientifiques', color: '#F97316' },
            ],
            description: 'Au Sénégal, des millions d\'élèves n\'ont jamais pratiqué les sciences, touché un microscope ou compris pourquoi les sciences mathématiques sont fascinantes.',
            quote: '"Comment peut-on aimer ce qu\'on ne peut pas voir ?"',
        },
        {
            id: 'solution',
            title: 'Notre Solution',
            subtitle: 'SymLab - Le Labo Virtuel',
            icon: '💡',
            gradient: 'from-[#00F5D4] via-cyan-400 to-blue-500',
            bgImage: '⚛️',
            features: [
                { icon: '🔬', title: 'Simulations 3D', desc: '50+ expériences interactives' },
                { icon: '🧮', title: 'Calcul Symbolique', desc: 'SymPy intégré' },
                { icon: '🇸🇳', title: 'Contexte Local', desc: 'Analogies sénégalaises' },
                { icon: '🎮', title: 'Gamification', desc: 'XP, badges, défis' },
            ],
            description: 'Une plateforme qui transforme chaque smartphone en laboratoire scientifique.',
        },
        {
            id: 'market',
            title: 'Le Marché',
            subtitle: 'Une opportunité massive',
            icon: '📈',
            gradient: 'from-emerald-500 via-green-400 to-teal-500',
            bgImage: '🌍',
            markets: [
                { region: 'Sénégal', students: '2.3M', flag: '🇸🇳' },
                { region: 'Afrique de l\'Ouest', students: '50M+', flag: '🌍' },
                { region: 'Afrique Francophone', students: '100M+', flag: '🗺️' },
            ],
            description: 'Le plus grand marché EdTech inexploité au monde.',
        },
        {
            id: 'traction',
            title: 'Traction',
            subtitle: 'Nos résultats',
            icon: '🚀',
            gradient: 'from-purple-600 via-violet-500 to-pink-500',
            bgImage: '📊',
            achievements: [
                { metric: '50+', label: 'Simulations', icon: '🔬' },
                { metric: '100+', label: 'Défis créés', icon: '🎯' },
                { metric: '4', label: 'Niveaux (6e-Term)', icon: '🎓' },
                { metric: '∞', label: 'Potentiel', icon: '✨' },
            ],
            description: 'Une plateforme complète, de la 6ème à l\'université.',
        },
        {
            id: 'business',
            title: 'Business Model',
            subtitle: 'Comment nous créons de la valeur',
            icon: '💰',
            gradient: 'from-green-500 via-emerald-400 to-teal-500',
            bgImage: '📊',
            revenue: [
                { source: 'B2B Écoles', desc: 'Licences établissements', icon: '🏫', percent: '40%' },
                { source: 'B2G Gouvernement', desc: 'Marchés publics', icon: '🏛️', percent: '30%' },
                { source: 'ONGs & RSE', desc: 'Partenariats', icon: '🤝', percent: '20%' },
                { source: 'Premium', desc: 'Fonctionnalités avancées', icon: '⭐', percent: '10%' },
            ],
            description: 'Un modèle durable qui allie impact social et viabilité économique.',
        },
        {
            id: 'vision',
            title: 'Vision 2030',
            subtitle: 'L\'impact que nous construisons',
            icon: '🌟',
            gradient: 'from-amber-500 via-yellow-400 to-orange-500',
            bgImage: '🔮',
            goals: [
                { target: '10M', label: 'Élèves formés', year: '2030' },
                { target: '+70%', label: 'Réussite scientifique', year: 'Objectif' },
                { target: '10+', label: 'Pays africains', year: 'Expansion' },
            ],
            description: 'Transformer l\'Afrique en hub scientifique mondial.',
        },
        {
            id: 'team',
            title: 'L\'Équipe',
            subtitle: 'Les visionnaires',
            icon: '👥',
            gradient: 'from-indigo-600 via-blue-500 to-cyan-500',
            bgImage: '⭐',
            founder: {
                name: 'El Hadji Momar FAYE',
                role: 'Fondateur & CEO',
                expertise: ['Physicien', 'Data Scientist', 'Pédagogue'],
                image: '/profile.jpg',
            },
            description: 'Une équipe passionnée par l\'éducation et la technologie.',
        },
    ];

    // Auto-play slides
    useEffect(() => {
        if (isAutoPlay) {
            const interval = setInterval(() => {
                setActiveSlide(prev => (prev + 1) % pitchSlides.length);
            }, 35000);
            return () => clearInterval(interval);
        }
    }, [isAutoPlay, pitchSlides.length]);

    const nextSlide = () => setActiveSlide(prev => (prev + 1) % pitchSlides.length);
    const prevSlide = () => setActiveSlide(prev => (prev - 1 + pitchSlides.length) % pitchSlides.length);

    const currentSlide = pitchSlides[activeSlide];

    const skills = [
        { name: 'Physique Théorique', level: 95, color: '#00F5D4' },
        { name: 'Data Science', level: 90, color: '#7C3AED' },
        { name: 'Machine Learning', level: 85, color: '#F59E0B' },
        { name: 'Python/NumPy/SymPy', level: 95, color: '#3B82F6' },
        { name: 'Visualisation de données', level: 88, color: '#EC4899' }
    ];

    const expertise = [
        { title: 'Physique & Modélisation', icon: '⚛️', description: 'Spécialiste en physique théorique et computationnelle.' },
        { title: 'Data Science & IA', icon: '🤖', description: 'Expert en analyse de données et machine learning.' },
        { title: 'Enseignement & Pédagogie', icon: '🎓', description: 'Passionné par la transmission du savoir scientifique.' }
    ];

    return (
        <main className="min-h-screen bg-black text-white overflow-x-hidden">
            {/* Navbar */}
            <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 backdrop-blur-xl bg-black/70">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
                    <Link href="/" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2">
                        <span className="text-2xl">←</span>
                        <span>Retour</span>
                    </Link>
                    <div className="flex items-center gap-4">
                        <span className="px-3 py-1 rounded-full bg-gradient-to-r from-[#00F5D4] to-purple-500 text-black text-sm font-bold">
                            Pitch Deck
                        </span>
                    </div>
                </div>
            </nav>

            {/* ============================================ */}
            {/* HERO SECTION - PROFIL */}
            {/* ============================================ */}
            <section className="relative pt-24 pb-16 overflow-hidden">
                {/* Fond animé */}
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
                    <div className="absolute top-0 right-1/4 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-700"></div>
                    <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000"></div>
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        {/* Photo de profil */}
                        <div className="flex justify-center md:justify-end order-1 md:order-none">
                            <div className="relative group">
                                <div className="absolute -inset-1 bg-gradient-to-r from-[#00F5D4] via-purple-500 to-pink-500 rounded-full blur-lg opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
                                <div className="relative">
                                    <div className="w-72 h-72 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white/20 backdrop-blur-xl bg-white/10 shadow-2xl">
                                        <Image
                                            src="/profile.jpg"
                                            alt="El Hadji Momar FAYE"
                                            width={320}
                                            height={320}
                                            className="w-full h-full object-cover"
                                            priority
                                        />
                                    </div>
                                    {/* Badge flottant */}
                                    <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-[#00F5D4] to-purple-500 rounded-full p-4 shadow-2xl animate-bounce">
                                        <span className="text-4xl">⚛️</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Informations */}
                        <div className="space-y-6 text-center md:text-left">
                            <div>
                                <h1 className="text-4xl md:text-6xl font-black mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white via-[#00F5D4] to-purple-500">
                                    El Hadji Momar FAYE
                                </h1>
                                <p className="text-xl md:text-2xl text-gray-300 mb-2">Physicien & Data Scientist</p>
                                <p className="text-lg text-gray-400 italic">Créateur de SymLab</p>
                            </div>

                            {/* Cartes de contact */}
                            <div className="space-y-3">
                                <a href="mailto:fayemomar33@gmail.com" className="group flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-[#00F5D4]/50 hover:bg-white/10 transition-all duration-300">
                                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#00F5D4] to-cyan-500 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                                        📧
                                    </div>
                                    <div className="text-left">
                                        <p className="text-sm text-gray-400">Email</p>
                                        <p className="text-white font-semibold">fayemomar33@gmail.com</p>
                                    </div>
                                </a>

                                <a href="tel:+221708571732" className="group flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-purple-500/50 hover:bg-white/10 transition-all duration-300">
                                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                                        📱
                                    </div>
                                    <div className="text-left">
                                        <p className="text-sm text-gray-400">Téléphone</p>
                                        <p className="text-white font-semibold">+221 70 857 17 32</p>
                                    </div>
                                </a>
                            </div>

                            {/* Mission */}
                            <div className="p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 border border-white/20 backdrop-blur-xl">
                                <h3 className="text-xl font-bold mb-3 text-[#00F5D4]">🎯 Mission</h3>
                                <p className="text-gray-300 leading-relaxed">
                                    Démocratiser l&apos;accès aux sciences et à la technologie en Afrique à travers des outils pédagogiques innovants et interactifs.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Scroll vers le pitch */}
                    <div className="text-center mt-16">
                        <p className="text-gray-500 mb-4">Découvrez notre vision</p>
                        <button
                            onClick={() => document.getElementById('pitch-deck')?.scrollIntoView({ behavior: 'smooth' })}
                            className="animate-bounce p-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-all"
                        >
                            <span className="text-2xl">↓</span>
                        </button>
                    </div>
                </div>
            </section>

            {/* ============================================ */}
            {/* VIDEO PRESENTATION SECTION */}
            {/* ============================================ */}
            <section className="relative z-10 py-20 border-t border-white/10">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Titre */}
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6">
                            <span className="text-2xl">🎬</span>
                            <span className="text-sm font-bold text-gray-400 uppercase tracking-wider">Vidéo de présentation</span>
                        </div>
                        <h2 className="text-3xl md:text-5xl font-black mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#00F5D4] via-cyan-400 to-purple-500">
                            Découvrez SymLab en 1 minute
                        </h2>
                        <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                            Une visite guidée de la plateforme qui transforme chaque smartphone en laboratoire scientifique.
                        </p>
                    </div>

                    {/* Lecteur Vidéo */}
                    <div className="relative group">
                        {/* Bordure gradient animée */}
                        <div className="absolute -inset-1 bg-gradient-to-r from-[#00F5D4] via-purple-500 to-pink-500 rounded-2xl blur-lg opacity-50 group-hover:opacity-75 transition duration-500" />
                        
                        <div className="relative rounded-2xl overflow-hidden bg-black border border-white/20">
                            <video
                                ref={videoRef}
                                className="w-full aspect-video"
                                controls
                                poster="/images/video-thumbnail.jpg"
                                preload="metadata"
                                onPlay={() => setIsVideoPlaying(true)}
                                onPause={() => setIsVideoPlaying(false)}
                                onEnded={() => setIsVideoPlaying(false)}
                            >
                                <source src="/videos/symlab-presentation.mp4" type="video/mp4" />
                                <track 
                                    src="/videos/symlab-subtitles.vtt" 
                                    kind="subtitles" 
                                    srcLang="fr" 
                                    label="Français" 
                                    default 
                                />
                                Votre navigateur ne supporte pas la lecture vidéo.
                            </video>

                            {/* Overlay Play (visible uniquement quand vidéo pas en cours) */}
                            {!isVideoPlaying && (
                                <button
                                    onClick={() => {
                                        if (videoRef.current) {
                                            videoRef.current.play();
                                        }
                                    }}
                                    className="absolute inset-0 flex items-center justify-center bg-black/40 hover:bg-black/30 transition-colors cursor-pointer group/play"
                                >
                                    <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-r from-[#00F5D4] to-purple-500 flex items-center justify-center shadow-2xl group-hover/play:scale-110 transition-transform">
                                        <svg className="w-8 h-8 md:w-10 md:h-10 text-black ml-1" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M8 5v14l11-7z"/>
                                        </svg>
                                    </div>
                                </button>
                            )}
                        </div>
                    </div>

                    {/* Bouton Téléchargement + Infos */}
                    <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a
                            href="/videos/symlab-presentation.mp4"
                            download="SymLab-Presentation.mp4"
                            className="group flex items-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-[#00F5D4] to-cyan-500 text-black font-bold hover:scale-105 transition-all shadow-lg shadow-[#00F5D4]/25"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                            </svg>
                            Télécharger la vidéo
                            <span className="text-xs opacity-70 font-normal">(MP4)</span>
                        </a>

                        <div className="flex items-center gap-6 text-sm text-gray-500">
                            <span className="flex items-center gap-1.5">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                ~1 min
                            </span>
                            <span className="flex items-center gap-1.5">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                                </svg>
                                Sous-titré FR
                            </span>
                            <span className="flex items-center gap-1.5">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3" />
                                </svg>
                                HD 1080p
                            </span>
                        </div>
                    </div>
                </div>
            </section>

            {/* ============================================ */}
            {/* PITCH DECK - EXPÉRIENCE IMMERSIVE */}
            {/* ============================================ */}
            <section id="pitch-deck" className="relative min-h-screen">
                {/* Background dynamique */}
                <div className={`absolute inset-0 bg-gradient-to-br ${currentSlide.gradient} opacity-10 transition-all duration-1000`} />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_black_70%)]" />

                {/* Grille de fond */}
                <div className="absolute inset-0 opacity-20" style={{
                    backgroundImage: `linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), 
                                      linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)`,
                    backgroundSize: '50px 50px'
                }} />

                {/* Emoji flottant géant */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[300px] opacity-5 select-none pointer-events-none transition-all duration-1000">
                    {currentSlide.bgImage}
                </div>

                {/* Contenu du slide */}
                <div ref={slideRef} className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 min-h-[calc(100vh-64px)] flex flex-col justify-center">
                    {/* Header du slide */}
                    <div className="text-center mb-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6">
                            <span className="text-2xl">{currentSlide.icon}</span>
                            <span className="text-sm font-bold text-gray-400 uppercase tracking-wider">
                                {activeSlide + 1} / {pitchSlides.length}
                            </span>
                        </div>

                        <div className="flex items-center justify-center gap-4 mb-4">
                            <h2 className={`text-5xl md:text-7xl font-black bg-gradient-to-r ${currentSlide.gradient} bg-clip-text text-transparent`}>
                                {currentSlide.title}
                            </h2>
                            <button
                                onClick={() => setIsAutoPlay(!isAutoPlay)}
                                className={`px-3 py-2 rounded-full text-sm font-bold transition-all ${isAutoPlay
                                    ? 'bg-gradient-to-r from-[#00F5D4] to-purple-500 text-black animate-pulse'
                                    : 'bg-white/5 border border-white/10 text-gray-400 hover:bg-white/10'
                                    }`}
                            >
                                {isAutoPlay ? '⏸' : '▶'}
                            </button>
                        </div>
                        <p className="text-xl md:text-2xl text-gray-400">
                            {currentSlide.subtitle}
                        </p>
                    </div>

                    {/* Contenu spécifique à chaque slide */}
                    <div className="flex-1 flex items-center justify-center">
                        {/* SLIDE 1: Problème */}
                        {currentSlide.id === 'problem' && (
                            <div className="w-full space-y-8 animate-in fade-in slide-in-from-bottom-6 duration-700">
                                <div className="grid md:grid-cols-3 gap-6">
                                    {currentSlide.stats.map((stat, i) => (
                                        <div key={i} className="group relative p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-red-500/50 transition-all hover:scale-105">
                                            <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
                                            <div className="relative">
                                                <div className="text-5xl md:text-6xl font-black mb-2" style={{ color: stat.color }}>
                                                    {stat.value}
                                                </div>
                                                <div className="text-gray-400">{stat.label}</div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="text-center">
                                    <p className="text-xl text-gray-300 mb-4">{currentSlide.description}</p>
                                    <p className="text-2xl italic text-white/60">{currentSlide.quote}</p>
                                </div>
                            </div>
                        )}

                        {/* SLIDE 2: Solution */}
                        {currentSlide.id === 'solution' && (
                            <div className="w-full space-y-8 animate-in fade-in slide-in-from-bottom-6 duration-700">
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                    {currentSlide.features.map((feat, i) => (
                                        <div key={i} className="group p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-[#00F5D4]/50 transition-all hover:scale-105 text-center">
                                            <div className="text-4xl mb-3 group-hover:scale-125 transition-transform">{feat.icon}</div>
                                            <div className="font-bold text-white mb-1">{feat.title}</div>
                                            <div className="text-sm text-gray-500">{feat.desc}</div>
                                        </div>
                                    ))}
                                </div>
                                <p className="text-xl text-center text-gray-300">{currentSlide.description}</p>
                            </div>
                        )}

                        {/* SLIDE 3: Marché */}
                        {currentSlide.id === 'market' && (
                            <div className="w-full space-y-8 animate-in fade-in slide-in-from-bottom-6 duration-700">
                                <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                                    {currentSlide.markets.map((market, i) => (
                                        <div key={i} className="relative group">
                                            {i > 0 && <div className="hidden md:block absolute -left-4 top-1/2 transform -translate-y-1/2 text-3xl text-gray-600">→</div>}
                                            <div className="p-8 rounded-3xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 hover:border-emerald-500/50 transition-all text-center group-hover:scale-110">
                                                <div className="text-6xl mb-3">{market.flag}</div>
                                                <div className="text-4xl font-black text-emerald-400 mb-1">{market.students}</div>
                                                <div className="text-gray-400">{market.region}</div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <p className="text-xl text-center text-gray-300">{currentSlide.description}</p>
                            </div>
                        )}

                        {/* SLIDE 4: Traction */}
                        {currentSlide.id === 'traction' && (
                            <div className="w-full space-y-8 animate-in fade-in slide-in-from-bottom-6 duration-700">
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                                    {currentSlide.achievements.map((ach, i) => (
                                        <div key={i} className="group p-8 rounded-3xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-white/10 hover:border-purple-500/50 transition-all text-center hover:scale-105">
                                            <div className="text-4xl mb-3 group-hover:animate-bounce">{ach.icon}</div>
                                            <div className="text-4xl md:text-5xl font-black text-white mb-1">{ach.metric}</div>
                                            <div className="text-gray-400">{ach.label}</div>
                                        </div>
                                    ))}
                                </div>
                                <p className="text-xl text-center text-gray-300">{currentSlide.description}</p>
                            </div>
                        )}

                        {/* SLIDE 5: Business Model */}
                        {currentSlide.id === 'business' && (
                            <div className="w-full space-y-8 animate-in fade-in slide-in-from-bottom-6 duration-700">
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                    {currentSlide.revenue.map((rev, i) => (
                                        <div key={i} className="group p-6 rounded-2xl bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-white/10 hover:border-green-500/50 transition-all text-center hover:scale-105">
                                            <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">{rev.icon}</div>
                                            <div className="text-2xl font-black text-emerald-400 mb-1">{rev.percent}</div>
                                            <div className="font-bold text-white text-sm mb-1">{rev.source}</div>
                                            <div className="text-xs text-gray-500">{rev.desc}</div>
                                        </div>
                                    ))}
                                </div>
                                <div className="max-w-xl mx-auto p-6 rounded-2xl bg-white/5 border border-white/10">
                                    <div className="flex items-center justify-between text-sm text-gray-400 mb-2">
                                        <span>Gratuit pour les élèves</span>
                                        <span>Revenus B2B/B2G</span>
                                    </div>
                                    <div className="h-4 rounded-full overflow-hidden bg-gray-800">
                                        <div className="h-full flex">
                                            <div className="h-full bg-emerald-500" style={{ width: '40%' }}></div>
                                            <div className="h-full bg-teal-500" style={{ width: '30%' }}></div>
                                            <div className="h-full bg-green-400" style={{ width: '20%' }}></div>
                                            <div className="h-full bg-lime-400" style={{ width: '10%' }}></div>
                                        </div>
                                    </div>
                                </div>
                                <p className="text-xl text-center text-gray-300">{currentSlide.description}</p>
                            </div>
                        )}

                        {/* SLIDE 6: Vision */}
                        {currentSlide.id === 'vision' && (
                            <div className="w-full space-y-8 animate-in fade-in slide-in-from-bottom-6 duration-700">
                                <div className="grid md:grid-cols-3 gap-6">
                                    {currentSlide.goals.map((goal, i) => (
                                        <div key={i} className="relative overflow-hidden p-8 rounded-3xl bg-gradient-to-br from-amber-500/10 to-orange-500/10 border border-white/10 hover:border-amber-500/50 transition-all text-center group hover:scale-105">
                                            <div className="absolute top-2 right-3 text-xs font-mono text-gray-500">{goal.year}</div>
                                            <div className="text-5xl md:text-6xl font-black text-amber-400 mb-2 group-hover:scale-110 transition-transform">{goal.target}</div>
                                            <div className="text-lg text-white">{goal.label}</div>
                                        </div>
                                    ))}
                                </div>
                                <p className="text-xl text-center text-gray-300">{currentSlide.description}</p>
                            </div>
                        )}

                        {/* SLIDE 7: Équipe */}
                        {currentSlide.id === 'team' && (
                            <div className="w-full animate-in fade-in slide-in-from-bottom-6 duration-700">
                                <div className="max-w-md mx-auto">
                                    <div className="relative group">
                                        <div className="absolute -inset-1 bg-gradient-to-r from-[#00F5D4] via-purple-500 to-pink-500 rounded-3xl blur-lg opacity-50 group-hover:opacity-100 transition duration-500" />
                                        <div className="relative p-8 rounded-3xl bg-black border border-white/20 text-center">
                                            <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-white/20 mb-6">
                                                <Image
                                                    src={currentSlide.founder.image}
                                                    alt={currentSlide.founder.name}
                                                    width={128}
                                                    height={128}
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                            <h3 className="text-2xl font-black text-white mb-1">{currentSlide.founder.name}</h3>
                                            <p className="text-[#00F5D4] font-bold mb-4">{currentSlide.founder.role}</p>
                                            <div className="flex flex-wrap gap-2 justify-center">
                                                {currentSlide.founder.expertise.map((exp, i) => (
                                                    <span key={i} className="px-3 py-1 rounded-full bg-white/10 text-sm text-gray-300">
                                                        {exp}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <p className="text-xl text-center text-gray-300 mt-8">{currentSlide.description}</p>
                            </div>
                        )}
                    </div>

                    {/* Navigation des slides */}
                    <div className="mt-12">
                        {/* Barre de progression */}
                        <div className="flex gap-2 justify-center mb-6">
                            {pitchSlides.map((slide, i) => (
                                <button
                                    key={i}
                                    onClick={() => setActiveSlide(i)}
                                    className={`h-2 rounded-full transition-all duration-300 ${i === activeSlide
                                        ? 'w-12 bg-gradient-to-r from-[#00F5D4] to-purple-500'
                                        : 'w-2 bg-white/20 hover:bg-white/40'
                                        }`}
                                />
                            ))}
                        </div>

                        {/* Contrôles */}
                        <div className="flex items-center justify-center gap-4">
                            <button
                                onClick={prevSlide}
                                className="p-4 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/30 transition-all"
                            >
                                <span className="text-2xl">←</span>
                            </button>

                            <button
                                onClick={() => setIsAutoPlay(!isAutoPlay)}
                                className={`px-6 py-3 rounded-full font-bold transition-all ${isAutoPlay
                                    ? 'bg-gradient-to-r from-[#00F5D4] to-purple-500 text-black'
                                    : 'bg-white/5 border border-white/10 text-white hover:bg-white/10'
                                    }`}
                            >
                                {isAutoPlay ? '⏸ Pause' : '▶ Auto-play'}
                            </button>

                            <button
                                onClick={nextSlide}
                                className="p-4 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/30 transition-all"
                            >
                                <span className="text-2xl">→</span>
                            </button>
                        </div>

                        {/* Miniatures des slides */}
                        <div className="flex gap-3 justify-center mt-8 overflow-x-auto pb-4">
                            {pitchSlides.map((slide, i) => (
                                <button
                                    key={i}
                                    onClick={() => setActiveSlide(i)}
                                    className={`flex-shrink-0 p-3 rounded-xl transition-all ${i === activeSlide
                                        ? 'bg-white/10 border-2 border-[#00F5D4] scale-110'
                                        : 'bg-white/5 border border-white/10 hover:bg-white/10 opacity-60 hover:opacity-100'
                                        }`}
                                >
                                    <span className="text-2xl">{slide.icon}</span>
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ============================================ */}
            {/* SECTION PROFIL */}
            {/* ============================================ */}
            <section className="relative z-10 py-20 border-t border-white/10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Tab Navigation */}
                    <div className="flex gap-4 mb-8 justify-center">
                        {['profile', 'skills', 'expertise'].map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`px-6 py-3 rounded-xl font-bold transition-all duration-300 ${activeTab === tab
                                    ? 'bg-gradient-to-r from-[#00F5D4] to-purple-500 text-black shadow-lg scale-105'
                                    : 'bg-white/5 text-gray-400 hover:bg-white/10 border border-white/10'
                                    }`}
                            >
                                {tab === 'profile' && '👤 Profil'}
                                {tab === 'skills' && '💪 Compétences'}
                                {tab === 'expertise' && '🎯 Expertise'}
                            </button>
                        ))}
                    </div>

                    {/* Tab Content */}
                    <div className="min-h-[300px]">
                        {activeTab === 'profile' && (
                            <div className="max-w-3xl mx-auto p-8 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 animate-in fade-in duration-500">
                                <h2 className="text-3xl font-bold mb-6 text-[#00F5D4]">Parcours</h2>
                                <div className="space-y-4 text-gray-300 leading-relaxed">
                                    <p>
                                        Physicien de formation avec une passion pour la data science et l&apos;intelligence artificielle,
                                        je me consacre à l&apos;innovation pédagogique dans le domaine des STEM.
                                    </p>
                                    <p>
                                        J&apos;ai créé <span className="text-[#00F5D4] font-bold">SymLab</span>,
                                        une plateforme interactive qui révolutionne l&apos;apprentissage des sciences au Sénégal et en Afrique.
                                    </p>
                                </div>
                            </div>
                        )}

                        {activeTab === 'skills' && (
                            <div className="max-w-3xl mx-auto p-8 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 animate-in fade-in duration-500">
                                <h2 className="text-3xl font-bold mb-8 text-[#00F5D4]">Compétences</h2>
                                <div className="space-y-6">
                                    {skills.map((skill, index) => (
                                        <div key={index}>
                                            <div className="flex justify-between mb-2">
                                                <span className="font-semibold">{skill.name}</span>
                                                <span className="text-gray-400">{skill.level}%</span>
                                            </div>
                                            <div className="h-3 bg-white/10 rounded-full overflow-hidden">
                                                <div
                                                    className="h-full rounded-full transition-all duration-1000"
                                                    style={{ width: `${skill.level}%`, background: skill.color }}
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {activeTab === 'expertise' && (
                            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto animate-in fade-in duration-500">
                                {expertise.map((item, index) => (
                                    <div key={index} className="p-8 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 hover:scale-105 hover:border-[#00F5D4]/50 transition-all text-center">
                                        <div className="text-5xl mb-4">{item.icon}</div>
                                        <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                                        <p className="text-gray-400">{item.description}</p>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </section>

            {/* ============================================ */}
            {/* SECTION ANALYTICS */}
            {/* ============================================ */}
            <section className="relative z-10 py-20 border-t border-white/10" id="analytics">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-8">
                        <h2 className="text-3xl md:text-4xl font-black mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">
                            📊 Analytics & Statistiques
                        </h2>
                        <p className="text-gray-400">
                            Suivi des utilisateurs et des interactions avec la plateforme
                        </p>
                    </div>
                    <AnalyticsDashboard />
                </div>
            </section>

            {/* CTA Final */}
            <section className="relative z-10 py-20 border-t border-white/10">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <div className="p-12 rounded-3xl bg-gradient-to-r from-[#00F5D4]/20 via-purple-500/20 to-pink-500/20 border border-white/20">
                        <h2 className="text-4xl font-black mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#00F5D4] to-purple-500">
                            Collaborons ensemble !
                        </h2>
                        <p className="text-xl text-gray-300 mb-8">
                            Vous avez un projet scientifique ou pédagogique ? Discutons de la manière dont nous pouvons innover ensemble.
                        </p>
                        <div className="flex flex-wrap gap-4 justify-center">
                            <a href="mailto:fayemomar33@gmail.com" className="px-8 py-4 rounded-xl bg-gradient-to-r from-[#00F5D4] to-cyan-500 text-black font-bold hover:scale-105 transition-transform shadow-lg">
                                📧 Me contacter
                            </a>
                            <Link href="/" className="px-8 py-4 rounded-xl bg-white/10 border border-white/20 text-white font-bold hover:bg-white/20 transition-all">
                                🏠 Retour à SymLab
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
