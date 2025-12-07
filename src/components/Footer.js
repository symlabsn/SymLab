'use client';

import Link from 'next/link';

export default function Footer() {
  const footerLinks = {
    platform: [
      { name: 'Simulations', href: '/simulations' },
      { name: 'Python Lab', href: '/programming' },
      { name: 'QCM', href: '/challenges' },
      { name: 'Projets', href: '/programming?chapter=projects' },
    ],
    resources: [
      { name: 'Cours', href: '/courses' },
      { name: 'Ressources', href: '/ressources' },
      { name: 'Code Editor', href: '/code' },
      { name: 'Examens', href: '/exams' },
    ],
  };

  return (
    <footer className="mt-16 py-12 border-t border-white/10 bg-black/50 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          {/* Logo Column */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="text-2xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-[#00F5D4] to-[#7C3AED]">
              SYMLAB
            </Link>
            <p className="mt-4 text-sm text-gray-400">
              La plateforme éducative STEM nouvelle génération pour le Sénégal.
            </p>
          </div>

          {/* Links Columns */}
          <div>
            <h4 className="font-bold text-white mb-4">Plateforme</h4>
            <ul className="space-y-2">
              {footerLinks.platform.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-gray-400 hover:text-[#00F5D4] transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4">Ressources</h4>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-gray-400 hover:text-[#7C3AED] transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4">Contact</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-sm text-gray-400 hover:text-white transition-colors">
                  À propos
                </Link>
              </li>
              <li>
                <a href="mailto:contact@symlab.sn" className="text-sm text-gray-400 hover:text-white transition-colors">
                  contact@symlab.sn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 text-center">
          <div className="text-sm text-gray-500">
            © {new Date().getFullYear()} SymLab — Fait avec ❤️ pour l&apos;éducation.
          </div>
        </div>
      </div>
    </footer>
  );
}
