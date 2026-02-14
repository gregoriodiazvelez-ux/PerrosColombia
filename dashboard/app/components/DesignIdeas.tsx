"use client";

import { useState } from "react";
import { Flame, TrendingUp, Minus, Copy, Wand2 } from "lucide-react";
import { designIdeas } from "../data/trends";

const trendBadge = {
  hot: { icon: Flame, label: "Hot", color: "text-orange-400", bg: "bg-orange-500/15 border-orange-500/20" },
  rising: { icon: TrendingUp, label: "Rising", color: "text-emerald-400", bg: "bg-emerald-500/15 border-emerald-500/20" },
  stable: { icon: Minus, label: "Stable", color: "text-blue-400", bg: "bg-blue-500/15 border-blue-500/20" },
};

const filterOptions = ["All", "Cottagecore", "Cosmic", "Japanese Streetwear", "Retro Sports", "Mental Health", "Dark Academia"];

export default function DesignIdeas() {
  const [filter, setFilter] = useState("All");
  const [copied, setCopied] = useState<number | null>(null);

  const filtered = filter === "All" ? designIdeas : designIdeas.filter((d) => d.niche === filter);

  const handleCopy = (id: number, prompt: string) => {
    navigator.clipboard.writeText(prompt);
    setCopied(id);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <section className="mb-10">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-4">
        <div>
          <h2 className="text-2xl font-bold text-white mb-1">Design Ideas</h2>
          <p className="text-gray-400 text-sm">
            AI-generated prompts + curated t-shirt concepts ready to create
          </p>
        </div>
        <div className="flex items-center gap-1.5 bg-gray-900/70 border border-gray-700/50 rounded-xl p-1 flex-wrap">
          {filterOptions.slice(0, 4).map((opt) => (
            <button
              key={opt}
              onClick={() => setFilter(opt)}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                filter === opt
                  ? "bg-violet-600 text-white shadow-lg shadow-violet-500/20"
                  : "text-gray-400 hover:text-white hover:bg-gray-700/50"
              }`}
            >
              {opt}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {filtered.map((idea) => {
          const badge = trendBadge[idea.trend as keyof typeof trendBadge];
          const BadgeIcon = badge.icon;
          return (
            <div
              key={idea.id}
              className="group rounded-2xl border border-gray-700/50 bg-gray-900/50 overflow-hidden hover:border-violet-500/40 hover:shadow-lg hover:shadow-violet-500/10 transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden bg-gray-800">
                <img
                  src={idea.image}
                  alt={idea.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent" />

                {/* Trend badge */}
                <div className={`absolute top-3 right-3 flex items-center gap-1 text-xs font-bold px-2.5 py-1 rounded-full border ${badge.bg} ${badge.color}`}>
                  <BadgeIcon className="w-3 h-3" />
                  {badge.label}
                </div>

                {/* Niche tag */}
                <div className="absolute bottom-3 left-3 text-xs bg-black/60 backdrop-blur text-gray-200 px-2.5 py-1 rounded-lg">
                  {idea.niche}
                </div>
              </div>

              {/* Content */}
              <div className="p-4">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-white font-semibold text-sm leading-tight">
                    {idea.title}
                  </h3>
                  <span className="text-emerald-400 font-bold text-sm ml-2 shrink-0">
                    {idea.sellPrice}
                  </span>
                </div>

                <span className="inline-block text-xs text-gray-500 bg-gray-800/80 px-2 py-0.5 rounded mb-3 border border-gray-700/50">
                  {idea.style}
                </span>

                {/* AI Prompt */}
                <div className="bg-gray-800/60 rounded-xl p-3 border border-gray-700/40 mb-3">
                  <div className="flex items-center gap-1.5 mb-2">
                    <Wand2 className="w-3 h-3 text-violet-400" />
                    <span className="text-violet-400 text-xs font-semibold uppercase tracking-wide">AI Prompt</span>
                  </div>
                  <p className="text-gray-400 text-xs leading-relaxed line-clamp-3">
                    {idea.prompt}
                  </p>
                </div>

                {/* Color palette */}
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex gap-1">
                    {idea.colors.map((color) => (
                      <div
                        key={color}
                        className="w-5 h-5 rounded-full border-2 border-gray-700/50"
                        style={{ backgroundColor: color }}
                        title={color}
                      />
                    ))}
                  </div>
                  <span className="text-gray-600 text-xs">palette</span>
                </div>

                {/* Copy button */}
                <button
                  onClick={() => handleCopy(idea.id, idea.prompt)}
                  className="w-full flex items-center justify-center gap-2 bg-violet-600/20 hover:bg-violet-600/40 border border-violet-500/30 hover:border-violet-500/60 text-violet-300 text-sm font-medium py-2 rounded-xl transition-all duration-200"
                >
                  <Copy className="w-3.5 h-3.5" />
                  {copied === idea.id ? "Copied!" : "Copy Prompt"}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
