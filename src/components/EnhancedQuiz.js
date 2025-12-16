'use client';
import { useState, useEffect } from 'react';
import { ConfettiExplosion } from './PC4eSimulations'; // Re-use confetti if available, or just omit

export default function EnhancedQuiz({ simulation, onComplete }) {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [streak, setStreak] = useState(0);
    const [showFeedback, setShowFeedback] = useState(false);
    const [selectedOptions, setSelectedOptions] = useState([]); // Array of indices
    const [isCorrect, setIsCorrect] = useState(false);
    const [quizFinished, setQuizFinished] = useState(false);

    // Filter exercises if available
    const questions = simulation.exercises || [];

    if (questions.length === 0) {
        return <div className="p-4 text-center text-gray-400">Aucun défi disponible pour le moment.</div>;
    }

    const question = questions[currentQuestion];
    const isMultiSelect = question.type === 'multi-select';

    const handleSelectOption = (index) => {
        if (showFeedback) return; // Locked

        if (isMultiSelect) {
            setSelectedOptions(prev =>
                prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
            );
        } else {
            setSelectedOptions([index]);
        }
    };

    const handleSubmit = () => {
        let correct = false;
        if (isMultiSelect) {
            // Check if selected matches question.correct (array)
            const correctIndices = question.correct; // Expecting array
            const sortedSelected = [...selectedOptions].sort();
            const sortedCorrect = [...correctIndices].sort();
            correct = JSON.stringify(sortedSelected) === JSON.stringify(sortedCorrect);
        } else {
            correct = selectedOptions[0] === question.correct;
        }

        setIsCorrect(correct);
        setShowFeedback(true);

        if (correct) {
            setScore(s => s + 100 + (streak * 20));
            setStreak(s => s + 1);
        } else {
            setStreak(0);
        }
    };

    const handleNext = () => {
        setShowFeedback(false);
        setSelectedOptions([]);

        if (currentQuestion < questions.length - 1) {
            setCurrentQuestion(curr => curr + 1);
        } else {
            setQuizFinished(true);
            if (onComplete) onComplete(score);
        }
    };

    if (quizFinished) {
        return (
            <div className="bg-gradient-to-br from-purple-900/50 to-blue-900/50 rounded-2xl p-8 text-center border border-white/10 animate-in zoom-in duration-500">
                <div className="text-6xl mb-4">🏆</div>
                <h2 className="text-3xl font-bold text-white mb-2">Quiz Terminé !</h2>
                <div className="text-xl text-gray-300 mb-6">Score Final : <span className="text-yellow-400 font-bold">{score} XP</span></div>
                <button
                    onClick={() => {
                        setQuizFinished(false);
                        setCurrentQuestion(0);
                        setScore(0);
                        setStreak(0);
                    }}
                    className="px-6 py-3 rounded-xl bg-green-600 hover:bg-green-500 text-white font-bold transition-all transform hover:scale-105"
                >
                    Rejouer 🔄
                </button>
            </div>
        );
    }

    return (
        <div className="bg-gray-900/80 backdrop-blur-md rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
            {/* Header */}
            <div className="bg-black/40 p-4 flex justify-between items-center">
                <div className="flex items-center gap-3">
                    <span className="bg-blue-600 text-xs font-bold px-2 py-1 rounded text-white">
                        Question {currentQuestion + 1} / {questions.length}
                    </span>
                    {isMultiSelect && <span className="bg-purple-600 text-xs font-bold px-2 py-1 rounded text-white">Choix Multiples</span>}
                </div>
                <div className="flex items-center gap-4">
                    <div className="flex flex-col items-end">
                        <span className="text-xs text-gray-400">Score</span>
                        <span className="font-mono font-bold text-yellow-400">{score}</span>
                    </div>
                    <div className="flex flex-col items-end">
                        <span className="text-xs text-gray-400">Streak</span>
                        <div className="flex gap-0.5">
                            {Array.from({ length: Math.min(5, streak) }).map((_, i) => (
                                <span key={i} className="text-orange-500 animate-pulse">🔥</span>
                            ))}
                            {streak === 0 && <span className="text-gray-600">❄️</span>}
                        </div>
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-6 leading-relaxed">
                    {question.question}
                </h3>

                <div className="space-y-3">
                    {question.options.map((opt, idx) => {
                        const isSelected = selectedOptions.includes(idx);
                        // Feedback styling
                        let statusClass = "border-white/10 hover:bg-white/5";
                        if (showFeedback) {
                            if (isMultiSelect) {
                                if (question.correct.includes(idx)) statusClass = "bg-green-500/20 border-green-500 text-green-300"; // Correct answer
                                else if (isSelected) statusClass = "bg-red-500/20 border-red-500 text-red-300"; // Wrong selection
                            } else {
                                if (idx === question.correct) statusClass = "bg-green-500/20 border-green-500 text-green-300";
                                else if (isSelected) statusClass = "bg-red-500/20 border-red-500 text-red-300";
                            }
                        } else {
                            if (isSelected) statusClass = "bg-blue-600 text-white border-blue-500 shadow-[0_0_15px_rgba(37,99,235,0.3)]";
                        }

                        return (
                            <button
                                key={idx}
                                disabled={showFeedback}
                                onClick={() => handleSelectOption(idx)}
                                className={`w-full p-4 rounded-xl border text-left transition-all duration-200 flex justify-between items-center group ${statusClass}`}
                            >
                                <span className={`font-medium ${isSelected ? 'text-white' : 'text-gray-300'} group-hover:text-white`}>
                                    {['A', 'B', 'C', 'D'][idx]}. {opt}
                                </span>
                                {showFeedback && (
                                    <span>
                                        {(isMultiSelect ? question.correct.includes(idx) : idx === question.correct) && "✅"}
                                        {isSelected && !(isMultiSelect ? question.correct.includes(idx) : idx === question.correct) && "❌"}
                                    </span>
                                )}
                            </button>
                        );
                    })}
                </div>
            </div>

            {/* Footer / Actions */}
            <div className="p-4 bg-black/40 border-t border-white/10 flex justify-end">
                {!showFeedback ? (
                    <button
                        onClick={handleSubmit}
                        disabled={selectedOptions.length === 0}
                        className={`px-8 py-3 rounded-xl font-bold transition-all ${selectedOptions.length > 0 ? 'bg-blue-600 hover:bg-blue-500 text-white hover:scale-105' : 'bg-gray-700 text-gray-500 cursor-not-allowed'}`}
                    >
                        Valider
                    </button>
                ) : (
                    <div className="w-full">
                        <div className={`mb-4 p-4 rounded-xl border ${isCorrect ? 'bg-green-900/30 border-green-500/50' : 'bg-red-900/30 border-red-500/50'}`}>
                            <div className={`font-bold mb-1 ${isCorrect ? 'text-green-400' : 'text-red-400'}`}>
                                {isCorrect ? 'Excellent ! 🎉' : 'Oups... 😅'}
                            </div>
                            <div className="text-sm text-gray-300">{question.explanation}</div>
                        </div>
                        <button
                            onClick={handleNext}
                            className="w-full px-8 py-3 rounded-xl bg-white text-black font-bold hover:bg-gray-200 transition-all hover:scale-[1.02]"
                        >
                            {currentQuestion < questions.length - 1 ? 'Question Suivante ➡️' : 'Voir Résultats 🏆'}
                        </button>
                    </div>
                )}
            </div>
            {/* Confetti if correct */}
            {/* Assuming ConfettiExplosion is global or we skip it for now to avoid dependency hell */}
        </div>
    );
}
