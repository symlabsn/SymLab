'use client';

import { useEffect, useState } from 'react';

export default function HeroSection({ title, subtitle, cta, ctaHref }) {
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-transparent">
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold mb-6 text-white leading-tight animate-fadeIn">
          {title}
        </h1>
        <p className="text-lg sm:text-xl text-muted mb-8 leading-relaxed max-w-2xl mx-auto animate-fadeIn animation-delay-150">
          {subtitle}
        </p>
        {/* small accent line under headline */}
        <div className="mx-auto mt-6 w-24 h-1 rounded-full bg-accent animate-gradient" style={{ background: 'linear-gradient(90deg, var(--accent), var(--accent-2))' }} />
      </div>
    </section>
        <div
          className="absolute top-20 left-10 w-96 h-96 rounded-full blur-3xl opacity-30 animate-subtle-pulse"
          style={{
            background: 'radial-gradient(circle, rgba(0, 212, 255, 0.4) 0%, transparent 70%)',
            transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`
          }}
        />
        <div
          className="absolute top-40 right-10 w-96 h-96 rounded-full blur-3xl opacity-30 animate-subtle-pulse animation-delay-2000"
          style={{
            background: 'radial-gradient(circle, rgba(181, 55, 255, 0.4) 0%, transparent 70%)',
            transform: `translate(${-mousePosition.x}px, ${-mousePosition.y}px)`
          }}
        />
        <div
          className="absolute bottom-20 left-1/2 w-96 h-96 rounded-full blur-3xl opacity-30 animate-subtle-pulse animation-delay-4000"
          style={{
            background: 'radial-gradient(circle, rgba(255, 46, 151, 0.4) 0%, transparent 70%)',
            transform: `translate(${mousePosition.y}px, ${mousePosition.x}px)`
          }}
        />

        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0, 212, 255, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 212, 255, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
            transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)`
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Logo/Icon with 3D rotation */}
        <div className="flex justify-center mb-8 animate-fadeIn">
          <div className="relative">
            <div className="w-32 h-32 rounded-full glass-strong flex items-center justify-center transform-3d hover-glow">
              <svg
                width="64"
                height="64"
                viewBox="0 0 24 24"
                fill="none"
                className="animate-logo-spin"
              >
                <defs>
                  <linearGradient id="heroGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#00d4ff" />
                    <stop offset="50%" stopColor="#b537ff" />
                    <stop offset="100%" stopColor="#ff2e97" />
                  </linearGradient>
                </defs>
                <circle
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="url(#heroGradient)"
                  strokeWidth="2"
                  fill="none"
                />
                <path
                  d="M8 12c0-2.2 1.8-4 4-4s4 1.8 4 4-1.8 4-4 4-4-1.8-4-4z"
                  fill="url(#heroGradient)"
                />
                <circle cx="12" cy="12" r="2" fill="#fff" />
              </svg>
            </div>
            {/* Orbital rings */}
            <div className="absolute inset-0 border-2 border-blue-400/20 rounded-full animate-ping" style={{ animationDuration: '3s' }} />
            <div className="absolute inset-0 border-2 border-purple-400/20 rounded-full animate-ping animation-delay-1000" style={{ animationDuration: '3s' }} />
          </div>
        </div>

        {/* Title with gradient and neon effect */}
        <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black mb-8 animate-fadeIn animation-delay-200">
          <span className="gradient-text animate-gradient">
            {title}
          </span>
        </h1>

        {/* Subtitle with glassmorphism */}
        <div className="glass rounded-2xl p-8 mb-10 max-w-3xl mx-auto animate-fadeIn animation-delay-400">
          <p className="text-xl sm:text-2xl text-gray-200 leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* CTA Button with premium effects */}
        {cta && (
          <div className="animate-fadeIn animation-delay-600">
            <a
              href={ctaHref}
              className="group relative inline-flex items-center gap-3 px-10 py-5 overflow-hidden rounded-xl font-bold text-lg transition-all duration-300 hover-lift"
            >
              {/* Button background with gradient */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-gradient" />

              {/* Glow effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 blur-xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transition-opacity duration-300" />

              {/* Button content */}
              <span className="relative z-10 text-white">{cta}</span>
              <svg
                className="relative z-10 w-6 h-6 text-white transform group-hover:translate-x-2 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </a>
          </div>
        )}

        {/* Feature badges */}
        <div className="flex flex-wrap justify-center gap-4 mt-12 animate-fadeIn animation-delay-800">
          {[
            { icon: '⚡', text: 'Temps Réel' },
            { icon: '🎯', text: '100% Gratuit' },
            { icon: '🇸🇳', text: 'Programme Sénégalais' },
            { icon: '🚀', text: 'IA Intégrée' }
          ].map((badge, index) => (
            <div
              key={index}
              className="glass-subtle rounded-full px-6 py-3 flex items-center gap-2 hover-lift"
            >
              <span className="text-2xl">{badge.icon}</span>
              <span className="text-sm font-semibold text-gray-300">{badge.text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Floating particles decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="particle animate-particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${6 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-fadeIn animation-delay-1000">
        <div className="flex flex-col items-center gap-2 text-gray-400 hover:text-white transition-colors cursor-pointer">
          <span className="text-sm font-medium">Découvrir</span>
          <svg
            className="w-6 h-6 animate-bounce"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
