'use client';

import { createContext, useContext, useState, useEffect, useCallback } from 'react';

const AnalyticsContext = createContext(null);

// Mot de passe root
const ROOT_PASSWORD = 'SymLab2025';

// Clés de stockage
const STORAGE_KEYS = {
    USER_DATA: 'symlab_user_data',
    ANALYTICS: 'symlab_analytics',
    SESSION_ID: 'symlab_session_id',
    IS_ROOT: 'symlab_is_root',
    VISITED: 'symlab_visited',
};

// Générer un ID de session unique
const generateSessionId = () => {
    return `session_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;
};

export function AnalyticsProvider({ children }) {
    const [showWelcomeModal, setShowWelcomeModal] = useState(false);
    const [showFeedbackModal, setShowFeedbackModal] = useState(false);
    const [userData, setUserData] = useState(null);
    const [isRoot, setIsRoot] = useState(false);
    const [analytics, setAnalytics] = useState([]);
    const [sessionId, setSessionId] = useState(null);
    const [sessionStart, setSessionStart] = useState(null);

    // Charger les données au démarrage
    useEffect(() => {
        if (typeof window === 'undefined') return;

        const stored = localStorage.getItem(STORAGE_KEYS.USER_DATA);
        const storedRoot = localStorage.getItem(STORAGE_KEYS.IS_ROOT);
        const storedAnalytics = localStorage.getItem(STORAGE_KEYS.ANALYTICS);
        const visited = sessionStorage.getItem(STORAGE_KEYS.VISITED);

        if (storedRoot === 'true') {
            setIsRoot(true);
        }

        if (storedAnalytics) {
            try {
                setAnalytics(JSON.parse(storedAnalytics));
            } catch (e) {
                console.error('Error parsing analytics', e);
            }
        }

        if (stored) {
            try {
                const data = JSON.parse(stored);
                setUserData(data);
            } catch (e) {
                console.error('Error parsing user data', e);
            }
        } else if (!visited && storedRoot !== 'true') {
            // Première visite, afficher le modal de bienvenue
            setShowWelcomeModal(true);
        }

        // Créer une nouvelle session
        const newSessionId = generateSessionId();
        setSessionId(newSessionId);
        setSessionStart(Date.now());
        sessionStorage.setItem(STORAGE_KEYS.VISITED, 'true');

        // Détecter la fermeture de page pour le feedback
        const handleBeforeUnload = (e) => {
            if (!storedRoot && stored && !sessionStorage.getItem('feedback_given')) {
                // On ne peut pas vraiment afficher un modal ici, mais on peut sauvegarder la session
                saveSessionData();
            }
        };

        const handleVisibilityChange = () => {
            if (document.visibilityState === 'hidden') {
                saveSessionData();
            }
        };

        window.addEventListener('beforeunload', handleBeforeUnload);
        document.addEventListener('visibilitychange', handleVisibilityChange);

        return () => {
            window.removeEventListener('beforeunload', handleBeforeUnload);
            document.removeEventListener('visibilitychange', handleVisibilityChange);
        };
    }, []);

    // Sauvegarder les données de session
    const saveSessionData = useCallback(() => {
        if (!userData || isRoot) return;

        const sessionData = {
            sessionId,
            user: userData,
            startTime: sessionStart,
            endTime: Date.now(),
            duration: Math.round((Date.now() - sessionStart) / 1000), // en secondes
            pagesVisited: window.history.length,
            userAgent: navigator.userAgent,
            screenSize: `${window.innerWidth}x${window.innerHeight}`,
            date: new Date().toISOString(),
        };

        const currentAnalytics = JSON.parse(localStorage.getItem(STORAGE_KEYS.ANALYTICS) || '[]');
        currentAnalytics.push(sessionData);
        localStorage.setItem(STORAGE_KEYS.ANALYTICS, JSON.stringify(currentAnalytics));
        setAnalytics(currentAnalytics);
    }, [userData, isRoot, sessionId, sessionStart]);

    // Enregistrer un nouvel utilisateur
    const registerUser = (data) => {
        const userInfo = {
            ...data,
            registeredAt: new Date().toISOString(),
            id: `user_${Date.now()}`,
        };
        localStorage.setItem(STORAGE_KEYS.USER_DATA, JSON.stringify(userInfo));
        setUserData(userInfo);
        setShowWelcomeModal(false);
    };

    // Connexion root
    const loginAsRoot = (password) => {
        if (password === ROOT_PASSWORD) {
            localStorage.setItem(STORAGE_KEYS.IS_ROOT, 'true');
            setIsRoot(true);
            return true;
        }
        return false;
    };

    // Déconnexion root
    const logoutRoot = () => {
        localStorage.removeItem(STORAGE_KEYS.IS_ROOT);
        setIsRoot(false);
    };

    // Soumettre le feedback
    const submitFeedback = (feedback) => {
        if (!userData || isRoot) return;

        const feedbackData = {
            sessionId,
            user: userData,
            feedback,
            submittedAt: new Date().toISOString(),
        };

        const currentAnalytics = JSON.parse(localStorage.getItem(STORAGE_KEYS.ANALYTICS) || '[]');
        // Ajouter le feedback à la dernière session de cet utilisateur
        const lastIndex = currentAnalytics.findIndex(a => a.sessionId === sessionId);
        if (lastIndex !== -1) {
            currentAnalytics[lastIndex].feedback = feedback;
        } else {
            currentAnalytics.push(feedbackData);
        }
        localStorage.setItem(STORAGE_KEYS.ANALYTICS, JSON.stringify(currentAnalytics));
        setAnalytics(currentAnalytics);
        sessionStorage.setItem('feedback_given', 'true');
        setShowFeedbackModal(false);
    };

    // Obtenir les statistiques
    const getStats = () => {
        const uniqueUsers = new Set(analytics.map(a => a.user?.id)).size;
        const totalSessions = analytics.length;
        const avgDuration = analytics.reduce((acc, a) => acc + (a.duration || 0), 0) / (totalSessions || 1);

        const levelCounts = {};
        const dailyVisits = {};

        analytics.forEach(a => {
            if (a.user?.niveau) {
                levelCounts[a.user.niveau] = (levelCounts[a.user.niveau] || 0) + 1;
            }
            const day = a.date?.split('T')[0] || 'unknown';
            dailyVisits[day] = (dailyVisits[day] || 0) + 1;
        });

        return {
            uniqueUsers,
            totalSessions,
            avgDuration: Math.round(avgDuration),
            levelCounts,
            dailyVisits,
            recentSessions: analytics.slice(-20).reverse(),
        };
    };

    // Effacer toutes les analytics
    const clearAnalytics = () => {
        localStorage.removeItem(STORAGE_KEYS.ANALYTICS);
        setAnalytics([]);
    };

    // Demander feedback avant de quitter
    const requestFeedback = () => {
        if (!isRoot && userData && !sessionStorage.getItem('feedback_given')) {
            setShowFeedbackModal(true);
        }
    };

    return (
        <AnalyticsContext.Provider
            value={{
                userData,
                isRoot,
                analytics,
                showWelcomeModal,
                showFeedbackModal,
                setShowWelcomeModal,
                setShowFeedbackModal,
                registerUser,
                loginAsRoot,
                logoutRoot,
                submitFeedback,
                getStats,
                clearAnalytics,
                requestFeedback,
                ROOT_PASSWORD,
            }}
        >
            {children}
        </AnalyticsContext.Provider>
    );
}

export function useAnalytics() {
    const context = useContext(AnalyticsContext);
    if (!context) {
        throw new Error('useAnalytics must be used within an AnalyticsProvider');
    }
    return context;
}

export { ROOT_PASSWORD };
