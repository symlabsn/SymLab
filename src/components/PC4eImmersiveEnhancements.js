'use client';
import { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';
import { Text, Html, Float, Sphere, Box, Cylinder } from '@react-three/drei';
import DraggableHtmlPanel from './DraggableHtmlPanel';
import { SuccessOverlay, ConfettiExplosion, GradeBadge, XPBar, PhaseSelector, MissionObjective, ChallengeTimer } from './GamificationUtils';

// ============================================================
// COMPOSANTS UI MOBILES AMÉLIORÉS POUR PC 4E
// ============================================================

/**
 * Panneau adaptatif mobile - Remplace le DraggableHtmlPanel 
 * sur écrans tactiles avec un Bottom Sheet natif
 */
export function MobileAdaptivePanel({ children, title, className = '', themeColor = '#00F5D4', icon = '🔬' }) {
    const [isMobile, setIsMobile] = useState(false);
    const [isExpanded, setIsExpanded] = useState(true);
    const [sheetHeight, setSheetHeight] = useState('auto');

    useEffect(() => {
        const check = () => setIsMobile(window.innerWidth < 768);
        check();
        window.addEventListener('resize', check);
        return () => window.removeEventListener('resize', check);
    }, []);

    if (isMobile) {
        return (
            <Html transform={false} zIndexRange={[100, 0]}>
                <div className={`fixed bottom-0 left-0 right-0 z-[9998] transition-all duration-300 ${isExpanded ? 'max-h-[75vh]' : 'max-h-[60px]'}`}>
                    {/* Semi-transparent backdrop */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/98 via-black/95 to-black/80 backdrop-blur-2xl rounded-t-3xl" />
                    
                    {/* Content */}
                    <div className="relative">
                        {/* Drag Handle + Header */}
                        <div 
                            className="flex flex-col items-center pt-2 pb-3 cursor-pointer"
                            onClick={() => setIsExpanded(!isExpanded)}
                        >
                            <div className="w-10 h-1.5 rounded-full bg-white/30 mb-3" />
                            <div className="flex items-center justify-between w-full px-4">
                                <div className="flex items-center gap-2">
                                    <div className="w-8 h-8 rounded-xl flex items-center justify-center text-lg" 
                                         style={{ background: `${themeColor}20`, border: `1px solid ${themeColor}40` }}>
                                        {icon}
                                    </div>
                                    <span className="font-bold text-white text-sm">{title}</span>
                                </div>
                                <div className="text-lg text-white/50 transition-transform" 
                                     style={{ transform: isExpanded ? 'rotate(180deg)' : 'rotate(0)' }}>
                                    ▴
                                </div>
                            </div>
                        </div>

                        {/* Scrollable Content */}
                        {isExpanded && (
                            <div className="px-4 pb-8 overflow-y-auto max-h-[60vh] custom-scrollbar">
                                <div className={className}>
                                    {children}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </Html>
        );
    }

    // Desktop: use existing DraggableHtmlPanel
    return (
        <Html transform={false}>
            <DraggableHtmlPanel title={`${icon} ${title}`} showCloseButton={false} defaultPosition="bottom-center" className={`w-[420px] ${className}`}>
                {children}
            </DraggableHtmlPanel>
        </Html>
    );
}

// ============================================================
// SCÉNARIOS NARRATIFS SÉNÉGALAIS
// ============================================================

/**
 * Intro narrative immersive avec contexte local
 */
export function StoryIntro({ scenario, onStart, onSkip }) {
    return (
        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-black/80 via-gray-900/90 to-black/80 p-5 mb-4">
            {/* Effet holographique */}
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent animate-pulse" />
            
            <div className="flex items-start gap-3 mb-4">
                <div className="text-3xl flex-shrink-0 animate-bounce">{scenario.icon}</div>
                <div>
                    <div className="text-[9px] font-bold text-cyan-400 uppercase tracking-[0.2em] mb-0.5">
                        Mission de Terrain
                    </div>
                    <h3 className="text-lg font-black text-white leading-tight">{scenario.title}</h3>
                </div>
            </div>

            <p className="text-sm text-gray-300 leading-relaxed mb-4 italic">
                &ldquo;{scenario.story}&rdquo;
            </p>

            {/* Objectifs */}
            <div className="space-y-2 mb-4">
                {scenario.objectives?.map((obj, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-gray-400">
                        <div className="w-5 h-5 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[9px]">
                            {i + 1}
                        </div>
                        <span>{obj}</span>
                    </div>
                ))}
            </div>

            <div className="flex gap-2">
                <button 
                    onClick={onStart}
                    className="flex-1 py-3 px-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-black text-sm flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-95 transition-all shadow-lg shadow-cyan-500/20"
                >
                    🚀 Commencer la Mission
                </button>
                <button 
                    onClick={onSkip}
                    className="py-3 px-4 rounded-xl bg-white/5 border border-white/10 text-gray-400 text-xs font-bold hover:bg-white/10 transition-all"
                >
                    Passer
                </button>
            </div>
        </div>
    );
}

/**
 * Indices contextuels sénégalais
 */
export function LocalContextHint({ hint, isVisible }) {
    if (!isVisible) return null;
    return (
        <div className="relative overflow-hidden rounded-xl border border-emerald-500/20 bg-gradient-to-r from-emerald-500/10 to-green-500/5 p-3 mb-3 animate-in slide-in-from-bottom-2 duration-300">
            <div className="flex items-start gap-2">
                <span className="text-lg flex-shrink-0">🇸🇳</span>
                <div>
                    <div className="text-[8px] font-bold text-emerald-400 uppercase tracking-wider mb-0.5">
                        Analogie Locale
                    </div>
                    <p className="text-xs text-emerald-100/80 leading-relaxed">{hint}</p>
                </div>
            </div>
        </div>
    );
}

/**
 * Feedback de progression multi-niveaux
 */
export function ProgressionFeedback({ level, xp, maxXp, streak, achievements }) {
    const progress = Math.min(100, (xp / maxXp) * 100);
    const levels = [
        { name: 'Débutant', icon: '🌱', min: 0, color: '#4ade80' },
        { name: 'Explorateur', icon: '🔍', min: 100, color: '#22d3ee' },
        { name: 'Scientifique', icon: '🔬', min: 300, color: '#818cf8' },
        { name: 'Expert', icon: '🧠', min: 600, color: '#f59e0b' },
        { name: 'Maître', icon: '👑', min: 1000, color: '#ef4444' }
    ];

    const currentLevel = [...levels].reverse().find(l => xp >= l.min) || levels[0];
    const nextLevel = levels[levels.indexOf(currentLevel) + 1];

    return (
        <div className="space-y-3 mb-4">
            {/* Level & XP */}
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center text-lg"
                         style={{ background: `${currentLevel.color}20`, border: `1px solid ${currentLevel.color}40` }}>
                        {currentLevel.icon}
                    </div>
                    <div>
                        <div className="text-xs font-black text-white">{currentLevel.name}</div>
                        <div className="text-[9px] text-gray-500">{xp} XP</div>
                    </div>
                </div>
                {streak > 1 && (
                    <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-orange-500/20 border border-orange-500/30">
                        <span className="text-xs">🔥</span>
                        <span className="text-[10px] font-bold text-orange-400">{streak}x</span>
                    </div>
                )}
            </div>

            {/* XP Bar */}
            <div className="relative">
                <div className="flex justify-between text-[8px] text-gray-500 mb-1 font-mono">
                    <span>{currentLevel.name}</span>
                    <span>{nextLevel ? nextLevel.name : 'MAX'}</span>
                </div>
                <div className="w-full h-2 bg-gray-800/80 rounded-full overflow-hidden border border-white/5">
                    <div 
                        className="h-full rounded-full transition-all duration-1000 relative overflow-hidden"
                        style={{ 
                            width: `${progress}%`,
                            background: `linear-gradient(90deg, ${currentLevel.color}, ${nextLevel?.color || currentLevel.color})`
                        }}
                    >
                        {/* Shimmer effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer" />
                    </div>
                </div>
            </div>

            {/* Quick Achievements */}
            {achievements && achievements.length > 0 && (
                <div className="flex gap-1 flex-wrap">
                    {achievements.slice(0, 5).map((a, i) => (
                        <div key={i} className="px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-[8px] text-gray-400 font-bold">
                            {a.icon} {a.name}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

/**
 * Boutons de contrôle tactiles améliorés (plus grands sur mobile)
 */
export function TouchFriendlyControls({ controls, layout = 'grid' }) {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const check = () => setIsMobile(window.innerWidth < 768);
        check();
        window.addEventListener('resize', check);
        return () => window.removeEventListener('resize', check);
    }, []);

    const btnSize = isMobile ? 'min-h-[52px] text-sm' : 'min-h-[36px] text-[10px]';
    const gridCols = layout === 'grid' 
        ? (isMobile ? 'grid-cols-2' : 'grid-cols-2') 
        : 'grid-cols-1';

    return (
        <div className={`grid ${gridCols} gap-2`}>
            {controls.map((ctrl, i) => (
                <button
                    key={i}
                    onClick={ctrl.onClick}
                    disabled={ctrl.disabled}
                    className={`
                        ${btnSize} px-3 rounded-xl font-bold transition-all
                        flex items-center justify-center gap-2
                        active:scale-95
                        ${ctrl.active 
                            ? `text-black shadow-lg` 
                            : 'bg-gray-800/50 border border-white/10 text-gray-300 hover:bg-gray-700/50'
                        }
                        ${ctrl.disabled ? 'opacity-40 cursor-not-allowed' : ''}
                    `}
                    style={ctrl.active ? { 
                        background: `linear-gradient(135deg, ${ctrl.color || '#00F5D4'}, ${ctrl.colorEnd || ctrl.color || '#00D9B8'})`,
                        boxShadow: `0 4px 15px ${ctrl.color || '#00F5D4'}30`
                    } : {}}
                >
                    {ctrl.icon && <span className={isMobile ? 'text-xl' : 'text-base'}>{ctrl.icon}</span>}
                    <span className="truncate">{ctrl.label}</span>
                </button>
            ))}
        </div>
    );
}

/**
 * Slider tactile amélioré avec label et valeur intégrés
 */
export function EnhancedSlider({ label, value, onChange, min, max, step, unit, color = '#00F5D4', icon }) {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const check = () => setIsMobile(window.innerWidth < 768);
        check();
        window.addEventListener('resize', check);
        return () => window.removeEventListener('resize', check);
    }, []);

    const progress = ((value - min) / (max - min)) * 100;

    return (
        <div className="bg-gray-900/50 p-3 rounded-xl border border-white/5">
            <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-1.5">
                    {icon && <span className="text-sm">{icon}</span>}
                    <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">{label}</span>
                </div>
                <div className="text-right">
                    <span className="text-lg font-black font-mono" style={{ color }}>{typeof value === 'number' ? (step < 1 ? value.toFixed(1) : value) : value}</span>
                    {unit && <span className="text-[10px] text-gray-500 ml-1">{unit}</span>}
                </div>
            </div>
            <input
                type="range"
                min={min}
                max={max}
                step={step}
                value={value}
                onChange={(e) => onChange(Number(e.target.value))}
                className={`w-full rounded-lg appearance-none cursor-pointer ${isMobile ? 'h-3' : 'h-1.5'}`}
                style={{
                    background: `linear-gradient(to right, ${color} 0%, ${color} ${progress}%, #374151 ${progress}%, #374151 100%)`
                }}
            />
        </div>
    );
}

/**
 * Carte de données en temps réel avec animation
 */
export function LiveDataCard({ label, value, unit, icon, color = '#00F5D4', trend, precision = 1 }) {
    const [displayValue, setDisplayValue] = useState(value);
    const [isAnimating, setIsAnimating] = useState(false);

    useEffect(() => {
        setIsAnimating(true);
        const timer = setTimeout(() => {
            setDisplayValue(value);
            setIsAnimating(false);
        }, 150);
        return () => clearTimeout(timer);
    }, [value]);

    return (
        <div className="bg-gray-900/60 rounded-xl p-3 border border-white/5 relative overflow-hidden">
            {/* Glow effect */}
            <div className="absolute inset-0 opacity-5" style={{ background: `radial-gradient(circle at center, ${color}, transparent 70%)` }} />
            
            <div className="relative">
                <div className="flex items-center gap-1 mb-1">
                    {icon && <span className="text-sm">{icon}</span>}
                    <span className="text-[8px] text-gray-500 font-bold uppercase tracking-wider">{label}</span>
                </div>
                <div className={`flex items-baseline gap-1 transition-all duration-150 ${isAnimating ? 'scale-105' : 'scale-100'}`}>
                    <span className="text-xl font-black font-mono" style={{ color }}>
                        {typeof displayValue === 'number' ? displayValue.toFixed(precision) : displayValue}
                    </span>
                    {unit && <span className="text-[10px] text-gray-500 font-bold">{unit}</span>}
                </div>
                {trend !== undefined && (
                    <div className={`text-[8px] font-bold mt-0.5 ${trend > 0 ? 'text-green-400' : trend < 0 ? 'text-red-400' : 'text-gray-500'}`}>
                        {trend > 0 ? '▲' : trend < 0 ? '▼' : '—'} {Math.abs(trend).toFixed(1)}%
                    </div>
                )}
            </div>
        </div>
    );
}

/**
 * Mini-graphique temps réel
 */
export function MiniGraph({ data, color = '#00F5D4', height = 40, label }) {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas || !data || data.length < 2) return;

        const ctx = canvas.getContext('2d');
        const w = canvas.width;
        const h = canvas.height;
        
        ctx.clearRect(0, 0, w, h);
        
        const maxVal = Math.max(...data) || 1;
        const minVal = Math.min(...data);
        const range = Math.max(maxVal - minVal, 0.01);

        // Fill gradient
        const gradient = ctx.createLinearGradient(0, 0, 0, h);
        gradient.addColorStop(0, color + '40');
        gradient.addColorStop(1, color + '05');

        ctx.beginPath();
        ctx.moveTo(0, h);
        
        data.forEach((v, i) => {
            const x = (i / (data.length - 1)) * w;
            const y = h - ((v - minVal) / range) * h * 0.8 - h * 0.1;
            if (i === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
        });

        ctx.lineTo(w, h);
        ctx.lineTo(0, h);
        ctx.fillStyle = gradient;
        ctx.fill();

        // Line
        ctx.beginPath();
        data.forEach((v, i) => {
            const x = (i / (data.length - 1)) * w;
            const y = h - ((v - minVal) / range) * h * 0.8 - h * 0.1;
            if (i === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
        });
        ctx.strokeStyle = color;
        ctx.lineWidth = 2;
        ctx.stroke();

        // Current point
        const lastY = h - ((data[data.length - 1] - minVal) / range) * h * 0.8 - h * 0.1;
        ctx.beginPath();
        ctx.arc(w, lastY, 3, 0, Math.PI * 2);
        ctx.fillStyle = color;
        ctx.fill();
    }, [data, color]);

    return (
        <div className="bg-gray-900/40 rounded-lg p-2 border border-white/5">
            {label && <div className="text-[8px] text-gray-500 font-bold uppercase tracking-wider mb-1">{label}</div>}
            <canvas ref={canvasRef} width={200} height={height} className="w-full" style={{ height: `${height}px` }} />
        </div>
    );
}

// ============================================================
// SCÉNARIOS PC 4E ENRICHIS AVEC CONTEXTE SÉNÉGALAIS
// ============================================================

export const SCENARIOS_PC4E = {
    // Chapitre 1 - Démarche scientifique
    ch1_marche: {
        id: 'marche-sandaga',
        title: 'Le Mystère du Marché Sandaga',
        icon: '🏪',
        story: "Au marché Sandaga, Mamadou remarque que l'eau qui coule d'un étalage de poissons forme des arcs-en-ciel au soleil. Pourquoi la lumière se décompose-t-elle en couleurs ?",
        objectives: ['Observer le phénomène au marché', 'Formuler une hypothèse', 'Réaliser une expérience de décomposition', 'Conclure sur la réfraction'],
        difficulty: 1,
        xpReward: 100
    },
    ch1_pluie: {
        id: 'pluie-dakar',
        title: 'L\'Énigme de la Pluie',
        icon: '🌧️',
        story: "Pendant la saison des pluies à Dakar, Fatou observe que les flaques d'eau créent des reflets colorés. Est-ce de la pollution ou un phénomène physique ?",
        objectives: ['Observer les flaques', 'Hypothèse sur les films minces', 'Tester avec de l\'huile', 'Conclure sur l\'interférence'],
        difficulty: 2,
        xpReward: 150
    },

    // Chapitre 3 - Densité
    ch3_pirogue: {
        id: 'pirogue-kayar',
        title: 'La Pirogue de Kayar',
        icon: '⛵',
        story: "À Kayar, les pêcheurs chargent leurs pirogues de poissons avant de partir en mer. Ibrahima se demande pourquoi la pirogue s'enfonce plus quand elle est chargée mais ne coule pas. Comment les pêcheurs savent-ils quand la charge est trop lourde ?",
        objectives: ['Peser la pirogue à vide', 'Ajouter du chargement progressivement', 'Mesurer la ligne de flottaison', 'Déterminer la charge maximale'],
        difficulty: 2,
        xpReward: 200
    },
    ch3_thieboudienne: {
        id: 'cuisine-densite',
        title: 'Les Couches du Thiéboudienne',
        icon: '🍛',
        story: "En préparant le Thiéboudienne, Maman Astou verse de l'huile dans l'eau chaude. L'huile reste toujours au-dessus ! Pourquoi certains liquides refusent-ils de se mélanger ?",
        objectives: ['Observer le comportement huile-eau', 'Mesurer les densités', 'Tester avec d\'autres liquides', 'Classer par densité'],
        difficulty: 1,
        xpReward: 100
    },

    // Chapitre 4 - Poids et Masse
    ch4_lutteur: {
        id: 'lutte-poids',
        title: 'Le Champion de Lutte',
        icon: '🤼',
        story: "Le champion de lutte Modou Lô pèse 120 kg à Dakar. Combien pèserait-il sur la Lune ? Sur Mars ? Et dans la Station Spatiale ? Sa masse change-t-elle ?",
        objectives: ['Mesurer la masse du champion', 'Calculer le poids sur différentes planètes', 'Comprendre la différence masse/poids', 'Prédire le poids en apesanteur'],
        difficulty: 2,
        xpReward: 150
    },

    // Chapitre 9 - Séparation des mélanges
    ch9_eau_puits: {
        id: 'eau-potable',
        title: 'L\'Eau du Puits de Mbour',
        icon: '💧',
        story: "Dans le village de Mbour, l'eau du puits est trouble et sableuse. Awa doit la rendre potable pour sa famille. Quelles techniques de séparation peut-elle utiliser ?",
        objectives: ['Analyser l\'eau trouble', 'Tester la décantation', 'Appliquer la filtration', 'Vérifier la pureté finale'],
        difficulty: 1,
        xpReward: 100
    },
    ch9_sel_lac_rose: {
        id: 'sel-lac-rose',
        title: 'Le Sel du Lac Rose',
        icon: '🏖️',
        story: "Au Lac Rose (Lac Retba), les travailleurs récoltent le sel en faisant évaporer l'eau extrêmement salée. Comment ce processus fonctionne-t-il exactement ?",
        objectives: ['Observer l\'eau hypersalée', 'Mesurer la concentration', 'Lancer l\'évaporation solaire', 'Récolter les cristaux de sel'],
        difficulty: 2,
        xpReward: 200
    },

    // Chapitre 10 - Atomes
    ch10_bijoux: {
        id: 'bijoux-or',
        title: 'L\'Or du Bijoutier',
        icon: '💍',
        story: "Le bijoutier de la Médina travaille l'or pour créer des bijoux magnifiques. De quoi est fait cet or au niveau atomique ? Pourquoi est-il si dense et brillant ?",
        objectives: ['Explorer l\'atome d\'or (Au)', 'Compter protons/neutrons/électrons', 'Comprendre les couches électroniques', 'Construire un isotope'],
        difficulty: 3,
        xpReward: 250
    },

    // Électricité
    ch_elec_quartier: {
        id: 'electricite-quartier',
        title: 'La Panne du Quartier',
        icon: '⚡',
        story: "Le courant vient de couper dans tout le quartier ! M. Diallo, l'électricien, doit diagnostiquer la panne. Est-ce un court-circuit, un fusible grillé, ou un problème de réseau ?",
        objectives: ['Vérifier le disjoncteur', 'Identifier le type de panne', 'Réparer le circuit', 'Rétablir le courant'],
        difficulty: 2,
        xpReward: 150
    },

    // Optique
    ch_optique_phare: {
        id: 'phare-almadies',
        title: 'Le Phare des Almadies',
        icon: '🏮',
        story: "Le Phare des Almadies, le point le plus à l'ouest de l'Afrique, guide les bateaux la nuit. Comment son faisceau lumineux se propage-t-il en ligne droite à travers la brume ?",
        objectives: ['Étudier la propagation rectiligne', 'Aligner les faisceaux', 'Gérer les obstacles', 'Atteindre la cible en mer'],
        difficulty: 2,
        xpReward: 200
    }
};

/**
 * Système de vibration haptique (mobile)
 */
export function hapticFeedback(type = 'light') {
    if (typeof navigator !== 'undefined' && navigator.vibrate) {
        switch (type) {
            case 'light': navigator.vibrate(10); break;
            case 'medium': navigator.vibrate(25); break;
            case 'heavy': navigator.vibrate(50); break;
            case 'success': navigator.vibrate([10, 50, 10, 50, 10]); break;
            case 'error': navigator.vibrate([50, 100, 50]); break;
            case 'warning': navigator.vibrate([30, 60, 30]); break;
        }
    }
}

/**
 * Hook personnalisé de gestion de progression
 */
export function useSimulationProgress(initialXp = 0) {
    const [xp, setXp] = useState(initialXp);
    const [streak, setStreak] = useState(0);
    const [achievements, setAchievements] = useState([]);
    const [history, setHistory] = useState([]);

    const addXp = useCallback((points, reason) => {
        const multiplier = 1 + (streak * 0.1); // 10% bonus per streak
        const actual = Math.floor(points * multiplier);
        setXp(prev => prev + actual);
        setStreak(prev => prev + 1);
        setHistory(prev => [...prev.slice(-20), { points: actual, reason, time: Date.now() }]);
        hapticFeedback('success');
        
        return actual;
    }, [streak]);

    const resetStreak = useCallback(() => {
        setStreak(0);
        hapticFeedback('error');
    }, []);

    const unlockAchievement = useCallback((achievement) => {
        setAchievements(prev => {
            if (prev.find(a => a.id === achievement.id)) return prev;
            hapticFeedback('success');
            return [...prev, { ...achievement, unlockedAt: Date.now() }];
        });
    }, []);

    return { xp, streak, achievements, history, addXp, resetStreak, unlockAchievement };
}

// ============================================================
// EFFETS VISUELS 3D AMÉLIORÉS
// ============================================================

/**
 * Effet de glow pulsant autour d'un objet
 */
export function PulsingGlow({ color = '#00F5D4', intensity = 1, radius = 2 }) {
    const lightRef = useRef();
    
    useFrame(({ clock }) => {
        if (lightRef.current) {
            const pulse = Math.sin(clock.elapsedTime * 2) * 0.5 + 0.5;
            lightRef.current.intensity = intensity * (0.5 + pulse * 0.5);
        }
    });

    return <pointLight ref={lightRef} color={color} intensity={intensity} distance={radius} />;
}

/**
 * Particules ambiantes pour le laboratoire
 */
export function LabAmbientParticles({ count = 50, color = '#00F5D4', range = 8 }) {
    const pointsRef = useRef();

    // Initialize positions and velocities synchronously so they're ready before first useFrame
    const { positions, velocities } = useMemo(() => {
        const pos = new Float32Array(count * 3);
        const vel = [];
        for (let i = 0; i < count; i++) {
            pos[i * 3] = (Math.random() - 0.5) * range;
            pos[i * 3 + 1] = (Math.random() - 0.5) * range;
            pos[i * 3 + 2] = (Math.random() - 0.5) * range;
            vel.push({
                vx: (Math.random() - 0.5) * 0.005,
                vy: (Math.random() - 0.5) * 0.005 + 0.002,
                vz: (Math.random() - 0.5) * 0.005
            });
        }
        return { positions: pos, velocities: vel };
    }, [count, range]);

    useFrame(() => {
        if (!pointsRef.current || !pointsRef.current.geometry?.attributes?.position) return;
        const pos = pointsRef.current.geometry.attributes.position;
        
        for (let i = 0; i < count; i++) {
            const v = velocities[i];
            if (!v) continue;
            pos.array[i * 3] += v.vx;
            pos.array[i * 3 + 1] += v.vy;
            pos.array[i * 3 + 2] += v.vz;

            // Reset si hors limites
            if (Math.abs(pos.array[i * 3 + 1]) > range / 2) {
                pos.array[i * 3] = (Math.random() - 0.5) * range;
                pos.array[i * 3 + 1] = -range / 2;
                pos.array[i * 3 + 2] = (Math.random() - 0.5) * range;
            }
        }
        pos.needsUpdate = true;
    });

    return (
        <points ref={pointsRef}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    count={count}
                    array={positions}
                    itemSize={3}
                />
            </bufferGeometry>
            <pointsMaterial size={0.03} color={color} transparent opacity={0.4} sizeAttenuation />
        </points>
    );
}

/**
 * Animation de succès en 3D améliorée
 */
export function EnhancedSuccessEffect({ active }) {
    const ringRef = useRef();
    
    useFrame(({ clock }) => {
        if (ringRef.current && active) {
            const t = clock.elapsedTime;
            ringRef.current.rotation.z = t;
            ringRef.current.scale.setScalar(1 + Math.sin(t * 3) * 0.1);
        }
    });

    if (!active) return null;

    return (
        <group>
            <ConfettiExplosion active={active} />
            {/* Golden ring */}
            <mesh ref={ringRef}>
                <torusGeometry args={[3, 0.05, 16, 100]} />
                <meshBasicMaterial color="#FFD700" transparent opacity={0.6} />
            </mesh>
            {/* Starburst light */}
            <pointLight color="#FFD700" intensity={3} distance={8} decay={2} />
        </group>
    );
}

/**
 * Indicateur de direction 3D (flèche pour guider l'utilisateur)
 */
export function DirectionIndicator({ target, color = '#00F5D4', label }) {
    const arrowRef = useRef();
    
    useFrame(({ clock }) => {
        if (arrowRef.current) {
            arrowRef.current.position.y = Math.sin(clock.elapsedTime * 2) * 0.2 + target[1] + 1.5;
        }
    });

    return (
        <group ref={arrowRef} position={[target[0], target[1] + 1.5, target[2]]}>
            <mesh rotation={[0, 0, Math.PI]}>
                <coneGeometry args={[0.15, 0.4, 8]} />
                <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.5} />
            </mesh>
            {label && (
                <Text position={[0, 0.5, 0]} fontSize={0.15} color={color} anchorX="center">
                    {label}
                </Text>
            )}
        </group>
    );
}
