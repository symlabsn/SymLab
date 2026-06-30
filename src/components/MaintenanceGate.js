'use client';
import { useState, useEffect, useCallback } from 'react';

const SESSION_KEY = 'symlab_admin_access';
const ADMIN_PASSWORD = 'SymLab2026@';

export default function MaintenanceGate({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [shakeError, setShakeError] = useState(false);

  useEffect(() => {
    const sessionAuth = sessionStorage.getItem(SESSION_KEY);
    if (sessionAuth === 'granted') {
      setIsAuthenticated(true);
    }
    setIsLoading(false);
  }, []);

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    setError('');

    if (password === ADMIN_PASSWORD) {
      sessionStorage.setItem(SESSION_KEY, 'granted');
      setIsAuthenticated(true);
    } else {
      setError('Mot de passe incorrect');
      setShakeError(true);
      setTimeout(() => setShakeError(false), 600);
      setPassword('');
    }
  }, [password]);

  const handleLogoClick = useCallback(() => {
    setShowLogin(prev => !prev);
  }, []);

  // Loading state
  if (isLoading) {
    return (
      <div className="maint-loading">
        <div className="maint-spinner" />
      </div>
    );
  }

  // Authenticated — show the real site
  if (isAuthenticated) {
    return children;
  }

  // Maintenance screen
  return (
    <div className="maint-overlay">
      {/* Animated background */}
      <div className="maint-bg">
        <div className="maint-orb maint-orb-1" />
        <div className="maint-orb maint-orb-2" />
        <div className="maint-orb maint-orb-3" />
        <div className="maint-grid-bg" />
      </div>

      {/* Content */}
      <div className="maint-content">
        {/* Animated icon */}
        <div className="maint-icon-wrapper">
          <div className="maint-icon-ring" />
          <div className="maint-icon-ring maint-icon-ring-2" />
          <div className="maint-gear">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
              <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1Z" />
            </svg>
          </div>
        </div>

        {/* Logo — click to reveal admin login */}
        <button
          onClick={handleLogoClick}
          className="maint-logo"
          aria-label="Admin access"
          type="button"
        >
          <span className="maint-logo-sym">SYM</span>
          <span className="maint-logo-lab">LAB</span>
        </button>

        {/* Title */}
        <h1 className="maint-title">
          Site en Maintenance
        </h1>

        {/* Description */}
        <p className="maint-description">
          Nous travaillons activement pour améliorer votre expérience.
          <br />
          Le site sera de retour très bientôt !
        </p>

        {/* Progress bar */}
        <div className="maint-progress-wrapper">
          <div className="maint-progress-bar">
            <div className="maint-progress-fill" />
          </div>
          <span className="maint-progress-text">Mise à jour en cours...</span>
        </div>

        {/* Admin login — hidden by default */}
        {showLogin && (
          <form onSubmit={handleSubmit} className="maint-login-form">
            <div className="maint-login-header">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
              <span>Accès Administrateur</span>
            </div>
            <div className={`maint-input-group ${shakeError ? 'maint-shake' : ''}`}>
              <input
                type="password"
                value={password}
                onChange={(e) => { setPassword(e.target.value); setError(''); }}
                placeholder="Mot de passe admin"
                className="maint-input"
                autoFocus
                autoComplete="current-password"
              />
              <button type="submit" className="maint-submit-btn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </button>
            </div>
            {error && <p className="maint-error">{error}</p>}
          </form>
        )}

        {/* Footer info */}
        <div className="maint-footer-info">
          <div className="maint-contact">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
            <span>contact@symlab.sn</span>
          </div>
        </div>
      </div>
    </div>
  );
}
