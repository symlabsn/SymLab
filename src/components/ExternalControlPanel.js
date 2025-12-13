'use client';
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { createPortal } from 'react-dom';

/**
 * Composant Panneau de Contrôle Externe
 * Rendu EN DEHORS du Canvas Three.js, en bas de la page de simulation
 * 
 * Features:
 * - Draggable (déplaçable)
 * - Minimisable (réductible)
 * - Fermable
 * - Positionné en bas de la page par défaut
 */
const ExternalControlPanel = ({
    children,
    title = "🎛️ Contrôles",
    className = "",
    defaultPosition = 'bottom', // 'bottom', 'floating'
    onClose
}) => {
    const [mounted, setMounted] = useState(false);
    const [isMinimized, setIsMinimized] = useState(false);
    const [isClosed, setIsClosed] = useState(false);
    const [isFloating, setIsFloating] = useState(defaultPosition === 'floating');
    const [position, setPosition] = useState({ x: 20, y: 100 });
    const [isDragging, setIsDragging] = useState(false);
    const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
    const panelRef = useRef(null);

    useEffect(() => {
        setMounted(true);
        // Définir la position initiale pour le mode flottant
        if (isFloating && typeof window !== 'undefined') {
            const x = window.innerWidth > 768 ? window.innerWidth - 380 : 10;
            const y = window.innerHeight > 600 ? 100 : 60;
            setPosition({ x, y });
        }
    }, [isFloating]);

    const handleMouseDown = useCallback((e) => {
        if (!isFloating || e.target.closest('.no-drag')) return;
        e.preventDefault();
        e.stopPropagation();
        setIsDragging(true);
        setDragStart({
            x: e.clientX - position.x,
            y: e.clientY - position.y
        });
    }, [isFloating, position]);

    const handleMouseMove = useCallback((e) => {
        if (!isDragging || !isFloating) return;
        e.preventDefault();

        const newX = Math.max(0, Math.min(window.innerWidth - 100, e.clientX - dragStart.x));
        const newY = Math.max(0, Math.min(window.innerHeight - 50, e.clientY - dragStart.y));

        setPosition({ x: newX, y: newY });
    }, [isDragging, dragStart, isFloating]);

    const handleMouseUp = useCallback(() => {
        setIsDragging(false);
    }, []);

    const handleTouchStart = useCallback((e) => {
        if (!isFloating || e.target.closest('.no-drag')) return;
        const touch = e.touches[0];
        setIsDragging(true);
        setDragStart({
            x: touch.clientX - position.x,
            y: touch.clientY - position.y
        });
    }, [isFloating, position]);

    const handleTouchMove = useCallback((e) => {
        if (!isDragging || !isFloating) return;
        const touch = e.touches[0];

        const newX = Math.max(0, Math.min(window.innerWidth - 100, touch.clientX - dragStart.x));
        const newY = Math.max(0, Math.min(window.innerHeight - 50, touch.clientY - dragStart.y));

        setPosition({ x: newX, y: newY });
    }, [isDragging, dragStart, isFloating]);

    const handleClose = () => {
        setIsClosed(true);
        if (onClose) onClose();
    };

    const toggleFloating = () => {
        setIsFloating(!isFloating);
        if (!isFloating && typeof window !== 'undefined') {
            const x = window.innerWidth > 768 ? window.innerWidth - 380 : 10;
            setPosition({ x, y: 100 });
        }
    };

    useEffect(() => {
        if (isDragging && isFloating) {
            const options = { passive: false };
            window.addEventListener('mousemove', handleMouseMove, options);
            window.addEventListener('mouseup', handleMouseUp);
            window.addEventListener('touchmove', handleTouchMove, options);
            window.addEventListener('touchend', handleMouseUp);
        }
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseup', handleMouseUp);
            window.removeEventListener('touchmove', handleTouchMove);
            window.removeEventListener('touchend', handleMouseUp);
        };
    }, [isDragging, isFloating, handleMouseMove, handleMouseUp, handleTouchMove]);

    if (!mounted || isClosed) return null;

    // Panneau en mode fixe (en bas de la simulation)
    const BottomPanel = () => (
        <div
            ref={panelRef}
            className={`w-full bg-black/95 backdrop-blur-xl rounded-2xl border border-white/30 shadow-2xl overflow-hidden ${className}`}
        >
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 bg-gradient-to-r from-[#00F5D4]/30 to-purple-500/30 border-b border-white/20">
                <span className="text-sm font-bold text-[#00F5D4] flex items-center gap-2">
                    <span className="text-base">☰</span>
                    {title}
                </span>
                <div className="flex items-center gap-2">
                    {/* Bouton Mode Flottant */}
                    <button
                        onClick={toggleFloating}
                        className="no-drag px-3 py-1 rounded bg-white/10 hover:bg-white/20 text-xs text-gray-300 transition-all flex items-center gap-1"
                        title="Passer en mode flottant"
                    >
                        <span>📌</span> Détacher
                    </button>
                    {/* Bouton Minimiser */}
                    <button
                        onClick={() => setIsMinimized(!isMinimized)}
                        className="no-drag w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center text-sm transition-all"
                        title={isMinimized ? "Agrandir" : "Réduire"}
                    >
                        {isMinimized ? '🔼' : '🔽'}
                    </button>
                    {/* Bouton Fermer */}
                    <button
                        onClick={handleClose}
                        className="no-drag w-8 h-8 rounded-lg bg-red-500/20 hover:bg-red-500/40 flex items-center justify-center text-sm text-red-400 transition-all"
                        title="Fermer"
                    >
                        ✕
                    </button>
                </div>
            </div>

            {/* Contenu */}
            {!isMinimized && (
                <div className="p-4 max-h-[50vh] overflow-y-auto no-drag custom-scrollbar">
                    {children}
                </div>
            )}
        </div>
    );

    // Panneau en mode flottant (draggable)
    const FloatingPanel = () => (
        <div
            ref={panelRef}
            className={`fixed z-[9999] bg-black/95 backdrop-blur-xl rounded-xl border border-white/30 shadow-2xl overflow-hidden transition-all duration-200 ${isDragging ? 'scale-[1.02] shadow-[0_0_30px_rgba(0,245,212,0.3)] cursor-grabbing' : ''} ${className}`}
            style={{
                left: `${position.x}px`,
                top: `${position.y}px`,
                minWidth: isMinimized ? '180px' : '300px',
                maxWidth: '380px',
                pointerEvents: 'auto',
                userSelect: isDragging ? 'none' : 'auto'
            }}
            onMouseDown={(e) => e.stopPropagation()}
            onClick={(e) => e.stopPropagation()}
        >
            {/* Header draggable */}
            <div
                className="flex items-center justify-between px-3 py-2 bg-gradient-to-r from-[#00F5D4]/30 to-purple-500/30 border-b border-white/20 cursor-grab active:cursor-grabbing select-none"
                onMouseDown={handleMouseDown}
                onTouchStart={handleTouchStart}
            >
                <span className="text-sm font-bold text-[#00F5D4] flex items-center gap-1.5">
                    <span className="text-base">☰</span>
                    {title}
                </span>
                <div className="flex items-center gap-1">
                    {/* Bouton Ancrer */}
                    <button
                        onClick={toggleFloating}
                        className="no-drag w-6 h-6 rounded bg-white/10 hover:bg-white/20 flex items-center justify-center text-xs transition-all"
                        title="Ancrer en bas"
                    >
                        📌
                    </button>
                    {/* Bouton Minimiser */}
                    <button
                        onClick={() => setIsMinimized(!isMinimized)}
                        className="no-drag w-6 h-6 rounded bg-white/10 hover:bg-white/20 flex items-center justify-center text-xs transition-all"
                        title={isMinimized ? "Agrandir" : "Réduire"}
                    >
                        {isMinimized ? '□' : '_'}
                    </button>
                    {/* Bouton Fermer */}
                    <button
                        onClick={handleClose}
                        className="no-drag w-6 h-6 rounded bg-red-500/20 hover:bg-red-500/40 flex items-center justify-center text-xs text-red-400 transition-all"
                        title="Fermer"
                    >
                        ✕
                    </button>
                </div>
            </div>

            {/* Contenu */}
            {!isMinimized && (
                <div className="p-3 max-h-[60vh] overflow-y-auto no-drag custom-scrollbar">
                    {children}
                </div>
            )}

            {/* Indicateur de drag */}
            {isDragging && (
                <div className="absolute inset-0 border-2 border-[#00F5D4] rounded-xl pointer-events-none animate-pulse" />
            )}
        </div>
    );

    // Rendu selon le mode
    if (isFloating) {
        // En mode flottant, utiliser un portail pour rendre dans le body
        return typeof window !== 'undefined' ? createPortal(<FloatingPanel />, document.body) : null;
    }

    // En mode fixe, rendre normalement
    return <BottomPanel />;
};

export default ExternalControlPanel;
