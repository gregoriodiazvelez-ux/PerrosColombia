"use client";

import { TrendingUp, Search, Tag } from "lucide-react";
import { trendingNiches } from "../data/trends";

export default function TrendingNiches() {
  return (
    <section className="mb-10">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold text-white mb-1">
            Trending Niches
          </h2>
          <p className="text-gray-400 text-sm">
            Top performing categories for print-on-demand this week
          </p>
        </div>
        <div className="hidden md:flex items-center gap-2 text-xs text-gray-500 bg-gray-800/50 rounded-lg px-3 py-2 border border-gray-700/50">
          <div className="w-2 h-2 bg-emerald-400 rounded-full" />
          Updated hourly
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {trendingNiches.map((niche) => (
          <div
            key={niche.id}
            className="group relative rounded-2xl border border-gray-700/50 bg-gray-900/50 p-5 hover:border-gray-600 hover:bg-gray-800/60 transition-all duration-300 cursor-pointer overflow-hidden"
          >
            {/* Glow effect on hover */}
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-2xl"
              style={{ background: `radial-gradient(circle at center, ${niche.color}, transparent)` }}
            />

            {/* Top row */}
            <div className="flex items-start justify-between mb-4">
              <span className="text-3xl">{niche.icon}</span>
              <div className="flex items-center gap-1 bg-emerald-500/15 text-emerald-400 text-xs font-bold px-2.5 py-1 rounded-full border border-emerald-500/20">
                <TrendingUp className="w-3 h-3" />
                +{niche.growth}%
              </div>
            </div>

            {/* Name & category */}
            <h3 className="text-white font-semibold text-base mb-1 leading-tight">
              {niche.name}
            </h3>
            <span
              className="inline-block text-xs px-2 py-0.5 rounded-md mb-3 font-medium"
              style={{
                color: niche.color,
                backgroundColor: `${niche.color}15`,
              }}
            >
              {niche.category}
            </span>

            <p className="text-gray-400 text-xs leading-relaxed mb-4">
              {niche.description}
            </p>

            {/* Search volume */}
            <div className="flex items-center gap-1.5 text-gray-500 text-xs">
              <Search className="w-3 h-3" />
              <span>{niche.searches} monthly searches</span>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-1.5 mt-3">
              {niche.tags.slice(0, 2).map((tag) => (
                <span
                  key={tag}
                  className="flex items-center gap-1 text-xs text-gray-500 bg-gray-800 px-2 py-0.5 rounded-md border border-gray-700/50"
                >
                  <Tag className="w-2.5 h-2.5" />
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
