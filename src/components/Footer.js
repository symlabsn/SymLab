'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Footer() {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    // TODO: Implement newsletter subscription
    alert('Merci pour votre inscription ! 🎉');
    setEmail('');
  };

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
      { name: 'Blog', href: '#' },
      { name: 'Carrières', href: '#' },
    ],
    legal: [
      { name: 'Confidentialité', href: '#' },
      { name: 'Conditions', href: '#' },
      { name: 'Licence', href: '#' },
    ],
  };

  const socialLinks = [
    { name: 'GitHub', icon: '💻', href: 'https://github.com', color: 'hover:text-purple-400' },
    { name: 'Twitter', icon: '🐦', href: 'https://twitter.com', color: 'hover:text-blue-400' },
    { name: 'LinkedIn', icon: '💼', href: 'https://linkedin.com', color: 'hover:text-blue-500' },
    { name: 'YouTube', icon: '📺', href: 'https://youtube.com', color: 'hover:text-red-500' },
  ];

  return (
    <footer className="relative mt-20 border-t border-white/10">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/10 to-transparent pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Top Section - Newsletter */}
        <div className="glass-strong rounded-3xl p-8 md:p-12 mb-16 text-center">
          <h3 className="text-3xl md:text-4xl font-black mb-4 gradient-text">
            Restez Informé 📬
          </h3>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Recevez les dernières mises à jour, nouveaux cours et ressources directement dans votre boîte mail
          </p>

          <form onSubmit={handleSubscribe} className="max-w-md mx-auto">
            <div className="flex gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="votre@email.com"
                required
                className="flex-1 px-6 py-4 rounded-xl glass text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
              />
              <button
                type="submit"
                className="relative px-8 py-4 rounded-xl font-bold overflow-hidden group hover-lift"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-gradient" />
                <span className="relative z-10 text-white">S'abonner</span>
              </button>
            </div>
          </form>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-4 group">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="9" stroke="#fff" strokeWidth="2" fill="none" />
                  <path d="M8 12c0-2.2 1.8-4 4-4s4 1.8 4 4-1.8 4-4 4-4-1.8-4-4z" fill="#fff" />
                  <circle cx="12" cy="12" r="2" fill="#000" />
                </svg>
              </div>
              <div>
                <div className="text-xl font-black gradient-text">SymLab</div>
                <div className="text-xs text-gray-400">STEM Platform</div>
              </div>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed mb-4">
              La plateforme STEM la plus innovante du Sénégal pour l'apprentissage interactif des sciences et technologies.
            </p>

            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`glass rounded-lg p-2 text-2xl transition-all hover-lift ${social.color}`}
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Platform Links */}
          <div>
            <h4 className="text-white font-bold mb-4 flex items-center gap-2">
              <span className="text-xl">🚀</span>
              <span>Plateforme</span>
            </h4>
            <ul className="space-y-2">
              {footerLinks.platform.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white hover:translate-x-1 inline-block transition-all duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h4 className="text-white font-bold mb-4 flex items-center gap-2">
              <span className="text-xl">📚</span>
              <span>Ressources</span>
            </h4>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white hover:translate-x-1 inline-block transition-all duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-white font-bold mb-4 flex items-center gap-2">
              <span className="text-xl">🏢</span>
              <span>Entreprise</span>
            </h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white hover:translate-x-1 inline-block transition-all duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="text-white font-bold mb-4 flex items-center gap-2">
              <span className="text-xl">⚖️</span>
              <span>Légal</span>
            </h4>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white hover:translate-x-1 inline-block transition-all duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-gray-400 text-center md:text-left">
              <p>
                © {new Date().getFullYear()} <span className="gradient-text font-bold">SymLab</span>.
                Tous droits réservés. Fait avec ❤️ au Sénégal 🇸🇳
              </p>
            </div>

            <div className="flex items-center gap-4 text-sm text-gray-400">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                <span>Tous systèmes opérationnels</span>
              </span>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-50" />
      </div>
    </footer>
  );
}
