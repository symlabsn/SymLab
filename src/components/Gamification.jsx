'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

// Système de points et niveaux
const LEVELS = [
    { level: 1, name: 'Débutant', minXP: 0, color: '#9CA3AF' },
    { level: 2, name: 'Curieux', minXP: 100, color: '#60A5FA' },
    { level: 3, name: 'Explorateur', minXP: 300, color: '#34D399' },
    { level: 4, name: 'Scientifique', minXP: 600, color: '#A78BFA' },
    { level: 5, name: 'Expert', minXP: 1000, color: '#F59E0B' },
    { level: 6, name: 'Maître', minXP: 1500, color: '#EF4444' },
    { level: 7, name: 'Génie', minXP: 2500, color: '#EC4899' },
    { level: 8, name: 'Légende', minXP: 4000, color: '#00F5D4' },
];

const ACHIEVEMENTS = [
    { id: 'first_sim', name: 'Premier Pas', desc: 'Complétez votre première simulation', icon: '🎯', xp: 50 },
    { id: 'quiz_master', name: 'Maître du Quiz', desc: 'Obtenez 100% à un quiz', icon: '🏆', xp: 100 },
    { id: 'explorer', name: 'Explorateur', desc: 'Visitez 10 simulations différentes', icon: '🧭', xp: 75 },
    { id: 'time_spent', name: 'Studieux', desc: 'Passez 1 heure sur les simulations', icon: '⏰', xp: 100 },
    { id: 'note_taker', name: 'Preneur de Notes', desc: 'Prenez 5 notes différentes', icon: '📝', xp: 50 },
    { id: 'streak_3', name: 'En Série', desc: '3 jours consécutifs d\'apprentissage', icon: '🔥', xp: 150 },
    { id: 'all_biology', name: 'Biologiste', desc: 'Complétez toutes les simulations SVT', icon: '🧬', xp: 200 },
    { id: 'all_physics', name: 'Physicien', desc: 'Complétez toutes les simulations Physique', icon: '⚛️', xp: 200 },
    { id: 'all_chemistry', name: 'Chimiste', desc: 'Complétez toutes les simulations Chimie', icon: '⚗️', xp: 200 },
];

// Hook pour gérer la gamification
export function useGamification() {
    const [userData, setUserData] = useState({
        xp: 0,
        achievements: [],
        simulationsCompleted: [],
        totalTimeSpent: 0,
        streak: 0,
        lastVisit: null,
    });

    useEffect(() => {
        const saved = localStorage.getItem('symlab_gamification');
        if (saved) {
            setUserData(JSON.parse(saved));
        }
    }, []);

    const saveData = (newData) => {
        setUserData(newData);
        localStorage.setItem('symlab_gamification', JSON.stringify(newData));
    };

    const addXP = (amount) => {
        const newData = { ...userData, xp: userData.xp + amount };
        saveData(newData);
        return newData.xp;
    };

    const unlockAchievement = (achievementId) => {
        if (userData.achievements.includes(achievementId)) return false;
        const achievement = ACHIEVEMENTS.find(a => a.id === achievementId);
        if (achievement) {
            const newData = {
                ...userData,
                achievements: [...userData.achievements, achievementId],
                xp: userData.xp + achievement.xp
            };
            saveData(newData);
            return achievement;
        }
        return false;
    };

    const completeSimulation = (simId) => {
        if (!userData.simulationsCompleted.includes(simId)) {
            const newData = {
                ...userData,
                simulationsCompleted: [...userData.simulationsCompleted, simId]
            };
            saveData(newData);
            if (newData.simulationsCompleted.length === 1) {
                unlockAchievement('first_sim');
            }
            if (newData.simulationsCompleted.length >= 10) {
                unlockAchievement('explorer');
            }
        }
    };

    const getCurrentLevel = () => {
        let currentLevel = LEVELS[0];
        for (const level of LEVELS) {
            if (userData.xp >= level.minXP) {
                currentLevel = level;
            }
        }
        return currentLevel;
    };

    const getNextLevel = () => {
        const current = getCurrentLevel();
        const nextIndex = LEVELS.findIndex(l => l.level === current.level) + 1;
        return LEVELS[nextIndex] || null;
    };

    const getProgress = () => {
        const current = getCurrentLevel();
        const next = getNextLevel();
        if (!next) return 100;
        const progressXP = userData.xp - current.minXP;
        const neededXP = next.minXP - current.minXP;
        return Math.round((progressXP / neededXP) * 100);
    };

    return {
        userData,
        addXP,
        unlockAchievement,
        completeSimulation,
        getCurrentLevel,
        getNextLevel,
        getProgress,
        ACHIEVEMENTS,
        LEVELS
    };
}

// Composant Barre de niveau
export function LevelBar({ xp, compact = false }) {
    const { getCurrentLevel, getNextLevel, getProgress } = useGamification();
    const current = getCurrentLevel();
    const next = getNextLevel();
    const progress = getProgress();

    if (compact) {
        return (
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20">
                <span className="text-lg">⭐</span>
                <span className="font-bold text-sm" style={{ color: current.color }}>
                    Niv. {current.level}
                </span>
                <div className="w-16 h-1.5 bg-gray-700 rounded-full overflow-hidden">
                    <div
                        className="h-full rounded-full transition-all duration-500"
                        style={{ width: `${progress}%`, backgroundColor: current.color }}
                    />
                </div>
            </div>
        );
    }

    return (
        <div className="p-4 rounded-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20">
            <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                    <div
                        className="w-12 h-12 rounded-full flex items-center justify-center text-2xl font-black"
                        style={{ backgroundColor: `${current.color}20`, color: current.color }}
                    >
                        {current.level}
                    </div>
                    <div>
                        <p className="font-bold text-white">{current.name}</p>
                        <p className="text-sm text-gray-400">{xp} XP total</p>
                    </div>
                </div>
                {next && (
                    <div className="text-right">
                        <p className="text-xs text-gray-400">Prochain niveau</p>
                        <p className="font-bold" style={{ color: next.color }}>{next.name}</p>
                    </div>
                )}
            </div>
            <div className="relative h-3 bg-gray-700 rounded-full overflow-hidden">
                <div
                    className="absolute h-full rounded-full transition-all duration-1000 ease-out"
                    style={{
                        width: `${progress}%`,
                        background: `linear-gradient(90deg, ${current.color}, ${next?.color || current.color})`
                    }}
                />
            </div>
            {next && (
                <p className="text-xs text-gray-400 mt-2 text-center">
                    {next.minXP - xp} XP restants pour {next.name}
                </p>
            )}
        </div>
    );
}

// Composant Badge Achievement
export function AchievementBadge({ achievement, unlocked = false, size = 'md' }) {
    const sizeClasses = {
        sm: 'w-12 h-12 text-xl',
        md: 'w-16 h-16 text-2xl',
        lg: 'w-20 h-20 text-3xl'
    };

    return (
        <div className={`relative group ${unlocked ? '' : 'grayscale opacity-50'}`}>
            <div className={`${sizeClasses[size]} rounded-xl flex items-center justify-center 
                ${unlocked
                    ? 'bg-gradient-to-br from-yellow-500/20 to-orange-500/20 border-2 border-yellow-500/50'
                    : 'bg-white/5 border border-white/10'
                } transition-all group-hover:scale-110`}
            >
                <span>{achievement.icon}</span>
            </div>
            {unlocked && (
                <div className="absolute -top-1 -right-1 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center text-xs">
                    ✓
                </div>
            )}
            <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-black/90 rounded-lg 
                opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-10">
                <p className="font-bold text-sm text-white">{achievement.name}</p>
                <p className="text-xs text-gray-400">{achievement.desc}</p>
                <p className="text-xs text-yellow-400">+{achievement.xp} XP</p>
            </div>
        </div>
    );
}

// Composant Toast de notification
export function AchievementToast({ achievement, onClose }) {
    useEffect(() => {
        const timer = setTimeout(onClose, 5000);
        return () => clearTimeout(timer);
    }, [onClose]);

    return (
        <div className="fixed bottom-4 right-4 z-50 animate-slide-in-bottom">
            <div className="p-4 rounded-2xl bg-gradient-to-r from-yellow-500/20 to-orange-500/20 
                border border-yellow-500/50 backdrop-blur-xl flex items-center gap-4 shadow-2xl">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-yellow-500 to-orange-500 
                    flex items-center justify-center text-3xl animate-bounce">
                    {achievement.icon}
                </div>
                <div>
                    <p className="text-yellow-400 text-sm font-bold">🏆 Succès débloqué !</p>
                    <p className="text-white font-bold text-lg">{achievement.name}</p>
                    <p className="text-gray-300 text-sm">{achievement.desc}</p>
                    <p className="text-yellow-400 text-sm font-bold">+{achievement.xp} XP</p>
                </div>
                <button onClick={onClose} className="text-gray-400 hover:text-white">✕</button>
            </div>
        </div>
    );
}

// Composant Grille d'achievements
export function AchievementsGrid({ unlockedIds = [] }) {
    return (
        <div className="p-6 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20">
            <h3 className="text-xl font-bold text-yellow-400 mb-4 flex items-center gap-2">
                <span>🏆</span> Succès
                <span className="text-sm text-gray-400 font-normal">
                    ({unlockedIds.length}/{ACHIEVEMENTS.length})
                </span>
            </h3>
            <div className="grid grid-cols-5 gap-3">
                {ACHIEVEMENTS.map(achievement => (
                    <AchievementBadge
                        key={achievement.id}
                        achievement={achievement}
                        unlocked={unlockedIds.includes(achievement.id)}
                        size="sm"
                    />
                ))}
            </div>
        </div>
    );
}

// Composant Stats rapides
export function QuickStats({ userData }) {
    return (
        <div className="grid grid-cols-4 gap-3">
            {[
                { icon: '⭐', value: userData.xp, label: 'XP Total' },
                { icon: '🎯', value: userData.simulationsCompleted?.length || 0, label: 'Simulations' },
                { icon: '🏆', value: userData.achievements?.length || 0, label: 'Succès' },
                { icon: '🔥', value: userData.streak || 0, label: 'Série' },
            ].map((stat, i) => (
                <div key={i} className="p-3 rounded-xl bg-white/5 border border-white/10 text-center">
                    <span className="text-2xl">{stat.icon}</span>
                    <p className="text-xl font-bold text-white">{stat.value}</p>
                    <p className="text-xs text-gray-400">{stat.label}</p>
                </div>
            ))}
        </div>
    );
}
