'use client';
import React, { useState, useEffect, useRef } from 'react';

// Composant Panneau Draggable pour l'intérieur des simulations 3D (via Html de drei)
const DraggableHtmlPanel = ({ children, title, className = "", initialPos = null }) => {
    const [position, setPosition] = useState(() => {
        if (initialPos) return initialPos;
        // Par défaut sur le côté droit pour ne pas gêner
        if (typeof window !== 'undefined' && window.innerWidth > 1024) {
            return { x: 350, y: 150 };
        }
        return { x: 0, y: 0 };
    });
    const [isDragging, setIsDragging] = useState(false);
    const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
    const [isMinimized, setIsMinimized] = useState(false);
    const panelRef = useRef(null);

    const handleMouseDown = (e) => {
        if (e.target.closest('.no-drag')) return;
        e.stopPropagation();
        setIsDragging(true);
        setDragStart({
            x: e.clientX - position.x,
            y: e.clientY - position.y
        });
    };

    const handleMouseMove = (e) => {
        if (!isDragging) return;
        e.stopPropagation();
        setPosition({
            x: e.clientX - dragStart.x,
            y: e.clientY - dragStart.y
        });
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
        setPosition({
            x: touch.clientX - dragStart.x,
            y: touch.clientY - dragStart.y
        });
    };

    useEffect(() => {
        if (isDragging) {
            window.addEventListener('mousemove', handleMouseMove);
            window.addEventListener('mouseup', handleMouseUp);
            window.addEventListener('touchmove', handleTouchMove);
            window.addEventListener('touchend', handleMouseUp);
        }
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseup', handleMouseUp);
            window.removeEventListener('touchmove', handleTouchMove);
            window.removeEventListener('touchend', handleMouseUp);
        };
    }, [isDragging, dragStart]);

    return (
        <div
            ref={panelRef}
            className={`bg-black/95 backdrop-blur-xl rounded-xl border border-white/30 shadow-2xl overflow-hidden transition-all duration-200 ${isDragging ? 'scale-[1.02] shadow-[0_0_30px_rgba(0,245,212,0.3)]' : ''} ${className}`}
            style={{
                transform: `translate(${position.x}px, ${position.y}px)`,
                minWidth: isMinimized ? '150px' : '220px',
                maxWidth: '350px',
                pointerEvents: 'auto'
            }}
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
                <button
                    onClick={() => setIsMinimized(!isMinimized)}
                    className="no-drag w-6 h-6 rounded bg-white/10 hover:bg-white/20 flex items-center justify-center text-xs transition-all"
                >
                    {isMinimized ? '□' : '_'}
                </button>
            </div>

            {/* Contenu (caché si minimisé) */}
            {!isMinimized && (
                <div className="p-3 max-h-[60vh] overflow-y-auto no-drag custom-scrollbar">
                    {children}
                </div>
            )}
        </div>
    );
};

export default DraggableHtmlPanel;
