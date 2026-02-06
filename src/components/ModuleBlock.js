'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Sparkles, Play } from 'lucide-react';
import { motion } from 'framer-motion';

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
  className = '',
  variant = 'default' // 'default' | 'compact' | 'horizontal'
}) {
  const gradientStart = gradientFrom || accentColor;
  const gradientEnd = gradientTo || accentColor;

  // Compact variant for mobile horizontal scroll
  if (variant === 'compact') {
    return (
      <Link href={href} className={`group block ${className}`}>
        <motion.div
          whileTap={{ scale: 0.98 }}
          className="relative w-64 h-40 overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0a0f1e]/90 backdrop-blur-xl"
          style={{
            '--accent-color': accentColor,
            boxShadow: `0 8px 32px ${accentColor}15`
          }}
        >
          {/* Background gradient */}
          <div
            className="absolute inset-0 opacity-30"
            style={{
              background: `linear-gradient(135deg, ${gradientStart}20 0%, transparent 60%)`
            }}
          />

          {/* Content */}
          <div className="relative h-full p-4 flex flex-col justify-between">
            {/* Top: Icon + Tag */}
            <div className="flex items-center justify-between">
              <div
                className="p-2.5 rounded-xl"
                style={{
                  background: `linear-gradient(135deg, ${gradientStart}25, ${gradientEnd}15)`,
                  border: `1px solid ${accentColor}30`
                }}
              >
                <div style={{ color: accentColor }}>{icon}</div>
              </div>
              {tag && (
                <span
                  className="px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider rounded-full"
                  style={{
                    color: accentColor,
                    background: `${accentColor}20`,
                    border: `1px solid ${accentColor}30`
                  }}
                >
                  {tag}
                </span>
              )}
            </div>

            {/* Bottom: Title + Arrow */}
            <div>
              <h3 className="text-lg font-bold text-white mb-1 line-clamp-1">{title}</h3>
              <div className="flex items-center justify-between">
                <span className="text-xs text-slate-400">{stats}</span>
                <motion.div
                  whileHover={{ x: 4 }}
                  className="w-8 h-8 rounded-full flex items-center justify-center"
                  style={{ background: `${accentColor}20` }}
                >
                  <Play size={14} style={{ color: accentColor }} fill={accentColor} />
                </motion.div>
              </div>
            </div>
          </div>

          {/* Corner glow */}
          <div
            className="absolute -bottom-8 -right-8 w-24 h-24 rounded-full blur-2xl opacity-40"
            style={{ background: accentColor }}
          />
        </motion.div>
      </Link>
    );
  }

  // Horizontal variant for mobile list view
  if (variant === 'horizontal') {
    return (
      <Link href={href} className={`group block ${className}`}>
        <motion.div
          whileTap={{ scale: 0.98 }}
          className="relative flex items-center gap-4 p-4 overflow-hidden rounded-2xl border border-white/[0.06] bg-[#0a0f1e]/80 backdrop-blur-xl active:bg-white/[0.04]"
          style={{ '--accent-color': accentColor }}
        >
          {/* Icon */}
          <div
            className="relative flex-shrink-0 p-3 rounded-xl"
            style={{
              background: `linear-gradient(135deg, ${gradientStart}20, ${gradientEnd}10)`,
              border: `1px solid ${accentColor}30`
            }}
          >
            <div style={{ color: accentColor }}>{icon}</div>
          </div>

          {/* Content */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-0.5">
              <h3 className="text-base font-bold text-white truncate">{title}</h3>
              {tag && (
                <span
                  className="flex-shrink-0 px-2 py-0.5 text-[8px] font-bold uppercase rounded-full"
                  style={{
                    color: accentColor,
                    background: `${accentColor}15`
                  }}
                >
                  {tag}
                </span>
              )}
            </div>
            <p className="text-xs text-slate-500 line-clamp-1">{description}</p>
          </div>

          {/* Arrow */}
          <ArrowRight
            size={18}
            className="flex-shrink-0 text-slate-600 group-active:text-slate-400 transition-colors"
          />
        </motion.div>
      </Link>
    );
  }

  // Default full variant
  return (
    <Link href={href} className={`group block ${className}`}>
      <motion.div
        whileTap={{ scale: 0.98 }}
        className="
          relative w-full h-full overflow-hidden rounded-3xl
          border border-white/[0.08] 
          bg-[#0a0f1e]/80 backdrop-blur-xl
          transition-all duration-500 ease-out
          md:hover:border-white/20
          md:hover:-translate-y-3
          md:hover:shadow-[0_30px_80px_-20px_var(--glow-color)]
          active:scale-[0.99] active:opacity-95
        "
        style={{
          '--accent-color': accentColor,
          '--glow-color': `${accentColor}40`
        }}
      >
        {/* Cover Image */}
        {coverImage && (
          <div className="relative h-40 sm:h-48 md:h-56 overflow-hidden">
            <Image
              src={coverImage}
              alt={title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover transition-transform duration-700 md:group-hover:scale-110"
              priority={false}
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
              <div className="absolute top-3 left-3 sm:top-4 sm:left-4 flex items-center gap-2">
                <span
                  className="px-2.5 py-1 sm:px-3 sm:py-1.5 text-[9px] sm:text-[10px] font-bold uppercase tracking-widest rounded-full backdrop-blur-md transition-all duration-300 group-hover:scale-105"
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
              <div className="absolute top-3 right-3 sm:top-4 sm:right-4 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full bg-black/50 backdrop-blur-md border border-white/10">
                <span className="text-[9px] sm:text-[10px] font-semibold text-white/70">{stats}</span>
              </div>
            )}
          </div>
        )}

        {/* Content Area */}
        <div className="relative p-4 sm:p-6 pt-4 sm:pt-5">
          {/* Shimmer sweep effect - only on desktop */}
          <div className="shimmer-sweep opacity-30 hidden md:block" />

          {/* Icon + Title row */}
          <div className="flex items-start gap-3 sm:gap-4 mb-3 sm:mb-4">
            {/* Icon Container */}
            <div
              className="relative flex-shrink-0 p-2.5 sm:p-3.5 rounded-xl sm:rounded-2xl transition-all duration-500 md:group-hover:scale-110 md:group-hover:rotate-3"
              style={{
                background: `linear-gradient(135deg, ${gradientStart}20, ${gradientEnd}10)`,
                border: `1px solid ${accentColor}30`,
                boxShadow: `0 0 30px ${accentColor}15, inset 0 1px 0 rgba(255,255,255,0.1)`
              }}
            >
              {/* Icon glow effect - desktop only */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 blur-xl hidden md:block"
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
              <h3 className="text-lg sm:text-xl md:text-2xl font-black text-white mb-1 tracking-tight md:group-hover:text-white transition-colors leading-tight">
                {title}
              </h3>
              {!coverImage && tag && (
                <span
                  className="inline-block px-2 py-0.5 sm:px-2.5 sm:py-1 text-[9px] sm:text-[10px] font-bold uppercase tracking-widest rounded-full"
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
          <p className="text-slate-400 text-sm leading-relaxed mb-4 sm:mb-6 md:group-hover:text-slate-300 transition-colors line-clamp-2">
            {description}
          </p>

          {/* Action Button */}
          <div
            className="
              relative flex items-center justify-between w-full px-4 py-3 sm:px-5 sm:py-3.5
              rounded-xl overflow-hidden 
              border transition-all duration-500
              md:group-hover:border-transparent
              active:opacity-80
            "
            style={{
              borderColor: `${accentColor}20`,
              background: `linear-gradient(90deg, ${accentColor}08, transparent)`
            }}
          >
            {/* Button background on hover - desktop only */}
            <div
              className="absolute inset-0 opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 hidden md:block"
              style={{
                background: `linear-gradient(90deg, ${gradientStart}, ${gradientEnd})`
              }}
            />

            <span
              className="relative z-10 text-xs sm:text-sm font-bold uppercase tracking-wider transition-colors duration-500"
              style={{ color: accentColor }}
            >
              <span className="md:group-hover:text-black transition-colors duration-500">
                Explorer
              </span>
            </span>

            <div className="relative z-10 flex items-center gap-2">
              <ArrowRight
                size={18}
                className="transition-all duration-500 md:group-hover:translate-x-1"
                style={{ color: accentColor }}
              />
            </div>
          </div>
        </div>

        {/* Decorative corner accent */}
        <div
          className="absolute bottom-0 right-0 w-24 sm:w-32 h-24 sm:h-32 opacity-20 transition-opacity duration-500 md:group-hover:opacity-40"
          style={{
            background: `radial-gradient(circle at 100% 100%, ${accentColor}40, transparent 70%)`
          }}
        />
      </motion.div>
    </Link>
  );
}

