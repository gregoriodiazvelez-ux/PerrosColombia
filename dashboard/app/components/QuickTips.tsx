"use client";

import { Lightbulb, Target, Zap, DollarSign } from "lucide-react";

const tips = [
  {
    icon: Target,
    color: "text-violet-400",
    bg: "bg-violet-500/10 border-violet-500/20",
    title: "Niche Down to Win",
    body: "Instead of 'dog lover', target 'Australian Shepherd mom'. Hyper-specific niches have less competition and higher conversion rates.",
  },
  {
    icon: Zap,
    color: "text-amber-400",
    bg: "bg-amber-500/10 border-amber-500/20",
    title: "Ride Seasonal Trends",
    body: "Start uploading Halloween designs in July and Christmas in September. POD stores take time to index — get ahead of the season.",
  },
  {
    icon: DollarSign,
    color: "text-emerald-400",
    bg: "bg-emerald-500/10 border-emerald-500/20",
    title: "Bundle & Upsell",
    body: "Create matching sets (shirt + mug + tote) for the same design. Customers who buy one item in a niche often buy more.",
  },
  {
    icon: Lightbulb,
    color: "text-fuchsia-400",
    bg: "bg-fuchsia-500/10 border-fuchsia-500/20",
    title: "Test Before Scaling",
    body: "Upload 3-5 variations of a design (different colors, placements). Let data decide which converts, then scale the winner.",
  },
];

export default function QuickTips() {
  return (
    <section className="mb-10">
      <h2 className="text-xl font-bold text-white mb-4">POD Strategy Tips</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {tips.map((tip) => {
          const Icon = tip.icon;
          return (
            <div
              key={tip.title}
              className={`rounded-2xl border p-5 ${tip.bg}`}
            >
              <div className={`w-9 h-9 rounded-xl ${tip.bg} flex items-center justify-center mb-3 border ${tip.bg.split(" ")[1]}`}>
                <Icon className={`w-4 h-4 ${tip.color}`} />
              </div>
              <h4 className="text-white font-semibold text-sm mb-2">{tip.title}</h4>
              <p className="text-gray-400 text-xs leading-relaxed">{tip.body}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
