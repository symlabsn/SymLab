'use client';

import { useState } from 'react';
import { useAnalytics } from './AnalyticsProvider';

const feedbackOptions = [
    { emoji: '😍', label: 'Excellent', value: 5 },
    { emoji: '😊', label: 'Très bien', value: 4 },
    { emoji: '🙂', label: 'Bien', value: 3 },
    { emoji: '😐', label: 'Moyen', value: 2 },
    { emoji: '😕', label: 'À améliorer', value: 1 },
];

export default function FeedbackModal() {
    const { showFeedbackModal, setShowFeedbackModal, submitFeedback, userData } = useAnalytics();
    const [rating, setRating] = useState(null);
    const [comment, setComment] = useState('');
    const [submitted, setSubmitted] = useState(false);

    if (!showFeedbackModal) return null;

    const handleSubmit = () => {
        if (!rating) return;

        submitFeedback({
            rating,
            comment: comment.trim(),
            submittedAt: new Date().toISOString(),
        });
        setSubmitted(true);

        setTimeout(() => {
            setShowFeedbackModal(false);
            setSubmitted(false);
            setRating(null);
            setComment('');
        }, 2000);
    };

    const handleClose = () => {
        setShowFeedbackModal(false);
        setRating(null);
        setComment('');
    };

    return (
        <div className="fixed inset-0 z-[9999] flex items-end sm:items-center justify-center p-4 bg-black/80 backdrop-blur-xl">
            <div className="relative w-full max-w-md overflow-hidden rounded-t-3xl sm:rounded-3xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border border-white/10 shadow-2xl animate-slide-in-bottom">
                {/* Décoration */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-pink-500 via-purple-500 to-[#00F5D4]"></div>

                {/* Handle pour mobile */}
                <div className="flex justify-center py-3 sm:hidden">
                    <div className="w-12 h-1.5 rounded-full bg-white/30"></div>
                </div>

                <div className="relative p-6 sm:p-8">
                    {/* Bouton fermer */}
                    <button
                        onClick={handleClose}
                        className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-white/10 text-gray-400 hover:bg-white/20 hover:text-white transition-all"
                    >
                        ✕
                    </button>

                    {submitted ? (
                        <div className="text-center py-8">
                            <div className="text-6xl mb-4 animate-bounce">🎉</div>
                            <h3 className="text-xl font-bold text-white mb-2">Merci pour votre feedback !</h3>
                            <p className="text-gray-400">Votre avis nous aide à améliorer SymLab</p>
                        </div>
                    ) : (
                        <>
                            {/* Header */}
                            <div className="text-center mb-6">
                                <div className="text-4xl mb-3">💬</div>
                                <h2 className="text-xl font-bold text-white">
                                    Comment était votre expérience, {userData?.prenom} ?
                                </h2>
                                <p className="text-gray-400 text-sm mt-1">
                                    Votre feedback nous aide à nous améliorer
                                </p>
                            </div>

                            {/* Rating */}
                            <div className="flex justify-center gap-2 sm:gap-4 mb-6">
                                {feedbackOptions.map((option) => (
                                    <button
                                        key={option.value}
                                        onClick={() => setRating(option.value)}
                                        className={`flex flex-col items-center p-2 sm:p-3 rounded-xl transition-all ${rating === option.value
                                                ? 'bg-gradient-to-br from-[#00F5D4]/20 to-purple-500/20 border-2 border-[#00F5D4] scale-110'
                                                : 'bg-white/5 border border-white/10 hover:bg-white/10'
                                            }`}
                                    >
                                        <span className="text-2xl sm:text-3xl">{option.emoji}</span>
                                        <span className="text-xs text-gray-400 mt-1 hidden sm:block">{option.label}</span>
                                    </button>
                                ))}
                            </div>

                            {/* Comment */}
                            <div className="mb-6">
                                <label className="block text-sm font-medium text-gray-300 mb-2">
                                    Un commentaire ? <span className="text-gray-500">(optionnel)</span>
                                </label>
                                <textarea
                                    value={comment}
                                    onChange={(e) => setComment(e.target.value)}
                                    rows={3}
                                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-[#00F5D4] focus:outline-none focus:ring-2 focus:ring-[#00F5D4]/20 transition-all resize-none"
                                    placeholder="Qu'avez-vous aimé ? Que peut-on améliorer ?"
                                />
                            </div>

                            {/* Buttons */}
                            <div className="flex gap-3">
                                <button
                                    onClick={handleClose}
                                    className="flex-1 px-6 py-3 rounded-xl bg-white/5 text-gray-400 font-medium hover:bg-white/10 transition-all"
                                >
                                    Plus tard
                                </button>
                                <button
                                    onClick={handleSubmit}
                                    disabled={!rating}
                                    className={`flex-1 px-6 py-3 rounded-xl font-bold transition-all ${rating
                                            ? 'bg-gradient-to-r from-[#00F5D4] to-purple-500 text-black hover:opacity-90 shadow-lg shadow-[#00F5D4]/20'
                                            : 'bg-white/10 text-gray-500 cursor-not-allowed'
                                        }`}
                                >
                                    Envoyer ✨
                                </button>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}
