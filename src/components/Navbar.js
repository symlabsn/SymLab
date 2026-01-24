'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { Menu, X, Sparkles, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: 'Accueil', href: '/', icon: '🏠' },
    { name: 'Programmation', href: '/programming', icon: '💻' },
    { name: 'Simulations', href: '/simulations', icon: '🔬' },
    { name: 'Ingénierie', href: '/engineering', icon: '⚙️' },
    { name: 'Challenges', href: '/challenges', icon: '🚀' },
    { name: 'Cours', href: '/courses', icon: '📚' },
  ];

  const menuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] }
    },
    open: {
      opacity: 1,
      height: 'auto',
      transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] }
    }
  };

  const linkVariants = {
    closed: { opacity: 0, x: -10 },
    open: (i) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.05 + 0.1 }
    })
  };

  return (
    <nav className={`
            fixed top-0 left-0 right-0 z-50 
            transition-all duration-500
            ${scrolled
        ? 'bg-[#020617]/85 backdrop-blur-2xl border-b border-white/[0.06] shadow-[0_4px_30px_rgba(0,0,0,0.3)]'
        : 'bg-transparent'
      }
        `}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-18">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group z-50">
            <div className="relative">
              {/* Logo glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#06d6a0] to-[#8b5cf6] rounded-lg opacity-0 group-hover:opacity-40 blur-xl transition-opacity duration-500" />

              <span className="relative text-xl sm:text-2xl font-black tracking-tight transition-transform duration-300 group-hover:scale-105">
                <span className="text-white">SYM</span>
                <span className="bg-gradient-to-r from-[#06d6a0] to-[#8b5cf6] bg-clip-text text-transparent">LAB</span>
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href ||
                (link.href !== '/' && pathname.startsWith(link.href));
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`
                                        relative px-4 py-2.5 text-sm font-medium rounded-xl
                                        transition-all duration-300 group
                                        ${isActive
                      ? 'text-white'
                      : 'text-slate-400 hover:text-white'
                    }
                                    `}
                >
                  {/* Background hover effect */}
                  <span className={`
                                        absolute inset-0 rounded-xl transition-all duration-300
                                        ${isActive
                      ? 'bg-white/[0.08]'
                      : 'bg-transparent group-hover:bg-white/[0.05]'
                    }
                                    `} />

                  <span className="relative z-10">{link.name}</span>

                  {/* Active indicator */}
                  {isActive && (
                    <motion.span
                      layoutId="navIndicator"
                      className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/5 h-0.5 bg-gradient-to-r from-[#06d6a0] to-[#8b5cf6] rounded-full"
                      style={{ boxShadow: '0 0 12px rgba(6, 214, 160, 0.6)' }}
                    />
                  )}
                </Link>
              );
            })}

            {/* About button */}
            <Link
              href="/about"
              className="
                                ml-4 relative px-5 py-2.5 rounded-xl 
                                border border-white/10 overflow-hidden group
                                transition-all duration-300
                                hover:border-[#06d6a0]/40
                            "
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#06d6a0]/10 to-[#8b5cf6]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative flex items-center gap-2 text-sm font-semibold">
                <Sparkles size={14} className="text-[#06d6a0]" />
                <span className="bg-gradient-to-r from-[#06d6a0] to-[#8b5cf6] bg-clip-text text-transparent">
                  À propos
                </span>
              </span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="
                            lg:hidden relative z-50 p-2.5 rounded-xl
                            text-slate-300 hover:text-white 
                            hover:bg-white/10
                            transition-all duration-300
                        "
            aria-label={mobileMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          >
            <AnimatePresence mode="wait">
              {mobileMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X size={24} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu size={24} />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="lg:hidden overflow-hidden"
            >
              <div className="py-4 px-2 space-y-1.5 glass-premium rounded-2xl mb-4">
                {navLinks.map((link, i) => {
                  const isActive = pathname === link.href ||
                    (link.href !== '/' && pathname.startsWith(link.href));
                  return (
                    <motion.div
                      key={link.name}
                      custom={i}
                      variants={linkVariants}
                      initial="closed"
                      animate="open"
                    >
                      <Link
                        href={link.href}
                        className={`
                                                    flex items-center gap-3 px-4 py-3.5 rounded-xl
                                                    text-base font-medium transition-all duration-300
                                                    ${isActive
                            ? 'bg-gradient-to-r from-[#06d6a0]/15 to-[#8b5cf6]/10 text-white border-l-3 border-[#06d6a0]'
                            : 'text-slate-400 hover:text-white hover:bg-white/[0.05]'
                          }
                                                `}
                      >
                        <span className="text-lg">{link.icon}</span>
                        <span className="flex-1">{link.name}</span>
                        {isActive && (
                          <ChevronRight size={18} className="text-[#06d6a0]" />
                        )}
                      </Link>
                    </motion.div>
                  );
                })}

                {/* About link in menu */}
                <motion.div
                  custom={navLinks.length}
                  variants={linkVariants}
                  initial="closed"
                  animate="open"
                  className="pt-3 mt-2 border-t border-white/[0.06]"
                >
                  <Link
                    href="/about"
                    className="
                                            flex items-center justify-center gap-2
                                            mx-2 px-4 py-3.5 rounded-xl
                                            bg-gradient-to-r from-[#06d6a0] to-[#8b5cf6]
                                            text-black font-bold text-base
                                            shadow-[0_4px_20px_rgba(6,214,160,0.3)]
                                            hover:shadow-[0_8px_30px_rgba(6,214,160,0.4)]
                                            transition-all duration-300
                                        "
                  >
                    <Sparkles size={18} />
                    À propos de SymLab
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
