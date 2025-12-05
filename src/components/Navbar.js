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
    { name: 'Accueil', href: '/' },
    { name: 'Programmation', href: '/programming' },
    { name: 'Simulations', href: '/simulations' },
    { name: 'Ingénierie', href: '/engineering' },
    { name: 'Challenges', href: '/challenges' },
    { name: 'Vidéos', href: '/videos' },
  ];

  return (
    <nav className={`
      fixed top-0 left-0 right-0 z-50 
      transition-all duration-300
      ${scrolled ? 'bg-[rgba(255,255,255,0.03)] backdrop-blur-sm border-b border-white/6' : 'bg-transparent'}
    `}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="text-2xl font-extrabold bg-clip-text text-transparent" style={{ background: 'linear-gradient(90deg, var(--accent), var(--accent-2))' }} aria-label="SymLab">
              {['S', 'y', 'm', 'L', 'a', 'b'].map((ch, i) => (
                <span key={i} className="logo-letter">{ch}</span>
              ))}
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-muted hover:text-white transition-colors"
              >
                {link.name}
              </Link>
            ))}

            <Link
              href="/about"
              className="ml-4 relative px-5 py-2 rounded-full bg-gradient-to-r from-[#00F5D4]/10 to-[#7C3AED]/10 border border-white/10 hover:border-[#00F5D4]/50 transition-all group"
            >
              <span className="text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#00F5D4] to-[#7C3AED] group-hover:from-white group-hover:to-white transition-all">
                À propos
              </span>
              <span className="absolute -top-1 -right-1 flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00F5D4] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-[#00F5D4]"></span>
              </span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-gray-300 hover:text-white"
          >
            <svg
              className="h-6 w-6"
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
          <div className="lg:hidden pb-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="block px-4 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-white/5 rounded transition-all"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/about"
              className="block px-4 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-white/5 rounded transition-all"
              onClick={() => setMobileMenuOpen(false)}
            >
              À propos
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
