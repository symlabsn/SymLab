'use client';

import { useState } from 'react';
import { useAnalytics } from './AnalyticsProvider';

const niveauLabels = {
    '6eme': '6ème',
    '5eme': '5ème',
    '4eme': '4ème',
    '3eme': '3ème',
    '2nde': 'Seconde',
    '1ere': 'Première',
    'tle': 'Terminale',
    'etudiant': 'Étudiant',
    'enseignant': 'Enseignant',
    'autre': 'Autre',
};

const niveauColors = {
    '6eme': '#60A5FA',
    '5eme': '#34D399',
    '4eme': '#FBBF24',
    '3eme': '#F87171',
    '2nde': '#A78BFA',
    '1ere': '#FB923C',
    'tle': '#EC4899',
    'etudiant': '#00F5D4',
    'enseignant': '#14B8A6',
    'autre': '#9CA3AF',
};

export default function AnalyticsDashboard() {
    const { isRoot, analytics, getStats, clearAnalytics, loginAsRoot, logoutRoot } = useAnalytics();
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [showClearConfirm, setShowClearConfirm] = useState(false);
    const [activeTab, setActiveTab] = useState('overview');

    const stats = getStats();

    const handleLogin = (e) => {
        e.preventDefault();
        if (loginAsRoot(password)) {
            setError('');
            setPassword('');
        } else {
            setError('Mot de passe incorrect');
        }
    };

    const handleClear = () => {
        clearAnalytics();
        setShowClearConfirm(false);
    };

    const formatDuration = (seconds) => {
        if (seconds < 60) return `${seconds}s`;
        if (seconds < 3600) return `${Math.floor(seconds / 60)}m ${seconds % 60}s`;
        return `${Math.floor(seconds / 3600)}h ${Math.floor((seconds % 3600) / 60)}m`;
    };

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('fr-FR', {
            day: '2-digit',
            month: 'short',
            hour: '2-digit',
            minute: '2-digit',
        });
    };

    // Si pas connecté en root, afficher le formulaire de connexion
    if (!isRoot) {
        return (
            <div className="mt-16 p-8 rounded-3xl bg-gradient-to-br from-slate-900/80 to-slate-800/80 border border-white/10 backdrop-blur-xl">
                <div className="max-w-md mx-auto text-center">
                    <div className="text-5xl mb-4">📊</div>
                    <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#00F5D4] to-purple-500 mb-2">
                        Analytics Dashboard
                    </h3>
                    <p className="text-gray-400 mb-6">
                        Accès réservé à l&apos;administrateur
                    </p>

                    <form onSubmit={handleLogin} className="space-y-4">
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-[#00F5D4] focus:outline-none focus:ring-2 focus:ring-[#00F5D4]/20 transition-all text-center"
                            placeholder="Mot de passe admin"
                        />
                        {error && <p className="text-red-400 text-sm">{error}</p>}
                        <button
                            type="submit"
                            className="w-full px-6 py-3 rounded-xl bg-gradient-to-r from-[#00F5D4] to-purple-500 text-black font-bold hover:opacity-90 transition-all"
                        >
                            Accéder aux Analytics
                        </button>
                    </form>
                </div>
            </div>
        );
    }

    return (
        <div className="mt-16 space-y-6">
            {/* Header */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 p-6 rounded-2xl bg-gradient-to-r from-[#00F5D4]/10 to-purple-500/10 border border-white/10">
                <div>
                    <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                        📊 Analytics Dashboard
                        <span className="px-2 py-0.5 text-xs bg-green-500/20 text-green-400 rounded-full">
                            ADMIN
                        </span>
                    </h3>
                    <p className="text-gray-400 text-sm mt-1">
                        Vue d&apos;ensemble des utilisateurs et interactions
                    </p>
                </div>
                <div className="flex gap-2">
                    <button
                        onClick={() => setShowClearConfirm(true)}
                        className="px-4 py-2 rounded-lg bg-red-500/10 text-red-400 text-sm font-medium hover:bg-red-500/20 transition-all"
                    >
                        🗑️ Effacer
                    </button>
                    <button
                        onClick={logoutRoot}
                        className="px-4 py-2 rounded-lg bg-white/10 text-gray-400 text-sm font-medium hover:bg-white/20 transition-all"
                    >
                        Déconnexion
                    </button>
                </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="p-6 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-cyan-500/5 border border-cyan-500/20">
                    <div className="text-3xl mb-2">👥</div>
                    <div className="text-3xl font-bold text-white">{stats.uniqueUsers}</div>
                    <div className="text-sm text-gray-400">Utilisateurs uniques</div>
                </div>
                <div className="p-6 rounded-2xl bg-gradient-to-br from-purple-500/10 to-purple-500/5 border border-purple-500/20">
                    <div className="text-3xl mb-2">📈</div>
                    <div className="text-3xl font-bold text-white">{stats.totalSessions}</div>
                    <div className="text-sm text-gray-400">Sessions totales</div>
                </div>
                <div className="p-6 rounded-2xl bg-gradient-to-br from-pink-500/10 to-pink-500/5 border border-pink-500/20">
                    <div className="text-3xl mb-2">⏱️</div>
                    <div className="text-3xl font-bold text-white">{formatDuration(stats.avgDuration)}</div>
                    <div className="text-sm text-gray-400">Durée moyenne</div>
                </div>
                <div className="p-6 rounded-2xl bg-gradient-to-br from-green-500/10 to-green-500/5 border border-green-500/20">
                    <div className="text-3xl mb-2">⭐</div>
                    <div className="text-3xl font-bold text-white">
                        {analytics.filter(a => a.feedback?.rating).length}
                    </div>
                    <div className="text-sm text-gray-400">Feedbacks reçus</div>
                </div>
            </div>

            {/* Tabs */}
            <div className="flex gap-2 overflow-x-auto pb-2">
                {['overview', 'users', 'feedback'].map((tab) => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`px-4 py-2 rounded-lg font-medium text-sm whitespace-nowrap transition-all ${activeTab === tab
                            ? 'bg-[#00F5D4] text-black'
                            : 'bg-white/5 text-gray-400 hover:bg-white/10'
                            }`}
                    >
                        {tab === 'overview' && '📊 Vue d\'ensemble'}
                        {tab === 'users' && '👥 Utilisateurs'}
                        {tab === 'feedback' && '💬 Feedbacks'}
                    </button>
                ))}
            </div>

            {/* Content */}
            <div className="p-6 rounded-2xl bg-slate-900/50 border border-white/10">
                {activeTab === 'overview' && (
                    <div className="space-y-6">
                        {/* Répartition par niveau */}
                        <div>
                            <h4 className="text-lg font-bold text-white mb-4">Répartition par niveau</h4>
                            <div className="space-y-3">
                                {Object.entries(stats.levelCounts).sort((a, b) => b[1] - a[1]).map(([niveau, count]) => {
                                    const percentage = Math.round((count / stats.totalSessions) * 100) || 0;
                                    return (
                                        <div key={niveau} className="flex items-center gap-4">
                                            <div className="w-24 text-sm text-gray-400">{niveauLabels[niveau] || niveau}</div>
                                            <div className="flex-1 h-6 bg-white/5 rounded-full overflow-hidden">
                                                <div
                                                    className="h-full rounded-full transition-all duration-500"
                                                    style={{
                                                        width: `${percentage}%`,
                                                        backgroundColor: niveauColors[niveau] || '#00F5D4',
                                                    }}
                                                ></div>
                                            </div>
                                            <div className="w-16 text-right text-sm font-bold" style={{ color: niveauColors[niveau] || '#00F5D4' }}>
                                                {count} ({percentage}%)
                                            </div>
                                        </div>
                                    );
                                })}
                                {Object.keys(stats.levelCounts).length === 0 && (
                                    <p className="text-gray-500 text-center py-4">Aucune donnée disponible</p>
                                )}
                            </div>
                        </div>

                        {/* Visites récentes */}
                        <div>
                            <h4 className="text-lg font-bold text-white mb-4">Visites par jour</h4>
                            <div className="flex gap-2 flex-wrap">
                                {Object.entries(stats.dailyVisits).slice(-7).map(([date, count]) => (
                                    <div key={date} className="px-3 py-2 rounded-lg bg-white/5 text-center">
                                        <div className="text-lg font-bold text-[#00F5D4]">{count}</div>
                                        <div className="text-xs text-gray-500">{date.slice(5)}</div>
                                    </div>
                                ))}
                                {Object.keys(stats.dailyVisits).length === 0 && (
                                    <p className="text-gray-500">Aucune visite enregistrée</p>
                                )}
                            </div>
                        </div>
                    </div>
                )}

                {activeTab === 'users' && (
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                            <thead>
                                <tr className="border-b border-white/10">
                                    <th className="text-left py-3 px-2 text-gray-400 font-medium">Utilisateur</th>
                                    <th className="text-left py-3 px-2 text-gray-400 font-medium">Niveau</th>
                                    <th className="text-left py-3 px-2 text-gray-400 font-medium">Date</th>
                                    <th className="text-left py-3 px-2 text-gray-400 font-medium">Durée</th>
                                    <th className="text-left py-3 px-2 text-gray-400 font-medium">Appareil</th>
                                </tr>
                            </thead>
                            <tbody>
                                {stats.recentSessions.map((session, i) => (
                                    <tr key={i} className="border-b border-white/5 hover:bg-white/5">
                                        <td className="py-3 px-2 text-white">
                                            {session.user?.prenom} {session.user?.nom}
                                        </td>
                                        <td className="py-3 px-2">
                                            <span
                                                className="px-2 py-1 rounded-full text-xs font-medium"
                                                style={{
                                                    backgroundColor: `${niveauColors[session.user?.niveau] || '#00F5D4'}20`,
                                                    color: niveauColors[session.user?.niveau] || '#00F5D4',
                                                }}
                                            >
                                                {niveauLabels[session.user?.niveau] || session.user?.niveau}
                                            </span>
                                        </td>
                                        <td className="py-3 px-2 text-gray-400">{formatDate(session.date)}</td>
                                        <td className="py-3 px-2 text-gray-400">{formatDuration(session.duration || 0)}</td>
                                        <td className="py-3 px-2 text-gray-500 text-xs">{session.screenSize}</td>
                                    </tr>
                                ))}
                                {stats.recentSessions.length === 0 && (
                                    <tr>
                                        <td colSpan={5} className="py-8 text-center text-gray-500">
                                            Aucune session enregistrée
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                )}

                {activeTab === 'feedback' && (
                    <div className="space-y-4">
                        {analytics.filter(a => a.feedback).map((session, i) => (
                            <div key={i} className="p-4 rounded-xl bg-white/5 border border-white/10">
                                <div className="flex items-start justify-between mb-2">
                                    <div>
                                        <span className="font-bold text-white">{session.user?.prenom}</span>
                                        <span className="text-gray-500 ml-2 text-sm">
                                            {niveauLabels[session.user?.niveau] || session.user?.niveau}
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        {[1, 2, 3, 4, 5].map((star) => (
                                            <span
                                                key={star}
                                                className={star <= session.feedback.rating ? 'text-yellow-400' : 'text-gray-600'}
                                            >
                                                ★
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                {session.feedback.comment && (
                                    <p className="text-gray-300 text-sm italic">&quot;{session.feedback.comment}&quot;</p>
                                )}
                                <p className="text-gray-500 text-xs mt-2">{formatDate(session.feedback.submittedAt)}</p>
                            </div>
                        ))}
                        {analytics.filter(a => a.feedback).length === 0 && (
                            <p className="text-gray-500 text-center py-8">Aucun feedback reçu</p>
                        )}
                    </div>
                )}
            </div>

            {/* Confirmation de suppression */}
            {showClearConfirm && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xl">
                    <div className="bg-slate-900 p-6 rounded-2xl border border-white/10 max-w-sm">
                        <div className="text-4xl text-center mb-4">⚠️</div>
                        <h4 className="text-lg font-bold text-white text-center mb-2">Effacer toutes les analytics ?</h4>
                        <p className="text-gray-400 text-sm text-center mb-6">
                            Cette action est irréversible. Toutes les données seront supprimées.
                        </p>
                        <div className="flex gap-3">
                            <button
                                onClick={() => setShowClearConfirm(false)}
                                className="flex-1 px-4 py-2 rounded-lg bg-white/10 text-gray-400 font-medium hover:bg-white/20 transition-all"
                            >
                                Annuler
                            </button>
                            <button
                                onClick={handleClear}
                                className="flex-1 px-4 py-2 rounded-lg bg-red-500 text-white font-medium hover:bg-red-600 transition-all"
                            >
                                Effacer tout
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
