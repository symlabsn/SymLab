'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 text-gray-300 border-t border-purple-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">SymLab</h3>
            <p className="text-sm">
              Plateforme STEM interactive pour explorer les mathématiques, physique et programmation.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Explorez</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/sims" className="hover:text-blue-400 transition">Simulations</Link></li>
              <li><Link href="/code" className="hover:text-blue-400 transition">Python Lab</Link></li>
              <li><Link href="/exams" className="hover:text-blue-400 transition">QCM</Link></li>
              <li><Link href="/ressources" className="hover:text-blue-400 transition">Ressources</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Ressources</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-blue-400 transition">Documentation</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">Tutoriels</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">FAQ</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">Communauté</a></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Connectez-vous</h4>
            <div className="flex space-x-4">
              <a href="#" className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-purple-800 hover:bg-purple-700 transition">
                <span className="text-lg">f</span>
              </a>
              <a href="#" className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-purple-800 hover:bg-purple-700 transition">
                <span className="text-lg">𝕏</span>
              </a>
              <a href="#" className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-purple-800 hover:bg-purple-700 transition">
                <span className="text-lg">in</span>
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-purple-800 pt-8">
          <p className="text-center text-sm text-gray-400">
            © 2025 SymLab. Plateforme STEM pour le Sénégal. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}
