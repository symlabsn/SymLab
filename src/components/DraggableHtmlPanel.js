'use client';
import React, { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

// Composant Panneau Draggable COMPLÈTEMENT DÉTACHÉ de la scène 3D
// Utilise un portail React pour être rendu en dehors du Canvas Three.js
const DraggableHtmlPanel = ({ children, title, className = "", initialPos = null }) => {
    const [mounted, setMounted] = useState(false);
    const [position, setPosition] = useState(() => {
        if (initialPos) return initialPos;
        // Par défaut en bas à droite de l'écran
        if (typeof window !== 'undefined') {
            const x = window.innerWidth > 768 ? window.innerWidth - 380 : 10;
            const y = window.innerHeight > 600 ? 100 : 60;
            return { x, y };
        }
        return { x: 20, y: 100 };
    });
    const [isDragging, setIsDragging] = useState(false);
    const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
    const [isMinimized, setIsMinimized] = useState(false);
    const [isClosed, setIsClosed] = useState(false);
    const panelRef = useRef(null);

    // Monter le composant côté client uniquement
    useEffect(() => {
        setMounted(true);
    }, []);

    const handleMouseDown = (e) => {
        if (e.target.closest('.no-drag')) return;
        e.preventDefault();
        e.stopPropagation();
        setIsDragging(true);
        setDragStart({
            x: e.clientX - position.x,
            y: e.clientY - position.y
        });
    };

    const handleMouseMove = (e) => {
        if (!isDragging) return;
        e.preventDefault();

        // Limiter le panneau dans les limites de l'écran
        const newX = Math.max(0, Math.min(window.innerWidth - 100, e.clientX - dragStart.x));
        const newY = Math.max(0, Math.min(window.innerHeight - 50, e.clientY - dragStart.y));

        setPosition({ x: newX, y: newY });
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    const handleTouchStart = (e) => {
        if (e.target.closest('.no-drag')) return;
        const touch = e.touches[0];
        setIsDragging(true);
        setDragStart({
            x: touch.clientX - position.x,
            y: touch.clientY - position.y
        });
    };

    const handleTouchMove = (e) => {
        if (!isDragging) return;
        const touch = e.touches[0];

        // Limiter le panneau dans les limites de l'écran
        const newX = Math.max(0, Math.min(window.innerWidth - 100, touch.clientX - dragStart.x));
        const newY = Math.max(0, Math.min(window.innerHeight - 50, touch.clientY - dragStart.y));

        setPosition({ x: newX, y: newY });
    };

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
    }, [isDragging, dragStart]);

    // Ne pas rendre tant que le client n'est pas monté ou si fermé
    if (!mounted || isClosed) return null;

    const panelContent = (
        <div
            ref={panelRef}
            className={`fixed bg-black/95 backdrop-blur-xl rounded-xl border border-white/30 shadow-2xl overflow-hidden transition-all duration-200 z-[9999] ${isDragging ? 'scale-[1.02] shadow-[0_0_30px_rgba(0,245,212,0.3)] cursor-grabbing' : ''} ${className}`}
            style={{
                left: `${position.x}px`,
                top: `${position.y}px`,
                minWidth: isMinimized ? '150px' : '240px',
                maxWidth: '380px',
                pointerEvents: 'auto',
                userSelect: isDragging ? 'none' : 'auto'
            }}
            onMouseDown={(e) => e.stopPropagation()}
        >
            {/* Header draggable */}
            <div
                className="flex items-center justify-between px-3 py-2 bg-gradient-to-r from-[#00F5D4]/30 to-purple-500/30 border-b border-white/20 cursor-grab active:cursor-grabbing select-none"
                onMouseDown={handleMouseDown}
                onTouchStart={handleTouchStart}
            >
                <span className="text-sm font-bold text-[#00F5D4] flex items-center gap-1.5">
                    <span className="text-base">☰</span>
                    {title || 'Contrôles'}
                </span>
                <div className="flex items-center gap-1">
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
                        onClick={() => setIsClosed(true)}
                        className="no-drag w-6 h-6 rounded bg-red-500/20 hover:bg-red-500/40 flex items-center justify-center text-xs text-red-400 transition-all"
                        title="Fermer"
                    >
                        ✕
                    </button>
                </div>
            </div>

            {/* Contenu (caché si minimisé) */}
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

    // Utiliser un portail pour rendre le panneau directement dans le body
    // Cela le détache complètement du Canvas Three.js
    return createPortal(panelContent, document.body);
};

export default DraggableHtmlPanel;
