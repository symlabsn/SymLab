'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Accueil', href: '/', icon: '🏠' },
    { name: 'Programmation', href: '/programming', icon: '💻' },
    { name: 'Simulations', href: '/simulations', icon: '🔬' },
    { name: 'Challenges', href: '/challenges', icon: '🎯' },
    { name: 'Vidéos', href: '/videos', icon: '🎥' },
    { name: 'Projets', href: '/projects', icon: '🚀' },
    { name: 'À propos', href: '/apropos', icon: 'ℹ️' },
  ];

  return (
    <nav className={`
      fixed top-0 left-0 right-0 z-50 
      transition-all duration-500
      ${scrolled ? 'glass-strong shadow-2xl' : 'glass-subtle'}
    `}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative">
              {/* Logo container with glow */}
              <div className={`
                w-12 h-12 rounded-xl
                bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500
                flex items-center justify-center
                transform transition-all duration-300
                group-hover:scale-110 group-hover:rotate-6
                ${scrolled ? 'shadow-lg shadow-purple-500/50' : ''}
              `}>
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="animate-logo-spin"
                >
                  <defs>
                    <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#ffffff" />
                      <stop offset="100%" stopColor="#e0e0e0" />
                    </linearGradient>
                  </defs>
                  <circle cx="12" cy="12" r="9" stroke="url(#logoGrad)" strokeWidth="2" fill="none" />
                  <path d="M8 12c0-2.2 1.8-4 4-4s4 1.8 4 4-1.8 4-4 4-4-1.8-4-4z" fill="url(#logoGrad)" />
                  <circle cx="12" cy="12" r="2" fill="#fff" />
                </svg>
              </div>

              {/* Orbital ring */}
              <div className="absolute inset-0 border-2 border-blue-400/30 rounded-xl animate-ping opacity-0 group-hover:opacity-100" style={{ animationDuration: '2s' }} />
            </div>

            {/* Brand name */}
            <div className="flex flex-col">
              <span className="text-2xl font-black tracking-tight gradient-text">
                SymLab
              </span>
              <span className="text-xs text-gray-400 font-medium -mt-1">
                STEM Platform
              </span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-2">
            {navLinks.slice(0, 6).map((link, index) => (
              <Link
                key={link.name}
                href={link.href}
                className={`
                  group relative px-4 py-2 rounded-lg
                  text-sm font-semibold text-gray-300
                  hover:text-white
                  transition-all duration-300
                  animate-fadeIn
                `}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {/* Hover background */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Content */}
                <span className="relative z-10 flex items-center gap-2">
                  <span className="text-lg">{link.icon}</span>
                  <span>{link.name}</span>
                </span>

                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              </Link>
            ))}

            {/* CTA Button */}
            <Link
              href="/apropos"
              className="relative ml-2 px-6 py-2.5 rounded-lg font-bold text-sm overflow-hidden group hover-lift"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-gradient" />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 blur-xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transition-opacity duration-300" />
              <span className="relative z-10 text-white flex items-center gap-2">
                <span>À propos</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden glass rounded-lg p-3 text-gray-300 hover:text-white transition-all hover-lift"
            aria-label="Toggle menu"
          >
            <svg
              className={`h-6 w-6 transition-transform duration-300 ${mobileMenuOpen ? 'rotate-90' : ''}`}
              stroke="currentColor"
              fill="none"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden pb-6 space-y-2 animate-fadeIn">
            {navLinks.map((link, index) => (
              <Link
                key={link.name}
                href={link.href}
                className={`
                  group flex items-center gap-3 px-4 py-3 rounded-lg
                  text-base font-semibold text-gray-300
                  hover:text-white
                  glass-subtle hover:glass
                  transition-all duration-300
                  animate-slideInLeft
                `}
                style={{ animationDelay: `${index * 50}ms` }}
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="text-2xl">{link.icon}</span>
                <span>{link.name}</span>
                <svg
                  className="w-5 h-5 ml-auto transform group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            ))}
          </div>
        )}
      </div>

      {/* Bottom border with gradient */}
      <div className="h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />
    </nav>
  );
}
