'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
    { href: '/', icon: '🏠', label: 'Accueil' },
    { href: '/simulations', icon: '🧪', label: 'Simulations' },
    { href: '/courses', icon: '📚', label: 'Cours' },
    { href: '/programming', icon: '💻', label: 'Code' },
    { href: '/challenges', icon: '🏆', label: 'Défis' },
];

export default function MobileBottomNav() {
    const pathname = usePathname();

    // Don't show on simulation detail pages (fullscreen 3D)
    if (pathname.includes('/simulations/') && pathname !== '/simulations') {
        return null;
    }

    return (
        <nav className="mobile-bottom-nav" aria-label="Navigation mobile">
            {navItems.map((item) => {
                const isActive = pathname === item.href ||
                    (item.href !== '/' && pathname.startsWith(item.href));

                return (
                    <Link
                        key={item.href}
                        href={item.href}
                        className={`mobile-nav-item ${isActive ? 'active' : ''}`}
                        aria-current={isActive ? 'page' : undefined}
                    >
                        <span className="nav-icon" role="img" aria-hidden="true">
                            {item.icon}
                        </span>
                        <span className="nav-label">{item.label}</span>
                    </Link>
                );
            })}
        </nav>
    );
}
