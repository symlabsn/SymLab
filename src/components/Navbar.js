'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const pathname = usePathname();
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
    { name: 'Cours', href: '/courses' },
  ];

  return (
    <nav className={`
      fixed top-0 left-0 right-0 z-50 
      transition-all duration-300
      ${scrolled ? 'bg-[#020617]/90 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-indigo-500/5' : 'bg-transparent'}
    `}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="text-xl font-bold bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300 tracking-tight" style={{ background: 'linear-gradient(90deg, var(--accent), var(--accent-2))' }} aria-label="SymLab">
              {['S', 'y', 'm', 'L', 'a', 'b'].map((ch, i) => (
                <span key={i} className="logo-letter inline-block hover:animate-bounce" style={{ animationDelay: `${i * 50}ms` }}>{ch}</span>
              ))}
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`
                        px-4 py-2 text-sm font-medium transition-all duration-300 relative group
                        ${isActive ? 'text-white' : 'text-gray-400 hover:text-white'}
                    `}
                >
                  <span>{link.name}</span>
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4/5 h-0.5 bg-gradient-to-r from-[#2DD4BF] to-[#818CF8] rounded-full shadow-[0_0_8px_rgba(45,212,191,0.8)]" />
                  )}
                  <span className="absolute inset-0 bg-white/5 rounded-lg scale-90 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300 -z-10" />
                </Link>
              );
            })}

            <Link
              href="/about"
              className="ml-4 relative px-5 py-2 rounded-full border border-white/10 overflow-hidden group transition-all hover:border-[#2DD4BF]/50"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#2DD4BF]/10 to-[#818CF8]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative text-xs font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#2DD4BF] to-[#818CF8] group-hover:from-white group-hover:to-white transition-all">
                À propos
              </span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-gray-300 hover:text-white transition-colors"
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
          <div className="lg:hidden pb-6 space-y-2 bg-black/90 backdrop-blur-xl border-b border-white/10 animate-in fade-in slide-in-from-top-5">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`
                        block px-4 py-3 text-base font-medium rounded-lg mx-2 transition-all
                        ${isActive
                      ? 'bg-white/10 text-white border-l-4 border-[#2DD4BF]'
                      : 'text-gray-400 hover:text-white hover:bg-white/5'}
                    `}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              );
            })}
            <Link
              href="/about"
              className="block mt-4 mx-4 px-4 py-3 text-center text-base font-bold text-black bg-gradient-to-r from-[#2DD4BF] to-[#818CF8] rounded-lg shadow-[0_0_15px_rgba(45,212,191,0.3)] hover:shadow-[0_0_20px_rgba(45,212,191,0.5)] transition-all"
              onClick={() => setMobileMenuOpen(false)}
            >
              À propos de SymLab
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
