'use client';

import { useState } from 'react';

export default function ModuleCard({
    icon,
    title,
    description,
    href,
    gradient = 'blue',
    stats
}) {
    const [isHovered, setIsHovered] = useState(false);

    const gradientClasses = {
        blue: {
            bg: 'from-blue-500/20 via-cyan-500/10 to-blue-600/5',
            border: 'border-blue-400/30',
            glow: 'group-hover:shadow-blue-500/50',
            text: 'text-blue-400',
            neon: 'neon-blue'
        },
        purple: {
            bg: 'from-purple-500/20 via-violet-500/10 to-purple-600/5',
            border: 'border-purple-400/30',
            glow: 'group-hover:shadow-purple-500/50',
            text: 'text-purple-400',
            neon: 'neon-purple'
        },
        pink: {
            bg: 'from-pink-500/20 via-rose-500/10 to-pink-600/5',
            border: 'border-pink-400/30',
            glow: 'group-hover:shadow-pink-500/50',
            text: 'text-pink-400',
            neon: 'neon-pink'
        },
        green: {
            bg: 'from-green-500/20 via-emerald-500/10 to-green-600/5',
            border: 'border-green-400/30',
            glow: 'group-hover:shadow-green-500/50',
            text: 'text-green-400',
            neon: 'neon-green'
        },
        cyan: {
            bg: 'from-cyan-500/20 via-teal-500/10 to-cyan-600/5',
            border: 'border-cyan-400/30',
            glow: 'group-hover:shadow-cyan-500/50',
            text: 'text-cyan-400',
            neon: 'neon-cyan'
        }
    };

    const colors = gradientClasses[gradient] || gradientClasses.blue;

    return (
        <a
            href={href}
            className="group block perspective-card"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className={`
        relative h-full min-h-[320px]
        glass rounded-2xl p-8
        border-2 ${colors.border}
        bg-gradient-to-br ${colors.bg}
        transform-3d hover-lift
        transition-all duration-500
        overflow-hidden
        ${colors.glow}
      `}>
                {/* Animated background glow */}
                <div className={`
          absolute inset-0 
          bg-gradient-to-br ${colors.bg}
          opacity-0 group-hover:opacity-100
          blur-2xl
          transition-opacity duration-500
        `} />

                {/* Shimmer effect on hover */}
                <div className={`
          absolute inset-0
          bg-gradient-to-r from-transparent via-white/10 to-transparent
          -translate-x-full group-hover:translate-x-full
          transition-transform duration-1000
        `} />

                {/* Content */}
                <div className="relative z-10">
                    {/* Icon with floating animation */}
                    <div className={`
            text-7xl mb-6
            ${isHovered ? 'animate-float' : ''}
            transition-all duration-300
          `}>
                        {icon}
                    </div>

                    {/* Title with neon effect */}
                    <h3 className={`
            text-2xl font-black mb-4
            ${isHovered ? colors.neon : 'text-white'}
            transition-all duration-300
          `}>
                        {title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-300 text-sm leading-relaxed mb-6">
                        {description}
                    </p>

                    {/* Stats (if provided) */}
                    {stats && (
                        <div className="flex gap-4 mb-6">
                            {stats.map((stat, index) => (
                                <div key={index} className="flex-1">
                                    <div className={`text-2xl font-bold ${colors.text}`}>
                                        {stat.value}
                                    </div>
                                    <div className="text-xs text-gray-400">
                                        {stat.label}
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}

                    {/* CTA Button */}
                    <div className={`
            inline-flex items-center gap-2
            ${colors.text} font-bold
            group-hover:gap-4
            transition-all duration-300
          `}>
                        <span>Explorer</span>
                        <svg
                            className="w-5 h-5 transform group-hover:translate-x-1 transition-transform"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M13 7l5 5m0 0l-5 5m5-5H6"
                            />
                        </svg>
                    </div>
                </div>

                {/* Corner accent */}
                <div className={`
          absolute top-0 right-0
          w-32 h-32
          bg-gradient-to-br ${colors.bg}
          rounded-bl-full
          opacity-30
          group-hover:opacity-60
          transition-opacity duration-500
        `} />

                {/* Bottom accent line */}
                <div className={`
          absolute bottom-0 left-0 right-0
          h-1
          bg-gradient-to-r ${colors.bg}
          opacity-50
          group-hover:opacity-100
          group-hover:h-2
          transition-all duration-300
        `} />
            </div>
        </a>
    );
}
