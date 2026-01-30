'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

// ============================================
// COMPOSANTS UI MOBILE PREMIUM POUR SIMULATIONS
// ============================================

// Bouton d'action flottant avec animation
export const FAB = ({ icon, label, onClick, color = 'cyan', pulse = false, className = '' }) => {
    const colors = {
        cyan: 'from-[#00F5D4] to-[#00D9B8]',
        purple: 'from-[#8b5cf6] to-[#7c3aed]',
        orange: 'from-[#f97316] to-[#ea580c]',
        pink: 'from-[#ec4899] to-[#db2777]',
        green: 'from-[#22c55e] to-[#16a34a]',
    };

    return (
        <motion.button
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.05 }}
            onClick={onClick}
            className={`
                relative flex items-center gap-2 px-4 py-3 rounded-2xl font-bold text-sm
                bg-gradient-to-r ${colors[color]} text-black shadow-lg
                ${pulse ? 'animate-pulse' : ''}
                ${className}
            `}
        >
            <span className="text-lg">{icon}</span>
            {label && <span>{label}</span>}
        </motion.button>
    );
};

// Barre de navigation mobile en bas
export const MobileBottomNavbar = ({
    activeTab,
    setActiveTab,
    onFullscreen,
    onHelp,
    onShare,
    returnInfo = null
}) => {
    const tabs = [
        { id: 'simulation', label: 'Simulation', icon: '🎮' },
        { id: 'controls', label: 'Contrôles', icon: '🎛️' },
        { id: 'info', label: 'Info', icon: '💡' },
    ];

    return (
        <motion.nav
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            className="fixed bottom-0 left-0 right-0 z-50 safe-area-inset-bottom"
        >
            {/* Background gradient blur */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/95 to-transparent backdrop-blur-xl" />

            <div className="relative flex items-center justify-around px-2 py-3 max-w-lg mx-auto">
                {/* Bouton retour/home */}
                <Link
                    href={returnInfo ? `/courses?activeChapter=${returnInfo.chapter}` : '/simulations'}
                    className="flex flex-col items-center gap-1 p-2 rounded-xl transition-all active:scale-95"
                >
                    <span className="text-xl">{returnInfo ? '📚' : '🏠'}</span>
                    <span className="text-[10px] text-gray-400 font-medium">
                        {returnInfo ? 'Cours' : 'Accueil'}
                    </span>
                </Link>

                {/* Tabs principaux */}
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`
                            flex flex-col items-center gap-1 p-2 rounded-xl transition-all
                            ${activeTab === tab.id
                                ? 'bg-[#00F5D4]/20 text-[#00F5D4]'
                                : 'text-gray-500 active:scale-95'
                            }
                        `}
                    >
                        <span className="text-xl">{tab.icon}</span>
                        <span className={`text-[10px] font-medium ${activeTab === tab.id ? 'text-[#00F5D4]' : 'text-gray-400'}`}>
                            {tab.label}
                        </span>
                        {activeTab === tab.id && (
                            <motion.div
                                layoutId="activeTabIndicator"
                                className="absolute bottom-1 w-8 h-1 rounded-full bg-[#00F5D4]"
                            />
                        )}
                    </button>
                ))}

                {/* Bouton plein écran */}
                <button
                    onClick={onFullscreen}
                    className="flex flex-col items-center gap-1 p-2 rounded-xl text-gray-500 active:scale-95 transition-all"
                >
                    <span className="text-xl">⛶</span>
                    <span className="text-[10px] text-gray-400 font-medium">Plein</span>
                </button>
            </div>
        </motion.nav>
    );
};

// Panneau de contrôles mobile glissant depuis le bas (Bottom Sheet)
export const MobileControlsSheet = ({
    isOpen,
    onClose,
    autoRotate,
    setAutoRotate,
    speed,
    setSpeed,
    zoom,
    setZoom,
    onReset
}) => {
    const [dragStartY, setDragStartY] = useState(null);
    const sheetRef = useRef(null);

    const handleDragEnd = (e, info) => {
        if (info.offset.y > 100) {
            onClose();
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Overlay */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
                    />

                    {/* Sheet */}
                    <motion.div
                        ref={sheetRef}
                        initial={{ y: '100%' }}
                        animate={{ y: 0 }}
                        exit={{ y: '100%' }}
                        transition={{ type: 'spring', damping: 30, stiffness: 300 }}
                        drag="y"
                        dragConstraints={{ top: 0 }}
                        dragElastic={0.2}
                        onDragEnd={handleDragEnd}
                        className="fixed bottom-0 left-0 right-0 z-50 bg-gradient-to-br from-slate-900 via-slate-950 to-black rounded-t-3xl border-t border-white/10 max-h-[80vh] overflow-hidden"
                    >
                        {/* Handle de drag */}
                        <div className="flex justify-center py-3">
                            <div className="w-12 h-1.5 rounded-full bg-white/30" />
                        </div>

                        {/* Header */}
                        <div className="flex items-center justify-between px-6 pb-4 border-b border-white/10">
                            <div className="flex items-center gap-3">
                                <span className="text-2xl">🎛️</span>
                                <div>
                                    <h3 className="text-lg font-bold text-white">Contrôles</h3>
                                    <p className="text-xs text-gray-400">Personnalisez votre simulation</p>
                                </div>
                            </div>
                            <button
                                onClick={onReset}
                                className="px-4 py-2 rounded-xl bg-white/10 text-white text-sm font-bold active:scale-95 transition-transform"
                            >
                                🔄 Reset
                            </button>
                        </div>

                        {/* Contenu des contrôles */}
                        <div className="p-6 space-y-6 overflow-y-auto max-h-[60vh] pb-safe">
                            {/* Rotation automatique */}
                            <div className="flex items-center justify-between p-4 rounded-2xl bg-white/5 border border-white/10">
                                <div className="flex items-center gap-3">
                                    <span className="text-2xl">🔄</span>
                                    <div>
                                        <p className="font-bold text-white">Rotation Auto</p>
                                        <p className="text-xs text-gray-400">La 3D tourne automatiquement</p>
                                    </div>
                                </div>
                                <button
                                    onClick={() => setAutoRotate(!autoRotate)}
                                    className={`w-14 h-8 rounded-full transition-all duration-300 ${autoRotate
                                            ? 'bg-gradient-to-r from-[#00F5D4] to-[#00D9B8]'
                                            : 'bg-gray-700'
                                        }`}
                                >
                                    <motion.div
                                        animate={{ x: autoRotate ? 24 : 4 }}
                                        className="w-6 h-6 rounded-full bg-white shadow-lg"
                                    />
                                </button>
                            </div>

                            {/* Vitesse d'animation */}
                            <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                                <div className="flex items-center justify-between mb-4">
                                    <div className="flex items-center gap-3">
                                        <span className="text-2xl">⚡</span>
                                        <div>
                                            <p className="font-bold text-white">Vitesse</p>
                                            <p className="text-xs text-gray-400">Animation de la simulation</p>
                                        </div>
                                    </div>
                                    <span className="text-xl font-bold text-[#00F5D4]">{speed}x</span>
                                </div>
                                <input
                                    type="range"
                                    min="0.25"
                                    max="3"
                                    step="0.25"
                                    value={speed}
                                    onChange={(e) => setSpeed(parseFloat(e.target.value))}
                                    className="w-full h-3 rounded-full appearance-none cursor-pointer bg-gray-700"
                                    style={{
                                        background: `linear-gradient(to right, #00F5D4 0%, #00F5D4 ${((speed - 0.25) / 2.75) * 100}%, #374151 ${((speed - 0.25) / 2.75) * 100}%, #374151 100%)`
                                    }}
                                />
                                <div className="flex justify-between mt-2 text-xs text-gray-500">
                                    <span>Lent</span>
                                    <span>Normal</span>
                                    <span>Rapide</span>
                                </div>
                            </div>

                            {/* Zoom */}
                            <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                                <div className="flex items-center justify-between mb-4">
                                    <div className="flex items-center gap-3">
                                        <span className="text-2xl">🔍</span>
                                        <div>
                                            <p className="font-bold text-white">Niveau de Zoom</p>
                                            <p className="text-xs text-gray-400">Rapprochez-vous ou éloignez-vous</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="grid grid-cols-4 gap-2">
                                    {[0.5, 1, 1.5, 2].map((z) => (
                                        <button
                                            key={z}
                                            onClick={() => setZoom(z)}
                                            className={`py-3 rounded-xl text-sm font-bold transition-all active:scale-95 ${zoom === z
                                                    ? 'bg-gradient-to-r from-[#00F5D4] to-[#00D9B8] text-black shadow-lg shadow-[#00F5D4]/30'
                                                    : 'bg-white/10 text-gray-300'
                                                }`}
                                        >
                                            {z}x
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Guide tactile */}
                            <div className="p-4 rounded-2xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20">
                                <p className="text-sm font-bold text-white mb-3">📱 Gestes tactiles</p>
                                <div className="grid grid-cols-2 gap-3">
                                    <div className="flex items-center gap-2 text-sm text-gray-300">
                                        <span className="text-lg">👆</span>
                                        <span>Glisser = Rotation</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-sm text-gray-300">
                                        <span className="text-lg">🤏</span>
                                        <span>Pincer = Zoom</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-sm text-gray-300">
                                        <span className="text-lg">✌️</span>
                                        <span>2 doigts = Pan</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-sm text-gray-300">
                                        <span className="text-lg">👆👆</span>
                                        <span>Double tap = Reset</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

// Info Panel mobile
export const MobileInfoPanel = ({
    isOpen,
    onClose,
    simulation,
    simulationLevel
}) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Overlay */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
                    />

                    {/* Panel */}
                    <motion.div
                        initial={{ y: '100%' }}
                        animate={{ y: 0 }}
                        exit={{ y: '100%' }}
                        transition={{ type: 'spring', damping: 30, stiffness: 300 }}
                        drag="y"
                        dragConstraints={{ top: 0 }}
                        dragElastic={0.2}
                        onDragEnd={(e, info) => info.offset.y > 100 && onClose()}
                        className="fixed bottom-0 left-0 right-0 z-50 bg-gradient-to-br from-slate-900 via-slate-950 to-black rounded-t-3xl border-t border-white/10 max-h-[85vh] overflow-hidden"
                    >
                        {/* Handle de drag */}
                        <div className="flex justify-center py-3">
                            <div className="w-12 h-1.5 rounded-full bg-white/30" />
                        </div>

                        {/* Contenu */}
                        <div className="px-6 pb-safe overflow-y-auto max-h-[75vh]">
                            {/* Header */}
                            <div className="flex items-start gap-4 mb-6">
                                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#00F5D4] to-purple-500 flex items-center justify-center text-3xl flex-shrink-0">
                                    ⚛️
                                </div>
                                <div className="flex-1 min-w-0">
                                    <h2 className="text-xl font-black text-white mb-1 line-clamp-2">
                                        {simulation?.title || 'Simulation'}
                                    </h2>
                                    <div className="flex flex-wrap gap-2">
                                        <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-purple-500/20 text-purple-400 text-xs font-bold">
                                            📚 {simulationLevel?.name}
                                        </span>
                                        <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-green-500/20 text-green-400 text-xs font-bold">
                                            🎯 {simulationLevel?.description}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Description */}
                            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 mb-4">
                                <h3 className="font-bold text-white mb-2 flex items-center gap-2">
                                    <span>📝</span> Description
                                </h3>
                                <p className="text-gray-300 text-sm leading-relaxed">
                                    {simulation?.description || 'Explorez cette simulation 3D interactive.'}
                                </p>
                            </div>

                            {/* Analogie */}
                            {simulation?.analogy && (
                                <div className="p-4 rounded-2xl bg-gradient-to-br from-[#00F5D4]/10 to-purple-500/10 border border-[#00F5D4]/20 mb-4">
                                    <h3 className="font-bold text-[#00F5D4] mb-2 flex items-center gap-2">
                                        <span>🇸🇳</span> Analogie Sénégalaise
                                    </h3>
                                    <p className="text-white font-semibold mb-1">{simulation.analogy.title}</p>
                                    <p className="text-gray-300 text-sm leading-relaxed">
                                        {simulation.analogy.content?.slice(0, 200)}...
                                    </p>
                                </div>
                            )}

                            {/* Théorie */}
                            {simulation?.theory && (
                                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 mb-4">
                                    <h3 className="font-bold text-white mb-2 flex items-center gap-2">
                                        <span>📖</span> Théorie
                                    </h3>
                                    <p className="text-gray-300 text-sm leading-relaxed whitespace-pre-line">
                                        {simulation.theory?.slice(0, 300)}...
                                    </p>
                                </div>
                            )}

                            {/* Actions */}
                            <div className="grid grid-cols-2 gap-3 mb-6">
                                <button className="flex items-center justify-center gap-2 p-4 rounded-2xl bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold active:scale-95 transition-transform">
                                    <span>⚡</span>
                                    <span>Mode Défi</span>
                                </button>
                                <button
                                    onClick={onClose}
                                    className="flex items-center justify-center gap-2 p-4 rounded-2xl bg-white/10 text-white font-bold active:scale-95 transition-transform"
                                >
                                    <span>🎮</span>
                                    <span>Explorer</span>
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

// Overlay de chargement mobile
export const MobileLoadingOverlay = ({ isLoading, progress = 0 }) => {
    if (!isLoading) return null;

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black flex flex-col items-center justify-center"
        >
            {/* Logo animé */}
            <motion.div
                animate={{
                    rotateY: [0, 360],
                    scale: [1, 1.1, 1]
                }}
                transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="text-7xl mb-8"
            >
                ⚛️
            </motion.div>

            {/* Texte de chargement */}
            <h2 className="text-xl font-bold text-white mb-4">
                Chargement de la simulation...
            </h2>

            {/* Barre de progression */}
            <div className="w-64 h-2 bg-gray-800 rounded-full overflow-hidden">
                <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    className="h-full bg-gradient-to-r from-[#00F5D4] to-purple-500 rounded-full"
                />
            </div>

            <p className="text-gray-400 text-sm mt-4">
                Préparation de l'environnement 3D
            </p>
        </motion.div>
    );
};

// Boutons d'action flottants pour mobile
export const MobileFloatingActions = ({
    onHelp,
    onShare,
    onScreenshot,
    showShareButton = true
}) => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div className="fixed top-20 right-4 z-30 flex flex-col items-end gap-2">
            {/* Boutons secondaires */}
            <AnimatePresence>
                {isExpanded && (
                    <>
                        <motion.button
                            initial={{ opacity: 0, x: 20, scale: 0.8 }}
                            animate={{ opacity: 1, x: 0, scale: 1 }}
                            exit={{ opacity: 0, x: 20, scale: 0.8 }}
                            transition={{ delay: 0.1 }}
                            onClick={onScreenshot}
                            className="w-12 h-12 rounded-2xl bg-pink-500/90 backdrop-blur flex items-center justify-center shadow-lg active:scale-95"
                        >
                            <span className="text-xl">📸</span>
                        </motion.button>
                        {showShareButton && (
                            <motion.button
                                initial={{ opacity: 0, x: 20, scale: 0.8 }}
                                animate={{ opacity: 1, x: 0, scale: 1 }}
                                exit={{ opacity: 0, x: 20, scale: 0.8 }}
                                transition={{ delay: 0.05 }}
                                onClick={onShare}
                                className="w-12 h-12 rounded-2xl bg-purple-500/90 backdrop-blur flex items-center justify-center shadow-lg active:scale-95"
                            >
                                <span className="text-xl">📤</span>
                            </motion.button>
                        )}
                        <motion.button
                            initial={{ opacity: 0, x: 20, scale: 0.8 }}
                            animate={{ opacity: 1, x: 0, scale: 1 }}
                            exit={{ opacity: 0, x: 20, scale: 0.8 }}
                            onClick={onHelp}
                            className="w-12 h-12 rounded-2xl bg-[#00F5D4]/90 backdrop-blur flex items-center justify-center shadow-lg active:scale-95"
                        >
                            <span className="text-xl">❓</span>
                        </motion.button>
                    </>
                )}
            </AnimatePresence>

            {/* Bouton principal */}
            <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsExpanded(!isExpanded)}
                className={`w-14 h-14 rounded-2xl flex items-center justify-center shadow-xl transition-all duration-300 ${isExpanded
                        ? 'bg-red-500 rotate-45'
                        : 'bg-gradient-to-br from-[#00F5D4] to-purple-500'
                    }`}
            >
                <span className="text-2xl text-white">{isExpanded ? '✕' : '+'}</span>
            </motion.button>
        </div>
    );
};

// Toast de notification mobile
export const MobileToast = ({ message, type = 'info', isVisible, onClose }) => {
    const bgColors = {
        info: 'from-[#00F5D4] to-[#00D9B8]',
        success: 'from-green-500 to-emerald-600',
        warning: 'from-yellow-500 to-orange-500',
        error: 'from-red-500 to-pink-500',
    };

    const icons = {
        info: '💡',
        success: '✅',
        warning: '⚠️',
        error: '❌',
    };

    useEffect(() => {
        if (isVisible) {
            const timer = setTimeout(onClose, 3000);
            return () => clearTimeout(timer);
        }
    }, [isVisible, onClose]);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0, y: -50, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -50, scale: 0.9 }}
                    className="fixed top-20 left-4 right-4 z-50"
                >
                    <div className={`
                        flex items-center gap-3 p-4 rounded-2xl shadow-xl
                        bg-gradient-to-r ${bgColors[type]} text-black font-bold
                    `}>
                        <span className="text-2xl">{icons[type]}</span>
                        <p className="flex-1 text-sm">{message}</p>
                        <button onClick={onClose} className="text-lg opacity-70">✕</button>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

// Export par défaut avec tous les composants
export default {
    FAB,
    MobileBottomNavbar,
    MobileControlsSheet,
    MobileInfoPanel,
    MobileLoadingOverlay,
    MobileFloatingActions,
    MobileToast,
};
