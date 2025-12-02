'use client';

import Link from 'next/link';

export default function Home() {

    const modules = [
        {
            id: '01',
            code: 'PROG_SYS',
            title: 'Programmation',
            description: 'Environnement de développement Python & Algorithmique.',
            href: '/programming',
            color: 'text-[#00F0FF]', // Cyan Tech
            status: 'ONLINE'
        },
        {
            id: '02',
            code: 'SIM_LAB',
            title: 'Simulations',
            description: 'Laboratoire virtuel de physique et modélisation 3D.',
            href: '/simulations',
            color: 'text-[#BC13FE]', // Purple Tech
            status: 'ACTIVE'
        },
        {
            id: '03',
            code: 'ENG_CORE',
            title: 'Ingénierie',
            description: 'Conception de systèmes, robotique et électronique.',
            href: '/engineering',
            color: 'text-[#FF9F1C]', // Orange Tech
            status: 'READY'
        },
        {
            id: '04',
            code: 'VID_DATA',
            title: 'Capsules Vidéos',
            description: 'Base de connaissances visuelle et tutoriels.',
            href: '/videos',
            color: 'text-[#00FF9D]', // Green Tech
            status: 'STREAM'
        }
    ];

    return (
        <main className="min-h-screen flex flex-col items-center py-20 px-4 bg-grid-pattern relative overflow-hidden">

            {/* Scanline Overlay */}
            <div className="scanline"></div>

            {/* HEADER HUD */}
            <section className="text-center mb-24 relative z-10 max-w-5xl mx-auto animate-in">
                <div className="font-tech text-xs text-blue-400 tracking-[0.5em] mb-4 opacity-70">
                    SYSTEM_VERSION_2.4 // SENEGAL_STEM_INIT
                </div>

                <h1 className="text-7xl md:text-9xl font-black tracking-tighter text-white mb-6 glitch-text cursor-default select-none">
                    SYMLAB
                </h1>

                <div className="flex items-center justify-center gap-4 mb-8 opacity-50">
                    <div className="h-px w-12 bg-white"></div>
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <div className="h-px w-12 bg-white"></div>
                </div>

                <p className="text-xl md:text-2xl text-gray-300 font-light leading-relaxed max-w-3xl mx-auto">
                    Plateforme d'expérimentation <span className="text-[#00F0FF] font-medium">Mathématiques</span>, <span className="text-[#FF9F1C] font-medium">Ingénierie</span> et <span className="text-[#BC13FE] font-medium">Physique</span>.
                </p>
            </section>

            {/* MODULES HUD GRID */}
            <section className="w-full max-w-6xl relative z-10 grid grid-cols-1 md:grid-cols-2 gap-6 px-4">
                {modules.map((module, index) => (
                    <Link
                        key={module.id}
                        href={module.href}
                        className="tech-panel group p-8 h-64 flex flex-col justify-between overflow-hidden"
                        style={{ '--active-color': module.color.replace('text-[', '').replace(']', '') }}
                    >
                        {/* Top Bar: Tech Metadata */}
                        <div className="flex justify-between items-start border-b border-white/5 pb-4 mb-4">
                            <div className="flex flex-col">
                                <span className={`font-tech text-xs ${module.color} tracking-widest`}>
                  // {module.code}
                                </span>
                                <span className="text-xs text-gray-500 font-mono mt-1">
                                    ID: {module.id}
                                </span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                                <span className="font-tech text-xs text-white/60 tracking-widest">
                                    {module.status}
                                </span>
                            </div>
                        </div>

                        {/* Main Content */}
                        <div>
                            <h3 className="text-4xl font-bold text-white mb-2 group-hover:translate-x-2 transition-transform duration-300">
                                {module.title}
                            </h3>
                            <p className="text-gray-400 text-lg font-light leading-relaxed group-hover:text-gray-200 transition-colors">
                                {module.description}
                            </p>
                        </div>

                        {/* Bottom Decoration */}
                        <div className="mt-auto pt-4 flex justify-between items-end opacity-30 group-hover:opacity-100 transition-opacity">
                            <div className="h-1 w-24 bg-gradient-to-r from-white to-transparent"></div>
                            <div className="font-tech text-[10px] text-white">ACCESS_GRANTED</div>
                        </div>

                    </Link>
                ))}
            </section>

        </main>
    );
}
