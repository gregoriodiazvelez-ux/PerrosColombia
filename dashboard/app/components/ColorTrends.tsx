"use client";

import { useState } from "react";
import { Palette, Check, Copy } from "lucide-react";
import { colorTrends } from "../data/trends";

export default function ColorTrends() {
  const [activeSeason, setActiveSeason] = useState(0);
  const [copied, setCopied] = useState<string | null>(null);

  const handleCopy = (hex: string) => {
    navigator.clipboard.writeText(hex);
    setCopied(hex);
    setTimeout(() => setCopied(null), 1500);
  };

  return (
    <div className="rounded-2xl border border-gray-700/50 bg-gray-900/50 p-6 mb-6">
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-br from-fuchsia-500 to-pink-600 rounded-lg flex items-center justify-center">
            <Palette className="w-4 h-4 text-white" />
          </div>
          <div>
            <h3 className="text-white font-bold text-lg">Color Trends 2025</h3>
            <p className="text-gray-500 text-xs">Pantone-inspired seasonal palettes</p>
          </div>
        </div>
        <div className="flex gap-2">
          {colorTrends.map((ct, i) => (
            <button
              key={ct.season}
              onClick={() => setActiveSeason(i)}
              className={`text-xs px-3 py-1.5 rounded-lg font-medium transition-all duration-200 ${
                activeSeason === i
                  ? "bg-fuchsia-600 text-white"
                  : "bg-gray-800 text-gray-400 hover:text-white border border-gray-700/50"
              }`}
            >
              {ct.season.split("/")[0]}
            </button>
          ))}
        </div>
      </div>

      <p className="text-gray-400 text-sm mb-4 font-medium">
        {colorTrends[activeSeason].season}
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
        {colorTrends[activeSeason].palettes.map((color) => (
          <div key={color.hex} className="group">
            <div
              className="relative h-24 rounded-xl mb-2.5 cursor-pointer overflow-hidden shadow-lg hover:scale-105 transition-transform duration-200"
              style={{ backgroundColor: color.hex }}
              onClick={() => handleCopy(color.hex)}
            >
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-200 flex items-center justify-center opacity-0 group-hover:opacity-100">
                {copied === color.hex ? (
                  <Check className="w-5 h-5 text-white drop-shadow" />
                ) : (
                  <Copy className="w-4 h-4 text-white drop-shadow" />
                )}
              </div>
            </div>
            <p className="text-white text-xs font-semibold leading-tight mb-0.5">
              {color.name}
            </p>
            <p className="text-gray-500 text-xs font-mono">{color.hex}</p>
            <p className="text-gray-600 text-xs">P {color.pantone}</p>
          </div>
        ))}
      </div>

      {/* Usage tips */}
      <div className="mt-5 pt-5 border-t border-gray-700/50 grid grid-cols-1 sm:grid-cols-3 gap-3">
        <div className="bg-gray-800/40 rounded-xl p-3 border border-gray-700/30">
          <p className="text-xs font-semibold text-gray-300 mb-1">Background Color</p>
          <p className="text-xs text-gray-500">Use soft neutrals for garment base colors</p>
        </div>
        <div className="bg-gray-800/40 rounded-xl p-3 border border-gray-700/30">
          <p className="text-xs font-semibold text-gray-300 mb-1">Accent Color</p>
          <p className="text-xs text-gray-500">Pop one bold color to make designs stand out</p>
        </div>
        <div className="bg-gray-800/40 rounded-xl p-3 border border-gray-700/30">
          <p className="text-xs font-semibold text-gray-300 mb-1">Typography</p>
          <p className="text-xs text-gray-500">High contrast text for readability on any garment</p>
        </div>
      </div>
    </div>
  );
}
