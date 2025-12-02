'use client';

import Link from 'next/link';

export default function Footer() {
  const footerLinks = {
    platform: [
      { name: 'Simulations', href: '/simulations' },
      { name: 'Python Lab', href: '/programming' },
      { name: 'QCM', href: '/challenges' },
      { name: 'Projets', href: '/projects' },
    ],
    resources: [
      { name: 'Vidéos', href: '/videos' },
      { name: 'Ressources', href: '/ressources' },
      { name: 'Code Editor', href: '/code' },
      { name: 'Examens', href: '/exams' },
    ],
    company: [
      { name: 'À propos', href: '/apropos' },
      { name: 'Contact', href: '/apropos#contact' },
    ],
  };

  return (
    <footer className="mt-16 py-8 border-t border-white/6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="text-sm text-muted">© {new Date().getFullYear()} SymLab — Tous droits réservés.</div>
      </div>
    </footer>
  );
}
