'use client';

import Link from 'next/link';

export default function Home() {

  const modules = [
    {
      id: 'maths',
      title: 'Mathématiques',
      href: '/maths',
      color: 'violet',
      delay: 'delay-1'
    },
    {
      id: 'physique',
      title: 'Physique',
      href: '/physique',
      color: 'cyan',
      delay: 'delay-2'
    },
    {
      id: 'ingenierie',
      title: 'Ingénierie',
      href: '/engineering',
      color: 'orange',
      delay: 'delay-3'
    },
    {
      id: 'programmation',
      title: 'Programmation',
      href: '/programming',
      color: 'pink',
      delay: 'delay-4'
    },
    {
      id: 'projets',
      title: 'Projets Concrets',
      href: '/projects',
      color: 'green',
      delay: 'delay-5'
    }
  ];

  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4 py-20">

      {/* HEADER MINIMALISTE */}
      <div className="text-center mb-16 animate-in">
        <h1 className="text-6xl md:text-9xl font-black tracking-tighter text-white mb-4 opacity-90">
          SYMLAB
        </h1>
        <p className="text-xl text-white/50 font-light tracking-widest uppercase">
          Expérimentation STEM
        </p>
      </div>

      {/* NEON STACK */}
      <div className="w-full max-w-4xl">
        {modules.map((module) => (
          <Link
            key={module.id}
            href={module.href}
            className={`neon-block ${module.color} animate-in ${module.delay}`}
          >
            <span className="block-title">{module.title}</span>

            {/* Arrow Indicator (Subtle) */}
            <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center opacity-50 group-hover:opacity-100 transition-opacity">
              <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </div>
          </Link>
        ))}
      </div>

    </main>
  );
}
