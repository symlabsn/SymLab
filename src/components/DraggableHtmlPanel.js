'use client';
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { createPortal } from 'react-dom';

/**
 * Composant Panneau Draggable COMPLÈTEMENT DÉTACHÉ de la scène 3D
 * Utilise un portail React pour être rendu en dehors du Canvas Three.js
 * 
 * IMPORTANT: Ce composant est conçu pour être utilisé à l'intérieur de composants
 * qui sont rendus dans le Canvas R3F. Il utilise un portail pour "s'échapper"
 * du contexte Three.js et rendre son contenu HTML dans document.body.
 * 
 * Features:
 * - Draggable (déplaçable avec souris et touch)
 * - Minimisable (réductible)
 * - Fermable
 * - Position initiale intelligente (côté droit sur desktop, en haut sur mobile)
 */
const DraggableHtmlPanel = ({ children, title, className = "", initialPos = null, onClose, usePortal = true, showCloseButton = false, defaultPosition = "top-right" }) => {
    const [mounted, setMounted] = useState(false);
    const [position, setPosition] = useState({ x: 20, y: 100 });
    const [isDragging, setIsDragging] = useState(false);
    const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
    const [isMinimized, setIsMinimized] = useState(false);
    const [isClosed, setIsClosed] = useState(false);
    const [isMobilePanel, setIsMobilePanel] = useState(false);
    const panelRef = useRef(null);

    // Mobile detection for panel layout
    useEffect(() => {
        const checkMobile = () => setIsMobilePanel(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // Monter le composant côté client uniquement
    useEffect(() => {
        // Utiliser un délai court pour s'assurer que le DOM est prêt
        const timer = setTimeout(() => {
            setMounted(true);
            // Définir la position initiale côté client
            if (initialPos) {
                setPosition(initialPos);
            } else if (typeof window !== 'undefined') {
                let x, y;
                if (defaultPosition === "bottom-center") {
                    x = window.innerWidth / 2 - 190; // Centré (largeur approx 380)
                    y = window.innerHeight - 300; // En bas
                } else {
                    // Default top-right
                    x = window.innerWidth > 768 ? window.innerWidth - 380 : 10;
                    y = window.innerHeight > 600 ? 100 : 60;
                }
                setPosition({ x, y });
            }
        }, 50);

        return () => clearTimeout(timer);
    }, [initialPos]);

    const handleMouseDown = useCallback((e) => {
        if (e.target.closest('.no-drag')) return;
        e.preventDefault();
        e.stopPropagation();
        setIsDragging(true);
        setDragStart({
            x: e.clientX - position.x,
            y: e.clientY - position.y
        });
    }, [position]);

    const handleMouseMove = useCallback((e) => {
        if (!isDragging) return;
        e.preventDefault();

        // Limiter le panneau dans les limites de l'écran
        const newX = Math.max(0, Math.min(window.innerWidth - 100, e.clientX - dragStart.x));
        const newY = Math.max(0, Math.min(window.innerHeight - 50, e.clientY - dragStart.y));

        setPosition({ x: newX, y: newY });
    }, [isDragging, dragStart]);

    const handleMouseUp = useCallback(() => {
        setIsDragging(false);
    }, []);

    const handleTouchStart = useCallback((e) => {
        if (e.target.closest('.no-drag')) return;
        const touch = e.touches[0];
        setIsDragging(true);
        setDragStart({
            x: touch.clientX - position.x,
            y: touch.clientY - position.y
        });
    }, [position]);

    const handleTouchMove = useCallback((e) => {
        if (!isDragging) return;
        const touch = e.touches[0];

        // Limiter le panneau dans les limites de l'écran
        const newX = Math.max(0, Math.min(window.innerWidth - 100, touch.clientX - dragStart.x));
        const newY = Math.max(0, Math.min(window.innerHeight - 50, touch.clientY - dragStart.y));

        setPosition({ x: newX, y: newY });
    }, [isDragging, dragStart]);

    const handleClose = useCallback(() => {
        setIsClosed(true);
        if (onClose) onClose();
    }, [onClose]);

    useEffect(() => {
        if (isDragging) {
            // Utiliser l'option passive: false pour permettre preventDefault
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
    }, [isDragging, handleMouseMove, handleMouseUp, handleTouchMove]);

    const [mountNode, setMountNode] = useState(null);

    useEffect(() => {
        if (typeof document === 'undefined') return;

        // Initial set
        setMountNode(document.fullscreenElement || document.body);

        const handleFullscreenChange = () => {
            setMountNode(document.fullscreenElement || document.body);
        };

        // Listen for fullscreen changes to re-parent the portal
        document.addEventListener('fullscreenchange', handleFullscreenChange);
        document.addEventListener('webkitfullscreenchange', handleFullscreenChange);
        document.addEventListener('mozfullscreenchange', handleFullscreenChange);
        document.addEventListener('msfullscreenchange', handleFullscreenChange);

        return () => {
            document.removeEventListener('fullscreenchange', handleFullscreenChange);
            document.removeEventListener('webkitfullscreenchange', handleFullscreenChange);
            document.removeEventListener('mozfullscreenchange', handleFullscreenChange);
            document.removeEventListener('msfullscreenchange', handleFullscreenChange);
        };
    }, []);

    // Ne pas rendre tant que le client n'est pas monté ou si fermé
    // Retourne un fragment vide pour éviter les erreurs R3F avec les enfants null
    if (!mounted || isClosed) return <></>;

    // Ne pas essayer de créer le portail si mountNode n'est pas déterminé
    if (!mountNode) return <></>;

    const panelContent = (
        <div
            ref={panelRef}
            className={`fixed bg-black/95 backdrop-blur-xl rounded-xl border shadow-2xl overflow-hidden transition-all duration-200 z-[9999] ${isMinimized && isMobilePanel ? 'border-[#00F5D4]/50 shadow-[0_0_15px_rgba(0,245,212,0.2)]' : 'border-white/30'} ${isDragging ? 'scale-[1.02] shadow-[0_0_30px_rgba(0,245,212,0.3)] cursor-grabbing' : ''} ${className}`}
            style={{
                left: isMobilePanel ? '50%' : `${position.x}px`,
                top: isMobilePanel ? 'auto' : `${position.y}px`,
                bottom: isMobilePanel ? '12px' : 'auto',
                transform: isMobilePanel ? 'translateX(-50%)' : 'none',
                minWidth: isMinimized ? (isMobilePanel ? '180px' : '150px') : '240px',
                maxWidth: isMobilePanel ? '95vw' : '440px',
                maxHeight: isMobilePanel && !isMinimized ? '50vh' : 'auto',
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
                <span className="text-sm font-bold text-[#00F5D4] flex items-center gap-1.5 truncate">
                    <span className="text-base">☰</span>
                    <span className="truncate">{title || 'Contrôles'}</span>
                </span>
                <div className="flex items-center gap-1">
                    {/* Bouton Minimiser */}
                    <button
                        onClick={() => setIsMinimized(!isMinimized)}
                        className="no-drag w-6 h-6 rounded bg-white/10 hover:bg-white/20 flex items-center justify-center text-xs transition-all"
                        title={isMinimized ? "Agrandir" : "Réduire"}
                    >
                        {isMinimized ? '🔼' : '🔽'}
                    </button>
                    {/* Bouton Fermer (Conditionnel) */}
                    {showCloseButton && (
                        <button
                            onClick={handleClose}
                            className="no-drag w-6 h-6 rounded bg-red-500/20 hover:bg-red-500/40 flex items-center justify-center text-xs text-red-400 transition-all"
                            title="Fermer"
                        >
                            ✕
                        </button>
                    )}
                </div>
            </div>

            {/* Contenu (caché si minimisé) */}
            {!isMinimized && (
                <div className={`p-3 overflow-y-auto no-drag custom-scrollbar ${isMobilePanel ? 'max-h-[70vh]' : 'max-h-[60vh]'}`}>
                    {children}
                </div>
            )}

            {/* Indicateur minimisé sur mobile - barre de réouverture */}
            {isMinimized && isMobilePanel && (
                <div className="px-3 py-1.5 text-center border-t border-white/10">
                    <span className="text-[10px] text-gray-400">Appuyez sur 🔼 pour agrandir</span>
                </div>
            )}

            {/* Indicateur de drag */}
            {isDragging && (
                <div className="absolute inset-0 border-2 border-[#00F5D4] rounded-xl pointer-events-none animate-pulse" />
            )}
        </div>
    );

    // Si usePortal est false, rendre directement (pour compatibilité avec <Html> de drei)
    if (!usePortal) {
        return panelContent;
    }

    // Utiliser createPortal pour détacher du contexte R3F
    return createPortal(panelContent, mountNode);
};

export default DraggableHtmlPanel;
