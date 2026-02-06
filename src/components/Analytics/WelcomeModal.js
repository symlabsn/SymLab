'use client';

import { useState } from 'react';
import { useAnalytics } from './AnalyticsProvider';

const niveaux = [
    { id: '6eme', label: '6ème' },
    { id: '5eme', label: '5ème' },
    { id: '4eme', label: '4ème' },
    { id: '3eme', label: '3ème' },
    { id: '2nde', label: 'Seconde' },
    { id: '1ere', label: 'Première' },
    { id: 'tle', label: 'Terminale' },
    { id: 'etudiant', label: 'Étudiant' },
    { id: 'enseignant', label: 'Enseignant' },
    { id: 'autre', label: 'Autre' },
];

export default function WelcomeModal() {
    const { showWelcomeModal, setShowWelcomeModal, registerUser, loginAsRoot, ROOT_PASSWORD } = useAnalytics();
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        prenom: '',
        nom: '',
        niveau: '',
    });
    const [rootPassword, setRootPassword] = useState('');
    const [showRootLogin, setShowRootLogin] = useState(false);
    const [error, setError] = useState('');

    if (!showWelcomeModal) return null;

    const handleSubmit = (e) => {
        e.preventDefault();
        if (step === 1) {
            if (!formData.prenom.trim()) {
                setError('Veuillez entrer votre prénom');
                return;
            }
            setError('');
            setStep(2);
        } else if (step === 2) {
            if (!formData.niveau) {
                setError('Veuillez sélectionner votre niveau');
                return;
            }
            registerUser(formData);
        }
    };

    const handleRootLogin = (e) => {
        e.preventDefault();
        if (loginAsRoot(rootPassword)) {
            setShowWelcomeModal(false);
        } else {
            setError('Mot de passe incorrect');
        }
    };



    return (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/80 backdrop-blur-xl">
            <div className="relative w-full max-w-md overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border border-white/10 shadow-2xl">
                {/* Décoration */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#00F5D4] via-purple-500 to-pink-500"></div>
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-[#00F5D4]/20 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl"></div>

                <div className="relative p-8">
                    {/* Header */}
                    <div className="text-center mb-8">
                        <div className="text-5xl mb-4">🔬</div>
                        <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#00F5D4] to-purple-500">
                            Bienvenue sur SymLab !
                        </h2>
                        <p className="text-gray-400 mt-2">
                            La plateforme STEM interactive du Sénégal
                        </p>
                    </div>

                    {showRootLogin ? (
                        <form onSubmit={handleRootLogin} className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-2">
                                    Mot de passe administrateur
                                </label>
                                <input
                                    type="password"
                                    value={rootPassword}
                                    onChange={(e) => setRootPassword(e.target.value)}
                                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-[#00F5D4] focus:outline-none focus:ring-2 focus:ring-[#00F5D4]/20 transition-all"
                                    placeholder="••••••••••"
                                    autoFocus
                                />
                            </div>

                            {error && (
                                <p className="text-red-400 text-sm text-center">{error}</p>
                            )}

                            <div className="flex gap-3">
                                <button
                                    type="button"
                                    onClick={() => { setShowRootLogin(false); setError(''); }}
                                    className="flex-1 px-6 py-3 rounded-xl bg-white/5 text-gray-400 font-medium hover:bg-white/10 transition-all"
                                >
                                    Retour
                                </button>
                                <button
                                    type="submit"
                                    className="flex-1 px-6 py-3 rounded-xl bg-gradient-to-r from-[#00F5D4] to-purple-500 text-black font-bold hover:opacity-90 transition-all"
                                >
                                    Connexion
                                </button>
                            </div>
                        </form>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-6">
                            {step === 1 ? (
                                <>
                                    {/* Étape 1 : Nom et Prénom */}
                                    <div className="space-y-4">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-300 mb-2">
                                                Prénom <span className="text-red-400">*</span>
                                            </label>
                                            <input
                                                type="text"
                                                value={formData.prenom}
                                                onChange={(e) => setFormData({ ...formData, prenom: e.target.value })}
                                                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-[#00F5D4] focus:outline-none focus:ring-2 focus:ring-[#00F5D4]/20 transition-all"
                                                placeholder="Votre prénom"
                                                autoFocus
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-300 mb-2">
                                                Nom <span className="text-gray-500">(optionnel)</span>
                                            </label>
                                            <input
                                                type="text"
                                                value={formData.nom}
                                                onChange={(e) => setFormData({ ...formData, nom: e.target.value })}
                                                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-[#00F5D4] focus:outline-none focus:ring-2 focus:ring-[#00F5D4]/20 transition-all"
                                                placeholder="Votre nom de famille"
                                            />
                                        </div>
                                    </div>

                                    {/* Indicateur d'étape */}
                                    <div className="flex justify-center gap-2">
                                        <div className="w-8 h-2 rounded-full bg-[#00F5D4]"></div>
                                        <div className="w-8 h-2 rounded-full bg-white/20"></div>
                                    </div>
                                </>
                            ) : (
                                <>
                                    {/* Étape 2 : Niveau */}
                                    <div>
                                        <label className="block text-sm font-medium text-gray-300 mb-3">
                                            Quel est votre niveau ? <span className="text-red-400">*</span>
                                        </label>
                                        <div className="grid grid-cols-2 gap-2">
                                            {niveaux.map((niveau) => (
                                                <button
                                                    key={niveau.id}
                                                    type="button"
                                                    onClick={() => setFormData({ ...formData, niveau: niveau.id })}
                                                    className={`px-4 py-3 rounded-xl text-sm font-medium transition-all ${formData.niveau === niveau.id
                                                        ? 'bg-gradient-to-r from-[#00F5D4] to-purple-500 text-black'
                                                        : 'bg-white/5 text-gray-300 hover:bg-white/10 border border-white/10'
                                                        }`}
                                                >
                                                    {niveau.label}
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Indicateur d'étape */}
                                    <div className="flex justify-center gap-2">
                                        <div className="w-8 h-2 rounded-full bg-[#00F5D4]"></div>
                                        <div className="w-8 h-2 rounded-full bg-[#00F5D4]"></div>
                                    </div>
                                </>
                            )}

                            {error && (
                                <p className="text-red-400 text-sm text-center">{error}</p>
                            )}

                            <div className="flex gap-3">
                                {step === 2 && (
                                    <button
                                        type="button"
                                        onClick={() => setStep(1)}
                                        className="flex-1 px-6 py-3 rounded-xl bg-white/5 text-gray-400 font-medium hover:bg-white/10 transition-all"
                                    >
                                        Retour
                                    </button>
                                )}
                                <button
                                    type="submit"
                                    className="flex-1 px-6 py-3 rounded-xl bg-gradient-to-r from-[#00F5D4] to-purple-500 text-black font-bold hover:opacity-90 transition-all shadow-lg shadow-[#00F5D4]/20"
                                >
                                    {step === 1 ? 'Suivant →' : 'Commencer 🚀'}
                                </button>
                            </div>
                        </form>
                    )}

                    {/* Footer */}
                    <div className="mt-6 pt-6 border-t border-white/10 flex justify-center text-xs text-gray-500">
                        <button
                            onClick={() => { setShowRootLogin(true); setError(''); }}
                            className="hover:text-[#00F5D4] transition-colors"
                        >
                            🔐 Admin
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
