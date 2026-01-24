'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function ModuleBlock({
  href,
  title,
  description,
  accentColor,
  gradientFrom,
  gradientTo,
  icon,
  tag,
  stats,
  coverImage,
  className = ''
}) {
  const gradientStart = gradientFrom || accentColor;
  const gradientEnd = gradientTo || accentColor;

  return (
    <Link href={href} className={`group block ${className}`}>
      <div
        className="
                    relative w-full h-full overflow-hidden rounded-3xl
                    border border-white/[0.08] 
                    bg-[#0a0f1e]/80 backdrop-blur-xl
                    transition-all duration-700 ease-out
                    hover:border-white/20
                    hover:-translate-y-3
                    hover:shadow-[0_30px_80px_-20px_var(--glow-color)]
                "
        style={{
          '--accent-color': accentColor,
          '--glow-color': `${accentColor}40`
        }}
      >
        {/* Cover Image */}
        {coverImage && (
          <div className="relative h-48 sm:h-56 overflow-hidden">
            <Image
              src={coverImage}
              alt={title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            {/* Gradient overlay */}
            <div
              className="absolute inset-0 transition-opacity duration-500"
              style={{
                background: `linear-gradient(180deg, transparent 0%, ${accentColor}15 50%, #0a0f1e 100%)`
              }}
            />
            {/* Top gradient for tag visibility */}
            <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-black/60 to-transparent" />

            {/* Tag positioned on image */}
            {tag && (
              <div className="absolute top-4 left-4 flex items-center gap-2">
                <span
                  className="px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest rounded-full backdrop-blur-md transition-all duration-300 group-hover:scale-105"
                  style={{
                    color: accentColor,
                    background: `${accentColor}20`,
                    border: `1px solid ${accentColor}40`,
                    boxShadow: `0 0 20px ${accentColor}20`
                  }}
                >
                  <span className="flex items-center gap-1.5">
                    <Sparkles size={10} />
                    {tag}
                  </span>
                </span>
              </div>
            )}

            {/* Stats badge */}
            {stats && (
              <div className="absolute top-4 right-4 px-3 py-1.5 rounded-full bg-black/50 backdrop-blur-md border border-white/10">
                <span className="text-[10px] font-semibold text-white/70">{stats}</span>
              </div>
            )}
          </div>
        )}

        {/* Content Area */}
        <div className="relative p-6 pt-5">
          {/* Shimmer sweep effect */}
          <div className="shimmer-sweep opacity-30" />

          {/* Icon + Title row */}
          <div className="flex items-start gap-4 mb-4">
            {/* Icon Container */}
            <div
              className="relative flex-shrink-0 p-3.5 rounded-2xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-3"
              style={{
                background: `linear-gradient(135deg, ${gradientStart}20, ${gradientEnd}10)`,
                border: `1px solid ${accentColor}30`,
                boxShadow: `0 0 30px ${accentColor}15, inset 0 1px 0 rgba(255,255,255,0.1)`
              }}
            >
              {/* Icon glow effect */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"
                style={{ background: accentColor }}
              />
              <div
                className="relative z-10"
                style={{ color: accentColor }}
              >
                {icon}
              </div>
            </div>

            {/* Title and stats */}
            <div className="flex-1 min-w-0">
              <h3 className="text-xl sm:text-2xl font-black text-white mb-1 tracking-tight group-hover:text-white transition-colors leading-tight">
                {title}
              </h3>
              {!coverImage && tag && (
                <span
                  className="inline-block px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest rounded-full"
                  style={{
                    color: accentColor,
                    background: `${accentColor}15`,
                    border: `1px solid ${accentColor}25`
                  }}
                >
                  {tag}
                </span>
              )}
            </div>
          </div>

          {/* Description */}
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed mb-6 group-hover:text-slate-300 transition-colors line-clamp-2">
            {description}
          </p>

          {/* Action Button */}
          <div
            className="
                            relative flex items-center justify-between w-full px-5 py-3.5
                            rounded-xl overflow-hidden 
                            border transition-all duration-500
                            group-hover:border-transparent
                        "
            style={{
              borderColor: `${accentColor}20`,
              background: `linear-gradient(90deg, ${accentColor}08, transparent)`
            }}
          >
            {/* Button background on hover */}
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{
                background: `linear-gradient(90deg, ${gradientStart}, ${gradientEnd})`
              }}
            />

            <span
              className="relative z-10 text-sm font-bold uppercase tracking-wider transition-colors duration-500"
              style={{ color: accentColor }}
            >
              <span className="group-hover:text-black transition-colors duration-500">
                Explorer
              </span>
            </span>

            <div className="relative z-10 flex items-center gap-2">
              <ArrowRight
                size={18}
                className="transition-all duration-500 group-hover:translate-x-1"
                style={{ color: accentColor }}
              />
            </div>
          </div>
        </div>

        {/* Decorative corner accent */}
        <div
          className="absolute bottom-0 right-0 w-32 h-32 opacity-20 transition-opacity duration-500 group-hover:opacity-40"
          style={{
            background: `radial-gradient(circle at 100% 100%, ${accentColor}40, transparent 70%)`
          }}
        />
      </div>
    </Link>
  );
}
