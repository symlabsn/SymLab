'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, FlaskConical, BookOpen, Code, Trophy, Sparkles } from 'lucide-react';

const navItems = [
    { href: '/', icon: Home, label: 'Accueil', color: '#06d6a0', activeGradient: 'from-[#06d6a0] to-[#4ade80]' },
    { href: '/simulations', icon: FlaskConical, label: 'Simulations', color: '#8b5cf6', activeGradient: 'from-[#8b5cf6] to-[#a78bfa]' },
    { href: '/courses', icon: BookOpen, label: 'Cours', color: '#38bdf8', activeGradient: 'from-[#38bdf8] to-[#22d3ee]' },
    { href: '/programming', icon: Code, label: 'Code', color: '#f59e0b', activeGradient: 'from-[#f59e0b] to-[#fbbf24]' },
    { href: '/challenges', icon: Trophy, label: 'Défis', color: '#f472b6', activeGradient: 'from-[#f472b6] to-[#fb7185]' },
];

export default function MobileBottomNav() {
    const pathname = usePathname();
    const [ripple, setRipple] = useState({ show: false, x: 0, y: 0, index: -1 });
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    // Hide on scroll down, show on scroll up
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            if (currentScrollY > lastScrollY && currentScrollY > 100) {
                setIsVisible(false);
            } else {
                setIsVisible(true);
            }
            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);

    // Don't show on simulation detail pages (fullscreen 3D)
    if (pathname.includes('/simulations/') && pathname !== '/simulations') {
        return null;
    }

    const handleTap = (e, index) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setRipple({
            show: true,
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
            index
        });
        setTimeout(() => setRipple({ show: false, x: 0, y: 0, index: -1 }), 400);
    };

    return (
        <motion.nav
            initial={{ y: 100 }}
            animate={{ y: isVisible ? 0 : 100 }}
            transition={{ type: 'spring', stiffness: 400, damping: 30 }}
            className="mobile-bottom-nav"
            aria-label="Navigation mobile"
        >
            {/* Premium glass background effect */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/90 to-black/80 backdrop-blur-2xl" />

            {/* Top border glow */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

            <div className="relative flex items-center justify-around w-full max-w-md mx-auto">
                {navItems.map((item, index) => {
                    const isActive = pathname === item.href ||
                        (item.href !== '/' && pathname.startsWith(item.href));
                    const Icon = item.icon;

                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            onClick={(e) => handleTap(e, index)}
                            className="relative flex flex-col items-center justify-center py-2 px-4 rounded-2xl transition-all duration-300 overflow-hidden"
                            aria-current={isActive ? 'page' : undefined}
                        >
                            {/* Ripple effect */}
                            <AnimatePresence>
                                {ripple.show && ripple.index === index && (
                                    <motion.span
                                        initial={{ scale: 0, opacity: 0.5 }}
                                        animate={{ scale: 4, opacity: 0 }}
                                        exit={{ opacity: 0 }}
                                        transition={{ duration: 0.4 }}
                                        className="absolute rounded-full w-10 h-10 pointer-events-none"
                                        style={{
                                            left: ripple.x - 20,
                                            top: ripple.y - 20,
                                            background: item.color,
                                        }}
                                    />
                                )}
                            </AnimatePresence>

                            {/* Active background pill */}
                            {isActive && (
                                <motion.div
                                    layoutId="mobileNavActiveBackground"
                                    className="absolute inset-0 rounded-2xl"
                                    style={{
                                        background: `linear-gradient(135deg, ${item.color}20 0%, ${item.color}10 100%)`,
                                        boxShadow: `0 0 20px ${item.color}15`
                                    }}
                                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                                />
                            )}

                            {/* Icon container with glow */}
                            <motion.div
                                animate={{
                                    scale: isActive ? 1.15 : 1,
                                    y: isActive ? -3 : 0
                                }}
                                transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                                className="relative z-10"
                            >
                                {/* Active glow behind icon */}
                                {isActive && (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.5 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className="absolute inset-0 blur-lg"
                                        style={{ background: item.color, opacity: 0.4 }}
                                    />
                                )}
                                <Icon
                                    size={24}
                                    strokeWidth={isActive ? 2.3 : 1.8}
                                    style={{
                                        color: isActive ? item.color : '#64748b',
                                        filter: isActive ? `drop-shadow(0 0 8px ${item.color}80)` : 'none'
                                    }}
                                    className="relative z-10 transition-all duration-200"
                                />
                            </motion.div>

                            {/* Label with animation */}
                            <AnimatePresence>
                                {isActive && (
                                    <motion.span
                                        initial={{ opacity: 0, y: 5, scale: 0.8 }}
                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                        exit={{ opacity: 0, y: 5, scale: 0.8 }}
                                        transition={{ type: 'spring', stiffness: 500, damping: 25 }}
                                        className="relative z-10 text-[11px] font-bold mt-1 tracking-wide"
                                        style={{ color: item.color }}
                                    >
                                        {item.label}
                                    </motion.span>
                                )}
                            </AnimatePresence>

                            {/* Active indicator dot */}
                            {isActive && (
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ type: 'spring', stiffness: 500, damping: 25, delay: 0.1 }}
                                    className="absolute -top-1 w-1.5 h-1.5 rounded-full"
                                    style={{
                                        backgroundColor: item.color,
                                        boxShadow: `0 0 8px ${item.color}`
                                    }}
                                />
                            )}
                        </Link>
                    );
                })}
            </div>

            {/* Subtle sparkle effect on active item */}
            <AnimatePresence>
                {navItems.map((item, i) => {
                    const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));
                    if (!isActive) return null;
                    return (
                        <motion.div
                            key={`sparkle-${i}`}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: [0, 1, 0] }}
                            transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                            className="absolute pointer-events-none"
                            style={{
                                left: `${(i + 0.5) * 20}%`,
                                top: '10%'
                            }}
                        >
                            <Sparkles size={12} style={{ color: item.color }} />
                        </motion.div>
                    );
                })}
            </AnimatePresence>
        </motion.nav>
    );
}
