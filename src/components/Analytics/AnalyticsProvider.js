'use client';

import { createContext, useContext, useState, useEffect, useCallback, useRef } from 'react';
import { usePathname } from 'next/navigation';

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
    CURRENT_SESSION: 'symlab_current_session',
};

// Générer un ID de session unique
const generateSessionId = () => {
    return `session_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;
};

// Mapper un pathname à un nom lisible
const getPageName = (pathname) => {
    if (pathname === '/') return 'Accueil';
    if (pathname === '/about') return 'À propos';
    if (pathname === '/courses') return 'Cours';
    if (pathname === '/simulations') return 'Simulations';
    if (pathname.startsWith('/simulations/')) return `Simulation: ${pathname.split('/').pop()}`;
    if (pathname === '/challenges') return 'Défis';
    if (pathname === '/code') return 'Python Lab';
    if (pathname === '/exams') return 'Examens';
    if (pathname === '/engineering') return 'Ingénierie';
    if (pathname === '/programming') return 'Programmation';
    return pathname;
};

// Mapper un pathname à une catégorie
const getPageCategory = (pathname) => {
    if (pathname === '/') return 'accueil';
    if (pathname.startsWith('/courses')) return 'cours';
    if (pathname.startsWith('/simulations')) return 'simulations';
    if (pathname.startsWith('/challenges')) return 'defis';
    if (pathname.startsWith('/code')) return 'code';
    if (pathname.startsWith('/exams')) return 'examens';
    if (pathname.startsWith('/engineering')) return 'ingenierie';
    if (pathname.startsWith('/programming')) return 'programmation';
    if (pathname.startsWith('/about')) return 'a_propos';
    return 'autre';
};

export function AnalyticsProvider({ children }) {
    const [showWelcomeModal, setShowWelcomeModal] = useState(false);
    const [showFeedbackModal, setShowFeedbackModal] = useState(false);
    const [userData, setUserData] = useState(null);
    const [isRoot, setIsRoot] = useState(false);
    const [analytics, setAnalytics] = useState([]);
    const [sessionId, setSessionId] = useState(null);
    const [sessionStart, setSessionStart] = useState(null);

    const pathname = usePathname();

    // Utiliser des refs pour les valeurs dans les event listeners (éviter les closures obsolètes)
    const sessionIdRef = useRef(null);
    const sessionStartRef = useRef(null);
    const userDataRef = useRef(null);
    const isRootRef = useRef(false);
    const pagesVisitedRef = useRef([]);
    const currentPageRef = useRef(null);
    const currentPageStartRef = useRef(null);

    // Synchroniser les refs
    useEffect(() => { sessionIdRef.current = sessionId; }, [sessionId]);
    useEffect(() => { sessionStartRef.current = sessionStart; }, [sessionStart]);
    useEffect(() => { userDataRef.current = userData; }, [userData]);
    useEffect(() => { isRootRef.current = isRoot; }, [isRoot]);

    // Charger les données au démarrage
    useEffect(() => {
        if (typeof window === 'undefined') return;

        const stored = localStorage.getItem(STORAGE_KEYS.USER_DATA);
        const storedRoot = localStorage.getItem(STORAGE_KEYS.IS_ROOT);
        const storedAnalytics = localStorage.getItem(STORAGE_KEYS.ANALYTICS);
        const visited = sessionStorage.getItem(STORAGE_KEYS.VISITED);

        if (storedRoot === 'true') {
            setIsRoot(true);
            isRootRef.current = true;
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
                userDataRef.current = data;
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
        sessionIdRef.current = newSessionId;
        const startTime = Date.now();
        setSessionStart(startTime);
        sessionStartRef.current = startTime;
        sessionStorage.setItem(STORAGE_KEYS.VISITED, 'true');
    }, []);

    // Tracker les changements de page
    useEffect(() => {
        if (!pathname || typeof window === 'undefined') return;

        const now = Date.now();

        // Finaliser la page précédente
        if (currentPageRef.current && currentPageStartRef.current) {
            const prevPage = pagesVisitedRef.current.find(
                p => p.path === currentPageRef.current && !p.endTime
            );
            if (prevPage) {
                prevPage.endTime = now;
                prevPage.duration = Math.round((now - currentPageStartRef.current) / 1000);
            }
        }

        // Enregistrer la nouvelle page
        const pageVisit = {
            path: pathname,
            name: getPageName(pathname),
            category: getPageCategory(pathname),
            startTime: now,
            timestamp: new Date(now).toISOString(),
            endTime: null,
            duration: 0,
        };
        pagesVisitedRef.current.push(pageVisit);
        currentPageRef.current = pathname;
        currentPageStartRef.current = now;

        // Sauvegarder la session incrémentalement
        persistCurrentSession();
    }, [pathname]);

    // Sauvegarder la session en cours dans sessionStorage (pour récupération)
    const persistCurrentSession = useCallback(() => {
        if (typeof window === 'undefined') return;
        if (!sessionIdRef.current) return;

        // Finaliser la durée de la page en cours pour le snapshot
        const pages = pagesVisitedRef.current.map(p => {
            if (!p.endTime && p.path === currentPageRef.current) {
                return { ...p, duration: Math.round((Date.now() - p.startTime) / 1000) };
            }
            return p;
        });

        const sessionSnapshot = {
            sessionId: sessionIdRef.current,
            user: userDataRef.current,
            startTime: sessionStartRef.current,
            endTime: Date.now(),
            duration: Math.round((Date.now() - (sessionStartRef.current || Date.now())) / 1000),
            pagesVisited: pages,
            totalPages: pages.length,
            userAgent: navigator.userAgent,
            screenSize: `${window.innerWidth}x${window.innerHeight}`,
            date: new Date().toISOString(),
        };

        sessionStorage.setItem(STORAGE_KEYS.CURRENT_SESSION, JSON.stringify(sessionSnapshot));
    }, []);

    // Sauvegarder les données de session dans localStorage (final)
    const saveSessionData = useCallback(() => {
        if (!userDataRef.current || isRootRef.current) return;
        if (!sessionIdRef.current) return;

        // Finaliser la page en cours
        if (currentPageRef.current && currentPageStartRef.current) {
            const now = Date.now();
            const activePage = pagesVisitedRef.current.find(
                p => p.path === currentPageRef.current && !p.endTime
            );
            if (activePage) {
                activePage.endTime = now;
                activePage.duration = Math.round((now - currentPageStartRef.current) / 1000);
            }
        }

        const sessionData = {
            sessionId: sessionIdRef.current,
            user: userDataRef.current,
            startTime: sessionStartRef.current,
            endTime: Date.now(),
            duration: Math.round((Date.now() - (sessionStartRef.current || Date.now())) / 1000),
            pagesVisited: pagesVisitedRef.current,
            totalPages: pagesVisitedRef.current.length,
            userAgent: navigator.userAgent,
            screenSize: `${window.innerWidth}x${window.innerHeight}`,
            date: new Date().toISOString(),
        };

        const currentAnalytics = JSON.parse(localStorage.getItem(STORAGE_KEYS.ANALYTICS) || '[]');

        // Mettre à jour ou ajouter la session
        const existingIndex = currentAnalytics.findIndex(a => a.sessionId === sessionIdRef.current);
        if (existingIndex !== -1) {
            // Préserver le feedback s'il existe
            const existingFeedback = currentAnalytics[existingIndex].feedback;
            currentAnalytics[existingIndex] = { ...sessionData, feedback: existingFeedback };
        } else {
            currentAnalytics.push(sessionData);
        }

        localStorage.setItem(STORAGE_KEYS.ANALYTICS, JSON.stringify(currentAnalytics));
        setAnalytics(currentAnalytics);
    }, []);

    // Event listeners pour sauvegarder à la fermeture/visibilité cachée
    useEffect(() => {
        if (typeof window === 'undefined') return;

        const handleBeforeUnload = () => {
            saveSessionData();
        };

        const handleVisibilityChange = () => {
            if (document.visibilityState === 'hidden') {
                saveSessionData();
            }
        };

        // Sauvegarder périodiquement (toutes les 30 secondes)
        const interval = setInterval(() => {
            persistCurrentSession();
            saveSessionData();
        }, 30000);

        window.addEventListener('beforeunload', handleBeforeUnload);
        document.addEventListener('visibilitychange', handleVisibilityChange);

        return () => {
            window.removeEventListener('beforeunload', handleBeforeUnload);
            document.removeEventListener('visibilitychange', handleVisibilityChange);
            clearInterval(interval);
            saveSessionData();
        };
    }, [saveSessionData, persistCurrentSession]);

    // Enregistrer un nouvel utilisateur
    const registerUser = (data) => {
        const userInfo = {
            ...data,
            registeredAt: new Date().toISOString(),
            id: `user_${Date.now()}`,
        };
        localStorage.setItem(STORAGE_KEYS.USER_DATA, JSON.stringify(userInfo));
        setUserData(userInfo);
        userDataRef.current = userInfo;
        setShowWelcomeModal(false);

        // Sauvegarder immédiatement la session avec les données utilisateur
        setTimeout(() => saveSessionData(), 100);
    };

    // Connexion root
    const loginAsRoot = (password) => {
        if (password === ROOT_PASSWORD) {
            localStorage.setItem(STORAGE_KEYS.IS_ROOT, 'true');
            setIsRoot(true);
            isRootRef.current = true;
            return true;
        }
        return false;
    };

    // Déconnexion root
    const logoutRoot = () => {
        localStorage.removeItem(STORAGE_KEYS.IS_ROOT);
        setIsRoot(false);
        isRootRef.current = false;
    };

    // Soumettre le feedback
    const submitFeedback = (feedback) => {
        if (!userDataRef.current || isRootRef.current) return;

        const currentAnalytics = JSON.parse(localStorage.getItem(STORAGE_KEYS.ANALYTICS) || '[]');
        const lastIndex = currentAnalytics.findIndex(a => a.sessionId === sessionIdRef.current);

        if (lastIndex !== -1) {
            currentAnalytics[lastIndex].feedback = feedback;
        } else {
            // Sauvegarder d'abord la session, puis ajouter le feedback
            const feedbackData = {
                sessionId: sessionIdRef.current,
                user: userDataRef.current,
                feedback,
                submittedAt: new Date().toISOString(),
                pagesVisited: pagesVisitedRef.current,
                totalPages: pagesVisitedRef.current.length,
                date: new Date().toISOString(),
            };
            currentAnalytics.push(feedbackData);
        }

        localStorage.setItem(STORAGE_KEYS.ANALYTICS, JSON.stringify(currentAnalytics));
        setAnalytics(currentAnalytics);
        sessionStorage.setItem('feedback_given', 'true');
        setShowFeedbackModal(false);
    };

    // Obtenir les statistiques
    const getStats = () => {
        const uniqueUsers = new Set(analytics.map(a => a.user?.id).filter(Boolean)).size;
        const totalSessions = analytics.length;
        const avgDuration = analytics.reduce((acc, a) => acc + (a.duration || 0), 0) / (totalSessions || 1);

        const levelCounts = {};
        const dailyVisits = {};
        const pageStats = {};
        const categoryStats = {};
        let totalPageViews = 0;

        analytics.forEach(a => {
            // Stats par niveau
            if (a.user?.niveau) {
                levelCounts[a.user.niveau] = (levelCounts[a.user.niveau] || 0) + 1;
            }

            // Visites par jour
            const day = a.date?.split('T')[0] || 'unknown';
            dailyVisits[day] = (dailyVisits[day] || 0) + 1;

            // Stats des pages visitées
            if (Array.isArray(a.pagesVisited)) {
                a.pagesVisited.forEach(page => {
                    totalPageViews++;
                    const pagePath = page.path || page;
                    const pageName = page.name || getPageName(pagePath);
                    const pageCategory = page.category || getPageCategory(pagePath);

                    // Pages individuelles
                    if (!pageStats[pagePath]) {
                        pageStats[pagePath] = { name: pageName, path: pagePath, views: 0, totalDuration: 0 };
                    }
                    pageStats[pagePath].views++;
                    pageStats[pagePath].totalDuration += (page.duration || 0);

                    // Catégories
                    if (!categoryStats[pageCategory]) {
                        categoryStats[pageCategory] = { views: 0, totalDuration: 0 };
                    }
                    categoryStats[pageCategory].views++;
                    categoryStats[pageCategory].totalDuration += (page.duration || 0);
                });
            }
        });

        // Trier les pages par nombre de vues
        const topPages = Object.values(pageStats)
            .sort((a, b) => b.views - a.views)
            .slice(0, 10);

        return {
            uniqueUsers,
            totalSessions,
            avgDuration: Math.round(avgDuration),
            totalPageViews,
            levelCounts,
            dailyVisits,
            topPages,
            categoryStats,
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
