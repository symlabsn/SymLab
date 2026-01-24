'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { Home, FlaskConical, BookOpen, Code, Trophy } from 'lucide-react';

const navItems = [
    { href: '/', icon: Home, label: 'Accueil', color: '#06d6a0' },
    { href: '/simulations', icon: FlaskConical, label: 'Simulations', color: '#8b5cf6' },
    { href: '/courses', icon: BookOpen, label: 'Cours', color: '#38bdf8' },
    { href: '/programming', icon: Code, label: 'Code', color: '#f59e0b' },
    { href: '/challenges', icon: Trophy, label: 'Défis', color: '#f472b6' },
];

export default function MobileBottomNav() {
    const pathname = usePathname();

    // Don't show on simulation detail pages (fullscreen 3D)
    if (pathname.includes('/simulations/') && pathname !== '/simulations') {
        return null;
    }

    return (
        <nav
            className="mobile-bottom-nav"
            aria-label="Navigation mobile"
        >
            {navItems.map((item) => {
                const isActive = pathname === item.href ||
                    (item.href !== '/' && pathname.startsWith(item.href));
                const Icon = item.icon;

                return (
                    <Link
                        key={item.href}
                        href={item.href}
                        className={`
                            relative flex flex-col items-center justify-center 
                            py-2 px-3 rounded-2xl
                            transition-all duration-300
                            ${isActive
                                ? 'bg-white/[0.08]'
                                : 'hover:bg-white/[0.04]'
                            }
                        `}
                        aria-current={isActive ? 'page' : undefined}
                    >
                        {/* Active indicator glow */}
                        {isActive && (
                            <motion.div
                                layoutId="mobileNavGlow"
                                className="absolute inset-0 rounded-2xl"
                                style={{
                                    background: `radial-gradient(circle at 50% 30%, ${item.color}20, transparent 70%)`,
                                }}
                                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                            />
                        )}

                        {/* Icon */}
                        <motion.div
                            animate={{
                                scale: isActive ? 1.1 : 1,
                                y: isActive ? -2 : 0
                            }}
                            transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                            className="relative z-10"
                        >
                            <Icon
                                size={22}
                                strokeWidth={isActive ? 2.2 : 1.8}
                                style={{
                                    color: isActive ? item.color : '#64748b',
                                    filter: isActive ? `drop-shadow(0 0 8px ${item.color}60)` : 'none'
                                }}
                            />
                        </motion.div>

                        {/* Label */}
                        <motion.span
                            className="relative z-10 text-[10px] font-semibold mt-1 tracking-wide"
                            style={{
                                color: isActive ? item.color : '#64748b',
                                opacity: isActive ? 1 : 0.7
                            }}
                            animate={{
                                opacity: isActive ? 1 : 0,
                                height: isActive ? 'auto' : 0,
                                marginTop: isActive ? 4 : 0
                            }}
                        >
                            {item.label}
                        </motion.span>

                        {/* Active dot indicator */}
                        {isActive && (
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                className="absolute -top-0.5 w-1 h-1 rounded-full"
                                style={{ backgroundColor: item.color }}
                            />
                        )}
                    </Link>
                );
            })}
        </nav>
    );
}
