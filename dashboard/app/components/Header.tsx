"use client";

import { TrendingUp, Shirt, Sparkles } from "lucide-react";

export default function Header() {
  return (
    <header className="relative overflow-hidden bg-gradient-to-r from-violet-950 via-purple-900 to-fuchsia-950 border-b border-purple-700/30">
      {/* Animated background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-purple-500 rounded-full opacity-10 blur-3xl animate-pulse" />
        <div className="absolute -top-12 right-1/4 w-64 h-64 bg-fuchsia-500 rounded-full opacity-10 blur-3xl animate-pulse delay-700" />
        <div className="absolute top-0 -right-12 w-80 h-80 bg-violet-400 rounded-full opacity-10 blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className="w-10 h-10 bg-gradient-to-br from-fuchsia-500 to-violet-600 rounded-xl flex items-center justify-center shadow-lg shadow-fuchsia-500/30">
              <Shirt className="w-5 h-5 text-white" />
            </div>
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
              <Sparkles className="w-2.5 h-2.5 text-white" />
            </div>
          </div>
          <div>
            <h1 className="text-white font-bold text-xl tracking-tight">
              TrendPrint<span className="text-fuchsia-400">AI</span>
            </h1>
            <p className="text-purple-300 text-xs">Print on Demand Intelligence</p>
          </div>
        </div>

        {/* Center title */}
        <div className="hidden md:block text-center">
          <p className="text-purple-200/60 text-sm font-medium uppercase tracking-widest">
            Trend Dashboard
          </p>
        </div>

        {/* Live indicator */}
        <div className="flex items-center gap-2 bg-white/5 backdrop-blur border border-white/10 rounded-full px-4 py-2">
          <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
          <span className="text-emerald-300 text-sm font-medium">Live Trends</span>
          <TrendingUp className="w-4 h-4 text-emerald-400" />
        </div>
      </div>
    </header>
  );
}
